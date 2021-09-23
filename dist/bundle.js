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

/***/ "./js/helpers/animateBoard.js":
/*!************************************!*\
  !*** ./js/helpers/animateBoard.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const isChip = __webpack_require__(/*! ./isChip */ \"./js/helpers/isChip.js\")\nconst {highLighted, message} = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst animateBoard = function(e) {\n    if(!highLighted.player && isChip(e) && !highLighted.playerHighLights.length) {\n\n        message.textContent = 'Make a move'\n        e.target.setAttribute('class', 'highlight')\n        highLighted.player = !highLighted.player\n        highLighted.playerHighLights.push(e.target)\n\n    } else if (!highLighted.cell && !isChip(e) && !highLighted.cellHighLights.length) {\n\n        message.textContent = 'Make a move'\n        e.target.setAttribute('class', 'highlight')\n        highLighted.cell = !highLighted.cell\n        highLighted.cellHighLights.push(e.target)\n\n    } else if (highLighted.player && isChip(e) && highLighted.playerHighLights[0] === e.target) {\n\n        e.target.classList.remove('highlight')\n        highLighted.player = !highLighted.player\n        highLighted.playerHighLights.pop()\n\n    } else if (highLighted.cell && !isChip(e)  && highLighted.cellHighLights[0] === e.target) {\n\n        e.target.classList.remove('highlight')\n        highLighted.cell = !highLighted.cell\n        highLighted.cellHighLights.pop()\n        \n    }\n}\n\nmodule.exports = animateBoard\n\n//# sourceURL=webpack:///./js/helpers/animateBoard.js?");

/***/ }),

/***/ "./js/helpers/init.js":
/*!****************************!*\
  !*** ./js/helpers/init.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const render = __webpack_require__(/*! ./render */ \"./js/helpers/render.js\")\nconst { playableCells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst init = () => {\n    render();\n    playableCells.forEach((cell, id) => {\n        cell.addEventListener('click', (e) => {render(e)})\n    })\n}\n\nmodule.exports = init\n\n//# sourceURL=webpack:///./js/helpers/init.js?");

/***/ }),

/***/ "./js/helpers/isChip.js":
/*!******************************!*\
  !*** ./js/helpers/isChip.js ***!
  \******************************/
/***/ ((module) => {

eval("const isChip = function(e) {\n    if(e.target.children[0]) {\n        return false\n    } else {\n        return true\n    }\n}\n\nmodule.exports = isChip\n\n//# sourceURL=webpack:///./js/helpers/isChip.js?");

/***/ }),

/***/ "./js/helpers/render.js":
/*!******************************!*\
  !*** ./js/helpers/render.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderCells = __webpack_require__(/*! ./renderCells */ \"./js/helpers/renderCells.js\")\nconst animateBoard = __webpack_require__(/*! ./animateBoard */ \"./js/helpers/animateBoard.js\")\nconst { cells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst render = (e = false) => {\n    if(e) {\n        animateBoard(e)\n    } else {\n        renderCells(cells)\n    }\n};\n\nmodule.exports = render\n\n//# sourceURL=webpack:///./js/helpers/render.js?");

/***/ }),

/***/ "./js/helpers/renderCells.js":
/*!***********************************!*\
  !*** ./js/helpers/renderCells.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { flatBoard } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst renderCells = function(cells) {\n    cells.forEach((cell, cellId) => {\n        if(flatBoard[cellId] === 1) {\n            cell.childNodes[0].style.visibility = 'visible'\n            cell.childNodes[0].setAttribute('src', './css/images/whiteChip.PNG')\n        } else if(flatBoard[cellId] === -1) {\n            cell.childNodes[0].style.visibility = 'visible'\n            cell.childNodes[0].setAttribute('src', './css/images/blackChip.PNG')\n        } else {\n            cell.childNodes[0].style.visibility = 'hidden'\n        }\n    })\n}\n\nmodule.exports = renderCells\n\n//# sourceURL=webpack:///./js/helpers/renderCells.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const init = __webpack_require__(/*! ./helpers/init */ \"./js/helpers/init.js\")\n\n//_____initializing game\ninit();\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/vars/vars.js":
/*!*************************!*\
  !*** ./js/vars/vars.js ***!
  \*************************/
/***/ ((module) => {

eval("//constants\nlet chipLookup = {\n    '1': './css/images/whiteChip.PNG',\n    '-1': './css/images/blackChip.PNG'\n}\n\n//_____ app-state\nconst board = [\n    [0,1,0,1,0,1,0,1,0,1],\n    [1,0,1,0,1,0,1,0,1,0],\n    [0,1,0,1,0,1,0,1,0,1],\n    [1,0,1,0,1,0,1,0,1,0],\n    [0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0],\n    [0,-1,0,-1,0,-1,0,-1,0,-1],\n    [-1,0,-1,0,-1,0,-1,0,-1,0],\n    [0,-1,0,-1,0,-1,0,-1,0,-1],\n    [-1,0,-1,0,-1,0,-1,0,-1,0]\n];\nconst flatBoard = [].concat(...board) \nlet turn = 1\nlet winner = null\nconst highLighted = {\n    player: false,\n    cell: false,\n    playerHighLights: [],\n    cellHighLights: []\n}\n\n//DOM Elements\nconst message = document.querySelector('h1')\nconst cells = document.querySelectorAll('.row > .cell')\nconst playableCells = [...document.querySelectorAll('.row:nth-child(2n+1) > div:nth-child(2n)'), ...document.querySelectorAll('.row:nth-child(2n) > div:nth-child(2n+1)')]\n\nmodule.exports = {\n    chipLookup,\n    board,\n    flatBoard,\n    turn,\n    winner,\n    highLighted,\n    message,\n    cells,\n    playableCells\n}\n\n//# sourceURL=webpack:///./js/vars/vars.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;