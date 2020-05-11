webpackHotUpdate("static/development/pages/events.js",{

/***/ "./dev-src/hooks.js":
/*!**************************!*\
  !*** ./dev-src/hooks.js ***!
  \**************************/
/*! exports provided: useScript, useGoogleApiLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScript", function() { return useScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGoogleApiLoader", function() { return useGoogleApiLoader; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var nanoevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nanoevents */ "./node_modules/nanoevents/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var cachedStates = new Map();
var cachedElements = new Map();
var useScript = function useScript(src) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"]('loading'),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    var mounted = true;

    var handleLoad = function handleLoad() {
      cachedStates.set(src, 'done');

      if (mounted) {
        setState('done');
      }
    };

    var handleError = function handleError() {
      cachedStates.set(src, 'failed');

      if (mounted) {
        setState('failed');
      }
    };

    var cachedState = cachedStates.get(src);

    if (cachedState == null) {
      var newElement = document.createElement('script');
      newElement.async = true;
      newElement.defer = true; // $FlowFixMe

      newElement.importance = 'low';
      newElement.src = src;
      newElement.addEventListener('load', handleLoad);
      newElement.addEventListener('error', handleError);
      cachedStates.set(src, 'loading');
      cachedElements.set(src, newElement); // inject to start loading

      if (document.body) {
        document.body.appendChild(newElement);
      }
    }

    if (cachedState === 'loading') {
      var element = cachedElements.get(src);

      if (element) {
        element.addEventListener('load', handleLoad);
        element.addEventListener('error', handleError);
        return function () {
          element.removeEventListener('load', handleLoad);
          element.removeEventListener('error', handleError);
        };
      }
    }

    if (cachedState === 'done') {
      setState('done');
    }

    if (cachedState === 'failed') {
      setState('failed');
    }

    return function () {
      mounted = false;
    };
  }, [src]);
  return state;
};
var map_ = {
  emitter: Object(nanoevents__WEBPACK_IMPORTED_MODULE_1__["createNanoEvents"])(),
  api: null,
  error: null
};

if (true) {
  var head = document.getElementsByTagName('head')[0];
  var insertBefore = head.insertBefore;

  head.insertAfter = function (newElement, referenceElement) {
    console.log('ViewportInfoService.GetViewportInfo');
  }; // Prevent google map load roboto font
  // $FlowFixMe


  head.insertBefore = function (newElement, referenceElement) {
    if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') > -1) {
      return;
    }

    insertBefore.call(head, newElement, referenceElement);
  };

  window.gm_authFailure = function () {
    map_.error = new Error('Gmap encountered auth error. See console for more details.');
    map_.api = null;
    map_.emitter.emit('change');
  };

  window.rgm_mapLoaded = function () {
    if (map_.error == null) {
      map_.api = window.google.maps;
    }

    map_.emitter.emit('change');
  };
}

var alertGuard_ = true;
var useGoogleApiLoader = function useGoogleApiLoader() {
  if ("AIzaSyCKtZKea2BE93LwKPFvhvpcQZBAMqm2Y7Q" == null) {
    throw new Error('You must have GOOGLE_API_KEY environment variable defined');
  }

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](map_.api),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      api = _React$useState4[0],
      setApi = _React$useState4[1];

  var key = "AIzaSyCKtZKea2BE93LwKPFvhvpcQZBAMqm2Y7Q";

  if (key == null) {
    throw new Error('process.env.GOOGLE_API_KEY is not provided');
  }

  var url = "https://maps.googleapis.com/maps/api/js?key=".concat(key, "&libraries=places&callback=rgm_mapLoaded");
  var state = useScript(url);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (api == null && map_.api != null) {
      setApi(map_.api);
    }

    if (state === 'failed') {
      if (true) {
        if (alertGuard_) {
          alert('unable to load script');
          alertGuard_ = false;
        }
      }
    }

    return map_.emitter.on('change', function () {
      setApi(map_.api);

      if ( true && map_.error != null) {
        // In real app its on you how to process this error
        // usually it means that no quota left or your devops is idiot or any other issue
        // report this somehow if needed.
        if (alertGuard_) {
          alert(map_.error.message);
          alertGuard_ = false;
        }
      }
    });
  }, [api, state]);
  return api;
};

/***/ })

})
//# sourceMappingURL=events.js.7bc2bd2ffddded193bfb.hot-update.js.map