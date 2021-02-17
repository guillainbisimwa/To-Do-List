/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/project */ \"./src/scripts/project.js\");\n/* harmony import */ var _scripts_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/dom */ \"./src/scripts/dom.js\");\n\n\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nvar projects = [];\nvar contentDiv = document.querySelector('#content');\n(0,_scripts_dom__WEBPACK_IMPORTED_MODULE_1__.default)(); //contentDiv.appendChild(createHeader);\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayHeader)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/scripts/header.js\");\n/* harmony import */ var _modalAddProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalAddProject */ \"./src/scripts/modalAddProject.js\");\n/* harmony import */ var _projectMarkup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectMarkup */ \"./src/scripts/projectMarkup.js\");\n\n\n\nfunction displayHeader() {\n  var contentDiv = document.querySelector('#content');\n  var header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.default)();\n  var modal = (0,_modalAddProject__WEBPACK_IMPORTED_MODULE_1__.default)();\n  var project1 = (0,_projectMarkup__WEBPACK_IMPORTED_MODULE_2__.default)('1', \"Project 1\");\n  var project2 = (0,_projectMarkup__WEBPACK_IMPORTED_MODULE_2__.default)('2', \"Project 2\");\n  var project3 = (0,_projectMarkup__WEBPACK_IMPORTED_MODULE_2__.default)('3', \"Project 3\");\n  var wrapperDiv = document.createElement('div');\n  wrapperDiv.className = 'row';\n  wrapperDiv.append(project1, project2, project3);\n  contentDiv.append(header, modal, wrapperDiv);\n}\n\n//# sourceURL=webpack://to-do-list/./src/scripts/dom.js?");

/***/ }),

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAttributes */ \"./src/scripts/setAttributes.js\");\n\nfunction createHeader() {\n  var wrapperDiv = document.createElement('header');\n  var h2 = document.createElement('h2');\n  var addProjectButton = document.createElement('button');\n  wrapperDiv.setAttribute('class', 'pt-5 d-flex justify-content-between');\n  h2.setAttribute('class', 'text-secondary');\n  (0,_setAttributes__WEBPACK_IMPORTED_MODULE_0__.default)(addProjectButton, {\n    \"class\": 'btn btn-primary btn-lg shadow',\n    'data-bs-toggle': 'modal',\n    'data-bs-target': '#addProject'\n  });\n  h2.textContent = 'TODO List - JavaScript';\n  addProjectButton.textContent = 'Add project';\n  wrapperDiv.append(h2, addProjectButton);\n  return wrapperDiv;\n}\n\n//# sourceURL=webpack://to-do-list/./src/scripts/header.js?");

/***/ }),

/***/ "./src/scripts/modalAddProject.js":
/*!****************************************!*\
  !*** ./src/scripts/modalAddProject.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createModal)\n/* harmony export */ });\n/* harmony import */ var _setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAttributes */ \"./src/scripts/setAttributes.js\");\n\nfunction createModal() {\n  var wrapperModal = document.createElement('div');\n  (0,_setAttributes__WEBPACK_IMPORTED_MODULE_0__.default)(wrapperModal, {\n    \"class\": 'modal fade',\n    id: 'addProject',\n    tabindex: '-1',\n    'aria-labelledby': 'exMl',\n    'aria-hidden': 'true'\n  });\n  var modalHeader = document.createElement('div');\n  modalHeader.className = 'modal-header';\n  modalHeader.innerHTML = 'Add Project';\n  var titleHeader = document.createElement('h5');\n  (0,_setAttributes__WEBPACK_IMPORTED_MODULE_0__.default)(titleHeader, {\n    \"class\": 'modal-title',\n    id: 'exMl'\n  });\n  var btnHeader = document.createElement('button');\n  (0,_setAttributes__WEBPACK_IMPORTED_MODULE_0__.default)(btnHeader, {\n    \"class\": 'btn-close',\n    type: 'button',\n    'ta-bs-dismiss': 'modal',\n    'aria-label': 'Close'\n  });\n  var modalBody = document.createElement('div');\n  modalBody.className = 'modal-body';\n  var inputTitleProject = document.createElement('input');\n  (0,_setAttributes__WEBPACK_IMPORTED_MODULE_0__.default)(inputTitleProject, {\n    \"class\": 'form-control',\n    type: 'text',\n    placeholder: 'Add the title here'\n  });\n  var modalFooter = document.createElement('div');\n  modalFooter.className = 'modal-footer';\n  var btnClose = document.createElement('button');\n  (0,_setAttributes__WEBPACK_IMPORTED_MODULE_0__.default)(btnClose, {\n    \"class\": 'btn btn-secondary',\n    type: 'button',\n    'data-bs-dismiss': 'modal'\n  });\n  btnClose.innerHTML = 'Close';\n  var btnSave = document.createElement('button');\n  (0,_setAttributes__WEBPACK_IMPORTED_MODULE_0__.default)(btnSave, {\n    \"class\": 'btn btn-primary',\n    type: 'button',\n    id: 'save-btn'\n  });\n  btnSave.innerHTML = 'Save Project';\n  var modalContent = document.createElement('div');\n  modalContent.className = 'modal-content';\n  var modalDialog = document.createElement('div');\n  modalDialog.className = 'modal-dialog';\n  modalHeader.appendChild(titleHeader, btnHeader);\n  modalBody.appendChild(inputTitleProject);\n  modalFooter.append(btnClose, btnSave);\n  modalContent.append(modalHeader, modalBody, modalFooter);\n  modalDialog.appendChild(modalContent);\n  wrapperModal.appendChild(modalDialog);\n  return wrapperModal;\n}\n\n//# sourceURL=webpack://to-do-list/./src/scripts/modalAddProject.js?");

