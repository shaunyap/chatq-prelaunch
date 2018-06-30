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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  viralLoopAPI: 'Q-hkjofB2TXG0gQDRfW74bwaX6Y',
  mailchimp_members_endpoint: 'https://us17.api.mailchimp.com/3.0/lists/',
  mailchimp_list_id: '8121b9cd3a',
  mailchimp_api: "1909b3ee1e81d033727336e21e11b82f-us17"
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BetaFeatures =
/*#__PURE__*/
function (_Component) {
  _inherits(BetaFeatures, _Component);

  function BetaFeatures() {
    _classCallCheck(this, BetaFeatures);

    return _possibleConstructorReturn(this, (BetaFeatures.__proto__ || Object.getPrototypeOf(BetaFeatures)).apply(this, arguments));
  }

  _createClass(BetaFeatures, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Request a beta invite and get:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        className: "no-padding"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 3
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: this.props.img_a
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 7
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-middle"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, this.props.copy_a)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        className: "no-padding"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 3
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: this.props.img_b
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 7
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-middle"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, this.props.copy_b)))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row, {
        className: "no-padding"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 3
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: this.props.img_c
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 7
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-middle"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, this.props.copy_c))))));
    }
  }]);

  return BetaFeatures;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (BetaFeatures);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ReferralCell =
/*#__PURE__*/
function (_Component) {
  _inherits(ReferralCell, _Component);

  function ReferralCell() {
    _classCallCheck(this, ReferralCell);

    return _possibleConstructorReturn(this, (ReferralCell.__proto__ || Object.getPrototypeOf(ReferralCell)).apply(this, arguments));
  }

  _createClass(ReferralCell, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        className: "mobile__fullWidth"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "flex-center"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: this.props.img
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-center referral--grid--copy"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "bold"
      }, this.props.header), this.props.header ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null) : '', this.props.copy));
    }
  }]);

  return ReferralCell;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ReferralCell);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(1);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// CONCATENATED MODULE: ./components/Header.js


/* harmony default export */ var Header = (function () {
  return external__react__default.a.createElement(external__semantic_ui_react_["Container"], null, external__react__default.a.createElement(external__semantic_ui_react_["Menu"], {
    secondary: true
  }, external__react__default.a.createElement(external__semantic_ui_react_["Menu"].Item, null, external__react__default.a.createElement(external__semantic_ui_react_["Image"], {
    src: "http://www.chatq.sg/static/assets/images/chatq-logo-desktop.be8da9905007.svg",
    size: "small",
    wrapped: true
  }))));
});
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(8);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Layout.js



/* harmony default export */ var Layout = __webpack_exports__["a"] = (function (props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','GTM-TWKJDVV');"
    }
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/styles/style.css"
  }), external__react__default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Lato",
    rel: "stylesheet"
  })), external__react__default.a.createElement("noscript", {
    dangerouslySetInnerHTML: {
      __html: "<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-TWKJDVV\"\n          height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>"
    }
  }), external__react__default.a.createElement(Header, null), props.children, external__react__default.a.createElement("footer", {
    className: "text-center"
  }, "Copyright ChatQ Pte Ltd 2018. ", external__react__default.a.createElement("a", {
    href: "https://chatq.sg"
  }, "Terms and Conditions"), " | ", external__react__default.a.createElement("a", {
    href: "https://chatq.sg"
  }, "Privacy Policy")), external__react__default.a.createElement("noscript", {
    dangerouslySetInnerHTML: {
      __html: "!function(){var a=window.VL=window.VL||{};return a.instances=a.instances||{},a.invoked?void(window.console&&console.error&&console.error(\"VL snippet loaded twice.\")):(a.invoked=!0,void(a.load=function(b,c,d){var e={};e.publicToken=b,e.config=c||{};var f=document.createElement(\"script\");f.type=\"text/javascript\",f.id=\"vrlps-js\",f.defer=!0,f.src=\"https://app.viral-loops.com/client/vl/vl.min.js\";var g=document.getElementsByTagName(\"script\")[0];return g.parentNode.insertBefore(f,g),f.onload=function(){a.setup(e),a.instances[b]=e},e.identify=e.identify||function(a,b){e.afterLoad={identify:{userData:a,cb:b}}},e.pendingEvents=[],e.track=e.track||function(a,b){e.pendingEvents.push({event:a,cb:b})},e.pendingHooks=[],e.addHook=e.addHook||function(a,b){e.pendingHooks.push({name:a,cb:b})},e.$=e.$||function(a){e.pendingHooks.push({name:\"ready\",cb:a})},e}))}();var campaign=VL.load(\"HG9f16TqqlUGF-HwwMMoIRoVQIY\",{autoLoadWidgets:!0});"
    }
  }));
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(10)();

