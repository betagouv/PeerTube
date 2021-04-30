/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const constants = require('../constants');
const LinkedDataSignature = require('./LinkedDataSignature');

module.exports = class LinkedDataSignature2015 extends LinkedDataSignature {
  constructor(injector) {
    let algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'LinkedDataSignature2015';

    super(injector, algorithm);
  }

  createSignatureNode(verifyData, options) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const signatureValue = yield _this.createSignatureValue(verifyData, options);

      // create signature node
      const signature = {
        '@context': constants.SECURITY_CONTEXT_URL,
        type: _this.algorithm,
        creator: options.creator,
        created: options.date,
        signatureValue: signatureValue
      };
      if ('domain' in options) {
        signature.domain = options.domain;
      }
      if ('nonce' in options) {
        signature.nonce = options.nonce;
      }
      return signature;
    })();
  }

  createSignatureValue(verifyData, options) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      // TODO: support `sign` function via options instead of `privateKeyPem`
      if (typeof options.privateKeyPem !== 'string') {
        throw new TypeError('"options.privateKeyPem" must be a PEM formatted string.');
      }

      if (_this2.injector.env.nodejs) {
        // optimize using node libraries
        const crypto = _this2.injector.use('crypto');
        const signer = crypto.createSign('RSA-SHA256');
        signer.update(verifyData, 'utf8');
        return signer.sign(options.privateKeyPem, 'base64');
      }

      // browser or other environment
      const forge = _this2.injector.use('forge');
      const privateKey = forge.pki.privateKeyFromPem(options.privateKeyPem);
      var md = forge.md.sha256.create();
      md.update(verifyData, 'utf8');
      return forge.util.encode64(privateKey.sign(md));
    })();
  }

  createVerifyData(input, options) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      // TODO: frame before getting signature, not just compact? considerations:
      // should the assumption be (for this library) that the signature is on
      // the top-level object and thus framing is unnecessary?

      const jsonld = _this3.injector.use('jsonld');
      const compacted = yield jsonld.compact(input, constants.SECURITY_CONTEXT_URL, { expansionMap: options.expansionMap });

      // TODO: will need to preserve `signature` when chained signature
      // option is used and implemented in the future

      // delete the existing signature(s) prior to canonicalization
      delete compacted.signature;

      const c14n = yield _this3.canonize(compacted, options);

      let verifyData = '';
      const headers = {
        'http://purl.org/dc/elements/1.1/created': options.date,
        'https://w3id.org/security#domain': options.domain,
        'https://w3id.org/security#nonce': options.nonce
      };
      // add headers in lexicographical order
      const keys = Object.keys(headers).sort();
      for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
        const value = headers[key];
        if (!(value === null || value === undefined)) {
          verifyData += key + ': ' + value + '\n';
        }
      }
      verifyData += c14n;
      return verifyData;
    })();
  }

  verifySignatureNode(verifyData, signature, options) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      const publicKeyPem = options.publicKey.publicKeyPem;
      if (typeof publicKeyPem !== 'string') {
        throw new TypeError('Could not verify signature; invalid "publicKeyPem".');
      }

      if (_this4.injector.env.nodejs) {
        // optimize using node libraries
        const crypto = _this4.injector.use('crypto');
        const verifier = crypto.createVerify('RSA-SHA256');
        verifier.update(verifyData, 'utf8');
        return verifier.verify(publicKeyPem, signature.signatureValue, 'base64');
      }

      // browser or other environment
      const forge = _this4.injector.use('forge');
      const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
      const md = forge.md.sha256.create();
      md.update(verifyData, 'utf8');
      return publicKey.verify(md.digest().bytes(), forge.util.decode64(signature.signatureValue));
    })();
  }
};