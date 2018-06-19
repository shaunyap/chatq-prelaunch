module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AnnouncementBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = "/Users/shaunyap/Documents/chatq/components/AnnouncementBar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var AnnouncementBar =
/*#__PURE__*/
function (_Component) {
  _inherits(AnnouncementBar, _Component);

  function AnnouncementBar() {
    _classCallCheck(this, AnnouncementBar);

    return _possibleConstructorReturn(this, (AnnouncementBar.__proto__ || Object.getPrototypeOf(AnnouncementBar)).apply(this, arguments));
  }

  _createClass(AnnouncementBar, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "announcement-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.number), " ", this.props.text)))));
    }
  }]);

  return AnnouncementBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (AnnouncementBar);

/***/ }),

/***/ "./components/Benefits.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = "/Users/shaunyap/Documents/chatq/components/Benefits.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Why ChatQ?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
    stackable: true,
    columns: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "flex-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
    src: "/static/icon_code_2.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Find inspiration for trades with our expert opinions and analyses")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "flex-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
    src: "/static/icon_code_2.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Harness the community's intelligence with aggregated market sentiment")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "flex-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
    src: "/static/icon_code_2.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Boost your investing skills with tools like bots and tournaments")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "flex-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
    src: "/static/icon_code_2.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "Get linked to your prefered broker when you're ready to take action")))))))));
});

/***/ }),

/***/ "./components/BetaForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
var _jsxFileName = "/Users/shaunyap/Documents/chatq/components/BetaForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var referralCode;

var BetaForm =
/*#__PURE__*/
function (_Component) {
  _inherits(BetaForm, _Component);

  function BetaForm() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, BetaForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = BetaForm.__proto__ || Object.getPrototypeOf(BetaForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        fname: '',
        email: '',
        loading: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        event.preventDefault();

        _this.setState({
          loading: true
        });

        var vl_header = {
          headers: {
            "Content-Type": "application/json"
          }
        };
        var vl_user = {
          "params": {
            "event": "registration",
            "user": {
              "firstname": _this.state.fname,
              "email": _this.state.email,
              "lanuage": "EN"
            },
            "referrer": {
              "referralCode": "",
              "email": ""
            },
            "refSource": ""
          },
          "apiToken": _this.props.config.viralLoopAPI
        };
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post("https://app.viral-loops.com/api/v2/events", vl_user, vl_header).then(function (res) {
          referralCode = res.data.referralCode;
        }).then(function () {
          _this.setState({
            loading: false
          });

          __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push({
            pathname: '/ThankYou',
            query: {
              referralCode: referralCode
            }
          });
        });
      }
    }), _temp));
  }

  _createClass(BetaForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Form"], {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Form"].Input, {
        fluid: true,
        placeholder: "First name",
        value: this.state.fname,
        onChange: function onChange(event) {
          return _this2.setState({
            fname: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Form"].Input, {
        fluid: true,
        placeholder: "Email",
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.setState({
            email: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Form"].Button, {
        color: "orange",
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "Invite me!"));
    }
  }]);

  return BetaForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (BetaForm);

/***/ }),

/***/ "./components/BetaInvite.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_BetaForm__ = __webpack_require__("./components/BetaForm.js");
var _jsxFileName = "/Users/shaunyap/Documents/chatq/components/BetaInvite.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var BetaInvite =
/*#__PURE__*/
function (_Component) {
  _inherits(BetaInvite, _Component);

  function BetaInvite() {
    _classCallCheck(this, BetaInvite);

    return _possibleConstructorReturn(this, (BetaInvite.__proto__ || Object.getPrototypeOf(BetaInvite)).apply(this, arguments));
  }

  _createClass(BetaInvite, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "beta-invite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Get your beta invite now!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_BetaForm__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })))));
    }
  }]);

  return BetaInvite;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (BetaInvite);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = "/Users/shaunyap/Documents/chatq/components/Header.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"], {
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
    src: "http://www.chatq.sg/static/assets/images/chatq-logo-desktop.be8da9905007.svg",
    size: "small",
    wrapped: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], {
    content: "Request Invite!",
    color: "orange",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })))));
});

/***/ }),

