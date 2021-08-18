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
      lineNumber: 53,
      columnNumber: 9
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledHome, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "main-container",
        "data-scroll-container": true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_index__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Featured_index__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About_index__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Gallery_index__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(Home, "p5IDRYhoJubBocE9De8KE3Ixu5U=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9Ib21lLmpzeCJdLCJuYW1lcyI6WyJTdHlsZWRIb21lIiwic3R5bGVkIiwiSG9tZSIsInVzZVN0YXRlIiwicHJlbG9hZGVyIiwic2V0UHJlbG9hZGVyIiwidGltZXIiLCJzZXRUaW1lciIsInVzZUxvY29TY3JvbGwiLCJpZCIsInVzZVJlZiIsImNsZWFyIiwid2luZG93IiwiY2xlYXJJbnRlcnZhbCIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSxtSkFBaEI7S0FBTUQsVTs7QUFZTixJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2lCQywrQ0FBUSxDQUFDLElBQUQsQ0FEekI7QUFBQSxNQUNWQyxTQURVO0FBQUEsTUFDQ0MsWUFERDs7QUFBQSxtQkFFU0YsK0NBQVEsQ0FBQyxDQUFELENBRmpCO0FBQUEsTUFFVkcsS0FGVTtBQUFBLE1BRUhDLFFBRkc7O0FBSWpCQywrREFBYTtBQUViLE1BQU1DLEVBQUUsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQWpCOztBQUVBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEJDLFVBQU0sQ0FBQ0MsYUFBUCxDQUFxQkosRUFBRSxDQUFDSyxPQUF4QjtBQUNBVCxnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEdBSEQ7O0FBS0FVLGtEQUFTLENBQUMsWUFBTTtBQUNkTixNQUFFLENBQUNLLE9BQUgsR0FBYUYsTUFBTSxDQUFDSSxXQUFQLENBQW1CLFlBQU07QUFDcENULGNBQVEsQ0FBQyxVQUFDRCxLQUFEO0FBQUEsZUFBV0EsS0FBSyxHQUFHLENBQW5CO0FBQUEsT0FBRCxDQUFSO0FBQ0QsS0FGWSxFQUVWLElBRlUsQ0FBYjtBQUdELEdBSlEsQ0FBVDtBQU1BUyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJVCxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmSyxXQUFLO0FBQ047QUFDRixHQUpRLEVBSU4sQ0FBQ0wsS0FBRCxDQUpNLENBQVQ7QUFNQSxzQkFDRTtBQUFBLGNBQ0dGLFNBQVMsZ0JBQ1IsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURRLGdCQUdSLDhEQUFDLFVBQUQ7QUFBQSw2QkFDRTtBQUFLLFVBQUUsRUFBQyxnQkFBUjtBQUF5QixxQ0FBekI7QUFBQSxnQ0FDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU1FLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKLG1CQURGO0FBa0JELENBM0NEOztHQUFNRixJO1VBSUpNLHlEOzs7TUFKSU4sSTtBQTZDTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZTgwOTAxNmQxNTczNmQ1NzM0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9pbmRleFwiO1xyXG5pbXBvcnQgRmVhdHVlcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmVhdHVyZWQvaW5kZXhcIjtcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0Fib3V0L2luZGV4XCI7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuLi9jb21wb25lbnRzL0dhbGxlcnkvaW5kZXhcIjtcclxuaW1wb3J0IFByZUxvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9QcmVMb2FkZXJcIjtcclxuaW1wb3J0IHVzZUxvY29TY3JvbGwgZnJvbSBcIi4uL2hvb2tzL3VzZUxvY29TY3JvbGxcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFN0eWxlZEhvbWUgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDAgNXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWYwZWM7XHJcbiAgZm9udC1mYW1pbHk6IFwiRWFzdCBTZWEgRG9rZG9cIiwgY3Vyc2l2ZTtcclxuICBzZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgfVxyXG4gIC5zZWN0aW9uX2hlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3ByZWxvYWRlciwgc2V0UHJlbG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoMyk7XHJcblxyXG4gIHVzZUxvY29TY3JvbGwoKTtcclxuXHJcbiAgY29uc3QgaWQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaWQuY3VycmVudCk7XHJcbiAgICBzZXRQcmVsb2FkZXIoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZC5jdXJyZW50ID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0VGltZXIoKHRpbWVyKSA9PiB0aW1lciAtIDEpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodGltZXIgPT09IDApIHtcclxuICAgICAgY2xlYXIoKTtcclxuICAgIH1cclxuICB9LCBbdGltZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtwcmVsb2FkZXIgPyAoXHJcbiAgICAgICAgPFByZUxvYWRlcj48L1ByZUxvYWRlcj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8U3R5bGVkSG9tZT5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRhaW5lclwiIGRhdGEtc2Nyb2xsLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxGZWF0dWVyZCAvPlxyXG4gICAgICAgICAgICA8QWJvdXQgLz5cclxuICAgICAgICAgICAgPEdhbGxlcnkgLz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TdHlsZWRIb21lPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=