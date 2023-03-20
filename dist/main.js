/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Norse-Bold.woff */ \"./src/Norse-Bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./background.png */ \"./src/background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    box-sizing: border-box;\\n}\\n\\n@font-face {\\n    font-family: \\\"Norse\\\"; \\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    font-weight: bold;\\n}\\n\\nbody {\\n    margin: 0px;\\n    padding: 0px;\\n    /* background-color: rgb(231, 231, 231); */\\n    background-color: linen;\\n}\\n\\na { \\n    display: inline-block;\\n    color: inherit;\\n}\\n\\n#content-container {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    padding: 0px;\\n    margin: 0px;\\n    min-height: 100vh;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-repeat: no-repeat;\\n    background-position-x: 2px;\\n    background-position-y: center;\\n    background-size: cover;\\n}\\n\\n#content {\\n    margin: 0px;\\n    padding: 0px;\\n}\\n\\n.name {\\n    font-size: 4rem;\\n    font-family: \\\"Norse\\\";\\n    margin: 0px auto;\\n    padding: 0;\\n    text-align: center;\\n    cursor: pointer;\\n}\\n\\nheader {\\n    width: 100vw;\\n    margin: 0 auto 20px auto;\\n    padding: 0;\\n    padding-top: 20px;\\n    position: sticky;\\n    /* background: linear-gradient(rgba(0, 124, 255, .9), rgb(0, 0, 159)); */\\n    background: linear-gradient(rgba(60, 80, 100, .9), rgb(80, 59, 79));\\n    top: 0;\\n    color: linen;\\n    font-size: 3rem;\\n    font-family: \\\"Norse\\\";\\n    z-index: 999;\\n}\\n\\n.reviews-container {\\n    margin: 10px auto 10px auto;\\n    max-width: 1000px;\\n    padding: 0;\\n}\\n\\nnav {\\n    margin: 0 auto;\\n    max-width: 600px;\\n    padding: .4rem 1rem .4rem 1rem;\\n}\\n\\nnav > ul > li {\\n    cursor: pointer;\\n    padding: .5rem;\\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n    vertical-align: middle;\\n}\\n\\n.selectable, .selected {\\n    display: inline-block;\\n    position: relative;\\n    color: linen;\\n}\\n\\n.selectable::after {\\n    content: '';\\n    position: absolute;\\n    width: 100%;\\n    transform: scaleX(0);\\n    height: 3px;\\n    bottom: -10px;\\n    left: 0;\\n    background-color: linen;\\n    transform-origin: bottom right;\\n    transition: transform 0.2s ease-out;\\n}\\n\\n.selectable:hover::after {\\n    transform: scaleX(1);\\n    transform-origin: bottom left;\\n}\\n\\n.selected::after {\\n    content: '';\\n    position: absolute;\\n    width: 100%;\\n    height: 3px;\\n    bottom: -10px;\\n    left: 0;\\n    background-color: linen;\\n}\\n\\nnav > ul > li:hover {\\n    cursor: pointer;\\n}\\n\\nnav > ul {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-evenly;\\n    list-style: none;\\n    font-size: 1.5rem;\\n    margin: 0 auto;\\n    padding: 0px;\\n}\\n\\nli {\\n    margin: 0px;\\n}\\n\\n#hometext {\\n    margin: 0 auto;\\n    text-align: center;\\n    padding: 0px 60px 0px 60px;\\n    max-width: 800px;\\n    font-size: 1.5rem;\\n}\\n\\np { \\n    padding: 0px;\\n    margin: 0 auto;\\n    max-width: 800px;\\n    font-size: 1.5rem;\\n}\\n\\n#cafe-img {\\n    display: block;\\n    padding: 0px;\\n    margin: 10px auto;\\n    width: 80vw;\\n    max-width: 800px;\\n    object-fit: cover;\\n}\\n\\n.menu-container {\\n    max-width: 1000px;\\n    margin: 0px auto;\\n    padding: 0px 40px;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n}\\n\\n.item {\\n    margin: 20px;\\n    text-align: center;\\n    font-size: 24px;\\n}\\n\\n.item .item-name {\\n    font-size: 42px;\\n    font-family: \\\"Norse\\\";\\n    font-weight: bold;\\n}\\n\\nimg {\\n    width: 100%;\\n    height: 250px;\\n    object-fit: cover;\\n}\\n\\n.hours-container {\\n    text-align: center;\\n}\\n\\n#hours3 {\\n    margin-top: 5px;\\n    font-style: italic;\\n    font-size: 1.3rem;\\n}\\n\\n#alocation {\\n    padding-bottom: 20px;\\n}\\n\\n#iframeMap {\\n    display: block;\\n    margin: 20px auto;\\n    width: 75vw;\\n    max-width: 800px;\\n    height: 400px;\\n}\\n\\n#reviews-container { \\n    margin: 20px auto 0 auto;\\n    padding: 0px;\\n    width: 80vw;\\n    max-width: 1000px;\\n    height: 270px;\\n}\\n\\n#reviews {\\n    width: 100%;\\n    height: 100%;\\n    position: relative;\\n    left: 8px;\\n    border: none;\\n}\\n\\nfooter {\\n    justify-self: flex-end;\\n    align-self: flex-end;\\n    margin: 0 auto;\\n    text-align: center;\\n    /* background: linear-gradient(rgba(14, 88, 62, .8), #0b4632); */\\n    background-color: rgba(166, 123, 91, .9);\\n    width: 100vw;\\n    padding: 18px 0 18px 0;\\n    color: linen;\\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif\\n}\\n\\nfooter > p {\\n    font-size: 1.2rem;\\n}\\n\\n@media (min-width: 320px) and (max-width: 700px) {\\n    nav > ul {\\n        /* display: grid;\\n        grid-template-columns: 1fr 1fr;\\n        text-align: center; */\\n    }\\n    #content-container {\\n        background-size: 100% 200%;\\n        /* background-position-x: 2px; */\\n    }\\n    .menu-container {\\n        display: grid;\\n        grid-template-columns: 1fr;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/empty.js":
/*!**********************!*\
  !*** ./src/empty.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteContent\": () => (/* binding */ deleteContent)\n/* harmony export */ });\nfunction deleteContent(content) {\n  while (content.firstChild) {\n    content.removeChild(content.firstChild);\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/empty.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createFooter(content) {\n  let reviewsContainer = document.createElement(\"div\");\n  reviewsContainer.id = \"reviews-container\";\n\n  let reviews = document.createElement(\"iframe\");\n  reviews.id = \"reviews\";\n  reviews.src = \"https://widgets.sociablekit.com/google-reviews/iframe/125356\";\n  reviews.loading = \"lazy\";\n\n  content.appendChild(reviewsContainer);\n  reviewsContainer.appendChild(reviews);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _cafe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cafe.jpg */ \"./src/cafe.jpg\");\n\n\nfunction createHome(content) {\n  let text = document.createElement(\"p\");\n  text.id = \"hometext\";\n  text.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;\n\n  const cafeImg = new Image();\n  cafeImg.id = \"cafe-img\";\n  cafeImg.src = _cafe_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n  content.appendChild(text);\n  content.appendChild(cafeImg);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/hours.js":
/*!**********************!*\
  !*** ./src/hours.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHours\": () => (/* binding */ createHours)\n/* harmony export */ });\nfunction createHours(content) {\n  const hoursContainer = document.createElement(\"div\");\n  hoursContainer.classList.add(\"hours-container\");\n  content.appendChild(hoursContainer);\n  let alocation = document.createElement(\"a\");\n  alocation.id = \"alocation\";\n  alocation.href = \"https://goo.gl/maps/rR6gziw7VzVQP13Z6\";\n  alocation.target = \"_blank\";\n  hoursContainer.appendChild(alocation);\n\n  const address = document.createElement(\"p\");\n  address.innerText = \"250 Main St \\n Pawtucket, RI 02860\";\n\n  alocation.appendChild(address);\n  const hours1 = document.createElement(\"p\");\n  hours1.innerText = \"Tuesday \\u2013 Sunday\";\n  const hours2 = document.createElement(\"p\");\n  hours2.innerText = \"7am to 6pm\";\n  const hours3 = document.createElement(\"p\");\n  hours3.id = \"hours3\";\n  hours3.innerText = \"Closed on Monday\";\n\n  hoursContainer.appendChild(hours1);\n  hoursContainer.appendChild(hours2);\n  hoursContainer.appendChild(hours3);\n\n  const iframeMap = document.createElement(\"iframe\");\n  iframeMap.id = \"iframeMap\";\n\n  iframeMap.src =\n    \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742.6800028370324!2d-71.38618537074508!3d41.87737009725482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e443547e8d00bd%3A0xeb0f2956ca270d6e!2s250%20Main%20St%2C%20Pawtucket%2C%20RI%2002860!5e0!3m2!1sen!2sus!4v1679167238199!5m2!1sen!2sus\";\n  iframeMap.allowfullscreen = \"\";\n  iframeMap.loading = \"lazy\";\n  iframeMap.referrerpolicy = \"no-referrer-when-downgrade\";\n\n  content.appendChild(iframeMap);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/hours.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title */ \"./src/title.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\nlet content = document.getElementById(\"content\");\n(0,_title__WEBPACK_IMPORTED_MODULE_0__.createTitle)(content);\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)(content);\n(0,_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)(content);\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu(content) {\n  let menuContainer = document.createElement(\"div\");\n  menuContainer.classList.add(\"menu-container\");\n  content.appendChild(menuContainer);\n  let imgList = importAll(\n    // eslint-disable-next-line no-undef\n    __webpack_require__(\"./src/menuImgs sync \\\\.(png%7Cjpe?g%7Csvg)$\")\n  );\n\n  let menuObjects = {\n    item1: {\n      imgSrc: imgList[\"coffee.jpg\"],\n      name: \"Coffee\",\n      description: \"Dark roasted with a hint of vanilla\",\n    },\n    item2: {\n      imgSrc: imgList[\"pizza.jpg\"],\n      name: \"Pizza\",\n      description: \"Cheesy and delicious\",\n    },\n    item3: {\n      imgSrc: imgList[\"plant.jpg\"],\n      name: \"Plant\",\n      description: \"Leafy green vegetable\",\n    },\n  };\n\n  for (const prop in menuObjects) {\n    createMenuItem(\n      menuObjects[prop][\"imgSrc\"],\n      menuObjects[prop][\"name\"],\n      menuObjects[prop][\"description\"],\n      menuContainer\n    );\n  }\n}\n\nfunction importAll(r) {\n  let images = {};\n  r.keys().forEach((item) => {\n    images[item.replace(\"./\", \"\")] = r(item);\n  });\n  return images;\n}\n\nfunction createMenuItem(img, name, description, container) {\n  let item = document.createElement(\"div\");\n  item.classList.add(\"item\");\n  container.appendChild(item);\n\n  const menuImg = new Image();\n  menuImg.src = img;\n\n  let itemName = document.createElement(\"div\");\n  itemName.classList.add(\"item-name\");\n  itemName.textContent = name;\n\n  let menuDescription = document.createElement(\"div\");\n  menuDescription.textContent = description;\n\n  item.appendChild(menuImg);\n  item.appendChild(itemName);\n  item.appendChild(menuDescription);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/menuImgs sync \\.(png%7Cjpe?g%7Csvg)$":
/*!****************************************************************!*\
  !*** ./src/menuImgs/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./coffee.jpg\": \"./src/menuImgs/coffee.jpg\",\n\t\"./pizza.jpg\": \"./src/menuImgs/pizza.jpg\",\n\t\"./plant.jpg\": \"./src/menuImgs/plant.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/menuImgs sync \\\\.(png%7Cjpe?g%7Csvg)$\";\n\n//# sourceURL=webpack://restaurant/./src/menuImgs/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/title.js":
/*!**********************!*\
  !*** ./src/title.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTitle\": () => (/* binding */ createTitle)\n/* harmony export */ });\n/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty */ \"./src/empty.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _hours__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hours */ \"./src/hours.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\nfunction createTitle(content) {\n  let header = document.createElement(\"header\");\n  content.appendChild(header);\n\n  let name = document.createElement(\"h1\");\n  name.classList.add(\"name\");\n  let aname = document.createElement(\"a\");\n  aname.id = \"aname\";\n  aname.textContent = \"Seed Cafe\";\n  aname.addEventListener(\"click\", eventHandler.bind(null, content), false);\n  name.appendChild(aname);\n  header.appendChild(name);\n\n  let navbar = document.createElement(\"nav\");\n  header.appendChild(navbar);\n\n  let navbarList = document.createElement(\"ul\");\n  navbar.appendChild(navbarList);\n\n  let li1 = document.createElement(\"li\");\n  let ali1 = document.createElement(\"a\");\n  ali1.id = \"ali1\";\n  ali1.classList.add(\"selectable\");\n  ali1.textContent = \"Menu\";\n  ali1.addEventListener(\"click\", eventHandler.bind(null, content), false);\n  li1.appendChild(ali1);\n  navbarList.appendChild(li1);\n\n  // let li2 = document.createElement(\"li\");\n  // let ali2 = document.createElement(\"a\");\n  // ali2.id = \"ali2\";\n  // ali2.classList.add(\"selectable\");\n  // ali2.textContent = \"Reservations\";\n  // ali2.addEventListener(\"click\", eventHandler.bind(null, content), false);\n  // li2.appendChild(ali2);\n  // navbarList.appendChild(li2);\n\n  let li3 = document.createElement(\"li\");\n  let ali3 = document.createElement(\"a\");\n  ali3.id = \"ali3\";\n  ali3.classList.add(\"selectable\");\n  ali3.textContent = \"Hours & Location\";\n  ali3.addEventListener(\"click\", eventHandler.bind(null, content), false);\n  li3.appendChild(ali3);\n  navbarList.appendChild(li3);\n\n  // let li4 = document.createElement(\"li\");\n  // let ali4 = document.createElement(\"a\");\n  // ali4.id = \"ali4\";\n  // ali4.classList.add(\"selectable\");\n  // ali4.textContent = \"Contact\";\n  // ali4.addEventListener(\"click\", eventHandler.bind(null, content), false);\n  // li4.appendChild(ali4);\n  // navbarList.appendChild(li4);\n}\n\nfunction eventHandler(content, event) {\n  (0,_empty__WEBPACK_IMPORTED_MODULE_0__.deleteContent)(content);\n  window.scrollTo(0, 0);\n  createTitle(content);\n\n  let clickedElement = document.getElementById(event.target.id);\n  clickedElement.classList.remove(\"selectable\");\n  if (event.target.id !== \"aname\") {\n    clickedElement.classList.add(\"selected\");\n    switch (event.target.id) {\n      case \"ali1\":\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)(content);\n        break;\n      case \"ali3\":\n        (0,_hours__WEBPACK_IMPORTED_MODULE_3__.createHours)(content);\n        break;\n    }\n  } else {\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.createHome)(content);\n    (0,_footer__WEBPACK_IMPORTED_MODULE_4__.createFooter)(content);\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/title.js?");

