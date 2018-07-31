(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.comp = undefined;

var _mobxReact = __webpack_require__(4);

var _reactI18next = __webpack_require__(5);

var comp = exports.comp = function comp(Comp) {
    return (0, _reactI18next.translate)(['data'])((0, _mobxReact.inject)('appStore')((0, _mobxReact.observer)(Comp)));
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var colors = exports.colors = {
    'primary-color': '#ff5e3a',
    'secondary-color': '#3f4257',
    'form-color': '#515365',
    'placeholder-form - color': '#888da8',
    'white-color': '#fff',
    'heading-color': '#515365',
    'icon-color': ' #9a9fbf',
    'body-bg': '#edf2f6',
    'body-font-color': '#888da8',
    'body-bg-white': '#ffffff',
    'border-round': '100%',
    'border-rounded': '3px',
    'border-color': '#e6ecf5',
    grey: '#515365',
    'grey-light': '#888da8',
    'grey-lighter': '#9a9fbf',
    purple: '#7c5ac2',
    'purple-dark': '#6236b2',
    blue: '#38a9ff',
    breez: '#08ddc1',
    'breez-light': '#2aebcb',
    orange: '#ff763a',
    yellow: '#ffdc1b',
    smoke: '#e6ecf5',
    green: '#1ed760',
    'smoke-light': '#fafbfd',
    'blue-light': '#00b7ff',
    violet: '#7442ce',
    'c-facebook': '#2f5b9d',
    'c-twitter': '#38bff1',
    'c-dribbble': '#f74881',
    'c-rss': '#fab819',
    'c-spotify': '#1ed760',
    'c-google': '#ea4235',
    'headings-font-weight-h1-h4': '300'
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(46);

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _button.Button;
  }
});

var _floatingInput = __webpack_require__(48);

Object.defineProperty(exports, 'FloatingInput', {
  enumerable: true,
  get: function get() {
    return _floatingInput.FloatingInput;
  }
});

var _checkbox = __webpack_require__(50);

Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _checkbox.Checkbox;
  }
});

var _richText = __webpack_require__(14);

Object.defineProperty(exports, 'RichTextEditor', {
  enumerable: true,
  get: function get() {
    return _richText.RichTextEditor;
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports.Footer = undefined;

var _Footer = __webpack_require__(22);

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = __webpack_require__(23);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Footer = _Footer2.default;
exports.Header = _Header2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("mobx-react-form");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("validatorjs");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RichTextEditor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _slate = __webpack_require__(52);

var _slateReact = __webpack_require__(53);

var _toolbar = __webpack_require__(54);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CodeNode(props) {
    return React.createElement("pre", Object.assign({}, props.attributes), React.createElement("code", null, props.children));
}
function MarkHotkey(options) {
    var type = options.type,
        key = options.key;

    return {
        onKeyDown: function onKeyDown(event, change) {
            if (!event.ctrlKey || event.key !== key) {
                return;
            }
            event.preventDefault();
            change.toggleMark(type);
            return change;
        }
    };
}
var plugins = [MarkHotkey({ key: 'i', type: 'italic' }), MarkHotkey({ key: 'b', type: 'bold' }), MarkHotkey({ key: '`', type: 'code' }), MarkHotkey({ key: '~', type: 'strikethrough' }), MarkHotkey({ key: 'u', type: 'underline' })];

var RichTextEditor = exports.RichTextEditor = function (_React$Component) {
    _inherits(RichTextEditor, _React$Component);

    function RichTextEditor(props) {
        _classCallCheck(this, RichTextEditor);

        var _this = _possibleConstructorReturn(this, (RichTextEditor.__proto__ || Object.getPrototypeOf(RichTextEditor)).call(this, props));

        _this.onChange = _this.onChange.bind(_this);
        _this.renderNode = _this.renderNode.bind(_this);
        _this.renderMark = _this.renderMark.bind(_this);
        _this.applyToolbarChange = _this.applyToolbarChange.bind(_this);
        _this.state = {
            editorValue: _slate.Value.fromJSON({
                document: {
                    nodes: [{
                        object: 'block',
                        type: 'paragraph',
                        nodes: [{
                            object: 'text',
                            leaves: []
                        }]
                    }]
                }
            })
        };
        return _this;
    }

    _createClass(RichTextEditor, [{
        key: 'onChange',
        value: function onChange(ev) {
            var value = ev.value;

            this.setState({ editorValue: value });
            if (this.props.onChange) {
                this.props.onChange(value.toJSON());
            }
        }
    }, {
        key: 'renderNode',
        value: function renderNode(props) {
            switch (props.node.type) {
                case 'code':
                    return React.createElement(CodeNode, Object.assign({}, props));
            }
        }
    }, {
        key: 'renderMark',
        value: function renderMark(props) {
            switch (props.mark.type) {
                case 'bold':
                    return React.createElement("strong", null, props.children);
                case 'italic':
                    return React.createElement("em", null, props.children);
                case 'underline':
                    return React.createElement("u", null, props.children);
                case 'strikethrought':
                    return React.createElement("strong", null, props.children);
            }
        }
    }, {
        key: 'applyToolbarChange',
        value: function applyToolbarChange(changeFn) {
            this.setState({
                editorValue: changeFn.call(null, this.state.editorValue.change())
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement("div", null, React.createElement(_toolbar.Toolbar, { onToobarItemClicked: this.applyToolbarChange }), React.createElement(_slateReact.Editor, Object.assign({}, this.props, { value: this.state.editorValue, onChange: this.onChange, plugins: plugins, className: "form-control", renderNode: this.renderNode, renderMark: this.renderMark })));
        }
    }]);

    return RichTextEditor;
}(React.Component);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(9);

var _authenticationComponent = __webpack_require__(72);

var _elements = __webpack_require__(7);

var _decorators = __webpack_require__(2);

var _index = __webpack_require__(78);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LandingPage = (0, _decorators.comp)(function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            var _injectedProps = this.injectedProps,
                t = _injectedProps.t,
                appStore = _injectedProps.appStore;
            var userStore = appStore.userStore;

            return _react2.default.createElement("div", { className: "landing-page" }, _react2.default.createElement("div", { className: "content-bg-wrap" }, _react2.default.createElement("div", { className: "header-spacer--standard" }), _react2.default.createElement("div", { className: "container" }, _react2.default.createElement("div", { className: "row display-flex" }, _react2.default.createElement("div", { className: "col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" }, _react2.default.createElement("div", { className: "landing-content" }, _react2.default.createElement("h1", null, " ", t('index.mainCallToAction')), _react2.default.createElement(_elements.Button, { className: "btn btn-md btn-border c-white", onClick: userStore.setRegisterFormActive }, t('index.joinUsButton')))), _react2.default.createElement(_authenticationComponent.AuthenticationComponent, null)))), _react2.default.createElement("style", { jsx: true }, _index.indexStyles));
        }
    }, {
        key: 'injectedProps',
        get: function get() {
            return this.props;
        }
    }]);

    return _class;
}(_react2.default.Component));
exports.default = (0, _reactStatic.withRouteData)(LandingPage);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(20);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _app2.default;
// Render your app

if (typeof document !== 'undefined') {
    // tslint:disable-next-line:no-console
    console.log('In browser environment....');
    var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
    var render = function render(Comp) {
        renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
    };
    // Render!
    render(_app2.default);
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mobx = __webpack_require__(1);

var _mobxReact = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AuthenticatedUserPageLayout = __webpack_require__(21);

var _CoreLayout = __webpack_require__(25);

var _LandingPageLayout = __webpack_require__(61);

var _reactStatic = __webpack_require__(9);

var _reactHotLoader = __webpack_require__(62);

var _reactStaticRoutes = __webpack_require__(63);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Exapp = function (_React$Component) {
    _inherits(Exapp, _React$Component);

    function Exapp() {
        _classCallCheck(this, Exapp);

        return _possibleConstructorReturn(this, (Exapp.__proto__ || Object.getPrototypeOf(Exapp)).apply(this, arguments));
    }

    _createClass(Exapp, [{
        key: "render",
        value: function render() {
            var PageLayout = this.pageLayout;
            return _react2.default.createElement(_CoreLayout.CoreLayout, null, _react2.default.createElement(PageLayout, null, _react2.default.createElement(_reactStatic.Router, null, _react2.default.createElement("div", null, _react2.default.createElement("nav", null, _react2.default.createElement(_reactStatic.Link, { exact: true, to: "/" }, "Home"), _react2.default.createElement(_reactStatic.Link, { to: "/about" }, "About"), _react2.default.createElement(_reactStatic.Link, { to: "/blog" }, "Blog")), _react2.default.createElement("div", { className: "content" }, _react2.default.createElement(_reactStaticRoutes2.default, null))))));
        }
    }, {
        key: "pageLayout",
        get: function get() {
            // Add here funky logic to determine what layout to use
            var currentRoute = '/';
            switch (currentRoute) {
                case '/':
                    return _LandingPageLayout.LandingPageLayout;
                default:
                    return _AuthenticatedUserPageLayout.AuthenticatedUserPageLayout;
            }
        }
    }]);

    return Exapp;
}(_react2.default.Component);
__decorate([_mobx.computed, __metadata("design:type", Object), __metadata("design:paramtypes", [])], Exapp.prototype, "pageLayout", null);
Exapp = __decorate([_mobxReact.observer, (0, _reactHotLoader.hot)(module)], Exapp);
exports.default = Exapp;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthenticatedUserPageLayout = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _decorators = __webpack_require__(2);

var _ = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthenticatedUserPageLayoutCmp = function (_React$Component) {
    _inherits(AuthenticatedUserPageLayoutCmp, _React$Component);

    function AuthenticatedUserPageLayoutCmp() {
        _classCallCheck(this, AuthenticatedUserPageLayoutCmp);

        return _possibleConstructorReturn(this, (AuthenticatedUserPageLayoutCmp.__proto__ || Object.getPrototypeOf(AuthenticatedUserPageLayoutCmp)).apply(this, arguments));
    }

    _createClass(AuthenticatedUserPageLayoutCmp, [{
        key: 'render',
        value: function render() {
            var appStore = this.injectedProps.appStore;

            var authenticatedMarkup = _react2.default.createElement("div", null, _react2.default.createElement(_.Header, null), this.props.children, _react2.default.createElement(_.Footer, null));
            var loadingMarkup = _react2.default.createElement("div", null, "Loading...");
            return appStore.userStore.currentUser ? authenticatedMarkup : loadingMarkup;
        }
    }, {
        key: 'injectedProps',
        get: function get() {
            return this.props;
        }
    }]);

    return AuthenticatedUserPageLayoutCmp;
}(_react2.default.Component);

var AuthenticatedUserPageLayout = exports.AuthenticatedUserPageLayout = (0, _decorators.comp)(AuthenticatedUserPageLayoutCmp);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactI18next = __webpack_require__(5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Footer = function Footer(_ref) {
  var t = _ref.t;
  return React.createElement("footer", null, t('layout.footerText'));
};
exports.default = (0, _reactI18next.translate)(['data'])(Footer);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactI18next = __webpack_require__(5);

var _LanguageSelector = __webpack_require__(24);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Header = function Header(_ref) {
        var i18n = _ref.i18n;
        return React.createElement("header", null, React.createElement(_LanguageSelector.LanguageSelector, { onChangeLanguage: function onChangeLanguage(lang) {
                        i18n.changeLanguage(lang);
                        localStorage.setItem('i18nextLng', lang);
                } }));
};
exports.default = (0, _reactI18next.translate)(['data'])(Header);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LanguageSelector = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var LanguageSelector = exports.LanguageSelector = function LanguageSelector(props) {
    return React.createElement("div", null, React.createElement("ul", null, React.createElement("li", { "data-lang": "en_EN", className: "flag flag-gb", onClick: function onClick() {
            return props.onChangeLanguage('en_EN');
        } }, "EN"), React.createElement("li", { "data-lang": "ro_RO", className: "flag flag-ro", onClick: function onClick() {
            return props.onChangeLanguage('ro_RO');
        } }, "RO")), React.createElement("style", { jsx: true }, "\n                    .flag {\n                        display: inline-block;\n                        padding-left: 16px;\n                        background: url('public/assets/img/flags.png') no-repeat;\n                        cursoir: pointer;\n                    }\n\n                    .flag.flag-gb {\n                        background-position: -16px 0;\n                    }\n\n                    .flag.flag-ro {\n                        background-position: 0 -11px;\n                    }\n                "));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CoreLayout = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(26);

__webpack_require__(27);

__webpack_require__(28);

var _mobxReact = __webpack_require__(4);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactI18next = __webpack_require__(5);

var _i18n = __webpack_require__(29);

__webpack_require__(33);

var _ApplicationStore = __webpack_require__(34);

var _ApplicationStore2 = _interopRequireDefault(_ApplicationStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoreLayout = exports.CoreLayout = function (_React$Component) {
    _inherits(CoreLayout, _React$Component);

    function CoreLayout(props) {
        _classCallCheck(this, CoreLayout);

        var _this = _possibleConstructorReturn(this, (CoreLayout.__proto__ || Object.getPrototypeOf(CoreLayout)).call(this, props));

        _this.i18n = _i18n.i18n;
        _this.appStore = _ApplicationStore2.default;
        return _this;
    }

    _createClass(CoreLayout, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return React.createElement(_mobxReact.Provider, { appStore: this.appStore }, React.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n }, children));
        }
    }]);

    return CoreLayout;
}(React.Component);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap-grid.css");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap-reboot.css");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.css");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.i18n = undefined;

