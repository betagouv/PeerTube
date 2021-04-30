/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const LinkedDataSignature2015 = require('./LinkedDataSignature2015');

module.exports = class EcdsaKoblitzSignature2016 extends LinkedDataSignature2015 {
  constructor(injector) {
    let algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'EcdsaKoblitzSignature2016';

    super(injector, algorithm);
  }

  createSignatureValue(verifyData, options) {
    var _this = this;

    return _asyncToGenerator(function* () {
      if (typeof options.privateKeyWif !== 'string') {
        throw new TypeError('"options.privateKeyWif" must be a base 58 formatted string.');
      }

      const bitcoreMessage = _this.injector.use('bitcoreMessage');
      const bitcore = bitcoreMessage.Bitcore;
      const privateKey = bitcore.PrivateKey.fromWIF(options.privateKeyWif);
      const message = bitcoreMessage(verifyData);
      return message.sign(privateKey);
    })();
  }

  verifySignatureNode(verifyData, signature, options) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const publicKeyWif = options.publicKey.publicKeyWif;
      if (typeof publicKeyWif !== 'string') {
        throw new TypeError('Could not verify signature; invalid "publicKeyWif".');
      }

      const bitcoreMessage = _this2.injector.use('bitcoreMessage');
      const message = bitcoreMessage(verifyData);
      return message.verify(options.publicKey.publicKeyWif, signature.signatureValue);
    })();
  }
};