/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const constants = require('./constants');
const util = require('./util');

module.exports = class Helper {
  constructor(injector) {
    this.injector = injector;
  }

  /**
   * Gets a remote public key.
   *
   * @param id the ID for the public key.
   * @param [options] the options to use:
   *          [documentLoader(url, callback(err, remoteDoc))] the document
   *            loader.
   *
   * @return a Promise that resolves to a framed JSON-LD public key.
   */
  getPublicKey(id, options) {
    var _this = this;

    return _asyncToGenerator(function* () {
      options = options || {};

      const key = yield _this.getJsonLd(id, options);

      // frame key to validate it
      const frame = {
        '@context': constants.SECURITY_CONTEXT_URL,
        type: 'CryptographicKey',
        owner: { '@embed': '@never' }
      };
      const jsonld = _this.injector.use('jsonld');
      const framed = yield jsonld.frame(key, frame);

      // FIXME: improve validation
      if (!framed['@graph'][0]) {
        throw new Error('The public key is not a CryptographicKey.');
      }
      // FIXME: other key formats are acceptable, no?
      if (!('publicKeyPem' in framed['@graph'][0])) {
        throw new Error('Could not get public key. Unknown format.');
      }
      framed['@graph'][0]['@context'] = framed['@context'];
      return framed['@graph'][0];
    })();
  }

  /**
   * Checks to see if the given key is trusted.
   *
   * @param key the public key to check.
   * @param [options] the options to use:
   *          [publicKeyOwner] the JSON-LD document describing the public key
   *            owner.
   *          [checkKeyOwner(owner, key)] a custom method to return whether
   *            or not the key owner is trusted.
   *          [documentLoader(url, callback(err, remoteDoc))] the document
   *            loader.
   *
   * @return a Promise that resolves to true if the key is trusted.
   */
  checkKey(key, options) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      if (!(key && typeof key === 'object')) {
        throw new TypeError('"key" must be an object.');
      }

      options = options || {};

      var _options = options,
          _options$checkKeyOwne = _options.checkKeyOwner;
      let checkKeyOwner = _options$checkKeyOwne === undefined ? function () {
        return true;
      } : _options$checkKeyOwne;
      var _options$publicKeyOwn = _options.publicKeyOwner;
      let getPublicKeyOwner = _options$publicKeyOwn === undefined ? _this2.getJsonLd.bind(_this2) : _options$publicKeyOwn;


      if (typeof getPublicKeyOwner !== 'function') {
        const owner = getPublicKeyOwner;
        getPublicKeyOwner = function (ownerId) {
          if (ownerId !== owner.id) {
            throw new Error('Public key owner not found.');
          }
          return owner;
        };
      }
      checkKeyOwner = util.normalizeAsyncFn(checkKeyOwner, 3);
      getPublicKeyOwner = util.normalizeAsyncFn(getPublicKeyOwner, 2);

      // get framed key
      const framedKey = yield _this2._frameKey(key);

      // get framed owners
      const owners = yield getPublicKeyOwner(framedKey.owner, options);
      const framedOwners = yield _this2._frameKeyOwners(owners);

      // find specific owner of key
      let owner;
      const jsonld = _this2.injector.use('jsonld');
      for (let i = 0; i < framedOwners.length; ++i) {
        if (jsonld.hasValue(framedOwners[i], 'publicKey', framedKey.id) || jsonld.hasValue(framedOwners[i], 'authenticationCredential', framedKey.id)) {
          owner = framedOwners[i];
          break;
        }
      }
      if (!owner) {
        throw new Error('The public key is not owned by its declared owner.');
      }

      const isOwnerTrusted = checkKeyOwner(owner, key, options);
      if (!isOwnerTrusted) {
        throw new Error('The owner of the public key is not trusted.');
      }

      return true;
    })();
  }

  /**
   * Retrieves a JSON-LD document over HTTP. To implement caching, override
   * this method.
   *
   * @param url the URL to HTTP GET.
   * @param [options] the options to use.
   *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
   *
   * @return a Promise that resolves to the JSON-LD document.
   */
  getJsonLd(url, options) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      options = options || {};

      const jsonld = _this3.injector.use('jsonld');
      const remoteDoc = yield jsonld.get(url, options);

      // compact w/context URL from link header
      if (remoteDoc.contextUrl) {
        return jsonld.compact(remoteDoc.document, remoteDoc.contextUrl, { expandContext: remoteDoc.contextUrl });
      }

      return remoteDoc.document;
    })();
  }

  _frameKey(key) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      const frame = {
        '@context': constants.SECURITY_CONTEXT_URL,
        type: 'CryptographicKey',
        owner: { '@embed': '@never' }
      };
      const jsonld = _this4.injector.use('jsonld');
      const framed = yield jsonld.frame(key, frame);

      if (!framed['@graph'][0]) {
        throw new Error('The public key is not a CryptographicKey.');
      }
      if (!framed['@graph'][0].owner) {
        throw new Error('The public key has no specified owner.');
      }
      framed['@graph'][0]['@context'] = framed['@context'];
      return framed['@graph'][0];
    })();
  }

  _frameKeyOwners(owners) {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      const frame = {
        '@context': constants.SECURITY_CONTEXT_URL,
        '@requireAll': false,
        publicKey: { '@embed': '@never' },
        authenticationCredential: { '@embed': '@never' }
      };
      const jsonld = _this5.injector.use('jsonld');
      const framed = yield jsonld.frame(owners, frame);
      return framed['@graph'];
    })();
  }
};