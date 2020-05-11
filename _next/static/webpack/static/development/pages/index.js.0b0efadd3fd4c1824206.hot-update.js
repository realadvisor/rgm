webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/google-map.js":
/*!***************************!*\
  !*** ./src/google-map.js ***!
  \***************************/
/*! exports provided: Map, useMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMap\", function() { return useMap; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ice/ext/npm/rgm/src/google-map.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"];\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n// $FlowFixMe\nvar MapContext = react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"](null);\n\nvar warnOnce = function () {\n  var map = {};\n  return function (str) {\n    if (map[str] == null) {\n      map[str] = true;\n      console.warn(str);\n    }\n  };\n}();\n\nvar STYLE = {\n  width: '100%',\n  height: '100%'\n};\nvar Map = react__WEBPACK_IMPORTED_MODULE_2__[\"forwardRef\"](_c = _s(function (_ref, ref) {\n  _s();\n\n  var api = _ref.api,\n      options = _ref.options,\n      children = _ref.children;\n  var element = react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"](null);\n  var firstTimeRef = react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"](true);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"](null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      ctx = _React$useState2[0],\n      setCtx = _React$useState2[1];\n\n  if (true) {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    var apiRef = react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"](api); // eslint-disable-next-line react-hooks/rules-of-hooks\n\n    var optionsRef = react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"](options);\n\n    if (apiRef.current !== api) {\n      warnOnce(\"\\n          api prop has changed.\\n          If it's desired behaviour please remount your component\\n          using key={hash(api)} on your component.\\n        \"); // Reinit map in case use has changed loader in dev\n\n      firstTimeRef.current = true;\n    } // JSON.stringify to work with React Refresh well\n\n\n    if (typeof options !== 'function' && JSON.stringify(optionsRef.current) !== JSON.stringify(options)) {\n      warnOnce(\"\\n          options prop has changed.\\n          If it's desired behaviour please use imperative api, i.e.\\n          mapRef.current.apply(map =>  map.setOptions({...}));\\n        \"); // Reinit map\n\n      firstTimeRef.current = true;\n    }\n  }\n\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useImperativeHandle\"](ref, function () {\n    return ctx ? ctx.map : null;\n  }, [ctx]);\n  react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"](function () {\n    if (firstTimeRef.current && element.current) {\n      var map = new api.Map(element.current, // We clone options object because Google adding new fields into it\n      // this is not an expected behaviour in modern world ;-)\n      _objectSpread({}, typeof options === 'function' ? options(element.current) : options));\n      firstTimeRef.current = false;\n      setCtx({\n        map: map,\n        api: api\n      });\n      return function () {};\n    }\n  }, [api, options]);\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\", {\n    style: STYLE,\n    ref: element,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }), ctx && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(MapContext.Provider, {\n    value: ctx,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 11\n    }\n  }, children));\n}, \"d/nlbQyOHdXC5DtcsNZMguY0MkE=\", false, function () {\n  return [react__WEBPACK_IMPORTED_MODULE_2__[\"useImperativeHandle\"]];\n}));\n_c2 = Map;\nvar useMap = function useMap() {\n  _s2();\n\n  return react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"](MapContext);\n};\n\n_s2(useMap, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Map$React.forwardRef\");\n$RefreshReg$(_c2, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ29vZ2xlLW1hcC5qcz81NWVmIl0sIm5hbWVzIjpbIk1hcENvbnRleHQiLCJSZWFjdCIsIndhcm5PbmNlIiwibWFwIiwic3RyIiwiY29uc29sZSIsIndhcm4iLCJTVFlMRSIsIndpZHRoIiwiaGVpZ2h0IiwiTWFwIiwicmVmIiwiYXBpIiwib3B0aW9ucyIsImNoaWxkcmVuIiwiZWxlbWVudCIsImZpcnN0VGltZVJlZiIsImN0eCIsInNldEN0eCIsImFwaVJlZiIsIm9wdGlvbnNSZWYiLCJjdXJyZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZU1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQW9CQTtBQUNBLElBQU1BLFVBQVUsR0FBR0MsbURBQUEsQ0FBcUMsSUFBckMsQ0FBbkI7O0FBTUEsSUFBTUMsUUFBUSxHQUFJLFlBQU07QUFDdEIsTUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFFQSxTQUFPLFVBQUNDLEdBQUQsRUFBaUI7QUFDdEIsUUFBSUQsR0FBRyxDQUFDQyxHQUFELENBQUgsSUFBWSxJQUFoQixFQUFzQjtBQUNwQkQsU0FBRyxDQUFDQyxHQUFELENBQUgsR0FBVyxJQUFYO0FBQ0FDLGFBQU8sQ0FBQ0MsSUFBUixDQUFhRixHQUFiO0FBQ0Q7QUFDRixHQUxEO0FBTUQsQ0FUZ0IsRUFBakI7O0FBV0EsSUFBTUcsS0FBSyxHQUFHO0FBQUVDLE9BQUssRUFBRSxNQUFUO0FBQWlCQyxRQUFNLEVBQUU7QUFBekIsQ0FBZDtBQUVPLElBQU1DLEdBQUcsR0FBR1QsZ0RBQUEsU0FDakIsZ0JBQTZCVSxHQUE3QixFQUFxQztBQUFBOztBQUFBLE1BQWxDQyxHQUFrQyxRQUFsQ0EsR0FBa0M7QUFBQSxNQUE3QkMsT0FBNkIsUUFBN0JBLE9BQTZCO0FBQUEsTUFBcEJDLFFBQW9CLFFBQXBCQSxRQUFvQjtBQUNuQyxNQUFNQyxPQUFPLEdBQUdkLDRDQUFBLENBQWEsSUFBYixDQUFoQjtBQUNBLE1BQU1lLFlBQVksR0FBR2YsNENBQUEsQ0FBYSxJQUFiLENBQXJCOztBQUZtQyx3QkFHYkEsOENBQUEsQ0FBc0MsSUFBdEMsQ0FIYTtBQUFBO0FBQUEsTUFHNUJnQixHQUg0QjtBQUFBLE1BR3ZCQyxNQUh1Qjs7QUFLbkMsWUFBMkM7QUFDekM7QUFDQSxRQUFNQyxNQUFNLEdBQUdsQiw0Q0FBQSxDQUFhVyxHQUFiLENBQWYsQ0FGeUMsQ0FHekM7O0FBQ0EsUUFBTVEsVUFBVSxHQUFHbkIsNENBQUEsQ0FBYVksT0FBYixDQUFuQjs7QUFFQSxRQUFJTSxNQUFNLENBQUNFLE9BQVAsS0FBbUJULEdBQXZCLEVBQTRCO0FBQzFCVixjQUFRLHNLQUFSLENBRDBCLENBTTFCOztBQUNBYyxrQkFBWSxDQUFDSyxPQUFiLEdBQXVCLElBQXZCO0FBQ0QsS0Fkd0MsQ0FnQnpDOzs7QUFDQSxRQUNFLE9BQU9SLE9BQVAsS0FBbUIsVUFBbkIsSUFDQVMsSUFBSSxDQUFDQyxTQUFMLENBQWVILFVBQVUsQ0FBQ0MsT0FBMUIsTUFBdUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixPQUFmLENBRnpDLEVBR0U7QUFDQVgsY0FBUSx3TEFBUixDQURBLENBTUE7O0FBQ0FjLGtCQUFZLENBQUNLLE9BQWIsR0FBdUIsSUFBdkI7QUFDRDtBQUNGOztBQUVEcEIsMkRBQUEsQ0FBMEJVLEdBQTFCLEVBQStCO0FBQUEsV0FBT00sR0FBRyxHQUFHQSxHQUFHLENBQUNkLEdBQVAsR0FBYSxJQUF2QjtBQUFBLEdBQS9CLEVBQTZELENBQUNjLEdBQUQsQ0FBN0Q7QUFFQWhCLGlEQUFBLENBQWdCLFlBQU07QUFDcEIsUUFBSWUsWUFBWSxDQUFDSyxPQUFiLElBQXdCTixPQUFPLENBQUNNLE9BQXBDLEVBQTZDO0FBQzNDLFVBQU1sQixHQUFHLEdBQUcsSUFBSVMsR0FBRyxDQUFDRixHQUFSLENBQ1ZLLE9BQU8sQ0FBQ00sT0FERSxFQUVWO0FBQ0E7QUFIVSx3QkFLSixPQUFPUixPQUFQLEtBQW1CLFVBQW5CLEdBQ0FBLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDTSxPQUFULENBRFAsR0FFQVIsT0FQSSxFQUFaO0FBV0FHLGtCQUFZLENBQUNLLE9BQWIsR0FBdUIsS0FBdkI7QUFDQUgsWUFBTSxDQUFDO0FBQUVmLFdBQUcsRUFBSEEsR0FBRjtBQUFPUyxXQUFHLEVBQUhBO0FBQVAsT0FBRCxDQUFOO0FBRUEsYUFBTyxZQUFNLENBQUUsQ0FBZjtBQUNEO0FBQ0YsR0FsQkQsRUFrQkcsQ0FBQ0EsR0FBRCxFQUFNQyxPQUFOLENBbEJIO0FBb0JBLFNBQ0UsZ0hBQ0U7QUFBSyxTQUFLLEVBQUVOLEtBQVo7QUFBbUIsT0FBRyxFQUFFUSxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR0UsR0FBRyxJQUNGLDBEQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQXFCLFNBQUssRUFBRUEsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ0gsUUFBbEMsQ0FISixDQURGO0FBUUQsQ0FuRWdCO0FBQUEsVUFxQ2ZiLHlEQXJDZTtBQUFBLEdBQVo7TUFBTVMsRztBQXNFTixJQUFNYyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBOztBQUFBLFNBQU12QixnREFBQSxDQUFpQkQsVUFBakIsQ0FBTjtBQUFBLENBQWY7O0lBQU13QixNIiwiZmlsZSI6Ii4vc3JjL2dvb2dsZS1tYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7XG4gIEdvb2dsZU1hcCxcbiAgR29vZ2xlTWFwT3B0aW9ucyxcbiAgR29vZ2xlTWFwc0FwaSxcbn0gZnJvbSAnLi9nb29nbGUtdHlwZXMuanMnO1xuXG50eXBlIE1hcFByb3BzID0ge3xcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlL21hcCNNYXBPcHRpb25zXG4gIG9wdGlvbnM6IEdvb2dsZU1hcE9wdGlvbnMgfCAoSFRNTERpdkVsZW1lbnQgPT4gR29vZ2xlTWFwT3B0aW9ucyksXG4gIC8vIHdpbmRvdy5nb29nbGUubWFwc1xuICBhcGk6IEdvb2dsZU1hcHNBcGksXG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbnx9O1xuXG50eXBlIE1hcENvbnRleHRUeXBlID0ge3xcbiAgYXBpOiBHb29nbGVNYXBzQXBpLFxuICBtYXA6IEdvb2dsZU1hcCxcbnx9O1xuXG4vLyAkRmxvd0ZpeE1lXG5jb25zdCBNYXBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxNYXBDb250ZXh0VHlwZT4oKG51bGw6IGFueSkpO1xuXG5leHBvcnQgdHlwZSBHb29nbGVNYXBSZWYgPSBSZWFjdC5FbGVtZW50UmVmPFxuICBSZWFjdC5BYnN0cmFjdENvbXBvbmVudDxNYXBQcm9wcywgR29vZ2xlTWFwPixcbj47XG5cbmNvbnN0IHdhcm5PbmNlID0gKCgpID0+IHtcbiAgY29uc3QgbWFwID0ge307XG5cbiAgcmV0dXJuIChzdHI6IHN0cmluZykgPT4ge1xuICAgIGlmIChtYXBbc3RyXSA9PSBudWxsKSB7XG4gICAgICBtYXBbc3RyXSA9IHRydWU7XG4gICAgICBjb25zb2xlLndhcm4oc3RyKTtcbiAgICB9XG4gIH07XG59KSgpO1xuXG5jb25zdCBTVFlMRSA9IHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfTtcblxuZXhwb3J0IGNvbnN0IE1hcCA9IFJlYWN0LmZvcndhcmRSZWY8TWFwUHJvcHMsIEdvb2dsZU1hcD4oXG4gICh7IGFwaSwgb3B0aW9ucywgY2hpbGRyZW4gfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBmaXJzdFRpbWVSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG4gICAgY29uc3QgW2N0eCwgc2V0Q3R4XSA9IFJlYWN0LnVzZVN0YXRlPE1hcENvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICBjb25zdCBhcGlSZWYgPSBSZWFjdC51c2VSZWYoYXBpKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgY29uc3Qgb3B0aW9uc1JlZiA9IFJlYWN0LnVzZVJlZihvcHRpb25zKTtcblxuICAgICAgaWYgKGFwaVJlZi5jdXJyZW50ICE9PSBhcGkpIHtcbiAgICAgICAgd2Fybk9uY2UoYFxuICAgICAgICAgIGFwaSBwcm9wIGhhcyBjaGFuZ2VkLlxuICAgICAgICAgIElmIGl0J3MgZGVzaXJlZCBiZWhhdmlvdXIgcGxlYXNlIHJlbW91bnQgeW91ciBjb21wb25lbnRcbiAgICAgICAgICB1c2luZyBrZXk9e2hhc2goYXBpKX0gb24geW91ciBjb21wb25lbnQuXG4gICAgICAgIGApO1xuICAgICAgICAvLyBSZWluaXQgbWFwIGluIGNhc2UgdXNlIGhhcyBjaGFuZ2VkIGxvYWRlciBpbiBkZXZcbiAgICAgICAgZmlyc3RUaW1lUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBKU09OLnN0cmluZ2lmeSB0byB3b3JrIHdpdGggUmVhY3QgUmVmcmVzaCB3ZWxsXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KG9wdGlvbnNSZWYuY3VycmVudCkgIT09IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpXG4gICAgICApIHtcbiAgICAgICAgd2Fybk9uY2UoYFxuICAgICAgICAgIG9wdGlvbnMgcHJvcCBoYXMgY2hhbmdlZC5cbiAgICAgICAgICBJZiBpdCdzIGRlc2lyZWQgYmVoYXZpb3VyIHBsZWFzZSB1c2UgaW1wZXJhdGl2ZSBhcGksIGkuZS5cbiAgICAgICAgICBtYXBSZWYuY3VycmVudC5hcHBseShtYXAgPT4gIG1hcC5zZXRPcHRpb25zKHsuLi59KSk7XG4gICAgICAgIGApO1xuICAgICAgICAvLyBSZWluaXQgbWFwXG4gICAgICAgIGZpcnN0VGltZVJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKGN0eCA/IGN0eC5tYXAgOiBudWxsKSwgW2N0eF0pO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChmaXJzdFRpbWVSZWYuY3VycmVudCAmJiBlbGVtZW50LmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgbWFwID0gbmV3IGFwaS5NYXAoXG4gICAgICAgICAgZWxlbWVudC5jdXJyZW50LFxuICAgICAgICAgIC8vIFdlIGNsb25lIG9wdGlvbnMgb2JqZWN0IGJlY2F1c2UgR29vZ2xlIGFkZGluZyBuZXcgZmllbGRzIGludG8gaXRcbiAgICAgICAgICAvLyB0aGlzIGlzIG5vdCBhbiBleHBlY3RlZCBiZWhhdmlvdXIgaW4gbW9kZXJuIHdvcmxkIDstKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC4uLih0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICA/IG9wdGlvbnMoZWxlbWVudC5jdXJyZW50KVxuICAgICAgICAgICAgICA6IG9wdGlvbnMpLFxuICAgICAgICAgIH0sXG4gICAgICAgICk7XG5cbiAgICAgICAgZmlyc3RUaW1lUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgc2V0Q3R4KHsgbWFwLCBhcGkgfSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHt9O1xuICAgICAgfVxuICAgIH0sIFthcGksIG9wdGlvbnNdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IHN0eWxlPXtTVFlMRX0gcmVmPXtlbGVtZW50fSAvPlxuICAgICAgICB7Y3R4ICYmIChcbiAgICAgICAgICA8TWFwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y3R4fT57Y2hpbGRyZW59PC9NYXBDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfSxcbik7XG5cbmV4cG9ydCBjb25zdCB1c2VNYXAgPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KE1hcENvbnRleHQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/google-map.js\n");

/***/ })

})