routes.add('/ThankYou/:referralCode', '/ThankYou');
module.exports = routes;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var countDownDate = new Date("Aug 1, 2018").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
/* harmony default export */ __webpack_exports__["a"] = (days);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Remember =
/*#__PURE__*/
function (_Component) {
  _inherits(Remember, _Component);

  function Remember() {
    _classCallCheck(this, Remember);

    return _possibleConstructorReturn(this, (Remember.__proto__ || Object.getPrototypeOf(Remember)).apply(this, arguments));
  }

  _createClass(Remember, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "remember section__bmargin"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
        centered: true,
        columns: 3
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        className: "mobile__fullWidth"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "text-center"
      }, "Remember that"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], {
        padded: "vertically",
        centered: true,
        columns: 3
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 2
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", null, "1")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 14
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "You can get up to 6 months of free premium access on ChatQ when you successfully refer a maximum of 5 friends.")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 2
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", null, "2")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 14
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Beta users are capped at 1000! So download the app as soon as it launches. Didn't make the first 1000? We'll notify you when the full version is out")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 2
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", null, "3")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column, {
        width: 14
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Android users can sign up here for updates on ChatQ's Android OS launch. Our current release goal is 4Q2018."))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#"
      }, "See full terms and conditions."))));
    }
  }]);

  return Remember;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Remember);

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports = require("nuka-carousel");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(7);

// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(1);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(2);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(9);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// CONCATENATED MODULE: ./components/BetaForm.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var BetaForm_referralCode;

var BetaForm_BetaForm =
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
            "Access-Control-Allow-Origin": '*',
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
              "referralCode": _this.props.referrerCode,
              "email": ""
            },
            "refSource": ""
          },
          "apiToken": _this.props.config.viralLoopAPI
        };
        external__axios__default.a.post("https://app.viral-loops.com/api/v2/events", vl_user, vl_header).then(function (res) {
          BetaForm_referralCode = res.data.referralCode;
        }).then(function () {
          _this.setState({
            loading: false
          });

          routes["Router"].pushRoute("/ThankYou/".concat(BetaForm_referralCode));
        });
      }
    }), _temp));
  }

  _createClass(BetaForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement("div", {
        className: "flex-center"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Form"], {
        id: "hero--form",
        onSubmit: this.onSubmit
      }, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Input, {
        fluid: true,
        placeholder: "First name",
        value: this.state.fname,
        onChange: function onChange(event) {
          return _this2.setState({
            fname: event.target.value
          });
        }
      }), external__react__default.a.createElement(external__semantic_ui_react_["Form"].Input, {
        fluid: true,
        placeholder: "Email",
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.setState({
            email: event.target.value
          });
        }
      }), external__react__default.a.createElement("div", {
        className: "flex-center"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Button"], {
        className: "button--primary-gradient",
        loading: this.state.loading
      }, "Invite me!"))));
    }
  }]);

  return BetaForm;
}(external__react_["Component"]);

/* harmony default export */ var components_BetaForm = (BetaForm_BetaForm);
// EXTERNAL MODULE: ./components/BetaFeatures.js
var BetaFeatures = __webpack_require__(4);

// EXTERNAL MODULE: ./functions/days.js
var days = __webpack_require__(11);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(3);

// CONCATENATED MODULE: ./components/HeroGrid.js
function HeroGrid__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HeroGrid__typeof = function _typeof(obj) { return typeof obj; }; } else { HeroGrid__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HeroGrid__typeof(obj); }

function HeroGrid__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HeroGrid__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HeroGrid__createClass(Constructor, protoProps, staticProps) { if (protoProps) HeroGrid__defineProperties(Constructor.prototype, protoProps); if (staticProps) HeroGrid__defineProperties(Constructor, staticProps); return Constructor; }

function HeroGrid__possibleConstructorReturn(self, call) { if (call && (HeroGrid__typeof(call) === "object" || typeof call === "function")) { return call; } return HeroGrid__assertThisInitialized(self); }

function HeroGrid__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function HeroGrid__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var HeroGrid_HeroGrid =
/*#__PURE__*/
function (_Component) {
  HeroGrid__inherits(HeroGrid, _Component);

  function HeroGrid() {
    HeroGrid__classCallCheck(this, HeroGrid);

    return HeroGrid__possibleConstructorReturn(this, (HeroGrid.__proto__ || Object.getPrototypeOf(HeroGrid)).apply(this, arguments));
  }

  HeroGrid__createClass(HeroGrid, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "hero--grid"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Container"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, {
        mobile: 16,
        computer: 8
      }, external__react__default.a.createElement("div", {
        className: "flex-middle"
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("h2", null, "Be The First In The Q"), external__react__default.a.createElement(BetaFeatures["a" /* default */], {
        header: "Request a beta invite and get",
        img_a: "./static/img/chaQ-lp-V2-02.png",
        img_b: "./static/img/chaQ-lp-V2-03.png",
        img_c: "./static/img/chaQ-lp-V2-04.png",
        copy_a: "1 free month of premium access to the ChatQ app",
        copy_b: "First In The Q Profile Badge",
        copy_c: "1 more free month for every successful referral"
      })))), external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, {
        mobile: 16,
        computer: 6
      }, external__react__default.a.createElement(external__semantic_ui_react_["Card"], {
        className: "card--elevate3"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement("h4", {
        className: "text-center no-margin"
      }, "Join our beta waitlist"), external__react__default.a.createElement("p", {
        className: "text-center"
      }, "1,000 users, Apple iOS only"), external__react__default.a.createElement(components_BetaForm, {
        config: config["a" /* default */],
        referrerCode: this.props.referrerCode
      }), external__react__default.a.createElement("h5", {
        id: "countdown",
        className: "text-center"
      }, days["a" /* default */], " days until launch!"))))))));
    }
  }]);

  return HeroGrid;
}(external__react_["Component"]);

