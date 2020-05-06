webpackHotUpdate("static/development/pages/react-markers.js",{

/***/ "./pages/react-markers.js":
/*!********************************!*\
  !*** ./pages/react-markers.js ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarkerPage; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rgm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rgm */ "./src/index.js");
/* harmony import */ var react_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-system */ "./node_modules/react-system/dist/system.esm.js");
/* harmony import */ var _dev_src_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dev-src/hooks */ "./dev-src/hooks.js");
/* harmony import */ var _dev_src_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dev-src/controls */ "./dev-src/controls.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");


var _jsxFileName = "/Users/ice/ext/npm/rgm/pages/react-markers.js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

/**
 * <!-- {"order": 6} -->
 *
 * # React markers
 *
 * Fast, rerendering of markers is not occured during move/zoom operation
 * _(if you dont update state on bounds, etc change events, [see idle quote](/events))_
 *
 * To add custom React marker on map, you need 2 controls _Overlay_ and _Marker_.
 *
 * [Overlay](https://developers.google.com/maps/documentation/javascript/examples/overlay-simple)
 * is needed to place React components inside.
 *
 * _Marker_ is a wrapper around your component
 * to pass _lat_, _lng_ into _Overlay_ in a type safe way wihout touching props of your component.
 *
 * Each marker is rendered inside placeholder with _{ width:0; height:0; display: grid }_ style.
 * This allows to select origin point of marker using only its
 * own css _place-self_, _align-self_, _justify-self_ properties.
 * Also _{ position: absolute }_ on a holder allows everything if grid positioning is not enough.
 *
 * To simplify markers positioning you can use _debug_ propery of _Overlay_ element.
 * It will show exact origin point position.
 *
 * See below how to use _Overlay_ and _Marker_.
 *
 * Also play with _debug_ property to see how you can use
 * css _alignSelf_ , _justifySelf_, _placeSelf_ properties to align different kind of markers.
 * _(For markers with "fun" shape use _position:relative_ and css left, right properties)_
 *
 * > _debug_ property won't work in production builds.
 *
 */




 // https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions


var MAP_OPTIONS = {
  zoom: 9,
  center: {
    lat: 59.936,
    lng: 30.314
  },
  // disable cmd-zoom and 2 fingers zoom I personally dislike it
  gestureHandling: 'greedy',
  clickableIcons: false
};
var __N_SSG = true;
function MarkerPage() {
  var api = Object(_dev_src_hooks__WEBPACK_IMPORTED_MODULE_4__["useGoogleApiLoader"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](true),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      debug = _React$useState2[0],
      setDebug = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('end'),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      alignSelf = _React$useState4[0],
      setAlignSelf = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('center'),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      justifySelf = _React$useState6[0],
      setJustifySelf = _React$useState6[1];

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_system__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    p: 3,
    alignItems: "baseline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
    id: "debug",
    value: debug,
    onChange: setDebug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Debug"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_system__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: '8px',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    value: alignSelf,
    onChange: setAlignSelf,
    options: ['start', 'center', 'end'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_system__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: '8px',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    value: justifySelf,
    onChange: setJustifySelf,
    options: ['start', 'center', 'end'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_5__["Ratio"], {
    value: 3 / 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, api && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_2__["Map"], {
    api: api,
    options: MAP_OPTIONS,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_2__["Overlay"], {
    debug: debug,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    lat: MAP_OPTIONS.center.lat,
    lng: MAP_OPTIONS.center.lng,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(MarkerBottom, {
    style: {
      alignSelf: alignSelf,
      justifySelf: justifySelf // easier to use placeSelf

    },
    size: 48,
    color: 'red',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    lat: MAP_OPTIONS.center.lat + 0.1,
    lng: MAP_OPTIONS.center.lng + 0.3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(MarkerCentered, {
    style: {
      alignSelf: alignSelf,
      justifySelf: justifySelf
    },
    size: 48,
    color: 'Fuchsia',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(rgm__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    lat: MAP_OPTIONS.center.lat - 0.1,
    lng: MAP_OPTIONS.center.lng - 0.3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(MarkerCorner, {
    style: {
      alignSelf: alignSelf,
      justifySelf: justifySelf
    },
    size: 48,
    color: 'OrangeRed',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }))))));
}

var MarkerBottom = function MarkerBottom(_ref) {
  var size = _ref.size,
      color = _ref.color,
      style = _ref.style;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("svg", {
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    height: size,
    width: size,
    viewBox: "2 2 20 20",
    fill: color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 3
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("path", {
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }));
};

var MarkerCentered = function MarkerCentered(_ref2) {
  var size = _ref2.size,
      color = _ref2.color,
      style = _ref2.style;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("svg", {
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    height: size,
    viewBox: "0 0 24 24",
    width: size,
    fill: color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 3
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("path", {
    d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }
  }));
};

var MarkerCorner = function MarkerCorner(_ref3) {
  var size = _ref3.size,
      color = _ref3.color,
      style = _ref3.style;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("svg", {
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    height: size,
    viewBox: "3 3 18 18",
    width: size,
    fill: color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 3
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("path", {
    d: "M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }));
};

/***/ })

})
//# sourceMappingURL=react-markers.js.367cb917d3bcb6f322fe.hot-update.js.map