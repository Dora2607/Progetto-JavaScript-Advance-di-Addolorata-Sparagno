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

/***/ "./src/js/subject.js":
/*!***************************!*\
  !*** ./src/js/subject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showSuggestions: () => (/* binding */ showSuggestions)\n/* harmony export */ });\nsubjects = [\"Architecture\", \"Art Instruction\", \"Art History\", \"Dance\", \"Design\", \"Fashion\", \"Film\", \"Graphic Design\", \"Music\", \"Music Theory\", \"Painting\", \"Photography\", \"Bears\", \"Cats\", \"Kittens\", \"Dogs\", \"Puppies\", \"Fantasy\", \"Historical Fiction\", \"Horror\", \"Humor\", \"Literature\", \"Magic\", \"Mystery and detective stories\", \"Plays\", \"Poetry\", \"Romance\", \"Science Fiction\", \"Short Stories\", \"Thriller\", \"Young Adult\", \"Biology\", \"Chemistry\", \"Mathematics\", \"Physics\", \"Programming\", \"Management\", \"Entrepreneurship\", \"Business Economics\", \"Business Success\", \"Finance\", \"Kids Books\", \"Stories in Rhyme\", \"Baby Books\", \"Bedtime Books\", \"Picture Books\", \"Ancient Civilization\", \"Archaeology\", \"Anthropology\", \"World War II\", \"Social Life and Customs\", \"Cooking\", \"Cookbooks\", \"Mental Health\", \"Exercise\", \"Nutrition\", \"Self-help\", \"Autobiographies\", \"History\", \"Politics and Government\", \"World War II\", \"Women\", \"Kings and Rulers\", \"Composers\", \"Artists\", \"Anthropology\", \"Religion\", \"Political Science\", \"Psychology\", \"Brazil\", \"India\", \"Indonesia\", \"United States\", \"History\", \"Mathematics\", \"Geography\", \"Psychology\", \"Algebra\", \"Education\", \"Business & Economics\", \"Science\", \"Chemistry\", \"English Language\", \"Physics\", \"Computer Science\", \"English\", \"French\", \"Spanish\", \"German\", \"Russian\", \"Italian\", \"Chinese\", \"Japanese\"];\nfunction showSuggestions(value) {\n  var suggestions = document.getElementById(\"suggestions\");\n  suggestions.style.display = \"none\";\n  suggestions.innerHTML = \"\";\n  if (value.length > 0) {\n    var matches = subjects.filter(function (subject) {\n      return subject.toLowerCase().startsWith(value.toLowerCase());\n    });\n    if (matches.length > 0) {\n      suggestions.style.display = \"block\";\n      matches.forEach(function (match) {\n        var div = document.createElement(\"div\");\n        div.innerHTML = match;\n        div.onclick = function () {\n          document.getElementById('searchBar').value = match;\n          suggestions.style.display = \"none\";\n        };\n        suggestions.appendChild(div);\n      });\n    }\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js/subject.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/subject.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;