var _i18next = __webpack_require__(30);

var _i18next2 = _interopRequireDefault(_i18next);

var _i18nextBrowserLanguagedetector = __webpack_require__(31);

var _i18nextBrowserLanguagedetector2 = _interopRequireDefault(_i18nextBrowserLanguagedetector);

var _i18nextXhrBackend = __webpack_require__(32);

var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var i18nOptions = {
    backend: {
        loadPath: 'public/i18n/{{lng}}.json'
    },
    fallbackLng: 'en_EN',
    defaultNS: 'data',
    ns: 'data',
    debug: false,
    interpolation: {
        escapeValue: false
    },
    react: {
        wait: true
    }
};
var i18n = exports.i18n = _i18next2.default;
// for browser use xhr backend to load translations and browser lng detector
if (typeof process.browser !== 'undefined') {
    i18n.use(_i18nextXhrBackend2.default)
    // .use(Cache)
    .use(_i18nextBrowserLanguagedetector2.default);
}
// initialize if not already initialized
if (!i18n.isInitialized) {
    i18n.init(i18nOptions);
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("i18next-xhr-backend");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.pitch (/home/gcazaciuc/open-source/exapp/src/client/node_modules/extract-text-webpack-plugin/dist/loader.js:57:11)");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _api = __webpack_require__(35);

var _accountDashboardStore = __webpack_require__(39);

var _userStore = __webpack_require__(41);

var _campaigns = __webpack_require__(43);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApplicationStore = function ApplicationStore() {
    _classCallCheck(this, ApplicationStore);

    this.campaignsStore = null;
    this.userStore = null;
    this.createCampaignFormStore = null;
    this.accountDashboardStore = null;
    this.api = null;
    this.api = new _api.Api();
    this.campaignsStore = new _campaigns.CampaignsStore();
    this.createCampaignFormStore = new _campaigns.CreateCampaignFormStore();
    this.userStore = new _userStore.UserStore({
        userApi: this.api.userApi
    });
    this.accountDashboardStore = new _accountDashboardStore.AccountDashboardStore({
        userStore: this.userStore
    });
};

exports.default = new ApplicationStore();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Api = undefined;

var _typedAxios = __webpack_require__(36);

var _typedAxios2 = _interopRequireDefault(_typedAxios);

var _userApi = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var api = _typedAxios2.default.create({
    baseURL: 'localhost:5000'
});

var Api = exports.Api = function Api() {
    _classCallCheck(this, Api);

    this.userApi = null;
    this.userApi = new _userApi.UserApi(api);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(37);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypedAxios = _axios2.default;
exports.default = TypedAxios;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserApi = undefined;

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserApi = exports.UserApi = function () {
    function UserApi(api) {
        var _this = this;

        _classCallCheck(this, UserApi);

        this.signInWithEmailAndPassword = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(email, password) {
                var resp;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _this.authService.signInWithEmailAndPassword(email, password);

                            case 2:
                                resp = _context.sent;
                                return _context.abrupt('return', resp);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }();
        this.createUserWithEmailAndPassword = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(payload) {
                var email, password, firstName, lastName, result;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                email = payload.email, password = payload.password, firstName = payload.firstName, lastName = payload.lastName;
                                _context2.next = 3;
                                return _this.authService.createUserWithEmailAndPassword(email, password);

                            case 3:
                                result = _context2.sent;
                                _context2.next = 6;
                                return _this.addUserCollection({
                                    email: email,
                                    userId: result.user.uid,
                                    firstName: firstName,
                                    lastName: lastName,
                                    signInMethod: 'email'
                                });

                            case 6:
                                _this.api.post('/users', {
                                    firstName: 'x',
                                    lastName: 'y',
                                    age: 30
                                });
                                return _context2.abrupt('return', result);

                            case 8:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this);
            }));

            return function (_x3) {
                return _ref2.apply(this, arguments);
            };
        }();
        this.getCurrentUser = function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(userId) {
                var currentUser;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                currentUser = { firstName: 'test', lastName: 'test', age: 30 };
                                return _context3.abrupt('return', currentUser);

                            case 2:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this);
            }));

            return function (_x4) {
                return _ref3.apply(this, arguments);
            };
        }();
        this.signInWithProvider = function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(providerName) {
                var result;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _this.authService.signInWithPopup(providerName);

                            case 2:
                                result = _context4.sent;
                                return _context4.abrupt('return', result);

                            case 4:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, _this);
            }));

            return function (_x5) {
                return _ref4.apply(this, arguments);
            };
        }();
        this.addUserCollection = function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(userInfo) {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return _this.api.post('/users', {
                                    firstName: userInfo.firstName,
                                    lastName: userInfo.lastName,
                                    age: 10
                                });

                            case 2:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, _this);
            }));

            return function (_x6) {
                return _ref5.apply(this, arguments);
            };
        }();
        this.signOut = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.next = 2;
                            return _this.authService.signOut();

                        case 2:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, _this);
        }));
        this.api = api;
        // Create a real auth service and move it in a separate file
        this.authService = {
            signInWithEmailAndPassword: function signInWithEmailAndPassword() {
                return Promise.resolve();
            },
            createUserWithEmailAndPassword: function createUserWithEmailAndPassword() {
                return Promise.resolve();
            }
        };
    }

    _createClass(UserApi, [{
        key: 'auth',
        get: function get() {
            return this.authService;
        }
    }]);

    return UserApi;
}();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccountDashboardStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mobx = __webpack_require__(1);

var _ProfileInformationForm = __webpack_require__(40);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountDashboardStore = exports.AccountDashboardStore = function () {
    function AccountDashboardStore(config) {
        var _this = this;

        _classCallCheck(this, AccountDashboardStore);

        this.isLoading = false;
        this.resetForm = function () {
            var userInfo = _this.userStore.currentUser.data;
            _this.initForm(userInfo);
        };
        this.initForm = function (userInfo) {
            _this.profileInformationForm.init({
                email: userInfo.email,
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                phoneNumber: userInfo.phoneNumber,
                birthday: userInfo.birthday
            });
        };
        this.updateUser = function () {
            return _this.userStore.updateUserInformation({
                firstName: _this.profileInformationForm.$('firstName').value,
                lastName: _this.profileInformationForm.$('lastName').value,
                phoneNumber: _this.profileInformationForm.$('phoneNumber').value,
                birthday: _this.profileInformationForm.$('birthday').value
            });
        };
        this.profileInformationForm = _ProfileInformationForm.profileInformationForm;
        this.userStore = config.userStore;
        (0, _mobx.reaction)(function () {
            return _this.userStore.currentUser;
        }, function (currentUser) {
            var isFetching = currentUser.isLoading;
            var userInfo = currentUser.data;

            if (!isFetching && userInfo) {
                _this.currentUser = currentUser;
                _this.initForm(userInfo);
            }
        });
    }

    _createClass(AccountDashboardStore, [{
        key: "userProfile",
        get: function get() {
            return this.currentUser && this.currentUser.data ? this.currentUser.data : {};
        }
    }]);

    return AccountDashboardStore;
}();

__decorate([_mobx.observable, __metadata("design:type", Object)], AccountDashboardStore.prototype, "isLoading", void 0);
__decorate([_mobx.observable, __metadata("design:type", Object)], AccountDashboardStore.prototype, "currentUser", void 0);
__decorate([_mobx.observable, __metadata("design:type", Object)], AccountDashboardStore.prototype, "userStore", void 0);
__decorate([_mobx.computed, __metadata("design:type", Object), __metadata("design:paramtypes", [])], AccountDashboardStore.prototype, "userProfile", null);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.profileInformationForm = undefined;

var _mobxReactForm = __webpack_require__(11);

var _mobxReactForm2 = _interopRequireDefault(_mobxReactForm);

var _validatorjs = __webpack_require__(12);

