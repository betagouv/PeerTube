(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsonld-signatures"] = factory();
	else
		root["jsonld-signatures"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(27)('wks');
var uid = __webpack_require__(19);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(29);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var has = __webpack_require__(8);
var SRC = __webpack_require__(19)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(4).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(28)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


module.exports = {
  SECURITY_CONTEXT_URL: ['https://w3id.org/security/v1', { RsaSignature2017: 'https://w3id.org/security#RsaSignature2017' }]
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(2);
var IE8_DOM_DEFINE = __webpack_require__(46);
var toPrimitive = __webpack_require__(47);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(4);
var hide = __webpack_require__(3);
var redefine = __webpack_require__(5);
var ctx = __webpack_require__(14);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(15);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var api = {};
module.exports = api;

// define setImmediate and nextTick
//// nextTick implementation with browser-compatible fallback ////
// from https://github.com/caolan/async/blob/master/lib/async.js

// capture the global reference to guard against fakeTimer mocks
var _setImmediate = typeof setImmediate === 'function' && setImmediate;

var _delay = _setImmediate ?
// not a direct alias (for IE10 compatibility)
function (fn) {
  return _setImmediate(fn);
} : function (fn) {
  return setTimeout(fn, 0);
};

if ((typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && typeof process.nextTick === 'function') {
  api.nextTick = process.nextTick;
} else {
  api.nextTick = _delay;
}
api.setImmediate = _setImmediate ? _delay : api.nextTick;

/**
 * Clones a value. If the value is an array or an object it will be deep cloned.
 *
 * @param value the value to clone.
 *
 * @return the cloned value.
 */
api.deepClone = function (value) {
  if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var rval = void 0;
    if (Array.isArray(value)) {
      rval = new Array(value.length);
      for (var i = 0; i < rval.length; ++i) {
        rval[i] = api.deepClone(value[i]);
      }
    } else {
      rval = {};
      for (var j in value) {
        rval[j] = api.deepClone(value[j]);
      }
    }
    return rval;
  }
  return value;
};

/**
 * Converts the given date into W3C datetime format (eg: 2011-03-09T21:55:41Z).
 *
 * @param date the date to convert.
 *
 * @return the date in W3C datetime format.
 */
api.w3cDate = function (date) {
  if (date === undefined || date === null) {
    date = new Date();
  } else if (typeof date === 'number' || typeof date === 'string') {
    date = new Date(date);
  }

  return date.getUTCFullYear() + '-' + _zeroFill(date.getUTCMonth() + 1) + '-' + _zeroFill(date.getUTCDate()) + 'T' + _zeroFill(date.getUTCHours()) + ':' + _zeroFill(date.getUTCMinutes()) + ':' + _zeroFill(date.getUTCSeconds()) + 'Z';
};

api.callbackify = function (fn) {
  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var callback, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            callback = args[args.length - 1];

            if (typeof callback === 'function') {
              args.pop();
            }

            result = void 0;
            _context.prev = 3;
            _context.next = 6;
            return fn.apply(null, args);

          case 6:
            result = _context.sent;
            _context.next = 14;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](3);

            if (!(typeof callback === 'function')) {
              _context.next = 13;
              break;
            }

            return _context.abrupt('return', _invokeCallback(callback, _context.t0));

          case 13:
            throw _context.t0;

          case 14:
            if (!(typeof callback === 'function')) {
              _context.next = 16;
              break;
            }

            return _context.abrupt('return', _invokeCallback(callback, null, result));

          case 16:
            return _context.abrupt('return', result);

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 9]]);
  }));
};

api.normalizeAsyncFn = function (fn, promiseFnLength) {
  // ensure promise-based function can be called with a callback
  if (fn.length <= promiseFnLength) {
    return api.callbackify(fn);
  }

  // ensure callback-based function will return a Promise
  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var callback,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            callback = _args2[promiseFnLength];

            if (typeof callback === 'function') {
              args.pop();
            }
            return _context2.abrupt('return', new Promise(function (resolve, reject) {
              args.push(function (err, result) {
                if (typeof callback === 'function') {
                  return _invokeCallback(callback, err, result);
                } else if (err) {
                  reject(err);
                } else {
                  resolve(result);
                }
              });
              try {
                fn.apply(null, args);
              } catch (e) {
                if (typeof callback === 'function') {
                  return _invokeCallback(callback, e);
                }
                reject(e);
              }
            }));

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
};

function _invokeCallback(callback, err, result) {
  // execute on next tick to prevent "unhandled rejected promise"
  // and simulate what would have happened in a promiseless API
  api.nextTick(function () {
    return callback(err, result);
  });
}

function _zeroFill(num) {
  return num < 10 ? '0' + num : '' + num;
}

/**
 * Encodes input according to the "Base64url Encoding" format as specified
 * in JSON Web Signature (JWS) RFC7517. A URL safe character set is used and
 * trailing '=', line breaks, whitespace, and other characters are omitted.
 *
 * @param input the data to encode.
 * @param options
 *          forge: forge library.
 *
 * @return the encoded value.
 */
api.encodeBase64Url = function (input, _ref3) {
  var forge = _ref3.forge;

  var enc = forge.util.encode64(input);
  return enc.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
};

/**
 * Decodes input according to the "Base64url Encoding" format as specified
 * in JSON Web Signature (JWS) RFC7517. A URL safe character set is used and
 * trailing '=', line breaks, whitespace, and other characters are omitted.
 *
 * @param input the data to decode.
 * @param options
 *          forge: forge library.
 *
 * @return the decoded value.
 */