/* harmony default export */ var components_HeroGrid = (HeroGrid_HeroGrid);
// CONCATENATED MODULE: ./components/AnnouncementBar.js
function AnnouncementBar__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AnnouncementBar__typeof = function _typeof(obj) { return typeof obj; }; } else { AnnouncementBar__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AnnouncementBar__typeof(obj); }

function AnnouncementBar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AnnouncementBar__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AnnouncementBar__createClass(Constructor, protoProps, staticProps) { if (protoProps) AnnouncementBar__defineProperties(Constructor.prototype, protoProps); if (staticProps) AnnouncementBar__defineProperties(Constructor, staticProps); return Constructor; }

function AnnouncementBar__possibleConstructorReturn(self, call) { if (call && (AnnouncementBar__typeof(call) === "object" || typeof call === "function")) { return call; } return AnnouncementBar__assertThisInitialized(self); }

function AnnouncementBar__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AnnouncementBar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var AnnouncementBar_AnnouncementBar =
/*#__PURE__*/
function (_Component) {
  AnnouncementBar__inherits(AnnouncementBar, _Component);

  function AnnouncementBar() {
    AnnouncementBar__classCallCheck(this, AnnouncementBar);

    return AnnouncementBar__possibleConstructorReturn(this, (AnnouncementBar.__proto__ || Object.getPrototypeOf(AnnouncementBar)).apply(this, arguments));
  }

  AnnouncementBar__createClass(AnnouncementBar, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__semantic_ui_react_["Grid"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("div", {
        className: "announcement-bar"
      }, external__react__default.a.createElement("h4", {
        className: "text-center"
      }, external__react__default.a.createElement("span", null, this.props.number), " ", this.props.text)))));
    }
  }]);

  return AnnouncementBar;
}(external__react_["Component"]);

/* harmony default export */ var components_AnnouncementBar = (AnnouncementBar_AnnouncementBar);
// CONCATENATED MODULE: ./components/Hero.js
function Hero__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Hero__typeof = function _typeof(obj) { return typeof obj; }; } else { Hero__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Hero__typeof(obj); }

function Hero__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Hero__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Hero__createClass(Constructor, protoProps, staticProps) { if (protoProps) Hero__defineProperties(Constructor.prototype, protoProps); if (staticProps) Hero__defineProperties(Constructor, staticProps); return Constructor; }

function Hero__possibleConstructorReturn(self, call) { if (call && (Hero__typeof(call) === "object" || typeof call === "function")) { return call; } return Hero__assertThisInitialized(self); }

function Hero__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Hero__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Hero_Hero =
/*#__PURE__*/
function (_Component) {
  Hero__inherits(Hero, _Component);

  function Hero() {
    Hero__classCallCheck(this, Hero);

    return Hero__possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).apply(this, arguments));
  }

  Hero__createClass(Hero, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "hero"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Grid"], {
        centered: true,
        columns: 2
      }, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("h1", {
        className: "text-center no-margin"
      }, "The ", external__react__default.a.createElement("span", {
        className: "text-primary"
      }, "social chat"), " app for retail investors"), external__react__default.a.createElement("h4", {
        className: "text-center text-copy"
      }, "Powered by smart bots and market sentiment")))), external__react__default.a.createElement(components_HeroGrid, {
        referrerCode: this.props.referrerCode
      }));
    }
  }]);

  return Hero;
}(external__react_["Component"]);

/* harmony default export */ var components_Hero = (Hero_Hero);
// EXTERNAL MODULE: external "nuka-carousel"
var external__nuka_carousel_ = __webpack_require__(15);
var external__nuka_carousel__default = /*#__PURE__*/__webpack_require__.n(external__nuka_carousel_);

// CONCATENATED MODULE: ./components/BenefitsImgLeft.js
function BenefitsImgLeft__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BenefitsImgLeft__typeof = function _typeof(obj) { return typeof obj; }; } else { BenefitsImgLeft__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BenefitsImgLeft__typeof(obj); }

function BenefitsImgLeft__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BenefitsImgLeft__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BenefitsImgLeft__createClass(Constructor, protoProps, staticProps) { if (protoProps) BenefitsImgLeft__defineProperties(Constructor.prototype, protoProps); if (staticProps) BenefitsImgLeft__defineProperties(Constructor, staticProps); return Constructor; }

function BenefitsImgLeft__possibleConstructorReturn(self, call) { if (call && (BenefitsImgLeft__typeof(call) === "object" || typeof call === "function")) { return call; } return BenefitsImgLeft__assertThisInitialized(self); }

