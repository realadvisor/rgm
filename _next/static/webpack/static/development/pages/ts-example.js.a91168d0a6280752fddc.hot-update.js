webpackHotUpdate("static/development/pages/ts-example.js",{

/***/ "./pages/ts-example.tsx":
/*!******************************!*\
  !*** ./pages/ts-example.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TsRgm; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src */ "./src/index.js");
/* harmony import */ var _dev_src_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dev-src/hooks */ "./dev-src/hooks.js");
/* harmony import */ var _dev_src_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dev-src/controls */ "./dev-src/controls.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");


var _jsxFileName = "/Users/ice/ext/npm/rgm/pages/ts-example.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/**
 * <!-- {"order": 10} -->
 *
 * # Typescript
 *
 * TS usage example.
 *
 * _I'm from flowtype world, I'm sorry if something wrong._
 *
 * _Any help if something wrong will be appreciated._
 *
 */
 // I haven't found why paths inside tsconfig.json doesn't work, NEED HELP!



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
function TsRgm() {
  var api = Object(_dev_src_hooks__WEBPACK_IMPORTED_MODULE_3__["useGoogleApiLoader"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      map = _React$useState2[0],
      setMap = _React$useState2[1];

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("button", {
    onClick: function onClick() {
      if (map != null) {
        map.panBy(Math.random() * 300 - 150, Math.random() * 300 - 150);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "Click"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_4__["Ratio"], {
    value: 3 / 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, api && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_src__WEBPACK_IMPORTED_MODULE_2__["Map"], {
    ref: setMap,
    api: api,
    options: MAP_OPTIONS,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_src__WEBPACK_IMPORTED_MODULE_2__["Overlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_src__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    lat: 59.936,
    lng: 30.314,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CircleMarker, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }))))));
}

var _ref = false ? undefined : {
  name: "12b2mk0-CircleMarker",
  styles: "place-self:center center;width:50px;height:50px;border-radius:100%;background-color:white;border:3px solid red;display:flex;align-items:center;justify-content:center;;label:CircleMarker;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvdHMtZXhhbXBsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVZIiwiZmlsZSI6Ii9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvdHMtZXhhbXBsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIDwhLS0ge1wib3JkZXJcIjogMTB9IC0tPlxuICpcbiAqICMgVHlwZXNjcmlwdFxuICpcbiAqIFRTIHVzYWdlIGV4YW1wbGUuXG4gKlxuICogX0knbSBmcm9tIGZsb3d0eXBlIHdvcmxkLCBJJ20gc29ycnkgaWYgc29tZXRoaW5nIHdyb25nLl9cbiAqXG4gKiBfQW55IGhlbHAgaWYgc29tZXRoaW5nIHdyb25nIHdpbGwgYmUgYXBwcmVjaWF0ZWQuX1xuICpcbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBJIGhhdmVuJ3QgZm91bmQgd2h5IHBhdGhzIGluc2lkZSB0c2NvbmZpZy5qc29uIGRvZXNuJ3Qgd29yaywgTkVFRCBIRUxQIVxuaW1wb3J0IHsgTWFwLCBPdmVybGF5LCBNYXJrZXIgfSBmcm9tICcuLi9zcmMnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyB1c2VHb29nbGVBcGlMb2FkZXIgfSBmcm9tICcuLi9kZXYtc3JjL2hvb2tzJztcbmltcG9ydCB7IFJhdGlvIH0gZnJvbSAnLi4vZGV2LXNyYy9jb250cm9scyc7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZS9tYXAjTWFwT3B0aW9uc1xuY29uc3QgTUFQX09QVElPTlM6IGdvb2dsZS5tYXBzLk1hcE9wdGlvbnMgPSB7XG4gIHpvb206IDksXG4gIGNlbnRlcjoge1xuICAgIGxhdDogNTkuOTM2LFxuICAgIGxuZzogMzAuMzE0LFxuICB9LFxuICBnZXN0dXJlSGFuZGxpbmc6ICdncmVlZHknLFxuICBjbGlja2FibGVJY29uczogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUc1JnbSgpIHtcbiAgY29uc3QgYXBpID0gdXNlR29vZ2xlQXBpTG9hZGVyKCk7XG4gIGNvbnN0IFttYXAsIHNldE1hcF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgZ29vZ2xlLm1hcHMuTWFwPEhUTUxEaXZFbGVtZW50Pj4oXG4gICAgbnVsbCxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAobWFwICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1hcC5wYW5CeShNYXRoLnJhbmRvbSgpICogMzAwIC0gMTUwLCBNYXRoLnJhbmRvbSgpICogMzAwIC0gMTUwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIENsaWNrXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxSYXRpbyB2YWx1ZT17MyAvIDR9PlxuICAgICAgICB7YXBpICYmIChcbiAgICAgICAgICA8TWFwIHJlZj17c2V0TWFwfSBhcGk9e2FwaX0gb3B0aW9ucz17TUFQX09QVElPTlN9PlxuICAgICAgICAgICAgPE92ZXJsYXk+XG4gICAgICAgICAgICAgIDxNYXJrZXIgbGF0PXs1OS45MzZ9IGxuZz17MzAuMzE0fT5cbiAgICAgICAgICAgICAgICA8Q2lyY2xlTWFya2VyIC8+XG4gICAgICAgICAgICAgIDwvTWFya2VyPlxuICAgICAgICAgICAgPC9PdmVybGF5PlxuICAgICAgICAgIDwvTWFwPlxuICAgICAgICApfVxuICAgICAgPC9SYXRpbz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgQ2lyY2xlTWFya2VyID0gKCkgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXtjc3NgXG4gICAgICBwbGFjZS1zZWxmOiBjZW50ZXIgY2VudGVyO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGB9XG4gID5cbiAgICBSR01cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIFRoZSBiZXN0IGlzIHRvIHBsYWNlIHRoaXMgbWV0aG9kIGF0IF9hcHAuanMgYnV0IHRoaXMgZG9lc24ndCB3b3JrIG5vd1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IGRvYyA9IGF3YWl0IGltcG9ydCgnLi4vZGV2LXNyYy9kb2MnKTtcbiAgcmV0dXJuIGRvYy5nZXRTdGF0aWNQcm9wcygpO1xufTtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var CircleMarker = function CircleMarker() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    css: _ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 3
    }
  }, "RGM");
};

/***/ })

})
//# sourceMappingURL=ts-example.js.a91168d0a6280752fddc.hot-update.js.map