/***/ }),

/***/ "./src/Norse-Bold.woff":
/*!*****************************!*\
  !*** ./src/Norse-Bold.woff ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cd0264df9f4c1af0be98.woff\";\n\n//# sourceURL=webpack://restaurant/./src/Norse-Bold.woff?");

/***/ }),

/***/ "./src/background.png":
/*!****************************!*\
  !*** ./src/background.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3089005dd34bd81719eb.png\";\n\n//# sourceURL=webpack://restaurant/./src/background.png?");

/***/ }),

/***/ "./src/cafe.jpg":
/*!**********************!*\
  !*** ./src/cafe.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"07fce5d03647824a987e.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/cafe.jpg?");

/***/ }),

/***/ "./src/menuImgs/coffee.jpg":
/*!*********************************!*\
  !*** ./src/menuImgs/coffee.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"80829e9a7a79aab9e764.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menuImgs/coffee.jpg?");

/***/ }),

/***/ "./src/menuImgs/pizza.jpg":
/*!********************************!*\
  !*** ./src/menuImgs/pizza.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"255f702cd43130e4bb01.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menuImgs/pizza.jpg?");

/***/ }),

/***/ "./src/menuImgs/plant.jpg":
/*!********************************!*\
  !*** ./src/menuImgs/plant.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f226698381ab518a2ee5.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/menuImgs/plant.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;