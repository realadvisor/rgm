webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rgm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rgm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rgm */ "./src/index.js");
/* harmony import */ var _dev_src_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dev-src/hooks */ "./dev-src/hooks.js");
/* harmony import */ var _dev_src_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dev-src/controls */ "./dev-src/controls.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "/Users/ice/ext/npm/rgm/pages/index.js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/**
 * <!-- {"order": 1} -->
 *
 * # RGM - React Google Map
 *
 * Tiny but very powerful React Google Map.
 * It allows you to render any React component on the Google Map,
 * and provides easy access to native google map api.
 *
 * Minimal example with all existing api usage _(without Overlay debug prop)_.
 */



 // https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions


var MAP_OPTIONS = {
  zoom: 9,
  center: {
    lat: 59.936,
    lng: 30.314
  },
  gestureHandling: 'greedy',
  clickableIcons: false
};
var __N_SSG = true;
function Rgm() {
  var api = Object(_dev_src_hooks__WEBPACK_IMPORTED_MODULE_2__["useGoogleApiLoader"])();
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_3__["Ratio"], {
    value: 3 / 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, api && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_1__["Map"], {
    api: api,
    options: MAP_OPTIONS,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_1__["Overlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
    lat: MAP_OPTIONS.center.lat,
    lng: MAP_OPTIONS.center.lng,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(CircleMarker, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Child, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })));
}

var Child = function Child() {
  var _useMap = Object(rgm__WEBPACK_IMPORTED_MODULE_1__["useMap"])(),
      api = _useMap.api,
      map = _useMap.map;

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    console.info(map.getCenter().toJSON(), api.version);
  }, [map, api]);
  return null;
};

var _ref = false ? undefined : {
  name: "12b2mk0-CircleMarker",
  styles: "place-self:center center;width:50px;height:50px;border-radius:100%;background-color:white;border:3px solid red;display:flex;align-items:center;justify-content:center;;label:CircleMarker;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERZIiwiZmlsZSI6Ii9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG4vKipcbiAqIDwhLS0ge1wib3JkZXJcIjogMX0gLS0+XG4gKlxuICogIyBSR00gLSBSZWFjdCBHb29nbGUgTWFwXG4gKlxuICogVGlueSBidXQgdmVyeSBwb3dlcmZ1bCBSZWFjdCBHb29nbGUgTWFwLlxuICogSXQgYWxsb3dzIHlvdSB0byByZW5kZXIgYW55IFJlYWN0IGNvbXBvbmVudCBvbiB0aGUgR29vZ2xlIE1hcCxcbiAqIGFuZCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byBuYXRpdmUgZ29vZ2xlIG1hcCBhcGkuXG4gKlxuICogTWluaW1hbCBleGFtcGxlIHdpdGggYWxsIGV4aXN0aW5nIGFwaSB1c2FnZSBfKHdpdGhvdXQgT3ZlcmxheSBkZWJ1ZyBwcm9wKV8uXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFwLCBPdmVybGF5LCBNYXJrZXIsIHVzZU1hcCB9IGZyb20gJ3JnbSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHVzZUdvb2dsZUFwaUxvYWRlciB9IGZyb20gJy4uL2Rldi1zcmMvaG9va3MnO1xuaW1wb3J0IHsgUmF0aW8gfSBmcm9tICcuLi9kZXYtc3JjL2NvbnRyb2xzJztcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlL21hcCNNYXBPcHRpb25zXG5jb25zdCBNQVBfT1BUSU9OUyA9IHtcbiAgem9vbTogOSxcbiAgY2VudGVyOiB7XG4gICAgbGF0OiA1OS45MzYsXG4gICAgbG5nOiAzMC4zMTQsXG4gIH0sXG4gIGdlc3R1cmVIYW5kbGluZzogJ2dyZWVkeScsXG4gIGNsaWNrYWJsZUljb25zOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJnbSgpIHtcbiAgY29uc3QgYXBpID0gdXNlR29vZ2xlQXBpTG9hZGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmF0aW8gdmFsdWU9ezMgLyA0fT5cbiAgICAgIHthcGkgJiYgKFxuICAgICAgICA8TWFwIGFwaT17YXBpfSBvcHRpb25zPXtNQVBfT1BUSU9OU30+XG4gICAgICAgICAgPE92ZXJsYXk+XG4gICAgICAgICAgICA8TWFya2VyIGxhdD17TUFQX09QVElPTlMuY2VudGVyLmxhdH0gbG5nPXtNQVBfT1BUSU9OUy5jZW50ZXIubG5nfT5cbiAgICAgICAgICAgICAgPENpcmNsZU1hcmtlciAvPlxuICAgICAgICAgICAgPC9NYXJrZXI+XG4gICAgICAgICAgPC9PdmVybGF5PlxuICAgICAgICAgIDxDaGlsZCAvPlxuICAgICAgICA8L01hcD5cbiAgICAgICl9XG4gICAgPC9SYXRpbz5cbiAgKTtcbn1cblxuY29uc3QgQ2hpbGQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgYXBpLCBtYXAgfSA9IHVzZU1hcCgpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5pbmZvKG1hcC5nZXRDZW50ZXIoKS50b0pTT04oKSwgYXBpLnZlcnNpb24pO1xuICB9LCBbbWFwLCBhcGldKTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IENpcmNsZU1hcmtlciA9ICgpID0+IChcbiAgPGRpdlxuICAgIGNzcz17Y3NzYFxuICAgICAgcGxhY2Utc2VsZjogY2VudGVyIGNlbnRlcjtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBgfVxuICA+XG4gICAgUkdNXG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAvLyBUaGUgYmVzdCBpcyB0byBwbGFjZSB0aGlzIG1ldGhvZCBhdCBfYXBwLmpzIGJ1dCB0aGlzIGRvZXNuJ3Qgd29yayBub3dcbiAgY29uc3QgZG9jID0gYXdhaXQgaW1wb3J0KCcuLi9kZXYtc3JjL2RvYycpO1xuICByZXR1cm4gZG9jLmdldFN0YXRpY1Byb3BzKCk7XG59O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var CircleMarker = function CircleMarker() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: _ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 3
    }
  }, "RGM");
};

/***/ })

})
//# sourceMappingURL=index.js.af36b792f77aed585697.hot-update.js.map