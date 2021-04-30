/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const constants = require('../constants');
const util = require('../util');
const Helper = require('../Helper');

module.exports = class LinkedDataSignature {
  constructor(injector, algorithm) {
    this.injector = injector;
    this.algorithm = algorithm;
    this.helper = new Helper(injector);
  }

  canonize(input, options) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const jsonld = _this.injector.use('jsonld');
      return jsonld.canonize(input, {
        algorithm: 'URDNA2015',
        format: 'application/nquads',
        expansionMap: options.expansionMap
      });
    })();
  }

  createVerifyData(input, options) {
    return _asyncToGenerator(function* () {
      // TODO: implement according to Linked Data Signatures 1.0 spec
      throw new Error('Not implemented.');
    })();
  }

  digest() {
    return _asyncToGenerator(function* () {
      // TODO: implement according to Linked Data Signatures 1.0 spec
      throw new Error('Not implemented.');
    })();
  }

  sign(input, options) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      // set default options
      options = Object.assign({
        date: new Date()
      }, options || {});

      // validate common options
      if (typeof options.creator !== 'string') {
        throw new TypeError('"options.creator" must be a URL string.');
      }
      if ('domain' in options && typeof options.domain !== 'string') {
        throw new TypeError('"options.domain" must be a string.');
      }
      if ('nonce' in options && typeof options.nonce !== 'string') {
        throw new TypeError('"options.nonce" must be a string.');
      }

      // ensure date is in string format
      if (typeof date !== 'string') {
        // TODO: parse non-string date and force to w3c format?
        options.date = util.w3cDate(options.date);
      }

      // disallow dropping properties when expanding by default
      if (options.expansionMap !== false) {
        options.expansionMap = function (info) {
          if (info.unmappedProperty) {
            throw new Error('The property "' + info.unmappedProperty + '" in the input ' + 'was not defined in the context.');
          }
        };
      }

      // produce data to sign
      const verifyData = yield _this2.createVerifyData(input, options);

      // create signature node
      const signatureNode = yield _this2.createSignatureNode(verifyData, options);

      // compact signature node to match input context
      const tmp = {
        'https://w3id.org/security#signature': signatureNode
      };
      const jsonld = _this2.injector.use('jsonld');
      const ctx = jsonld.getValues(input, '@context');
      const compactSignatureNode = yield jsonld.compact(tmp, ctx);

      // TODO: it is unclear how the signature would be easily added without
      // reshaping the input... so perhaps this library should just require
      // the caller to accept that the signature will be added to the top
      // level of the input

      // attach signature node to cloned input and return it
      const output = util.deepClone(input);
      delete compactSignatureNode['@context'];
      const signatureKey = Object.keys(compactSignatureNode)[0];
      jsonld.addValue(output, signatureKey, compactSignatureNode[signatureKey]);
      return output;
    })();
  }

  createSignatureNode(verifyData, options) {
    return _asyncToGenerator(function* () {
      // TODO: implement according to Linked Data Signatures 1.0 spec
      throw new Error('Not implemented');
    })();
  }

  verify(framed, options) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      options = Object.assign({}, options || {});

      const signature = framed.signature;

      // destructure options
      var _options = options,
          _options$maxTimestamp = _options.maxTimestampDelta;
      let maxTimestampDelta = _options$maxTimestamp === undefined ? 15 * 60 : _options$maxTimestamp;
      var _options$checkNonce = _options.checkNonce;
      let checkNonce = _options$checkNonce === undefined ? function () {
        return signature.nonce === null || signature.nonce === undefined;
      } : _options$checkNonce;
      var _options$checkDomain = _options.checkDomain;
      let checkDomain = _options$checkDomain === undefined ? function () {
        return signature.domain === null || signature.domain === undefined;
      } : _options$checkDomain;
      var _options$checkTimesta = _options.checkTimestamp;
      let checkTimestamp = _options$checkTimesta === undefined ? function () {
        const now = Date.now();
        const delta = maxTimestampDelta * 1000;
        const created = Date.parse(signature.created);
        if (created < now - delta || created > now + delta) {
          throw new Error('The digital signature timestamp is out of range.');
        }
        return true;
      } : _options$checkTimesta;
      var _options$checkKey = _options.checkKey;
      let checkKey = _options$checkKey === undefined ? _this3.helper.checkKey.bind(_this3.helper) : _options$checkKey;
      var _options$publicKey = _options.publicKey;
      let getPublicKey = _options$publicKey === undefined ? _this3.helper.getPublicKey.bind(_this3.helper) : _options$publicKey;

      // normalize function options

      if (checkNonce === false) {
        // not checking nonce, so return true
        checkNonce = function () {
          return true;
        };
      }
      if (checkDomain === false) {
        // not checking domain, so return true
        checkDomain = function () {
          return true;
        };
      }
      if (checkTimestamp === false) {
        // not checking timestamp, so return true
        checkTimestamp = function () {
          return true;
        };
      }
      if (typeof getPublicKey !== 'function') {
        const key = getPublicKey;
        getPublicKey = function (keyId) {
          if (keyId !== key.id) {
            throw new Error('Public key not found.');
          }
          return key;
        };
      }
      checkNonce = util.normalizeAsyncFn(checkNonce, 2);
      checkDomain = util.normalizeAsyncFn(checkDomain, 2);
      checkTimestamp = util.normalizeAsyncFn(checkTimestamp, 2);
      checkKey = util.normalizeAsyncFn(checkKey, 2);
      getPublicKey = util.normalizeAsyncFn(getPublicKey, 2);

      // run nonce, domain, and timestamp checks in parallel
      const checks = yield Promise.all([checkNonce(signature.nonce, options), checkDomain(signature.domain, options), checkTimestamp(signature.date, options)]);

      if (!checks[0]) {
        throw new Error('The nonce is invalid.');
      }
      if (!checks[1]) {
        throw new Error('The domain is invalid.');
      }
      if (!checks[2]) {
        throw new Error('The timestamp is invalid.');
      }

      // get public key
      const publicKey = yield getPublicKey(signature.creator, options);

      // TODO: should be able to override revocation check to ensure that
      // signatures made prior to the revocation check could potentially still
      // be verified

      // ensure key is not revoked
      if ('revoked' in publicKey) {
        throw new Error('The document was signed with a key that has been revoked.');
      }

      // ensure key is trusted before proceeding
      const isKeyTrusted = yield checkKey(publicKey, options);
      if (!isKeyTrusted) {
        throw new Error('The document was not signed with a trusted key.');
      }

      // verify input
      const verifyData = yield _this3.createVerifyData(framed, Object.assign({}, options, {
        date: signature.created,
        nonce: signature.nonce,
        domain: signature.domain
      }));

      return yield _this3.verifySignatureNode(verifyData, signature, Object.assign({}, options, { publicKey: publicKey }));
    })();
  }
};