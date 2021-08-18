self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./containers/Home.jsx":
/*!*****************************!*\
  !*** ./containers/Home.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar/index.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.jsx");
/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/index */ "./components/Header/index.jsx");
/* harmony import */ var _components_Featured_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Featured/index */ "./components/Featured/index.jsx");
/* harmony import */ var _components_About_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/About/index */ "./components/About/index.jsx");
/* harmony import */ var _components_Gallery_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Gallery/index */ "./components/Gallery/index.jsx");
/* harmony import */ var _components_PreLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PreLoader */ "./components/PreLoader/index.jsx");
/* harmony import */ var _hooks_useLocoScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useLocoScroll */ "./hooks/useLocoScroll.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\containers\\Home.jsx",
    _this = undefined,
    _s = $RefreshSig$();











var StyledHome = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.div.withConfig({
  displayName: "Home__StyledHome",
  componentId: "sc-occjov-0"
})(["padding:0 5vw;background-color:#f5f0ec;font-family:\"East Sea Dokdo\",cursive;section{padding:100px 0;}.section_header{margin-bottom:50px;}"]);
_c = StyledHome;

var Home = function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      preloader = _useState[0],
      setPreloader = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3),
      timer = _useState2[0],
      setTimer = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      start = _useState3[0],
      setStart = _useState3[1];

  (0,_hooks_useLocoScroll__WEBPACK_IMPORTED_MODULE_9__.default)();
  var id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var clear = function clear() {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    id.current = window.setInterval(function () {
      setTimer(function (timer) {
        return timer - 1;
      });
    }, 1000);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: preloader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PreLoader__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledHome, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "main-container",
        "data-scroll-container": true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_index__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Featured_index__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About_index__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Gallery_index__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(Home, "9Ap5OcbcMO0IJQ9hoCEAzEBetsw=", false, function () {
  return [_hooks_useLocoScroll__WEBPACK_IMPORTED_MODULE_9__.default];
});

_c2 = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2;

$RefreshReg$(_c, "StyledHome");
$RefreshReg$(_c2, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Ib21lLmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRIb21lIiwic3R5bGVkIiwiSG9tZSIsInVzZVN0YXRlIiwicHJlbG9hZGVyIiwic2V0UHJlbG9hZGVyIiwidGltZXIiLCJzZXRUaW1lciIsInN0YXJ0Iiwic2V0U3RhcnQiLCJ1c2VMb2NvU2Nyb2xsIiwiaWQiLCJ1c2VSZWYiLCJjbGVhciIsIndpbmRvdyIsImNsZWFySW50ZXJ2YWwiLCJjdXJyZW50IiwidXNlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0Msc0VBQUg7QUFBQTtBQUFBO0FBQUEsbUpBQWhCO0tBQU1ELFU7O0FBWU4sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNpQkMsK0NBQVEsQ0FBQyxJQUFELENBRHpCO0FBQUEsTUFDVkMsU0FEVTtBQUFBLE1BQ0NDLFlBREQ7O0FBQUEsbUJBRVNGLCtDQUFRLENBQUMsQ0FBRCxDQUZqQjtBQUFBLE1BRVZHLEtBRlU7QUFBQSxNQUVIQyxRQUZHOztBQUFBLG1CQUdTSiwrQ0FBUSxDQUFDLEtBQUQsQ0FIakI7QUFBQSxNQUdWSyxLQUhVO0FBQUEsTUFHSEMsUUFIRzs7QUFLakJDLCtEQUFhO0FBRWIsTUFBTUMsRUFBRSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBakI7O0FBRUEsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQkMsVUFBTSxDQUFDQyxhQUFQLENBQXFCSixFQUFFLENBQUNLLE9BQXhCO0FBQ0FYLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsR0FIRDs7QUFLQVksa0RBQVMsQ0FBQyxZQUFNO0FBQ2ROLE1BQUUsQ0FBQ0ssT0FBSCxHQUFhRixNQUFNLENBQUNJLFdBQVAsQ0FBbUIsWUFBTTtBQUNwQ1gsY0FBUSxDQUFDLFVBQUNELEtBQUQ7QUFBQSxlQUFXQSxLQUFLLEdBQUcsQ0FBbkI7QUFBQSxPQUFELENBQVI7QUFDRCxLQUZZLEVBRVYsSUFGVSxDQUFiO0FBR0QsR0FKUSxDQUFUO0FBTUFXLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlYLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2ZPLFdBQUs7QUFDTjtBQUNGLEdBSlEsRUFJTixDQUFDUCxLQUFELENBSk0sQ0FBVDtBQU1BLHNCQUNFO0FBQUEsY0FDR0YsU0FBUyxnQkFDUiw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFEsZ0JBR1IsOERBQUMsVUFBRDtBQUFBLDZCQUNFO0FBQUssVUFBRSxFQUFDLGdCQUFSO0FBQXlCLHFDQUF6QjtBQUFBLGdDQUNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0UsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFLRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUUsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosbUJBREY7QUFrQkQsQ0E1Q0Q7O0dBQU1GLEk7VUFLSlEseUQ7OztNQUxJUixJO0FBOENOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUyYTI4NDI1ZjBjOTRjYjVmMGE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4XCI7XHJcbmltcG9ydCBGZWF0dWVyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9GZWF0dXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWJvdXQvaW5kZXhcIjtcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FsbGVyeS9pbmRleFwiO1xyXG5pbXBvcnQgUHJlTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1ByZUxvYWRlclwiO1xyXG5pbXBvcnQgdXNlTG9jb1Njcm9sbCBmcm9tIFwiLi4vaG9va3MvdXNlTG9jb1Njcm9sbFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgU3R5bGVkSG9tZSA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMCA1dnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjBlYztcclxuICBmb250LWZhbWlseTogXCJFYXN0IFNlYSBEb2tkb1wiLCBjdXJzaXZlO1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuICB9XHJcbiAgLnNlY3Rpb25faGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJlbG9hZGVyLCBzZXRQcmVsb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZSgzKTtcclxuICBjb25zdCBbc3RhcnQsIHNldFN0YXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlTG9jb1Njcm9sbCgpO1xyXG5cclxuICBjb25zdCBpZCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpZC5jdXJyZW50KTtcclxuICAgIHNldFByZWxvYWRlcihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlkLmN1cnJlbnQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBzZXRUaW1lcigodGltZXIpID0+IHRpbWVyIC0gMSk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0aW1lciA9PT0gMCkge1xyXG4gICAgICBjbGVhcigpO1xyXG4gICAgfVxyXG4gIH0sIFt0aW1lcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3ByZWxvYWRlciA/IChcclxuICAgICAgICA8UHJlTG9hZGVyPjwvUHJlTG9hZGVyPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxTdHlsZWRIb21lPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGFpbmVyXCIgZGF0YS1zY3JvbGwtY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPEZlYXR1ZXJkIC8+XHJcbiAgICAgICAgICAgIDxBYm91dCAvPlxyXG4gICAgICAgICAgICA8R2FsbGVyeSAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N0eWxlZEhvbWU+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==