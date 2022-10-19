(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(_typeof_1);

  var regeneratorRuntime$1 = createCommonjsModule(function (module) {
  var _typeof = _typeof_1["default"];
  function _regeneratorRuntime() {
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return generator._invoke = function (innerFn, self, context) {
        var state = "suspendedStart";
        return function (method, arg) {
          if ("executing" === state) throw new Error("Generator is already running");
          if ("completed" === state) {
            if ("throw" === method) throw arg;
            return doneResult();
          }
          for (context.method = method, context.arg = arg;;) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }
            if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
              if ("suspendedStart" === state) throw state = "completed", context.arg;
              context.dispatchException(context.arg);
            } else "return" === context.method && context.abrupt("return", context.arg);
            state = "executing";
            var record = tryCatch(innerFn, self, context);
            if ("normal" === record.type) {
              if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
              return {
                value: record.arg,
                done: context.done
              };
            }
            "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
          }
        };
      }(innerFn, self, context), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      this._invoke = function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (undefined === method) {
        if (context.delegate = null, "throw" === context.method) {
          if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
          context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return ContinueSentinel;
      }
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) {
                if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              }
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
          "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        }
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  unwrapExports(regeneratorRuntime$1);

  // TODO(Babel 8): Remove this file.

  var runtime = regeneratorRuntime$1();
  var regenerator = runtime;

  // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  // 私有元素属性
  var WUJIE_DATA_ID = "data-wujie-id";
  var WUJIE_DATA_FLAG = "data-wujie-Flag";
  var CONTAINER_POSITION_DATA_FLAG = "data-container-position-flag";
  var CONTAINER_OVERFLOW_DATA_FLAG = "data-container-overflow-flag";
  var LOADING_DATA_FLAG = "data-loading-flag";
  var WUJIE_DATA_ATTACH_CSS_FLAG = "data-wujie-attach-css-flag"; // 需要使用的某些固定变量

  var WUJIE_IFRAME_CLASS = "wujie_iframe";
  var WUJIE_ALL_EVENT = "_wujie_all_event";
  var WUJIE_SHADE_STYLE = "position: fixed; z-index: 2147483647; visibility: hidden; inset: 0px; backface-visibility: hidden;";
  var WUJIE_LOADING_STYLE = "position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; z-index:1;";
  var WUJIE_LOADING_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"30px\" viewBox=\"0 0 24 30\">\n<rect x=\"0\" y=\"13\" width=\"4\" height=\"5\" fill=\"#909090\">\n  <animate attributeName=\"height\" attributeType=\"XML\" values=\"5;21;5\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\"></animate>\n  <animate attributeName=\"y\" attributeType=\"XML\" values=\"13; 5; 13\" begin=\"0s\" dur=\"0.6s\" repeatCount=\"indefinite\"></animate>\n</rect>\n<rect x=\"10\" y=\"13\" width=\"4\" height=\"5\" fill=\"#909090\">\n  <animate attributeName=\"height\" attributeType=\"XML\" values=\"5;21;5\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\"></animate>\n  <animate attributeName=\"y\" attributeType=\"XML\" values=\"13; 5; 13\" begin=\"0.15s\" dur=\"0.6s\" repeatCount=\"indefinite\"></animate>\n</rect>\n<rect x=\"20\" y=\"13\" width=\"4\" height=\"5\" fill=\"#909090\">\n  <animate attributeName=\"height\" attributeType=\"XML\" values=\"5;21;5\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\"></animate>\n  <animate attributeName=\"y\" attributeType=\"XML\" values=\"13; 5; 13\" begin=\"0.3s\" dur=\"0.6s\" repeatCount=\"indefinite\"></animate>\n</rect>\n</svg>"; // 提醒类

  var WUJIE_TIPS_NO_URL = "url参数为空";
  var WUJIE_TIPS_RELOAD_DISABLED = "子应用调用reload无法生效";
  var WUJIE_TIPS_STOP_APP = "此报错可以忽略，iframe主动中断主应用代码在子应用运行";
  var WUJIE_TIPS_NO_SUBJECT = "事件订阅数量为空";
  var WUJIE_TIPS_NO_FETCH = "window上不存在fetch属性，需要自行polyfill";
  var WUJIE_TIPS_NOT_SUPPORTED = "当前浏览器不支持无界，子应用将采用iframe方式渲染";
  var WUJIE_TIPS_SCRIPT_ERROR_REQUESTED = "脚本请求出现错误";
  var WUJIE_TIPS_CSS_ERROR_REQUESTED = "样式请求出现错误";
  var WUJIE_TIPS_REPEAT_RENDER = "无界组件短时间重复渲染了两次，可能存在性能问题请检查代码";

  function isFunction(value) {
    return typeof value === "function";
  }
  function isHijackingTag(tagName) {
    return (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === "LINK" || (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === "STYLE" || (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === "SCRIPT" || (tagName === null || tagName === void 0 ? void 0 : tagName.toUpperCase()) === "IFRAME";
  }
  var wujieSupport = window.Proxy && window.CustomElementRegistry;
  /**
   * in safari
   * typeof document.all === 'undefined' // true
   * typeof document.all === 'function' // true
   * We need to discriminate safari for better performance
   */

  var naughtySafari = typeof document.all === "function" && typeof document.all === "undefined";
  var callableFnCacheMap = new WeakMap();
  var isCallable = function isCallable(fn) {
    if (callableFnCacheMap.has(fn)) {
      return true;
    }

    var callable = naughtySafari ? typeof fn === "function" && typeof fn !== "undefined" : typeof fn === "function";

    if (callable) {
      callableFnCacheMap.set(fn, callable);
    }

    return callable;
  };
  var boundedMap = new WeakMap();
  function isBoundedFunction(fn) {
    if (boundedMap.has(fn)) {
      return boundedMap.get(fn);
    }

    var bounded = fn.name.indexOf("bound ") === 0 && !fn.hasOwnProperty("prototype");
    boundedMap.set(fn, bounded);
    return bounded;
  }
  var fnRegexCheckCacheMap = new WeakMap();
  function isConstructable(fn) {
    var hasPrototypeMethods = fn.prototype && fn.prototype.constructor === fn && Object.getOwnPropertyNames(fn.prototype).length > 1;
    if (hasPrototypeMethods) return true;

    if (fnRegexCheckCacheMap.has(fn)) {
      return fnRegexCheckCacheMap.get(fn);
    }

    var constructable = hasPrototypeMethods;

    if (!constructable) {
      var fnString = fn.toString();
      var constructableFunctionRegex = /^function\b\s[A-Z].*/;
      var classRegex = /^class\b/;
      constructable = constructableFunctionRegex.test(fnString) || classRegex.test(fnString);
    }

    fnRegexCheckCacheMap.set(fn, constructable);
    return constructable;
  }
  var setFnCacheMap = new WeakMap();
  function checkProxyFunction(value) {
    if (isCallable(value) && !isBoundedFunction(value) && !isConstructable(value)) {
      if (!setFnCacheMap.has(value)) {
        setFnCacheMap.set(value, value);
      }
    }
  }
  function getTargetValue(target, p) {
    var value = target[p];

    if (setFnCacheMap.has(value)) {
      return setFnCacheMap.get(value);
    }

    if (isCallable(value) && !isBoundedFunction(value) && !isConstructable(value)) {
      var boundValue = Function.prototype.bind.call(value, target);
      setFnCacheMap.set(value, boundValue);

      for (var _key in value) {
        boundValue[_key] = value[_key];
      }

      if (value.hasOwnProperty("prototype") && !boundValue.hasOwnProperty("prototype")) {
        // https://github.com/kuitos/kuitos.github.io/issues/47
        Object.defineProperty(boundValue, "prototype", {
          value: value.prototype,
          enumerable: false,
          writable: true
        });
      }

      return boundValue;
    }

    return value;
  }
  function getDegradeIframe(id) {
    return window.document.querySelector("iframe[".concat(WUJIE_DATA_ID, "=\"").concat(id, "\"]"));
  }
  function appRouteParse(url) {
    if (!url) {
      error(WUJIE_TIPS_NO_URL);
      throw new Error();
    }

    var urlElement = anchorElementGenerator(url);
    var appHostPath = urlElement.protocol + "//" + urlElement.host;
    var appRoutePath = urlElement.pathname + urlElement.search + urlElement.hash;
    return {
      urlElement: urlElement,
      appHostPath: appHostPath,
      appRoutePath: appRoutePath
    };
  }
  function anchorElementGenerator(url) {
    var element = window.document.createElement("a");
    element.href = url;
    return element;
  }
  function getAnchorElementQueryMap(anchorElement) {
    var queryList = anchorElement.search.replace("?", "").split("&");
    var queryMap = {};
    queryList.forEach(function (query) {
      var _query$split = query.split("="),
          _query$split2 = _slicedToArray(_query$split, 2),
          key = _query$split2[0],
          value = _query$split2[1];

      if (key && value) queryMap[key] = value;
    });
    return queryMap;
  }
  /**
   * 当前url的查询参数中是否有给定的id
   */

  function isMatchSyncQueryById(id) {
    var queryMap = getAnchorElementQueryMap(anchorElementGenerator(window.location.href));
    return Object.keys(queryMap).includes(id);
  }
  /**
   * 劫持元素原型对相对地址的赋值转绝对地址
   * @param iframeWindow
   */

  function fixElementCtrSrcOrHref(iframeWindow, elementCtr, attr) {
    // patch setAttribute
    var rawElementSetAttribute = iframeWindow.Element.prototype.setAttribute;

    elementCtr.prototype.setAttribute = function (name, value) {
      var targetValue = value;
      if (name === attr) targetValue = getAbsolutePath(value, this.baseURI || "", true);
      rawElementSetAttribute.call(this, name, targetValue);
    }; // patch href get and set


    var rawAnchorElementHrefDescriptor = Object.getOwnPropertyDescriptor(elementCtr.prototype, attr);
    var enumerable = rawAnchorElementHrefDescriptor.enumerable,
        configurable = rawAnchorElementHrefDescriptor.configurable,
        _get = rawAnchorElementHrefDescriptor.get,
        _set = rawAnchorElementHrefDescriptor.set;
    Object.defineProperty(elementCtr.prototype, attr, {
      enumerable: enumerable,
      configurable: configurable,
      get: function get() {
        return _get.call(this);
      },
      set: function set(href) {
        _set.call(this, getAbsolutePath(href, this.baseURI, true));
      }
    }); // TODO: innerHTML的处理
  }
  function getCurUrl(proxyLocation) {
    var location = proxyLocation;
    return location.protocol + "//" + location.host + location.pathname;
  }
  function getAbsolutePath(url, base, hash) {
    try {
      // 为空值无需处理
      if (url) {
        // 需要处理hash的场景
        if (hash && url.startsWith("#")) return url;
        return new URL(url, base).href;
      } else return url;
    } catch (_unused) {
      return url;
    }
  }
  /**
   * 获取需要同步的url
   */

  function getSyncUrl(id, prefix) {
    var _syncUrl$match;

    var winUrlElement = anchorElementGenerator(window.location.href);
    var queryMap = getAnchorElementQueryMap(winUrlElement);
    winUrlElement = null;
    var syncUrl = window.decodeURIComponent(queryMap[id] || "");
    var validShortPath = (_syncUrl$match = syncUrl.match(/^{([^}]*)}/)) === null || _syncUrl$match === void 0 ? void 0 : _syncUrl$match[1];

    if (prefix && validShortPath) {
      return syncUrl.replace("{".concat(validShortPath, "}"), prefix[validShortPath]);
    }

    return syncUrl;
  } // @ts-ignore

  var requestIdleCallback = window.requestIdleCallback || function (cb) {
    return setTimeout(cb, 1);
  };
  function getContainer(container) {
    return typeof container === "string" ? document.querySelector(container) : container;
  }
  function warn(msg, data) {
    var _console;

    (_console = console) === null || _console === void 0 ? void 0 : _console.warn("[wujie warn]: ".concat(msg), data);
  }
  function error(msg, data) {
    var _console2;

    (_console2 = console) === null || _console2 === void 0 ? void 0 : _console2.error("[wujie error]: ".concat(msg), data);
  }
  function getInlineCode(match) {
    var start = match.indexOf(">") + 1;
    var end = match.lastIndexOf("<");
    return match.substring(start, end);
  }
  function defaultGetPublicPath(entry) {
    if (_typeof(entry) === "object") {
      return "/";
    }

    try {
      var _URL = new URL(entry, location.href),
          origin = _URL.origin,
          pathname = _URL.pathname;

      var paths = pathname.split("/"); // 移除最后一个元素

      paths.pop();
      return "".concat(origin).concat(paths.join("/"), "/");
    } catch (e) {
      console.warn(e);
      return "";
    }
  }
  /** [f1, f2, f3, f4] => f4(f3(f2(f1))) 函数柯里化 */

  function compose(fnList) {
    return function (code) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return fnList.reduce(function (newCode, fn) {
        return isFunction(fn) ? fn.apply(void 0, [newCode].concat(args)) : newCode;
      }, code || "");
    };
  } // 微任务

  function nextTick(cb) {
    Promise.resolve().then(cb);
  } //执行钩子函数

  function execHooks(plugins, hookName) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key3 = 2; _key3 < _len2; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    try {
      plugins.map(function (plugin) {
        return plugin[hookName];
      }).filter(function (hook) {
        return isFunction(hook);
      }).forEach(function (hook) {
        return hook.apply(void 0, args);
      });
    } catch (e) {
      error(e);
    }
  } // 合并缓存

  function mergeOptions(options, cacheOptions) {
    return {
      name: options.name,
      el: options.el || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.el),
      url: options.url || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.url),
      exec: options.exec !== undefined ? options.exec : cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.exec,
      replace: options.replace || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.replace),
      fetch: options.fetch || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.fetch),
      props: options.props || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.props),
      sync: options.sync !== undefined ? options.sync : cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.sync,
      prefix: options.prefix || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.prefix),
      loading: options.loading || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.loading),
      // 默认 {}
      attrs: options.attrs !== undefined ? options.attrs : (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.attrs) || {},
      // 默认 true
      fiber: options.fiber !== undefined ? options.fiber : (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.fiber) !== undefined ? cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.fiber : true,
      alive: options.alive !== undefined ? options.alive : cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.alive,
      degrade: options.degrade !== undefined ? options.degrade : cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.degrade,
      plugins: options.plugins || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.plugins),
      lifecycles: {
        beforeLoad: options.beforeLoad || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.beforeLoad),
        beforeMount: options.beforeMount || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.beforeMount),
        afterMount: options.afterMount || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.afterMount),
        beforeUnmount: options.beforeUnmount || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.beforeUnmount),
        afterUnmount: options.afterUnmount || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.afterUnmount),
        activated: options.activated || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.activated),
        deactivated: options.deactivated || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.deactivated),
        loadError: options.loadError || (cacheOptions === null || cacheOptions === void 0 ? void 0 : cacheOptions.loadError)
      }
    };
  }
  /**
   * 事件触发器
   */

  function eventTrigger(el, eventName, detail) {
    var event;

    if (typeof window.CustomEvent === "function") {
      event = new CustomEvent(eventName, {
        detail: detail
      });
    } else {
      event = document.createEvent("CustomEvent");
      event.initCustomEvent(eventName, true, false, detail);
    }

    el.dispatchEvent(event);
  }

  var ALL_SCRIPT_REGEX = /(<script[\s\S]*?>)[\s\S]*?<\/script>/gi;
  var SCRIPT_TAG_REGEX = /<(script)\s+((?!type=('|")text\/ng\x2Dtemplate\3)[\s\S])*?>[\s\S]*?<\/\1>/i;
  var SCRIPT_SRC_REGEX = /.*\ssrc=('|")?([^>'"\s]+)/;
  var SCRIPT_TYPE_REGEX = /.*\stype=('|")?([^>'"\s]+)/;
  var SCRIPT_ENTRY_REGEX = /.*\sentry\s*.*/;
  var SCRIPT_ASYNC_REGEX = /.*\sasync\s*.*/;
  var DEFER_ASYNC_REGEX = /.*\sdefer\s*.*/;
  var SCRIPT_NO_MODULE_REGEX = /.*\snomodule\s*.*/;
  var SCRIPT_MODULE_REGEX = /.*\stype=('|")?module('|")?\s*.*/;
  var LINK_TAG_REGEX = /<(link)\s+[\s\S]*?>/gi;
  var LINK_PRELOAD_OR_PREFETCH_REGEX = /\srel=('|")?(preload|prefetch|modulepreload)\1/;
  var LINK_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
  var LINK_AS_FONT = /.*\sas=('|")?font\1.*/;
  var STYLE_TAG_REGEX = /<style[^>]*>[\s\S]*?<\/style>/gi;
  var STYLE_TYPE_REGEX = /\s+rel=('|")?stylesheet\1.*/;
  var STYLE_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
  var HTML_COMMENT_REGEX = /<!--([\s\S]*?)-->/g;
  var LINK_IGNORE_REGEX = /<link(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;
  var STYLE_IGNORE_REGEX = /<style(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;
  var SCRIPT_IGNORE_REGEX = /<script(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;
  var CROSS_ORIGIN_REGEX = /.*\scrossorigin=?('|")?(use-credentials|anonymous)?('|")?/i;
  /** 脚本对象 */

  function hasProtocol(url) {
    return url.startsWith("//") || url.startsWith("http://") || url.startsWith("https://");
  }

  function getEntirePath(path, baseURI) {
    return new URL(path, baseURI).toString();
  }

  function isValidJavaScriptType(type) {
    var handleTypes = ["text/javascript", "module", "application/javascript", "text/ecmascript", "application/ecmascript"];
    return !type || handleTypes.indexOf(type) !== -1;
  }

  function isModuleScriptSupported() {
    var s = window.document.createElement("script");
    return "noModule" in s;
  }

  var genLinkReplaceSymbol = function genLinkReplaceSymbol(linkHref) {
    var preloadOrPrefetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return "<!-- ".concat(preloadOrPrefetch ? "prefetch/preload/modulepreload" : "", " link ").concat(linkHref, " replaced by wujie -->");
  };
  var getInlineStyleReplaceSymbol = function getInlineStyleReplaceSymbol(index) {
    return "<!-- inline-style-".concat(index, " replaced by wujie -->");
  };
  var genScriptReplaceSymbol = function genScriptReplaceSymbol(scriptSrc) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return "<!-- ".concat(type, " script ").concat(scriptSrc, " replaced by wujie -->");
  };
  var inlineScriptReplaceSymbol = "<!-- inline scripts replaced by wujie -->";
  var genIgnoreAssetReplaceSymbol = function genIgnoreAssetReplaceSymbol(url) {
    return "<!-- ignore asset ".concat(url || "file", " replaced by wujie -->");
  };
  var genModuleScriptReplaceSymbol = function genModuleScriptReplaceSymbol(scriptSrc, moduleSupport) {
    return "<!-- ".concat(moduleSupport ? "nomodule" : "module", " script ").concat(scriptSrc, " ignored by wujie -->");
  };
  /**
   * parse the script link from the template
   * 1. collect stylesheets
   * 2. use global eval to evaluate the inline scripts
   *    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function#Difference_between_Function_constructor_and_function_declaration
   *    see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!
   * @param tpl
   * @param baseURI
   * @stripStyles whether to strip the css links
   * @returns {{template: void | string | *, scripts: *[], entry: *}}
   */

  function processTpl(tpl, baseURI, postProcessTemplate) {
    var scripts = [];
    var styles = [];
    var entry = null;
    var moduleSupport = isModuleScriptSupported();
    var template = tpl
    /*
     remove html comment first
     */
    .replace(HTML_COMMENT_REGEX, "").replace(LINK_TAG_REGEX, function (match) {
      /*
       change the css link
       */
      var styleType = !!match.match(STYLE_TYPE_REGEX);

      if (styleType) {
        var styleHref = match.match(STYLE_HREF_REGEX);
        var styleIgnore = match.match(LINK_IGNORE_REGEX);

        if (styleHref) {
          var href = styleHref && styleHref[2];
          var newHref = href;

          if (href && !hasProtocol(href)) {
            newHref = getEntirePath(href, baseURI);
          }

          if (styleIgnore) {
            return genIgnoreAssetReplaceSymbol(newHref);
          }

          styles.push({
            src: newHref
          });
          return genLinkReplaceSymbol(newHref);
        }
      }

      var preloadOrPrefetchType = match.match(LINK_PRELOAD_OR_PREFETCH_REGEX) && match.match(LINK_HREF_REGEX) && !match.match(LINK_AS_FONT);

      if (preloadOrPrefetchType) {
        var _match$match = match.match(LINK_HREF_REGEX),
            _match$match2 = _slicedToArray(_match$match, 3),
            linkHref = _match$match2[2];

        return genLinkReplaceSymbol(linkHref, true);
      }

      return match;
    }).replace(STYLE_TAG_REGEX, function (match) {
      if (STYLE_IGNORE_REGEX.test(match)) {
        return genIgnoreAssetReplaceSymbol("style file");
      } else {
        var code = getInlineCode(match);
        styles.push({
          src: "",
          content: code
        });
        return getInlineStyleReplaceSymbol(styles.length - 1);
      }
    }).replace(ALL_SCRIPT_REGEX, function (match, scriptTag) {
      var scriptIgnore = scriptTag.match(SCRIPT_IGNORE_REGEX);
      var isModuleScript = !!scriptTag.match(SCRIPT_MODULE_REGEX);
      var isCrossOriginScript = scriptTag.match(CROSS_ORIGIN_REGEX);
      var crossOriginType = (isCrossOriginScript === null || isCrossOriginScript === void 0 ? void 0 : isCrossOriginScript[2]) || "";
      var moduleScriptIgnore = moduleSupport && !!scriptTag.match(SCRIPT_NO_MODULE_REGEX) || !moduleSupport && isModuleScript; // in order to keep the exec order of all javascripts

      var matchedScriptTypeMatch = scriptTag.match(SCRIPT_TYPE_REGEX);
      var matchedScriptType = matchedScriptTypeMatch && matchedScriptTypeMatch[2];

      if (!isValidJavaScriptType(matchedScriptType)) {
        return match;
      } // if it is a external script


      if (SCRIPT_TAG_REGEX.test(match) && scriptTag.match(SCRIPT_SRC_REGEX)) {
        /*
         collect scripts and replace the ref
         */
        var matchedScriptEntry = scriptTag.match(SCRIPT_ENTRY_REGEX);
        var matchedScriptSrcMatch = scriptTag.match(SCRIPT_SRC_REGEX);
        var matchedScriptSrc = matchedScriptSrcMatch && matchedScriptSrcMatch[2];

        if (entry && matchedScriptEntry) {
          throw new SyntaxError("You should not set multiply entry script!");
        } else {
          // append the domain while the script not have an protocol prefix
          if (matchedScriptSrc && !hasProtocol(matchedScriptSrc)) {
            matchedScriptSrc = getEntirePath(matchedScriptSrc, baseURI);
          }

          entry = entry || matchedScriptEntry && matchedScriptSrc;
        }

        if (scriptIgnore) {
          return genIgnoreAssetReplaceSymbol(matchedScriptSrc || "js file");
        }

        if (moduleScriptIgnore) {
          return genModuleScriptReplaceSymbol(matchedScriptSrc || "js file", moduleSupport);
        }

        if (matchedScriptSrc) {
          var isAsyncScript = !!scriptTag.match(SCRIPT_ASYNC_REGEX);
          var isDeferScript = !!scriptTag.match(DEFER_ASYNC_REGEX);
          scripts.push(isAsyncScript || isDeferScript ? {
            async: isAsyncScript,
            defer: isDeferScript,
            src: matchedScriptSrc,
            module: isModuleScript,
            crossorigin: !!isCrossOriginScript,
            crossoriginType: crossOriginType
          } : {
            src: matchedScriptSrc,
            module: isModuleScript,
            crossorigin: !!isCrossOriginScript,
            crossoriginType: crossOriginType
          });
          return genScriptReplaceSymbol(matchedScriptSrc, isAsyncScript && "async" || isDeferScript && "defer" || "");
        }

        return match;
      } else {
        if (scriptIgnore) {
          return genIgnoreAssetReplaceSymbol("js file");
        }

        if (moduleScriptIgnore) {
          return genModuleScriptReplaceSymbol("js file", moduleSupport);
        } // if it is an inline script


        var code = getInlineCode(match); // remove script blocks when all of these lines are comments.

        var isPureCommentBlock = code.split(/[\r\n]+/).every(function (line) {
          return !line.trim() || line.trim().startsWith("//");
        });

        if (!isPureCommentBlock && code) {
          scripts.push({
            src: "",
            content: code,
            module: isModuleScript,
            crossorigin: !!isCrossOriginScript,
            crossoriginType: crossOriginType
          });
        }

        return inlineScriptReplaceSymbol;
      }
    });
    var tplResult = {
      template: template,
      scripts: scripts,
      styles: styles,
      // set the last script as entry if have not set
      entry: entry || scripts[scripts.length - 1]
    };

    if (typeof postProcessTemplate === "function") {
      tplResult = postProcessTemplate(tplResult);
    }

    return tplResult;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  /**
   * 获取柯里化 cssLoader
   */
  function getCssLoader(_ref) {
    var plugins = _ref.plugins,
        replace = _ref.replace;
    return function (code) {
      var src = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var base = arguments.length > 2 ? arguments[2] : undefined;
      return compose(plugins.map(function (plugin) {
        return plugin.cssLoader;
      }))(replace ? replace(code) : code, src, base);
    };
  }
  /**
   * 获取柯里化 jsLoader
   */

  function getJsLoader(_ref2) {
    var plugins = _ref2.plugins,
        replace = _ref2.replace;
    return function (code) {
      var src = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var base = arguments.length > 2 ? arguments[2] : undefined;
      return compose(plugins.map(function (plugin) {
        return plugin.jsLoader;
      }))(replace ? replace(code) : code, src, base);
    };
  }
  /**
   * 获取预置插件
   */

  function getPresetLoaders(loaderType, plugins) {
    var loaders = plugins.map(function (plugin) {
      return plugin[loaderType];
    }).filter(function (loaders) {
      return loaders === null || loaders === void 0 ? void 0 : loaders.length;
    });
    var res = loaders.reduce(function (preLoaders, curLoaders) {
      return preLoaders.concat(curLoaders);
    }, []);
    return loaderType === "cssBeforeLoaders" ? res.reverse() : res;
  }
  /**
   * 获取影响插件
   */

  function getEffectLoaders(loaderType, plugins) {
    return plugins.map(function (plugin) {
      return plugin[loaderType];
    }).filter(function (loaders) {
      return loaders === null || loaders === void 0 ? void 0 : loaders.length;
    }).reduce(function (preLoaders, curLoaders) {
      return preLoaders.concat(curLoaders);
    }, []);
  } // 判断 url 是否符合loader的规则

  function isMatchUrl(url, effectLoaders) {
    return effectLoaders.some(function (loader) {
      return typeof loader === "string" ? url === loader : loader.test(url);
    });
  }
  /**
   * 转换子应用css内的相对地址成绝对地址
   */

  function cssRelativePathResolve(code, src, base) {
    var baseUrl = src ? getAbsolutePath(src, base) : base; // https://developer.mozilla.org/en-US/docs/Web/CSS/url

    var urlReg = /(url\((?!['"]?(?:data):)['"]?)([^'")]*)(['"]?\))/g;
    return code.replace(urlReg, function (_m, pre, url, post) {
      var absoluteUrl = getAbsolutePath(url, baseUrl);
      return pre + absoluteUrl + post;
    });
  }

  var defaultPlugin = {
    cssLoader: cssRelativePathResolve
  };
  function getPlugins(plugins) {
    return Array.isArray(plugins) ? [defaultPlugin].concat(_toConsumableArray(plugins)) : [defaultPlugin];
  }

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var styleCache = {};
  var scriptCache = {};
  var embedHTMLCache = {};

  if (!window.fetch) {
    error(WUJIE_TIPS_NO_FETCH);
    throw new Error();
  }

  var defaultFetch = window.fetch.bind(window);

  function defaultGetTemplate(tpl) {
    return tpl;
  }
  /**
   * 处理css-loader
   */


  function processCssLoader(_x, _x2, _x3) {
    return _processCssLoader.apply(this, arguments);
  }
  /**
   * convert external css link to inline style for performance optimization
   * @return embedHTML
   */

  function _processCssLoader() {
    _processCssLoader = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(sandbox, template, getExternalStyleSheets) {
      var curUrl, composeCssLoader, processedCssList, embedHTML;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              curUrl = getCurUrl(sandbox.proxyLocation);
              /** css-loader */

              composeCssLoader = compose(sandbox.plugins.map(function (plugin) {
                return plugin.cssLoader;
              }));
              processedCssList = getExternalStyleSheets().map(function (_ref2) {
                var src = _ref2.src,
                    ignore = _ref2.ignore,
                    contentPromise = _ref2.contentPromise;
                return {
                  src: src,
                  ignore: ignore,
                  contentPromise: contentPromise.then(function (content) {
                    return composeCssLoader(content, src, curUrl);
                  })
                };
              });
              _context.next = 5;
              return getEmbedHTML(template, processedCssList);

            case 5:
              embedHTML = _context.sent;
              return _context.abrupt("return", sandbox.replace ? sandbox.replace(embedHTML) : embedHTML);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _processCssLoader.apply(this, arguments);
  }

  function getEmbedHTML(_x4, _x5) {
    return _getEmbedHTML.apply(this, arguments);
  }

  function _getEmbedHTML() {
    _getEmbedHTML = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(template, styleResultList) {
      var embedHTML;
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              embedHTML = template;
              return _context2.abrupt("return", Promise.all(styleResultList.map(function (styleResult, index) {
                return styleResult.contentPromise.then(function (content) {
                  if (styleResult.src) {
                    embedHTML = embedHTML.replace(genLinkReplaceSymbol(styleResult.src), styleResult.ignore ? "<link href=\"".concat(styleResult.src, "\" rel=\"stylesheet\" type=\"text/css\">") : "<style>/* ".concat(styleResult.src, " */").concat(content, "</style>"));
                  } else if (content) {
                    embedHTML = embedHTML.replace(getInlineStyleReplaceSymbol(index), "<style>/* inline-style-".concat(index, " */").concat(content, "</style>"));
                  }
                });
              })).then(function () {
                return embedHTML;
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getEmbedHTML.apply(this, arguments);
  }

  var isInlineCode = function isInlineCode(code) {
    return code.startsWith("<");
  };

  var fetchAssets = function fetchAssets(src, cache, fetch, cssFlag, loadError) {
    return cache[src] || (cache[src] = fetch(src).then(function (response) {
      // usually browser treats 4xx and 5xx response of script loading as an error and will fire a script error event
      // https://stackoverflow.com/questions/5625420/what-http-headers-responses-trigger-the-onerror-handler-on-a-script-tag/5625603
      if (response.status >= 400) {
        cache[src] = null;

        if (cssFlag) {
          error(WUJIE_TIPS_CSS_ERROR_REQUESTED, {
            src: src,
            response: response
          });
          loadError === null || loadError === void 0 ? void 0 : loadError(src, new Error(WUJIE_TIPS_CSS_ERROR_REQUESTED));
          return "";
        } else {
          error(WUJIE_TIPS_SCRIPT_ERROR_REQUESTED, {
            src: src,
            response: response
          });
          loadError === null || loadError === void 0 ? void 0 : loadError(src, new Error(WUJIE_TIPS_SCRIPT_ERROR_REQUESTED));
          throw new Error(WUJIE_TIPS_SCRIPT_ERROR_REQUESTED);
        }
      }

      return response.text();
    })["catch"](function (e) {
      cache[src] = null;

      if (cssFlag) {
        error(WUJIE_TIPS_CSS_ERROR_REQUESTED, src);
        loadError === null || loadError === void 0 ? void 0 : loadError(src, e);
        return "";
      } else {
        error(WUJIE_TIPS_SCRIPT_ERROR_REQUESTED, src);
        loadError === null || loadError === void 0 ? void 0 : loadError(src, e);
        return "";
      }
    }));
  }; // for prefetch


  function _getExternalStyleSheets(styles) {
    var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFetch;
    var loadError = arguments.length > 2 ? arguments[2] : undefined;
    return styles.map(function (_ref) {
      var src = _ref.src,
          content = _ref.content,
          ignore = _ref.ignore;

      // 内联
      if (content) {
        return {
          src: "",
          contentPromise: Promise.resolve(content)
        };
      } else if (isInlineCode(src)) {
        // if it is inline style
        return {
          src: "",
          contentPromise: Promise.resolve(getInlineCode(src))
        };
      } else {
        // external styles
        return {
          src: src,
          ignore: ignore,
          contentPromise: ignore ? Promise.resolve("") : fetchAssets(src, styleCache, fetch, true, loadError)
        };
      }
    });
  } // for prefetch

  function _getExternalScripts(scripts) {
    var fetch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFetch;
    var loadError = arguments.length > 2 ? arguments[2] : undefined;
    var fiber = arguments.length > 3 ? arguments[3] : undefined;
    // module should be requested in iframe
    return scripts.map(function (script) {
      var src = script.src,
          async = script.async,
          defer = script.defer,
          module = script.module,
          ignore = script.ignore;
      var contentPromise = null; // async

      if ((async || defer) && src && !module) {
        contentPromise = new Promise(function (resolve, reject) {
          return fiber ? requestIdleCallback(function () {
            return fetchAssets(src, scriptCache, fetch, false, loadError).then(resolve, reject);
          }) : fetchAssets(src, scriptCache, fetch, false, loadError).then(resolve, reject);
        }); // module || ignore
      } else if (module && src || ignore) {
        contentPromise = Promise.resolve(""); // inline
      } else if (!src) {
        contentPromise = Promise.resolve(script.content); // outline
      } else {
        contentPromise = fetchAssets(src, scriptCache, fetch, false, loadError);
      }

      return _objectSpread$4(_objectSpread$4({}, script), {}, {
        contentPromise: contentPromise
      });
    });
  }
  function importHTML(url, opts) {
    var _opts$fetch, _opts$fiber;

    var fetch = (_opts$fetch = opts.fetch) !== null && _opts$fetch !== void 0 ? _opts$fetch : defaultFetch;
    var fiber = (_opts$fiber = opts.fiber) !== null && _opts$fiber !== void 0 ? _opts$fiber : true;
    var plugins = opts.plugins,
        loadError = opts.loadError;
    var htmlLoader = plugins ? compose(plugins.map(function (plugin) {
      return plugin.htmlLoader;
    })) : defaultGetTemplate;
    var jsExcludes = getEffectLoaders("jsExcludes", plugins);
    var cssExcludes = getEffectLoaders("cssExcludes", plugins);
    var jsIgnores = getEffectLoaders("jsIgnores", plugins);
    var cssIgnores = getEffectLoaders("cssIgnores", plugins);
    var getPublicPath = defaultGetPublicPath;

    var getHtmlParseResult = function getHtmlParseResult(url, htmlLoader) {
      return fetch(url).then(function (response) {
        return response.text();
      }, function (e) {
        loadError === null || loadError === void 0 ? void 0 : loadError(url, e);
        return Promise.reject(e);
      }).then(function (html) {
        var assetPublicPath = getPublicPath(url);

        var _processTpl = processTpl(htmlLoader(html), assetPublicPath),
            template = _processTpl.template,
            scripts = _processTpl.scripts,
            styles = _processTpl.styles;

        return {
          template: template,
          assetPublicPath: assetPublicPath,
          getExternalScripts: function getExternalScripts() {
            return _getExternalScripts(scripts.filter(function (script) {
              return !script.src || !isMatchUrl(script.src, jsExcludes);
            }).map(function (script) {
              return _objectSpread$4(_objectSpread$4({}, script), {}, {
                ignore: script.src && isMatchUrl(script.src, jsIgnores)
              });
            }), fetch, loadError, fiber);
          },
          getExternalStyleSheets: function getExternalStyleSheets() {
            return _getExternalStyleSheets(styles.filter(function (style) {
              return !style.src || !isMatchUrl(style.src, cssExcludes);
            }).map(function (style) {
              return _objectSpread$4(_objectSpread$4({}, style), {}, {
                ignore: style.src && isMatchUrl(style.src, cssIgnores)
              });
            }), fetch, loadError);
          }
        };
      });
    };

    if (opts !== null && opts !== void 0 && opts.plugins.some(function (plugin) {
      return plugin.htmlLoader;
    })) {
      return getHtmlParseResult(url, htmlLoader); // 没有html-loader可以做缓存
    } else {
      return embedHTMLCache[url] || (embedHTMLCache[url] = getHtmlParseResult(url, htmlLoader));
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct$1()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  // 全部无界实例和配置存储map
  var idToSandboxCacheMap = window.__POWERED_BY_WUJIE__ ? window.__WUJIE.inject.idToSandboxMap : new Map();
  function getWujieById(id) {
    var _idToSandboxCacheMap$;

    return ((_idToSandboxCacheMap$ = idToSandboxCacheMap.get(id)) === null || _idToSandboxCacheMap$ === void 0 ? void 0 : _idToSandboxCacheMap$.wujie) || null;
  }
  function getOptionsById(id) {
    var _idToSandboxCacheMap$2;

    return ((_idToSandboxCacheMap$2 = idToSandboxCacheMap.get(id)) === null || _idToSandboxCacheMap$2 === void 0 ? void 0 : _idToSandboxCacheMap$2.options) || null;
  }
  function addSandboxCacheWithWujie(id, sandbox) {
    var wujieCache = idToSandboxCacheMap.get(id);
    if (wujieCache) idToSandboxCacheMap.set(id, _objectSpread$3(_objectSpread$3({}, wujieCache), {}, {
      wujie: sandbox
    }));else idToSandboxCacheMap.set(id, {
      wujie: sandbox
    });
  }
  function deleteWujieById(id) {
    var wujieCache = idToSandboxCacheMap.get(id);
    if (wujieCache !== null && wujieCache !== void 0 && wujieCache.options) idToSandboxCacheMap.set(id, {
      options: wujieCache.options
    });
    idToSandboxCacheMap["delete"](id);
  }

  var documentProxyProperties = {
    // 降级场景下需要本地特殊处理的属性
    modifyLocalProperties: ["createElement", "createTextNode", "documentURI", "URL", "getElementsByTagName"],
    // 子应用需要手动修正的属性方法
    modifyProperties: ["createElement", "createTextNode", "documentURI", "URL", "getElementsByTagName", "getElementsByClassName", "getElementsByName", "getElementById", "querySelector", "querySelectorAll", "documentElement", "scrollingElement", "forms", "images", "links"],
    // 需要从shadowRoot中获取的属性
    shadowProperties: ["activeElement", "childElementCount", "children", "firstElementChild", "firstChild", "fullscreenElement", "lastElementChild", "pictureInPictureElement", "pointerLockElement", "styleSheets"],
    // 需要从shadowRoot中获取的方法
    shadowMethods: ["append", "contains", "getSelection", "elementFromPoint", "elementsFromPoint", "getAnimations", "replaceChildren"],
    // 需要从主应用document中获取的属性
    documentProperties: ["characterSet", "compatMode", "contentType", "designMode", "dir", "doctype", "embeds", "fullscreenEnabled", "hidden", "implementation", "lastModified", "pictureInPictureEnabled", "plugins", "readyState", "referrer", "visibilityState", "fonts"],
    // 需要从主应用document中获取的方法
    documentMethods: ["execCommand", "createRange", "exitFullscreen", "exitPictureInPicture", "getElementsByTagNameNS", "hasFocus", "prepend"],
    // 需要从主应用document中获取的事件
    documentEvents: ["onpointerlockchange", "onpointerlockerror", "onbeforecopy", "onbeforecut", "onbeforepaste", "onfreeze", "onresume", "onsearch", "onfullscreenchange", "onfullscreenerror", "onsecuritypolicyviolation", "onvisibilitychange"],
    // 无需修改原型的属性
    ownerProperties: ["head", "body"]
  }; // 需要挂载到子应用iframe document上的事件

  var appDocumentAddEventListenerEvents = ["DOMContentLoaded", "readystatechange"];
  var appDocumentOnEvents = ["onreadystatechange"]; // 需要挂载到主应用document上的事件

  var mainDocumentAddEventListenerEvents = ["fullscreenchange", "fullscreenerror", "selectionchange", "visibilitychange", "wheel"]; // 需要同时挂载到主应用document和shadow上的事件（互斥）

  var mainAndAppAddEventListenerEvents = ["gotpointercapture", "lostpointercapture"]; // 子应用window监听需要挂载到iframe沙箱上的事件

  var appWindowAddEventListenerEvents = ["hashchange", "popstate", "DOMContentLoaded", "load", "beforeunload", "unload"]; // 子应用window.onXXX需要挂载到iframe沙箱上的事件

  var appWindowOnEvent = ["onload", "onbeforeunload", "onunload"]; // 相对路径问题元素的tag和attr的map

  var relativeElementTagAttrMap = {
    IMG: "src",
    A: "href",
    SOURCE: "src"
  }; // 需要单独处理的window属性

  var windowProxyProperties = ["getComputedStyle", "visualViewport", "matchMedia", "DOMParser"]; // window白名单

  var windowRegWhiteList = [/animationFrame$/i, /resizeObserver$|mutationObserver$|intersectionObserver$/i, /height$|width$|left$/i, /^screen/i, /X$|Y$/]; // 保存原型方法

  var rawElementAppendChild = HTMLElement.prototype.appendChild;
  var rawElementRemoveChild = HTMLElement.prototype.removeChild;
  var rawHeadInsertBefore = HTMLHeadElement.prototype.insertBefore;
  var rawBodyInsertBefore = HTMLBodyElement.prototype.insertBefore;
  var rawAddEventListener = EventTarget.prototype.addEventListener;
  var rawRemoveEventListener = EventTarget.prototype.removeEventListener;
  var rawAppendChild = Node.prototype.appendChild;
  var rawDocumentQuerySelector = window.__POWERED_BY_WUJIE__ ? window.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__ : Document.prototype.querySelector;

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function patchCustomEvent(e, elementGetter) {
    Object.defineProperties(e, {
      srcElement: {
        get: elementGetter
      },
      target: {
        get: elementGetter
      }
    });
    return e;
  }
  /**
   * 手动触发事件回调
   */


  function manualInvokeElementEvent(element, event) {
    var customEvent = new CustomEvent(event);
    var patchedEvent = patchCustomEvent(customEvent, function () {
      return element;
    });

    if (isFunction(element["on".concat(event)])) {
      element["on".concat(event)](patchedEvent);
    } else {
      element.dispatchEvent(patchedEvent);
    }
  }
  /**
   * 样式元素的css变量处理，每个stylesheetElement单独节流
   */


  function handleStylesheetElementPatch(stylesheetElement, sandbox) {
    if (!stylesheetElement.innerHTML || sandbox.degrade) return;

    var patcher = function patcher() {
      var _getPatchStyleElement = getPatchStyleElements([stylesheetElement.sheet]),
          _getPatchStyleElement2 = _slicedToArray(_getPatchStyleElement, 2),
          hostStyleSheetElement = _getPatchStyleElement2[0],
          fontStyleSheetElement = _getPatchStyleElement2[1];

      if (hostStyleSheetElement) {
        sandbox.shadowRoot.head.appendChild(hostStyleSheetElement);
      }

      if (fontStyleSheetElement) {
        sandbox.shadowRoot.host.appendChild(fontStyleSheetElement);
      }

      stylesheetElement._patcher = undefined;
    };

    if (stylesheetElement._patcher) {
      clearTimeout(stylesheetElement._patcher);
    }

    stylesheetElement._patcher = setTimeout(patcher, 50);
  }
  /**
   * 劫持处理样式元素的属性
   */


  function patchStylesheetElement(stylesheetElement, cssLoader, sandbox, curUrl) {
    var _stylesheetElement$sh;

    if (stylesheetElement._hasPatchStyle) return;
    var innerHTMLDesc = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML");
    var innerTextDesc = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerText");
    var textContentDesc = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
    var RawInsertRule = (_stylesheetElement$sh = stylesheetElement.sheet) === null || _stylesheetElement$sh === void 0 ? void 0 : _stylesheetElement$sh.insertRule; // 这个地方将cssRule加到innerHTML中去，防止子应用切换之后丢失

    function patchSheetInsertRule() {
      if (!RawInsertRule) return;

      stylesheetElement.sheet.insertRule = function (rule, index) {
        stylesheetElement.innerHTML += rule;
        return RawInsertRule.call(stylesheetElement.sheet, rule, index);
      };
    }

    patchSheetInsertRule();
    Object.defineProperties(stylesheetElement, {
      innerHTML: {
        get: function get() {
          return innerHTMLDesc.get.call(stylesheetElement);
        },
        set: function set(code) {
          var _this = this;

          innerHTMLDesc.set.call(stylesheetElement, cssLoader(code, "", curUrl));
          nextTick(function () {
            return handleStylesheetElementPatch(_this, sandbox);
          });
        }
      },
      innerText: {
        get: function get() {
          return innerTextDesc.get.call(stylesheetElement);
        },
        set: function set(code) {
          var _this2 = this;

          innerTextDesc.set.call(stylesheetElement, cssLoader(code, "", curUrl));
          nextTick(function () {
            return handleStylesheetElementPatch(_this2, sandbox);
          });
        }
      },
      textContent: {
        get: function get() {
          return textContentDesc.get.call(stylesheetElement);
        },
        set: function set(code) {
          var _this3 = this;

          textContentDesc.set.call(stylesheetElement, cssLoader(code, "", curUrl));
          nextTick(function () {
            return handleStylesheetElementPatch(_this3, sandbox);
          });
        }
      },
      appendChild: {
        value: function value(node) {
          var _this4 = this;

          nextTick(function () {
            return handleStylesheetElementPatch(_this4, sandbox);
          });

          if (node.nodeType === Node.TEXT_NODE) {
            var res = rawAppendChild.call(stylesheetElement, stylesheetElement.ownerDocument.createTextNode(cssLoader(node.textContent, "", curUrl))); // 当appendChild之后，样式元素的sheet对象发生改变，要重新patch

            patchSheetInsertRule();
            return res;
          } else return rawAppendChild(node);
        }
      },
      _hasPatchStyle: {
        get: function get() {
          return true;
        }
      }
    });
  }

  function rewriteAppendOrInsertChild(opts) {
    return function appendChildOrInsertBefore(newChild, refChild) {
      var _element$tagName,
          _this5 = this;

      var element = newChild;
      var rawDOMAppendOrInsertBefore = opts.rawDOMAppendOrInsertBefore,
          wujieId = opts.wujieId;
      var sandbox = getWujieById(wujieId);
      var styleSheetElements = sandbox.styleSheetElements,
          replace = sandbox.replace,
          fetch = sandbox.fetch,
          plugins = sandbox.plugins,
          iframe = sandbox.iframe,
          lifecycles = sandbox.lifecycles,
          proxyLocation = sandbox.proxyLocation,
          fiber = sandbox.fiber;

      if (!isHijackingTag(element.tagName) || !wujieId) {
        var res = rawDOMAppendOrInsertBefore.call(this, element, refChild);
        patchElementEffect(element, iframe.contentWindow);
        return res;
      }

      var iframeDocument = iframe.contentDocument;
      var curUrl = getCurUrl(proxyLocation); // TODO 过滤可以开放

      if (element.tagName) {
        switch ((_element$tagName = element.tagName) === null || _element$tagName === void 0 ? void 0 : _element$tagName.toUpperCase()) {
          case "LINK":
            {
              var _ref = element,
                  href = _ref.href,
                  rel = _ref.rel,
                  type = _ref.type;
              var styleFlag = rel === "stylesheet" || type === "text/css" || href.endsWith(".css"); // 非 stylesheet 不做处理

              if (!styleFlag) return rawDOMAppendOrInsertBefore.call(this, element, refChild); // 排除css

              if (href && !isMatchUrl(href, getEffectLoaders("cssExcludes", plugins))) {
                _getExternalStyleSheets([{
                  src: href,
                  ignore: isMatchUrl(href, getEffectLoaders("cssIgnores", plugins))
                }], fetch, lifecycles.loadError).forEach(function (_ref2) {
                  var src = _ref2.src,
                      ignore = _ref2.ignore,
                      contentPromise = _ref2.contentPromise;
                  return contentPromise.then(function (content) {
                    // 处理 ignore 样式
                    if (ignore && src) {
                      var stylesheetElement = iframeDocument.createElement("link");
                      stylesheetElement.setAttribute("type", "text/css");
                      stylesheetElement.setAttribute("ref", "stylesheet");
                      rawDOMAppendOrInsertBefore.call(_this5, stylesheetElement, refChild);
                      manualInvokeElementEvent(element, "load");
                    } else {
                      // 记录js插入样式，子应用重新激活时恢复
                      var _stylesheetElement = iframeDocument.createElement("style"); // 处理css-loader插件


                      var cssLoader = getCssLoader({
                        plugins: plugins,
                        replace: replace
                      });
                      _stylesheetElement.innerHTML = cssLoader(content, src, curUrl);
                      styleSheetElements.push(_stylesheetElement);
                      rawDOMAppendOrInsertBefore.call(_this5, _stylesheetElement, refChild); // 处理样式补丁

                      handleStylesheetElementPatch(_stylesheetElement, sandbox);
                      manualInvokeElementEvent(element, "load");
                    }

                    element = null;
                  }, function () {
                    manualInvokeElementEvent(element, "error");
                    element = null;
                  });
                });
              }

              var comment = iframeDocument.createComment("dynamic link ".concat(href, " replaced by wujie"));
              return rawDOMAppendOrInsertBefore.call(this, comment, refChild);
            }

          case "STYLE":
            {
              var stylesheetElement = newChild;
              styleSheetElements.push(stylesheetElement);
              var content = stylesheetElement.innerHTML;
              var cssLoader = getCssLoader({
                plugins: plugins,
                replace: replace
              });
              content && (stylesheetElement.innerHTML = cssLoader(content, "", curUrl));

              var _res = rawDOMAppendOrInsertBefore.call(this, element, refChild); // 处理样式补丁


              patchStylesheetElement(stylesheetElement, cssLoader, sandbox, curUrl);
              handleStylesheetElementPatch(stylesheetElement, sandbox);
              return _res;
            }

          case "SCRIPT":
            {
              var _ref3 = element,
                  src = _ref3.src,
                  text = _ref3.text,
                  _type = _ref3.type,
                  crossOrigin = _ref3.crossOrigin; // 排除js

              if (src && !isMatchUrl(src, getEffectLoaders("jsExcludes", plugins))) {
                var execScript = function execScript(scriptResult) {
                  // 假如子应用被连续渲染两次，两次渲染会导致处理流程的交叉污染
                  if (sandbox.iframe === null) return warn(WUJIE_TIPS_REPEAT_RENDER);

                  var onload = function onload() {
                    manualInvokeElementEvent(element, "load");
                    element = null;
                  };

                  insertScriptToIframe(_objectSpread$2(_objectSpread$2({}, scriptResult), {}, {
                    onload: onload
                  }), sandbox.iframe.contentWindow);
                };

                var scriptOptions = {
                  src: src,
                  module: _type === "module",
                  crossorigin: crossOrigin !== null,
                  crossoriginType: crossOrigin || "",
                  ignore: isMatchUrl(src, getEffectLoaders("jsIgnores", plugins))
                };
                _getExternalScripts([scriptOptions], fetch, lifecycles.loadError, fiber).forEach(function (scriptResult) {
                  return scriptResult.contentPromise.then(function (content) {
                    var _sandbox$execQueue;

                    if (sandbox.execQueue === null) return warn(WUJIE_TIPS_REPEAT_RENDER);
                    var execQueueLength = (_sandbox$execQueue = sandbox.execQueue) === null || _sandbox$execQueue === void 0 ? void 0 : _sandbox$execQueue.length;
                    sandbox.execQueue.push(function () {
                      return fiber ? requestIdleCallback(function () {
                        execScript(_objectSpread$2(_objectSpread$2({}, scriptResult), {}, {
                          content: content
                        }));
                      }) : execScript(_objectSpread$2(_objectSpread$2({}, scriptResult), {}, {
                        content: content
                      }));
                    }); // 同步脚本如果都执行完了，需要手动触发执行

                    if (!execQueueLength) sandbox.execQueue.shift()();
                  }, function () {
                    manualInvokeElementEvent(element, "error");
                    element = null;
                  });
                });
              } else {
                var _sandbox$execQueue2;

                var execQueueLength = (_sandbox$execQueue2 = sandbox.execQueue) === null || _sandbox$execQueue2 === void 0 ? void 0 : _sandbox$execQueue2.length;
                sandbox.execQueue.push(function () {
                  return fiber ? requestIdleCallback(function () {
                    insertScriptToIframe({
                      src: null,
                      content: text
                    }, sandbox.iframe.contentWindow);
                  }) : insertScriptToIframe({
                    src: null,
                    content: text
                  }, sandbox.iframe.contentWindow);
                });
                if (!execQueueLength) sandbox.execQueue.shift()();
              } // inline script never trigger the onload and onerror event


              var _comment = iframeDocument.createComment("dynamic script ".concat(src, " replaced by wujie"));

              return rawDOMAppendOrInsertBefore.call(this, _comment, refChild);
            }
          // 修正子应用内部iframe的window.parent指向

          case "IFRAME":
            {
              // 嵌套的子应用的js-iframe需要插入子应用的js-iframe内部
              if (element.getAttribute(WUJIE_DATA_FLAG) === "") {
                return rawAppendChild.call(rawDocumentQuerySelector.call(this.ownerDocument, "html"), element);
              }

              var _res2 = rawDOMAppendOrInsertBefore.call(this, element, refChild);

              try {
                // 降级的dom-iframe无需处理
                if (!element.getAttribute(WUJIE_DATA_ID)) {
                  var patchScript = element.contentWindow.document.createElement("script");
                  patchScript.type = "text/javascript";
                  patchScript.innerHTML = "Array.prototype.slice.call(window.parent.frames).some(function(iframe){if(iframe.name === '".concat(wujieId, "'){window.parent = iframe;return true};return false})");
                  element.contentDocument.head.insertBefore(patchScript, element.contentDocument.head.firstChild);
                }
              } catch (e) {
                error(e);
              }

              return _res2;
            }
        }
      }
    };
  }
  /**
   * 记录head和body的事件，等重新渲染复用head和body时需要清空事件
   */


  function patchEventListener(element) {
    var listenerMap = new Map();
    element._cacheListeners = listenerMap;

    element.addEventListener = function (type, listener, options) {
      var listeners = listenerMap.get(type) || [];
      listenerMap.set(type, [].concat(_toConsumableArray(listeners), [listener]));
      return rawAddEventListener.call(element, type, listener, options);
    };

    element.removeEventListener = function (type, listener, options) {
      var typeListeners = listenerMap.get(type);
      var index = typeListeners === null || typeListeners === void 0 ? void 0 : typeListeners.indexOf(listener);

      if (typeListeners !== null && typeListeners !== void 0 && typeListeners.length && index !== -1) {
        typeListeners.splice(index, 1);
      }

      return rawRemoveEventListener.call(element, type, listener, options);
    };
  }
  /**
   * 清空head和body的绑定的事件
   */


  function removeEventListener(element) {
    var listenerMap = element._cacheListeners;

    _toConsumableArray(listenerMap.entries()).forEach(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          type = _ref5[0],
          listeners = _ref5[1];

      listeners.forEach(function (listener) {
        return rawRemoveEventListener.call(element, type, listener);
      });
    });
  }
  /**
   * patch head and body in render
   * intercept appendChild and insertBefore
   */

  function patchRenderEffect(render, id, degrade) {
    // 降级场景dom渲染在iframe中，iframe移动后事件自动销毁，不需要记录
    if (!degrade) {
      patchEventListener(render.head);
      patchEventListener(render.body);
    }

    render.head.appendChild = rewriteAppendOrInsertChild({
      rawDOMAppendOrInsertBefore: rawAppendChild,
      wujieId: id
    });
    render.head.insertBefore = rewriteAppendOrInsertChild({
      rawDOMAppendOrInsertBefore: rawHeadInsertBefore,
      wujieId: id
    });
    render.body.appendChild = rewriteAppendOrInsertChild({
      rawDOMAppendOrInsertBefore: rawAppendChild,
      wujieId: id
    });
    render.body.insertBefore = rewriteAppendOrInsertChild({
      rawDOMAppendOrInsertBefore: rawBodyInsertBefore,
      wujieId: id
    });
  }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var cssSelectorMap = {
    ":root": ":host"
  };

  /**
   * 制作webComponent沙箱
   */
  var WujieApp = /*#__PURE__*/function (_HTMLElement) {
    _inherits(WujieApp, _HTMLElement);

    var _super = _createSuper(WujieApp);

    function WujieApp() {
      _classCallCheck(this, WujieApp);

      return _super.apply(this, arguments);
    }

    _createClass(WujieApp, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        if (this.shadowRoot) return;
        var shadowRoot = this.attachShadow({
          mode: "open"
        });
        var sandbox = getWujieById(this.getAttribute(WUJIE_DATA_ID));
        patchElementEffect(shadowRoot, sandbox.iframe.contentWindow);
        sandbox.shadowRoot = shadowRoot;
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var sandbox = getWujieById(this.getAttribute(WUJIE_DATA_ID));
        sandbox === null || sandbox === void 0 ? void 0 : sandbox.unmount();
      }
    }]);

    return WujieApp;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  /**
   * 定义 wujie webComponent，将shadow包裹并获得dom装载和卸载的生命周期
   */


  function defineWujieWebComponent() {
    if (!customElements.get("wujie-app")) {
      customElements.define("wujie-app", WujieApp);
    }
  }
  function createWujieWebComponent(id) {
    var contentElement = window.document.createElement("wujie-app");
    contentElement.setAttribute(WUJIE_DATA_ID, id);
    contentElement.classList.add(WUJIE_IFRAME_CLASS);
    return contentElement;
  }
  /**
   * 将准备好的内容插入容器
   */

  function renderElementToContainer(element, selectorOrElement) {
    var container = getContainer(selectorOrElement);

    if (container && !container.contains(element)) {
      // 有 loading 无需清理，已经清理过了
      if (!container.querySelector("div[".concat(LOADING_DATA_FLAG, "]"))) {
        // 清除内容
        clearChild(container);
      } // 插入元素


      if (element) {
        rawElementAppendChild.call(container, element);
      }
    }

    return container;
  }
  /**
   * 处理css-before-loader 以及 css-after-loader
   */

  function processCssLoaderForTemplate(_x, _x2) {
    return _processCssLoaderForTemplate.apply(this, arguments);
  } // 替换html的head和body


  function _processCssLoaderForTemplate() {
    _processCssLoaderForTemplate = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(sandbox, html) {
      var document, plugins, replace, proxyLocation, cssLoader, cssBeforeLoaders, cssAfterLoaders, curUrl;
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              document = sandbox.iframe.contentDocument;
              plugins = sandbox.plugins, replace = sandbox.replace, proxyLocation = sandbox.proxyLocation;
              cssLoader = getCssLoader({
                plugins: plugins,
                replace: replace
              });
              cssBeforeLoaders = getPresetLoaders("cssBeforeLoaders", plugins);
              cssAfterLoaders = getPresetLoaders("cssAfterLoaders", plugins);
              curUrl = getCurUrl(proxyLocation);
              _context.next = 8;
              return Promise.all([Promise.all(_getExternalStyleSheets(cssBeforeLoaders, sandbox.fetch, sandbox.lifecycles.loadError).map(function (_ref) {
                var src = _ref.src,
                    contentPromise = _ref.contentPromise;
                return contentPromise.then(function (content) {
                  return {
                    src: src,
                    content: content
                  };
                });
              })).then(function (contentList) {
                contentList.forEach(function (_ref2) {
                  var src = _ref2.src,
                      content = _ref2.content;
                  if (!content) return;
                  var styleElement = document.createElement("style");
                  styleElement.setAttribute("type", "text/css");
                  styleElement.appendChild(document.createTextNode(content ? cssLoader(content, src, curUrl) : content));
                  var head = html.querySelector("head");
                  var body = html.querySelector("body");
                  html.insertBefore(styleElement, head || body || html.firstChild);
                });
              }), Promise.all(_getExternalStyleSheets(cssAfterLoaders, sandbox.fetch, sandbox.lifecycles.loadError).map(function (_ref3) {
                var src = _ref3.src,
                    contentPromise = _ref3.contentPromise;
                return contentPromise.then(function (content) {
                  return {
                    src: src,
                    content: content
                  };
                });
              })).then(function (contentList) {
                contentList.forEach(function (_ref4) {
                  var src = _ref4.src,
                      content = _ref4.content;
                  if (!content) return;
                  var styleElement = document.createElement("style");
                  styleElement.setAttribute("type", "text/css");
                  styleElement.appendChild(document.createTextNode(content ? cssLoader(content, src, curUrl) : content));
                  html.appendChild(styleElement);
                });
              })]).then(function () {
                return html;
              }, function () {
                return html;
              });

            case 8:
              return _context.abrupt("return", _context.sent);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _processCssLoaderForTemplate.apply(this, arguments);
  }

  function replaceHeadAndBody(html, head, body) {
    var headElement = html.querySelector("head");
    var bodyElement = html.querySelector("body");

    if (headElement) {
      while (headElement.firstChild) {
        rawAppendChild.call(head, headElement.firstChild.cloneNode(true));
        headElement.removeChild(headElement.firstChild);
      }

      headElement.parentNode.replaceChild(head, headElement);
    }

    if (bodyElement) {
      while (bodyElement.firstChild) {
        rawAppendChild.call(body, bodyElement.firstChild.cloneNode(true));
        bodyElement.removeChild(bodyElement.firstChild);
      }

      bodyElement.parentNode.replaceChild(body, bodyElement);
    }

    return html;
  }
  /**
   * 将template渲染成html元素
   */


  function renderTemplateToHtml(iframeWindow, template) {
    var sandbox = iframeWindow.__WUJIE;
    var head = sandbox.head,
        body = sandbox.body,
        alive = sandbox.alive,
        execFlag = sandbox.execFlag;
    var document = iframeWindow.document;
    var html = document.createElement("html");
    html.innerHTML = template; // 组件多次渲染，head和body必须一直使用同一个来应对被缓存的场景

    if (!alive && execFlag) {
      html = replaceHeadAndBody(html, head, body);
    } else {
      sandbox.head = html.querySelector("head");
      sandbox.body = html.querySelector("body");
    }

    var ElementIterator = document.createTreeWalker(html, NodeFilter.SHOW_ELEMENT);
    var nextElement = ElementIterator.currentNode;

    while (nextElement) {
      patchElementEffect(nextElement, iframeWindow);
      var relativeAttr = relativeElementTagAttrMap[nextElement.tagName];
      var url = nextElement[relativeAttr];
      if (relativeAttr) nextElement.setAttribute(relativeAttr, getAbsolutePath(url, nextElement.baseURI || ""));
      nextElement = ElementIterator.nextNode();
    }

    if (!html.querySelector("head")) {
      var _head = document.createElement("head");

      html.appendChild(_head);
    }

    if (!html.querySelector("body")) {
      var _body = document.createElement("body");

      html.appendChild(_body);
    }

    return html;
  }
  /**
   * 将template渲染到shadowRoot
   */


  function renderTemplateToShadowRoot(_x3, _x4, _x5) {
    return _renderTemplateToShadowRoot.apply(this, arguments);
  }

  function _renderTemplateToShadowRoot() {
    _renderTemplateToShadowRoot = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(shadowRoot, iframeWindow, template) {
      var html, processedHtml, shade;
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              html = renderTemplateToHtml(iframeWindow, template); // 处理 css-before-loader 和 css-after-loader

              _context2.next = 3;
              return processCssLoaderForTemplate(iframeWindow.__WUJIE, html);

            case 3:
              processedHtml = _context2.sent;
              // change ownerDocument
              shadowRoot.appendChild(processedHtml);
              shade = document.createElement("div");
              shade.setAttribute("style", WUJIE_SHADE_STYLE);
              processedHtml.insertBefore(shade, processedHtml.firstChild);
              shadowRoot.head = shadowRoot.querySelector("head");
              shadowRoot.body = shadowRoot.querySelector("body"); // 修复 html parentNode

              Object.defineProperty(shadowRoot.firstChild, "parentNode", {
                enumerable: true,
                configurable: true,
                get: function get() {
                  return iframeWindow.document;
                }
              });
              patchRenderEffect(shadowRoot, iframeWindow.__WUJIE.id, false);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _renderTemplateToShadowRoot.apply(this, arguments);
  }

  function createIframeContainer(id) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("style", "width: 100%; height:100%");
    iframe.setAttribute(WUJIE_DATA_ID, id);
    return iframe;
  }
  /**
   * 将template渲染到iframe
   */

  function renderTemplateToIframe(_x6, _x7, _x8) {
    return _renderTemplateToIframe.apply(this, arguments);
  }
  /**
   * 清除Element所有节点
   */

  function _renderTemplateToIframe() {
    _renderTemplateToIframe = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(renderDocument, iframeWindow, template) {
      var html, processedHtml;
      return regenerator.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // 清除iframe
              clearChild(renderDocument); // 插入template

              html = renderTemplateToHtml(iframeWindow, template); // 处理 css-before-loader 和 css-after-loader

              _context3.next = 4;
              return processCssLoaderForTemplate(iframeWindow.__WUJIE, html);

            case 4:
              processedHtml = _context3.sent;
              renderDocument.appendChild(processedHtml); // 修复 html parentNode

              Object.defineProperty(renderDocument.firstElementChild, "parentNode", {
                enumerable: true,
                configurable: true,
                get: function get() {
                  return iframeWindow.document;
                }
              });
              patchRenderEffect(renderDocument, iframeWindow.__WUJIE.id, true);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _renderTemplateToIframe.apply(this, arguments);
  }

  function clearChild(root) {
    // 清除内容
    while (root !== null && root !== void 0 && root.firstChild) {
      rawElementRemoveChild.call(root, root.firstChild);
    }
  }
  /**
   * 给容器添加loading
   */

  function addLoading(el, loading) {
    var container = getContainer(el);
    clearChild(container); // 给容器设置一些样式，防止 loading 抖动

    var containerStyles = window.getComputedStyle(container);

    if (containerStyles.position === "static") {
      container.setAttribute(CONTAINER_POSITION_DATA_FLAG, containerStyles.position);
      container.setAttribute(CONTAINER_OVERFLOW_DATA_FLAG, containerStyles.overflow === "visible" ? "" : containerStyles.overflow);
      container.style.setProperty("position", "relative");
      container.style.setProperty("overflow", "hidden");
    } else if (["relative", "sticky"].includes(containerStyles.position)) {
      container.setAttribute(CONTAINER_OVERFLOW_DATA_FLAG, containerStyles.overflow === "visible" ? "" : containerStyles.overflow);
      container.style.setProperty("overflow", "hidden");
    }

    var loadingContainer = document.createElement("div");
    loadingContainer.setAttribute(LOADING_DATA_FLAG, "");
    loadingContainer.setAttribute("style", WUJIE_LOADING_STYLE);
    if (loading) loadingContainer.appendChild(loading);else loadingContainer.innerHTML = WUJIE_LOADING_SVG;
    container.appendChild(loadingContainer);
  }
  /**
   * 移除loading
   */

  function removeLoading(el) {
    // 去除容器设置的样式
    var positionFlag = el.getAttribute(CONTAINER_POSITION_DATA_FLAG);
    var overflowFlag = el.getAttribute(CONTAINER_OVERFLOW_DATA_FLAG);
    if (positionFlag) el.style.removeProperty("position");

    if (overflowFlag !== null) {
      overflowFlag ? el.style.setProperty("overflow", overflowFlag) : el.style.removeProperty("overflow");
    }

    el.removeAttribute(CONTAINER_POSITION_DATA_FLAG);
    el.removeAttribute(CONTAINER_OVERFLOW_DATA_FLAG);
    var loadingContainer = el.querySelector("div[".concat(LOADING_DATA_FLAG, "]"));
    loadingContainer && el.removeChild(loadingContainer);
  }
  /**
   * 获取修复好的样式元素
   * 主要是针对对root样式和font-face样式
   */

  function getPatchStyleElements(rootStyleSheets) {
    var rootCssRules = [];
    var fontCssRules = [];
    var rootStyleReg = /:root/g; // 找出root的cssRules

    for (var i = 0; i < rootStyleSheets.length; i++) {
      var _rootStyleSheets$i$cs, _rootStyleSheets$i;

      var cssRules = (_rootStyleSheets$i$cs = (_rootStyleSheets$i = rootStyleSheets[i]) === null || _rootStyleSheets$i === void 0 ? void 0 : _rootStyleSheets$i.cssRules) !== null && _rootStyleSheets$i$cs !== void 0 ? _rootStyleSheets$i$cs : [];

      for (var j = 0; j < cssRules.length; j++) {
        var cssRuleText = cssRules[j].cssText; // 如果是root的cssRule

        if (rootStyleReg.test(cssRuleText)) {
          rootCssRules.push(cssRuleText.replace(rootStyleReg, function (match) {
            return cssSelectorMap[match];
          }));
        } // 如果是font-face的cssRule


        if (cssRules[j].type === CSSRule.FONT_FACE_RULE) {
          fontCssRules.push(cssRuleText);
        }
      }
    }

    var rootStyleSheetElement = null;
    var fontStyleSheetElement = null; // 复制到host上

    if (rootCssRules.length) {
      rootStyleSheetElement = window.document.createElement("style");
      rootStyleSheetElement.innerHTML = rootCssRules.join("");
    }

    if (fontCssRules.length) {
      fontStyleSheetElement = window.document.createElement("style");
      fontStyleSheetElement.innerHTML = fontCssRules.join("");
    }

    return [rootStyleSheetElement, fontStyleSheetElement];
  }

  /**
   * 同步子应用路由到主应用路由
   */

  function syncUrlToWindow(iframeWindow) {
    var _iframeWindow$__WUJIE = iframeWindow.__WUJIE,
        sync = _iframeWindow$__WUJIE.sync,
        id = _iframeWindow$__WUJIE.id,
        prefix = _iframeWindow$__WUJIE.prefix;
    var winUrlElement = anchorElementGenerator(window.location.href);
    var queryMap = getAnchorElementQueryMap(winUrlElement); // 非同步且url上没有当前id的查询参数，否则就要同步参数或者清理参数

    if (!sync && !queryMap[id]) return winUrlElement = null;
    var curUrl = iframeWindow.location.pathname + iframeWindow.location.search + iframeWindow.location.hash;
    var validShortPath = ""; // 处理短路径

    if (prefix) {
      Object.keys(prefix).forEach(function (shortPath) {
        var longPath = prefix[shortPath]; // 找出最长匹配路径

        if (curUrl.startsWith(longPath) && (!validShortPath || longPath.length > prefix[validShortPath].length)) {
          validShortPath = shortPath;
        }
      });
    } // 同步


    if (sync) {
      queryMap[id] = window.encodeURIComponent(validShortPath ? curUrl.replace(prefix[validShortPath], "{".concat(validShortPath, "}")) : curUrl); // 清理
    } else {
      delete queryMap[id];
    }

    var newQuery = "?" + Object.keys(queryMap).map(function (key) {
      return key + "=" + queryMap[key];
    }).join("&");
    winUrlElement.search = newQuery;

    if (winUrlElement.href !== window.location.href) {
      window.history.replaceState(null, "", winUrlElement.href);
    }

    winUrlElement = null;
  }
  /**
   * 同步主应用路由到子应用
   */

  function syncUrlToIframe(iframeWindow) {
    // 获取当前路由路径
    var _iframeWindow$locatio = iframeWindow.location,
        pathname = _iframeWindow$locatio.pathname,
        search = _iframeWindow$locatio.search,
        hash = _iframeWindow$locatio.hash;
    var _iframeWindow$__WUJIE2 = iframeWindow.__WUJIE,
        id = _iframeWindow$__WUJIE2.id,
        url = _iframeWindow$__WUJIE2.url,
        sync = _iframeWindow$__WUJIE2.sync,
        execFlag = _iframeWindow$__WUJIE2.execFlag,
        prefix = _iframeWindow$__WUJIE2.prefix,
        inject = _iframeWindow$__WUJIE2.inject; // 只在浏览器刷新或者第一次渲染时同步

    var idUrl = sync && !execFlag ? getSyncUrl(id, prefix) : url; // 排除href跳转情况

    var syncUrl = (/^http/.test(idUrl) ? null : idUrl) || url;

    var _appRouteParse = appRouteParse(syncUrl),
        appRoutePath = _appRouteParse.appRoutePath;

    var preAppRoutePath = pathname + search + hash;

    if (preAppRoutePath !== appRoutePath) {
      iframeWindow.history.replaceState(null, "", inject.mainHostPath + appRoutePath);
    }
  }
  /**
   * 清理非激活态的子应用同步参数
   * 主应用采用hash模式时，切换子应用后已销毁的子应用同步参数还存在需要手动清理
   */

  function clearInactiveAppUrl() {
    var winUrlElement = anchorElementGenerator(window.location.href);
    var queryMap = getAnchorElementQueryMap(winUrlElement);
    Object.keys(queryMap).forEach(function (id) {
      var _sandbox$shadowRoot;

      var sandbox = getWujieById(id);
      if (!sandbox) return; // 子应用执行过并且已经卸载才需要清除

      var clearFlag = sandbox.degrade ? !window.document.contains(getDegradeIframe(sandbox.id)) : !window.document.contains(sandbox === null || sandbox === void 0 ? void 0 : (_sandbox$shadowRoot = sandbox.shadowRoot) === null || _sandbox$shadowRoot === void 0 ? void 0 : _sandbox$shadowRoot.host);

      if (sandbox.execFlag && sandbox.sync && !sandbox.hrefFlag && clearFlag) {
        delete queryMap[id];
      }
    });
    var newQuery = "?" + Object.keys(queryMap).map(function (key) {
      return key + "=" + queryMap[key];
    }).join("&");
    winUrlElement.search = newQuery;

    if (winUrlElement.href !== window.location.href) {
      window.history.replaceState(null, "", winUrlElement.href);
    }

    winUrlElement = null;
  }
  /**
   * 推送指定url到主应用路由
   */

  function pushUrlToWindow(id, url) {
    var winUrlElement = anchorElementGenerator(window.location.href);
    var queryMap = getAnchorElementQueryMap(winUrlElement);
    queryMap[id] = window.encodeURIComponent(url);
    var newQuery = "?" + Object.keys(queryMap).map(function (key) {
      return key + "=" + queryMap[key];
    }).join("&");
    winUrlElement.search = newQuery;
    window.history.pushState(null, "", winUrlElement.href);
    winUrlElement = null;
  }
  /**
   * 应用跳转(window.location.href)情况路由处理
   */

  function processAppForHrefJump() {
    window.addEventListener("popstate", function () {
      var winUrlElement = anchorElementGenerator(window.location.href);
      var queryMap = getAnchorElementQueryMap(winUrlElement);
      winUrlElement = null;
      Object.keys(queryMap).map(function (id) {
        return getWujieById(id);
      }).filter(function (sandbox) {
        return sandbox;
      }).forEach(function (sandbox) {
        var url = queryMap[sandbox.id];
        var iframeBody = rawDocumentQuerySelector.call(sandbox.iframe.contentDocument, "body"); // 前进href

        if (/http/.test(url)) {
          if (sandbox.degrade) {
            renderElementToContainer(sandbox.document.firstElementChild, iframeBody);
            renderIframeReplaceApp(window.decodeURIComponent(url), getDegradeIframe(sandbox.id).parentElement);
          } else renderIframeReplaceApp(window.decodeURIComponent(url), sandbox.shadowRoot.host.parentElement);

          sandbox.hrefFlag = true; // href后退
        } else if (sandbox.hrefFlag) {
          if (sandbox.degrade) {
            // 走全套流程，但是事件恢复不需要
            var iframe = createIframeContainer(sandbox.id);
            renderElementToContainer(iframe, sandbox.el);
            clearChild(iframe.contentDocument);
            patchEventTimeStamp(iframe.contentWindow, sandbox.iframe.contentWindow);

            iframe.contentWindow.onunload = function () {
              sandbox.unmount();
            };

            iframe.contentDocument.appendChild(iframeBody.firstElementChild);
            sandbox.document = iframe.contentDocument;
          } else renderElementToContainer(sandbox.shadowRoot.host, sandbox.el);

          sandbox.hrefFlag = false;
        }
      });
    });
  }

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  /**
   * 修改window对象的事件监听，只有路由事件采用iframe的事件
   */
  function patchIframeEvents(iframeWindow) {
    iframeWindow.addEventListener = function addEventListener(type, listener, options) {
      // 运行插件钩子函数
      execHooks(iframeWindow.__WUJIE.plugins, "windowAddEventListenerHook", iframeWindow, type, listener, options);

      if (appWindowAddEventListenerEvents.includes(type)) {
        return rawAddEventListener.call(iframeWindow, type, listener, options);
      } // 在子应用嵌套场景使用window.window获取真实window


      rawAddEventListener.call(window.__WUJIE_RAW_WINDOW__ || window, type, listener, options);
    };

    iframeWindow.removeEventListener = function removeEventListener(type, listener, options) {
      // 运行插件钩子函数
      execHooks(iframeWindow.__WUJIE.plugins, "windowRemoveEventListenerHook", iframeWindow, type, listener, options);

      if (appWindowAddEventListenerEvents.includes(type)) {
        return rawRemoveEventListener.call(iframeWindow, type, listener, options);
      }

      rawRemoveEventListener.call(window.__WUJIE_RAW_WINDOW__ || window, type, listener, options);
    };
  }

  function patchIframeVariable(iframeWindow, appHostPath) {
    iframeWindow.__WUJIE_PUBLIC_PATH__ = appHostPath + "/";
    iframeWindow.$wujie = iframeWindow.__WUJIE.provide;
    iframeWindow.__WUJIE_RAW_WINDOW__ = iframeWindow;
    iframeWindow.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__ = iframeWindow.Document.prototype.querySelector;
    iframeWindow.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__ = iframeWindow.Document.prototype.querySelectorAll;
  }
  /**
   * 对iframe的history的pushState和replaceState进行修改
   * 将从location劫持后的数据修改回来，防止跨域错误
   * 同步路由到主应用
   * @param iframeWindow
   * @param appHostPath 子应用的 host path
   * @param mainHostPath 主应用的 host path
   */


  function patchIframeHistory(iframeWindow, appHostPath, mainHostPath) {
    var history = iframeWindow.history;
    var rawHistoryPushState = history.pushState;
    var rawHistoryReplaceState = history.replaceState;

    history.pushState = function (data, title, url) {
      var baseUrl = mainHostPath + iframeWindow.location.pathname + iframeWindow.location.search + iframeWindow.location.hash;
      var mainUrl = getAbsolutePath(url === null || url === void 0 ? void 0 : url.replace(appHostPath, ""), baseUrl);
      var ignoreFlag = url === undefined;
      rawHistoryPushState.call(history, data, title, ignoreFlag ? undefined : mainUrl);
      if (ignoreFlag) return;
      updateBase(iframeWindow, appHostPath, mainHostPath);
      syncUrlToWindow(iframeWindow);
    };

    history.replaceState = function (data, title, url) {
      var baseUrl = mainHostPath + iframeWindow.location.pathname + iframeWindow.location.search + iframeWindow.location.hash;
      var mainUrl = getAbsolutePath(url === null || url === void 0 ? void 0 : url.replace(appHostPath, ""), baseUrl);
      var ignoreFlag = url === undefined;
      rawHistoryReplaceState.call(history, data, title, ignoreFlag ? undefined : mainUrl);
      if (ignoreFlag) return;
      updateBase(iframeWindow, appHostPath, mainHostPath);
      syncUrlToWindow(iframeWindow);
    };
  }
  /**
   * 动态的修改iframe的base地址
   * @param iframeWindow
   * @param url
   * @param appHostPath
   * @param mainHostPath
   */


  function updateBase(iframeWindow, appHostPath, mainHostPath) {
    var _iframeWindow$locatio;

    var baseUrl = new URL((_iframeWindow$locatio = iframeWindow.location.href) === null || _iframeWindow$locatio === void 0 ? void 0 : _iframeWindow$locatio.replace(mainHostPath, ""), appHostPath);
    var baseElement = rawDocumentQuerySelector.call(iframeWindow.document, "base");
    if (baseElement) baseElement.setAttribute("href", appHostPath + baseUrl.pathname);
  }
  /**
   * patch iframe window effect
   * @param iframeWindow
   */
  // TODO 继续改进


  function patchWindowEffect(iframeWindow) {
    // 属性处理函数
    function processWindowProperty(key) {
      var value = iframeWindow[key];

      try {
        if (typeof value === "function" && !isConstructable(value)) {
          iframeWindow[key] = window[key].bind(window);
        } else {
          iframeWindow[key] = window[key];
        }

        return true;
      } catch (e) {
        warn(e.message);
        return false;
      }
    }

    Object.getOwnPropertyNames(iframeWindow).forEach(function (key) {
      // 特殊处理
      if (key === "getSelection") {
        Object.defineProperty(iframeWindow, key, {
          get: function get() {
            return iframeWindow.document[key];
          }
        });
        return;
      } // 单独属性


      if (windowProxyProperties.includes(key)) {
        processWindowProperty(key);
        return;
      } // 正则匹配，可以一次处理多个


      windowRegWhiteList.some(function (reg) {
        if (reg.test(key) && key in iframeWindow.parent) {
          return processWindowProperty(key);
        }

        return false;
      });
    }); // onEvent set

    var windowOnEvents = Object.getOwnPropertyNames(window).filter(function (p) {
      return /^on/.test(p);
    }).filter(function (e) {
      return !appWindowOnEvent.includes(e);
    }); // 走主应用window

    windowOnEvents.forEach(function (e) {
      var descriptor = Object.getOwnPropertyDescriptor(iframeWindow, e) || {
        enumerable: true,
        writable: true
      };

      try {
        Object.defineProperty(iframeWindow, e, {
          enumerable: descriptor.enumerable,
          configurable: true,
          get: function get() {
            return window[e];
          },
          set: descriptor.writable || descriptor.set ? function (handler) {
            window[e] = typeof handler === "function" ? handler.bind(iframeWindow) : handler;
          } : undefined
        });
      } catch (e) {
        warn(e.message);
      }
    }); // 运行插件钩子函数

    execHooks(iframeWindow.__WUJIE.plugins, "windowPropertyOverride", iframeWindow);
  }
  /**
   * 记录节点的监听事件
   */


  function recordEventListeners(iframeWindow) {
    var sandbox = iframeWindow.__WUJIE;

    iframeWindow.EventTarget.prototype.addEventListener = function (type, handler, options) {
      // 添加事件缓存
      var elementListenerList = sandbox.elementEventCacheMap.get(this);

      if (elementListenerList) {
        if (!elementListenerList.find(function (listener) {
          return listener.handler === handler;
        })) {
          elementListenerList.push({
            type: type,
            handler: handler,
            options: options
          });
        }
      } else sandbox.elementEventCacheMap.set(this, [{
        type: type,
        handler: handler,
        options: options
      }]);

      return rawAddEventListener.call(this, type, handler, options);
    };

    iframeWindow.EventTarget.prototype.removeEventListener = function (type, handler, options) {
      // 清除缓存
      var elementListenerList = sandbox.elementEventCacheMap.get(this);

      if (elementListenerList) {
        var index = elementListenerList === null || elementListenerList === void 0 ? void 0 : elementListenerList.findIndex(function (ele) {
          return ele.handler === handler;
        });
        elementListenerList.splice(index, 1);
      }

      if (!(elementListenerList !== null && elementListenerList !== void 0 && elementListenerList.length)) {
        sandbox.elementEventCacheMap["delete"](this);
      }

      return rawRemoveEventListener.call(this, type, handler, options);
    };
  }
  /**
   * 恢复节点的监听事件
   */


  function recoverEventListeners(rootElement, iframeWindow) {
    var sandbox = iframeWindow.__WUJIE;
    var elementEventCacheMap = new WeakMap();
    var ElementIterator = document.createTreeWalker(rootElement);
    var nextElement = ElementIterator.currentNode;

    while (nextElement) {
      var elementListenerList = sandbox.elementEventCacheMap.get(nextElement);

      if (elementListenerList !== null && elementListenerList !== void 0 && elementListenerList.length) {
        elementEventCacheMap.set(nextElement, elementListenerList);
        elementListenerList.forEach(function (listener) {
          nextElement.addEventListener(listener.type, listener.handler, listener.options);
        });
      }

      nextElement = ElementIterator.nextNode();
    }

    sandbox.elementEventCacheMap = elementEventCacheMap;
  }
  /**
   * 恢复根节点的监听事件
   */

  function recoverDocumentListeners(oldRootElement, newRootElement, iframeWindow) {
    var sandbox = iframeWindow.__WUJIE;
    var elementEventCacheMap = new WeakMap();
    var elementListenerList = sandbox.elementEventCacheMap.get(oldRootElement);

    if (elementListenerList !== null && elementListenerList !== void 0 && elementListenerList.length) {
      elementEventCacheMap.set(newRootElement, elementListenerList);
      elementListenerList.forEach(function (listener) {
        newRootElement.addEventListener(listener.type, listener.handler, listener.options);
      });
    }

    sandbox.elementEventCacheMap = elementEventCacheMap;
  }
  /**
   * 修复vue绑定事件e.timeStamp < attachedTimestamp 的情况
   */

  function patchEventTimeStamp(targetWindow, iframeWindow) {
    Object.defineProperty(targetWindow.Event.prototype, "timeStamp", {
      get: function get() {
        return iframeWindow.document.createEvent("Event").timeStamp;
      }
    });
  }
  /**
   * patch document effect
   * @param iframeWindow
   */
  // TODO 继续改进

  function patchDocumentEffect(iframeWindow) {
    var sandbox = iframeWindow.__WUJIE;
    /**
     * 处理 addEventListener和removeEventListener
     * 由于这个劫持导致 handler 的this发生改变，所以需要handler.bind(document)
     * 但是这样会导致removeEventListener无法正常工作，因为handler => handler.bind(document)
     * 这个地方保存callback = handler.bind(document) 方便removeEventListener
     */

    var handlerCallbackMap = new WeakMap();
    var handlerTypeMap = new WeakMap();

    iframeWindow.Document.prototype.addEventListener = function (type, handler, options) {
      var callback = handlerCallbackMap.get(handler);
      var typeList = handlerTypeMap.get(handler); // 设置 handlerCallbackMap

      if (!callback) {
        callback = typeof handler === "function" ? handler.bind(this) : handler;
        handlerCallbackMap.set(handler, callback);
      } // 设置 handlerTypeMap


      if (typeList) {
        if (!typeList.includes(type)) typeList.push(type);
      } else {
        handlerTypeMap.set(handler, [type]);
      } // 运行插件钩子函数


      execHooks(iframeWindow.__WUJIE.plugins, "documentAddEventListenerHook", iframeWindow, type, callback, options);

      if (appDocumentAddEventListenerEvents.includes(type)) {
        return rawAddEventListener.call(this, type, callback, options);
      } // 降级统一走document.firstElementChild


      if (sandbox.degrade) return sandbox.document.firstElementChild.addEventListener(type, callback, options);
      if (mainDocumentAddEventListenerEvents.includes(type)) return window.document.addEventListener(type, callback, options);

      if (mainAndAppAddEventListenerEvents.includes(type)) {
        window.document.addEventListener(type, callback, options);
        sandbox.shadowRoot.addEventListener(type, callback, options);
        return;
      }

      sandbox.shadowRoot.addEventListener(type, callback, options);
    };

    iframeWindow.Document.prototype.removeEventListener = function (type, handler, options) {
      var callback = handlerCallbackMap.get(handler);
      var typeList = handlerTypeMap.get(handler);

      if (callback) {
        if (typeList !== null && typeList !== void 0 && typeList.includes(type)) {
          typeList.splice(typeList.indexOf(type), 1);

          if (!typeList.length) {
            handlerCallbackMap["delete"](handler);
            handlerTypeMap["delete"](handler);
          }
        } // 运行插件钩子函数


        execHooks(iframeWindow.__WUJIE.plugins, "documentRemoveEventListenerHook", iframeWindow, type, callback, options);

        if (appDocumentAddEventListenerEvents.includes(type)) {
          return rawRemoveEventListener.call(this, type, callback, options);
        }

        if (sandbox.degrade) return sandbox.document.firstElementChild.removeEventListener(type, callback, options);

        if (mainDocumentAddEventListenerEvents.includes(type)) {
          return window.document.removeEventListener(type, callback, options);
        }

        if (mainAndAppAddEventListenerEvents.includes(type)) {
          window.document.removeEventListener(type, callback, options);
          sandbox.shadowRoot.removeEventListener(type, callback, options);
          return;
        }

        sandbox.shadowRoot.removeEventListener(type, callback, options);
      }
    }; // 处理onEvent


    var elementOnEvents = Object.keys(iframeWindow.HTMLElement.prototype).filter(function (ele) {
      return /^on/.test(ele);
    });
    var documentOnEvent = Object.keys(iframeWindow.Document.prototype).filter(function (ele) {
      return /^on/.test(ele);
    }).filter(function (ele) {
      return !appDocumentOnEvents.includes(ele);
    });
    elementOnEvents.filter(function (e) {
      return documentOnEvent.includes(e);
    }).forEach(function (e) {
      var descriptor = Object.getOwnPropertyDescriptor(iframeWindow.Document.prototype, e) || {
        enumerable: true,
        writable: true
      };

      try {
        Object.defineProperty(iframeWindow.Document.prototype, e, {
          enumerable: descriptor.enumerable,
          configurable: true,
          get: function get() {
            return (sandbox.degrade ? sandbox.document : sandbox.shadowRoot).firstElementChild[e];
          },
          set: descriptor.writable || descriptor.set ? function (handler) {
            var val = typeof handler === "function" ? handler.bind(iframeWindow.document) : handler;
            sandbox.degrade ? sandbox.document.firstElementChild[e] = val : sandbox.shadowRoot.firstElementChild[e] = val;
          } : undefined
        });
      } catch (e) {
        warn(e.message);
      }
    }); // 处理属性get

    var ownerProperties = documentProxyProperties.ownerProperties,
        modifyProperties = documentProxyProperties.modifyProperties,
        shadowProperties = documentProxyProperties.shadowProperties,
        shadowMethods = documentProxyProperties.shadowMethods,
        documentProperties = documentProxyProperties.documentProperties,
        documentMethods = documentProxyProperties.documentMethods,
        documentEvents = documentProxyProperties.documentEvents;
    modifyProperties.concat(shadowProperties, shadowMethods, documentProperties, documentMethods).forEach(function (propKey) {
      var descriptor = Object.getOwnPropertyDescriptor(iframeWindow.Document.prototype, propKey) || {
        enumerable: true,
        writable: true
      };

      try {
        Object.defineProperty(iframeWindow.Document.prototype, propKey, {
          enumerable: descriptor.enumerable,
          configurable: true,
          get: function get() {
            return sandbox.proxyDocument[propKey];
          },
          set: undefined
        });
      } catch (e) {
        warn(e.message);
      }
    }); // 处理document专属事件
    // TODO 内存泄露

    documentEvents.forEach(function (propKey) {
      var descriptor = Object.getOwnPropertyDescriptor(iframeWindow.Document.prototype, propKey) || {
        enumerable: true,
        writable: true
      };

      try {
        Object.defineProperty(iframeWindow.Document.prototype, propKey, {
          enumerable: descriptor.enumerable,
          configurable: true,
          get: function get() {
            return (sandbox.degrade ? sandbox : window).document[propKey];
          },
          set: descriptor.writable || descriptor.set ? function (handler) {
            (sandbox.degrade ? sandbox : window).document[propKey] = typeof handler === "function" ? handler.bind(iframeWindow.document) : handler;
          } : undefined
        });
      } catch (e) {
        warn(e.message);
      }
    }); // process owner property

    ownerProperties.forEach(function (propKey) {
      Object.defineProperty(iframeWindow.document, propKey, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return sandbox.proxyDocument[propKey];
        },
        set: undefined
      });
    }); // 运行插件钩子函数

    execHooks(iframeWindow.__WUJIE.plugins, "documentPropertyOverride", iframeWindow);
  }
  /**
   * patch Node effect
   * 1、处理 getRootNode
   * 2、处理 appendChild、insertBefore，当插入的节点为 svg 时，createElement 的 patch 会被去除，需要重新 patch
   * @param iframeWindow
   */


  function patchNodeEffect(iframeWindow) {
    var rawGetRootNode = iframeWindow.Node.prototype.getRootNode;
    var rawAppendChild = iframeWindow.Node.prototype.appendChild;
    var RawInsertRule = iframeWindow.Node.prototype.insertBefore;

    iframeWindow.Node.prototype.getRootNode = function (options) {
      var rootNode = rawGetRootNode.call(this, options);
      if (rootNode === iframeWindow.__WUJIE.shadowRoot) return iframeWindow.document;else return rootNode;
    };

    iframeWindow.Node.prototype.appendChild = function (node) {
      var res = rawAppendChild.call(this, node);
      patchElementEffect(node, iframeWindow);
      return res;
    };

    iframeWindow.Node.prototype.insertBefore = function (node, child) {
      var res = RawInsertRule.call(this, node, child);
      patchElementEffect(node, iframeWindow);
      return res;
    };
  }
  /**
   * 修复资源元素的相对路径问题
   * @param iframeWindow
   */


  function patchRelativeUrlEffect(iframeWindow) {
    fixElementCtrSrcOrHref(iframeWindow, iframeWindow.HTMLImageElement, "src");
    fixElementCtrSrcOrHref(iframeWindow, iframeWindow.HTMLAnchorElement, "href");
    fixElementCtrSrcOrHref(iframeWindow, iframeWindow.HTMLSourceElement, "src");
    fixElementCtrSrcOrHref(iframeWindow, iframeWindow.HTMLLinkElement, "href");
    fixElementCtrSrcOrHref(iframeWindow, iframeWindow.HTMLScriptElement, "src");
  }
  /**
   * 初始化base标签
   */


  function initBase(iframeWindow, url) {
    var iframeDocument = iframeWindow.document;
    var baseElement = iframeDocument.createElement("base");
    var iframeUrlElement = anchorElementGenerator(iframeWindow.location.href);
    var appUrlElement = anchorElementGenerator(url);
    baseElement.setAttribute("href", appUrlElement.protocol + "//" + appUrlElement.host + iframeUrlElement.pathname);
    iframeDocument.head.appendChild(baseElement);
  }
  /**
   * 初始化iframe的dom结构
   * @param iframeWindow
   */

  function initIframeDom(iframeWindow) {
    var iframeDocument = iframeWindow.document;
    clearChild(iframeDocument);
    var html = iframeDocument.createElement("html");
    html.innerHTML = "<head></head><body></body>";
    iframeDocument.appendChild(html);
    initBase(iframeWindow, iframeWindow.__WUJIE.url);
    patchWindowEffect(iframeWindow);
    patchDocumentEffect(iframeWindow);
    patchNodeEffect(iframeWindow);
    patchRelativeUrlEffect(iframeWindow);
  }
  /**
   * 防止运行主应用的js代码，给子应用带来很多副作用
   */
  // TODO 更加准确抓取停止时机


  function stopIframeLoading(iframeWindow, url) {
    iframeWindow.__WUJIE.iframeReady = new Promise(function (resolve) {
      function loop() {
        setTimeout(function () {
          // location ready
          if (iframeWindow.location.href === "about:blank") {
            loop();
          } else {
            iframeWindow.stop();
            initIframeDom(iframeWindow);
            /**
             * 如果有同步优先同步，非同步从url读取
             */

            if (!isMatchSyncQueryById(iframeWindow.__WUJIE.id)) {
              iframeWindow.history.replaceState(null, "", url);
            }

            resolve();
          }
        }, 0);
      }

      loop();
    });
  }

  function patchElementEffect(element, iframeWindow) {
    var proxyLocation = iframeWindow.__WUJIE.proxyLocation;
    if (element._hasPatch) return;
    Object.defineProperties(element, {
      baseURI: {
        configurable: true,
        get: function get() {
          return proxyLocation.protocol + "//" + proxyLocation.host + proxyLocation.pathname;
        },
        set: undefined
      },
      ownerDocument: {
        configurable: true,
        get: function get() {
          return iframeWindow.document;
        }
      },
      _hasPatch: {
        get: function get() {
          return true;
        }
      }
    });
  }
  /**
   * 子应用前进后退，同步路由到主应用
   * @param iframeWindow
   */

  function syncIframeUrlToWindow(iframeWindow) {
    iframeWindow.addEventListener("hashchange", function () {
      return syncUrlToWindow(iframeWindow);
    });
    iframeWindow.addEventListener("popstate", function () {
      syncUrlToWindow(iframeWindow);
    });
  }
  /**
   * iframe插入脚本
   * @param scriptResult script请求结果
   * @param iframeWindow
   */

  function insertScriptToIframe(scriptResult, iframeWindow) {
    var _ref = scriptResult,
        src = _ref.src,
        module = _ref.module,
        content = _ref.content,
        crossorigin = _ref.crossorigin,
        crossoriginType = _ref.crossoriginType,
        async = _ref.async,
        callback = _ref.callback,
        onload = _ref.onload;
    var scriptElement = iframeWindow.document.createElement("script");
    var nextScriptElement = iframeWindow.document.createElement("script");
    var _iframeWindow$__WUJIE = iframeWindow.__WUJIE,
        replace = _iframeWindow$__WUJIE.replace,
        plugins = _iframeWindow$__WUJIE.plugins,
        proxyLocation = _iframeWindow$__WUJIE.proxyLocation;
    var jsLoader = getJsLoader({
      plugins: plugins,
      replace: replace
    });
    var code = jsLoader(content, src, getCurUrl(proxyLocation)); // 内联脚本

    if (content) {
      // patch location
      if (!iframeWindow.__WUJIE.degrade && !module) {
        code = "(function(window, self, global, location) {\n      ".concat(code, "\n}).bind(window.__WUJIE.proxy)(\n  window.__WUJIE.proxy,\n  window.__WUJIE.proxy,\n  window.__WUJIE.proxy,\n  window.__WUJIE.proxyLocation,\n);");
      } // 解决 webpack publicPath 为 auto 无法加载资源的问题


      Object.defineProperty(scriptElement, "src", {
        get: function get() {
          return src || "";
        }
      }); // 非内联脚本
    } else {
      // 外联自动触发onload
      onload && (scriptElement.onload = onload);
      src && scriptElement.setAttribute("src", src);
      crossorigin && scriptElement.setAttribute("crossorigin", crossoriginType);
    }

    module && scriptElement.setAttribute("type", "module");
    scriptElement.textContent = code || "";
    nextScriptElement.textContent = "if(window.__WUJIE.execQueue && window.__WUJIE.execQueue.length){ window.__WUJIE.execQueue.shift()()}";
    var container = rawDocumentQuerySelector.call(iframeWindow.document, "head");

    if (/^<!DOCTYPE html/i.test(code)) {
      error(WUJIE_TIPS_SCRIPT_ERROR_REQUESTED, scriptResult);
      return !async && container.appendChild(nextScriptElement);
    }

    container.appendChild(scriptElement); // 外联转内联调用手动触发onload

    content && (onload === null || onload === void 0 ? void 0 : onload()); // 调用回调

    callback === null || callback === void 0 ? void 0 : callback(iframeWindow); // async脚本不在执行队列，无需next操作

    !async && container.appendChild(nextScriptElement);
  }
  /**
   * 加载iframe替换子应用
   * @param src 地址
   * @param shadowRoot
   */

  function renderIframeReplaceApp(src, element) {
    var iframe = window.document.createElement("iframe");
    iframe.setAttribute("src", src);
    iframe.setAttribute("style", "height:100%;width:100%");
    renderElementToContainer(iframe, element);
  }
  /**
   * js沙箱
   * 创建和主应用同源的iframe，路径携带了子路由的路由信息
   * iframe必须禁止加载html，防止进入主应用的路由逻辑
   */

  function iframeGenerator(sandbox, attrs, mainHostPath, appHostPath, appRoutePath) {
    var iframe = window.document.createElement("iframe");
    var url = mainHostPath + appRoutePath;

    var attrsMerge = _objectSpread$1(_objectSpread$1({
      src: mainHostPath
    }, attrs), {}, _defineProperty({
      style: "display: none",
      name: sandbox.id
    }, WUJIE_DATA_FLAG, ""));

    Object.keys(attrsMerge).forEach(function (key) {
      return iframe.setAttribute(key, attrsMerge[key]);
    });
    window.document.body.appendChild(iframe);
    var iframeWindow = iframe.contentWindow;
    iframeWindow.__WUJIE = sandbox;
    patchIframeVariable(iframeWindow, appHostPath);
    stopIframeLoading(iframeWindow, url);
    patchIframeHistory(iframeWindow, appHostPath, mainHostPath);
    patchIframeEvents(iframeWindow);
    if (iframeWindow.__WUJIE.degrade) recordEventListeners(iframeWindow);
    syncIframeUrlToWindow(iframeWindow);
    return iframe;
  }

  /**
   * location href 的set劫持操作
   */

  function locationHrefSet(iframe, value, appHostPath) {
    var _iframe$contentWindow = iframe.contentWindow.__WUJIE,
        shadowRoot = _iframe$contentWindow.shadowRoot,
        id = _iframe$contentWindow.id,
        degrade = _iframe$contentWindow.degrade,
        document = _iframe$contentWindow.document;
    var url = value;

    if (!/^http/.test(url)) {
      var hrefElement = anchorElementGenerator(url);
      url = appHostPath + hrefElement.pathname + hrefElement.search + hrefElement.hash;
      hrefElement = null;
    }

    iframe.contentWindow.__WUJIE.hrefFlag = true;

    if (degrade) {
      var iframeBody = rawDocumentQuerySelector.call(iframe.contentDocument, "body");
      renderElementToContainer(document.firstElementChild, iframeBody);
      renderIframeReplaceApp(window.decodeURIComponent(url), getDegradeIframe(id).parentElement);
    } else renderIframeReplaceApp(url, shadowRoot.host.parentElement);

    pushUrlToWindow(id, url);
    return true;
  }
  /**
   * 非降级情况下window、document、location代理
   */


  function proxyGenerator(iframe, urlElement, mainHostPath, appHostPath) {
    var proxyWindow = new Proxy(iframe.contentWindow, {
      get: function get(target, p) {
        // location进行劫持
        if (p === "location") {
          return target.__WUJIE.proxyLocation;
        } // 判断自身


        if (p === "self" || p === "window") {
          return target.__WUJIE.proxy;
        } // 不要绑定this


        if (p === "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__" || p === "__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__") {
          return target[p];
        } // 修正this指针指向


        return getTargetValue(target, p);
      },
      set: function set(target, p, value) {
        checkProxyFunction(value);
        target[p] = value;
        return true;
      },
      has: function has(target, p) {
        return p in target;
      }
    }); // proxy document

    var proxyDocument = new Proxy({}, {
      get: function get(_fakeDocument, propKey) {
        var document = window.document;
        var shadowRoot = iframe.contentWindow.__WUJIE.shadowRoot; // need fix

        if (propKey === "createElement" || propKey === "createTextNode") {
          return new Proxy(document[propKey], {
            apply: function apply(createElement, _ctx, args) {
              var element = createElement.apply(iframe.contentDocument, args);
              patchElementEffect(element, iframe.contentWindow);
              return element;
            }
          });
        }

        if (propKey === "documentURI" || propKey === "URL") {
          return iframe.contentWindow.__WUJIE.proxyLocation.href;
        } // from shadowRoot


        if (propKey === "getElementsByTagName" || propKey === "getElementsByClassName" || propKey === "getElementsByName") {
          return new Proxy(shadowRoot.querySelectorAll, {
            apply: function apply(querySelectorAll, _ctx, args) {
              var arg = args[0];

              if (propKey === "getElementsByTagName" && arg === "script") {
                return iframe.contentDocument.scripts;
              }

              if (propKey === "getElementsByClassName") arg = "." + arg;
              if (propKey === "getElementsByName") arg = "[name=\"".concat(arg, "\"]");
              return querySelectorAll.call(shadowRoot, arg);
            }
          });
        }

        if (propKey === "getElementById") {
          return new Proxy(shadowRoot.querySelector, {
            apply: function apply(querySelector, _ctx, args) {
              return querySelector.call(shadowRoot, "[id=\"".concat(args[0], "\"]"));
            }
          });
        }

        if (propKey === "querySelector" || propKey === "querySelectorAll") {
          return shadowRoot[propKey].bind(shadowRoot);
        }

        if (propKey === "documentElement" || propKey === "scrollingElement") return shadowRoot.firstElementChild;
        if (propKey === "forms") return shadowRoot.querySelectorAll("form");
        if (propKey === "images") return shadowRoot.querySelectorAll("img");
        if (propKey === "links") return shadowRoot.querySelectorAll("a");
        var ownerProperties = documentProxyProperties.ownerProperties,
            shadowProperties = documentProxyProperties.shadowProperties,
            shadowMethods = documentProxyProperties.shadowMethods,
            documentProperties = documentProxyProperties.documentProperties,
            documentMethods = documentProxyProperties.documentMethods;

        if (ownerProperties.concat(shadowProperties).includes(propKey.toString())) {
          if (propKey === "activeElement" && shadowRoot.activeElement === null) return shadowRoot.body;
          return shadowRoot[propKey];
        }

        if (shadowMethods.includes(propKey.toString())) {
          var _getTargetValue;

          return (_getTargetValue = getTargetValue(shadowRoot, propKey)) !== null && _getTargetValue !== void 0 ? _getTargetValue : getTargetValue(document, propKey);
        } // from window.document


        if (documentProperties.includes(propKey.toString())) {
          return document[propKey];
        }

        if (documentMethods.includes(propKey.toString())) {
          return getTargetValue(document, propKey);
        }
      }
    }); // proxy location

    var proxyLocation = new Proxy({}, {
      get: function get(_fakeLocation, propKey) {
        var location = iframe.contentWindow.location;

        if (propKey === "host" || propKey === "hostname" || propKey === "protocol" || propKey === "port" || propKey === "origin") {
          return urlElement[propKey];
        }

        if (propKey === "href") {
          return location[propKey].replace(mainHostPath, appHostPath);
        }

        if (propKey === "reload") {
          warn(WUJIE_TIPS_RELOAD_DISABLED);
          return function () {
            return null;
          };
        }

        if (propKey === "replace") {
          return new Proxy(location[propKey], {
            apply: function apply(replace, _ctx, args) {
              var _args$;

              return replace.call(location, (_args$ = args[0]) === null || _args$ === void 0 ? void 0 : _args$.replace(appHostPath, mainHostPath));
            }
          });
        }

        return getTargetValue(location, propKey);
      },
      set: function set(_fakeLocation, propKey, value) {
        // 如果是跳转链接的话重开一个iframe
        if (propKey === "href") {
          return locationHrefSet(iframe, value, appHostPath);
        }

        iframe.contentWindow.location[propKey] = value;
        return true;
      },
      ownKeys: function ownKeys() {
        return Object.keys(iframe.contentWindow.location).filter(function (key) {
          return key !== "reload";
        });
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(_target, key) {
        return {
          enumerable: true,
          configurable: true,
          value: this[key]
        };
      }
    });
    return {
      proxyWindow: proxyWindow,
      proxyDocument: proxyDocument,
      proxyLocation: proxyLocation
    };
  }
  /**
   * 降级情况下document、location代理处理
   */

  function localGenerator(iframe, urlElement, mainHostPath, appHostPath) {
    // 代理 document
    var proxyDocument = {};
    var sandbox = iframe.contentWindow.__WUJIE; // 特殊处理

    Object.defineProperties(proxyDocument, {
      createElement: {
        get: function get() {
          return function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var element = window.document.createElement.apply(iframe.contentDocument, args);
            patchElementEffect(element, iframe.contentWindow);
            return element;
          };
        }
      },
      createTextNode: {
        get: function get() {
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            var element = window.document.createTextNode.apply(iframe.contentDocument, args);
            patchElementEffect(element, iframe.contentWindow);
            return element;
          };
        }
      },
      documentURI: {
        get: function get() {
          return sandbox.proxyLocation.href;
        }
      },
      URL: {
        get: function get() {
          return sandbox.proxyLocation.href;
        }
      },
      getElementsByTagName: {
        get: function get() {
          return function () {
            var tagName = arguments.length <= 0 ? undefined : arguments[0];

            if (tagName === "script") {
              return iframe.contentDocument.scripts;
            }

            return sandbox.document.getElementsByTagName(tagName);
          };
        }
      }
    }); // 普通处理

    var modifyLocalProperties = documentProxyProperties.modifyLocalProperties,
        modifyProperties = documentProxyProperties.modifyProperties,
        ownerProperties = documentProxyProperties.ownerProperties,
        shadowProperties = documentProxyProperties.shadowProperties,
        shadowMethods = documentProxyProperties.shadowMethods,
        documentProperties = documentProxyProperties.documentProperties,
        documentMethods = documentProxyProperties.documentMethods;
    modifyProperties.filter(function (key) {
      return !modifyLocalProperties.includes(key);
    }).concat(ownerProperties, shadowProperties, shadowMethods, documentProperties, documentMethods).forEach(function (key) {
      Object.defineProperty(proxyDocument, key, {
        get: function get() {
          return isCallable(sandbox.document[key]) ? sandbox.document[key].bind(sandbox.document) : sandbox.document[key];
        }
      });
    }); // 代理 location

    var proxyLocation = {};
    var location = iframe.contentWindow.location;
    var locationKeys = Object.keys(location);
    var constantKey = ["host", "hostname", "port", "protocol", "port"];
    constantKey.forEach(function (key) {
      proxyLocation[key] = urlElement[key];
    });
    Object.defineProperties(proxyLocation, {
      href: {
        get: function get() {
          return location.href.replace(mainHostPath, appHostPath);
        },
        set: function set(value) {
          locationHrefSet(iframe, value, appHostPath);
        }
      },
      reload: {
        get: function get() {
          warn(WUJIE_TIPS_RELOAD_DISABLED);
          return function () {
            return null;
          };
        }
      }
    });
    locationKeys.filter(function (key) {
      return !constantKey.concat(["href", "reload"]).includes(key);
    }).forEach(function (key) {
      Object.defineProperty(proxyLocation, key, {
        get: function get() {
          return isCallable(location[key]) ? location[key].bind(location) : location[key];
        }
      });
    });
    return {
      proxyDocument: proxyDocument,
      proxyLocation: proxyLocation
    };
  }

  // 全部事件存储map
  var appEventObjMap = window.__POWERED_BY_WUJIE__ ? window.__WUJIE.inject.appEventObjMap : new Map(); // eventBus 事件中心

  var EventBus = /*#__PURE__*/function () {
    function EventBus(id) {
      _classCallCheck(this, EventBus);

      this.id = id;
      this.$clear();

      if (!appEventObjMap.get(this.id)) {
        appEventObjMap.set(this.id, {});
      }

      this.eventObj = appEventObjMap.get(this.id);
    } // 监听事件


    _createClass(EventBus, [{
      key: "$on",
      value: function $on(event, fn) {
        var cbs = this.eventObj[event];

        if (!cbs) {
          this.eventObj[event] = [fn];
          return this;
        }

        if (!cbs.includes(fn)) cbs.push(fn);
        return this;
      }
      /** 任何$emit都会导致监听函数触发，第一个参数为事件名，后续的参数为$emit的参数 */

    }, {
      key: "$onAll",
      value: function $onAll(fn) {
        return this.$on(WUJIE_ALL_EVENT, fn);
      } // 一次性监听事件

    }, {
      key: "$once",
      value: function $once(event, fn) {
        var on = function () {
          this.$off(event, on);
          fn.apply(void 0, arguments);
        }.bind(this);

        this.$on(event, on);
      } // 取消监听

    }, {
      key: "$off",
      value: function $off(event, fn) {
        var cbs = this.eventObj[event];

        if (!event || !cbs || !cbs.length) {
          warn("".concat(event, " ").concat(WUJIE_TIPS_NO_SUBJECT));
          return this;
        }

        var cb;
        var i = cbs.length;

        while (i--) {
          cb = cbs[i];

          if (cb === fn) {
            cbs.splice(i, 1);
            break;
          }
        }

        return this;
      } // 取消监听$onAll

    }, {
      key: "$offAll",
      value: function $offAll(fn) {
        return this.$off(WUJIE_ALL_EVENT, fn);
      } // 发送事件

    }, {
      key: "$emit",
      value: function $emit(event) {
        var cbs = [];
        var allCbs = [];
        appEventObjMap.forEach(function (eventObj) {
          if (eventObj[event]) cbs = cbs.concat(eventObj[event]);
          if (eventObj[WUJIE_ALL_EVENT]) allCbs = allCbs.concat(eventObj[WUJIE_ALL_EVENT]);
        });

        if (!event || cbs.length === 0 && allCbs.length === 0) {
          warn("".concat(event, " ").concat(WUJIE_TIPS_NO_SUBJECT));
        } else {
          try {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            for (var i = 0, l = cbs.length; i < l; i++) {
              var _cbs;

              (_cbs = cbs)[i].apply(_cbs, args);
            }

            for (var _i = 0, _l = allCbs.length; _i < _l; _i++) {
              var _allCbs;

              (_allCbs = allCbs)[_i].apply(_allCbs, [event].concat(args));
            }
          } catch (e) {
            error(e);
          }
        }

        return this;
      } // 清空当前所有的监听事件

    }, {
      key: "$clear",
      value: function $clear() {
        var _appEventObjMap$get;

        var eventObj = (_appEventObjMap$get = appEventObjMap.get(this.id)) !== null && _appEventObjMap$get !== void 0 ? _appEventObjMap$get : {};
        var events = Object.keys(eventObj);
        events.forEach(function (event) {
          return delete eventObj[event];
        });
        return this;
      }
    }]);

    return EventBus;
  }();

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  /**
   * 基于 Proxy和iframe 实现的沙箱
   */
  var Wujie = /*#__PURE__*/function () {
    /**
     * @param id 子应用的id，唯一标识
     * @param url 子应用的url，可以包含protocol、host、path、query、hash
     */
    function Wujie(options) {
      _classCallCheck(this, Wujie);

      _defineProperty(this, "elementEventCacheMap", new WeakMap());

      // 传递inject给嵌套子应用
      if (window.__POWERED_BY_WUJIE__) this.inject = window.__WUJIE.inject;else {
        this.inject = {
          idToSandboxMap: idToSandboxCacheMap,
          appEventObjMap: appEventObjMap,
          mainHostPath: window.location.protocol + "//" + window.location.host
        };
      }
      var name = options.name,
          url = options.url,
          attrs = options.attrs,
          fiber = options.fiber,
          degrade = options.degrade,
          lifecycles = options.lifecycles,
          plugins = options.plugins;
      this.id = name;
      this.fiber = fiber;
      this.degrade = degrade || !wujieSupport;
      this.bus = new EventBus(this.id);
      this.url = url;
      this.provide = {
        bus: this.bus
      };
      this.styleSheetElements = [];
      this.execQueue = [];
      this.lifecycles = lifecycles;
      this.plugins = getPlugins(plugins); // 创建目标地址的解析

      var _appRouteParse = appRouteParse(url),
          urlElement = _appRouteParse.urlElement,
          appHostPath = _appRouteParse.appHostPath,
          appRoutePath = _appRouteParse.appRoutePath;

      var mainHostPath = this.inject.mainHostPath; // 创建iframe

      var iframe = iframeGenerator(this, attrs, mainHostPath, appHostPath, appRoutePath);
      this.iframe = iframe;

      if (this.degrade) {
        var _localGenerator = localGenerator(iframe, urlElement, mainHostPath, appHostPath),
            proxyDocument = _localGenerator.proxyDocument,
            proxyLocation = _localGenerator.proxyLocation;

        this.proxyDocument = proxyDocument;
        this.proxyLocation = proxyLocation;
      } else {
        var _proxyGenerator = proxyGenerator(iframe, urlElement, mainHostPath, appHostPath),
            proxyWindow = _proxyGenerator.proxyWindow,
            _proxyDocument = _proxyGenerator.proxyDocument,
            _proxyLocation = _proxyGenerator.proxyLocation;

        this.proxy = proxyWindow;
        this.proxyDocument = _proxyDocument;
        this.proxyLocation = _proxyLocation;
      }

      this.provide.location = this.proxyLocation;
      addSandboxCacheWithWujie(this.id, this);
    }

    _createClass(Wujie, [{
      key: "active",
      value:
      /** 激活时路由地址 */

      /** 子应用保活 */

      /** window代理 */

      /** document代理 */

      /** location代理 */

      /** 事件中心 */

      /** 容器 */

      /** js沙箱 */

      /** css沙箱 */

      /** 子应用的template */

      /** 子应用代码替换钩子 */

      /** 子应用自定义fetch */

      /** 子应用的生命周期 */

      /** 子应用的插件 */

      /** js沙箱ready态 */

      /** 子应用预加载态 */

      /** 子应用js执行队列 */

      /** 子应用执行标志 */

      /** 子应用mount标志 */

      /** 路由同步标志 */

      /** 子应用短路径替换，路由同步时生效 */

      /** 子应用跳转标志 */

      /** 子应用采用fiber模式执行 */

      /** 子应用降级标志 */

      /** 子应用降级document */

      /** 子应用styleSheet元素 */

      /** 子应用head元素 */

      /** 子应用body元素 */

      /** 子应用dom监听事件留存，当降级时用于保存元素事件 */

      /** 激活子应用
       * 1、同步路由
       * 2、动态修改iframe的fetch
       * 3、准备shadow
       * 4、准备子应用注入
       */
      function () {
        var _active = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(options) {
          var _this = this;

          var sync, url, el, template, props, alive, prefix, fetch, replace, iframeWindow, iframeFetch, iframe, iframeBody, _iframeBody;

          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  sync = options.sync, url = options.url, el = options.el, template = options.template, props = options.props, alive = options.alive, prefix = options.prefix, fetch = options.fetch, replace = options.replace;
                  this.url = url;
                  this.sync = sync;
                  this.alive = alive;
                  this.hrefFlag = false;
                  this.prefix = prefix !== null && prefix !== void 0 ? prefix : this.prefix;
                  this.replace = replace !== null && replace !== void 0 ? replace : this.replace;
                  this.provide.props = props !== null && props !== void 0 ? props : this.provide.props; // wait iframe init

                  _context.next = 10;
                  return this.iframeReady;

                case 10:
                  // 处理子应用自定义fetch
                  // TODO fetch检验合法性
                  iframeWindow = this.iframe.contentWindow;
                  iframeFetch = fetch ? function (input, init) {
                    return fetch(typeof input === "string" ? getAbsolutePath(input, _this.proxyLocation.href) : input, init);
                  } : this.fetch;

                  if (iframeFetch) {
                    iframeWindow.fetch = iframeFetch;
                    this.fetch = iframeFetch;
                  } // 处理子应用路由同步


                  if (this.execFlag && this.alive) {
                    // 当保活模式下子应用重新激活时，只需要将子应用路径同步回主应用
                    syncUrlToWindow(iframeWindow);
                  } else {
                    // 先将url同步回iframe，然后再同步回浏览器url
                    syncUrlToIframe(iframeWindow);
                    syncUrlToWindow(iframeWindow);
                  } // inject template


                  this.template = template !== null && template !== void 0 ? template : this.template;
                  /* 降级处理 */

                  if (!this.degrade) {
                    _context.next = 38;
                    break;
                  }

                  iframe = createIframeContainer(this.id);
                  iframeBody = rawDocumentQuerySelector.call(iframeWindow.document, "body");
                  this.el = renderElementToContainer(iframe, el !== null && el !== void 0 ? el : iframeBody);
                  clearChild(iframe.contentDocument); // 销毁js运行iframe容器内部dom

                  if (el) clearChild(iframeBody); // 修复vue的event.timeStamp问题

                  patchEventTimeStamp(iframe.contentWindow, iframeWindow); // 当销毁iframe时主动unmount子应用

                  iframe.contentWindow.onunload = function () {
                    _this.unmount();
                  };

                  if (!this.document) {
                    _context.next = 34;
                    break;
                  }

                  if (!this.alive) {
                    _context.next = 29;
                    break;
                  }

                  iframe.contentDocument.appendChild(this.document.firstElementChild); // 保活场景需要事件全部恢复

                  recoverEventListeners(iframe.contentDocument.firstElementChild, iframeWindow);
                  _context.next = 32;
                  break;

                case 29:
                  _context.next = 31;
                  return renderTemplateToIframe(iframe.contentDocument, this.iframe.contentWindow, this.template);

                case 31:
                  // 非保活场景需要恢复根节点的事件，防止react16监听事件丢失
                  recoverDocumentListeners(this.document.firstElementChild, iframe.contentDocument.firstElementChild, iframeWindow);

                case 32:
                  _context.next = 36;
                  break;

                case 34:
                  _context.next = 36;
                  return renderTemplateToIframe(iframe.contentDocument, this.iframe.contentWindow, this.template);

                case 36:
                  this.document = iframe.contentDocument;
                  return _context.abrupt("return");

                case 38:
                  if (!this.shadowRoot) {
                    _context.next = 44;
                    break;
                  }

                  /*
                   document.addEventListener was transfer to shadowRoot.addEventListener
                   react 16 SyntheticEvent will remember document event for avoid repeat listen
                   shadowRoot have to dispatchEvent for react 16 so can't be destroyed
                   this may lead memory leak risk
                   */
                  this.el = renderElementToContainer(this.shadowRoot.host, el);

                  if (!this.alive) {
                    _context.next = 42;
                    break;
                  }

                  return _context.abrupt("return");

                case 42:
                  _context.next = 46;
                  break;

                case 44:
                  // 预执行无容器，暂时插入iframe内部触发Web Component的connect
                  _iframeBody = rawDocumentQuerySelector.call(iframeWindow.document, "body");
                  this.el = renderElementToContainer(createWujieWebComponent(this.id), el !== null && el !== void 0 ? el : _iframeBody);

                case 46:
                  _context.next = 48;
                  return renderTemplateToShadowRoot(this.shadowRoot, iframeWindow, this.template);

                case 48:
                  this.patchCssRules(); // inject shadowRoot to app

                  this.provide.shadowRoot = this.shadowRoot;

                case 50:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function active(_x) {
          return _active.apply(this, arguments);
        }

        return active;
      }()
      /** 启动子应用
       * 1、运行js
       * 2、处理兼容样式
       */

    }, {
      key: "start",
      value: function () {
        var _start = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(getExternalScripts) {
          var _this2 = this;

          var scriptResultList, iframeWindow, beforeScriptResultList, afterScriptResultList, syncScriptResultList, asyncScriptResultList, deferScriptResultList, domContentLoadedTrigger, domLoadedTrigger;
          return regenerator.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.execFlag = true; // 执行脚本

                  _context2.next = 3;
                  return getExternalScripts();

                case 3:
                  scriptResultList = _context2.sent;

                  if (this.iframe) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.abrupt("return");

                case 6:
                  iframeWindow = this.iframe.contentWindow; // 标志位，执行代码前设置

                  iframeWindow.__POWERED_BY_WUJIE__ = true; // 用户自定义代码前

                  beforeScriptResultList = getPresetLoaders("jsBeforeLoaders", this.plugins); // 用户自定义代码后

                  afterScriptResultList = getPresetLoaders("jsAfterLoaders", this.plugins); // 同步代码

                  syncScriptResultList = []; // async代码无需保证顺序，所以不用放入执行队列

                  asyncScriptResultList = []; // defer代码需要保证顺序并且DOMContentLoaded前完成，这里统一放置同步脚本后执行

                  deferScriptResultList = [];
                  scriptResultList.forEach(function (scriptResult) {
                    if (scriptResult.defer) deferScriptResultList.push(scriptResult);else if (scriptResult.async) asyncScriptResultList.push(scriptResult);else syncScriptResultList.push(scriptResult);
                  }); // 插入代码前

                  beforeScriptResultList.forEach(function (beforeScriptResult) {
                    _this2.execQueue.push(function () {
                      return _this2.fiber ? requestIdleCallback(function () {
                        return insertScriptToIframe(beforeScriptResult, iframeWindow);
                      }) : insertScriptToIframe(beforeScriptResult, iframeWindow);
                    });
                  }); // 同步代码

                  syncScriptResultList.concat(deferScriptResultList).forEach(function (scriptResult) {
                    _this2.execQueue.push(function () {
                      return scriptResult.contentPromise.then(function (content) {
                        return _this2.fiber ? requestIdleCallback(function () {
                          return insertScriptToIframe(_objectSpread(_objectSpread({}, scriptResult), {}, {
                            content: content
                          }), iframeWindow);
                        }) : insertScriptToIframe(_objectSpread(_objectSpread({}, scriptResult), {}, {
                          content: content
                        }), iframeWindow);
                      });
                    });
                  }); // 异步代码

                  asyncScriptResultList.forEach(function (scriptResult) {
                    scriptResult.contentPromise.then(function (content) {
                      _this2.fiber ? requestIdleCallback(function () {
                        return insertScriptToIframe(_objectSpread(_objectSpread({}, scriptResult), {}, {
                          content: content
                        }), iframeWindow);
                      }) : insertScriptToIframe(_objectSpread(_objectSpread({}, scriptResult), {}, {
                        content: content
                      }), iframeWindow);
                    });
                  }); //框架主动调用mount方法

                  this.execQueue.push(this.fiber ? function () {
                    return requestIdleCallback(function () {
                      return _this2.mount();
                    });
                  } : function () {
                    return _this2.mount();
                  }); //触发 DOMContentLoaded 事件

                  domContentLoadedTrigger = function domContentLoadedTrigger() {
                    var _this2$execQueue$shif;

                    eventTrigger(iframeWindow.document, "DOMContentLoaded");
                    eventTrigger(iframeWindow, "DOMContentLoaded");
                    (_this2$execQueue$shif = _this2.execQueue.shift()) === null || _this2$execQueue$shif === void 0 ? void 0 : _this2$execQueue$shif();
                  };

                  this.execQueue.push(this.fiber ? function () {
                    return requestIdleCallback(domContentLoadedTrigger);
                  } : domContentLoadedTrigger); // 插入代码后

                  afterScriptResultList.forEach(function (afterScriptResult) {
                    _this2.execQueue.push(function () {
                      return _this2.fiber ? requestIdleCallback(function () {
                        return insertScriptToIframe(afterScriptResult, iframeWindow);
                      }) : insertScriptToIframe(afterScriptResult, iframeWindow);
                    });
                  }); //触发 loaded 事件

                  domLoadedTrigger = function domLoadedTrigger() {
                    var _this2$execQueue$shif2;

                    eventTrigger(iframeWindow.document, "readystatechange");
                    eventTrigger(iframeWindow, "load");
                    (_this2$execQueue$shif2 = _this2.execQueue.shift()) === null || _this2$execQueue$shif2 === void 0 ? void 0 : _this2$execQueue$shif2();
                  };

                  this.execQueue.push(this.fiber ? function () {
                    return requestIdleCallback(domLoadedTrigger);
                  } : domLoadedTrigger); // 由于没有办法准确定位是哪个代码做了mount，保活、重建模式提前关闭loading

                  if (this.alive || !isFunction(this.iframe.contentWindow.__WUJIE_UNMOUNT)) removeLoading(this.el);
                  this.execQueue.shift()(); // 所有的execQueue队列执行完毕，start才算结束，保证串行的执行子应用

                  return _context2.abrupt("return", new Promise(function (resolve) {
                    _this2.execQueue.push(function () {
                      var _this2$execQueue$shif3;

                      resolve();
                      (_this2$execQueue$shif3 = _this2.execQueue.shift()) === null || _this2$execQueue$shif3 === void 0 ? void 0 : _this2$execQueue$shif3();
                    });
                  }));

                case 26:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function start(_x2) {
          return _start.apply(this, arguments);
        }

        return start;
      }()
      /**
       * 框架主动发起mount，如果子应用是异步渲染实例，比如将生命周__WUJIE_MOUNT放到async函数内
       * 此时如果采用fiber模式渲染（主应用调用mount的时机也是异步不确定的），框架调用mount时可能
       * 子应用的__WUJIE_MOUNT还没有挂载到window，所以这里封装一个mount函数，当子应用是异步渲染
       * 实例时，子应用异步函数里面最后加上window.__WUJIE.mount()来主动调用
       */

    }, {
      key: "mount",
      value: function mount() {
        var _this$execQueue$shift;

        if (this.mountFlag) return;

        if (isFunction(this.iframe.contentWindow.__WUJIE_MOUNT)) {
          var _this$lifecycles, _this$lifecycles$befo, _this$lifecycles2, _this$lifecycles2$aft;

          removeLoading(this.el);
          (_this$lifecycles = this.lifecycles) === null || _this$lifecycles === void 0 ? void 0 : (_this$lifecycles$befo = _this$lifecycles.beforeMount) === null || _this$lifecycles$befo === void 0 ? void 0 : _this$lifecycles$befo.call(_this$lifecycles, this.iframe.contentWindow);

          this.iframe.contentWindow.__WUJIE_MOUNT();

          (_this$lifecycles2 = this.lifecycles) === null || _this$lifecycles2 === void 0 ? void 0 : (_this$lifecycles2$aft = _this$lifecycles2.afterMount) === null || _this$lifecycles2$aft === void 0 ? void 0 : _this$lifecycles2$aft.call(_this$lifecycles2, this.iframe.contentWindow);
          this.mountFlag = true;
        }

        if (this.alive) {
          var _this$lifecycles3, _this$lifecycles3$act;

          (_this$lifecycles3 = this.lifecycles) === null || _this$lifecycles3 === void 0 ? void 0 : (_this$lifecycles3$act = _this$lifecycles3.activated) === null || _this$lifecycles3$act === void 0 ? void 0 : _this$lifecycles3$act.call(_this$lifecycles3, this.iframe.contentWindow);
        }

        (_this$execQueue$shift = this.execQueue.shift()) === null || _this$execQueue$shift === void 0 ? void 0 : _this$execQueue$shift();
      }
      /** 保活模式和使用proxyLocation.href跳转链接都不应该销毁shadow */

    }, {
      key: "unmount",
      value: function unmount() {
        // 清理子应用过期的同步参数，降级时调用需要等iframe完全销毁再clear
        this.degrade ? setTimeout(function () {
          return clearInactiveAppUrl();
        }) : clearInactiveAppUrl();

        if (this.alive) {
          var _this$lifecycles4, _this$lifecycles4$dea;

          (_this$lifecycles4 = this.lifecycles) === null || _this$lifecycles4 === void 0 ? void 0 : (_this$lifecycles4$dea = _this$lifecycles4.deactivated) === null || _this$lifecycles4$dea === void 0 ? void 0 : _this$lifecycles4$dea.call(_this$lifecycles4, this.iframe.contentWindow);
        }

        if (!this.mountFlag) return;

        if (isFunction(this.iframe.contentWindow.__WUJIE_UNMOUNT) && !this.alive && !this.hrefFlag) {
          var _this$lifecycles5, _this$lifecycles5$bef, _this$lifecycles6, _this$lifecycles6$aft;

          (_this$lifecycles5 = this.lifecycles) === null || _this$lifecycles5 === void 0 ? void 0 : (_this$lifecycles5$bef = _this$lifecycles5.beforeUnmount) === null || _this$lifecycles5$bef === void 0 ? void 0 : _this$lifecycles5$bef.call(_this$lifecycles5, this.iframe.contentWindow);

          this.iframe.contentWindow.__WUJIE_UNMOUNT();

          (_this$lifecycles6 = this.lifecycles) === null || _this$lifecycles6 === void 0 ? void 0 : (_this$lifecycles6$aft = _this$lifecycles6.afterUnmount) === null || _this$lifecycles6$aft === void 0 ? void 0 : _this$lifecycles6$aft.call(_this$lifecycles6, this.iframe.contentWindow);
          this.mountFlag = false;
          this.bus.$clear();

          if (!this.degrade) {
            clearChild(this.shadowRoot); // head body需要复用，每次都要清空事件

            removeEventListener(this.head);
            removeEventListener(this.body);
          }

          clearChild(this.head);
          clearChild(this.body);
        }
      }
      /** 销毁子应用 */

    }, {
      key: "destroy",
      value: function destroy() {
        this.bus.$clear();
        this.shadowRoot = null;
        this.proxy = null;
        this.proxyDocument = null;
        this.proxyLocation = null;
        this.execQueue = null;
        this.provide = null;
        this.styleSheetElements = null;
        this.bus = null;
        this.replace = null;
        this.fetch = null;
        this.execFlag = null;
        this.mountFlag = null;
        this.hrefFlag = null;
        this.document = null;
        this.head = null;
        this.body = null;
        this.elementEventCacheMap = null;
        this.lifecycles = null;
        this.plugins = null;
        this.provide = null;
        this.inject = null;
        this.execQueue = null;
        this.prefix = null; // 清除 dom

        if (this.el) {
          clearChild(this.el);
          this.el = null;
        } // 清除 iframe 沙箱


        if (this.iframe) {
          var _this$iframe$parentNo;

          (_this$iframe$parentNo = this.iframe.parentNode) === null || _this$iframe$parentNo === void 0 ? void 0 : _this$iframe$parentNo.removeChild(this.iframe);
        }

        deleteWujieById(this.id);
      }
      /** 当子应用再次激活后，只运行mount函数，样式需要重新恢复 */

    }, {
      key: "rebuildStyleSheets",
      value: function rebuildStyleSheets() {
        var _this3 = this;

        if (this.styleSheetElements && this.styleSheetElements.length) {
          this.styleSheetElements.forEach(function (styleSheetElement) {
            rawElementAppendChild.call(_this3.degrade ? _this3.document.head : _this3.shadowRoot.head, styleSheetElement);
          });
        }

        this.patchCssRules();
      }
      /**
       * 子应用样式打补丁
       * 1、兼容:root选择器样式到:host选择器上
       * 2、将@font-face定义到shadowRoot外部
       */

    }, {
      key: "patchCssRules",
      value: function patchCssRules() {
        if (this.degrade) return;
        if (this.shadowRoot.host.hasAttribute(WUJIE_DATA_ATTACH_CSS_FLAG)) return;

        var _getPatchStyleElement = getPatchStyleElements(Array.from(this.iframe.contentDocument.querySelectorAll("style")).map(function (styleSheetElement) {
          return styleSheetElement.sheet;
        })),
            _getPatchStyleElement2 = _slicedToArray(_getPatchStyleElement, 2),
            hostStyleSheetElement = _getPatchStyleElement2[0],
            fontStyleSheetElement = _getPatchStyleElement2[1];

        if (hostStyleSheetElement) {
          this.shadowRoot.head.appendChild(hostStyleSheetElement);
          this.styleSheetElements.push(hostStyleSheetElement);
        }

        if (fontStyleSheetElement) {
          this.shadowRoot.host.appendChild(fontStyleSheetElement);
        }

        (hostStyleSheetElement || fontStyleSheetElement) && this.shadowRoot.host.setAttribute(WUJIE_DATA_ATTACH_CSS_FLAG, "");
      }
    }]);

    return Wujie;
  }();

  new EventBus(Date.now().toString());

  /**
   * 强制中断主应用运行
   * wujie.__WUJIE 如果为true说明当前运行环境是子应用
   * window.__POWERED_BY_WUJIE__ 如果为false说明子应用还没初始化完成
   * 上述条件同时成立说明主应用代码在iframe的loading阶段混入进来了，必须中断执行
   */
  if (window.__WUJIE && !window.__POWERED_BY_WUJIE__) {
    warn(WUJIE_TIPS_STOP_APP);
    throw new Error(WUJIE_TIPS_STOP_APP);
  } // 处理子应用链接跳转


  processAppForHrefJump(); // 定义webComponent容器

  defineWujieWebComponent(); // 如果不支持则告警

  if (!wujieSupport) warn(WUJIE_TIPS_NOT_SUPPORTED);
  /**
   * 运行无界app
   */

  function startApp(_x) {
    return _startApp.apply(this, arguments);
  }
  /**
   * 预加载无界APP
   */

  function _startApp() {
    _startApp = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(startOptions) {
      var _newSandbox$lifecycle, _newSandbox$lifecycle2;

      var sandbox, cacheOptions, options, name, url, replace, fetch, props, attrs, fiber, alive, degrade, sync, prefix, el, loading, plugins, lifecycles, _iframeWindow, _sandbox$lifecycles3, _sandbox$lifecycles3$, _sandbox$lifecycles2, _sandbox$lifecycles2$, _yield$importHTML2, _getExternalScripts, _sandbox$lifecycles4, _sandbox$lifecycles4$, _sandbox$lifecycles5, _sandbox$lifecycles5$, newSandbox, _yield$importHTML3, template, getExternalScripts, getExternalStyleSheets, processedHtml;

      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sandbox = getWujieById(startOptions.name);
              cacheOptions = getOptionsById(startOptions.name); // 合并缓存配置

              options = mergeOptions(startOptions, cacheOptions);
              name = options.name, url = options.url, replace = options.replace, fetch = options.fetch, props = options.props, attrs = options.attrs, fiber = options.fiber, alive = options.alive, degrade = options.degrade, sync = options.sync, prefix = options.prefix, el = options.el, loading = options.loading, plugins = options.plugins, lifecycles = options.lifecycles; // 已经初始化过的应用，快速渲染

              if (!sandbox) {
                _context2.next = 39;
                break;
              }

              sandbox.plugins = getPlugins(plugins);
              sandbox.lifecycles = lifecycles;
              _iframeWindow = sandbox.iframe.contentWindow;

              if (!sandbox.preload) {
                _context2.next = 11;
                break;
              }

              _context2.next = 11;
              return Promise.resolve(sandbox.preload);

            case 11:
              if (!alive) {
                _context2.next = 26;
                break;
              }

              _context2.next = 14;
              return sandbox.active({
                url: url,
                sync: sync,
                prefix: prefix,
                el: el,
                props: props,
                alive: alive,
                fetch: fetch,
                replace: replace
              });

            case 14:
              if (sandbox.execFlag) {
                _context2.next = 22;
                break;
              }

              (_sandbox$lifecycles2 = sandbox.lifecycles) === null || _sandbox$lifecycles2 === void 0 ? void 0 : (_sandbox$lifecycles2$ = _sandbox$lifecycles2.beforeLoad) === null || _sandbox$lifecycles2$ === void 0 ? void 0 : _sandbox$lifecycles2$.call(_sandbox$lifecycles2, sandbox.iframe.contentWindow);
              _context2.next = 18;
              return importHTML(url, {
                fetch: fetch || window.fetch,
                plugins: sandbox.plugins,
                loadError: sandbox.lifecycles.loadError,
                fiber: fiber
              });

            case 18:
              _yield$importHTML2 = _context2.sent;
              _getExternalScripts = _yield$importHTML2.getExternalScripts;
              _context2.next = 22;
              return sandbox.start(_getExternalScripts);

            case 22:
              (_sandbox$lifecycles3 = sandbox.lifecycles) === null || _sandbox$lifecycles3 === void 0 ? void 0 : (_sandbox$lifecycles3$ = _sandbox$lifecycles3.activated) === null || _sandbox$lifecycles3$ === void 0 ? void 0 : _sandbox$lifecycles3$.call(_sandbox$lifecycles3, sandbox.iframe.contentWindow);
              return _context2.abrupt("return", sandbox.destroy);

            case 26:
              if (!isFunction(_iframeWindow.__WUJIE_MOUNT)) {
                _context2.next = 38;
                break;
              }

              /**
               * 子应用切换会触发webcomponent的disconnectedCallback调用sandbox.unmount进行实例销毁
               * 此处是防止没有销毁webcomponent时调用startApp的情况，需要手动调用unmount
               */
              sandbox.unmount();
              _context2.next = 30;
              return sandbox.active({
                url: url,
                sync: sync,
                prefix: prefix,
                el: el,
                props: props,
                alive: alive,
                fetch: fetch,
                replace: replace
              });

            case 30:
              // 有渲染函数
              (_sandbox$lifecycles4 = sandbox.lifecycles) === null || _sandbox$lifecycles4 === void 0 ? void 0 : (_sandbox$lifecycles4$ = _sandbox$lifecycles4.beforeMount) === null || _sandbox$lifecycles4$ === void 0 ? void 0 : _sandbox$lifecycles4$.call(_sandbox$lifecycles4, sandbox.iframe.contentWindow);

              _iframeWindow.__WUJIE_MOUNT();

              (_sandbox$lifecycles5 = sandbox.lifecycles) === null || _sandbox$lifecycles5 === void 0 ? void 0 : (_sandbox$lifecycles5$ = _sandbox$lifecycles5.afterMount) === null || _sandbox$lifecycles5$ === void 0 ? void 0 : _sandbox$lifecycles5$.call(_sandbox$lifecycles5, sandbox.iframe.contentWindow);
              sandbox.mountFlag = true;
              sandbox.rebuildStyleSheets();
              return _context2.abrupt("return", sandbox.destroy);

            case 38:
              // 没有渲染函数
              sandbox.destroy();

            case 39:
              // 设置loading
              addLoading(el, loading);
              newSandbox = new Wujie({
                name: name,
                url: url,
                attrs: attrs,
                fiber: fiber,
                degrade: degrade,
                plugins: plugins,
                lifecycles: lifecycles
              });
              (_newSandbox$lifecycle = newSandbox.lifecycles) === null || _newSandbox$lifecycle === void 0 ? void 0 : (_newSandbox$lifecycle2 = _newSandbox$lifecycle.beforeLoad) === null || _newSandbox$lifecycle2 === void 0 ? void 0 : _newSandbox$lifecycle2.call(_newSandbox$lifecycle, newSandbox.iframe.contentWindow);
              _context2.next = 44;
              return importHTML(url, {
                fetch: fetch || window.fetch,
                plugins: newSandbox.plugins,
                loadError: newSandbox.lifecycles.loadError,
                fiber: fiber
              });

            case 44:
              _yield$importHTML3 = _context2.sent;
              template = _yield$importHTML3.template;
              getExternalScripts = _yield$importHTML3.getExternalScripts;
              getExternalStyleSheets = _yield$importHTML3.getExternalStyleSheets;
              _context2.next = 50;
              return processCssLoader(newSandbox, template, getExternalStyleSheets);

            case 50:
              processedHtml = _context2.sent;
              _context2.next = 53;
              return newSandbox.active({
                url: url,
                sync: sync,
                prefix: prefix,
                template: processedHtml,
                el: el,
                props: props,
                alive: alive,
                fetch: fetch,
                replace: replace
              });

            case 53:
              _context2.next = 55;
              return newSandbox.start(getExternalScripts);

            case 55:
              return _context2.abrupt("return", newSandbox.destroy);

            case 56:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _startApp.apply(this, arguments);
  }

  startApp({ name: "test", url: 'http://127.0.0.1:9001/app1', el: '#test' });

}));
//# sourceMappingURL=index.js.map
