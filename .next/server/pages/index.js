(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./components/About/index.jsx":
/*!************************************!*\
  !*** ./components/About/index.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SectionHeader */ "./components/SectionHeader/index.jsx");

var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\About\\index.jsx";


const StyledAbout = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "About__StyledAbout",
  componentId: "sc-sa4yf9-0"
})(["p{font-size:70px;line-height:1.12;font-family:\"East Sea Dokdo\",cursive;}"]);

const About = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledAbout, {
    "data-scroll-section": true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionHeader__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "about"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "\uB300\uD55C\uBBFC\uAD6D \uAD70\uB300\uB4E4 \uC9C0\uAE08\uAE4C\uC9C0 \uBB50 \uD588\uB178, \uC774\uAE30 \uB098\uB3C4 \uAD70\uB300 \uAC14\uB2E4 \uC654\uACE0, \uC608\uBE44\uAD70 \uD6C8\uB828\uAE4C\uC9C0 \uB2E4 \uBC1B\uC558\uB294\uB370, \uC2EC\uC2EC\uD558\uBA74 \uC0AC\uB78C\uD55C\uD14C \uC138\uAE08 \uB0B4\uB77C \uD558\uACE0, \uBD88\uB7EC\uB2E4\uAC00 \uBE91\uBE91\uC774 \uB3CC\uB9AC\uACE0 \uD6C8\uB828\uC2DC\uD0A4\uACE0 \uD588\uB294\uB370, \uAC70 \uC704\uC5D0 \uC0AC\uB78C\uB4E4\uC740 \uBB50 \uD588\uC5B4! \uC791\uC804\uD1B5\uC81C\uAD8C \uC790\uAE30\uB4E4 \uB098\uB77C \uC790\uAE30 \uAD70\uB300 \uC791\uC804 \uD1B5\uC81C\uB3C4 \uD55C \uAC1C \uC81C\uB300\uB85C \uD560 \uC218 \uC5C6\uB294 \uAD70\uB300\uB97C \uB9E8\uB4E4\uC5B4 \uB194 \uB193\uACE0 \"\uB098 \uAD6D\uBC29\uC7A5\uAD00\uC774\uC624!\" \"\uB098 \uCC38\uBAA8\uCD1D\uC7A5\uC774\uC624!\" \uADF8\uB807\uAC8C \uBCC4\uB4E4 \uB2EC\uACE0 \uB044\uB4DC\uB7ED(\uAC70\uB4DC\uB7ED)\uAC70\uB9AC\uACE0 \uB9D0\uC558\uB2E4\uB294 \uC598\uAE41\uB2C8\uAE4C? \uADF8\uB798\uC11C \uC791\uD1B5\uAD8C \uD68C\uC218\uD558\uBA74 \uC548 \uB41C\uB2E4\uACE0 \uC904\uC904\uC774 \uBAA8\uC5EC\uAC00 \uAC00\uC9C0\uACE0 \uC131\uBA85 \uB0B4\uACE0. \uC790\uAE30\uB4E4\uC774 \uC9C1\uBB34\uC720\uAE30 \uC544\uC785\uB2C8\uAE4C? (\uBC15\uC218 \uC18C\uB9AC)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/Accordion.jsx":
/*!**********************************!*\
  !*** ./components/Accordion.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\Accordion.jsx";


const menu = [{
  id: '1',
  category: '대분류메뉴1',
  url: '/posts/1'
}, {
  id: '2',
  category: '대분류메뉴2',
  url: '/posts/2'
}, {
  id: '3',
  category: '대분류메뉴3',
  url: '/posts/3'
}, {
  id: '4',
  category: '대분류메뉴4',
  url: '/posts/4'
}, {
  id: '5',
  category: '대분류메뉴5',
  url: '/posts/5'
}];

const Accordion = ({
  visible,
  handleToggle
}) => {
  const handleClick = () => {
    handleToggle();
  };

  const category = menu.map(v => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      onClick: handleClick,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: v.url,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: v.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 68
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 49
      }, undefined)
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }, undefined);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionMenu, {
    flag: visible,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Accordion);
const AccordionMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Accordion__AccordionMenu",
  componentId: "sc-wg3e6s-0"
})(["position:absolute;width:100%;left:0px;top:10vh;z-index:5;background:#fff;padding:7vh 0;display:", ";& > ul{display:flex;flex-direction:column;}& > ul > li{margin-top:20px;text-align:center;}"], props => props.flag ? "block" : "none");

/***/ }),

/***/ "./components/BlogLayout.jsx":
/*!***********************************!*\
  !*** ./components/BlogLayout.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/Header */ "./components/layout/Header.jsx");


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\BlogLayout.jsx";
// import Link from "next/link";
// import NavToggle from "./NavToggle";


const BlogLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer",
      children: "copyright \xA9 all reserved"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (BlogLayout);

/***/ }),

/***/ "./components/Featured/index.jsx":
/*!***************************************!*\
  !*** ./components/Featured/index.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\Featured\\index.jsx";

const StyledFeatured = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "Featured__StyledFeatured",
  componentId: "sc-p1qo75-0"
})(["display:grid;grid-template-columns:1fr 3fr;align-items:center;img{clip-path:inset(0% 0% 0% 0%);}h6{font-size:22px;text-transform:uppercase;font-weight:500;}& > .featured_row_layout,& > .featurd_column_layout{display:grid;gap:10px;}& > .featured_row_layout{grid-template-columns:repeat(2,auto);img{width:100%;object-fit:cover;}}& > .featurd_column_layout{grid-template-columns:100px auto;align-items:flex-end;img{width:100%;height:125vh;object-fit:cover;}h6{transform:translateX(100%) rotate(-90deg);transform-origin:left bottom;justify-self:self-end;}}"]);

const Featured = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledFeatured, {
    "data-scroll-section": true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "featured_row_layout",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        children: "\uC774\uC2B9\uB9CC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/1.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "featurd_column_layout",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
        children: "\uC724\uBCF4\uC120"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/2.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Featured);

/***/ }),

/***/ "./components/Footer/index.jsx":
/*!*************************************!*\
  !*** ./components/Footer/index.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SectionHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SectionHeader */ "./components/SectionHeader/index.jsx");

var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\Footer\\index.jsx";


const StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "Footer__StyledFooter",
  componentId: "sc-lyjclp-0"
})(["text-align:center;padding-bottom:200px;.location{font-size:15vw;text-transform:uppercase;font-family:\"Bodoni Moda\",serif;}"]);

const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledFooter, {
    "data-scroll-section": true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SectionHeader__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Made in"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "location",
      id: "location-text",
      children: "Who is Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Gallery/image.js":
/*!*************************************!*\
  !*** ./components/Gallery/image.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "images": function() { return /* binding */ images; }
/* harmony export */ });
const images = [{
  src: '/1.png',
  title: '이승만',
  term: '1948.07.24 ~ 1960.04.27'
}, {
  src: '/2.png',
  title: '윤보선',
  term: '1960.08.12 ~ 1962.03.22'
}, {
  src: '/3.png',
  title: '박정희',
  term: '1963.12.17 ~ 1979.10.26'
}, {
  src: '/4.png',
  title: '최규하',
  term: '1979.12.06 ~ 1980.08.16'
}, {
  src: '/5.png',
  title: '전두환',
  term: '1980.08.27 ~ 1988.02.24'
}, {
  src: '/6.png',
  title: '노태우',
  term: '1988.02.25 ~ 1993.02.24'
}, {
  src: '/7.png',
  title: '김영삼',
  term: '1993.02.25 ~ 1998.02.24'
}, {
  src: '/8.png',
  title: '김대중',
  term: '1998.02.25 ~ 2003.02.24'
}, {
  src: '/9.png',
  title: '노무현',
  term: '2003.02.25 ~ 2008.02.24'
}, {
  src: '/10.png',
  title: '이명박',
  term: '2008.02.25 ~ 2013.02.24'
}];

/***/ }),

/***/ "./components/Gallery/index.jsx":
/*!**************************************!*\
  !*** ./components/Gallery/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./components/Gallery/image.js");

var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\Gallery\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const StyledGallery = styled_components__WEBPACK_IMPORTED_MODULE_2___default().section.withConfig({
  displayName: "Gallery__StyledGallery",
  componentId: "sc-3evok8-0"
})(["background-color:#d53f41;margin-left:-5vw;margin-right:-5vw;position:relative;.gallery_counter{position:absolute;top:10%;left:100px;z-index:1;mix-blend-mode:difference;line-height:16px;color:#dbd8d6;font-family:\"Bai Jamjuree\",sans-serif;font-weight:600;font-size:16px;display:inline-block;}.divider{content:\"\";background-color:white;width:6.25vw;margin:7px 10px;height:1px;display:inline-block;}.gallery{height:80vh;padding:10vh 0;width:1000%;display:flex;flex-wrap:nowrap;}"]);
const StyledGalleryItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Gallery__StyledGalleryItem",
  componentId: "sc-3evok8-1"
})(["aspect-ratio:16/9;height:100%;display:grid;grid-template-columns:20vw 1fr 200px;width:100vw;.gallery_item{width:100%;height:100%;position:relative;will-change:transform;}.gallery_info{position:absolute;bottom:10%;z-index:1;transform:translateX(-20%);color:#dbd8d6;.gallery_title{line-height:6vw;font-family:\"Bai Jamjuree\";font-weight:600;font-size:6vw;margin-bottom:2vh;}.gallery_term{position:relative;line-height:5vw;font-family:\"Bodoni Moda\";color:transparent;font-weight:400;font-size:5vw;-webkit-text-stroke:2px #dbd8d6;}}.gallery_image{background-size:cover;background-position:center;transform-origin:center;width:50%;height:130%;margin-left:30vw;will-change:transform;transform:scale(1);}"]);

const GalleryItem = ({
  src,
  title,
  term,
  updateActiveImage,
  index
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledGalleryItem, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "gallery_item",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "gallery_info",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "gallery_title",
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "gallery_term",
          children: term
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "gallery_image",
        style: {
          backgroundImage: `url(${src})`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, undefined);
};

const Item = _image__WEBPACK_IMPORTED_MODULE_3__.images.map((image, index) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GalleryItem, _objectSpread(_objectSpread({
    index: index
  }, image), {}, {
    updateActiveImage: index => setActiveImage(index + 1)
  }), index, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, undefined);
});

const Gallery = () => {
  const {
    0: activeImage,
    1: setActiveImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledGallery, {
    "data-scroll-section": true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "gallery",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "gallery_counter",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: activeImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "divider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: _image__WEBPACK_IMPORTED_MODULE_3__.images.length
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined), Item]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./components/Header/index.jsx":
/*!*************************************!*\
  !*** ./components/Header/index.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Split3.min.js */ "./utils/Split3.min.js");
/* harmony import */ var _utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\Header\\index.jsx";




const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default().section.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1yaqwmo-0"
})(["position:relative;& > .header_menu{position:absolute;left:0;top:50px;letter-spacing:1px;font-family:\"Syncopate\",sans-serif;color:#626262;text-transform:uppercase;}& > .header_menu > li{margin:10px 0;}& > .header_text{font-size:15vw;text-transform:uppercase;text-align:center;font-family:\"Bai Jamjuree\",sans-serif;font-weight:600;}.lineParent{overflow:hidden;}.lineChildren{transform:translate(0,500px);}"]);

const Header = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const split = new (_utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_3___default())("#header_text", {
      type: "lines",
      linesClass: "lineChildren"
    });
    const splitParent = new (_utils_Split3_min_js__WEBPACK_IMPORTED_MODULE_3___default())("#header_text", {
      type: "lines",
      linesClass: "lineParent"
    });
    gsap__WEBPACK_IMPORTED_MODULE_2___default().to(split.lines, {
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
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Vote"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: "Board"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "header_text",
      id: "header_text",
      children: "PRESIDENT MAKER"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/NavBar/index.jsx":
/*!*************************************!*\
  !*** ./components/NavBar/index.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\NavBar\\index.jsx";

const StyledNavbar = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "NavBar__StyledNavbar",
  componentId: "sc-q4myw8-0"
})(["display:flex;justify-content:space-between;padding:50px 0;font:24px;letter-spacing:1px;font-family:\"Syncopate\",sans-serif;color:#464646;font-weight:600;text-transform:uppercase;"]);

const NavBar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledNavbar, {
    "data-scroll-section": true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "menu"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "president maker"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: "Login/Join"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/NavToggle.jsx":
/*!**********************************!*\
  !*** ./components/NavToggle.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Accordion */ "./components/Accordion.jsx");

var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\NavToggle.jsx";



const Toggle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "NavToggle__Toggle",
  componentId: "sc-1oox2ki-0"
})(["background:transparent;border-color:transparent;&> .nav-toggle{display:none;}& > .nav-toggle +label{display:block;width:2.5rem;height:2rem;position:relative;cursor:pointer;}&> .nav-toggle+label > span{display:block;position:absolute;width:100%;height:5px;border-radius:30px;background:#000;transition:all .35s;}& > .nav-toggle + label > span:nth-child(1){top:0;}& > .nav-toggle + label > span:nth-child(2){top:50%;transform:translateY(-50%)}& > .nav-toggle + label > span:nth-child(3){bottom:0;}& > .nav-toggle:checked + label > span:nth-child(1){top:50%;transform:translateY(-50%) rotate(45deg);}& > .nav-toggle:checked + label > span:nth-child(2){opacity:0;}& > .nav-toggle:checked + label > span:nth-child(3){bottom:50%;transform:translateY(50%) rotate(-45deg);}"]);

