webpackHotUpdate("static/development/pages/performance.js",{

/***/ "./pages/performance.js":
/*!******************************!*\
  !*** ./pages/performance.js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Performance; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rgm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rgm */ "./src/index.js");
/* harmony import */ var react_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-system */ "./node_modules/react-system/dist/system.esm.js");
/* harmony import */ var _dev_src_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dev-src/hooks */ "./dev-src/hooks.js");
/* harmony import */ var _dev_src_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dev-src/controls */ "./dev-src/controls.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");


var _jsxFileName = "/Users/ice/ext/npm/rgm/pages/performance.js",
    _this2 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/**
 * <!-- {"order": 8 } -->
 *
 * # N markers
 *
 * Example of drawing N React markers.
 *
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

var genRandomMarkers = function genRandomMarkers(n) {
  return Array.from(Array(n), function () {
    var r = Math.random() * 2 + 0.05;
    var angle = Math.random() * 2 * Math.PI;
    return {
      lat: MAP_OPTIONS.center.lat + r * Math.cos(angle),
      lng: MAP_OPTIONS.center.lng + r * Math.sin(angle)
    };
  });
};

var __N_SSG = true;
function Performance() {
  var _this = this;

  var api = Object(_dev_src_hooks__WEBPACK_IMPORTED_MODULE_4__["useGoogleApiLoader"])();
  var INITIAL_MARKERS_COUNT = 200;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](function () {
    return genRandomMarkers(INITIAL_MARKERS_COUNT);
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      markers = _React$useState2[0],
      setMarkers = _React$useState2[1];

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_system__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_system__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    pr: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Count:"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    options: ['100', '200', '300', '500', '1000', '2000'],
    value: "".concat(markers.length),
    onChange: function onChange(v) {
      setMarkers(genRandomMarkers(Number.parseFloat(v)));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_5__["Ratio"], {
    value: 3 / 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, api && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_2__["Map"], {
    api: api,
    options: MAP_OPTIONS,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_2__["Overlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, markers.map(function (m, index) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      key: index,
      lat: m.lat,
      lng: m.lng,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(CircleMarker, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 19
      }
    }));
  })))));
}

var _ref = false ? undefined : {
  name: "1bqw4t9-CircleMarker",
  styles: "place-self:center center;width:10px;height:10px;border-radius:100%;background-color:white;border:2px solid red;;label:CircleMarker;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvcGVyZm9ybWFuY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVZIiwiZmlsZSI6Ii9Vc2Vycy9pY2UvZXh0L25wbS9yZ20vcGFnZXMvcGVyZm9ybWFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG4vKipcbiAqIDwhLS0ge1wib3JkZXJcIjogOCB9IC0tPlxuICpcbiAqICMgTiBtYXJrZXJzXG4gKlxuICogRXhhbXBsZSBvZiBkcmF3aW5nIE4gUmVhY3QgbWFya2Vycy5cbiAqXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFwLCBPdmVybGF5LCBNYXJrZXIgfSBmcm9tICdyZ20nO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBGbGV4LCBCb3ggfSBmcm9tICdyZWFjdC1zeXN0ZW0nO1xuaW1wb3J0IHsgdXNlR29vZ2xlQXBpTG9hZGVyIH0gZnJvbSAnLi4vZGV2LXNyYy9ob29rcyc7XG5pbXBvcnQgeyBSYXRpbywgU2VsZWN0IH0gZnJvbSAnLi4vZGV2LXNyYy9jb250cm9scyc7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZS9tYXAjTWFwT3B0aW9uc1xuY29uc3QgTUFQX09QVElPTlMgPSB7XG4gIHpvb206IDksXG4gIGNlbnRlcjoge1xuICAgIGxhdDogNTkuOTM2LFxuICAgIGxuZzogMzAuMzE0LFxuICB9LFxuICBnZXN0dXJlSGFuZGxpbmc6ICdncmVlZHknLFxuICBjbGlja2FibGVJY29uczogZmFsc2UsXG59O1xuXG5jb25zdCBnZW5SYW5kb21NYXJrZXJzID0gbiA9PlxuICBBcnJheS5mcm9tKEFycmF5KG4pLCAoKSA9PiB7XG4gICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAyICsgMC4wNTtcbiAgICBjb25zdCBhbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTtcblxuICAgIHJldHVybiB7XG4gICAgICBsYXQ6IE1BUF9PUFRJT05TLmNlbnRlci5sYXQgKyByICogTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgbG5nOiBNQVBfT1BUSU9OUy5jZW50ZXIubG5nICsgciAqIE1hdGguc2luKGFuZ2xlKSxcbiAgICB9O1xuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyZm9ybWFuY2UoKSB7XG4gIGNvbnN0IGFwaSA9IHVzZUdvb2dsZUFwaUxvYWRlcigpO1xuICBjb25zdCBJTklUSUFMX01BUktFUlNfQ09VTlQgPSAyMDA7XG4gIGNvbnN0IFttYXJrZXJzLCBzZXRNYXJrZXJzXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+XG4gICAgZ2VuUmFuZG9tTWFya2VycyhJTklUSUFMX01BUktFUlNfQ09VTlQpLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGbGV4IHA9ezN9PlxuICAgICAgICA8Qm94IHByPXsyfT5Db3VudDo8L0JveD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG9wdGlvbnM9e1snMTAwJywgJzIwMCcsICczMDAnLCAnNTAwJywgJzEwMDAnLCAnMjAwMCddfVxuICAgICAgICAgIHZhbHVlPXtgJHttYXJrZXJzLmxlbmd0aH1gfVxuICAgICAgICAgIG9uQ2hhbmdlPXt2ID0+IHtcbiAgICAgICAgICAgIHNldE1hcmtlcnMoZ2VuUmFuZG9tTWFya2VycyhOdW1iZXIucGFyc2VGbG9hdCh2KSkpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8UmF0aW8gdmFsdWU9ezMgLyA0fT5cbiAgICAgICAge2FwaSAmJiAoXG4gICAgICAgICAgPE1hcCBhcGk9e2FwaX0gb3B0aW9ucz17TUFQX09QVElPTlN9PlxuICAgICAgICAgICAgPE92ZXJsYXk+XG4gICAgICAgICAgICAgIHttYXJrZXJzLm1hcCgobSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8TWFya2VyIGtleT17aW5kZXh9IGxhdD17bS5sYXR9IGxuZz17bS5sbmd9PlxuICAgICAgICAgICAgICAgICAgPENpcmNsZU1hcmtlciAvPlxuICAgICAgICAgICAgICAgIDwvTWFya2VyPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvT3ZlcmxheT5cbiAgICAgICAgICA8L01hcD5cbiAgICAgICAgKX1cbiAgICAgIDwvUmF0aW8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IENpcmNsZU1hcmtlciA9ICgpID0+IChcbiAgPGRpdlxuICAgIGNzcz17Y3NzYFxuICAgICAgcGxhY2Utc2VsZjogY2VudGVyIGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIGB9XG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIFRoZSBiZXN0IGlzIHRvIHBsYWNlIHRoaXMgbWV0aG9kIGF0IF9hcHAuanMgYnV0IHRoaXMgZG9lc24ndCB3b3JrIG5vd1xuICBjb25zdCBkb2MgPSBhd2FpdCBpbXBvcnQoJy4uL2Rldi1zcmMvZG9jJyk7XG4gIHJldHVybiBkb2MuZ2V0U3RhdGljUHJvcHMoKTtcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var CircleMarker = function CircleMarker() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    css: _ref,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 3
    }
  });
};

/***/ })

})
//# sourceMappingURL=performance.js.f61bdbd17747eaffbb76.hot-update.js.map