var _validatorjs2 = _interopRequireDefault(_validatorjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fields = [{
    name: 'email',
    rules: 'required|email|string|between:5,25'
}, {
    name: 'password',
    rules: 'required|string|between:5,25'
}, {
    name: 'firstName',
    rules: 'required|string|between:5,25'
}, {
    name: 'lastName',
    rules: 'required|string|between:5,25'
}, {
    name: 'birthday',
    rules: 'string'
}, {
    phoneNumber: 'phoneNumber',
    rules: 'number|between:8:10'
}];
var plugins = { dvr: _validatorjs2.default };
var profileInformationForm = exports.profileInformationForm = new _mobxReactForm2.default({ fields: fields }, { plugins: plugins });

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserStore = undefined;

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mobx = __webpack_require__(1);

var _authenticationForm = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserStore = exports.UserStore = function () {
    function UserStore(config) {
        var _this = this;

        _classCallCheck(this, UserStore);

        this.isLoginFormActive = true;
        this.isRegisterFormActive = false;
        this.currentUser = null;
        this.errorMessage = '';
        this.setLoginFormActive = function () {
            _this.isLoginFormActive = true;
            _this.isRegisterFormActive = false;
        };
        this.setRegisterFormActive = function () {
            _this.isLoginFormActive = false;
            _this.isRegisterFormActive = true;
        };
        this.createUser = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var payload;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            payload = {
                                email: _this.registerForm.$('email').value,
                                password: _this.registerForm.$('password').value,
                                firstName: _this.registerForm.$('firstName').value,
                                lastName: _this.registerForm.$('lastName').value
                            };
                            _context.prev = 1;
                            _context.next = 4;
                            return _this.userApi.createUserWithEmailAndPassword(payload);

                        case 4:
                            _this.registerForm.clear();
                            _this.errorMessage = '';
                            _context.next = 11;
                            break;

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context["catch"](1);

                            _this.errorMessage = _context.t0.message;

                        case 11:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[1, 8]]);
        }));
        this.signInFacebook = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var result, profile;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _this.userApi.signInWithProvider('facebook');

                        case 3:
                            result = _context2.sent;
                            profile = result.additionalUserInfo.profile;
                            _context2.next = 7;
                            return _this.addUserCollection({
                                email: result.user.email,
                                userId: result.user.uid,
                                firstName: profile.first_name,
                                lastName: profile.last_name,
                                birthday: profile.birthday,
                                signInMethod: result.credential.signInMethod
                            }, result.additionalUserInfo.isNewUser);

                        case 7:
                            _context2.next = 12;
                            break;

                        case 9:
                            _context2.prev = 9;
                            _context2.t0 = _context2["catch"](0);

                            _this.errorMessage = _context2.t0.message;

                        case 12:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, _this, [[0, 9]]);
        }));
        this.signInTwitter = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var result, profile;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return _this.userApi.signInWithProvider('twitter');

                        case 3:
                            result = _context3.sent;
                            profile = result.additionalUserInfo.profile;
                            _context3.next = 7;
                            return _this.addUserCollection({
                                userId: result.user.uid,
                                firstName: profile.name,
                                lastName: profile.name,
                                signInMethod: result.credential.signInMethod
                            }, result.additionalUserInfo.isNewUser);

                        case 7:
                            _context3.next = 12;
                            break;

                        case 9:
                            _context3.prev = 9;
                            _context3.t0 = _context3["catch"](0);

                            _this.errorMessage = _context3.t0.message;

                        case 12:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, _this, [[0, 9]]);
        }));
        this.signInEmail = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return _this.userApi.signInWithEmailAndPassword(_this.loginForm.$('email').value, _this.loginForm.$('password').value);

                        case 3:
                            _this.loginForm.clear();
                            _this.errorMessage = '';
                            _context4.next = 10;
                            break;

                        case 7:
                            _context4.prev = 7;
                            _context4.t0 = _context4["catch"](0);

                            _this.errorMessage = _context4.t0.message;

                        case 10:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, _this, [[0, 7]]);
        }));
        this.addUserCollection = function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee5(userInfo, isNewUser) {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                if (!isNewUser) {
                                    _context5.next = 3;
                                    break;
                                }

                                _context5.next = 3;
                                return _this.userApi.addUserCollection(userInfo);

                            case 3:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, _this);
            }));

            return function (_x, _x2) {
                return _ref5.apply(this, arguments);
            };
        }();
        this.updateUserInformation = function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee6(userInfo) {
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return _this.currentUser.update(userInfo);

                            case 2:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, _this);
            }));

            return function (_x3) {
                return _ref6.apply(this, arguments);
            };
        }();
        this.waitForUser = function () {
            _this.handleUserAuthChange({ firstName: 'test', lastName: 'test' });
        };
        this.signOut = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.next = 2;
                            return _this.userApi.signOut();

                        case 2:
                        case "end":
                            return _context7.stop();
                    }
                }
            }, _callee7, _this);
        }));
        this.handleUserAuthChange = function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee8(user) {
                return _regenerator2.default.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                if (!user) {
                                    _context8.next = 6;
                                    break;
                                }

                                _context8.next = 3;
                                return _this.userApi.getCurrentUser(user.uid);

                            case 3:
                                _context8.t0 = _context8.sent;
                                _context8.next = 7;
                                break;

                            case 6:
                                _context8.t0 = null;

                            case 7:
                                _this.currentUser = _context8.t0;

                            case 8:
                            case "end":
                                return _context8.stop();
                        }
                    }
                }, _callee8, _this);
            }));

            return function (_x4) {
                return _ref8.apply(this, arguments);
            };
        }();
        this.userApi = config.userApi;
        this.loginForm = _authenticationForm.loginForm;
        this.registerForm = _authenticationForm.registerForm;
        this.currentUser = null;
        this.waitForUser();
    }

    _createClass(UserStore, [{
        key: "userProfile",
        get: function get() {
            return this.currentUser && this.currentUser.data ? this.currentUser.data : {};
        }
    }]);

    return UserStore;
}();

__decorate([_mobx.observable, __metadata("design:type", Object)], UserStore.prototype, "isLoginFormActive", void 0);
__decorate([_mobx.observable, __metadata("design:type", Object)], UserStore.prototype, "isRegisterFormActive", void 0);
__decorate([_mobx.observable, __metadata("design:type", Object)], UserStore.prototype, "currentUser", void 0);
__decorate([_mobx.observable, __metadata("design:type", String)], UserStore.prototype, "errorMessage", void 0);
__decorate([_mobx.action, __metadata("design:type", Object)], UserStore.prototype, "setLoginFormActive", void 0);
__decorate([_mobx.action, __metadata("design:type", Object)], UserStore.prototype, "setRegisterFormActive", void 0);
__decorate([_mobx.action, __metadata("design:type", Object)], UserStore.prototype, "createUser", void 0);
__decorate([_mobx.action, __metadata("design:type", Object)], UserStore.prototype, "signInEmail", void 0);
__decorate([_mobx.computed, __metadata("design:type", Object), __metadata("design:paramtypes", [])], UserStore.prototype, "userProfile", null);
__decorate([_mobx.action, __metadata("design:type", Object)], UserStore.prototype, "waitForUser", void 0);
__decorate([_mobx.action, __metadata("design:type", Object)], UserStore.prototype, "handleUserAuthChange", void 0);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerForm = exports.loginForm = undefined;

var _mobxReactForm = __webpack_require__(11);

var _mobxReactForm2 = _interopRequireDefault(_mobxReactForm);

var _validatorjs = __webpack_require__(12);

