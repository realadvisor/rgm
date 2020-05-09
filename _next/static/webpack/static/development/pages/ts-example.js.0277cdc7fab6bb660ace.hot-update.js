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

var Child = function Child() {
  var _useMap = Object(_src__WEBPACK_IMPORTED_MODULE_2__["useMap"])(),
      api = _useMap.api,
      map = _useMap.map;

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    console.log(map === null || map === void 0 ? void 0 : map.getCenter().toJSON(), api.version);
  }, [map]);
  return null;
};

var _ref = false ? undefined : {
  name: "1i0b0cb-TsRgm",
  styles: "margin:16px;;label:TsRgm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvdHMtZXhhbXBsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RnQiIsImZpbGUiOiIvVXNlcnMvaWNlL2V4dC9ucG0vcmdtL3BhZ2VzL3RzLWV4YW1wbGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiA8IS0tIHtcIm9yZGVyXCI6IDEwfSAtLT5cbiAqXG4gKiAjIFR5cGVzY3JpcHRcbiAqXG4gKiBUUyB1c2FnZSBleGFtcGxlLlxuICpcbiAqIF9JJ20gZnJvbSBmbG93dHlwZSB3b3JsZCwgSSdtIHNvcnJ5IGlmIHNvbWV0aGluZyB3cm9uZy5fXG4gKlxuICogX0FueSBoZWxwIGlmIHNvbWV0aGluZyB3cm9uZyB3aWxsIGJlIGFwcHJlY2lhdGVkLl9cbiAqXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gSSBoYXZlbid0IGZvdW5kIHdoeSBwYXRocyBpbnNpZGUgdHNjb25maWcuanNvbiBkb2Vzbid0IHdvcmssIE5FRUQgSEVMUCFcbmltcG9ydCB7IE1hcCwgT3ZlcmxheSwgTWFya2VyLCB1c2VNYXAgfSBmcm9tICcuLi9zcmMnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyB1c2VHb29nbGVBcGlMb2FkZXIgfSBmcm9tICcuLi9kZXYtc3JjL2hvb2tzJztcbmltcG9ydCB7IFJhdGlvIH0gZnJvbSAnLi4vZGV2LXNyYy9jb250cm9scyc7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZS9tYXAjTWFwT3B0aW9uc1xuY29uc3QgTUFQX09QVElPTlM6IGdvb2dsZS5tYXBzLk1hcE9wdGlvbnMgPSB7XG4gIHpvb206IDksXG4gIGNlbnRlcjoge1xuICAgIGxhdDogNTkuOTM2LFxuICAgIGxuZzogMzAuMzE0LFxuICB9LFxuICBnZXN0dXJlSGFuZGxpbmc6ICdncmVlZHknLFxuICBjbGlja2FibGVJY29uczogZmFsc2UsXG59O1xuXG5jb25zdCBDaGlsZCA9ICgpID0+IHtcbiAgY29uc3QgeyBhcGksIG1hcCB9ID0gdXNlTWFwKCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhtYXA/LmdldENlbnRlcigpLnRvSlNPTigpLCBhcGkudmVyc2lvbik7XG4gIH0sIFttYXBdKTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRzUmdtKCkge1xuICBjb25zdCBhcGkgPSB1c2VHb29nbGVBcGlMb2FkZXIoKTtcbiAgY29uc3QgW21hcCwgc2V0TWFwXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBnb29nbGUubWFwcy5NYXA8SFRNTERpdkVsZW1lbnQ+PihcbiAgICBudWxsLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgICBgfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKG1hcCAhPSBudWxsKSB7XG4gICAgICAgICAgICBtYXAucGFuQnkoTWF0aC5yYW5kb20oKSAqIDMwMCAtIDE1MCwgTWF0aC5yYW5kb20oKSAqIDMwMCAtIDE1MCk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBDbGlja1xuICAgICAgPC9idXR0b24+XG4gICAgICA8UmF0aW8gdmFsdWU9ezMgLyA0fT5cbiAgICAgICAge2FwaSAmJiAoXG4gICAgICAgICAgPE1hcCByZWY9e3NldE1hcH0gYXBpPXthcGl9IG9wdGlvbnM9e01BUF9PUFRJT05TfT5cbiAgICAgICAgICAgIDxPdmVybGF5PlxuICAgICAgICAgICAgICA8TWFya2VyIGxhdD17NTkuOTM2fSBsbmc9ezMwLjMxNH0+XG4gICAgICAgICAgICAgICAgPENpcmNsZU1hcmtlciAvPlxuICAgICAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgICAgIDwvT3ZlcmxheT5cbiAgICAgICAgICAgIDxDaGlsZCAvPlxuICAgICAgICAgIDwvTWFwPlxuICAgICAgICApfVxuICAgICAgPC9SYXRpbz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgQ2lyY2xlTWFya2VyID0gKCkgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXtjc3NgXG4gICAgICBwbGFjZS1zZWxmOiBjZW50ZXIgY2VudGVyO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGB9XG4gID5cbiAgICBUU1xuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgLy8gVGhlIGJlc3QgaXMgdG8gcGxhY2UgdGhpcyBtZXRob2QgYXQgX2FwcC5qcyBidXQgdGhpcyBkb2Vzbid0IHdvcmsgbm93XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgZG9jID0gYXdhaXQgaW1wb3J0KCcuLi9kZXYtc3JjL2RvYycpO1xuICByZXR1cm4gZG9jLmdldFN0YXRpY1Byb3BzKCk7XG59O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
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
      lineNumber: 49,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("button", {
    css: _ref,
    onClick: function onClick() {
      if (map != null) {
        map.panBy(Math.random() * 300 - 150, Math.random() * 300 - 150);
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, "Click"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_4__["Ratio"], {
    value: 3 / 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, api && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_src__WEBPACK_IMPORTED_MODULE_2__["Map"], {
    ref: setMap,
    api: api,
    options: MAP_OPTIONS,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_src__WEBPACK_IMPORTED_MODULE_2__["Overlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_src__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    lat: 59.936,
    lng: 30.314,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CircleMarker, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Child, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }))));
}

var _ref2 = false ? undefined : {
  name: "12b2mk0-CircleMarker",
  styles: "place-self:center center;width:50px;height:50px;border-radius:100%;background-color:white;border:3px solid red;display:flex;align-items:center;justify-content:center;;label:CircleMarker;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvdHMtZXhhbXBsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VZIiwiZmlsZSI6Ii9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvdHMtZXhhbXBsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIDwhLS0ge1wib3JkZXJcIjogMTB9IC0tPlxuICpcbiAqICMgVHlwZXNjcmlwdFxuICpcbiAqIFRTIHVzYWdlIGV4YW1wbGUuXG4gKlxuICogX0knbSBmcm9tIGZsb3d0eXBlIHdvcmxkLCBJJ20gc29ycnkgaWYgc29tZXRoaW5nIHdyb25nLl9cbiAqXG4gKiBfQW55IGhlbHAgaWYgc29tZXRoaW5nIHdyb25nIHdpbGwgYmUgYXBwcmVjaWF0ZWQuX1xuICpcbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBJIGhhdmVuJ3QgZm91bmQgd2h5IHBhdGhzIGluc2lkZSB0c2NvbmZpZy5qc29uIGRvZXNuJ3Qgd29yaywgTkVFRCBIRUxQIVxuaW1wb3J0IHsgTWFwLCBPdmVybGF5LCBNYXJrZXIsIHVzZU1hcCB9IGZyb20gJy4uL3NyYyc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IHVzZUdvb2dsZUFwaUxvYWRlciB9IGZyb20gJy4uL2Rldi1zcmMvaG9va3MnO1xuaW1wb3J0IHsgUmF0aW8gfSBmcm9tICcuLi9kZXYtc3JjL2NvbnRyb2xzJztcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlL21hcCNNYXBPcHRpb25zXG5jb25zdCBNQVBfT1BUSU9OUzogZ29vZ2xlLm1hcHMuTWFwT3B0aW9ucyA9IHtcbiAgem9vbTogOSxcbiAgY2VudGVyOiB7XG4gICAgbGF0OiA1OS45MzYsXG4gICAgbG5nOiAzMC4zMTQsXG4gIH0sXG4gIGdlc3R1cmVIYW5kbGluZzogJ2dyZWVkeScsXG4gIGNsaWNrYWJsZUljb25zOiBmYWxzZSxcbn07XG5cbmNvbnN0IENoaWxkID0gKCkgPT4ge1xuICBjb25zdCB7IGFwaSwgbWFwIH0gPSB1c2VNYXAoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG1hcD8uZ2V0Q2VudGVyKCkudG9KU09OKCksIGFwaS52ZXJzaW9uKTtcbiAgfSwgW21hcF0pO1xuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHNSZ20oKSB7XG4gIGNvbnN0IGFwaSA9IHVzZUdvb2dsZUFwaUxvYWRlcigpO1xuICBjb25zdCBbbWFwLCBzZXRNYXBdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IGdvb2dsZS5tYXBzLk1hcDxIVE1MRGl2RWxlbWVudD4+KFxuICAgIG51bGwsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgIGB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBpZiAobWFwICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1hcC5wYW5CeShNYXRoLnJhbmRvbSgpICogMzAwIC0gMTUwLCBNYXRoLnJhbmRvbSgpICogMzAwIC0gMTUwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIENsaWNrXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxSYXRpbyB2YWx1ZT17MyAvIDR9PlxuICAgICAgICB7YXBpICYmIChcbiAgICAgICAgICA8TWFwIHJlZj17c2V0TWFwfSBhcGk9e2FwaX0gb3B0aW9ucz17TUFQX09QVElPTlN9PlxuICAgICAgICAgICAgPE92ZXJsYXk+XG4gICAgICAgICAgICAgIDxNYXJrZXIgbGF0PXs1OS45MzZ9IGxuZz17MzAuMzE0fT5cbiAgICAgICAgICAgICAgICA8Q2lyY2xlTWFya2VyIC8+XG4gICAgICAgICAgICAgIDwvTWFya2VyPlxuICAgICAgICAgICAgPC9PdmVybGF5PlxuICAgICAgICAgICAgPENoaWxkIC8+XG4gICAgICAgICAgPC9NYXA+XG4gICAgICAgICl9XG4gICAgICA8L1JhdGlvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBDaXJjbGVNYXJrZXIgPSAoKSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e2Nzc2BcbiAgICAgIHBsYWNlLXNlbGY6IGNlbnRlciBjZW50ZXI7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYH1cbiAgPlxuICAgIFRTXG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAvLyBUaGUgYmVzdCBpcyB0byBwbGFjZSB0aGlzIG1ldGhvZCBhdCBfYXBwLmpzIGJ1dCB0aGlzIGRvZXNuJ3Qgd29yayBub3dcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBkb2MgPSBhd2FpdCBpbXBvcnQoJy4uL2Rldi1zcmMvZG9jJyk7XG4gIHJldHVybiBkb2MuZ2V0U3RhdGljUHJvcHMoKTtcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var CircleMarker = function CircleMarker() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    css: _ref2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 3
    }
  }, "TS");
};

/***/ })

})
//# sourceMappingURL=ts-example.js.0277cdc7fab6bb660ace.hot-update.js.map