api.decodeBase64Url = function (input, _ref4) {
  var forge = _ref4.forge;

  var normalInput = input.replace(/-/g, '+').replace(/_/g, '/');
  var mod4 = normalInput.length % 4;
  if (mod4 === 0) {
    // pass
  } else if (mod4 === 2) {
    normalInput = normalInput + '==';
  } else if (mod4 === 3) {
    normalInput = normalInput + '=';
  } else {
    throw new Error('Illegal base64 string.');
  }
  return forge.util.decode64(normalInput);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var constants = __webpack_require__(10);
var LinkedDataSignature = __webpack_require__(40);

module.exports = function (_LinkedDataSignature) {
  _inherits(LinkedDataSignature2015, _LinkedDataSignature);

  function LinkedDataSignature2015(injector) {
    var algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'LinkedDataSignature2015';

    _classCallCheck(this, LinkedDataSignature2015);

    return _possibleConstructorReturn(this, (LinkedDataSignature2015.__proto__ || Object.getPrototypeOf(LinkedDataSignature2015)).call(this, injector, algorithm));
  }

  _createClass(LinkedDataSignature2015, [{
    key: 'createSignatureNode',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(verifyData, options) {
        var signatureValue, signature;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.createSignatureValue(verifyData, options);

              case 2:
                signatureValue = _context.sent;


                // create signature node
                signature = {
                  '@context': constants.SECURITY_CONTEXT_URL,
                  type: this.algorithm,
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
                return _context.abrupt('return', signature);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createSignatureNode(_x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return createSignatureNode;
    }()
  }, {
    key: 'createSignatureValue',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(verifyData, options) {
        var crypto, signer, forge, privateKey, md;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof options.privateKeyPem !== 'string')) {
                  _context2.next = 2;
                  break;
                }

                throw new TypeError('"options.privateKeyPem" must be a PEM formatted string.');

              case 2:
                if (!this.injector.env.nodejs) {
                  _context2.next = 7;
                  break;
                }

                // optimize using node libraries
                crypto = this.injector.use('crypto');
                signer = crypto.createSign('RSA-SHA256');

                signer.update(verifyData, 'utf8');
                return _context2.abrupt('return', signer.sign(options.privateKeyPem, 'base64'));

              case 7:

                // browser or other environment
                forge = this.injector.use('forge');
                privateKey = forge.pki.privateKeyFromPem(options.privateKeyPem);
                md = forge.md.sha256.create();

                md.update(verifyData, 'utf8');
                return _context2.abrupt('return', forge.util.encode64(privateKey.sign(md)));

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createSignatureValue(_x4, _x5) {
        return _ref2.apply(this, arguments);
      }

      return createSignatureValue;
    }()
  }, {
    key: 'createVerifyData',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(input, options) {
        var jsonld, compacted, c14n, verifyData, headers, keys, i, key, value;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // TODO: frame before getting signature, not just compact? considerations:
                // should the assumption be (for this library) that the signature is on
                // the top-level object and thus framing is unnecessary?

                jsonld = this.injector.use('jsonld');
                _context3.next = 3;
                return jsonld.compact(input, constants.SECURITY_CONTEXT_URL, { expansionMap: options.expansionMap });

              case 3:
                compacted = _context3.sent;


                // TODO: will need to preserve `signature` when chained signature
                // option is used and implemented in the future

                // delete the existing signature(s) prior to canonicalization
                delete compacted.signature;

                _context3.next = 7;
                return this.canonize(compacted, options);

              case 7:
                c14n = _context3.sent;
                verifyData = '';
                headers = {
                  'http://purl.org/dc/elements/1.1/created': options.date,
                  'https://w3id.org/security#domain': options.domain,
                  'https://w3id.org/security#nonce': options.nonce
                };
                // add headers in lexicographical order

                keys = Object.keys(headers).sort();

                for (i = 0; i < keys.length; ++i) {
                  key = keys[i];
                  value = headers[key];

                  if (!(value === null || value === undefined)) {
                    verifyData += key + ': ' + value + '\n';
                  }
                }
                verifyData += c14n;
                return _context3.abrupt('return', verifyData);

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function createVerifyData(_x6, _x7) {
        return _ref3.apply(this, arguments);
      }

      return createVerifyData;
    }()
  }, {
    key: 'verifySignatureNode',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(verifyData, signature, options) {
        var publicKeyPem, crypto, verifier, forge, publicKey, md;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                publicKeyPem = options.publicKey.publicKeyPem;

                if (!(typeof publicKeyPem !== 'string')) {
                  _context4.next = 3;
                  break;
                }

                throw new TypeError('Could not verify signature; invalid "publicKeyPem".');

              case 3:
                if (!this.injector.env.nodejs) {
                  _context4.next = 8;
                  break;
                }

                // optimize using node libraries
                crypto = this.injector.use('crypto');
                verifier = crypto.createVerify('RSA-SHA256');

                verifier.update(verifyData, 'utf8');
                return _context4.abrupt('return', verifier.verify(publicKeyPem, signature.signatureValue, 'base64'));

              case 8:

                // browser or other environment
                forge = this.injector.use('forge');
                publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
                md = forge.md.sha256.create();

                md.update(verifyData, 'utf8');
                return _context4.abrupt('return', publicKey.verify(md.digest().bytes(), forge.util.decode64(signature.signatureValue)));

              case 13:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function verifySignatureNode(_x8, _x9, _x10) {
        return _ref4.apply(this, arguments);
      }

      return verifySignatureNode;
    }()
  }]);

  return LinkedDataSignature2015;
}(LinkedDataSignature);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(11);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54);
var defined = __webpack_require__(22);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(27)('keys');
var uid = __webpack_require__(19);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;
var has = __webpack_require__(8);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(15);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(5);
var hide = __webpack_require__(3);
var has = __webpack_require__(8);
var Iterators = __webpack_require__(9);
var $iterCreate = __webpack_require__(50);
var setToStringTag = __webpack_require__(25);
var getPrototypeOf = __webpack_require__(57);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(53);
var enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(21);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(2);
var aFunction = __webpack_require__(15);
var SPECIES = __webpack_require__(0)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var invoke = __webpack_require__(69);
var html = __webpack_require__(35);
var cel = __webpack_require__(20);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(11)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(2);
var isObject = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(26);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = __webpack_require__(10);
var util = __webpack_require__(16);
var Helper = __webpack_require__(41);