var _validatorjs2 = _interopRequireDefault(_validatorjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fields = [{
    name: 'email',
    rules: 'required|email|string|between:5,25'
}, {
    name: 'password',
    rules: 'required|string|between:5,25'
}, {
    name: 'firstName',
    rules: 'required|string|between:5,25'
}, {
    name: 'lastName',
    rules: 'required|string|between:5,25'
}];
var plugins = { dvr: _validatorjs2.default };
var loginForm = exports.loginForm = new _mobxReactForm2.default({ fields: fields }, { plugins: plugins });
var registerForm = exports.registerForm = new _mobxReactForm2.default({ fields: fields }, { plugins: plugins });

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignsStore = exports.CreateCampaignForm = exports.CreateCampaignFormStore = undefined;

var _campaignsStore = __webpack_require__(44);

var _createCampaignForm = __webpack_require__(45);

var _createCampaignFormStore = __webpack_require__(60);

exports.CreateCampaignFormStore = _createCampaignFormStore.CreateCampaignFormStore;
exports.CreateCampaignForm = _createCampaignForm.CreateCampaignForm;
exports.CampaignsStore = _campaignsStore.CampaignsStore;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CampaignsStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mobx = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CampaignsStore = exports.CampaignsStore = function () {
    function CampaignsStore(campaignsCollection) {
        _classCallCheck(this, CampaignsStore);

        this.removeCampaign = function (campaign) {
            campaign.delete();
        };
        this.campaignsCollection = campaignsCollection;
    }

    _createClass(CampaignsStore, [{
        key: "campaigns",
        get: function get() {
            return this.campaignsCollection.docs;
        }
    }]);

    return CampaignsStore;
}();

__decorate([_mobx.observable, __metadata("design:type", Object)], CampaignsStore.prototype, "name", void 0);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreateCampaignForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _decorators = __webpack_require__(2);

var _elements = __webpack_require__(7);

var _richText = __webpack_require__(14);

var _createCampaignForm = __webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateCampaignForm = exports.CreateCampaignForm = (0, _decorators.comp)(function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            var _injectedProps = this.injectedProps,
                t = _injectedProps.t,
                createCampaignFormStore = _injectedProps.appStore.createCampaignFormStore;

            return _react2.default.createElement("div", null, _react2.default.createElement("h1", null, t('startCampaign.campaignInfoTitle')), _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col-sm-4" }, _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", { className: "h4" }, "Title"), _react2.default.createElement(_elements.FloatingInput, { name: "campaignTitle", id: "campaignTitle", placeholder: "Type a campaign title", onChange: function onChange(ev) {
                    return createCampaignFormStore.onTitleChange(ev.target.value);
                } })), _react2.default.createElement("div", { className: "form-group" }, "Test")), _react2.default.createElement("div", { className: "col-sm-8" }, _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", { className: "h4" }, "Description"), _react2.default.createElement(_richText.RichTextEditor, { onChange: createCampaignFormStore.onDescriptionChange, placeholder: "A detailed description of campaigns goals" })), _react2.default.createElement("div", { className: "form-group" }, _react2.default.createElement("label", { className: "h4" }, "Short summary"), _react2.default.createElement("textarea", { className: "form-control", onChange: function onChange(ev) {
                    return createCampaignFormStore.onSummaryChange(ev.target.value);
                }, placeholder: "A really short excerpt of what the campaign is about" })), _react2.default.createElement("div", { className: "create-campaign-btn-container" }, _react2.default.createElement(_elements.Button, { onClick: createCampaignFormStore.onCreateCampaign, className: "btn btn-md btn-purple" }, "Create campaign")))), _react2.default.createElement("style", { jsx: true }, _createCampaignForm.createCampaignFormStyles));
        }
    }, {
        key: 'injectedProps',
        get: function get() {
            return this.props;
        }
    }]);

    return _class;
}(_react2.default.Component));

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _buttons = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = exports.Button = function Button(props) {
    return _react2.default.createElement("div", null, _react2.default.createElement("a", Object.assign({ href: "#", className: props.className, onClick: props.onClick }, props), props.children), _react2.default.createElement("style", { jsx: true }, _buttons.buttonsStyles));
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buttonsStyles = undefined;

var _index = __webpack_require__(3);

var buttonsStyles = exports.buttonsStyles = ['.bg-facebook{background-color:' + _index.colors['c-facebook'] + ';}', '.bg-twitter{background-color:' + _index.colors['c-twitter'] + ';}', '.full-width{width:100%;}', '.btn{color:' + _index.colors['white-color'] + ';margin-bottom:15px;position:relative;}', '.btn:hover{opacity:0.8;color:' + _index.colors['white-color'] + ';}', '.btn:focus{box-shadow:none;}', '.btn.c-grey{border-color:#d8dbe6;}', '.btn.c-grey:hover{color:inherit;}', '.btn.disabled,.btn:disabled{background-color:#9a9fbf;border-color:#9a9fbf;}', '.btn-transparent{background-color:transparent;}', 'button:hover{cursor:pointer;}', '.btn-icon-left i,.btn-icon-left svg{font-size:12px;margin-right:10px;}', '.btn-lg i,.btn-lg svg{font-size:16px;}', '@media (max-width:1080px){.btn-lg{padding:1rem;}}', '.btn-md{padding:1rem 3.5rem;font-size:0.75rem;border-radius:0.3rem;}', '@media (max-width:1080px){.btn-md{padding:0.6rem 0.5rem;}}', '.btn-md-2{padding:0.8rem 2.1rem;font-size:0.688rem;border-radius:0.3rem;}', '@media (max-width:1080px){.btn-md-2{padding:0.6rem 0.5rem;}}', '.btn-control{border-radius:100%;width:50px;height:50px;line-height:54px;padding:0;fill:' + _index.colors['white-color'] + ';font-size:20px;}', '.btn-control:hover{opacity:1;}', '.btn-control .more-dropdown{top:auto;bottom:100%;}', '.btn-control .more-dropdown li{line-height:1.3;font-size:12px;}', '.btn-control>i,.btn-control svg{font-size:20px;width:20px;height:20px;}', '.btn-control.has-i{font-size:unset;}', '.btn-control.has-i>i,.btn-control.has-i svg{font-size:15px;width:15px;height:15px;}', '.btn-control.btn-more{line-height:54px;}', '.btn-control-small{width:34px;height:34px;line-height:34px;}', '.btn-control-small>i,.btn-control-small svg{font-size:16px;width:16px;height:16px;}', '.btn-more{background-color:#ccd1e0;margin:40px auto;text-align:center;display:block;line-height:40px;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;}', '.btn-more:hover{fill:' + _index.colors['primary-color'] + ';}', '.btn-border{border:solid 2px;}', '.btn-border-think{border:solid 1px;}', '.control-block-button{position:absolute;}', '.control-block-button .btn-control{margin-right:20px;margin-bottom:0;fill:' + _index.colors['white-color'] + ';}', '.control-block-button .btn-control:last-child{margin-right:0;}', '.control-block-button .btn-control .olymp-settings-icon{width:17px;height:21px;}', '.control-block-button .btn-control .olymp-happy-face-icon{width:21px;height:21px;}', '.control-block-button .btn-control .olymp-chat---messages-icon{width:23px;height:20px;}', '.control-block-button .btn-control .olymp-star-icon{height:20px;width:20px;}', '.control-block-button .btn-control .olymp-happy-faces-icon{height:22px;width:22px;}', '.btn-primary:hover{background-color:' + _index.colors.orange + ';border-color:' + _index.colors.orange + ';opacity:1;}', '.btn-secondary:hover{background-color:' + _index.colors['primary-color'] + ';border-color:' + _index.colors['primary-color'] + ';opacity:1;}', '.btn-purple{background-color:' + _index.colors.purple + ';}', '.btn-blue{background-color:' + _index.colors.blue + ';}', '.btn-breez{background-color:' + _index.colors.breez + ';}', '.btn-green{background-color:' + _index.colors.green + ';}', '.btn-grey{background-color:' + _index.colors.grey + ';}', '.btn-grey-light{background-color:' + _index.colors['grey-light'] + ';}', '.btn-grey-lighter{background-color:' + _index.colors['grey-lighter'] + ';}', '.btn-breez-light{background-color:' + _index.colors['breez-light'] + ';}', '.btn-yellow{background-color:' + _index.colors.yellow + ';}', '.btn-smoke{background-color:' + _index.colors.smoke + ';}', '.btn-bg-secondary{background-color:' + _index.colors['secondary-color'] + ';}', '.btn-light-bg{color:' + _index.colors['heading-color'] + ';}', '.btn-light-bg:hover{color:' + _index.colors['heading-color'] + ';}', '.btn-light-bg:focus{color:' + _index.colors['heading-color'] + ';}', '.btn-market{text-transform:none;text-align:left;padding:13px 23px;background-color:#000;}', '.btn-market .icon{margin-right:5px;height:35px;width:35px;}', '.btn-market>*{display:inline-block;vertical-align:middle;}', '.btn-market .text{overflow:hidden;}', '.btn-market span{display:block;}', '.btn-market .sup-title{font-size:9px;font-weight:700;}', '.btn-market .title{font-size:18px;font-weight:500;}', '.btn-market:after{box-shadow:10px 0 15px 0 rgba(18,25,33,0.3);}', '.btn-market+.btn-market{margin-left:20px;}', '.with--icon{text-align:left;}', '.with--icon .icon{margin-right:12px;height:35px;width:35px;fill:' + _index.colors['white-color'] + ';}', '.with--icon>*{display:inline-block;vertical-align:middle;}', '.with--icon .text{overflow:hidden;}', '.with--icon span{display:block;}', '.with--icon .sup-title{font-size:8px;font-weight:700;}', '.with--icon .title{font-size:14px;font-weight:700;}', '.with--icon:after{box-shadow:10px 0 15px 0 rgba(18,25,33,0.3);}', '.with--icon.btn-md .icon{margin-right:15px;height:22px;width:22px;}', '.icon-add{position:relative;display:inline-block;margin-right:12px;vertical-align:middle;}', '.icon-add:after{content:\'\\f067\';display:block;position:absolute;right:-4px;top:-4px;color:inherit;font-size:7px;font-family:\'Font Awesome 5 Free\';}', '.icon-add.without-text{margin-right:0;}', '.icon-minus{position:relative;display:inline-block;vertical-align:middle;}', '.icon-minus:after{content:\'\\f068\';display:block;position:absolute;right:-4px;top:-4px;color:inherit;font-size:7px;font-family:\'Font Awesome 5 Free\';}', '.accept-request{display:inline-block;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:0.5rem;font-size:0.688rem;border-radius:0.25rem;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;background-color:' + _index.colors.blue + ';color:' + _index.colors['white-color'] + ';fill:' + _index.colors['white-color'] + ';}', '.accept-request:hover,.accept-request:focus{color:' + _index.colors['white-color'] + ';fill:' + _index.colors['white-color'] + ';opacity:0.9;}', '.accept-request+.accept-request{margin-left:8px;}', '.accept-request svg{width:20px;height:20px;}', '.request-del{background-color:' + _index.colors['grey-lighter'] + ';}', '.fav-pages{background-color:' + _index.colors['primary-color'] + ';}', '.chat-message{background-color:' + _index.colors.purple + ';}', '.btn--half-width{width:48%;}', '.back-to-top{position:fixed;z-index:19;width:50px;height:50px;line-height:50px;display:block;fill:' + _index.colors['white-color'] + ';stroke:inherit;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;bottom:10px;right:85px;cursor:pointer;box-shadow:0 0 10px 0 rgba(63,66,87,0.4);border-radius:100%;background-color:' + _index.colors['primary-color'] + ';text-align:center;}', '.back-to-top.hidden{opacity:0;}', '.back-to-top .back-icon{height:20px;width:20px;}', '@media (max-width:768px){.back-to-top{width:40px;height:40px;line-height:40px;right:10px;}.back-to-top .back-icon{height:15px;width:15px;}}', '@media (max-width:410px){.btn-market+.btn-market{margin-left:0;}}', '@media (max-width:360px){.btn-control .more-dropdown{top:100%;bottom:auto;}}'];
buttonsStyles.__hash = '1425142389';
buttonsStyles.__scoped = ['.bg-facebook.jsx-1344116148{background-color:' + _index.colors['c-facebook'] + ';}', '.bg-twitter.jsx-1344116148{background-color:' + _index.colors['c-twitter'] + ';}', '.full-width.jsx-1344116148{width:100%;}', '.btn.jsx-1344116148{color:' + _index.colors['white-color'] + ';margin-bottom:15px;position:relative;}', '.btn.jsx-1344116148:hover{opacity:0.8;color:' + _index.colors['white-color'] + ';}', '.btn.jsx-1344116148:focus{box-shadow:none;}', '.btn.c-grey.jsx-1344116148{border-color:#d8dbe6;}', '.btn.c-grey.jsx-1344116148:hover{color:inherit;}', '.btn.disabled.jsx-1344116148,.btn.jsx-1344116148:disabled{background-color:#9a9fbf;border-color:#9a9fbf;}', '.btn-transparent.jsx-1344116148{background-color:transparent;}', 'button.jsx-1344116148:hover{cursor:pointer;}', '.btn-icon-left.jsx-1344116148 i.jsx-1344116148,.btn-icon-left.jsx-1344116148 svg.jsx-1344116148{font-size:12px;margin-right:10px;}', '.btn-lg.jsx-1344116148 i.jsx-1344116148,.btn-lg.jsx-1344116148 svg.jsx-1344116148{font-size:16px;}', '@media (max-width:1080px){.btn-lg.jsx-1344116148{padding:1rem;}}', '.btn-md.jsx-1344116148{padding:1rem 3.5rem;font-size:0.75rem;border-radius:0.3rem;}', '@media (max-width:1080px){.btn-md.jsx-1344116148{padding:0.6rem 0.5rem;}}', '.btn-md-2.jsx-1344116148{padding:0.8rem 2.1rem;font-size:0.688rem;border-radius:0.3rem;}', '@media (max-width:1080px){.btn-md-2.jsx-1344116148{padding:0.6rem 0.5rem;}}', '.btn-control.jsx-1344116148{border-radius:100%;width:50px;height:50px;line-height:54px;padding:0;fill:' + _index.colors['white-color'] + ';font-size:20px;}', '.btn-control.jsx-1344116148:hover{opacity:1;}', '.btn-control.jsx-1344116148 .more-dropdown.jsx-1344116148{top:auto;bottom:100%;}', '.btn-control.jsx-1344116148 .more-dropdown.jsx-1344116148 li.jsx-1344116148{line-height:1.3;font-size:12px;}', '.btn-control.jsx-1344116148>i.jsx-1344116148,.btn-control.jsx-1344116148 svg.jsx-1344116148{font-size:20px;width:20px;height:20px;}', '.btn-control.has-i.jsx-1344116148{font-size:unset;}', '.btn-control.has-i.jsx-1344116148>i.jsx-1344116148,.btn-control.has-i.jsx-1344116148 svg.jsx-1344116148{font-size:15px;width:15px;height:15px;}', '.btn-control.btn-more.jsx-1344116148{line-height:54px;}', '.btn-control-small.jsx-1344116148{width:34px;height:34px;line-height:34px;}', '.btn-control-small.jsx-1344116148>i.jsx-1344116148,.btn-control-small.jsx-1344116148 svg.jsx-1344116148{font-size:16px;width:16px;height:16px;}', '.btn-more.jsx-1344116148{background-color:#ccd1e0;margin:40px auto;text-align:center;display:block;line-height:40px;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;}', '.btn-more.jsx-1344116148:hover{fill:' + _index.colors['primary-color'] + ';}', '.btn-border.jsx-1344116148{border:solid 2px;}', '.btn-border-think.jsx-1344116148{border:solid 1px;}', '.control-block-button.jsx-1344116148{position:absolute;}', '.control-block-button.jsx-1344116148 .btn-control.jsx-1344116148{margin-right:20px;margin-bottom:0;fill:' + _index.colors['white-color'] + ';}', '.control-block-button.jsx-1344116148 .btn-control.jsx-1344116148:last-child{margin-right:0;}', '.control-block-button.jsx-1344116148 .btn-control.jsx-1344116148 .olymp-settings-icon.jsx-1344116148{width:17px;height:21px;}', '.control-block-button.jsx-1344116148 .btn-control.jsx-1344116148 .olymp-happy-face-icon.jsx-1344116148{width:21px;height:21px;}', '.control-block-button.jsx-1344116148 .btn-control.jsx-1344116148 .olymp-chat---messages-icon.jsx-1344116148{width:23px;height:20px;}', '.control-block-button.jsx-1344116148 .btn-control.jsx-1344116148 .olymp-star-icon.jsx-1344116148{height:20px;width:20px;}', '.control-block-button.jsx-1344116148 .btn-control.jsx-1344116148 .olymp-happy-faces-icon.jsx-1344116148{height:22px;width:22px;}', '.btn-primary.jsx-1344116148:hover{background-color:' + _index.colors.orange + ';border-color:' + _index.colors.orange + ';opacity:1;}', '.btn-secondary.jsx-1344116148:hover{background-color:' + _index.colors['primary-color'] + ';border-color:' + _index.colors['primary-color'] + ';opacity:1;}', '.btn-purple.jsx-1344116148{background-color:' + _index.colors.purple + ';}', '.btn-blue.jsx-1344116148{background-color:' + _index.colors.blue + ';}', '.btn-breez.jsx-1344116148{background-color:' + _index.colors.breez + ';}', '.btn-green.jsx-1344116148{background-color:' + _index.colors.green + ';}', '.btn-grey.jsx-1344116148{background-color:' + _index.colors.grey + ';}', '.btn-grey-light.jsx-1344116148{background-color:' + _index.colors['grey-light'] + ';}', '.btn-grey-lighter.jsx-1344116148{background-color:' + _index.colors['grey-lighter'] + ';}', '.btn-breez-light.jsx-1344116148{background-color:' + _index.colors['breez-light'] + ';}', '.btn-yellow.jsx-1344116148{background-color:' + _index.colors.yellow + ';}', '.btn-smoke.jsx-1344116148{background-color:' + _index.colors.smoke + ';}', '.btn-bg-secondary.jsx-1344116148{background-color:' + _index.colors['secondary-color'] + ';}', '.btn-light-bg.jsx-1344116148{color:' + _index.colors['heading-color'] + ';}', '.btn-light-bg.jsx-1344116148:hover{color:' + _index.colors['heading-color'] + ';}', '.btn-light-bg.jsx-1344116148:focus{color:' + _index.colors['heading-color'] + ';}', '.btn-market.jsx-1344116148{text-transform:none;text-align:left;padding:13px 23px;background-color:#000;}', '.btn-market.jsx-1344116148 .icon.jsx-1344116148{margin-right:5px;height:35px;width:35px;}', '.btn-market.jsx-1344116148>*.jsx-1344116148{display:inline-block;vertical-align:middle;}', '.btn-market.jsx-1344116148 .text.jsx-1344116148{overflow:hidden;}', '.btn-market.jsx-1344116148 span.jsx-1344116148{display:block;}', '.btn-market.jsx-1344116148 .sup-title.jsx-1344116148{font-size:9px;font-weight:700;}', '.btn-market.jsx-1344116148 .title.jsx-1344116148{font-size:18px;font-weight:500;}', '.btn-market.jsx-1344116148:after{box-shadow:10px 0 15px 0 rgba(18,25,33,0.3);}', '.btn-market.jsx-1344116148+.btn-market.jsx-1344116148{margin-left:20px;}', '.with--icon.jsx-1344116148{text-align:left;}', '.with--icon.jsx-1344116148 .icon.jsx-1344116148{margin-right:12px;height:35px;width:35px;fill:' + _index.colors['white-color'] + ';}', '.with--icon.jsx-1344116148>*.jsx-1344116148{display:inline-block;vertical-align:middle;}', '.with--icon.jsx-1344116148 .text.jsx-1344116148{overflow:hidden;}', '.with--icon.jsx-1344116148 span.jsx-1344116148{display:block;}', '.with--icon.jsx-1344116148 .sup-title.jsx-1344116148{font-size:8px;font-weight:700;}', '.with--icon.jsx-1344116148 .title.jsx-1344116148{font-size:14px;font-weight:700;}', '.with--icon.jsx-1344116148:after{box-shadow:10px 0 15px 0 rgba(18,25,33,0.3);}', '.with--icon.btn-md.jsx-1344116148 .icon.jsx-1344116148{margin-right:15px;height:22px;width:22px;}', '.icon-add.jsx-1344116148{position:relative;display:inline-block;margin-right:12px;vertical-align:middle;}', '.icon-add.jsx-1344116148:after{content:\'\\f067\';display:block;position:absolute;right:-4px;top:-4px;color:inherit;font-size:7px;font-family:\'Font Awesome 5 Free\';}', '.icon-add.without-text.jsx-1344116148{margin-right:0;}', '.icon-minus.jsx-1344116148{position:relative;display:inline-block;vertical-align:middle;}', '.icon-minus.jsx-1344116148:after{content:\'\\f068\';display:block;position:absolute;right:-4px;top:-4px;color:inherit;font-size:7px;font-family:\'Font Awesome 5 Free\';}', '.accept-request.jsx-1344116148{display:inline-block;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:0.5rem;font-size:0.688rem;border-radius:0.25rem;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;background-color:' + _index.colors.blue + ';color:' + _index.colors['white-color'] + ';fill:' + _index.colors['white-color'] + ';}', '.accept-request.jsx-1344116148:hover,.accept-request.jsx-1344116148:focus{color:' + _index.colors['white-color'] + ';fill:' + _index.colors['white-color'] + ';opacity:0.9;}', '.accept-request.jsx-1344116148+.accept-request.jsx-1344116148{margin-left:8px;}', '.accept-request.jsx-1344116148 svg.jsx-1344116148{width:20px;height:20px;}', '.request-del.jsx-1344116148{background-color:' + _index.colors['grey-lighter'] + ';}', '.fav-pages.jsx-1344116148{background-color:' + _index.colors['primary-color'] + ';}', '.chat-message.jsx-1344116148{background-color:' + _index.colors.purple + ';}', '.btn--half-width.jsx-1344116148{width:48%;}', '.back-to-top.jsx-1344116148{position:fixed;z-index:19;width:50px;height:50px;line-height:50px;display:block;fill:' + _index.colors['white-color'] + ';stroke:inherit;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;bottom:10px;right:85px;cursor:pointer;box-shadow:0 0 10px 0 rgba(63,66,87,0.4);border-radius:100%;background-color:' + _index.colors['primary-color'] + ';text-align:center;}', '.back-to-top.hidden.jsx-1344116148{opacity:0;}', '.back-to-top.jsx-1344116148 .back-icon.jsx-1344116148{height:20px;width:20px;}', '@media (max-width:768px){.back-to-top.jsx-1344116148{width:40px;height:40px;line-height:40px;right:10px;}.back-to-top.jsx-1344116148 .back-icon.jsx-1344116148{height:15px;width:15px;}}', '@media (max-width:410px){.btn-market.jsx-1344116148+.btn-market.jsx-1344116148{margin-left:0;}}', '@media (max-width:360px){.btn-control.jsx-1344116148 .more-dropdown.jsx-1344116148{top:100%;bottom:auto;}}'];
buttonsStyles.__scopedHash = '1344116148';

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FloatingInput = undefined;

var _classnames = __webpack_require__(13);

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _floatingInput = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FloatingInput = exports.FloatingInput = (0, _mobxReact.observer)(function (props) {
    var floatingClassName = (0, _classnames2.default)('form-group', 'label-floating', {
        'is-empty': !props.value
    });
    return _react2.default.createElement("div", { className: floatingClassName }, _react2.default.createElement("label", { className: "control-label" }, props.label), _react2.default.createElement("input", Object.assign({ className: "form-control" }, props)), _react2.default.createElement("style", { jsx: true }, _floatingInput.floatingInputStyles));
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var floatingInputStyles = exports.floatingInputStyles = ['.form-group{position:relative;margin-bottom:1.4rem;}', '.label-floating .form-control,.label-floating input,.label-floating select{padding:1.5rem 1.1rem 0.5rem;line-height:1.75;}', '.label-floating textarea.form-control{padding:1.5rem 1.1rem 0.2rem;}', '.label-floating.with-icon .form-control,.label-floating.with-icon input,.label-floating.with-icon textarea{padding-left:70px;}', '.form-group.label-floating.is-select label.control-label{top:8px;font-size:11px;line-height:1.42857;z-index:9;}', '.form-group.label-floating label.control-label,.form-group.label-placeholder label.control-label{top:18px;font-size:14px;line-height:1.42857;left:20px;}', '.form-group.label-static label.control-label,.form-group.label-floating.is-focused label.control-label,.form-group.label-floating:not(.is-empty) label.control-label,.form-group.has-bootstrap-select label.control-label{top:10px;font-size:11px;line-height:1.07143;}', '.label-floating.with-icon label.control-label,.label-placeholder.with-icon label.control-label{left:70px;}', '.form-group.label-floating.is-focused .control-label,.form-group.label-floating.has-bootstrap-select .control-label{top:16px;}', '.form-group.label-floating .bootstrap-select.btn-group .dropdown-toggle .filter-option{top:5px;position:relative;}', '.form-group.label-static label.control-label,.form-group.label-placeholder label.control-label,.form-group.label-floating label.control-label{position:absolute;pointer-events:none;-webkit-transition:0.3s ease all;transition:0.3s ease all;}', '@media (max-width:1024px){.form-group.label-floating label.control-label,.form-group.label-placeholder label.control-label{left:15px;}}', '@media (max-width:360px){.form-group.label-floating label.control-label,.form-group.label-placeholder label.control-label{font-size:12px;}}'];
floatingInputStyles.__hash = '2816876369';
floatingInputStyles.__scoped = ['.form-group.jsx-1751522128{position:relative;margin-bottom:1.4rem;}', '.label-floating.jsx-1751522128 .form-control.jsx-1751522128,.label-floating.jsx-1751522128 input.jsx-1751522128,.label-floating.jsx-1751522128 select.jsx-1751522128{padding:1.5rem 1.1rem 0.5rem;line-height:1.75;}', '.label-floating.jsx-1751522128 textarea.form-control.jsx-1751522128{padding:1.5rem 1.1rem 0.2rem;}', '.label-floating.with-icon.jsx-1751522128 .form-control.jsx-1751522128,.label-floating.with-icon.jsx-1751522128 input.jsx-1751522128,.label-floating.with-icon.jsx-1751522128 textarea.jsx-1751522128{padding-left:70px;}', '.form-group.label-floating.is-select.jsx-1751522128 label.control-label.jsx-1751522128{top:8px;font-size:11px;line-height:1.42857;z-index:9;}', '.form-group.label-floating.jsx-1751522128 label.control-label.jsx-1751522128,.form-group.label-placeholder.jsx-1751522128 label.control-label.jsx-1751522128{top:18px;font-size:14px;line-height:1.42857;left:20px;}', '.form-group.label-static.jsx-1751522128 label.control-label.jsx-1751522128,.form-group.label-floating.is-focused.jsx-1751522128 label.control-label.jsx-1751522128,.form-group.label-floating.jsx-1751522128:not(.is-empty) label.control-label.jsx-1751522128,.form-group.has-bootstrap-select.jsx-1751522128 label.control-label.jsx-1751522128{top:10px;font-size:11px;line-height:1.07143;}', '.label-floating.with-icon.jsx-1751522128 label.control-label.jsx-1751522128,.label-placeholder.with-icon.jsx-1751522128 label.control-label.jsx-1751522128{left:70px;}', '.form-group.label-floating.is-focused.jsx-1751522128 .control-label.jsx-1751522128,.form-group.label-floating.has-bootstrap-select.jsx-1751522128 .control-label.jsx-1751522128{top:16px;}', '.form-group.label-floating.jsx-1751522128 .bootstrap-select.btn-group.jsx-1751522128 .dropdown-toggle.jsx-1751522128 .filter-option.jsx-1751522128{top:5px;position:relative;}', '.form-group.label-static.jsx-1751522128 label.control-label.jsx-1751522128,.form-group.label-placeholder.jsx-1751522128 label.control-label.jsx-1751522128,.form-group.label-floating.jsx-1751522128 label.control-label.jsx-1751522128{position:absolute;pointer-events:none;-webkit-transition:0.3s ease all;transition:0.3s ease all;}', '@media (max-width:1024px){.form-group.label-floating.jsx-1751522128 label.control-label.jsx-1751522128,.form-group.label-placeholder.jsx-1751522128 label.control-label.jsx-1751522128{left:15px;}}', '@media (max-width:360px){.form-group.label-floating.jsx-1751522128 label.control-label.jsx-1751522128,.form-group.label-placeholder.jsx-1751522128 label.control-label.jsx-1751522128{font-size:12px;}}'];
floatingInputStyles.__scopedHash = '1751522128';

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Checkbox = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _checkbox = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = exports.Checkbox = function Checkbox(props) {
    return _react2.default.createElement("div", { className: "checkbox" }, _react2.default.createElement("label", null, _react2.default.createElement("input", { name: props.name, type: "checkbox" }), _react2.default.createElement("span", { className: "checkbox-material" }, _react2.default.createElement("span", { className: "check" })), props.label), _react2.default.createElement("style", { jsx: true }, _checkbox.checkboxStyles));
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkboxStyles = undefined;

var _index = __webpack_require__(3);

var checkboxStyles = exports.checkboxStyles = ['.checkbox{display:inline-block;margin-bottom:0;float:left;}', '.checkbox{margin-bottom:1rem;}', '.checkbox label{cursor:pointer;padding-left:0;margin-bottom:0;}', '.form-group.is-focused .checkbox label{color:rgba(0,0,0,0.26);}', '.form-group.is-focused .checkbox label:hover,.form-group.is-focused .checkbox label:focus{color:rgba(0,0,0,0.54);}', 'fieldset[disabled] .form-group.is-focused .checkbox label{color:rgba(0,0,0,0.26);}', '.checkbox input[type=\'checkbox\']{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;left:0;pointer-events:none;}', '.checkbox .checkbox-material{vertical-align:middle;position:relative;top:1px;padding-right:5px;display:inline-block;}', '.checkbox .checkbox-material:before{display:block;position:absolute;left:0;content:\'\';background-color:rgba(0,0,0,0.84);height:20px;width:20px;border-radius:100%;z-index:1;opacity:0;margin:0;top:0;-webkit-transform:scale3d(2.3,2.3,1);-moz-transform:scale3d(2.3,2.3,1);-o-transform:scale3d(2.3,2.3,1);-ms-transform:scale3d(2.3,2.3,1);-webkit-transform:scale3d(2.3,2.3,1);-ms-transform:scale3d(2.3,2.3,1);transform:scale3d(2.3,2.3,1);}', '.checkbox .checkbox-material .check{position:relative;display:inline-block;width:20px;height:20px;border:1px solid ' + _index.colors['border-color'] + ';overflow:hidden;z-index:1;}', '.checkbox .checkbox-material .check:before{position:absolute;content:\'\';-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);display:block;margin-top:-3px;margin-left:7px;width:0;height:0;background:red;box-shadow:0 0 0 0 inset;-webkit-animation:checkbox-off 0.3s forwards;-moz-animation:checkbox-off 0.3s forwards;-o-animation:checkbox-off 0.3s forwards;-ms-animation:checkbox-off 0.3s forwards;-webkit-animation:checkbox-off 0.3s forwards;animation:checkbox-off 0.3s forwards;}', '.checkbox input[type=\'checkbox\']:focus+.checkbox-material .check:after{opacity:0.2;}', '.checkbox input[type=\'checkbox\']:checked+.checkbox-material .check{background:' + _index.colors['primary-color'] + ';}', '.checkbox input[type=\'checkbox\']:checked+.checkbox-material .check:before{color:#ffffff;box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px;-webkit-animation:checkbox-on 0.3s forwards;-moz-animation:checkbox-on 0.3s forwards;-o-animation:checkbox-on 0.3s forwards;-ms-animation:checkbox-on 0.3s forwards;-webkit-animation:checkbox-on 0.3s forwards;animation:checkbox-on 0.3s forwards;}', '.checkbox.clicked input[type=\'checkbox\']:checked+.checkbox-material:before{-webkit-animation:rippleOn 500ms;-moz-animation:rippleOn 500ms;-o-animation:rippleOn 500ms;-ms-animation:rippleOn 500ms;-webkit-animation:rippleOn 500ms;animation:rippleOn 500ms;}', '.checkbox.clicked input[type=\'checkbox\']:checked+.checkbox-material .check:after{-webkit-animation:rippleOn 500ms forwards;-moz-animation:rippleOn 500ms forwards;-o-animation:rippleOn 500ms forwards;-ms-animation:rippleOn 500ms forwards;-webkit-animation:rippleOn 500ms forwards;animation:rippleOn 500ms forwards;}', '.checkbox.clicked input[type=\'checkbox\']:not(:checked)+.checkbox-material:before{-webkit-animation:rippleOff 500ms;-moz-animation:rippleOff 500ms;-o-animation:rippleOff 500ms;-ms-animation:rippleOff 500ms;-webkit-animation:rippleOff 500ms;animation:rippleOff 500ms;}', '.checkbox.clicked input[type=\'checkbox\']:not(:checked)+.checkbox-material .check:after{-webkit-animation:rippleOff 500ms;-moz-animation:rippleOff 500ms;-o-animation:rippleOff 500ms;-ms-animation:rippleOff 500ms;-webkit-animation:rippleOff 500ms;animation:rippleOff 500ms;}', 'fieldset[disabled] .checkbox,fieldset[disabled] .checkbox input[type=\'checkbox\'],.checkbox input[type=\'checkbox\'][disabled]~.checkbox-material .check,.checkbox input[type=\'checkbox\'][disabled]+.circle{opacity:0.5;}', '.checkbox input[type=\'checkbox\'][disabled]~.checkbox-material .check{border-color:#000000;opacity:0.26;}', '.checkbox input[type=\'checkbox\'][disabled]+.checkbox-material .check:after{background-color:rgba(0,0,0,0.87);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}', '@-webkit-keyframes checkbox-on{0%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,15px 2px 0 11px;}50%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px 2px 0 11px;}100%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px;}}', '@keyframes checkbox-on{0%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,15px 2px 0 11px;}50%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px 2px 0 11px;}100%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px;}}', '@-webkit-keyframes rippleOn{0%{opacity:0;}50%{opacity:0.2;}100%{opacity:0;}}', '@keyframes rippleOn{0%{opacity:0;}50%{opacity:0.2;}100%{opacity:0;}}', '@-webkit-keyframes rippleOff{0%{opacity:0;}50%{opacity:0.2;}100%{opacity:0;}}', '@keyframes rippleOff{0%{opacity:0;}50%{opacity:0.2;}100%{opacity:0;}}'];
checkboxStyles.__hash = '3392975576';
checkboxStyles.__scoped = ['.checkbox.jsx-2254024409{display:inline-block;margin-bottom:0;float:left;}', '.checkbox.jsx-2254024409{margin-bottom:1rem;}', '.checkbox.jsx-2254024409 label.jsx-2254024409{cursor:pointer;padding-left:0;margin-bottom:0;}', '.form-group.is-focused.jsx-2254024409 .checkbox.jsx-2254024409 label.jsx-2254024409{color:rgba(0,0,0,0.26);}', '.form-group.is-focused.jsx-2254024409 .checkbox.jsx-2254024409 label.jsx-2254024409:hover,.form-group.is-focused.jsx-2254024409 .checkbox.jsx-2254024409 label.jsx-2254024409:focus{color:rgba(0,0,0,0.54);}', 'fieldset[disabled].jsx-2254024409 .form-group.is-focused.jsx-2254024409 .checkbox.jsx-2254024409 label.jsx-2254024409{color:rgba(0,0,0,0.26);}', '.checkbox.jsx-2254024409 input[type=\'checkbox\'].jsx-2254024409{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;left:0;pointer-events:none;}', '.checkbox.jsx-2254024409 .checkbox-material.jsx-2254024409{vertical-align:middle;position:relative;top:1px;padding-right:5px;display:inline-block;}', '.checkbox.jsx-2254024409 .checkbox-material.jsx-2254024409:before{display:block;position:absolute;left:0;content:\'\';background-color:rgba(0,0,0,0.84);height:20px;width:20px;border-radius:100%;z-index:1;opacity:0;margin:0;top:0;-webkit-transform:scale3d(2.3,2.3,1);-moz-transform:scale3d(2.3,2.3,1);-o-transform:scale3d(2.3,2.3,1);-ms-transform:scale3d(2.3,2.3,1);-webkit-transform:scale3d(2.3,2.3,1);-ms-transform:scale3d(2.3,2.3,1);transform:scale3d(2.3,2.3,1);}', '.checkbox.jsx-2254024409 .checkbox-material.jsx-2254024409 .check.jsx-2254024409{position:relative;display:inline-block;width:20px;height:20px;border:1px solid ' + _index.colors['border-color'] + ';overflow:hidden;z-index:1;}', '.checkbox.jsx-2254024409 .checkbox-material.jsx-2254024409 .check.jsx-2254024409:before{position:absolute;content:\'\';-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);display:block;margin-top:-3px;margin-left:7px;width:0;height:0;background:red;box-shadow:0 0 0 0 inset;-webkit-animation:checkbox-off 0.3s forwards;-moz-animation:checkbox-off 0.3s forwards;-o-animation:checkbox-off 0.3s forwards;-ms-animation:checkbox-off 0.3s forwards;-webkit-animation:checkbox-off-jsx-2254024409 0.3s forwards;animation:checkbox-off-jsx-2254024409 0.3s forwards;}', '.checkbox.jsx-2254024409 input[type=\'checkbox\'].jsx-2254024409:focus+.checkbox-material.jsx-2254024409 .check.jsx-2254024409:after{opacity:0.2;}', '.checkbox.jsx-2254024409 input[type=\'checkbox\'].jsx-2254024409:checked+.checkbox-material.jsx-2254024409 .check.jsx-2254024409{background:' + _index.colors['primary-color'] + ';}', '.checkbox.jsx-2254024409 input[type=\'checkbox\'].jsx-2254024409:checked+.checkbox-material.jsx-2254024409 .check.jsx-2254024409:before{color:#ffffff;box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px;-webkit-animation:checkbox-on 0.3s forwards;-moz-animation:checkbox-on 0.3s forwards;-o-animation:checkbox-on 0.3s forwards;-ms-animation:checkbox-on 0.3s forwards;-webkit-animation:checkbox-on-jsx-2254024409 0.3s forwards;animation:checkbox-on-jsx-2254024409 0.3s forwards;}', '.checkbox.clicked.jsx-2254024409 input[type=\'checkbox\'].jsx-2254024409:checked+.checkbox-material.jsx-2254024409:before{-webkit-animation:rippleOn 500ms;-moz-animation:rippleOn 500ms;-o-animation:rippleOn 500ms;-ms-animation:rippleOn 500ms;-webkit-animation:rippleOn-jsx-2254024409 500ms;animation:rippleOn-jsx-2254024409 500ms;}', '.checkbox.clicked.jsx-2254024409 input[type=\'checkbox\'].jsx-2254024409:checked+.checkbox-material.jsx-2254024409 .check.jsx-2254024409:after{-webkit-animation:rippleOn 500ms forwards;-moz-animation:rippleOn 500ms forwards;-o-animation:rippleOn 500ms forwards;-ms-animation:rippleOn 500ms forwards;-webkit-animation:rippleOn-jsx-2254024409 500ms forwards;animation:rippleOn-jsx-2254024409 500ms forwards;}', '.checkbox.clicked.jsx-2254024409 input[type=\'checkbox\'].jsx-2254024409:not(:checked)+.checkbox-material.jsx-2254024409:before{-webkit-animation:rippleOff 500ms;-moz-animation:rippleOff 500ms;-o-animation:rippleOff 500ms;-ms-animation:rippleOff 500ms;-webkit-animation:rippleOff-jsx-2254024409 500ms;animation:rippleOff-jsx-2254024409 500ms;}', '.checkbox.clicked.jsx-2254024409 input[type=\'checkbox\'].jsx-2254024409:not(:checked)+.checkbox-material.jsx-2254024409 .check.jsx-2254024409:after{-webkit-animation:rippleOff 500ms;-moz-animation:rippleOff 500ms;-o-animation:rippleOff 500ms;-ms-animation:rippleOff 500ms;-webkit-animation:rippleOff-jsx-2254024409 500ms;animation:rippleOff-jsx-2254024409 500ms;}', 'fieldset[disabled].jsx-2254024409 .checkbox.jsx-2254024409,fieldset[disabled].jsx-2254024409 .checkbox.jsx-2254024409 input[type=\'checkbox\'].jsx-2254024409,.checkbox.jsx-2254024409 input[type=\'checkbox\'][disabled].jsx-2254024409~.checkbox-material.jsx-2254024409 .check.jsx-2254024409,.checkbox.jsx-2254024409 input[type=\'checkbox\'][disabled].jsx-2254024409+.circle.jsx-2254024409{opacity:0.5;}', '.checkbox.jsx-2254024409 input[type=\'checkbox\'][disabled].jsx-2254024409~.checkbox-material.jsx-2254024409 .check.jsx-2254024409{border-color:#000000;opacity:0.26;}', '.checkbox.jsx-2254024409 input[type=\'checkbox\'][disabled].jsx-2254024409+.checkbox-material.jsx-2254024409 .check.jsx-2254024409:after{background-color:rgba(0,0,0,0.87);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}', '@-webkit-keyframes checkbox-on-jsx-2254024409{0%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,15px 2px 0 11px;}50%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px 2px 0 11px;}100%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px;}}', '@keyframes checkbox-on-jsx-2254024409{0%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,15px 2px 0 11px;}50%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px 2px 0 11px;}100%{box-shadow:0 0 0 10px,10px -10px 0 10px,32px 0 0 20px,0px 32px 0 20px,-5px 5px 0 10px,20px -12px 0 11px;}}', '@-webkit-keyframes rippleOn-jsx-2254024409{0%{opacity:0;}50%{opacity:0.2;}100%{opacity:0;}}', '@keyframes rippleOn-jsx-2254024409{0%{opacity:0;}50%{opacity:0.2;}100%{opacity:0;}}', '@-webkit-keyframes rippleOff-jsx-2254024409{0%{opacity:0;}50%{opacity:0.2;}100%{opacity:0;}}', '@keyframes rippleOff-jsx-2254024409{0%{opacity:0;}50%{opacity:0.2;}100%{opacity:0;}}'];
checkboxStyles.__scopedHash = '2254024409';

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("slate");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("slate-react");

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Toolbar = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactIconsKit = __webpack_require__(55);

var _bold = __webpack_require__(56);

var _italic = __webpack_require__(57);

var _underline = __webpack_require__(58);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Toolbar = exports.Toolbar = function Toolbar(props) {
    return React.createElement("div", null, React.createElement("button", { className: "btn btn-default toolbar-icon", title: "Bold", onClick: function onClick() {
            props.onToobarItemClicked(function (change) {
                return change.toggleMark('bold').value;
            });
        } }, React.createElement(_reactIconsKit.Icon, { icon: _bold.bold })), React.createElement("button", { className: "btn btn-default toolbar-icon", title: "Italic", onClick: function onClick() {
            props.onToobarItemClicked(function (change) {
                return change.toggleMark('italic').value;
            });
        } }, React.createElement(_reactIconsKit.Icon, { icon: _italic.italic })), React.createElement("button", { className: "btn btn-default toolbar-icon", title: "Underline", onClick: function onClick() {
            props.onToobarItemClicked(function (change) {
                return change.toggleMark('underline').value;
            });
        } }, React.createElement(_reactIconsKit.Icon, { icon: _underline.underline })));
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/feather/bold");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/feather/italic");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/feather/underline");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createCampaignFormStyles = exports.createCampaignFormStyles = ['.create-campaign-btn-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}'];
createCampaignFormStyles.__hash = '1106646659';
createCampaignFormStyles.__scoped = ['.create-campaign-btn-container.jsx-3938420514{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}'];
createCampaignFormStyles.__scopedHash = '3938420514';

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreateCampaignFormStore = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mobx = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateCampaignFormStore = exports.CreateCampaignFormStore = function CreateCampaignFormStore(campaignsCollection) {
    var _this = this;

    _classCallCheck(this, CreateCampaignFormStore);

    this.title = '';
    this.summary = '';
    this.description = {};
    this.onTitleChange = function (title) {
        _this.title = title;
    };
    this.onDescriptionChange = function (description) {
        _this.description = description;
    };
    this.onSummaryChange = function (summary) {
        _this.summary = summary;
    };
    this.onCreateCampaign = function () {
        _this.addCampaign({
            title: _this.title,
            description: _this.description,
            summary: _this.summary
        });
        _this.title = '';
        _this.description = '';
        _this.summary = '';
    };
    this.addCampaign = function (payload) {
        _this.campaignsCollection.add(payload);
    };
    this.campaignsCollection = campaignsCollection;
    this.title = '';
    this.summary = '';
    this.description = '';
};

__decorate([_mobx.observable, __metadata("design:type", String)], CreateCampaignFormStore.prototype, "title", void 0);
__decorate([_mobx.observable, __metadata("design:type", String)], CreateCampaignFormStore.prototype, "summary", void 0);
__decorate([_mobx.observable, __metadata("design:type", Object)], CreateCampaignFormStore.prototype, "description", void 0);
__decorate([_mobx.observable, __metadata("design:type", Object)], CreateCampaignFormStore.prototype, "campaignsCollection", void 0);
__decorate([_mobx.action, __metadata("design:type", Object)], CreateCampaignFormStore.prototype, "onTitleChange", void 0);
__decorate([_mobx.action, __metadata("design:type", Object)], CreateCampaignFormStore.prototype, "onDescriptionChange", void 0);
__decorate([_mobx.action, __metadata("design:type", Object)], CreateCampaignFormStore.prototype, "onSummaryChange", void 0);
__decorate([_mobx.action, __metadata("design:type", Object)], CreateCampaignFormStore.prototype, "onCreateCampaign", void 0);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LandingPageLayout = undefined;

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _ = __webpack_require__(10);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var LandingPageLayout = exports.LandingPageLayout = function LandingPageLayout(props) {
    return React.createElement("div", null, React.createElement(_.Header, null), props.children, React.createElement(_.Footer, null));
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path2 = __webpack_require__(64);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(65);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(66);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(67);

var _reactUniversalComponent = __webpack_require__(68);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();
var universalOptions = {
    loading: function loading() {
        return null;
    },
    error: function error(props) {
        console.error(props.error);
        return _react2.default.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
    }
};
var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
    id: '../pages/index',
    file: '/home/gcazaciuc/open-source/exapp/src/client/dist/react-static-routes.js',
    load: function load() {
        return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('pages/index', {
            disableWarnings: true
        })]).then(function (proms) {
            return proms[0];
        });
    },
    path: function path() {
        return _path3.default.join(__dirname, '../pages/index');
    },
    resolve: function resolve() {
        return /*require.resolve*/(17);
    },
    chunkName: function chunkName() {
        return 'pages/index';
    }
}), universalOptions);
// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0];
// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
    '404': undefined
};
// Get template for given path
var getComponentForPath = function getComponentForPath(path) {
    path = (0, _reactStatic.cleanPath)(path);
    return global.componentsByTemplateID[global.templateIDsByPath[path]];
};
global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
    global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
    _inherits(Routes, _Component);

    function Routes() {
        _classCallCheck(this, Routes);

        return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
    }

    _createClass(Routes, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                Comp = _props.component,
                render = _props.render,
                children = _props.children;

            var getFullComponentForPath = function getFullComponentForPath(path) {
                var Comp = getComponentForPath(path);
                var is404 = path === '404';
                if (!Comp) {
                    is404 = true;
                    Comp = getComponentForPath('404');
                }
                return function (newProps) {
                    return Comp ? _react2.default.createElement(Comp, Object.assign({}, newProps, is404 ? { is404: true } : {})) : null;
                };
            };
            var renderProps = {
                componentsByTemplateID: global.componentsByTemplateID,
                templateIDsByPath: global.templateIDsByPath,
                getComponentForPath: getFullComponentForPath
            };
            if (Comp) {
                return _react2.default.createElement(Comp, Object.assign({}, renderProps));
            }
            if (render || children) {
                return (render || children)(renderProps);
            }
            // This is the default auto-routing renderer
            return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
                    var Comp = getFullComponentForPath(props.location.pathname);
                    // If Comp is used as a component here, it triggers React to re-mount the entire
                    // component tree underneath during reconciliation, losing all internal state.
                    // By unwrapping it here we keep the real, static component exposed directly to React.
                    return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
                } });
        }
    }]);

    return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(69);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(70);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(71);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(15);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(16);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthenticationComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(13);

