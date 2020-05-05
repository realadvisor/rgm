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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Performance; });
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
 * minimal example.
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
function Performance() {
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
  })))));
}

var _ref = false ? undefined : {
  name: "n4xhml-CircleMarker",
  styles: "place-self:center center;width:50px;height:50px;border-radius:100%;background-color:white;border:2px solid red;display:flex;align-items:center;justify-content:center;;label:CircleMarker;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURZIiwiZmlsZSI6Ii9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG4vKipcbiAqIDwhLS0ge1wib3JkZXJcIjogMX0gLS0+XG4gKlxuICogIyBSR00gLSBSZWFjdCBHb29nbGUgTWFwXG4gKlxuICogVGlueSBidXQgdmVyeSBwb3dlcmZ1bCBSZWFjdCBHb29nbGUgTWFwLlxuICogSXQgYWxsb3dzIHlvdSB0byByZW5kZXIgYW55IFJlYWN0IGNvbXBvbmVudCBvbiB0aGUgR29vZ2xlIE1hcCxcbiAqIGFuZCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byBuYXRpdmUgZ29vZ2xlIG1hcCBhcGkuXG4gKlxuICogbWluaW1hbCBleGFtcGxlLlxuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcCwgT3ZlcmxheSwgTWFya2VyIH0gZnJvbSAncmdtJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgdXNlR29vZ2xlQXBpTG9hZGVyIH0gZnJvbSAnLi4vZGV2LXNyYy9ob29rcyc7XG5pbXBvcnQgeyBSYXRpbyB9IGZyb20gJy4uL2Rldi1zcmMvY29udHJvbHMnO1xuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UvbWFwI01hcE9wdGlvbnNcbmNvbnN0IE1BUF9PUFRJT05TID0ge1xuICB6b29tOiA5LFxuICBjZW50ZXI6IHtcbiAgICBsYXQ6IDU5LjkzNixcbiAgICBsbmc6IDMwLjMxNCxcbiAgfSxcbiAgZ2VzdHVyZUhhbmRsaW5nOiAnZ3JlZWR5JyxcbiAgY2xpY2thYmxlSWNvbnM6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyZm9ybWFuY2UoKSB7XG4gIGNvbnN0IGFwaSA9IHVzZUdvb2dsZUFwaUxvYWRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPFJhdGlvIHZhbHVlPXszIC8gNH0+XG4gICAgICB7YXBpICYmIChcbiAgICAgICAgPE1hcCBhcGk9e2FwaX0gb3B0aW9ucz17TUFQX09QVElPTlN9PlxuICAgICAgICAgIDxPdmVybGF5PlxuICAgICAgICAgICAgPE1hcmtlciBsYXQ9e01BUF9PUFRJT05TLmNlbnRlci5sYXR9IGxuZz17TUFQX09QVElPTlMuY2VudGVyLmxuZ30+XG4gICAgICAgICAgICAgIDxDaXJjbGVNYXJrZXIgLz5cbiAgICAgICAgICAgIDwvTWFya2VyPlxuICAgICAgICAgIDwvT3ZlcmxheT5cbiAgICAgICAgPC9NYXA+XG4gICAgICApfVxuICAgIDwvUmF0aW8+XG4gICk7XG59XG5cbmNvbnN0IENpcmNsZU1hcmtlciA9ICgpID0+IChcbiAgPGRpdlxuICAgIGNzcz17Y3NzYFxuICAgICAgcGxhY2Utc2VsZjogY2VudGVyIGNlbnRlcjtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBgfVxuICA+XG4gICAgSGVsbG8gV29ybGRcbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIFRoZSBiZXN0IGlzIHRvIHBsYWNlIHRoaXMgbWV0aG9kIGF0IF9hcHAuanMgYnV0IHRoaXMgZG9lc24ndCB3b3JrIG5vd1xuICBjb25zdCBkb2MgPSBhd2FpdCBpbXBvcnQoJy4uL2Rldi1zcmMvZG9jJyk7XG4gIHJldHVybiBkb2MuZ2V0U3RhdGljUHJvcHMoKTtcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var CircleMarker = function CircleMarker() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: _ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 3
    }
  }, "Hello World");
};

/***/ })

})
//# sourceMappingURL=index.js.1b7d752aaa300fbbcc65.hot-update.js.map