/***/ "./components/Hero.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BetaForm__ = __webpack_require__("./components/BetaForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AnnouncementBar__ = __webpack_require__("./components/AnnouncementBar.js");
var _jsxFileName = "/Users/shaunyap/Documents/chatq/components/Hero.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Hero =
/*#__PURE__*/
function (_Component) {
  _inherits(Hero, _Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
        className: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "The social chat app for retail investors"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "Powered by smart bots and market sentiment."))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        mobile: 16,
        computer: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Be The First In The Q!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Join our beta waitlist. 1,000 users only."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "Request a beta invite and get:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "1 free month of premium access to the ChatQ app"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "First In The Q Profile Badge"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "1 more free month for every successful referral"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        mobile: 16,
        computer: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Request an invite now"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__BetaForm__["a" /* default */], {
        config: this.props.config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "15 days to launch!")))))));
    }
  }]);

  return Hero;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Hero);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "/Users/shaunyap/Documents/chatq/components/Layout.js";



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','GTM-TWKJDVV');"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/styles/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("noscript", {
    dangerouslySetInnerHTML: {
      __html: "<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-TWKJDVV\"\n          height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("noscript", {
    dangerouslySetInnerHTML: {
      __html: "!function(){var a=window.VL=window.VL||{};return a.instances=a.instances||{},a.invoked?void(window.console&&console.error&&console.error(\"VL snippet loaded twice.\")):(a.invoked=!0,void(a.load=function(b,c,d){var e={};e.publicToken=b,e.config=c||{};var f=document.createElement(\"script\");f.type=\"text/javascript\",f.id=\"vrlps-js\",f.defer=!0,f.src=\"https://app.viral-loops.com/client/vl/vl.min.js\";var g=document.getElementsByTagName(\"script\")[0];return g.parentNode.insertBefore(f,g),f.onload=function(){a.setup(e),a.instances[b]=e},e.identify=e.identify||function(a,b){e.afterLoad={identify:{userData:a,cb:b}}},e.pendingEvents=[],e.track=e.track||function(a,b){e.pendingEvents.push({event:a,cb:b})},e.pendingHooks=[],e.addHook=e.addHook||function(a,b){e.pendingHooks.push({name:a,cb:b})},e.$=e.$||function(a){e.pendingHooks.push({name:\"ready\",cb:a})},e}))}();var campaign=VL.load(\"HG9f16TqqlUGF-HwwMMoIRoVQIY\",{autoLoadWidgets:!0});"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }));
});

/***/ }),

/***/ "./components/MediaFeatures.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = "/Users/shaunyap/Documents/chatq/components/MediaFeatures.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MediaFeatures =
/*#__PURE__*/
function (_Component) {
  _inherits(MediaFeatures, _Component);

  function MediaFeatures() {
    _classCallCheck(this, MediaFeatures);

    return _possibleConstructorReturn(this, (MediaFeatures.__proto__ || Object.getPrototypeOf(MediaFeatures)).apply(this, arguments));
  }

  _createClass(MediaFeatures, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
        className: "media-feature",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, "As Featured In"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
        stackable: true,
        columns: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        src: "http://via.placeholder.com/150x100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        src: "http://via.placeholder.com/150x100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        src: "http://via.placeholder.com/150x100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        src: "http://via.placeholder.com/150x100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })))))))));
    }
  }]);

  return MediaFeatures;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MediaFeatures);

/***/ }),

/***/ "./components/QreditPromo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = "/Users/shaunyap/Documents/chatq/components/QreditPromo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var QreditPromo =
/*#__PURE__*/
function (_Component) {
  _inherits(QreditPromo, _Component);

  function QreditPromo() {
    _classCallCheck(this, QreditPromo);

    return _possibleConstructorReturn(this, (QreditPromo.__proto__ || Object.getPrototypeOf(QreditPromo)).apply(this, arguments));
  }

  _createClass(QreditPromo, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "qredit-promo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Get ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "500"), " Qredits with your beta invite"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, " and 1000 more with every friend you refer!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
        stackable: true,
        columns: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Image"], {
        src: "http://via.placeholder.com/450x350",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "What are Qredits?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Users gain Qredits for their activity on the ChatQ platform"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Qredits give access to premium features like entry into closed groups and expert discussions"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "Start earning Qredits even before the launch with First in the Q, our exclusive referral program for traders in beta."))))))))));
    }
  }]);

  return QreditPromo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (QreditPromo);

/***/ }),

/***/ "./config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  viralLoopAPI: 'Q-hkjofB2TXG0gQDRfW74bwaX6Y',
  mailchimp_members_endpoint: 'https://us17.api.mailchimp.com/3.0/lists/',
  mailchimp_list_id: '8121b9cd3a',
  mailchimp_api: "1909b3ee1e81d033727336e21e11b82f-us17"
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hero__ = __webpack_require__("./components/Hero.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Benefits__ = __webpack_require__("./components/Benefits.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_AnnouncementBar__ = __webpack_require__("./components/AnnouncementBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_QreditPromo__ = __webpack_require__("./components/QreditPromo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_BetaInvite__ = __webpack_require__("./components/BetaInvite.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_MediaFeatures__ = __webpack_require__("./components/MediaFeatures.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config__ = __webpack_require__("./config.js");
var _jsxFileName = "/Users/shaunyap/Documents/chatq/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Prelaunch =
/*#__PURE__*/
function (_Component) {
  _inherits(Prelaunch, _Component);

  function Prelaunch() {
    _classCallCheck(this, Prelaunch);

    return _possibleConstructorReturn(this, (Prelaunch.__proto__ || Object.getPrototypeOf(Prelaunch)).apply(this, arguments));
  }

  _createClass(Prelaunch, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Hero__["a" /* default */], {
        config: __WEBPACK_IMPORTED_MODULE_9__config__["a" /* default */],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_AnnouncementBar__["a" /* default */], {
        number: "2,037",
        text: "traders are on the beta waitlist!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_MediaFeatures__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Benefits__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_QreditPromo__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_BetaInvite__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }));
    }
  }]);

  return Prelaunch;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Prelaunch);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map