webpackHotUpdate("static/development/pages/imperative.js",{

/***/ "./pages/imperative.js":
/*!*****************************!*\
  !*** ./pages/imperative.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Imperative; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rgm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rgm */ "./src/index.js");
/* harmony import */ var react_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-system */ "./node_modules/react-system/dist/system.esm.js");
/* harmony import */ var _dev_src_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dev-src/hooks */ "./dev-src/hooks.js");
/* harmony import */ var _dev_src_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dev-src/controls */ "./dev-src/controls.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");


var _jsxFileName = "/Users/ice/ext/npm/rgm/pages/imperative.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * <!-- {"order": 5} -->
 *
 * # Google map methods
 *
 * As like as using _useMap_ at _Map_ children Components you can
 * use ref to map instance and apply any operation on
 * [google map instance](https://developers.google.com/maps/documentation/javascript/reference/map) imperatively.
 *
 * Using _ref_ and _useEffect_ you can make any property controllable if needed.
 */




 // https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions


var MAP_OPTIONS = {
  zoom: 9,
  center: {
    lat: 59.936,
    lng: 30.314
  }
};

var getSize = function getSize(elt) {
  var rect = elt.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height
  };
};

var __N_SSG = true;
function Imperative() {
  var api = Object(_dev_src_hooks__WEBPACK_IMPORTED_MODULE_5__["useGoogleApiLoader"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      map = _React$useState2[0],
      setMap = _React$useState2[1];

  var getOptions = function getOptions(elt) {
    return getSize(elt).width < 500 ? _objectSpread({}, MAP_OPTIONS, {
      disableDefaultUI: true
    }) : MAP_OPTIONS;
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_system__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("button", {
    onClick: function onClick() {
      map === null || map === void 0 ? void 0 : map.panBy(200 * (Math.random() - 0.5), 200 * (Math.random() - 0.5));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "Move"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_system__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    width: '16px',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("button", {
    onClick: function onClick() {
      map === null || map === void 0 ? void 0 : map.setOptions({
        disableDefaultUI: true
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "Disable ui"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_system__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    width: '16px',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("button", {
    onClick: function onClick() {
      map === null || map === void 0 ? void 0 : map.setOptions({
        disableDefaultUI: false
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "Enable ui")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_6__["Ratio"], {
    value: 3 / 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, api && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_3__["Map"], {
    ref: setMap,
    api: api,
    options: getOptions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  })));
}

/***/ })

})
//# sourceMappingURL=imperative.js.1573fbe7c3560875f4e6.hot-update.js.map