function BenefitsImgLeft__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BenefitsImgLeft__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var BenefitsImgLeft_BenefitsImgLeft =
/*#__PURE__*/
function (_Component) {
  BenefitsImgLeft__inherits(BenefitsImgLeft, _Component);

  function BenefitsImgLeft() {
    BenefitsImgLeft__classCallCheck(this, BenefitsImgLeft);

    return BenefitsImgLeft__possibleConstructorReturn(this, (BenefitsImgLeft.__proto__ || Object.getPrototypeOf(BenefitsImgLeft)).apply(this, arguments));
  }

  BenefitsImgLeft__createClass(BenefitsImgLeft, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("div", {
        className: "flex-center iphoneBG"
      }, external__react__default.a.createElement(external__nuka_carousel__default.a, {
        autoplay: true,
        wrapAround: true,
        renderCenterRightControls: function renderCenterRightControls() {
          return;
        },
        renderCenterLeftControls: function renderCenterLeftControls() {
          return;
        }
      }, external__react__default.a.createElement("img", {
        src: this.props.imga
      }), external__react__default.a.createElement("img", {
        src: this.props.imgb
      })))), external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("div", {
        className: "flex-middle"
      }, external__react__default.a.createElement("div", {
        className: "text-lr-margin"
      }, external__react__default.a.createElement("h5", null, this.props.header), external__react__default.a.createElement("p", null, this.props.copy)))));
    }
  }]);

  return BenefitsImgLeft;
}(external__react_["Component"]);

/* harmony default export */ var components_BenefitsImgLeft = (BenefitsImgLeft_BenefitsImgLeft);
// CONCATENATED MODULE: ./components/BenefitsImgRight.js
function BenefitsImgRight__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BenefitsImgRight__typeof = function _typeof(obj) { return typeof obj; }; } else { BenefitsImgRight__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BenefitsImgRight__typeof(obj); }

function BenefitsImgRight__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BenefitsImgRight__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BenefitsImgRight__createClass(Constructor, protoProps, staticProps) { if (protoProps) BenefitsImgRight__defineProperties(Constructor.prototype, protoProps); if (staticProps) BenefitsImgRight__defineProperties(Constructor, staticProps); return Constructor; }

function BenefitsImgRight__possibleConstructorReturn(self, call) { if (call && (BenefitsImgRight__typeof(call) === "object" || typeof call === "function")) { return call; } return BenefitsImgRight__assertThisInitialized(self); }

function BenefitsImgRight__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BenefitsImgRight__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var BenefitsImgRight_BenefitsImgRight =
/*#__PURE__*/
function (_Component) {
  BenefitsImgRight__inherits(BenefitsImgRight, _Component);

  function BenefitsImgRight() {
    BenefitsImgRight__classCallCheck(this, BenefitsImgRight);

    return BenefitsImgRight__possibleConstructorReturn(this, (BenefitsImgRight.__proto__ || Object.getPrototypeOf(BenefitsImgRight)).apply(this, arguments));
  }

  BenefitsImgRight__createClass(BenefitsImgRight, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("div", {
        className: "flex-middle"
      }, external__react__default.a.createElement("div", {
        className: "text-lr-margin"
      }, external__react__default.a.createElement("h5", null, this.props.header), external__react__default.a.createElement("p", null, this.props.copy)))), external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("div", {
        className: "flex-center iphoneBG"
      }, external__react__default.a.createElement(external__nuka_carousel__default.a, {
        autoplay: true,
        wrapAround: true,
        renderCenterRightControls: function renderCenterRightControls() {
          return;
        },
        renderCenterLeftControls: function renderCenterLeftControls() {
          return;
        }
      }, external__react__default.a.createElement("img", {
        src: this.props.imga
      }), external__react__default.a.createElement("img", {
        src: this.props.imgb
      })))));
    }
  }]);

  return BenefitsImgRight;
}(external__react_["Component"]);

/* harmony default export */ var components_BenefitsImgRight = (BenefitsImgRight_BenefitsImgRight);
// CONCATENATED MODULE: ./components/Benefits.js
function Benefits__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Benefits__typeof = function _typeof(obj) { return typeof obj; }; } else { Benefits__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Benefits__typeof(obj); }

function Benefits__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Benefits__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Benefits__createClass(Constructor, protoProps, staticProps) { if (protoProps) Benefits__defineProperties(Constructor.prototype, protoProps); if (staticProps) Benefits__defineProperties(Constructor, staticProps); return Constructor; }

function Benefits__possibleConstructorReturn(self, call) { if (call && (Benefits__typeof(call) === "object" || typeof call === "function")) { return call; } return Benefits__assertThisInitialized(self); }