var _classnames2 = _interopRequireDefault(_classnames);

var _mobx = __webpack_require__(1);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _decorators = __webpack_require__(2);

var _index = __webpack_require__(73);

var _logIn = __webpack_require__(74);

var _register = __webpack_require__(76);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthenticationComponentCls = function (_React$Component) {
    _inherits(AuthenticationComponentCls, _React$Component);

    function AuthenticationComponentCls(props) {
        _classCallCheck(this, AuthenticationComponentCls);

        var _this = _possibleConstructorReturn(this, (AuthenticationComponentCls.__proto__ || Object.getPrototypeOf(AuthenticationComponentCls)).call(this, props));

        var userStore = _this.props.appStore.userStore;

        (0, _mobx.autorun)(function () {
            var currentUser = userStore.currentUser;
            if (currentUser) {
                _this.props.router.push('/account-dashboard');
            }
        });
        return _this;
    }

    _createClass(AuthenticationComponentCls, [{
        key: 'render',
        value: function render() {
            var _injectedProps = this.injectedProps,
                t = _injectedProps.t,
                appStore = _injectedProps.appStore;

            var userStore = appStore.userStore;
            var loginActiveClassName = (0, _classnames2.default)({
                active: userStore.isLoginFormActive
            });
            var registerActiveClassName = (0, _classnames2.default)({
                active: userStore.isRegisterFormActive
            });
            return React.createElement("div", { className: "col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12" }, React.createElement("div", { className: "registration-login-form" }, React.createElement("ul", { className: "nav nav-tabs", role: "tablist" }, React.createElement("li", { className: "nav-item" }, React.createElement("a", { className: 'nav-link inline-items ' + loginActiveClassName, role: "tab", onClick: userStore.setLoginFormActive }, t('authentication.loginTab'))), React.createElement("li", { className: "nav-item" }, React.createElement("a", { className: 'nav-link inline-items ' + registerActiveClassName, role: "tab", onClick: userStore.setRegisterFormActive }, t('authentication.registerTab')))), React.createElement("div", { className: "tab-content" }, React.createElement("div", { className: 'tab-pane ' + loginActiveClassName }, React.createElement(_logIn.LogIn, null)), React.createElement("div", { className: 'tab-pane ' + registerActiveClassName }, React.createElement(_register.Register, null)))), React.createElement("style", { jsx: true }, _index.indexStyles));
        }
    }, {
        key: 'injectedProps',
        get: function get() {
            return this.props;
        }
    }]);

    return AuthenticationComponentCls;
}(React.Component);

