/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const constants = require('../constants');
const LinkedDataSignature2015 = require('./LinkedDataSignature2015');

module.exports = class GraphSignature2012 extends LinkedDataSignature2015 {
  constructor(injector) {
    let algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphSignature2012';

    super(injector, algorithm);
  }

  canonize(input, options) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const jsonld = _this.injector.use('jsonld');
      return jsonld.canonize(input, {
        algorithm: 'URGNA2012',
        format: 'application/nquads',
        expansionMap: options.expansionMap
      });
    })();
  }

  createVerifyData(input, options) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      // TODO: frame before getting signature, not just compact? considerations:
      // should the assumption be (for this library) that the signature is on
      // the top-level object and thus framing is unnecessary?

      const jsonld = _this2.injector.use('jsonld');
      const compacted = yield jsonld.compact(input, constants.SECURITY_CONTEXT_URL, { expansionMap: options.expansionMap });

      // TODO: will need to preserve `signature` when chained signature
      // option is set in the future

      // delete the existing signature(s) prior to canonicalization
      delete compacted.signature;

      const c14n = yield _this2.canonize(compacted, options);

      let verifyData = '';
      if (options.nonce !== null && options.nonce !== undefined) {
        verifyData += options.nonce;
      }
      verifyData += options.date;
      verifyData += c14n;
      if (options.domain !== null && options.domain !== undefined) {
        verifyData += '@' + options.domain;
      }
      return verifyData;
    })();
  }
};