function Benefits__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Benefits__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Benefits_Benefits =
/*#__PURE__*/
function (_Component) {
  Benefits__inherits(Benefits, _Component);

  function Benefits() {
    Benefits__classCallCheck(this, Benefits);

    return Benefits__possibleConstructorReturn(this, (Benefits.__proto__ || Object.getPrototypeOf(Benefits)).apply(this, arguments));
  }

  Benefits__createClass(Benefits, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "benefits"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Container"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("div", null, external__react__default.a.createElement("h2", {
        className: "text-center"
      }, "Why ", external__react__default.a.createElement("span", {
        className: "text-primary"
      }, "ChatQ?")), external__react__default.a.createElement(external__semantic_ui_react_["Grid"], {
        stackable: true,
        centered: true,
        columns: 3
      }, external__react__default.a.createElement(components_BenefitsImgLeft, {
        imga: "../static/img/benefits/1customAlerts_01.png",
        imgb: "../static/img/benefits/1customAlerts_02.png",
        header: "Set custom alerts for market movements you care about",
        copy: "Choose from 10 smart, customizable bots. Receive personalized alerts based on market signals."
      }), external__react__default.a.createElement(components_BenefitsImgRight, {
        imga: "../static/img/benefits/2connect_01.png",
        imgb: "../static/img/benefits/2connect_02.png",
        header: "Connect with your trading heroes",
        copy: "Use direct chats to reach out to key market influencers and build your tribe."
      }), external__react__default.a.createElement(components_BenefitsImgLeft, {
        imga: "../static/img/benefits/3rewarded_01.png",
        imgb: "../static/img/benefits/3rewarded_02.png",
        header: "Share your opinions and get rewarded",
        copy: "Voice your sentiment through polling. Receive Qredits for your expertise, and use them to unlock features in the app."
      }))))))));
    }
  }]);

  return Benefits;
}(external__react_["Component"]);

/* harmony default export */ var components_Benefits = (Benefits_Benefits);
// CONCATENATED MODULE: ./components/QreditPromo.js
function QreditPromo__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { QreditPromo__typeof = function _typeof(obj) { return typeof obj; }; } else { QreditPromo__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return QreditPromo__typeof(obj); }

function QreditPromo__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function QreditPromo__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function QreditPromo__createClass(Constructor, protoProps, staticProps) { if (protoProps) QreditPromo__defineProperties(Constructor.prototype, protoProps); if (staticProps) QreditPromo__defineProperties(Constructor, staticProps); return Constructor; }

function QreditPromo__possibleConstructorReturn(self, call) { if (call && (QreditPromo__typeof(call) === "object" || typeof call === "function")) { return call; } return QreditPromo__assertThisInitialized(self); }

function QreditPromo__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function QreditPromo__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var QreditPromo_QreditPromo =
/*#__PURE__*/
function (_Component) {
  QreditPromo__inherits(QreditPromo, _Component);

  function QreditPromo() {
    QreditPromo__classCallCheck(this, QreditPromo);

    return QreditPromo__possibleConstructorReturn(this, (QreditPromo.__proto__ || Object.getPrototypeOf(QreditPromo)).apply(this, arguments));
  }

  QreditPromo__createClass(QreditPromo, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__semantic_ui_react_["Container"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("div", {
        className: "qredit-promo"
      }, external__react__default.a.createElement("h3", null, "Get ", external__react__default.a.createElement("span", {
        className: "bold"
      }, "500"), " Qredits with your beta invite"), external__react__default.a.createElement("h3", null, " and 1000 more with every friend you refer!"), external__react__default.a.createElement(external__semantic_ui_react_["Grid"], {
        stackable: true,
        columns: 2
      }, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement(external__semantic_ui_react_["Image"], {
        src: "http://via.placeholder.com/450x350"
      })), external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("h3", null, "What are Qredits?"), external__react__default.a.createElement("ul", null, external__react__default.a.createElement("li", null, "Users gain Qredits for their activity on the ChatQ platform"), external__react__default.a.createElement("li", null, "Qredits give access to premium features like entry into closed groups and expert discussions"), external__react__default.a.createElement("li", null, "Start earning Qredits even before the launch with First in the Q, our exclusive referral program for traders in beta."))))))))));
    }
  }]);

  return QreditPromo;
}(external__react_["Component"]);

/* harmony default export */ var components_QreditPromo = (QreditPromo_QreditPromo);
// CONCATENATED MODULE: ./components/BetaInvite.js
function BetaInvite__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BetaInvite__typeof = function _typeof(obj) { return typeof obj; }; } else { BetaInvite__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BetaInvite__typeof(obj); }

function BetaInvite__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BetaInvite__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BetaInvite__createClass(Constructor, protoProps, staticProps) { if (protoProps) BetaInvite__defineProperties(Constructor.prototype, protoProps); if (staticProps) BetaInvite__defineProperties(Constructor, staticProps); return Constructor; }

function BetaInvite__possibleConstructorReturn(self, call) { if (call && (BetaInvite__typeof(call) === "object" || typeof call === "function")) { return call; } return BetaInvite__assertThisInitialized(self); }

function BetaInvite__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BetaInvite__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var BetaInvite_BetaInvite =
/*#__PURE__*/
function (_Component) {
  BetaInvite__inherits(BetaInvite, _Component);

  function BetaInvite() {
    BetaInvite__classCallCheck(this, BetaInvite);

    return BetaInvite__possibleConstructorReturn(this, (BetaInvite.__proto__ || Object.getPrototypeOf(BetaInvite)).apply(this, arguments));
  }

  BetaInvite__createClass(BetaInvite, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(external__semantic_ui_react_["Grid"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("div", {
        className: "beta-invite"
      }, external__react__default.a.createElement("h2", null, "Get your beta invite now!"), external__react__default.a.createElement(components_BetaForm, null)))));
    }
  }]);

  return BetaInvite;
}(external__react_["Component"]);