var AuthenticationComponent = exports.AuthenticationComponent = (0, _decorators.comp)(AuthenticationComponentCls);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.indexStyles = undefined;

var _index = __webpack_require__(3);

var indexStyles = exports.indexStyles = ['.registration-login-form{border:1px solid ' + _index.colors['border-color'] + ';border-radius:0 5px 5px 0;background-color:' + _index.colors['white-color'] + ';overflow:hidden;position:relative;margin-bottom:20px;min-height:700px;}', '.registration-login-form .nav-tabs{height:100%;border:none;}', '.registration-login-form .nav-item{margin-bottom:0;height:50%;display:table;width:50%;}', '.registration-login-form .nav-link{border-radius:0;border:none;border-bottom:1px solid ' + _index.colors['border-color'] + ';border-right:1px solid ' + _index.colors['border-color'] + ';border-left:1px solid ' + _index.colors['border-color'] + ';padding:25px;color:#c0c4d8;fill:#c0c4d8;background-color:' + _index.colors['white-color'] + ';height:100%;display:table-cell;vertical-align:middle;}', '.registration-login-form .nav-link.active{fill:#fafbfd;background-color:#fafbfd;border-color:white;}', '.registration-login-form .nav-link svg{width:21px;height:21px;}', '.registration-login-form .tab-content{overflow:hidden;}', '@media (max-width:1023px){.registration-login-form{padding-left:0;}.registration-login-form .nav-tabs{bottom:auto;height:auto;width:100%;}.registration-login-form .nav-item{height:100%;display:block;width:50%;float:left;text-align:center;}.registration-login-form .nav-link{display:block;}.registration-login-form .nav-item:last-child .nav-link{border-bottom:1px solid #e6ecf5;}}'];
indexStyles.__hash = '921652278';
indexStyles.__scoped = ['.registration-login-form.jsx-1566712055{border:1px solid ' + _index.colors['border-color'] + ';border-radius:0 5px 5px 0;background-color:' + _index.colors['white-color'] + ';overflow:hidden;position:relative;margin-bottom:20px;min-height:700px;}', '.registration-login-form.jsx-1566712055 .nav-tabs.jsx-1566712055{height:100%;border:none;}', '.registration-login-form.jsx-1566712055 .nav-item.jsx-1566712055{margin-bottom:0;height:50%;display:table;width:50%;}', '.registration-login-form.jsx-1566712055 .nav-link.jsx-1566712055{border-radius:0;border:none;border-bottom:1px solid ' + _index.colors['border-color'] + ';border-right:1px solid ' + _index.colors['border-color'] + ';border-left:1px solid ' + _index.colors['border-color'] + ';padding:25px;color:#c0c4d8;fill:#c0c4d8;background-color:' + _index.colors['white-color'] + ';height:100%;display:table-cell;vertical-align:middle;}', '.registration-login-form.jsx-1566712055 .nav-link.active.jsx-1566712055{fill:#fafbfd;background-color:#fafbfd;border-color:white;}', '.registration-login-form.jsx-1566712055 .nav-link.jsx-1566712055 svg.jsx-1566712055{width:21px;height:21px;}', '.registration-login-form.jsx-1566712055 .tab-content.jsx-1566712055{overflow:hidden;}', '@media (max-width:1023px){.registration-login-form.jsx-1566712055{padding-left:0;}.registration-login-form.jsx-1566712055 .nav-tabs.jsx-1566712055{bottom:auto;height:auto;width:100%;}.registration-login-form.jsx-1566712055 .nav-item.jsx-1566712055{height:100%;display:block;width:50%;float:left;text-align:center;}.registration-login-form.jsx-1566712055 .nav-link.jsx-1566712055{display:block;}.registration-login-form.jsx-1566712055 .nav-item.jsx-1566712055:last-child .nav-link.jsx-1566712055{border-bottom:1px solid #e6ecf5;}}'];
indexStyles.__scopedHash = '1566712055';

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LogIn = undefined;

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _decorators = __webpack_require__(2);