module.exports = function () {
  function LinkedDataSignature(injector, algorithm) {
    _classCallCheck(this, LinkedDataSignature);

    this.injector = injector;
    this.algorithm = algorithm;
    this.helper = new Helper(injector);
  }

  _createClass(LinkedDataSignature, [{
    key: 'canonize',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(input, options) {
        var jsonld;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                jsonld = this.injector.use('jsonld');
                return _context.abrupt('return', jsonld.canonize(input, {
                  algorithm: 'URDNA2015',
                  format: 'application/nquads',
                  expansionMap: options.expansionMap
                }));

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function canonize(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return canonize;
    }()
  }, {
    key: 'createVerifyData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(input, options) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                throw new Error('Not implemented.');

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createVerifyData(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return createVerifyData;
    }()
  }, {
    key: 'digest',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                throw new Error('Not implemented.');

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function digest() {
        return _ref3.apply(this, arguments);
      }

      return digest;
    }()
  }, {
    key: 'sign',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(input, options) {
        var verifyData, signatureNode, tmp, jsonld, ctx, compactSignatureNode, output, signatureKey;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // set default options
                options = Object.assign({
                  date: new Date()
                }, options || {});

                // validate common options

                if (!(typeof options.creator !== 'string')) {
                  _context4.next = 3;
                  break;
                }

                throw new TypeError('"options.creator" must be a URL string.');

              case 3:
                if (!('domain' in options && typeof options.domain !== 'string')) {
                  _context4.next = 5;
                  break;
                }

                throw new TypeError('"options.domain" must be a string.');

              case 5:
                if (!('nonce' in options && typeof options.nonce !== 'string')) {
                  _context4.next = 7;
                  break;
                }

                throw new TypeError('"options.nonce" must be a string.');

              case 7:

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
                _context4.next = 11;
                return this.createVerifyData(input, options);

              case 11:
                verifyData = _context4.sent;
                _context4.next = 14;
                return this.createSignatureNode(verifyData, options);

              case 14:
                signatureNode = _context4.sent;


                // compact signature node to match input context
                tmp = {
                  'https://w3id.org/security#signature': signatureNode
                };
                jsonld = this.injector.use('jsonld');
                ctx = jsonld.getValues(input, '@context');
                _context4.next = 20;
                return jsonld.compact(tmp, ctx);

              case 20:
                compactSignatureNode = _context4.sent;


                // TODO: it is unclear how the signature would be easily added without
                // reshaping the input... so perhaps this library should just require
                // the caller to accept that the signature will be added to the top
                // level of the input

                // attach signature node to cloned input and return it
                output = util.deepClone(input);

                delete compactSignatureNode['@context'];
                signatureKey = Object.keys(compactSignatureNode)[0];

                jsonld.addValue(output, signatureKey, compactSignatureNode[signatureKey]);
                return _context4.abrupt('return', output);

              case 26:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function sign(_x5, _x6) {
        return _ref4.apply(this, arguments);
      }

      return sign;
    }()
  }, {
    key: 'createSignatureNode',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(verifyData, options) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                throw new Error('Not implemented');

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createSignatureNode(_x7, _x8) {
        return _ref5.apply(this, arguments);
      }

      return createSignatureNode;
    }()
  }, {
    key: 'verify',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(framed, options) {
        var signature, _options, _options$maxTimestamp, maxTimestampDelta, _options$checkNonce, checkNonce, _options$checkDomain, checkDomain, _options$checkTimesta, checkTimestamp, _options$checkKey, checkKey, _options$publicKey, getPublicKey, key, checks, publicKey, isKeyTrusted, verifyData;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                options = Object.assign({}, options || {});

                signature = framed.signature;

                // destructure options

                _options = options, _options$maxTimestamp = _options.maxTimestampDelta, maxTimestampDelta = _options$maxTimestamp === undefined ? 15 * 60 : _options$maxTimestamp, _options$checkNonce = _options.checkNonce, checkNonce = _options$checkNonce === undefined ? function () {
                  return signature.nonce === null || signature.nonce === undefined;
                } : _options$checkNonce, _options$checkDomain = _options.checkDomain, checkDomain = _options$checkDomain === undefined ? function () {
                  return signature.domain === null || signature.domain === undefined;
                } : _options$checkDomain, _options$checkTimesta = _options.checkTimestamp, checkTimestamp = _options$checkTimesta === undefined ? function () {
                  var now = Date.now();
                  var delta = maxTimestampDelta * 1000;
                  var created = Date.parse(signature.created);
                  if (created < now - delta || created > now + delta) {
                    throw new Error('The digital signature timestamp is out of range.');
                  }
                  return true;
                } : _options$checkTimesta, _options$checkKey = _options.checkKey, checkKey = _options$checkKey === undefined ? this.helper.checkKey.bind(this.helper) : _options$checkKey, _options$publicKey = _options.publicKey, getPublicKey = _options$publicKey === undefined ? this.helper.getPublicKey.bind(this.helper) : _options$publicKey;

                // normalize function options

                if (checkNonce === false) {
                  // not checking nonce, so return true
                  checkNonce = function checkNonce() {
                    return true;
                  };
                }
                if (checkDomain === false) {
                  // not checking domain, so return true
                  checkDomain = function checkDomain() {
                    return true;
                  };
                }
                if (checkTimestamp === false) {
                  // not checking timestamp, so return true
                  checkTimestamp = function checkTimestamp() {
                    return true;
                  };
                }
                if (typeof getPublicKey !== 'function') {
                  key = getPublicKey;

                  getPublicKey = function getPublicKey(keyId) {
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
                _context6.next = 14;
                return Promise.all([checkNonce(signature.nonce, options), checkDomain(signature.domain, options), checkTimestamp(signature.date, options)]);

              case 14:
                checks = _context6.sent;

                if (checks[0]) {
                  _context6.next = 17;
                  break;
                }

                throw new Error('The nonce is invalid.');

              case 17:
                if (checks[1]) {
                  _context6.next = 19;
                  break;
                }

                throw new Error('The domain is invalid.');

              case 19:
                if (checks[2]) {
                  _context6.next = 21;
                  break;
                }

                throw new Error('The timestamp is invalid.');

              case 21:
                _context6.next = 23;
                return getPublicKey(signature.creator, options);

              case 23:
                publicKey = _context6.sent;

                if (!('revoked' in publicKey)) {
                  _context6.next = 26;
                  break;
                }

                throw new Error('The document was signed with a key that has been revoked.');

              case 26:
                _context6.next = 28;
                return checkKey(publicKey, options);

              case 28:
                isKeyTrusted = _context6.sent;

                if (isKeyTrusted) {
                  _context6.next = 31;
                  break;
                }

                throw new Error('The document was not signed with a trusted key.');

              case 31:
                _context6.next = 33;
                return this.createVerifyData(framed, Object.assign({}, options, {
                  date: signature.created,
                  nonce: signature.nonce,
                  domain: signature.domain
                }));

              case 33:
                verifyData = _context6.sent;
                _context6.next = 36;
                return this.verifySignatureNode(verifyData, signature, Object.assign({}, options, { publicKey: publicKey }));

              case 36:
                return _context6.abrupt('return', _context6.sent);

              case 37:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function verify(_x9, _x10) {
        return _ref6.apply(this, arguments);
      }

      return verify;
    }()
  }]);

  return LinkedDataSignature;
}();

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var constants = __webpack_require__(10);
var util = __webpack_require__(16);

module.exports = function () {
  function Helper(injector) {
    _classCallCheck(this, Helper);

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


  _createClass(Helper, [{
    key: 'getPublicKey',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, options) {
        var key, frame, jsonld, framed;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = options || {};

                _context.next = 3;
                return this.getJsonLd(id, options);

              case 3:
                key = _context.sent;


                // frame key to validate it
                frame = {
                  '@context': constants.SECURITY_CONTEXT_URL,
                  type: 'CryptographicKey',
                  owner: { '@embed': '@never' }
                };
                jsonld = this.injector.use('jsonld');
                _context.next = 8;
                return jsonld.frame(key, frame);

              case 8:
                framed = _context.sent;

                if (framed['@graph'][0]) {
                  _context.next = 11;
                  break;
                }

                throw new Error('The public key is not a CryptographicKey.');

              case 11:
                if ('publicKeyPem' in framed['@graph'][0]) {
                  _context.next = 13;
                  break;
                }

                throw new Error('Could not get public key. Unknown format.');

              case 13:
                framed['@graph'][0]['@context'] = framed['@context'];
                return _context.abrupt('return', framed['@graph'][0]);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPublicKey(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return getPublicKey;
    }()

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

  }, {
    key: 'checkKey',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(key, options) {
        var _options, _options$checkKeyOwne, checkKeyOwner, _options$publicKeyOwn, getPublicKeyOwner, _owner, framedKey, owners, framedOwners, owner, jsonld, i, isOwnerTrusted;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (key && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                  _context2.next = 2;
                  break;
                }

                throw new TypeError('"key" must be an object.');

              case 2:

                options = options || {};

                _options = options, _options$checkKeyOwne = _options.checkKeyOwner, checkKeyOwner = _options$checkKeyOwne === undefined ? function () {
                  return true;
                } : _options$checkKeyOwne, _options$publicKeyOwn = _options.publicKeyOwner, getPublicKeyOwner = _options$publicKeyOwn === undefined ? this.getJsonLd.bind(this) : _options$publicKeyOwn;


                if (typeof getPublicKeyOwner !== 'function') {
                  _owner = getPublicKeyOwner;

                  getPublicKeyOwner = function getPublicKeyOwner(ownerId) {
                    if (ownerId !== _owner.id) {
                      throw new Error('Public key owner not found.');
                    }
                    return _owner;
                  };
                }
                checkKeyOwner = util.normalizeAsyncFn(checkKeyOwner, 3);
                getPublicKeyOwner = util.normalizeAsyncFn(getPublicKeyOwner, 2);

                // get framed key
                _context2.next = 9;
                return this._frameKey(key);

              case 9:
                framedKey = _context2.sent;
                _context2.next = 12;
                return getPublicKeyOwner(framedKey.owner, options);

              case 12:
                owners = _context2.sent;
                _context2.next = 15;
                return this._frameKeyOwners(owners);

              case 15:
                framedOwners = _context2.sent;


                // find specific owner of key
                owner = void 0;
                jsonld = this.injector.use('jsonld');
                i = 0;

              case 19:
                if (!(i < framedOwners.length)) {
                  _context2.next = 26;
                  break;
                }

                if (!(jsonld.hasValue(framedOwners[i], 'publicKey', framedKey.id) || jsonld.hasValue(framedOwners[i], 'authenticationCredential', framedKey.id))) {
                  _context2.next = 23;
                  break;
                }

                owner = framedOwners[i];
                return _context2.abrupt('break', 26);

              case 23:
                ++i;
                _context2.next = 19;
                break;

              case 26:
                if (owner) {
                  _context2.next = 28;
                  break;
                }

                throw new Error('The public key is not owned by its declared owner.');

              case 28:
                isOwnerTrusted = checkKeyOwner(owner, key, options);

                if (isOwnerTrusted) {
                  _context2.next = 31;
                  break;
                }

                throw new Error('The owner of the public key is not trusted.');

              case 31:
                return _context2.abrupt('return', true);

              case 32:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function checkKey(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return checkKey;
    }()

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

  }, {
    key: 'getJsonLd',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url, options) {
        var jsonld, remoteDoc;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                options = options || {};

                jsonld = this.injector.use('jsonld');
                _context3.next = 4;
                return jsonld.get(url, options);

              case 4:
                remoteDoc = _context3.sent;

                if (!remoteDoc.contextUrl) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt('return', jsonld.compact(remoteDoc.document, remoteDoc.contextUrl, { expandContext: remoteDoc.contextUrl }));

              case 7:
                return _context3.abrupt('return', remoteDoc.document);

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getJsonLd(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return getJsonLd;
    }()
  }, {
    key: '_frameKey',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(key) {
        var frame, jsonld, framed;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                frame = {
                  '@context': constants.SECURITY_CONTEXT_URL,
                  type: 'CryptographicKey',
                  owner: { '@embed': '@never' }
                };
                jsonld = this.injector.use('jsonld');
                _context4.next = 4;
                return jsonld.frame(key, frame);

              case 4:
                framed = _context4.sent;

                if (framed['@graph'][0]) {
                  _context4.next = 7;
                  break;
                }

                throw new Error('The public key is not a CryptographicKey.');

              case 7:
                if (framed['@graph'][0].owner) {
                  _context4.next = 9;
                  break;
                }

                throw new Error('The public key has no specified owner.');

              case 9:
                framed['@graph'][0]['@context'] = framed['@context'];
                return _context4.abrupt('return', framed['@graph'][0]);

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _frameKey(_x7) {
        return _ref4.apply(this, arguments);
      }

      return _frameKey;
    }()
  }, {
    key: '_frameKeyOwners',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(owners) {
        var frame, jsonld, framed;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                frame = {
                  '@context': constants.SECURITY_CONTEXT_URL,
                  '@requireAll': false,
                  publicKey: { '@embed': '@never' },
                  authenticationCredential: { '@embed': '@never' }
                };
                jsonld = this.injector.use('jsonld');
                _context5.next = 4;
                return jsonld.frame(owners, frame);

              case 4:
                framed = _context5.sent;
                return _context5.abrupt('return', framed['@graph']);

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _frameKeyOwners(_x8) {
        return _ref5.apply(this, arguments);
      }

      return _frameKeyOwners;
    }()
  }]);

  return Helper;
}();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(44);
module.exports = __webpack_require__(76);


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(48);
__webpack_require__(59);
__webpack_require__(63);
__webpack_require__(74);
__webpack_require__(75);
module.exports = __webpack_require__(4).Promise;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(18);
var test = {};
test[__webpack_require__(0)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(5)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(28)(function () {
  return Object.defineProperty(__webpack_require__(20)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(49)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(30)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var defined = __webpack_require__(22);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(51);
var descriptor = __webpack_require__(29);
var setToStringTag = __webpack_require__(25);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(2);
var dPs = __webpack_require__(52);
var enumBugKeys = __webpack_require__(34);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(20)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(35).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(2);
var getKeys = __webpack_require__(32);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(8);
var toIObject = __webpack_require__(23);
var arrayIndexOf = __webpack_require__(55)(false);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(11);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(23);
var toLength = __webpack_require__(33);
var toAbsoluteIndex = __webpack_require__(56);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(8);
var toObject = __webpack_require__(58);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(22);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(60);
var getKeys = __webpack_require__(32);
var redefine = __webpack_require__(5);
var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(9);
var wks = __webpack_require__(0);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(61);
var step = __webpack_require__(62);
var Iterators = __webpack_require__(9);
var toIObject = __webpack_require__(23);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(30)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(3)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var global = __webpack_require__(1);
var ctx = __webpack_require__(14);
var classof = __webpack_require__(18);
var $export = __webpack_require__(13);
var isObject = __webpack_require__(6);
var aFunction = __webpack_require__(15);
var anInstance = __webpack_require__(64);
var forOf = __webpack_require__(65);
var speciesConstructor = __webpack_require__(36);
var task = __webpack_require__(37).set;
var microtask = __webpack_require__(70)();
var newPromiseCapabilityModule = __webpack_require__(26);
var perform = __webpack_require__(38);
var promiseResolve = __webpack_require__(39);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(71)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(25)($Promise, PROMISE);
__webpack_require__(72)(PROMISE);
Wrapper = __webpack_require__(4)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(73)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var call = __webpack_require__(66);
var isArrayIter = __webpack_require__(67);
var anObject = __webpack_require__(2);
var toLength = __webpack_require__(33);
var getIterFn = __webpack_require__(68);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(2);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(9);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(18);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(9);
module.exports = __webpack_require__(4).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(37).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(11)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(5);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var dP = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(7);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(13);
var core = __webpack_require__(4);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(36);
var promiseResolve = __webpack_require__(39);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(13);
var newPromiseCapability = __webpack_require__(26);
var perform = __webpack_require__(38);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * An implementation of the Linked Data Signatures specification for JSON-LD.
 * This library works in the browser and node.js.
 *
 * @author Dave Longley <dlongley@digitalbazaar.com>
 * @author David I. Lehn <dlehn@digitalbazaar.com>
 * @author Manu Sporny <msporny@digitalbazaar.com>
 *
 * BSD 3-Clause License
 * Copyright (c) 2014-2017 Digital Bazaar, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 *
 * Neither the name of the Digital Bazaar, Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
(function (global) {

  'use strict';

  var Injector = __webpack_require__(77);
  var util = __webpack_require__(16);

  // TODO: only require dynamically as needed or according to build
  var suites = {
    LinkedDataSignature: __webpack_require__(40),
    LinkedDataSignature2015: __webpack_require__(17),
    GraphSignature2012: __webpack_require__(80),
    EcdsaKoblitzSignature2016: __webpack_require__(81),
    RsaSignature2017: __webpack_require__(82)

    // determine if using node.js or browser
  };var _nodejs = typeof process !== 'undefined' && process.versions && process.versions.node;
  var _browser = !_nodejs && (typeof window !== 'undefined' || typeof self !== 'undefined');

  /**
   * Attaches the JSON-LD Signatures API to the given object.
   *
   * @param api the object to attach the signatures API to.
   * @param [options] the options to use:
   *          [inject] *deprecated*, use `use` API instead; the dependencies to
   *              inject, available global defaults will be used otherwise.
   *            [forge] forge API.
   *            [jsonld] jsonld.js API; all remote documents will be loaded
   *              using jsonld.documentLoader by default, so ensure a secure
   *              document loader is configured.
   */
  function wrap(api, options) {

    options = options || {};

    var injector = new Injector();

    /* API Constants */
    var constants = __webpack_require__(10);
    for (var constant in constants) {
      api[constant] = constants[constant];
    }
    api.SUPPORTED_ALGORITHMS = ['EcdsaKoblitzSignature2016', 'GraphSignature2012', 'LinkedDataSignature2015', 'RsaSignature2017'];

    /* Core API */

    /**
     * Signs a JSON-LD document using a digital signature.
     *
     * @param input the JSON-LD document to be signed.
     * @param [options] options to use:
     *          privateKeyPem A PEM-encoded private key.
     *          creator the URL to the paired public key.
     *          [date] an optional date to override the signature date with.
     *          [domain] an optional domain to include in the signature.
     *          [nonce] an optional nonce to include in the signature.
     *          [algorithm] the algorithm to use, eg: 'GraphSignature2012',
     *            'LinkedDataSignature2015' (default: 'GraphSignature2012').
     *          [expansionMap] a custom expansion map that is passed
     *            to the JSON-LD processor; by default a function that will
     *            throw an error when unmapped properties are detected in the
     *            input, use `false` to turn this off and allow unmapped
     *            properties to be dropped or use a custom function.
     * @param callback(err, signedDocument) called once the operation completes.
     *
     * @return a Promise that resolves to the signed document.
     */
    api.sign = util.callbackify(function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(input, options) {
        var algorithm, Suite;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = options || {};

                // no default algorithm; it must be specified

                if ('algorithm' in options) {
                  _context.next = 3;
                  break;
                }

                throw new TypeError('"options.algorithm" must be specified.');

              case 3:
                algorithm = options.algorithm;

                if (!(api.SUPPORTED_ALGORITHMS.indexOf(algorithm) === -1)) {
                  _context.next = 6;
                  break;
                }

                throw new Error('Unsupported algorithm "' + algorithm + '"; ' + '"options.algorithm" must be one of: ' + JSON.stringify(api.SUPPORTED_ALGORITHMS));

              case 6:

                // TODO: won't work with static analysis?
                // use signature suite
                //const Suite = require('./suites/' + algorithm);
                Suite = suites[algorithm];
                return _context.abrupt('return', new Suite(injector).sign(input, options));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    /**
     * Verifies a JSON-LD digitally-signed object.
     *
     * @param obj the JSON-LD object to verify.
     * @param [options] the options to use:
     *          [publicKey] a JSON-LD document providing the public
     *            key info or a function ((keyId, options, [(err, publicKey)]) that
     *            returns a Promise that resolves to such a document (or that
     *            accepts a node-style callback that will be passed it).
     *          [publicKeyOwner] a JSON-LD document providing the public key owner
     *            info including the list of valid keys for that owner or a
     *            function (owner, options, [(err, ownerDoc)]) that returns a
     *            Promise that resolves to such a document (or that accepts a
     *            node-style callback that will be passed it).
     *          [checkNonce(nonce, options, function(err, valid))] a callback to
     *            check if the nonce (null if none) used in the signature is valid.
     *          [checkDomain(domain, options, function(err, valid))] a callback
     *            to check if the domain used (null if none) is valid.
     *          [checkKey(key, options, function(err, trusted))] a callback to
     *            check if the key used to sign the message is trusted.
     *          [checkKeyOwner(owner, key, options, function(err, trusted))] a
     *            callback to check if the key's owner is trusted.
     *          [checkTimestamp]: check signature timestamp (default: false).
     *          [maxTimestampDelta]: signature must be created within a window of
     *            this many seconds (default: 15 minutes).
     *          [documentLoader(url, [callback(err, remoteDoc)])] the document
     *            loader.
     *          [id] the ID (full URL) of the node to check the signature of, if
     *            the input contains multiple signed nodes.
     * @param [callback(err, result)] called once the operation completes.
     *
     * @return a Promise that resolves to the verification result.
     */
    api.verify = util.callbackify(function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(input, options) {
        var _this = this;

        var jsonld, framed, signatures, results;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // set default options
                options = Object.assign({}, options || {});

                // validate options

                if (!('checkNonce' in options && !(options.checkNonce === false || typeof options.checkNonce === 'function'))) {
                  _context3.next = 3;
                  break;
                }

                throw new TypeError('"options.checkNonce" must be `false` or a function.');

              case 3:
                if (!('checkDomain' in options && !(options.checkDomain === false || typeof options.checkDomain === 'string' || typeof options.checkDomain === 'function'))) {
                  _context3.next = 5;
                  break;
                }

                throw new TypeError('"options.checkDomain" must be `false`, a string, or a function.');

              case 5:
                if (!('checkTimestamp' in options && !(options.checkTimestamp === false || typeof options.checkTimestamp === 'function'))) {
                  _context3.next = 7;
                  break;
                }

                throw new TypeError('"options.checkTimestamp" must be `false` or a function.');

              case 7:

                // backwards compatibility, massage `getPublicKey` and `getPublicKeyOwner`
                // options into `publicKey` and `publicKeyOwner`
                if ('getPublicKey' in options) {
                  options.publicKey = options.getPublicKey;
                }
                if ('getPublicKeyOwner' in options) {
                  options.publicKeyOwner = options.getPublicKeyOwner;
                }

                // TODO: frame before getting signature, not just compact? considerations:
                // 1. named-graph framing support is required to avoid merging data and
                //    invalidating the signature
                // 2. JSON-only inputs will fail compaction -- so perhaps this library
                //    should require the signature to be at the top?
                /*
                const frame = {
                  '@context': constants.SECURITY_CONTEXT_URL,
                  signature: {
                    type: algorithm,
                    created: {},
                    creator: {},
                    signatureValue: {}
                  }
                };
                if(options.id) {
                  frame.id = options.id;
                }
                */
                // compact to get signature types
                jsonld = injector.use('jsonld');
                _context3.next = 12;
                return jsonld.compact(input, constants.SECURITY_CONTEXT_URL);

              case 12:
                framed = _context3.sent;


                // ensure there is at least one signature
                signatures = jsonld.getValues(framed, 'signature');

                if (!(signatures.length === 0)) {
                  _context3.next = 16;
                  break;
                }

                throw new Error('No signature found.');

              case 16:
                _context3.next = 18;
                return Promise.all(signatures.map(function (s) {
                  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var algorithm, f, Suite, verified;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            algorithm = jsonld.getValues(s, 'type')[0] || '';

                            if (!(api.SUPPORTED_ALGORITHMS.indexOf(algorithm) === -1)) {
                              _context2.next = 4;
                              break;
                            }

                            throw new Error('Unsupported signature algorithm "' + algorithm + '"; ' + 'supported algorithms are: ' + JSON.stringify(api.SUPPORTED_ALGORITHMS));

                          case 4:

                            // copy the framed object and place a single signature on each copy
                            f = util.deepClone(framed);

                            f.signature = s;
                            // TODO: won't work with static analysis?
                            // use signature suite
                            //const Suite = require('./suites/' + algorithm);
                            Suite = suites[algorithm];
                            _context2.next = 9;
                            return new Suite(injector).verify(f, Object.assign({}, options, { framed: framed }));

                          case 9:
                            verified = _context2.sent;
                            return _context2.abrupt('return', { verified: verified });

                          case 13:
                            _context2.prev = 13;
                            _context2.t0 = _context2['catch'](0);
                            return _context2.abrupt('return', { verified: false, error: _context2.t0 });

                          case 16:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this, [[0, 13]]);
                  }))();
                }));

              case 18:
                results = _context3.sent;


                // ensure results include public key identifiers
                results.forEach(function (result, i) {
                  result.publicKey = signatures[i].creator;
                });

                return _context3.abrupt('return', {
                  keyResults: results,
                  verified: results.every(function (r) {
                    return r.verified;
                  })
                });

              case 21:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());

    /* Helper functions */
    var Helper = __webpack_require__(41);
    var helper = new Helper(injector);

    // expose for helper functions
    api.getPublicKey = util.callbackify(helper.getPublicKey.bind(helper));
    api.checkKey = util.callbackify(helper.checkKey.bind(helper));
    api.getJsonLd = util.callbackify(helper.getJsonLd.bind(helper));

    // expose injector API
    api.use = injector.use.bind(injector);

    // handle dependency injection
    (function () {
      var inject = options.inject || {};
      for (var name in inject) {
        api.use(name, inject[name]);
      }
    })();

    // reexpose API as `.promises` for backwards compatability
    api.promises = api;

    // expose base64 functions for testing
    api._encodeBase64Url = util.encodeBase64Url;
    api._decodeBase64Url = util.decodeBase64Url;

    return api;
  } // end wrap

  // used to generate a new verifier API instance
  var factory = function factory(options) {
    return wrap(function () {
      return factory();
    }, options);
  };
  wrap(factory);

  if (_nodejs) {
    // export nodejs API
    module.exports = factory;
  } else if (true) {
    // export AMD API
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return factory;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (_browser) {
    // export simple browser API
    if (typeof global.jsigs === 'undefined') {
      global.jsigs = {};
    }
    wrap(global.jsigs);
  }
})(typeof window !== 'undefined' ? window : undefined);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function Injector() {
    _classCallCheck(this, Injector);

    this._libs = {};
    this.env = {};
    this.env.nodejs = typeof process !== 'undefined' && process.versions && process.versions.node;
    if (!this.env.nodejs) {
      this.env.browser = true;
    }
  }

  /**
   * Allows injectables to be set or retrieved.
   *
   * @param name the name of the injectable to use (
   *          eg: `jsonld`, `jsonld-signatures`).
   * @param [injectable] the api to set for the injectable, only present for
   *          setter, omit for getter.
   *
   * @return the API for `name` if not using this method as a setter, otherwise
   *           undefined.
   */


  _createClass(Injector, [{
    key: 'use',
    value: function use(name, injectable) {
      // setter mode
      if (injectable) {
        this._libs[name] = injectable;
        return;
      }

      // getter mode:

      // api not set yet, load default
      if (!this._libs[name]) {
        var requireAliases = {
          'forge': 'node-forge',
          'bitcoreMessage': 'bitcore-message'
        };
        var requireName = requireAliases[name] || name;
        this._libs[name] = global[name] || this.env.nodejs && !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        if (name === 'jsonld' && this.env.nodejs) {
          // locally configure jsonld
          this._libs[name] = this._libs[name]();
          this._libs[name].useDocumentLoader('node', { secure: true, strictSSL: true });
        }
      }
      return this._libs[name];
    }
  }]);

  return Injector;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))

/***/ }),
/* 78 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 79;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var constants = __webpack_require__(10);
var LinkedDataSignature2015 = __webpack_require__(17);

module.exports = function (_LinkedDataSignature) {
  _inherits(GraphSignature2012, _LinkedDataSignature);

  function GraphSignature2012(injector) {
    var algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphSignature2012';

    _classCallCheck(this, GraphSignature2012);

    return _possibleConstructorReturn(this, (GraphSignature2012.__proto__ || Object.getPrototypeOf(GraphSignature2012)).call(this, injector, algorithm));
  }

  _createClass(GraphSignature2012, [{
    key: 'canonize',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(input, options) {
        var jsonld;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                jsonld = this.injector.use('jsonld');
                return _context.abrupt('return', jsonld.canonize(input, {
                  algorithm: 'URGNA2012',
                  format: 'application/nquads',
                  expansionMap: options.expansionMap
                }));

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function canonize(_x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return canonize;
    }()
  }, {
    key: 'createVerifyData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(input, options) {
        var jsonld, compacted, c14n, verifyData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // TODO: frame before getting signature, not just compact? considerations:
                // should the assumption be (for this library) that the signature is on
                // the top-level object and thus framing is unnecessary?

                jsonld = this.injector.use('jsonld');
                _context2.next = 3;
                return jsonld.compact(input, constants.SECURITY_CONTEXT_URL, { expansionMap: options.expansionMap });

              case 3:
                compacted = _context2.sent;


                // TODO: will need to preserve `signature` when chained signature
                // option is set in the future

                // delete the existing signature(s) prior to canonicalization
                delete compacted.signature;

                _context2.next = 7;
                return this.canonize(compacted, options);

              case 7:
                c14n = _context2.sent;
                verifyData = '';

                if (options.nonce !== null && options.nonce !== undefined) {
                  verifyData += options.nonce;
                }
                verifyData += options.date;
                verifyData += c14n;
                if (options.domain !== null && options.domain !== undefined) {
                  verifyData += '@' + options.domain;
                }
                return _context2.abrupt('return', verifyData);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function createVerifyData(_x4, _x5) {
        return _ref2.apply(this, arguments);
      }

      return createVerifyData;
    }()
  }]);

  return GraphSignature2012;
}(LinkedDataSignature2015);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkedDataSignature2015 = __webpack_require__(17);

module.exports = function (_LinkedDataSignature) {
  _inherits(EcdsaKoblitzSignature2016, _LinkedDataSignature);

  function EcdsaKoblitzSignature2016(injector) {
    var algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'EcdsaKoblitzSignature2016';

    _classCallCheck(this, EcdsaKoblitzSignature2016);

    return _possibleConstructorReturn(this, (EcdsaKoblitzSignature2016.__proto__ || Object.getPrototypeOf(EcdsaKoblitzSignature2016)).call(this, injector, algorithm));
  }

  _createClass(EcdsaKoblitzSignature2016, [{
    key: 'createSignatureValue',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(verifyData, options) {
        var bitcoreMessage, bitcore, privateKey, message;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof options.privateKeyWif !== 'string')) {
                  _context.next = 2;
                  break;
                }

                throw new TypeError('"options.privateKeyWif" must be a base 58 formatted string.');

              case 2:
                bitcoreMessage = this.injector.use('bitcoreMessage');
                bitcore = bitcoreMessage.Bitcore;
                privateKey = bitcore.PrivateKey.fromWIF(options.privateKeyWif);
                message = bitcoreMessage(verifyData);
                return _context.abrupt('return', message.sign(privateKey));

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createSignatureValue(_x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return createSignatureValue;
    }()
  }, {
    key: 'verifySignatureNode',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(verifyData, signature, options) {
        var publicKeyWif, bitcoreMessage, message;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                publicKeyWif = options.publicKey.publicKeyWif;

                if (!(typeof publicKeyWif !== 'string')) {
                  _context2.next = 3;
                  break;
                }

                throw new TypeError('Could not verify signature; invalid "publicKeyWif".');

              case 3:
                bitcoreMessage = this.injector.use('bitcoreMessage');
                message = bitcoreMessage(verifyData);
                return _context2.abrupt('return', message.verify(options.publicKey.publicKeyWif, signature.signatureValue));

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function verifySignatureNode(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return verifySignatureNode;
    }()
  }]);

  return EcdsaKoblitzSignature2016;
}(LinkedDataSignature2015);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkedDataSignature2015 = __webpack_require__(17);
var util = __webpack_require__(16);

module.exports = function (_LinkedDataSignature) {
  _inherits(RsaSignature2017, _LinkedDataSignature);

  function RsaSignature2017(injector) {
    var algorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'RsaSignature2017';

    _classCallCheck(this, RsaSignature2017);

    return _possibleConstructorReturn(this, (RsaSignature2017.__proto__ || Object.getPrototypeOf(RsaSignature2017)).call(this, injector, algorithm));
  }

  _createClass(RsaSignature2017, [{
    key: 'createSignatureValue',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(verifyData, options) {
        var jws, fullSignature, parts, detachedSignature;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                jws = this.injector.use('jws');
                fullSignature = jws.sign({
                  header: {
                    alg: 'RS256',
                    b64: false,
                    crit: ['b64']
                  },
                  privateKey: options.privateKeyPem,
                  payload: verifyData
                });
                // detached content signature

                parts = fullSignature.split('.');

                parts[1] = '';
                detachedSignature = parts.join('.');
                return _context.abrupt('return', detachedSignature);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createSignatureValue(_x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return createSignatureValue;
    }()
  }, {
    key: 'verifySignatureNode',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(verifyData, signature, options) {
        var jws, forge, parts, fullSignature, verified;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                jws = this.injector.use('jws');
                forge = this.injector.use('forge');
                // rebuild detached content signature

                parts = signature.signatureValue.split('.');

                parts[1] = util.encodeBase64Url(verifyData, { forge: forge });
                fullSignature = parts.join('.');
                verified = jws.verify(fullSignature, 'RS256', options.publicKey.publicKeyPem);
                return _context2.abrupt('return', verified);

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function verifySignatureNode(_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return verifySignatureNode;
    }()
  }]);

  return RsaSignature2017;
}(LinkedDataSignature2015);

/***/ })
/******/ ]);
});