/* harmony default export */ var components_BetaInvite = (BetaInvite_BetaInvite);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(12);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/BetaForm2.js
function BetaForm2__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BetaForm2__typeof = function _typeof(obj) { return typeof obj; }; } else { BetaForm2__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BetaForm2__typeof(obj); }

function BetaForm2__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BetaForm2__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BetaForm2__createClass(Constructor, protoProps, staticProps) { if (protoProps) BetaForm2__defineProperties(Constructor.prototype, protoProps); if (staticProps) BetaForm2__defineProperties(Constructor, staticProps); return Constructor; }

function BetaForm2__possibleConstructorReturn(self, call) { if (call && (BetaForm2__typeof(call) === "object" || typeof call === "function")) { return call; } return BetaForm2__assertThisInitialized(self); }

function BetaForm2__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function BetaForm2__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var BetaForm2_referralCode;

var BetaForm2_BetaForm2 =
/*#__PURE__*/
function (_Component) {
  BetaForm2__inherits(BetaForm2, _Component);

  function BetaForm2() {
    var _ref;

    var _temp, _this;

    BetaForm2__classCallCheck(this, BetaForm2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return BetaForm2__possibleConstructorReturn(_this, (_temp = _this = BetaForm2__possibleConstructorReturn(this, (_ref = BetaForm2.__proto__ || Object.getPrototypeOf(BetaForm2)).call.apply(_ref, [this].concat(args))), Object.defineProperty(BetaForm2__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        fname: '',
        email: '',
        loading: false
      }
    }), Object.defineProperty(BetaForm2__assertThisInitialized(_this), "onSubmit", {
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
        external__axios__default.a.post("https://app.viral-loops.com/api/v2/events", vl_user, vl_header).then(function (res) {
          BetaForm2_referralCode = res.data.referralCode;
        }).then(function () {
          _this.setState({
            loading: false
          });

          router__default.a.push({
            pathname: '/ThankYou',
            query: {
              referralCode: BetaForm2_referralCode
            }
          });
        });
      }
    }), _temp));
  }

  BetaForm2__createClass(BetaForm2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement(external__semantic_ui_react_["Form"], {
        className: "hero--form",
        onSubmit: this.onSubmit
      }, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Group, {
        widths: 3
      }, external__react__default.a.createElement(external__semantic_ui_react_["Form"].Input, {
        fluid: true,
        placeholder: "First name",
        value: this.state.fname,
        onChange: function onChange(event) {
          return _this2.setState({
            fname: event.target.value
          });
        }
      }), external__react__default.a.createElement(external__semantic_ui_react_["Form"].Input, {
        fluid: true,
        placeholder: "Email",
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.setState({
            email: event.target.value
          });
        }
      }), external__react__default.a.createElement("div", {
        className: "flex-center"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Button"], {
        className: "button--primary-gradient",
        loading: this.state.loading
      }, "Invite me"))));
    }
  }]);

  return BetaForm2;
}(external__react_["Component"]);

/* harmony default export */ var components_BetaForm2 = (BetaForm2_BetaForm2);
// CONCATENATED MODULE: ./components/FooterForm.js
function FooterForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { FooterForm__typeof = function _typeof(obj) { return typeof obj; }; } else { FooterForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return FooterForm__typeof(obj); }

function FooterForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FooterForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FooterForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) FooterForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) FooterForm__defineProperties(Constructor, staticProps); return Constructor; }

function FooterForm__possibleConstructorReturn(self, call) { if (call && (FooterForm__typeof(call) === "object" || typeof call === "function")) { return call; } return FooterForm__assertThisInitialized(self); }

function FooterForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function FooterForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var FooterForm_FooterForm =
/*#__PURE__*/
function (_Component) {
  FooterForm__inherits(FooterForm, _Component);

  function FooterForm() {
    FooterForm__classCallCheck(this, FooterForm);

    return FooterForm__possibleConstructorReturn(this, (FooterForm.__proto__ || Object.getPrototypeOf(FooterForm)).apply(this, arguments));
  }

  FooterForm__createClass(FooterForm, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "section__bmargin"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Container"], null, external__react__default.a.createElement(external__semantic_ui_react_["Card"], {
        className: "card--elevate3"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Card"].Content, null, external__react__default.a.createElement("h4", {
        className: "text-center"
      }, "Get your beta invite now!"), external__react__default.a.createElement(components_BetaForm2, {
        config: this.props.config
      })))));
    }
  }]);

  return FooterForm;
}(external__react_["Component"]);

/* harmony default export */ var components_FooterForm = (FooterForm_FooterForm);
// CONCATENATED MODULE: ./components/Explainer.js
function Explainer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Explainer__typeof = function _typeof(obj) { return typeof obj; }; } else { Explainer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Explainer__typeof(obj); }

function Explainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Explainer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Explainer__createClass(Constructor, protoProps, staticProps) { if (protoProps) Explainer__defineProperties(Constructor.prototype, protoProps); if (staticProps) Explainer__defineProperties(Constructor, staticProps); return Constructor; }

function Explainer__possibleConstructorReturn(self, call) { if (call && (Explainer__typeof(call) === "object" || typeof call === "function")) { return call; } return Explainer__assertThisInitialized(self); }

function Explainer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Explainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Explainer_Explainer =
/*#__PURE__*/
function (_Component) {
  Explainer__inherits(Explainer, _Component);

  function Explainer() {
    Explainer__classCallCheck(this, Explainer);

    return Explainer__possibleConstructorReturn(this, (Explainer.__proto__ || Object.getPrototypeOf(Explainer)).apply(this, arguments));
  }

  Explainer__createClass(Explainer, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "explainer"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Grid"], {
        centered: true,
        columns: 3
      }, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("div", {
        className: "flex-middle text-center"
      }, external__react__default.a.createElement("h4", null, "Watch how ChatQ makes trading simpler"))), external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("iframe", {
        width: "640",
        height: "365",
        src: "https://www.youtube.com/embed/20XE6GM7xWo",
        frameBorder: "0",
        allow: "autoplay; encrypted-media",
        allowFullScreen: true
      }))));
    }
  }]);

  return Explainer;
}(external__react_["Component"]);

/* harmony default export */ var components_Explainer = (Explainer_Explainer);
// CONCATENATED MODULE: ./components/Testimonial.js
function Testimonial__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Testimonial__typeof = function _typeof(obj) { return typeof obj; }; } else { Testimonial__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Testimonial__typeof(obj); }

function Testimonial__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Testimonial__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Testimonial__createClass(Constructor, protoProps, staticProps) { if (protoProps) Testimonial__defineProperties(Constructor.prototype, protoProps); if (staticProps) Testimonial__defineProperties(Constructor, staticProps); return Constructor; }

function Testimonial__possibleConstructorReturn(self, call) { if (call && (Testimonial__typeof(call) === "object" || typeof call === "function")) { return call; } return Testimonial__assertThisInitialized(self); }

function Testimonial__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Testimonial__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Testimonial_Testimonial =
/*#__PURE__*/
function (_Component) {
  Testimonial__inherits(Testimonial, _Component);

  function Testimonial() {
    Testimonial__classCallCheck(this, Testimonial);

    return Testimonial__possibleConstructorReturn(this, (Testimonial.__proto__ || Object.getPrototypeOf(Testimonial)).apply(this, arguments));
  }

  Testimonial__createClass(Testimonial, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "testimonial section__bmargin"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Grid"], {
        centered: true,
        columns: 3
      }, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, null, external__react__default.a.createElement("p", {
        className: "text-center testimonial--copy"
      }, "\"ChatQ's tournaments feature has really helped me home my trading instrincts\""), external__react__default.a.createElement("p", {
        className: "text-center"
      }, "- Raymond H."))));
    }
  }]);

  return Testimonial;
}(external__react_["Component"]);

/* harmony default export */ var components_Testimonial = (Testimonial_Testimonial);
// EXTERNAL MODULE: ./components/ReferralCell.js
var ReferralCell = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Referral.js
function Referral__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Referral__typeof = function _typeof(obj) { return typeof obj; }; } else { Referral__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Referral__typeof(obj); }

function Referral__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Referral__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Referral__createClass(Constructor, protoProps, staticProps) { if (protoProps) Referral__defineProperties(Constructor.prototype, protoProps); if (staticProps) Referral__defineProperties(Constructor, staticProps); return Constructor; }

function Referral__possibleConstructorReturn(self, call) { if (call && (Referral__typeof(call) === "object" || typeof call === "function")) { return call; } return Referral__assertThisInitialized(self); }

function Referral__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Referral__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Referral_Referral =
/*#__PURE__*/
function (_Component) {
  Referral__inherits(Referral, _Component);

  function Referral() {
    Referral__classCallCheck(this, Referral);

    return Referral__possibleConstructorReturn(this, (Referral.__proto__ || Object.getPrototypeOf(Referral)).apply(this, arguments));
  }

  Referral__createClass(Referral, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "referral"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Grid"], {
        centered: true,
        columns: 3
      }, external__react__default.a.createElement(external__semantic_ui_react_["Grid"].Column, {
        className: "mobile__fullWidth"
      }, external__react__default.a.createElement("h3", {
        className: "text-center"
      }, "Extend your free premium access with our referral program"))), external__react__default.a.createElement(external__semantic_ui_react_["Container"], null, external__react__default.a.createElement(external__semantic_ui_react_["Grid"], {
        className: "referral--grid",
        centered: true,
        columns: 4
      }, external__react__default.a.createElement(ReferralCell["a" /* default */], {
        img: "./static/img/chaQ-lp-V2-05.png",
        header: "Request beta invite",
        copy: "Get 1 month free premium access"
      }), external__react__default.a.createElement(ReferralCell["a" /* default */], {
        img: "./static/img/chaQ-lp-V2-06.png",
        header: "Get a referral Link",
        copy: ""
      }), external__react__default.a.createElement(ReferralCell["a" /* default */], {
        img: "./static/img/chaQ-lp-V2-07.png",
        header: "Start referring",
        copy: "Get 1 month for each referral"
      }), external__react__default.a.createElement(ReferralCell["a" /* default */], {
        img: "./static/img/chaQ-lp-V2-08.png",
        header: "Explore ChatQ",
        copy: "at launch"
      }))));
    }
  }]);

  return Referral;
}(external__react_["Component"]);

