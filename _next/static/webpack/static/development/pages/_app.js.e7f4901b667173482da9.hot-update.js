webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
false,

/***/ "./node_modules/next/dist/next-server/server/lib/path-match.js":
false,

/***/ "./node_modules/next/dist/next-server/server/router.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-system */ "./node_modules/react-system/dist/system.esm.js");
/* harmony import */ var _dev_src_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dev-src/controls */ "./dev-src/controls.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/ice/ext/npm/rgm/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





var App = function App(_ref) {
  var _pageProps$pageDocs$f, _pageProps$pageDocs, _pageProps$pageDocs2, _pageProps$pageDocs3;

  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      router = _ref.router;
  var pathname = router.pathname.replace(router.basePath, '');
  var doc = (_pageProps$pageDocs$f = (_pageProps$pageDocs = pageProps.pageDocs) === null || _pageProps$pageDocs === void 0 ? void 0 : _pageProps$pageDocs.find(function (pd) {
    return pathname === pd.pathname;
  })) !== null && _pageProps$pageDocs$f !== void 0 ? _pageProps$pageDocs$f : null;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    nav: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_system__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      as: "h3",
      mb: "0.75rem",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, "Examples"), (_pageProps$pageDocs2 = pageProps.pageDocs) === null || _pageProps$pageDocs2 === void 0 ? void 0 : _pageProps$pageDocs2.filter(function (d) {
      return d.order < 100;
    }).map(function (d) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_2__["MenuLink"], {
        key: d.pathname,
        href: d.pathname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }
      }, d.title);
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_system__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      as: "h3",
      mb: "0.75rem",
      mt: "2rem",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, "Tests"), (_pageProps$pageDocs3 = pageProps.pageDocs) === null || _pageProps$pageDocs3 === void 0 ? void 0 : _pageProps$pageDocs3.filter(function (d) {
      return d.order >= 100;
    }).map(function (d) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_2__["MenuLink"], {
        key: d.pathname,
        href: d.pathname,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 15
        }
      }, d.title);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, doc && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_2__["Markdown"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, doc.markdown), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Component, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), doc && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_dev_src_controls__WEBPACK_IMPORTED_MODULE_2__["Code"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, doc.source)));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=_app.js.e7f4901b667173482da9.hot-update.js.map