/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newProject)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/scripts/task.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction newProject(title) {\n  var tasksList = [];\n\n  function addTask(title, descr, priority, date) {\n    var task = (0,_task__WEBPACK_IMPORTED_MODULE_0__.default)(title, descr, priority, date);\n    tasksList.push(task);\n  }\n\n  function deleteTask(index) {\n    tasksList.splice(index, 1);\n  }\n\n  function editTask(index, title, description, priority, date) {\n    var task = tasksList[index];\n    var editedTask = {\n      title: title,\n      description: description,\n      priority: priority,\n      date: date\n    };\n    task = _objectSpread({}, editedTask);\n    return task;\n  }\n\n  return {\n    title: title,\n    tasksList: tasksList,\n    addTask: addTask,\n    deleteTask: deleteTask,\n    editTask: editTask\n  };\n}\n\n//# sourceURL=webpack://to-do-list/./src/scripts/project.js?");

/***/ }),

/***/ "./src/scripts/projectMarkup.js":
/*!**************************************!*\
  !*** ./src/scripts/projectMarkup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayProject)\n/* harmony export */ });\n/* harmony import */ var _setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setAttributes */ \"./src/scripts/setAttributes.js\");\n\nfunction displayProject(projectId, projectTitle) {\n  var wrapperProject = document.createElement('div');\n  (0,_setAttributes__WEBPACK_IMPORTED_MODULE_0__.default)(wrapperProject, {\n    \"class\": 'col-xs-12 col-sm-6 col-md-4 pt-5',\n    id: projectId,\n    'data-index': projectId\n  });\n  var card = document.createElement('div');\n  card.className = 'card shadow';\n  var projectHeader = document.createElement('div');\n  projectHeader.className = 'card-header text-white bg-dark d-flex justify-content-between pt-3';\n  var projectHeaderTitle = document.createElement('h6');\n  projectHeaderTitle.textContent = projectTitle;\n  var wraperIcon = document.createElement('div');\n  var modalEditIcon = document.createElement('a');\n  (0,_setAttributes__WEBPACK_IMPORTED_MODULE_0__.default)(modalEditIcon, {\n    \"class\": 'text-light c-pointer',\n    'data-bs-toggle': 'modal',\n    'data-bs-target': '#addProject'\n  });\n  var modalDeleteIcon = document.createElement('a');\n  (0,_setAttributes__WEBPACK_IMPORTED_MODULE_0__.default)(modalDeleteIcon, {\n    \"class\": 'text-light c-pointer',\n    'data-bs-toggle': 'modal',\n    'data-bs-target': '#deleteProject'\n  });\n  var editIcon = document.createElement('i');\n  editIcon.className = 'fas fa-edit mx-3';\n  var deleteIcon = document.createElement('i');\n  deleteIcon.className = 'fas fa-trash mx-3';\n  var projectBody = document.createElement('div');\n  projectBody.className = 'card-body';\n  var projectFooter = document.createElement('div');\n  projectFooter.className = 'card-footer d-grid gap-2';\n  var btnAddTask = document.createElement('button');\n  (0,_setAttributes__WEBPACK_IMPORTED_MODULE_0__.default)(btnAddTask, {\n    \"class\": 'btn btn-primary text-light shadow',\n    type: 'button',\n    id: 'save-task'\n  });\n  btnAddTask.innerHTML = 'Add task';\n  modalEditIcon.appendChild(editIcon);\n  modalDeleteIcon.appendChild(deleteIcon);\n  wraperIcon.append(modalEditIcon, modalDeleteIcon);\n  projectHeader.append(projectHeaderTitle, wraperIcon);\n  projectFooter.appendChild(btnAddTask);\n  card.append(projectHeader, projectBody, projectFooter);\n  wrapperProject.appendChild(card);\n  return wrapperProject;\n}\n\n//# sourceURL=webpack://to-do-list/./src/scripts/projectMarkup.js?");

/***/ }),

/***/ "./src/scripts/setAttributes.js":
/*!**************************************!*\
  !*** ./src/scripts/setAttributes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setAttributes)\n/* harmony export */ });\nfunction setAttributes(elt, attrs) {\n  var props = Object.keys(attrs);\n  props.forEach(function (prop) {\n    elt.setAttribute(prop, attrs[prop]);\n  });\n}\n\n//# sourceURL=webpack://to-do-list/./src/scripts/setAttributes.js?");

/***/ }),

/***/ "./src/scripts/task.js":
/*!*****************************!*\
  !*** ./src/scripts/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newTask)\n/* harmony export */ });\nfunction newTask(title, description, priority, date) {\n  var checkList = [];\n\n  function addItem(item) {\n    checkList.push(item);\n  }\n\n  function deleteItem(index) {\n    checkList.splice(index, 1);\n  }\n\n  return {\n    title: title,\n    description: description,\n    priority: priority,\n    date: date,\n    checkList: checkList,\n    addItem: addItem,\n    deleteItem: deleteItem\n  };\n}\n\n//# sourceURL=webpack://to-do-list/./src/scripts/task.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\n.bg-test {\\n  background: #f8f9fa;\\n}\\n\\n.c-pointer {\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;