var _elements = __webpack_require__(7);

var _login = __webpack_require__(75);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogIn = exports.LogIn = (0, _decorators.comp)(function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
        var _this2 = this;

        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));

        _this.onSingIn = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var appStore, userStore;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            appStore = _this.injectedProps.appStore;
                            userStore = appStore.userStore;
                            _context.next = 4;
                            return userStore.signInEmail();

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));
        _this.onFacebookSignIn = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var appStore, userStore;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            appStore = _this.injectedProps.appStore;
                            userStore = appStore.userStore;
                            _context2.next = 4;
                            return userStore.signInFacebook();

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }));
        _this.onTwitterSignIn = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            var appStore, userStore;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            appStore = _this.injectedProps.appStore;
                            userStore = appStore.userStore;
                            _context3.next = 4;
                            return userStore.signInTwitter();

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this2);
        }));
        return _this;
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            var _injectedProps = this.injectedProps,
                t = _injectedProps.t,
                appStore = _injectedProps.appStore;
            var userStore = appStore.userStore;

            var formStore = userStore.loginForm;
            return React.createElement("div", null, React.createElement("div", { className: "title h6" }, ' ', t('authentication.loginTitle')), React.createElement("form", { className: "content" }, React.createElement("div", { className: "row" }, React.createElement("div", { className: "col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12" }, React.createElement("p", null, userStore.errorMessage), React.createElement(_elements.FloatingInput, Object.assign({}, formStore.$('email').bind({
                type: 'email',
                label: t('authentication.mailInputLabel')
            }))), React.createElement("p", null, formStore.$('email').error), React.createElement(_elements.FloatingInput, Object.assign({}, formStore.$('password').bind({
                type: 'password',
                label: t('authentication.passwordInputLabel')
            }))), React.createElement("p", null, formStore.$('password').error), React.createElement("div", { className: "remember" }, React.createElement(_elements.Checkbox, { name: 'optionsCheckboxes', label: t('authentication.rememberMe') }), React.createElement("a", { href: "#", className: "forgot" }, t('authentication.forgotPasswordLabel'))), React.createElement(_elements.Button, { className: "btn btn-lg btn-primary full-width", onClick: this.onSingIn }, t('authentication.loginButton')), React.createElement("div", { className: "or" }), React.createElement(_elements.Button, { className: "btn btn-lg bg-facebook full-width btn-icon-left", onClick: this.onFacebookSignIn }, React.createElement("i", { className: "fab fa-facebook-f", "aria-hidden": "true" }), t('authentication.loginFacebookButton')), React.createElement(_elements.Button, { className: "btn btn-lg bg-twitter full-width btn-icon-left", onClick: this.onTwitterSignIn }, React.createElement("i", { className: "fab fa-twitter", "aria-hidden": "true" }), ' ', t('authentication.loginTwitterButton')), React.createElement("p", null, t('authentication.noAccountText'), ' ', React.createElement("a", { href: "#", onClick: userStore.setRegisterFormActive }, t('authentication.registerNowText')), ' ', t('authentication.createAccountCall'))))), React.createElement("style", { jsx: true }, _login.loginStyles));
        }
    }, {
        key: 'injectedProps',
        get: function get() {
            return this.props;
        }
    }]);

    return _class;
}(React.Component));

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginStyles = undefined;