const NavToggle = () => {
  const {
    0: visible,
    1: setVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Toggle, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "checkbox",
      id: "nav-toggle",
      className: "nav-toggle",
      onClick: handleToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      htmlFor: "nav-toggle",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Accordion__WEBPACK_IMPORTED_MODULE_3__.default, {
      visible: visible,
      handleToggle: handleToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NavToggle);

/***/ }),

/***/ "./components/PreLoader/index.jsx":
/*!****************************************!*\
  !*** ./components/PreLoader/index.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\PreLoader\\index.jsx";

const StyledPreLoader = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "PreLoader__StyledPreLoader",
  componentId: "sc-1nnzcal-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#191919;color:#dbd8d6;position:fixed;top:0;bottom:0;right:0;left:0;background-color:black;z-index:1;h1{font-size:3vw;text-transform:uppercase;font-family:\"Bai Jamjuree\",sans-serif;font-weight:600;}h2{font-size:1.5vw;text-transform:uppercase;font-family:\"Bodoni Moda\",sans-serif;font-style:italic;margin-top:10px;}"]);

const PreLoader = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledPreLoader, {
    className: "absolute",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "President Maker"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "since 2021"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PreLoader);

/***/ }),

/***/ "./components/SectionHeader/index.jsx":
/*!********************************************!*\
  !*** ./components/SectionHeader/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\SectionHeader\\index.jsx";

const StyledSectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h6.withConfig({
  displayName: "SectionHeader__StyledSectionHeader",
  componentId: "sc-1741l6v-0"
})(["margin-bottom:50px;text-transform:uppercase;font-weight:600;letter-spacing:1px;font-family:\"Syncopate\",sans-serif;color:#626262;"]);

const SectionHeader = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSectionHeader, {
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SectionHeader);

/***/ }),

/***/ "./components/layout/Header.jsx":
/*!**************************************!*\
  !*** ./components/layout/Header.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavToggle */ "./components/NavToggle.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/context */ "./store/context.jsx");


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\components\\layout\\Header.jsx";





const HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "sc-7vevco-0"
})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 5vw;box-sizing:border-box;border-bottom:1px solid #ddd;width:100vw;"]);
const Gnb = styled_components__WEBPACK_IMPORTED_MODULE_3___default().ul.withConfig({
  displayName: "Header__Gnb",
  componentId: "sc-7vevco-1"
})(["display:flex;flex-direction:row;& > li{margin-left:20px;}@media only screen and (max-width:768px){display:none;}"]);

const Header = () => {
  const globalStore = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_5__.default);
  const {
    IsLogin
  } = globalStore.state;
  console.log(IsLogin);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "\uB85C\uACE0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Gnb, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "HOME"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/posts/post",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "\uAE00\uC4F0\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), IsLogin === false ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/user/login",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "\uB85C\uADF8\uC778"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/user/join",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "\uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, undefined)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/user/login",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "\uB85C\uADF8\uC544\uC6C3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/user/join",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "\uD68C\uC6D0\uC815\uBCF4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, undefined)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavToggle__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./containers/Home.jsx":
/*!*****************************!*\
  !*** ./containers/Home.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar/index.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.jsx");
/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/index */ "./components/Header/index.jsx");
/* harmony import */ var _components_Featured_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Featured/index */ "./components/Featured/index.jsx");
/* harmony import */ var _components_About_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/About/index */ "./components/About/index.jsx");
/* harmony import */ var _components_Gallery_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Gallery/index */ "./components/Gallery/index.jsx");
/* harmony import */ var _components_PreLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PreLoader */ "./components/PreLoader/index.jsx");
/* harmony import */ var _hooks_useLocoScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useLocoScroll */ "./hooks/useLocoScroll.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\containers\\Home.jsx";










const StyledHome = styled_components__WEBPACK_IMPORTED_MODULE_10___default().div.withConfig({
  displayName: "Home__StyledHome",
  componentId: "sc-occjov-0"
})(["padding:0 5vw;background-color:#f5f0ec;font-family:\"East Sea Dokdo\",cursive;section{padding:100px 0;}.section_header{margin-bottom:50px;}"]);

const Home = () => {
  const {
    0: preloader,
    1: setPreloader
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: timer,
    1: setTimer
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);
  (0,_hooks_useLocoScroll__WEBPACK_IMPORTED_MODULE_9__.default)();
  const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: preloader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PreLoader__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledHome, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "main-container",
        "data-scroll-container": true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_index__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Featured_index__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About_index__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Gallery_index__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./hooks/useLocoScroll.jsx":
/*!*********************************!*\
  !*** ./hooks/useLocoScroll.jsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useLocoScroll; }
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LocomotiveScroll = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! locomotive-scroll */ "locomotive-scroll", 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! locomotive-scroll */ "locomotive-scroll")],
    modules: ["..\\hooks\\useLocoScroll.jsx -> " + "locomotive-scroll"]
  }
});
function useLocoScroll(start) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!start) return;
    const scrollEl = document.querySelector("#main-container");
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal"
    });
  }, [start]);
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BlogLayout */ "./components/BlogLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Home */ "./containers/Home.jsx");


var _jsxFileName = "C:\\Users\\kdch0\\Desktop\\sample0816\\front\\pages\\index.jsx";





