self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header/index.jsx":
/*!*************************************!*\
  !*** ./components/Header/index.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Split3.min.js */ "./utils/Split3.min.js");
/* harmony import */ var _utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\Header\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.section.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1yaqwmo-0"
})(["position:relative;& > .header_menu{position:absolute;left:0;top:50px;letter-spacing:1px;font-family:\"Syncopate\",sans-serif;color:#626262;text-transform:uppercase;}& > .header_menu > li{margin:10px 0;}& > .header_text{font-size:15vw;text-transform:uppercase;text-align:center;font-family:\"Bai Jamjuree\",sans-serif;font-weight:600;}"]);
_c = StyledHeader;

var Header = function Header() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var split = new (_utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_1___default())("#header_text", {
      type: "split",
      linesClass: "lineChildren"
    });
    gsap__WEBPACK_IMPORTED_MODULE_4__.default.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2"
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledHeader, {
    "data-scroll-section": true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "header_menu",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Intro"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Vote"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Board"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "header_text",
      id: "header_text",
      children: "PRESIDENT MAKER"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, _this);
};

_s(Header, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c2 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2;

$RefreshReg$(_c, "StyledHeader");
$RefreshReg$(_c2, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbIlN0eWxlZEhlYWRlciIsInN0eWxlZCIsIkhlYWRlciIsInVzZUVmZmVjdCIsInNwbGl0IiwiU3BsaXRUZXh0IiwidHlwZSIsImxpbmVzQ2xhc3MiLCJnc2FwIiwibGluZXMiLCJkdXJhdGlvbiIsInkiLCJvcGFjaXR5Iiwic3RhZ2dlciIsImVhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MseUVBQUg7QUFBQTtBQUFBO0FBQUEsc1ZBQWxCO0tBQU1ELFk7O0FBMEJOLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkJDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBRyxJQUFJQyw2REFBSixDQUFjLGNBQWQsRUFBOEI7QUFDMUNDLFVBQUksRUFBRSxPQURvQztBQUUxQ0MsZ0JBQVUsRUFBRTtBQUY4QixLQUE5QixDQUFkO0FBS0FDLGdEQUFBLENBQVFKLEtBQUssQ0FBQ0ssS0FBZCxFQUFxQjtBQUNuQkMsY0FBUSxFQUFFLENBRFM7QUFFbkJDLE9BQUMsRUFBRSxDQUZnQjtBQUduQkMsYUFBTyxFQUFFLENBSFU7QUFJbkJDLGFBQU8sRUFBRSxHQUpVO0FBS25CQyxVQUFJLEVBQUU7QUFMYSxLQUFyQjtBQU9ELEdBYlEsRUFhTixFQWJNLENBQVQ7QUFlQSxzQkFDRSw4REFBQyxZQUFEO0FBQWMsK0JBQWQ7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUU7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUE0QixRQUFFLEVBQUMsYUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBNUJEOztHQUFNWixNOztNQUFBQSxNO0FBOEJOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA3YTcwZTJiYTI1MGFjMGVhYjVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgU3BsaXRUZXh0IGZyb20gXCIuLi8uLi91dGlscy9TcGxpdDMubWluLmpzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmID4gLmhlYWRlcl9tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU3luY29wYXRlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzYyNjI2MjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAmID4gLmhlYWRlcl9tZW51ID4gbGkge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG5cclxuICAmID4gLmhlYWRlcl90ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTV2dztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJCYWkgSmFtanVyZWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzcGxpdCA9IG5ldyBTcGxpdFRleHQoXCIjaGVhZGVyX3RleHRcIiwge1xyXG4gICAgICB0eXBlOiBcInNwbGl0XCIsXHJcbiAgICAgIGxpbmVzQ2xhc3M6IFwibGluZUNoaWxkcmVuXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBnc2FwLnRvKHNwbGl0LmxpbmVzLCB7XHJcbiAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICB5OiAwLFxyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICBzdGFnZ2VyOiAwLjEsXHJcbiAgICAgIGVhc2U6IFwicG93ZXIyXCIsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkSGVhZGVyIGRhdGEtc2Nyb2xsLXNlY3Rpb24+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfbWVudVwiPlxyXG4gICAgICAgIDxsaT5JbnRybzwvbGk+XHJcbiAgICAgICAgPGxpPlZvdGU8L2xpPlxyXG4gICAgICAgIDxsaT5Cb2FyZDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkZXJfdGV4dFwiIGlkPVwiaGVhZGVyX3RleHRcIj5cclxuICAgICAgICBQUkVTSURFTlQgTUFLRVJcclxuICAgICAgPC9oMT5cclxuICAgIDwvU3R5bGVkSGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=