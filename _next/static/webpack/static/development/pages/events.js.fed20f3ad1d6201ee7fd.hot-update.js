webpackHotUpdate("static/development/pages/events.js",{

/***/ "./pages/events.js":
/*!*************************!*\
  !*** ./pages/events.js ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Events; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rgm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rgm */ "./src/index.js");
/* harmony import */ var _dev_src_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dev-src/hooks */ "./dev-src/hooks.js");
/* harmony import */ var _dev_src_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dev-src/controls */ "./dev-src/controls.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _jsxFileName = "/Users/ice/ext/npm/rgm/pages/events.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

/**
 * <!-- {"order": 4} -->
 *
 * # Events
 *
 * Get instance of [google.maps.Map](https://developers.google.com/maps/documentation/javascript/reference/map)
 * class using _ref_ property or _useMap_ hook.
 * Then subscribe on any [event](https://developers.google.com/maps/documentation/javascript/events)
 * inside _useEffect_ hook using _addListener_.
 *
 * Don't forget to unsubscribe in _useEffect_ cleanup.
 *
 * > Sometimes google map fires events like _idle_ in a wrong order,
 *   usually wrapping callback into 2 rafs helps.
 *
 * > Don't use code below in production, it's better to intercept bounds changes inside _idle_ event.
 *
 */



 // https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions


var MAP_OPTIONS = {
  zoom: 9,
  center: {
    lat: 59.936,
    lng: 30.314
  }
};
var __N_SSG = true;
function Events() {
  var _bounds$getCenter$toS;

  var api = Object(_dev_src_hooks__WEBPACK_IMPORTED_MODULE_3__["useGoogleApiLoader"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      bounds = _React$useState2[0],
      setBounds = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      map = _React$useState4[0],
      setMap = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (map != null) {
      var boundsChangedListener = map.addListener('bounds_changed', function () {
        var bounds = map.getBounds();
        setBounds(bounds);
      });
      return function () {
        boundsChangedListener.remove();
      };
    }
  }, [map]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_4__["Info"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, (_bounds$getCenter$toS = bounds === null || bounds === void 0 ? void 0 : bounds.getCenter().toString()) !== null && _bounds$getCenter$toS !== void 0 ? _bounds$getCenter$toS : ' '), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_4__["Ratio"], {
    value: 3 / 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, api && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_2__["Map"], {
    ref: setMap,
    api: api,
    options: MAP_OPTIONS,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  })));
}

/***/ })

})
//# sourceMappingURL=events.js.fed20f3ad1d6201ee7fd.hot-update.js.map