const Index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_Home__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./store/context.jsx":
/*!***************************!*\
  !*** ./store/context.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  IsLogin: false
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState); //store도 컴포넌트

/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./utils/Split3.min.js":
/*!*****************************!*\
  !*** ./utils/Split3.min.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {

/* eslint-disable */
!function (D, u) {
   true ? u(exports) : 0;
}(this, function (e) {
  "use strict";

  var v = "";

  function m() {
    return String.fromCharCode.apply(null, arguments);
  }

  function p(D) {
    return F.getComputedStyle(D);
  }

  function s(D, u) {
    var e;
    return l(D) ? D : "string" == (e = typeof D) && !u && D ? d.call(Q.querySelectorAll(D), 0) : D && "object" == e && "length" in D ? d.call(D, 0) : D ? [D] : [];
  }

  function t(D) {
    return "absolute" === D.position || !0 === D.absolute;
  }

  function u(D, u) {
    for (var e, t = u.length; -1 < --t;) if (e = u[t], D.substr(0, e.length) === e) return e.length;
  }

  function w(D, u) {
    void 0 === D && (D = "");
    var e = ~D.indexOf("++"),
        t = 1;
    return e && (D = D.split("++").join("")), function () {
      return "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? t++ : "") + "'>" : ">");
    };
  }

  function x(D, u, e) {
    var t = D.nodeType;
    if (1 === t || 9 === t || 11 === t) for (D = D.firstChild; D; D = D.nextSibling) x(D, u, e);else 3 !== t && 4 !== t || (D.nodeValue = D.nodeValue.split(u).join(e));
  }

  function y(D, u) {
    for (var e = u.length; -1 < --e;) D.push(u[e]);
  }

  function z(D, u, e) {
    for (var t; D && D !== u;) {
      if (t = D._next || D.nextSibling) return t.textContent.charAt(0) === e;
      D = D.parentNode || D._parent;
    }
  }

  function A(D) {
    var u,
        e,
        t = s(D.childNodes),
        F = t.length;

    for (u = 0; u < F; u++) (e = t[u])._isSplit ? A(e) : (u && 3 === e.previousSibling.nodeType ? e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue : 3 !== e.nodeType && D.insertBefore(e.firstChild, e), D.removeChild(e));
  }

  function B(D, u) {
    return parseFloat(u[D]) || 0;
  }

  function C(D, u, e, F, C, i, n) {
    var E,
        s,
        r,
        o,
        l,
        d,
        a,
        h,
        f,
        c,
        g,
        m,
        v = p(D),
        w = B("paddingLeft", v),
        S = -999,
        b = B("borderBottomWidth", v) + B("borderTopWidth", v),
        _ = B("borderLeftWidth", v) + B("borderRightWidth", v),
        T = B("paddingTop", v) + B("paddingBottom", v),
        N = B("paddingLeft", v) + B("paddingRight", v),
        L = 0.2 * B("fontSize", v),
        O = v.textAlign,
        W = [],
        H = [],
        V = [],
        j = u.wordDelimiter || " ",
        M = u.tag ? u.tag : u.span ? "span" : "div",
        R = u.type || u.split || "chars,words,lines",
        k = C && ~R.indexOf("lines") ? [] : null,
        P = ~R.indexOf("words"),
        q = ~R.indexOf("chars"),
        G = t(u),
        I = u.linesClass,
        J = ~(I || "").indexOf("++"),
        K = [];

    for (J && (I = I.split("++").join("")), r = (s = D.getElementsByTagName("*")).length, l = [], E = 0; E < r; E++) l[E] = s[E];

    if (k || G) for (E = 0; E < r; E++) ((d = (o = l[E]).parentNode === D) || G || q && !P) && (m = o.offsetTop, k && d && Math.abs(m - S) > L && ("BR" !== o.nodeName || 0 === E) && (a = [], k.push(a), S = m), G && (o._x = o.offsetLeft, o._y = m, o._w = o.offsetWidth, o._h = o.offsetHeight), k && ((o._isSplit && d || !q && d || P && d || !P && o.parentNode.parentNode === D && !o.parentNode._isSplit) && (a.push(o), o._x -= w, z(o, D, j) && (o._wordEnd = !0)), "BR" === o.nodeName && (o.nextSibling && "BR" === o.nextSibling.nodeName || 0 === E) && k.push([])));

    for (E = 0; E < r; E++) d = (o = l[E]).parentNode === D, "BR" !== o.nodeName ? (G && (f = o.style, P || d || (o._x += o.parentNode._x, o._y += o.parentNode._y), f.left = o._x + "px", f.top = o._y + "px", f.position = "absolute", f.display = "block", f.width = o._w + 1 + "px", f.height = o._h + "px"), !P && q ? o._isSplit ? (o._next = o.nextSibling, o.parentNode.appendChild(o)) : o.parentNode._isSplit ? (o._parent = o.parentNode, !o.previousSibling && o.firstChild && (o.firstChild._isFirst = !0), o.nextSibling && " " === o.nextSibling.textContent && !o.nextSibling.nextSibling && K.push(o.nextSibling), o._next = o.nextSibling && o.nextSibling._isFirst ? null : o.nextSibling, o.parentNode.removeChild(o), l.splice(E--, 1), r--) : d || (m = !o.nextSibling && z(o.parentNode, D, j), o.parentNode._parent && o.parentNode._parent.appendChild(o), m && o.parentNode.appendChild(Q.createTextNode(" ")), "span" === M && (o.style.display = "inline"), W.push(o)) : o.parentNode._isSplit && !o._isSplit && "" !== o.innerHTML ? H.push(o) : q && !o._isSplit && ("span" === M && (o.style.display = "inline"), W.push(o))) : k || G ? (o.parentNode && o.parentNode.removeChild(o), l.splice(E--, 1), r--) : P || D.appendChild(o);

    for (E = K.length; -1 < --E;) K[E].parentNode.removeChild(K[E]);

    if (k) {
      for (G && (c = Q.createElement(M), D.appendChild(c), g = c.offsetWidth + "px", m = c.offsetParent === D ? 0 : D.offsetLeft, D.removeChild(c)), f = D.style.cssText, D.style.cssText = "display:none;"; D.firstChild;) D.removeChild(D.firstChild);

      for (h = " " === j && (!G || !P && !q), E = 0; E < k.length; E++) {
        for (a = k[E], (c = Q.createElement(M)).style.cssText = "display:block;text-align:" + O + ";position:" + (G ? "absolute;" : "relative;"), I && (c.className = I + (J ? E + 1 : "")), V.push(c), r = a.length, s = 0; s < r; s++) "BR" !== a[s].nodeName && (o = a[s], c.appendChild(o), h && o._wordEnd && c.appendChild(Q.createTextNode(" ")), G && (0 === s && (c.style.top = o._y + "px", c.style.left = w + m + "px"), o.style.top = "0px", m && (o.style.left = o._x - m + "px")));

        0 === r ? c.innerHTML = "&nbsp;" : P || q || (A(c), x(c, String.fromCharCode(160), " ")), G && (c.style.width = g, c.style.height = o._h + "px"), D.appendChild(c);
      }

      D.style.cssText = f;
    }

    G && (n > D.clientHeight && (D.style.height = n - T + "px", D.clientHeight < n && (D.style.height = n + b + "px")), i > D.clientWidth && (D.style.width = i - N + "px", D.clientWidth < i && (D.style.width = i + _ + "px"))), y(e, W), P && y(F, H), y(C, V);
  }

  function D(D, e, F, C) {
    var i,
        n,
        E,
        s,
        r,
        o,
        l,
        d,
        a = e.tag ? e.tag : e.span ? "span" : "div",
        p = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
        h = t(e),
        B = e.wordDelimiter || " ",
        f = " " !== B ? "" : h ? "&#173; " : " ",
        A = "</" + a + ">",
        c = 1,
        g = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : u : null,
        y = Q.createElement("div"),
        m = D.parentNode;

    for (m.insertBefore(y, D), y.textContent = D.nodeValue, m.removeChild(D), l = -1 !== (i = function getText(D) {
      var u = D.nodeType,
          e = "";

      if (1 === u || 9 === u || 11 === u) {
        if ("string" == typeof D.textContent) return D.textContent;

        for (D = D.firstChild; D; D = D.nextSibling) e += getText(D);
      } else if (3 === u || 4 === u) return D.nodeValue;

      return e;
    }(
    /*!
     * SplitText: 3.0.0
     * https://greensock.com
     *
     * @license Copyright 2008-2019, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    D = y)).indexOf("<"), !1 !== e.reduceWhiteSpace && (i = i.replace(b, " ").replace(S, "")), l && (i = i.split("<").join("{{LT}}")), r = i.length, n = (" " === i.charAt(0) ? f : "") + F(), E = 0; E < r; E++) if (o = i.charAt(E), g && (d = g(i.substr(E), e.specialChars))) o = i.substr(E, d || 1), n += p && " " !== o ? C() + o + "</" + a + ">" : o, E += d - 1;else if (o === B && i.charAt(E - 1) !== B && E) {
      for (n += c ? A : "", c = 0; i.charAt(E + 1) === B;) n += f, E++;

      E === r - 1 ? n += f : ")" !== i.charAt(E + 1) && (n += f + F(), c = 1);
    } else "{" === o && "{{LT}}" === i.substr(E, 6) ? (n += p ? C() + "{{LT}}</" + a + ">" : "{{LT}}", E += 5) : 55296 <= o.charCodeAt(0) && o.charCodeAt(0) <= 56319 || 65024 <= i.charCodeAt(E + 1) && i.charCodeAt(E + 1) <= 65039 ? (s = ((i.substr(E, 12).split(v) || [])[1] || "").length || 2, n += p && " " !== o ? C() + i.substr(E, s) + "</" + a + ">" : i.substr(E, s), E += s - 1) : n += p && " " !== o ? C() + o + "</" + a + ">" : o;

    D.outerHTML = n + (c ? A : ""), l && x(m, "{{LT}}", "<");
  }

  function E(u, e, F, C) {
    var i,
        n,
        r = s(u.childNodes),
        o = r.length,
        l = t(e);

    if (3 !== u.nodeType || 1 < o) {
      for (e.absolute = !1, i = 0; i < o; i++) 3 === (n = r[i]).nodeType && !/\S+/.test(n.nodeValue) || (l && 3 !== n.nodeType && "inline" === p(n).display && (n.style.display = "inline-block", n.style.position = "relative"), n._isSplit = !0, E(n, e, F, C));

      return e.absolute = l, void (u._isSplit = !0);
    }

    D(u, e, F, C);
  }

  var Q,
      F,
      i,
      S = /(?:\r|\n|\t\t)/g,
      b = /(?:\s\s+)/g,
      n = "SplitText",
      r = m(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
      o = true,
      l = Array.isArray,
      d = [].slice,
      a = function () {
    function SplitText(D, u) {
      i || function _initCore() {
        Q = document, F = window, i = 1;
      }(), this.elements = s(D), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = u || {}, o && this.split(u);
    }

    var D = SplitText.prototype;
    return D.split = function split(D) {
      this.isSplit && this.revert(), this.vars = D = D || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;

      for (var u, e, t, F = this.elements.length, i = D.tag ? D.tag : D.span ? "span" : "div", n = w(D.wordsClass, i), s = w(D.charsClass, i); -1 < --F;) t = this.elements[F], this._originals[F] = t.innerHTML, u = t.clientHeight, e = t.clientWidth, E(t, D, n, s), C(t, D, this.chars, this.words, this.lines, e, u);

      return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this;
    }, D.revert = function revert() {
      var e = this._originals;
      if (!e) throw "revert() call wasn't scoped properly.";
      return this.elements.forEach(function (D, u) {
        return D.innerHTML = e[u];
      }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this;
    }, SplitText.create = function create(D, u) {
      return new SplitText(D, u);
    }, SplitText;
  }();

  a.version = "3.0.0", e.SplitText = a, e.default = a, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("gsap");;

/***/ }),

/***/ "locomotive-scroll":
/*!************************************!*\
  !*** external "locomotive-scroll" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("locomotive-scroll");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9jb21wb25lbnRzL0Fib3V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvQWNjb3JkaW9uLmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvQmxvZ0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9jb21wb25lbnRzL0ZlYXR1cmVkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvR2FsbGVyeS9pbWFnZS5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvR2FsbGVyeS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9jb21wb25lbnRzL05hdkJhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9jb21wb25lbnRzL05hdlRvZ2dsZS5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9jb21wb25lbnRzL1ByZUxvYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovL2Zyb250Ly4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL2NvbnRhaW5lcnMvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ob29rcy91c2VMb2NvU2Nyb2xsLmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL2Zyb250Ly4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29udGV4dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi91dGlscy9TcGxpdDMubWluLmpzIiwid2VicGFjazovL2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcImdzYXBcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcImxvY29tb3RpdmUtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvaWdub3JlZHxDOlxcVXNlcnNcXGtkY2gwXFxEZXNrdG9wXFxzYW1wbGUwODE2XFxmcm9udFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIlN0eWxlZEFib3V0Iiwic3R5bGVkIiwiQWJvdXQiLCJtZW51IiwiaWQiLCJjYXRlZ29yeSIsInVybCIsIkFjY29yZGlvbiIsInZpc2libGUiLCJoYW5kbGVUb2dnbGUiLCJoYW5kbGVDbGljayIsIm1hcCIsInYiLCJBY2NvcmRpb25NZW51IiwiU3R5bGVkIiwicHJvcHMiLCJmbGFnIiwiQmxvZ0xheW91dCIsImNoaWxkcmVuIiwiU3R5bGVkRmVhdHVyZWQiLCJGZWF0dXJlZCIsIlN0eWxlZEZvb3RlciIsIkZvb3RlciIsImltYWdlcyIsInNyYyIsInRpdGxlIiwidGVybSIsIlN0eWxlZEdhbGxlcnkiLCJTdHlsZWRHYWxsZXJ5SXRlbSIsIkdhbGxlcnlJdGVtIiwidXBkYXRlQWN0aXZlSW1hZ2UiLCJpbmRleCIsImJhY2tncm91bmRJbWFnZSIsIkl0ZW0iLCJpbWFnZSIsInNldEFjdGl2ZUltYWdlIiwiR2FsbGVyeSIsImFjdGl2ZUltYWdlIiwidXNlU3RhdGUiLCJsZW5ndGgiLCJTdHlsZWRIZWFkZXIiLCJIZWFkZXIiLCJ1c2VFZmZlY3QiLCJzcGxpdCIsIlNwbGl0VGV4dCIsInR5cGUiLCJsaW5lc0NsYXNzIiwic3BsaXRQYXJlbnQiLCJnc2FwIiwibGluZXMiLCJkdXJhdGlvbiIsInkiLCJvcGFjaXR5Iiwic3RhZ2dlciIsImVhc2UiLCJTdHlsZWROYXZiYXIiLCJOYXZCYXIiLCJUb2dnbGUiLCJOYXZUb2dnbGUiLCJzZXRWaXNpYmxlIiwiU3R5bGVkUHJlTG9hZGVyIiwiUHJlTG9hZGVyIiwiU3R5bGVkU2VjdGlvbkhlYWRlciIsIlNlY3Rpb25IZWFkZXIiLCJIZWFkZXJDb250YWluZXIiLCJHbmIiLCJnbG9iYWxTdG9yZSIsInVzZUNvbnRleHQiLCJTdG9yZSIsIklzTG9naW4iLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJTdHlsZWRIb21lIiwiSG9tZSIsInByZWxvYWRlciIsInNldFByZWxvYWRlciIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VMb2NvU2Nyb2xsIiwidXNlUmVmIiwiY2xlYXIiLCJ3aW5kb3ciLCJjbGVhckludGVydmFsIiwiY3VycmVudCIsInNldEludGVydmFsIiwiTG9jb21vdGl2ZVNjcm9sbCIsImR5bmFtaWMiLCJzc3IiLCJzdGFydCIsInNjcm9sbEVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9jb1Njcm9sbCIsImVsIiwic21vb3RoIiwibXVsdGlwbGllciIsImNsYXNzIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJkZWZhdWx0Iiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsInZhbHVlIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsInRlc3QiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzb21lIiwidG9Mb3dlckNhc2UiLCJzcGxpY2UiLCJqb2luIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ4IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiSW5kZXgiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiRCIsInUiLCJhcHBseSIsImFyZ3VtZW50cyIsIkYiLCJnZXRDb21wdXRlZFN0eWxlIiwicyIsImwiLCJkIiwiUSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0IiwicG9zaXRpb24iLCJhYnNvbHV0ZSIsInciLCJub2RlVHlwZSIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsIm5vZGVWYWx1ZSIsInoiLCJfbmV4dCIsInRleHRDb250ZW50IiwicGFyZW50Tm9kZSIsIl9wYXJlbnQiLCJBIiwiY2hpbGROb2RlcyIsIl9pc1NwbGl0IiwicHJldmlvdXNTaWJsaW5nIiwiaW5zZXJ0QmVmb3JlIiwicmVtb3ZlQ2hpbGQiLCJCIiwicGFyc2VGbG9hdCIsIkMiLCJuIiwiRSIsIm8iLCJhIiwiaCIsImYiLCJjIiwiUyIsImIiLCJUIiwiTiIsIkwiLCJPIiwidGV4dEFsaWduIiwiVyIsIkgiLCJWIiwiaiIsIndvcmREZWxpbWl0ZXIiLCJNIiwidGFnIiwic3BhbiIsIlIiLCJrIiwiUCIsInEiLCJHIiwiSSIsIkoiLCJLIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJvZmZzZXRUb3AiLCJhYnMiLCJfeCIsIm9mZnNldExlZnQiLCJfeSIsIl93Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJfd29yZEVuZCIsInN0eWxlIiwibGVmdCIsInRvcCIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsIl9pc0ZpcnN0IiwiY3JlYXRlVGV4dE5vZGUiLCJpbm5lckhUTUwiLCJvZmZzZXRQYXJlbnQiLCJjc3NUZXh0IiwiY2xhc3NOYW1lIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJzcGVjaWFsQ2hhcnMiLCJnZXRUZXh0IiwicmVkdWNlV2hpdGVTcGFjZSIsImNoYXJDb2RlQXQiLCJvdXRlckhUTUwiLCJfaW5pdENvcmUiLCJjaGFycyIsIndvcmRzIiwiX29yaWdpbmFscyIsInZhcnMiLCJpc1NwbGl0IiwicmV2ZXJ0Iiwid29yZHNDbGFzcyIsImNoYXJzQ2xhc3MiLCJyZXZlcnNlIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7O0FDdERBO0FBQ0E7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QUtrc0IsT0FBTCxHQUFlLENBQUMsQ0FOakIsRUFPQSxJQVJGO0FBVUQsS0ExQ0QsRUEyQ0N2c0IsU0FBUyxDQUFDK1QsTUFBVixHQUFtQixTQUFTQSxNQUFULENBQWdCdVMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0FBQ3hDLGFBQU8sSUFBSXZtQixTQUFKLENBQWNzbUIsQ0FBZCxFQUFpQkMsQ0FBakIsQ0FBUDtBQUNELEtBN0NELEVBOENBdm1CLFNBL0NGO0FBaURELEdBaEVHLEVBVk47O0FBMkVDMG9CLEdBQUMsQ0FBQ2tFLE9BQUYsR0FBWSxPQUFiLEVBQ0d6bkIsQ0FBQyxDQUFDbkYsU0FBRixHQUFjMG9CLENBRGpCLEVBRUd2akIsQ0FBQyxDQUFDeUIsT0FBRixHQUFZOGhCLENBRmYsRUFHRXZpQixNQUFNLENBQUNzRyxjQUFQLENBQXNCdEgsQ0FBdEIsRUFBeUIsWUFBekIsRUFBdUM7QUFDckNrRyxTQUFLLEVBQUUsQ0FBQztBQUQ2QixHQUF2QyxDQUhGO0FBTUQsQ0FqY0EsQ0FBRCxDOzs7Ozs7Ozs7OztBQ0RhLGtCQUFrQixNQUFNLHdCQUF3QixrQkFBa0IsMkJBQTJCLHFCQUFxQixnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7OztBQ0RBLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCIuLi9TZWN0aW9uSGVhZGVyXCI7XHJcbmNvbnN0IFN0eWxlZEFib3V0ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xMjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkVhc3QgU2VhIERva2RvXCIsIGN1cnNpdmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRBYm91dCBkYXRhLXNjcm9sbC1zZWN0aW9uPlxyXG4gICAgICA8U2VjdGlvbkhlYWRlciB0aXRsZT1cImFib3V0XCIgLz5cclxuICAgICAgPHA+XHJcbiAgICAgICAg64yA7ZWc66+86rWtIOq1sOuMgOuTpCDsp4DquIjquYzsp4Ag662QIO2WiOuFuCwg7J206riwIOuCmOuPhCDqtbDrjIAg6rCU64ukIOyZlOqzoCwg7JiI67mE6rWwXHJcbiAgICAgICAg7ZuI66Co6rmM7KeAIOuLpCDrsJvslZjripTrjbAsIOyLrOyLrO2VmOuptCDsgqzrnoztlZzthYwg7IS46riIIOuCtOudvCDtlZjqs6AsIOu2iOufrOuLpOqwgCDrupHrupHsnbRcclxuICAgICAgICDrj4zrpqzqs6Ag7ZuI66Co7Iuc7YKk6rOgIO2WiOuKlOuNsCwg6rGwIOychOyXkCDsgqzrnozrk6TsnYAg662QIO2WiOyWtCEg7J6R7KCE7Ya17KCc6raMIOyekOq4sOuTpFxyXG4gICAgICAgIOuCmOudvCDsnpDquLAg6rWw64yAIOyekeyghCDthrXsoJzrj4Qg7ZWcIOqwnCDsoJzrjIDroZwg7ZWgIOyImCDsl4bripQg6rWw64yA66W8IOunqOuTpOyWtCDrhpQg64aT6rOgXHJcbiAgICAgICAgXCLrgpgg6rWt67Cp7J6l6rSA7J207JikIVwiIFwi64KYIOywuOuqqOy0neyepeydtOyYpCFcIiDqt7jroIfqsowg67OE65OkIOuLrOqzoFxyXG4gICAgICAgIOuBhOuTnOufrSjqsbDrk5zrn60p6rGw66as6rOgIOunkOyVmOuLpOuKlCDslpjquYHri4jquYw/IOq3uOuemOyEnCDsnpHthrXqtowg7ZqM7IiY7ZWY66m0IOyViCDrkJzri6Tqs6BcclxuICAgICAgICDspITspITsnbQg66qo7Jes6rCAIOqwgOyngOqzoCDshLHrqoUg64K06rOgLiDsnpDquLDrk6TsnbQg7KeB66y07Jyg6riwIOyVhOyeheuLiOq5jD8gKOuwleyImCDshozrpqwpXHJcbiAgICAgIDwvcD5cclxuICAgIDwvU3R5bGVkQWJvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJpbXBvcnQgU3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IG1lbnUgPSBbXHJcbiAgeyBcclxuICBpZDonMScsIFxyXG4gIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQxJyxcclxuICB1cmw6Jy9wb3N0cy8xJ1xyXG4gIH0sXHJcbiAgeyBcclxuICBpZDonMicsIFxyXG4gIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyxcclxuICB1cmw6Jy9wb3N0cy8yJ1xyXG4gIH0sXHJcbiAgeyBcclxuICBpZDonMycsIFxyXG4gIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQzJyxcclxuICB1cmw6Jy9wb3N0cy8zJ1xyXG4gIH0sXHJcbiAgeyBcclxuICBpZDonNCcsIFxyXG4gIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ0JyxcclxuICB1cmw6Jy9wb3N0cy80J1xyXG4gIH0sXHJcbiAgeyBcclxuICBpZDonNScsIFxyXG4gIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1JyxcclxuICB1cmw6Jy9wb3N0cy81J1xyXG4gIH0sXHJcbl1cclxuXHJcblxyXG5cclxuY29uc3QgQWNjb3JkaW9uID0gKHt2aXNpYmxlLGhhbmRsZVRvZ2dsZX0pID0+IHsgXHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBoYW5kbGVUb2dnbGUoKVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5ID0gbWVudS5tYXAoKHYpPT57IFxyXG4gICAgcmV0dXJuIDxsaSBrZXk9e3YuaWR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48TGluayBocmVmPXt2LnVybH0+PGE+e3YuY2F0ZWdvcnl9PC9hPjwvTGluaz48L2xpPlxyXG4gIH0pXHJcblxyXG4gIFxyXG4gIHJldHVybiAoIFxyXG4gICAgPEFjY29yZGlvbk1lbnUgZmxhZyA9IHt2aXNpYmxlfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICA8L0FjY29yZGlvbk1lbnU+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb25cclxuXHJcblxyXG5jb25zdCBBY2NvcmRpb25NZW51ID0gU3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgdG9wOjEwdmg7XHJcbiAgICB6LWluZGV4OjU7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBwYWRkaW5nOiA3dmggMDtcclxuXHJcbiAgICBkaXNwbGF5OiR7KHByb3BzKSA9PiAocHJvcHMuZmxhZyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiKX07XHJcblxyXG4gICAgJiA+IHVsIHsgXHJcbiAgICAgIGRpc3BsYXk6ZmxleDsgXHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgXHJcbiAgICB9XHJcblxyXG4gICAgJiA+IHVsID4gbGkgeyBcclxuICAgICAgbWFyZ2luLXRvcDoyMHB4OyBcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7IFxyXG4gICAgfVxyXG5gOyIsIi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gaW1wb3J0IE5hdlRvZ2dsZSBmcm9tIFwiLi9OYXZUb2dnbGVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9sYXlvdXQvSGVhZGVyXCI7XHJcblxyXG5jb25zdCBCbG9nTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPmNvcHlyaWdodCAmY29weTsgYWxsIHJlc2VydmVkPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0xheW91dDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFN0eWxlZEZlYXR1cmVkID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaW1nIHtcclxuICAgIGNsaXAtcGF0aDogaW5zZXQoMCUgMCUgMCUgMCUpO1xyXG4gIH1cclxuXHJcbiAgaDYge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAmID4gLmZlYXR1cmVkX3Jvd19sYXlvdXQsXHJcbiAgJiA+IC5mZWF0dXJkX2NvbHVtbl9sYXlvdXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDogMTBweDtcclxuICB9XHJcblxyXG4gICYgPiAuZmVhdHVyZWRfcm93X2xheW91dCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuZmVhdHVyZF9jb2x1bW5fbGF5b3V0IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggYXV0bztcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEyNXZoO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICBoNiB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcbiAgICAgIGp1c3RpZnktc2VsZjogc2VsZi1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRmVhdHVyZWQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRGZWF0dXJlZCBkYXRhLXNjcm9sbC1zZWN0aW9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkX3Jvd19sYXlvdXRcIj5cclxuICAgICAgICA8aDY+7J207Iq566eMPC9oNj5cclxuICAgICAgICA8aW1nIHNyYz1cIi8xLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmRfY29sdW1uX2xheW91dFwiPlxyXG4gICAgICAgIDxoNj7snKTrs7TshKA8L2g2PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLzIucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1N0eWxlZEZlYXR1cmVkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcIi4uL1NlY3Rpb25IZWFkZXJcIjtcclxuXHJcbmNvbnN0IFN0eWxlZEZvb3RlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcblxyXG4gIC5sb2NhdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE1dnc7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQm9kb25pIE1vZGFcIiwgc2VyaWY7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRGb290ZXIgZGF0YS1zY3JvbGwtc2VjdGlvbj5cclxuICAgICAgPFNlY3Rpb25IZWFkZXIgdGl0bGU9XCJNYWRlIGluXCIgLz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImxvY2F0aW9uXCIgaWQ9XCJsb2NhdGlvbi10ZXh0XCI+XHJcbiAgICAgICAgV2hvIGlzIE5leHRcclxuICAgICAgPC9oMT5cclxuICAgIDwvU3R5bGVkRm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImV4cG9ydCBjb25zdCBpbWFnZXMgPSBbXHJcbiAge1xyXG4gICAgc3JjOiAnLzEucG5nJyxcclxuICAgIHRpdGxlOiAn7J207Iq566eMJyxcclxuICAgIHRlcm06ICcxOTQ4LjA3LjI0IH4gMTk2MC4wNC4yNydcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogJy8yLnBuZycsXHJcbiAgICB0aXRsZTogJ+ycpOuztOyEoCcsXHJcbiAgICB0ZXJtOiAnMTk2MC4wOC4xMiB+IDE5NjIuMDMuMjInXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6ICcvMy5wbmcnLFxyXG4gICAgdGl0bGU6ICfrsJXsoJXtnawnLFxyXG4gICAgdGVybTogJzE5NjMuMTIuMTcgfiAxOTc5LjEwLjI2J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiAnLzQucG5nJyxcclxuICAgIHRpdGxlOiAn7LWc6rec7ZWYJyxcclxuICAgIHRlcm06ICcxOTc5LjEyLjA2IH4gMTk4MC4wOC4xNidcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogJy81LnBuZycsXHJcbiAgICB0aXRsZTogJ+yghOuRkO2ZmCcsXHJcbiAgICB0ZXJtOiAnMTk4MC4wOC4yNyB+IDE5ODguMDIuMjQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6ICcvNi5wbmcnLFxyXG4gICAgdGl0bGU6ICfrhbjtg5zsmrAnLFxyXG4gICAgdGVybTogJzE5ODguMDIuMjUgfiAxOTkzLjAyLjI0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiAnLzcucG5nJyxcclxuICAgIHRpdGxlOiAn6rmA7JiB7IK8JyxcclxuICAgIHRlcm06ICcxOTkzLjAyLjI1IH4gMTk5OC4wMi4yNCdcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogJy84LnBuZycsXHJcbiAgICB0aXRsZTogJ+q5gOuMgOykkScsXHJcbiAgICB0ZXJtOiAnMTk5OC4wMi4yNSB+IDIwMDMuMDIuMjQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6ICcvOS5wbmcnLFxyXG4gICAgdGl0bGU6ICfrhbjrrLTtmIQnLFxyXG4gICAgdGVybTogJzIwMDMuMDIuMjUgfiAyMDA4LjAyLjI0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiAnLzEwLnBuZycsXHJcbiAgICB0aXRsZTogJ+ydtOuqheuwlScsXHJcbiAgICB0ZXJtOiAnMjAwOC4wMi4yNSB+IDIwMTMuMDIuMjQnXHJcbiAgfSxcclxuXHJcblxyXG5dIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgaW1hZ2VzIH0gZnJvbSBcIi4vaW1hZ2VcIjtcclxuY29uc3QgU3R5bGVkR2FsbGVyeSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNTNmNDE7XHJcbiAgbWFyZ2luLWxlZnQ6IC01dnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNXZ3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmdhbGxlcnlfY291bnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogI2RiZDhkNjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJhaSBKYW1qdXJlZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5kaXZpZGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA2LjI1dnc7XHJcbiAgICBtYXJnaW46IDdweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZ2FsbGVyeSB7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICBwYWRkaW5nOiAxMHZoIDA7XHJcbiAgICB3aWR0aDogMTAwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkR2FsbGVyeUl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGFzcGVjdC1yYXRpbzogMTYvOTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwdncgMWZyIDIwMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuXHJcbiAgLmdhbGxlcnlfaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgfVxyXG4gIC5nYWxsZXJ5X2luZm8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpO1xyXG4gICAgY29sb3I6ICNkYmQ4ZDY7XHJcblxyXG4gICAgLmdhbGxlcnlfdGl0bGUge1xyXG4gICAgICBsaW5lLWhlaWdodDogNnZ3O1xyXG4gICAgICBmb250LWZhbWlseTogXCJCYWkgSmFtanVyZWVcIjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxuICAgIH1cclxuICAgIC5nYWxsZXJ5X3Rlcm0ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA1dnc7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkJvZG9uaSBNb2RhXCI7XHJcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDJweCAjZGJkOGQ2O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdhbGxlcnlfaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEzMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzB2dztcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdhbGxlcnlJdGVtID0gKHsgc3JjLCB0aXRsZSwgdGVybSwgdXBkYXRlQWN0aXZlSW1hZ2UsIGluZGV4IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEdhbGxlcnlJdGVtPlxyXG4gICAgICA8ZGl2IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9pdGVtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5X2luZm9cIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJnYWxsZXJ5X3RpdGxlXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiZ2FsbGVyeV90ZXJtXCI+e3Rlcm19PC9oNj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJnYWxsZXJ5X2ltYWdlXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3NyY30pYCB9fVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgLz5cclxuICAgIDwvU3R5bGVkR2FsbGVyeUl0ZW0+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEl0ZW0gPSBpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdhbGxlcnlJdGVtXHJcbiAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgey4uLmltYWdlfVxyXG4gICAgICB1cGRhdGVBY3RpdmVJbWFnZT17KGluZGV4KSA9PiBzZXRBY3RpdmVJbWFnZShpbmRleCArIDEpfVxyXG4gICAgLz5cclxuICApO1xyXG59KTtcclxuXHJcbmNvbnN0IEdhbGxlcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUltYWdlLCBzZXRBY3RpdmVJbWFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRHYWxsZXJ5IGRhdGEtc2Nyb2xsLXNlY3Rpb24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeV9jb3VudGVyXCI+XHJcbiAgICAgICAgICA8c3Bhbj57YWN0aXZlSW1hZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcbiAgICAgICAgICA8c3Bhbj57aW1hZ2VzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge0l0ZW19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRHYWxsZXJ5PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgU3BsaXRUZXh0IGZyb20gXCIuLi8uLi91dGlscy9TcGxpdDMubWluLmpzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmID4gLmhlYWRlcl9tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU3luY29wYXRlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzYyNjI2MjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAmID4gLmhlYWRlcl9tZW51ID4gbGkge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG5cclxuICAmID4gLmhlYWRlcl90ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTV2dztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJCYWkgSmFtanVyZWVcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAubGluZVBhcmVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAubGluZUNoaWxkcmVuIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDUwMHB4KTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNwbGl0ID0gbmV3IFNwbGl0VGV4dChcIiNoZWFkZXJfdGV4dFwiLCB7XHJcbiAgICAgIHR5cGU6IFwibGluZXNcIixcclxuICAgICAgbGluZXNDbGFzczogXCJsaW5lQ2hpbGRyZW5cIixcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3BsaXRQYXJlbnQgPSBuZXcgU3BsaXRUZXh0KFwiI2hlYWRlcl90ZXh0XCIsIHtcclxuICAgICAgdHlwZTogXCJsaW5lc1wiLFxyXG4gICAgICBsaW5lc0NsYXNzOiBcImxpbmVQYXJlbnRcIixcclxuICAgIH0pO1xyXG5cclxuICAgIGdzYXAudG8oc3BsaXQubGluZXMsIHtcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIHk6IDAsXHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHN0YWdnZXI6IDAuMSxcclxuICAgICAgZWFzZTogXCJwb3dlcjJcIixcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRIZWFkZXIgZGF0YS1zY3JvbGwtc2VjdGlvbj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlcl9tZW51XCI+XHJcbiAgICAgICAgPGxpPkludHJvPC9saT5cclxuICAgICAgICA8bGk+Vm90ZTwvbGk+XHJcbiAgICAgICAgPGxpPkJvYXJkPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlcl90ZXh0XCIgaWQ9XCJoZWFkZXJfdGV4dFwiPlxyXG4gICAgICAgIFBSRVNJREVOVCBNQUtFUlxyXG4gICAgICA8L2gxPlxyXG4gICAgPC9TdHlsZWRIZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IFN0eWxlZE5hdmJhciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIGZvbnQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LWZhbWlseTogXCJTeW5jb3BhdGVcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzQ2NDY0NjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmA7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWROYXZiYXIgZGF0YS1zY3JvbGwtc2VjdGlvbj5cclxuICAgICAgPGRpdj5tZW51PC9kaXY+XHJcbiAgICAgIDxkaXY+cHJlc2lkZW50IG1ha2VyPC9kaXY+XHJcbiAgICAgIDxkaXY+TG9naW4vSm9pbjwvZGl2PlxyXG4gICAgPC9TdHlsZWROYXZiYXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIiwiaW1wb3J0IFN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi9BY2NvcmRpb25cIjtcclxuXHJcbmNvbnN0IFRvZ2dsZSA9IFN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgJj4gLm5hdi10b2dnbGUgeyBcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9IFxyXG4gICYgPiAubmF2LXRvZ2dsZSArbGFiZWx7IFxyXG4gICAgZGlzcGxheTpibG9jazsgXHJcbiAgICB3aWR0aDoyLjVyZW07IFxyXG4gICAgaGVpZ2h0OjJyZW07IFxyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjsgXHJcbiAgfVxyXG4gICY+IC5uYXYtdG9nZ2xlK2xhYmVsID4gc3BhbiB7IFxyXG4gICAgZGlzcGxheTpibG9jazsgXHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTsgXHJcbiAgICB3aWR0aDoxMDAlOyBcclxuICAgIGhlaWdodDo1cHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czozMHB4OyBcclxuICAgIGJhY2tncm91bmQ6IzAwMDsgXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcclxuICB9XHJcblxyXG4gICYgPiAubmF2LXRvZ2dsZSArIGxhYmVsID4gc3BhbjpudGgtY2hpbGQoMSl7dG9wOjA7fVxyXG5cclxuICAmID4gLm5hdi10b2dnbGUgKyBsYWJlbCA+IHNwYW46bnRoLWNoaWxkKDIpe1xyXG4gICAgdG9wOjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpXHJcbiAgfVxyXG5cclxuICAmID4gLm5hdi10b2dnbGUgKyBsYWJlbCA+IHNwYW46bnRoLWNoaWxkKDMpe2JvdHRvbTowO31cclxuXHJcblxyXG4gICYgPiAubmF2LXRvZ2dsZTpjaGVja2VkICsgbGFiZWwgPiBzcGFuOm50aC1jaGlsZCgxKXtcclxuICAgIHRvcDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpOyBcclxuICB9XHJcblxyXG4gICYgPiAubmF2LXRvZ2dsZTpjaGVja2VkICsgbGFiZWwgPiBzcGFuOm50aC1jaGlsZCgyKXtcclxuICAgIG9wYWNpdHk6MDsgXHJcbiAgfVxyXG5cclxuICAmID4gLm5hdi10b2dnbGU6Y2hlY2tlZCArIGxhYmVsID4gc3BhbjpudGgtY2hpbGQoMyl7XHJcbiAgICAgIGJvdHRvbTo1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSkgcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuXHJcbmNvbnN0IE5hdlRvZ2dsZSA9ICgpID0+IHtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZSghdmlzaWJsZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvZ2dsZT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICBpZD1cIm5hdi10b2dnbGVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdi10b2dnbGVcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cclxuICAgICAgLz5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYXYtdG9nZ2xlXCI+XHJcbiAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxBY2NvcmRpb24gdmlzaWJsZT17dmlzaWJsZX0gaGFuZGxlVG9nZ2xlPXtoYW5kbGVUb2dnbGV9Lz5cclxuICAgICAgXHJcbiAgICA8L1RvZ2dsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2VG9nZ2xlO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgU3R5bGVkUHJlTG9hZGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xyXG4gIGNvbG9yOiAjZGJkOGQ2O1xyXG5cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogM3Z3O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJhaSBKYW1qdXJlZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjV2dztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogXCJCb2RvbmkgTW9kYVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcmVMb2FkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRQcmVMb2FkZXIgY2xhc3NOYW1lPVwiYWJzb2x1dGVcIj5cclxuICAgICAgPGgxPlByZXNpZGVudCBNYWtlcjwvaDE+XHJcbiAgICAgIDxoMj5zaW5jZSAyMDIxPC9oMj5cclxuICAgIDwvU3R5bGVkUHJlTG9hZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmVMb2FkZXI7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBTdHlsZWRTZWN0aW9uSGVhZGVyID0gc3R5bGVkLmg2YFxyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU3luY29wYXRlXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM2MjYyNjI7XHJcbmA7XHJcblxyXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gKHsgdGl0bGUgfSkgPT4ge1xyXG4gIHJldHVybiA8U3R5bGVkU2VjdGlvbkhlYWRlcj57dGl0bGV9PC9TdHlsZWRTZWN0aW9uSGVhZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25IZWFkZXI7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE5hdlRvZ2dsZSBmcm9tIFwiLi4vTmF2VG9nZ2xlXCI7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0b3JlIGZyb20gXCIuLi8uLi9zdG9yZS9jb250ZXh0XCI7XHJcblxyXG5cclxuY29uc3QgSGVhZGVyQ29udGFpbmVyID0gU3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzowIDV2dztcclxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XHJcbiAgICB3aWR0aDoxMDB2dztcclxuYDtcclxuXHJcbmNvbnN0IEduYiA9IFN0eWxlZC51bGBcclxuICAgIC8v66qo67CU7J28XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAmID4gbGkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICB9XHJcbiAgICAvL+uvuOuUlOyWtOy/vOumrCBQQ+uCtOyaqeuTpFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTpub25lOyAgICBcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBnbG9iYWxTdG9yZSA9IHVzZUNvbnRleHQoU3RvcmUpO1xyXG4gIGNvbnN0IHsgSXNMb2dpbiB9ID0gZ2xvYmFsU3RvcmUuc3RhdGU7XHJcbiAgY29uc29sZS5sb2coSXNMb2dpbik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyQ29udGFpbmVyPlxyXG4gICAgICB7Lyog66Gc6rOg7JmAIOuplOuJtCAqL31cclxuICAgICAgPGgxPuuhnOqzoDwvaDE+XHJcbiAgICAgIDxHbmI+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+SE9NRTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvcG9zdFwiPlxyXG4gICAgICAgICAgICA8YT7quIDsk7DquLA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7SXNMb2dpbiA9PT0gZmFsc2UgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICA8YT7roZzqt7jsnbg8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL2pvaW5cIj5cclxuICAgICAgICAgICAgICAgIDxhPu2ajOybkOqwgOyehTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgPGE+66Gc6re47JWE7JuDPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9qb2luXCI+XHJcbiAgICAgICAgICAgICAgICA8YT7tmozsm5DsoJXrs7Q8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9HbmI+XHJcbiAgICAgIDxOYXZUb2dnbGUgLz5cclxuICAgIDwvSGVhZGVyQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXhcIjtcclxuaW1wb3J0IEZlYXR1ZXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0ZlYXR1cmVkL2luZGV4XCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BYm91dC9pbmRleFwiO1xyXG5pbXBvcnQgR2FsbGVyeSBmcm9tIFwiLi4vY29tcG9uZW50cy9HYWxsZXJ5L2luZGV4XCI7XHJcbmltcG9ydCBQcmVMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJlTG9hZGVyXCI7XHJcbmltcG9ydCB1c2VMb2NvU2Nyb2xsIGZyb20gXCIuLi9ob29rcy91c2VMb2NvU2Nyb2xsXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBTdHlsZWRIb21lID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwIDV2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmMGVjO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkVhc3QgU2VhIERva2RvXCIsIGN1cnNpdmU7XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gIH1cclxuICAuc2VjdGlvbl9oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcmVsb2FkZXIsIHNldFByZWxvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdGltZXIsIHNldFRpbWVyXSA9IHVzZVN0YXRlKDMpO1xyXG5cclxuICB1c2VMb2NvU2Nyb2xsKCk7XHJcblxyXG4gIGNvbnN0IGlkID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5jbGVhckludGVydmFsKGlkLmN1cnJlbnQpO1xyXG4gICAgc2V0UHJlbG9hZGVyKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWQuY3VycmVudCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNldFRpbWVyKCh0aW1lcikgPT4gdGltZXIgLSAxKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgIGNsZWFyKCk7XHJcbiAgICB9XHJcbiAgfSwgW3RpbWVyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cHJlbG9hZGVyID8gKFxyXG4gICAgICAgIDxQcmVMb2FkZXI+PC9QcmVMb2FkZXI+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFN0eWxlZEhvbWU+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIiBkYXRhLXNjcm9sbC1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8RmVhdHVlcmQgLz5cclxuICAgICAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgICAgIDxHYWxsZXJ5IC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3R5bGVkSG9tZT5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBMb2NvbW90aXZlU2Nyb2xsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJsb2NvbW90aXZlLXNjcm9sbFwiKSwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTG9jb1Njcm9sbChzdGFydCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN0YXJ0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgbG9jb1Njcm9sbCA9IG5ldyBMb2NvbW90aXZlU2Nyb2xsKHtcclxuICAgICAgZWw6IHNjcm9sbEVsLFxyXG4gICAgICBzbW9vdGg6IHRydWUsXHJcbiAgICAgIG11bHRpcGxpZXI6IDEsXHJcbiAgICAgIGNsYXNzOiBcImlzLXJldmVhbFwiLFxyXG4gICAgfSk7XHJcbiAgfSwgW3N0YXJ0XSk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiaW1wb3J0IEJsb2dMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmxvZ0xheW91dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL2NvbnRhaW5lcnMvSG9tZVwiO1xyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkJsb2c8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8QmxvZ0xheW91dD4gKi99XHJcbiAgICAgIHsvKiA8TGluayBocmVmPVwiL2hhZWp3b1wiPiAqL31cclxuICAgICAgey8qIDxhPu2VtOykmDwvYT4gKi99XHJcbiAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICA8SG9tZSAvPlxyXG4gICAgICB7LyogPC9CbG9nTGF5b3V0PiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBJc0xvZ2luOiBmYWxzZSxcclxufTtcclxuY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7IC8vc3RvcmXrj4Qg7Lu07Y+s64SM7Yq4XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cclxuIShmdW5jdGlvbiAoRCwgdSkge1xyXG4gIFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgbW9kdWxlXHJcbiAgICA/IHUoZXhwb3J0cylcclxuICAgIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZFxyXG4gICAgICA/IGRlZmluZShbXCJleHBvcnRzXCJdLCB1KVxyXG4gICAgICA6IHUoKChEID0gRCB8fCBzZWxmKS53aW5kb3cgPSBELndpbmRvdyB8fCB7fSkpO1xyXG59KSh0aGlzLCBmdW5jdGlvbiAoZSkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG4gIHZhciB2ID0gXCJcIjtcclxuXHJcbiAgZnVuY3Rpb24gbSgpIHtcclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwKEQpIHtcclxuICAgIHJldHVybiBGLmdldENvbXB1dGVkU3R5bGUoRCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzKEQsIHUpIHtcclxuICAgIHZhciBlO1xyXG4gICAgcmV0dXJuIGwoRClcclxuICAgICAgPyBEXHJcbiAgICAgIDogXCJzdHJpbmdcIiA9PSAoZSA9IHR5cGVvZiBEKSAmJiAhdSAmJiBEXHJcbiAgICAgICAgPyBkLmNhbGwoUS5xdWVyeVNlbGVjdG9yQWxsKEQpLCAwKVxyXG4gICAgICAgIDogRCAmJiBcIm9iamVjdFwiID09IGUgJiYgXCJsZW5ndGhcIiBpbiBEXHJcbiAgICAgICAgICA/IGQuY2FsbChELCAwKVxyXG4gICAgICAgICAgOiBEXHJcbiAgICAgICAgICAgID8gW0RdXHJcbiAgICAgICAgICAgIDogW107XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0KEQpIHtcclxuICAgIHJldHVybiBcImFic29sdXRlXCIgPT09IEQucG9zaXRpb24gfHwgITAgPT09IEQuYWJzb2x1dGU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1KEQsIHUpIHtcclxuICAgIGZvciAodmFyIGUsIHQgPSB1Lmxlbmd0aDsgLTEgPCAtLXQ7KVxyXG4gICAgICBpZiAoKChlID0gdVt0XSksIEQuc3Vic3RyKDAsIGUubGVuZ3RoKSA9PT0gZSkpIHJldHVybiBlLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHcoRCwgdSkge1xyXG4gICAgdm9pZCAwID09PSBEICYmIChEID0gXCJcIik7XHJcbiAgICB2YXIgZSA9IH5ELmluZGV4T2YoXCIrK1wiKSxcclxuICAgICAgdCA9IDE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBlICYmIChEID0gRC5zcGxpdChcIisrXCIpLmpvaW4oXCJcIikpLFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIFwiPFwiICtcclxuICAgICAgICAgIHUgK1xyXG4gICAgICAgICAgXCIgc3R5bGU9J3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrOydcIiArXHJcbiAgICAgICAgICAoRCA/IFwiIGNsYXNzPSdcIiArIEQgKyAoZSA/IHQrKyA6IFwiXCIpICsgXCInPlwiIDogXCI+XCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHgoRCwgdSwgZSkge1xyXG4gICAgdmFyIHQgPSBELm5vZGVUeXBlO1xyXG4gICAgaWYgKDEgPT09IHQgfHwgOSA9PT0gdCB8fCAxMSA9PT0gdClcclxuICAgICAgZm9yIChEID0gRC5maXJzdENoaWxkOyBEOyBEID0gRC5uZXh0U2libGluZykgeChELCB1LCBlKTtcclxuICAgIGVsc2UgKDMgIT09IHQgJiYgNCAhPT0gdCkgfHwgKEQubm9kZVZhbHVlID0gRC5ub2RlVmFsdWUuc3BsaXQodSkuam9pbihlKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB5KEQsIHUpIHtcclxuICAgIGZvciAodmFyIGUgPSB1Lmxlbmd0aDsgLTEgPCAtLWU7KSBELnB1c2godVtlXSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB6KEQsIHUsIGUpIHtcclxuICAgIGZvciAodmFyIHQ7IEQgJiYgRCAhPT0gdTspIHtcclxuICAgICAgaWYgKCh0ID0gRC5fbmV4dCB8fCBELm5leHRTaWJsaW5nKSkgcmV0dXJuIHQudGV4dENvbnRlbnQuY2hhckF0KDApID09PSBlO1xyXG4gICAgICBEID0gRC5wYXJlbnROb2RlIHx8IEQuX3BhcmVudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEEoRCkge1xyXG4gICAgdmFyIHUsXHJcbiAgICAgIGUsXHJcbiAgICAgIHQgPSBzKEQuY2hpbGROb2RlcyksXHJcbiAgICAgIEYgPSB0Lmxlbmd0aDtcclxuICAgIGZvciAodSA9IDA7IHUgPCBGOyB1KyspXHJcbiAgICAgIChlID0gdFt1XSkuX2lzU3BsaXRcclxuICAgICAgICA/IEEoZSlcclxuICAgICAgICA6ICh1ICYmIDMgPT09IGUucHJldmlvdXNTaWJsaW5nLm5vZGVUeXBlXHJcbiAgICAgICAgICA/IChlLnByZXZpb3VzU2libGluZy5ub2RlVmFsdWUgKz1cclxuICAgICAgICAgICAgMyA9PT0gZS5ub2RlVHlwZSA/IGUubm9kZVZhbHVlIDogZS5maXJzdENoaWxkLm5vZGVWYWx1ZSlcclxuICAgICAgICAgIDogMyAhPT0gZS5ub2RlVHlwZSAmJiBELmluc2VydEJlZm9yZShlLmZpcnN0Q2hpbGQsIGUpLFxyXG4gICAgICAgICAgRC5yZW1vdmVDaGlsZChlKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBCKEQsIHUpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHVbRF0pIHx8IDA7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBDKEQsIHUsIGUsIEYsIEMsIGksIG4pIHtcclxuICAgIHZhciBFLFxyXG4gICAgICBzLFxyXG4gICAgICByLFxyXG4gICAgICBvLFxyXG4gICAgICBsLFxyXG4gICAgICBkLFxyXG4gICAgICBhLFxyXG4gICAgICBoLFxyXG4gICAgICBmLFxyXG4gICAgICBjLFxyXG4gICAgICBnLFxyXG4gICAgICBtLFxyXG4gICAgICB2ID0gcChEKSxcclxuICAgICAgdyA9IEIoXCJwYWRkaW5nTGVmdFwiLCB2KSxcclxuICAgICAgUyA9IC05OTksXHJcbiAgICAgIGIgPSBCKFwiYm9yZGVyQm90dG9tV2lkdGhcIiwgdikgKyBCKFwiYm9yZGVyVG9wV2lkdGhcIiwgdiksXHJcbiAgICAgIF8gPSBCKFwiYm9yZGVyTGVmdFdpZHRoXCIsIHYpICsgQihcImJvcmRlclJpZ2h0V2lkdGhcIiwgdiksXHJcbiAgICAgIFQgPSBCKFwicGFkZGluZ1RvcFwiLCB2KSArIEIoXCJwYWRkaW5nQm90dG9tXCIsIHYpLFxyXG4gICAgICBOID0gQihcInBhZGRpbmdMZWZ0XCIsIHYpICsgQihcInBhZGRpbmdSaWdodFwiLCB2KSxcclxuICAgICAgTCA9IDAuMiAqIEIoXCJmb250U2l6ZVwiLCB2KSxcclxuICAgICAgTyA9IHYudGV4dEFsaWduLFxyXG4gICAgICBXID0gW10sXHJcbiAgICAgIEggPSBbXSxcclxuICAgICAgViA9IFtdLFxyXG4gICAgICBqID0gdS53b3JkRGVsaW1pdGVyIHx8IFwiIFwiLFxyXG4gICAgICBNID0gdS50YWcgPyB1LnRhZyA6IHUuc3BhbiA/IFwic3BhblwiIDogXCJkaXZcIixcclxuICAgICAgUiA9IHUudHlwZSB8fCB1LnNwbGl0IHx8IFwiY2hhcnMsd29yZHMsbGluZXNcIixcclxuICAgICAgayA9IEMgJiYgflIuaW5kZXhPZihcImxpbmVzXCIpID8gW10gOiBudWxsLFxyXG4gICAgICBQID0gflIuaW5kZXhPZihcIndvcmRzXCIpLFxyXG4gICAgICBxID0gflIuaW5kZXhPZihcImNoYXJzXCIpLFxyXG4gICAgICBHID0gdCh1KSxcclxuICAgICAgSSA9IHUubGluZXNDbGFzcyxcclxuICAgICAgSiA9IH4oSSB8fCBcIlwiKS5pbmRleE9mKFwiKytcIiksXHJcbiAgICAgIEsgPSBbXTtcclxuICAgIGZvciAoXHJcbiAgICAgIEogJiYgKEkgPSBJLnNwbGl0KFwiKytcIikuam9pbihcIlwiKSksXHJcbiAgICAgIHIgPSAocyA9IEQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpKS5sZW5ndGgsXHJcbiAgICAgIGwgPSBbXSxcclxuICAgICAgRSA9IDA7XHJcbiAgICAgIEUgPCByO1xyXG4gICAgICBFKytcclxuICAgIClcclxuICAgICAgbFtFXSA9IHNbRV07XHJcbiAgICBpZiAoayB8fCBHKVxyXG4gICAgICBmb3IgKEUgPSAwOyBFIDwgcjsgRSsrKVxyXG4gICAgICAgICgoZCA9IChvID0gbFtFXSkucGFyZW50Tm9kZSA9PT0gRCkgfHwgRyB8fCAocSAmJiAhUCkpICYmXHJcbiAgICAgICAgICAoKG0gPSBvLm9mZnNldFRvcCksXHJcbiAgICAgICAgICAgIGsgJiZcclxuICAgICAgICAgICAgZCAmJlxyXG4gICAgICAgICAgICBNYXRoLmFicyhtIC0gUykgPiBMICYmXHJcbiAgICAgICAgICAgIChcIkJSXCIgIT09IG8ubm9kZU5hbWUgfHwgMCA9PT0gRSkgJiZcclxuICAgICAgICAgICAgKChhID0gW10pLCBrLnB1c2goYSksIChTID0gbSkpLFxyXG4gICAgICAgICAgICBHICYmXHJcbiAgICAgICAgICAgICgoby5feCA9IG8ub2Zmc2V0TGVmdCksXHJcbiAgICAgICAgICAgICAgKG8uX3kgPSBtKSxcclxuICAgICAgICAgICAgICAoby5fdyA9IG8ub2Zmc2V0V2lkdGgpLFxyXG4gICAgICAgICAgICAgIChvLl9oID0gby5vZmZzZXRIZWlnaHQpKSxcclxuICAgICAgICAgICAgayAmJlxyXG4gICAgICAgICAgICAoKChvLl9pc1NwbGl0ICYmIGQpIHx8XHJcbiAgICAgICAgICAgICAgKCFxICYmIGQpIHx8XHJcbiAgICAgICAgICAgICAgKFAgJiYgZCkgfHxcclxuICAgICAgICAgICAgICAoIVAgJiZcclxuICAgICAgICAgICAgICAgIG8ucGFyZW50Tm9kZS5wYXJlbnROb2RlID09PSBEICYmXHJcbiAgICAgICAgICAgICAgICAhby5wYXJlbnROb2RlLl9pc1NwbGl0KSkgJiZcclxuICAgICAgICAgICAgICAoYS5wdXNoKG8pLCAoby5feCAtPSB3KSwgeihvLCBELCBqKSAmJiAoby5fd29yZEVuZCA9ICEwKSksXHJcbiAgICAgICAgICAgICAgXCJCUlwiID09PSBvLm5vZGVOYW1lICYmXHJcbiAgICAgICAgICAgICAgKChvLm5leHRTaWJsaW5nICYmIFwiQlJcIiA9PT0gby5uZXh0U2libGluZy5ub2RlTmFtZSkgfHwgMCA9PT0gRSkgJiZcclxuICAgICAgICAgICAgICBrLnB1c2goW10pKSk7XHJcbiAgICBmb3IgKEUgPSAwOyBFIDwgcjsgRSsrKVxyXG4gICAgICAoZCA9IChvID0gbFtFXSkucGFyZW50Tm9kZSA9PT0gRCksXHJcbiAgICAgICAgXCJCUlwiICE9PSBvLm5vZGVOYW1lXHJcbiAgICAgICAgICA/IChHICYmXHJcbiAgICAgICAgICAgICgoZiA9IG8uc3R5bGUpLFxyXG4gICAgICAgICAgICAgIFAgfHwgZCB8fCAoKG8uX3ggKz0gby5wYXJlbnROb2RlLl94KSwgKG8uX3kgKz0gby5wYXJlbnROb2RlLl95KSksXHJcbiAgICAgICAgICAgICAgKGYubGVmdCA9IG8uX3ggKyBcInB4XCIpLFxyXG4gICAgICAgICAgICAgIChmLnRvcCA9IG8uX3kgKyBcInB4XCIpLFxyXG4gICAgICAgICAgICAgIChmLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiKSxcclxuICAgICAgICAgICAgICAoZi5kaXNwbGF5ID0gXCJibG9ja1wiKSxcclxuICAgICAgICAgICAgICAoZi53aWR0aCA9IG8uX3cgKyAxICsgXCJweFwiKSxcclxuICAgICAgICAgICAgICAoZi5oZWlnaHQgPSBvLl9oICsgXCJweFwiKSksXHJcbiAgICAgICAgICAgICFQICYmIHFcclxuICAgICAgICAgICAgICA/IG8uX2lzU3BsaXRcclxuICAgICAgICAgICAgICAgID8gKChvLl9uZXh0ID0gby5uZXh0U2libGluZyksIG8ucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChvKSlcclxuICAgICAgICAgICAgICAgIDogby5wYXJlbnROb2RlLl9pc1NwbGl0XHJcbiAgICAgICAgICAgICAgICAgID8gKChvLl9wYXJlbnQgPSBvLnBhcmVudE5vZGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICFvLnByZXZpb3VzU2libGluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG8uZmlyc3RDaGlsZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChvLmZpcnN0Q2hpbGQuX2lzRmlyc3QgPSAhMCksXHJcbiAgICAgICAgICAgICAgICAgICAgby5uZXh0U2libGluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiID09PSBvLm5leHRTaWJsaW5nLnRleHRDb250ZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIW8ubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICBLLnB1c2goby5uZXh0U2libGluZyksXHJcbiAgICAgICAgICAgICAgICAgICAgKG8uX25leHQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgby5uZXh0U2libGluZyAmJiBvLm5leHRTaWJsaW5nLl9pc0ZpcnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG8ubmV4dFNpYmxpbmcpLFxyXG4gICAgICAgICAgICAgICAgICAgIG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKSxcclxuICAgICAgICAgICAgICAgICAgICBsLnNwbGljZShFLS0sIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHItLSlcclxuICAgICAgICAgICAgICAgICAgOiBkIHx8XHJcbiAgICAgICAgICAgICAgICAgICgobSA9ICFvLm5leHRTaWJsaW5nICYmIHooby5wYXJlbnROb2RlLCBELCBqKSksXHJcbiAgICAgICAgICAgICAgICAgICAgby5wYXJlbnROb2RlLl9wYXJlbnQgJiYgby5wYXJlbnROb2RlLl9wYXJlbnQuYXBwZW5kQ2hpbGQobyksXHJcbiAgICAgICAgICAgICAgICAgICAgbSAmJiBvLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoUS5jcmVhdGVUZXh0Tm9kZShcIiBcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiID09PSBNICYmIChvLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBXLnB1c2gobykpXHJcbiAgICAgICAgICAgICAgOiBvLnBhcmVudE5vZGUuX2lzU3BsaXQgJiYgIW8uX2lzU3BsaXQgJiYgXCJcIiAhPT0gby5pbm5lckhUTUxcclxuICAgICAgICAgICAgICAgID8gSC5wdXNoKG8pXHJcbiAgICAgICAgICAgICAgICA6IHEgJiZcclxuICAgICAgICAgICAgICAgICFvLl9pc1NwbGl0ICYmXHJcbiAgICAgICAgICAgICAgICAoXCJzcGFuXCIgPT09IE0gJiYgKG8uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCIpLCBXLnB1c2gobykpKVxyXG4gICAgICAgICAgOiBrIHx8IEdcclxuICAgICAgICAgICAgPyAoby5wYXJlbnROb2RlICYmIG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKSwgbC5zcGxpY2UoRS0tLCAxKSwgci0tKVxyXG4gICAgICAgICAgICA6IFAgfHwgRC5hcHBlbmRDaGlsZChvKTtcclxuICAgIGZvciAoRSA9IEsubGVuZ3RoOyAtMSA8IC0tRTspIEtbRV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChLW0VdKTtcclxuICAgIGlmIChrKSB7XHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgRyAmJlxyXG4gICAgICAgICgoYyA9IFEuY3JlYXRlRWxlbWVudChNKSksXHJcbiAgICAgICAgICBELmFwcGVuZENoaWxkKGMpLFxyXG4gICAgICAgICAgKGcgPSBjLm9mZnNldFdpZHRoICsgXCJweFwiKSxcclxuICAgICAgICAgIChtID0gYy5vZmZzZXRQYXJlbnQgPT09IEQgPyAwIDogRC5vZmZzZXRMZWZ0KSxcclxuICAgICAgICAgIEQucmVtb3ZlQ2hpbGQoYykpLFxyXG4gICAgICAgIGYgPSBELnN0eWxlLmNzc1RleHQsXHJcbiAgICAgICAgRC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5Om5vbmU7XCI7XHJcbiAgICAgICAgRC5maXJzdENoaWxkO1xyXG5cclxuICAgICAgKVxyXG4gICAgICAgIEQucmVtb3ZlQ2hpbGQoRC5maXJzdENoaWxkKTtcclxuICAgICAgZm9yIChoID0gXCIgXCIgPT09IGogJiYgKCFHIHx8ICghUCAmJiAhcSkpLCBFID0gMDsgRSA8IGsubGVuZ3RoOyBFKyspIHtcclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgYSA9IGtbRV0sXHJcbiAgICAgICAgICAoYyA9IFEuY3JlYXRlRWxlbWVudChNKSkuc3R5bGUuY3NzVGV4dCA9XHJcbiAgICAgICAgICBcImRpc3BsYXk6YmxvY2s7dGV4dC1hbGlnbjpcIiArXHJcbiAgICAgICAgICBPICtcclxuICAgICAgICAgIFwiO3Bvc2l0aW9uOlwiICtcclxuICAgICAgICAgIChHID8gXCJhYnNvbHV0ZTtcIiA6IFwicmVsYXRpdmU7XCIpLFxyXG4gICAgICAgICAgSSAmJiAoYy5jbGFzc05hbWUgPSBJICsgKEogPyBFICsgMSA6IFwiXCIpKSxcclxuICAgICAgICAgIFYucHVzaChjKSxcclxuICAgICAgICAgIHIgPSBhLmxlbmd0aCxcclxuICAgICAgICAgIHMgPSAwO1xyXG4gICAgICAgICAgcyA8IHI7XHJcbiAgICAgICAgICBzKytcclxuICAgICAgICApXHJcbiAgICAgICAgICBcIkJSXCIgIT09IGFbc10ubm9kZU5hbWUgJiZcclxuICAgICAgICAgICAgKChvID0gYVtzXSksXHJcbiAgICAgICAgICAgICAgYy5hcHBlbmRDaGlsZChvKSxcclxuICAgICAgICAgICAgICBoICYmIG8uX3dvcmRFbmQgJiYgYy5hcHBlbmRDaGlsZChRLmNyZWF0ZVRleHROb2RlKFwiIFwiKSksXHJcbiAgICAgICAgICAgICAgRyAmJlxyXG4gICAgICAgICAgICAgICgwID09PSBzICYmXHJcbiAgICAgICAgICAgICAgICAoKGMuc3R5bGUudG9wID0gby5feSArIFwicHhcIiksIChjLnN0eWxlLmxlZnQgPSB3ICsgbSArIFwicHhcIikpLFxyXG4gICAgICAgICAgICAgICAgKG8uc3R5bGUudG9wID0gXCIwcHhcIiksXHJcbiAgICAgICAgICAgICAgICBtICYmIChvLnN0eWxlLmxlZnQgPSBvLl94IC0gbSArIFwicHhcIikpKTtcclxuICAgICAgICAwID09PSByXHJcbiAgICAgICAgICA/IChjLmlubmVySFRNTCA9IFwiJm5ic3A7XCIpXHJcbiAgICAgICAgICA6IFAgfHwgcSB8fCAoQShjKSwgeChjLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDE2MCksIFwiIFwiKSksXHJcbiAgICAgICAgICBHICYmICgoYy5zdHlsZS53aWR0aCA9IGcpLCAoYy5zdHlsZS5oZWlnaHQgPSBvLl9oICsgXCJweFwiKSksXHJcbiAgICAgICAgICBELmFwcGVuZENoaWxkKGMpO1xyXG4gICAgICB9XHJcbiAgICAgIEQuc3R5bGUuY3NzVGV4dCA9IGY7XHJcbiAgICB9XHJcbiAgICBHICYmXHJcbiAgICAgIChuID4gRC5jbGllbnRIZWlnaHQgJiZcclxuICAgICAgICAoKEQuc3R5bGUuaGVpZ2h0ID0gbiAtIFQgKyBcInB4XCIpLFxyXG4gICAgICAgICAgRC5jbGllbnRIZWlnaHQgPCBuICYmIChELnN0eWxlLmhlaWdodCA9IG4gKyBiICsgXCJweFwiKSksXHJcbiAgICAgICAgaSA+IEQuY2xpZW50V2lkdGggJiZcclxuICAgICAgICAoKEQuc3R5bGUud2lkdGggPSBpIC0gTiArIFwicHhcIiksXHJcbiAgICAgICAgICBELmNsaWVudFdpZHRoIDwgaSAmJiAoRC5zdHlsZS53aWR0aCA9IGkgKyBfICsgXCJweFwiKSkpLFxyXG4gICAgICB5KGUsIFcpLFxyXG4gICAgICBQICYmIHkoRiwgSCksXHJcbiAgICAgIHkoQywgVik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBEKEQsIGUsIEYsIEMpIHtcclxuICAgIHZhciBpLFxyXG4gICAgICBuLFxyXG4gICAgICBFLFxyXG4gICAgICBzLFxyXG4gICAgICByLFxyXG4gICAgICBvLFxyXG4gICAgICBsLFxyXG4gICAgICBkLFxyXG4gICAgICBhID0gZS50YWcgPyBlLnRhZyA6IGUuc3BhbiA/IFwic3BhblwiIDogXCJkaXZcIixcclxuICAgICAgcCA9IH4oZS50eXBlIHx8IGUuc3BsaXQgfHwgXCJjaGFycyx3b3JkcyxsaW5lc1wiKS5pbmRleE9mKFwiY2hhcnNcIiksXHJcbiAgICAgIGggPSB0KGUpLFxyXG4gICAgICBCID0gZS53b3JkRGVsaW1pdGVyIHx8IFwiIFwiLFxyXG4gICAgICBmID0gXCIgXCIgIT09IEIgPyBcIlwiIDogaCA/IFwiJiMxNzM7IFwiIDogXCIgXCIsXHJcbiAgICAgIEEgPSBcIjwvXCIgKyBhICsgXCI+XCIsXHJcbiAgICAgIGMgPSAxLFxyXG4gICAgICBnID0gZS5zcGVjaWFsQ2hhcnNcclxuICAgICAgICA/IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5zcGVjaWFsQ2hhcnNcclxuICAgICAgICAgID8gZS5zcGVjaWFsQ2hhcnNcclxuICAgICAgICAgIDogdVxyXG4gICAgICAgIDogbnVsbCxcclxuICAgICAgeSA9IFEuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgbSA9IEQucGFyZW50Tm9kZTtcclxuICAgIGZvciAoXHJcbiAgICAgIG0uaW5zZXJ0QmVmb3JlKHksIEQpLFxyXG4gICAgICB5LnRleHRDb250ZW50ID0gRC5ub2RlVmFsdWUsXHJcbiAgICAgIG0ucmVtb3ZlQ2hpbGQoRCksXHJcbiAgICAgIGwgPVxyXG4gICAgICAtMSAhPT1cclxuICAgICAgKGkgPSAoZnVuY3Rpb24gZ2V0VGV4dChEKSB7XHJcbiAgICAgICAgdmFyIHUgPSBELm5vZGVUeXBlLFxyXG4gICAgICAgICAgZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKDEgPT09IHUgfHwgOSA9PT0gdSB8fCAxMSA9PT0gdSkge1xyXG4gICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIEQudGV4dENvbnRlbnQpIHJldHVybiBELnRleHRDb250ZW50O1xyXG4gICAgICAgICAgZm9yIChEID0gRC5maXJzdENoaWxkOyBEOyBEID0gRC5uZXh0U2libGluZykgZSArPSBnZXRUZXh0KEQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoMyA9PT0gdSB8fCA0ID09PSB1KSByZXR1cm4gRC5ub2RlVmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgIH0pKFxyXG4gICAgICAgIC8qIVxyXG4gICAgICAgICAqIFNwbGl0VGV4dDogMy4wLjBcclxuICAgICAgICAgKiBodHRwczovL2dyZWVuc29jay5jb21cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDA4LTIwMTksIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgICAgICAgKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcclxuICAgICAgICAgKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cclxuICAgICAgICAgKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cclxuICAgICAgICAgKi9cclxuICAgICAgICAoRCA9IHkpXHJcbiAgICAgICkpLmluZGV4T2YoXCI8XCIpLFxyXG4gICAgICAhMSAhPT0gZS5yZWR1Y2VXaGl0ZVNwYWNlICYmIChpID0gaS5yZXBsYWNlKGIsIFwiIFwiKS5yZXBsYWNlKFMsIFwiXCIpKSxcclxuICAgICAgbCAmJiAoaSA9IGkuc3BsaXQoXCI8XCIpLmpvaW4oXCJ7e0xUfX1cIikpLFxyXG4gICAgICByID0gaS5sZW5ndGgsXHJcbiAgICAgIG4gPSAoXCIgXCIgPT09IGkuY2hhckF0KDApID8gZiA6IFwiXCIpICsgRigpLFxyXG4gICAgICBFID0gMDtcclxuICAgICAgRSA8IHI7XHJcbiAgICAgIEUrK1xyXG4gICAgKVxyXG4gICAgICBpZiAoKChvID0gaS5jaGFyQXQoRSkpLCBnICYmIChkID0gZyhpLnN1YnN0cihFKSwgZS5zcGVjaWFsQ2hhcnMpKSkpXHJcbiAgICAgICAgKG8gPSBpLnN1YnN0cihFLCBkIHx8IDEpKSxcclxuICAgICAgICAgIChuICs9IHAgJiYgXCIgXCIgIT09IG8gPyBDKCkgKyBvICsgXCI8L1wiICsgYSArIFwiPlwiIDogbyksXHJcbiAgICAgICAgICAoRSArPSBkIC0gMSk7XHJcbiAgICAgIGVsc2UgaWYgKG8gPT09IEIgJiYgaS5jaGFyQXQoRSAtIDEpICE9PSBCICYmIEUpIHtcclxuICAgICAgICBmb3IgKG4gKz0gYyA/IEEgOiBcIlwiLCBjID0gMDsgaS5jaGFyQXQoRSArIDEpID09PSBCOykgKG4gKz0gZiksIEUrKztcclxuICAgICAgICBFID09PSByIC0gMVxyXG4gICAgICAgICAgPyAobiArPSBmKVxyXG4gICAgICAgICAgOiBcIilcIiAhPT0gaS5jaGFyQXQoRSArIDEpICYmICgobiArPSBmICsgRigpKSwgKGMgPSAxKSk7XHJcbiAgICAgIH0gZWxzZVxyXG4gICAgICAgIFwie1wiID09PSBvICYmIFwie3tMVH19XCIgPT09IGkuc3Vic3RyKEUsIDYpXHJcbiAgICAgICAgICA/ICgobiArPSBwID8gQygpICsgXCJ7e0xUfX08L1wiICsgYSArIFwiPlwiIDogXCJ7e0xUfX1cIiksIChFICs9IDUpKVxyXG4gICAgICAgICAgOiAoNTUyOTYgPD0gby5jaGFyQ29kZUF0KDApICYmIG8uY2hhckNvZGVBdCgwKSA8PSA1NjMxOSkgfHxcclxuICAgICAgICAgICAgKDY1MDI0IDw9IGkuY2hhckNvZGVBdChFICsgMSkgJiYgaS5jaGFyQ29kZUF0KEUgKyAxKSA8PSA2NTAzOSlcclxuICAgICAgICAgICAgPyAoKHMgPSAoKGkuc3Vic3RyKEUsIDEyKS5zcGxpdCh2KSB8fCBbXSlbMV0gfHwgXCJcIikubGVuZ3RoIHx8IDIpLFxyXG4gICAgICAgICAgICAgIChuICs9XHJcbiAgICAgICAgICAgICAgICBwICYmIFwiIFwiICE9PSBvXHJcbiAgICAgICAgICAgICAgICAgID8gQygpICsgaS5zdWJzdHIoRSwgcykgKyBcIjwvXCIgKyBhICsgXCI+XCJcclxuICAgICAgICAgICAgICAgICAgOiBpLnN1YnN0cihFLCBzKSksXHJcbiAgICAgICAgICAgICAgKEUgKz0gcyAtIDEpKVxyXG4gICAgICAgICAgICA6IChuICs9IHAgJiYgXCIgXCIgIT09IG8gPyBDKCkgKyBvICsgXCI8L1wiICsgYSArIFwiPlwiIDogbyk7XHJcbiAgICAoRC5vdXRlckhUTUwgPSBuICsgKGMgPyBBIDogXCJcIikpLCBsICYmIHgobSwgXCJ7e0xUfX1cIiwgXCI8XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRSh1LCBlLCBGLCBDKSB7XHJcbiAgICB2YXIgaSxcclxuICAgICAgbixcclxuICAgICAgciA9IHModS5jaGlsZE5vZGVzKSxcclxuICAgICAgbyA9IHIubGVuZ3RoLFxyXG4gICAgICBsID0gdChlKTtcclxuICAgIGlmICgzICE9PSB1Lm5vZGVUeXBlIHx8IDEgPCBvKSB7XHJcbiAgICAgIGZvciAoZS5hYnNvbHV0ZSA9ICExLCBpID0gMDsgaSA8IG87IGkrKylcclxuICAgICAgICAoMyA9PT0gKG4gPSByW2ldKS5ub2RlVHlwZSAmJiAhL1xcUysvLnRlc3Qobi5ub2RlVmFsdWUpKSB8fFxyXG4gICAgICAgICAgKGwgJiZcclxuICAgICAgICAgICAgMyAhPT0gbi5ub2RlVHlwZSAmJlxyXG4gICAgICAgICAgICBcImlubGluZVwiID09PSBwKG4pLmRpc3BsYXkgJiZcclxuICAgICAgICAgICAgKChuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiKSxcclxuICAgICAgICAgICAgICAobi5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIikpLFxyXG4gICAgICAgICAgICAobi5faXNTcGxpdCA9ICEwKSxcclxuICAgICAgICAgICAgRShuLCBlLCBGLCBDKSk7XHJcbiAgICAgIHJldHVybiAoZS5hYnNvbHV0ZSA9IGwpLCB2b2lkICh1Ll9pc1NwbGl0ID0gITApO1xyXG4gICAgfVxyXG4gICAgRCh1LCBlLCBGLCBDKTtcclxuICB9XHJcbiAgdmFyIFEsXHJcbiAgICBGLFxyXG4gICAgaSxcclxuICAgIFMgPSAvKD86XFxyfFxcbnxcXHRcXHQpL2csXHJcbiAgICBiID0gLyg/Olxcc1xccyspL2csXHJcbiAgICBuID0gXCJTcGxpdFRleHRcIixcclxuICAgIHIgPSBtKDEwMywgMTE0LCAxMDEsIDEwMSwgMTEwLCAxMTUsIDExMSwgOTksIDEwNywgNDYsIDk5LCAxMTEsIDEwOSksXHJcbiAgICBvID0gdHJ1ZSxcclxuICAgIGwgPSBBcnJheS5pc0FycmF5LFxyXG4gICAgZCA9IFtdLnNsaWNlLFxyXG4gICAgYSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZ1bmN0aW9uIFNwbGl0VGV4dChELCB1KSB7XHJcbiAgICAgICAgaSB8fFxyXG4gICAgICAgICAgKGZ1bmN0aW9uIF9pbml0Q29yZSgpIHtcclxuICAgICAgICAgICAgKFEgPSBkb2N1bWVudCksIChGID0gd2luZG93KSwgKGkgPSAxKTtcclxuICAgICAgICAgIH0pKCksXHJcbiAgICAgICAgICAodGhpcy5lbGVtZW50cyA9IHMoRCkpLFxyXG4gICAgICAgICAgKHRoaXMuY2hhcnMgPSBbXSksXHJcbiAgICAgICAgICAodGhpcy53b3JkcyA9IFtdKSxcclxuICAgICAgICAgICh0aGlzLmxpbmVzID0gW10pLFxyXG4gICAgICAgICAgKHRoaXMuX29yaWdpbmFscyA9IFtdKSxcclxuICAgICAgICAgICh0aGlzLnZhcnMgPSB1IHx8IHt9KSxcclxuICAgICAgICAgIG8gJiYgdGhpcy5zcGxpdCh1KTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgRCA9IFNwbGl0VGV4dC5wcm90b3R5cGU7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgKEQuc3BsaXQgPSBmdW5jdGlvbiBzcGxpdChEKSB7XHJcbiAgICAgICAgICB0aGlzLmlzU3BsaXQgJiYgdGhpcy5yZXZlcnQoKSxcclxuICAgICAgICAgICAgKHRoaXMudmFycyA9IEQgPSBEIHx8IHRoaXMudmFycyksXHJcbiAgICAgICAgICAgICh0aGlzLl9vcmlnaW5hbHMubGVuZ3RoID0gdGhpcy5jaGFycy5sZW5ndGggPSB0aGlzLndvcmRzLmxlbmd0aCA9IHRoaXMubGluZXMubGVuZ3RoID0gMCk7XHJcbiAgICAgICAgICBmb3IgKFxyXG4gICAgICAgICAgICB2YXIgdSxcclxuICAgICAgICAgICAgZSxcclxuICAgICAgICAgICAgdCxcclxuICAgICAgICAgICAgRiA9IHRoaXMuZWxlbWVudHMubGVuZ3RoLFxyXG4gICAgICAgICAgICBpID0gRC50YWcgPyBELnRhZyA6IEQuc3BhbiA/IFwic3BhblwiIDogXCJkaXZcIixcclxuICAgICAgICAgICAgbiA9IHcoRC53b3Jkc0NsYXNzLCBpKSxcclxuICAgICAgICAgICAgcyA9IHcoRC5jaGFyc0NsYXNzLCBpKTtcclxuICAgICAgICAgICAgLTEgPCAtLUY7XHJcblxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgICAodCA9IHRoaXMuZWxlbWVudHNbRl0pLFxyXG4gICAgICAgICAgICAgICh0aGlzLl9vcmlnaW5hbHNbRl0gPSB0LmlubmVySFRNTCksXHJcbiAgICAgICAgICAgICAgKHUgPSB0LmNsaWVudEhlaWdodCksXHJcbiAgICAgICAgICAgICAgKGUgPSB0LmNsaWVudFdpZHRoKSxcclxuICAgICAgICAgICAgICBFKHQsIEQsIG4sIHMpLFxyXG4gICAgICAgICAgICAgIEModCwgRCwgdGhpcy5jaGFycywgdGhpcy53b3JkcywgdGhpcy5saW5lcywgZSwgdSk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLmNoYXJzLnJldmVyc2UoKSxcclxuICAgICAgICAgICAgdGhpcy53b3Jkcy5yZXZlcnNlKCksXHJcbiAgICAgICAgICAgIHRoaXMubGluZXMucmV2ZXJzZSgpLFxyXG4gICAgICAgICAgICAodGhpcy5pc1NwbGl0ID0gITApLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIChELnJldmVydCA9IGZ1bmN0aW9uIHJldmVydCgpIHtcclxuICAgICAgICAgIHZhciBlID0gdGhpcy5fb3JpZ2luYWxzO1xyXG4gICAgICAgICAgaWYgKCFlKSB0aHJvdyBcInJldmVydCgpIGNhbGwgd2Fzbid0IHNjb3BlZCBwcm9wZXJseS5cIjtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoRCwgdSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoRC5pbm5lckhUTUwgPSBlW3VdKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICh0aGlzLmNoYXJzID0gW10pLFxyXG4gICAgICAgICAgICAodGhpcy53b3JkcyA9IFtdKSxcclxuICAgICAgICAgICAgKHRoaXMubGluZXMgPSBbXSksXHJcbiAgICAgICAgICAgICh0aGlzLmlzU3BsaXQgPSAhMSksXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgKFNwbGl0VGV4dC5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoRCwgdSkge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBTcGxpdFRleHQoRCwgdSk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgU3BsaXRUZXh0XHJcbiAgICAgICk7XHJcbiAgICB9KSgpO1xyXG4gIChhLnZlcnNpb24gPSBcIjMuMC4wXCIpLFxyXG4gICAgKGUuU3BsaXRUZXh0ID0gYSksXHJcbiAgICAoZS5kZWZhdWx0ID0gYSksXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgICAgdmFsdWU6ICEwXHJcbiAgICB9KTtcclxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3NhcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9jb21vdGl2ZS1zY3JvbGxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=