var _index = __webpack_require__(3);

var loginStyles = exports.loginStyles = ['.content{padding:35px 25px;}', '.title{padding:25px;margin-bottom:0;}', '.remember{margin-bottom:1rem;}', '.remember a{line-height:2;}', '.remember .forgot{float:right;color:' + _index.colors['body-font-color'] + ';}', '.or{position:relative;width:100%;height:1px;margin:1rem 0 2rem 0;background-color:' + _index.colors['border-color'] + ';}', '.or:after{content:\'OR\';display:block;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:' + _index.colors['white-color'] + ';padding:0 25px;font-size:10px;z-index:5;}', 'p{margin-bottom:0;font-size:13px;}'];
loginStyles.__hash = '1079649816';
loginStyles.__scoped = ['.content.jsx-2767088281{padding:35px 25px;}', '.title.jsx-2767088281{padding:25px;margin-bottom:0;}', '.remember.jsx-2767088281{margin-bottom:1rem;}', '.remember.jsx-2767088281 a.jsx-2767088281{line-height:2;}', '.remember.jsx-2767088281 .forgot.jsx-2767088281{float:right;color:' + _index.colors['body-font-color'] + ';}', '.or.jsx-2767088281{position:relative;width:100%;height:1px;margin:1rem 0 2rem 0;background-color:' + _index.colors['border-color'] + ';}', '.or.jsx-2767088281:after{content:\'OR\';display:block;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:' + _index.colors['white-color'] + ';padding:0 25px;font-size:10px;z-index:5;}', 'p.jsx-2767088281{margin-bottom:0;font-size:13px;}'];
loginStyles.__scopedHash = '2767088281';

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Register = undefined;

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _decorators = __webpack_require__(2);

var _elements = __webpack_require__(7);

var _register = __webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = exports.Register = (0, _decorators.comp)(function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
        var _this2 = this;

        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));

        _this.onCompleteRegistration = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var appStore, userStore;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            appStore = _this.injectedProps.appStore;
                            userStore = appStore.userStore;
                            _context.next = 4;
                            return userStore.createUser();

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));
        return _this;
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            var _injectedProps = this.injectedProps,
                appStore = _injectedProps.appStore,
                t = _injectedProps.t;

            var userStore = appStore.userStore;
            var formStore = userStore.registerForm;
            return _react2.default.createElement("div", null, _react2.default.createElement("div", { className: "title h6" }, t('authentication.registerTitle')), _react2.default.createElement("form", { className: "content" }, _react2.default.createElement("div", { className: "row" }, _react2.default.createElement("div", { className: "col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12" }, _react2.default.createElement(_elements.FloatingInput, Object.assign({}, formStore.$('firstName').bind({
                label: t('authentication.firstNameInputLabel')
            })))), _react2.default.createElement("div", { className: "col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12" }, _react2.default.createElement(_elements.FloatingInput, Object.assign({}, formStore.$('lastName').bind({
                label: t('authentication.lastNameInputLabel')
            })))), _react2.default.createElement("div", { className: "col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12" }, _react2.default.createElement(_elements.FloatingInput, Object.assign({}, formStore.$('email').bind({
                type: 'email',
                label: t('authentication.mailInputLabel')
            }))), _react2.default.createElement(_elements.FloatingInput, Object.assign({}, formStore.$('password').bind({
                type: 'password',
                label: t('authentication.passwordInputLabel')
            }))), _react2.default.createElement("div", { className: "remember" }, _react2.default.createElement(_elements.Checkbox, { name: 'optionsCheckboxes', label: t('authentication.termsAndConditionsText') })), _react2.default.createElement(_elements.Button, { className: "btn btn-purple btn-lg full-width", onClick: this.onCompleteRegistration }, t('authentication.registerButtonText'))))), _react2.default.createElement("style", { jsx: true }, _register.registerStyles));
        }
    }, {
        key: 'injectedProps',
        get: function get() {
            return this.props;
        }
    }]);

    return _class;
}(_react2.default.Component));

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var registerStyles = exports.registerStyles = ['.content{padding:35px 25px;}', '.title{padding:25px;margin-bottom:0;}', '.remember{margin-bottom:1rem;}', '.remember a{line-height:2;}'];
registerStyles.__hash = '3213036632';
registerStyles.__scoped = ['.content.jsx-3140536793{padding:35px 25px;}', '.title.jsx-3140536793{padding:25px;margin-bottom:0;}', '.remember.jsx-3140536793{margin-bottom:1rem;}', '.remember.jsx-3140536793 a.jsx-3140536793{line-height:2;}'];
registerStyles.__scopedHash = '3140536793';

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.indexStyles = undefined;

var _index = __webpack_require__(3);

var indexStyles = exports.indexStyles = ['.landing-page{position:relative;min-height:100vh;}', '.landing-page .content-bg-wrap{background:url("public/assets/img/landing-users.png") repeat 0 0;-webkit-animation:sidedownscroll 30s linear infinite;animation:sidedownscroll 30s linear infinite;}', '.landing-page .content-bg-wrap:before{content:\'\';display:block;position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(255,94,58,0.95);opacity:1;z-index:auto;}', '@-webkit-keyframes sidedownscroll{0%{background-position:0 0;}100%{background-position:-2000px 2000px;}}', '@keyframes sidedownscroll{0%{background-position:0 0;}100%{background-position:-2000px 2000px;}}', '.landing-page .header-spacer--standard{margin-bottom:138px;}', '.content-bg-wrap{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;text-align:center;box-sizing:border-box;-webkit-animation:slide 50s linear infinite;animation:slide 50s linear infinite;will-change:background-position;background-size:contain;}', '.header-spacer--standard{height:10px;}', '.display-flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.display-flex.content-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', '.display-flex.content-around{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}', '.landing-content{color:' + _index.colors['white-color'] + ';margin-bottom:30px;}', '.landing-content>*:first-child{font-weight:300;}', '.landing-content>*:last-child{margin-bottom:0;}', '.landing-content>*{color:inherit;margin-bottom:45px;}'];
indexStyles.__hash = '136186677';
indexStyles.__scoped = ['.landing-page.jsx-797515636{position:relative;min-height:100vh;}', '.landing-page.jsx-797515636 .content-bg-wrap.jsx-797515636{background:url("public/assets/img/landing-users.png") repeat 0 0;-webkit-animation:sidedownscroll-jsx-797515636 30s linear infinite;animation:sidedownscroll-jsx-797515636 30s linear infinite;}', '.landing-page.jsx-797515636 .content-bg-wrap.jsx-797515636:before{content:\'\';display:block;position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(255,94,58,0.95);opacity:1;z-index:auto;}', '@-webkit-keyframes sidedownscroll-jsx-797515636{0%{background-position:0 0;}100%{background-position:-2000px 2000px;}}', '@keyframes sidedownscroll-jsx-797515636{0%{background-position:0 0;}100%{background-position:-2000px 2000px;}}', '.landing-page.jsx-797515636 .header-spacer--standard.jsx-797515636{margin-bottom:138px;}', '.content-bg-wrap.jsx-797515636{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;text-align:center;box-sizing:border-box;-webkit-animation:slide-jsx-797515636 50s linear infinite;animation:slide-jsx-797515636 50s linear infinite;will-change:background-position;background-size:contain;}', '.header-spacer--standard.jsx-797515636{height:10px;}', '.display-flex.jsx-797515636{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.display-flex.content-center.jsx-797515636{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', '.display-flex.content-around.jsx-797515636{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}', '.landing-content.jsx-797515636{color:' + _index.colors['white-color'] + ';margin-bottom:30px;}', '.landing-content.jsx-797515636>*.jsx-797515636:first-child{font-weight:300;}', '.landing-content.jsx-797515636>*.jsx-797515636:last-child{margin-bottom:0;}', '.landing-content.jsx-797515636>*.jsx-797515636{color:inherit;margin-bottom:45px;}'];
indexStyles.__scopedHash = '797515636';

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.1582cdcf.js.map