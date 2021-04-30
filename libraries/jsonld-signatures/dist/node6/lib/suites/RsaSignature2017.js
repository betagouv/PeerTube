/**
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const LinkedDataSignature2015 = require('./LinkedDataSignature2015');
const util = require('../util');

module.exports = class RsaSignature2017 extends LinkedDataSignature2015 {
  constructor(injector) {
    let algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'RsaSignature2017';

    super(injector, algorithm);
  }

  createSignatureValue(verifyData, options) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const jws = _this.injector.use('jws');
      const fullSignature = jws.sign({
        header: {
          alg: 'RS256',
          b64: false,
          crit: ['b64']
        },
        privateKey: options.privateKeyPem,
        payload: verifyData
      });
      // detached content signature
      const parts = fullSignature.split('.');
      parts[1] = '';
      const detachedSignature = parts.join('.');
      return detachedSignature;
    })();
  }

  verifySignatureNode(verifyData, signature, options) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const jws = _this2.injector.use('jws');
      const forge = _this2.injector.use('forge');
      // rebuild detached content signature
      const parts = signature.signatureValue.split('.');
      parts[1] = util.encodeBase64Url(verifyData, { forge });
      const fullSignature = parts.join('.');
      const verified = jws.verify(fullSignature, 'RS256', options.publicKey.publicKeyPem);
      return verified;
    })();
  }
};