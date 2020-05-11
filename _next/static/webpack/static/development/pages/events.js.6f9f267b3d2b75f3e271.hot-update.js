webpackHotUpdate("static/development/pages/events.js",{

/***/ "./src/react-marker.js":
/*!*****************************!*\
  !*** ./src/react-marker.js ***!
  \*****************************/
/*! exports provided: Marker, Overlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _google_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-map */ "./src/google-map.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");


var _this = undefined,
    _jsxFileName = "/Users/ice/ext/npm/rgm/src/react-marker.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];




var Marker = function Marker(props) {
  return props.children;
};
var Overlay = function Overlay(props) {
  var _useMap = Object(_google_map__WEBPACK_IMPORTED_MODULE_3__["useMap"])(),
      api = _useMap.api,
      map = _useMap.map; // because I have 2 ;-), doesnt matter here, will be set before 1st usage


  var pixelRatioRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](2); // $FlowFixMe no block level $FlowFixMe so splitted on 2 lines

  var anyChildren = react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(props.children || []);
  var children = anyChildren;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      overlay = _React$useState2[0],
      setOverlay = _React$useState2[1];

  var childrenLatLngRefs = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]([]);
  var childrenDivRefs = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]([]);

  var subPixelRound = function subPixelRound(v) {
    return Math.round(v * pixelRatioRef.current) / pixelRatioRef.current;
  }; // We can't use useEffect here because it causes glitches
  // We need ref to access children in draw


  react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"](function () {
    childrenLatLngRefs.current = children;
  }); // Create overlay https://developers.google.com/maps/documentation/javascript/examples/overlay-simple

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (api) {
      pixelRatioRef.current = window.devicePixelRatio;
      var overlayView = new api.OverlayView();
      var elt = null;

      overlayView.onAdd = function () {
        elt = document.createElement('div');
        var panes = overlayView.getPanes(); // on all other panes there is issues with events like hover etc

        panes.floatPane.appendChild(elt);
        setOverlay({
          element: elt,
          view: overlayView
        });
      };

      overlayView.onRemove = function () {
        if (elt != null) {
          var _elt = elt,
              parentNode = _elt.parentNode;

          if (parentNode != null) {
            // same as panes.overlayMouseTarget.removeChild
            parentNode.removeChild(elt);
          }

          setOverlay(null);
        }
      };

      overlayView.draw = function () {
        var projection = overlayView.getProjection();
        var latLngs = childrenLatLngRefs.current;
        latLngs.forEach(function (_ref, index) {
          var _ref$props = _ref.props,
              lat = _ref$props.lat,
              lng = _ref$props.lng;
          var childElt = childrenDivRefs.current[index].current;

          if (childElt != null) {
            var pos = projection.fromLatLngToDivPixel(new api.LatLng(lat, lng)); // Move react markers directly changing dom element position
            // Element is created by us, not by library user, so no issues

            childElt.style.left = subPixelRound(pos.x) + 'px';
            childElt.style.top = subPixelRound(pos.y) + 'px';
          }
        });
      };

      overlayView.setMap(map);
      return function () {
        overlayView.setMap(null);
      };
    }
  }, [api, map]);

  if (overlay != null && children != null && api != null) {
    var projection = overlay.view.getProjection();
    return react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"](children.map(function (ch, index) {
      var pos = projection.fromLatLngToDivPixel(new api.LatLng(ch.props.lat, ch.props.lng)); // Its not a side effect, its just a cache for refs
      // instead of creating it initially like Array(MAX_POSSIBLE_MARKERS), we just extend it here

      if (childrenDivRefs.current[index] == null) {
        childrenDivRefs.current[index] = {
          current: null
        };
      }

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
        key: ch.key,
        ref: childrenDivRefs.current[index],
        style: {
          position: 'absolute',
          left: subPixelRound(pos.x),
          top: subPixelRound(pos.y),
          display: 'grid',
          gridTemplate: '0/0'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      }, ch, ( true) && props.debug === true && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
        style: {
          position: 'absolute',
          borderRadius: '100%',
          width: 4,
          height: 4,
          left: -2,
          top: -2,
          opacity: 0.8,
          boxShadow: '0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }
      }));
    }), overlay.element);
  }

  return null;
};

/***/ })

})
//# sourceMappingURL=events.js.6f9f267b3d2b75f3e271.hot-update.js.map