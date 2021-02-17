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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/project */ \"./src/scripts/project.js\");\n/* harmony import */ var _scripts_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/dom */ \"./src/scripts/dom.js\");\n\n\nvar projects = [];\nvar contentDiv = document.querySelector('#content');\n(0,_scripts_dom__WEBPACK_IMPORTED_MODULE_1__.default)(); //contentDiv.appendChild(createHeader);\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayHeader)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/scripts/header.js\");\n/* harmony import */ var _modalAddProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalAddProject */ \"./src/scripts/modalAddProject.js\");\n\n\nfunction displayHeader() {\n  var contentDiv = document.querySelector('#content');\n  var header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.default)();\n  var modal = (0,_modalAddProject__WEBPACK_IMPORTED_MODULE_1__.default)();\n  contentDiv.append(header, modal);\n}\n\n//# sourceURL=webpack://to-do-list/./src/scripts/dom.js?");

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
/******/ 			// no module.id needed
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