/* harmony default export */ var components_Referral = (Referral_Referral);
// CONCATENATED MODULE: ./components/ProductTable.js
function ProductTable__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProductTable__typeof = function _typeof(obj) { return typeof obj; }; } else { ProductTable__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProductTable__typeof(obj); }

function ProductTable__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductTable__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductTable__createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductTable__defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductTable__defineProperties(Constructor, staticProps); return Constructor; }

function ProductTable__possibleConstructorReturn(self, call) { if (call && (ProductTable__typeof(call) === "object" || typeof call === "function")) { return call; } return ProductTable__assertThisInitialized(self); }

function ProductTable__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProductTable__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ProductTable_ProudctTable =
/*#__PURE__*/
function (_Component) {
  ProductTable__inherits(ProudctTable, _Component);

  function ProudctTable() {
    ProductTable__classCallCheck(this, ProudctTable);

    return ProductTable__possibleConstructorReturn(this, (ProudctTable.__proto__ || Object.getPrototypeOf(ProudctTable)).apply(this, arguments));
  }

  ProductTable__createClass(ProudctTable, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("section", {
        className: "product-table"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Container"], null, external__react__default.a.createElement("h3", {
        className: "text-center"
      }, "Premium versus regular ChatQ access"), external__react__default.a.createElement("div", {
        className: "flex-center"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Table"], {
        basic: "very",
        padded: "very"
      }, external__react__default.a.createElement(external__semantic_ui_react_["Table"].Header, null, external__react__default.a.createElement(external__semantic_ui_react_["Table"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Table"].HeaderCell, null), external__react__default.a.createElement(external__semantic_ui_react_["Table"].HeaderCell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "Regular")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].HeaderCell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "Premium")))), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Body, null, external__react__default.a.createElement(external__semantic_ui_react_["Table"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "Access to bots")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "All")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "All"))), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "Access to channels")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "All")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "All"))), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "Access to instruments")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "All")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "All"))), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "Market data")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "Default")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, external__react__default.a.createElement("span", {
        className: "bold"
      }, "Advanced parameters:"), external__react__default.a.createElement("br", null), "Alerts frequency", external__react__default.a.createElement("br", null), "Cross-platform notifications", external__react__default.a.createElement("br", null), "Price and percentage settings"))), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "Filter customization")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "Default")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, external__react__default.a.createElement("span", {
        className: "bold"
      }, "Advanced filter options:"), external__react__default.a.createElement("br", null), "Preferred channels and instruments"))), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Row, null, external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "Bots customization")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "Delayed 20 mins")), external__react__default.a.createElement(external__semantic_ui_react_["Table"].Cell, null, external__react__default.a.createElement("div", {
        className: "text-center"
      }, "Real-time"))))))));
    }
  }]);

  return ProudctTable;
}(external__react_["Component"]);

/* harmony default export */ var ProductTable = (ProductTable_ProudctTable);
// EXTERNAL MODULE: ./components/Remember.js
var Remember = __webpack_require__(13);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(18);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./pages/index.js


function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var referrerCode;


var pages_Prelaunch =
/*#__PURE__*/
function (_Component) {
  pages__inherits(Prelaunch, _Component);

  function Prelaunch() {
    pages__classCallCheck(this, Prelaunch);

    return pages__possibleConstructorReturn(this, (Prelaunch.__proto__ || Object.getPrototypeOf(Prelaunch)).apply(this, arguments));
  }

  pages__createClass(Prelaunch, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement(components_Hero, {
        referrerCode: this.props.referralCode
      }), external__react__default.a.createElement(components_AnnouncementBar, {
        number: "2,037",
        text: "traders are on the beta waitlist!"
      }), external__react__default.a.createElement(components_Explainer, null), external__react__default.a.createElement(components_Testimonial, null), external__react__default.a.createElement(components_Benefits, null), external__react__default.a.createElement(components_Referral, null), external__react__default.a.createElement(ProductTable, null), external__react__default.a.createElement(components_FooterForm, {
        config: config["a" /* default */]
      }), external__react__default.a.createElement(Remember["a" /* default */], null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(props) {
        var referralCode;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return props.query.referralCode;

              case 2:
                referralCode = _context.sent;
                return _context.abrupt("return", {
                  referralCode: referralCode
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Prelaunch;
}(external__react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Prelaunch);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ })
/******/ ]);