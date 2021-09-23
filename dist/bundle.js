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

eval("const isChip = __webpack_require__(/*! ./isChip */ \"./js/helpers/isChip.js\")\n\nconst animateBoard = function(e, highLighted, message) {\n    if(!highLighted.player && isChip(e) && !highLighted.playerHighLights.length) {\n        message.textContent = 'Make a move'\n        e.target.setAttribute('class', 'highlight')\n        highLighted.player = !highLighted.player\n        highLighted.playerHighLights.push(e.target)\n    } else if (!highLighted.cell && !isChip(e) && !highLighted.cellHighLights.length) {\n        message.textContent = 'Make a move'\n        e.target.setAttribute('class', 'highlight')\n        highLighted.cell = !highLighted.cell\n        highLighted.cellHighLights.push(e.target)\n    } else if (highLighted.player && isChip(e) && highLighted.playerHighLights[0] === e.target) {\n        e.target.classList.remove('highlight')\n        highLighted.player = !highLighted.player\n        highLighted.playerHighLights.pop()\n    } else if (highLighted.cell && !isChip(e)  && highLighted.cellHighLights[0] === e.target) {\n        e.target.classList.remove('highlight')\n        highLighted.cell = !highLighted.cell\n        highLighted.cellHighLights.pop()\n    }\n}\n\nmodule.exports = animateBoard\n\n//# sourceURL=webpack:///./js/helpers/animateBoard.js?");

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

eval("const renderCells = __webpack_require__(/*! ./renderCells */ \"./js/helpers/renderCells.js\")\nconst animateBoard = __webpack_require__(/*! ./animateBoard */ \"./js/helpers/animateBoard.js\")\n\nconst render = (flatBoard, e = false, cells, cellId, highLighted, message) => {\n    if(!e) {\n        renderCells(cells, flatBoard)\n    } else {\n        animateBoard(e, highLighted, message)\n    }\n};\n\nmodule.exports = render\n\n//# sourceURL=webpack:///./js/helpers/render.js?");

/***/ }),

/***/ "./js/helpers/renderCells.js":
/*!***********************************!*\
  !*** ./js/helpers/renderCells.js ***!
  \***********************************/
/***/ ((module) => {

eval("const renderCells = function(cells, flatBoard) {\n    cells.forEach((cell, cellId) => {\n        if(flatBoard[cellId] === 1) {\n            cell.childNodes[0].style.visibility = 'visible'\n            cell.childNodes[0].setAttribute('src', './css/images/whiteChip.PNG')\n        } else if(flatBoard[cellId] === -1) {\n            cell.childNodes[0].style.visibility = 'visible'\n            cell.childNodes[0].setAttribute('src', './css/images/blackChip.PNG')\n        } else {\n            cell.childNodes[0].style.visibility = 'hidden'\n        }\n    })\n}\n\nmodule.exports = renderCells\n\n//# sourceURL=webpack:///./js/helpers/renderCells.js?");

/***/ }),

/***/ "./js/helpers/updateBoard.js":
/*!***********************************!*\
  !*** ./js/helpers/updateBoard.js ***!
  \***********************************/
/***/ ((module) => {

eval("const updateBoard = (e, cellId) => {\n    //rerenderingBoard\n\n\n    // if(e.target.childNodes[0]) {\n    //     flatBoard[cellId] = turn;\n    //     flatBoard[cellId-turn*9] = 0;\n    //     turn *= -1;\n    //     render();\n    // } else if(e.target.childNodes[0]) {\n    //     flatBoard[cellId] = turn;\n    //     flatBoard[cellId+turn*11] = 0\n    //     turn *= -1;\n    //     render();\n    // }\n}\n\nmodule.exports = updateBoard\n\n//# sourceURL=webpack:///./js/helpers/updateBoard.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const isChip = __webpack_require__(/*! ./helpers/isChip */ \"./js/helpers/isChip.js\")\nconst animateBoard = __webpack_require__(/*! ./helpers/animateBoard */ \"./js/helpers/animateBoard.js\")\nconst updateBoard = __webpack_require__(/*! ./helpers/updateBoard */ \"./js/helpers/updateBoard.js\")\nconst renderCells = __webpack_require__(/*! ./helpers/renderCells */ \"./js/helpers/renderCells.js\")\nconst render = __webpack_require__(/*! ./helpers/render */ \"./js/helpers/render.js\")\n\n//constants\nlet chipLookup = {\n    '1': './css/images/whiteChip.PNG',\n    '-1': './css/images/blackChip.PNG'\n}\n\n//_____ app-state\nlet board, flatBoard, turn, winner, highLighted;\n\n//DOM Elements\nconst message = document.querySelector('h1');\nconst cells = document.querySelectorAll('.row > .cell');\nconst playableCells = [...document.querySelectorAll('.row:nth-child(2n+1) > div:nth-child(2n)'), ...document.querySelectorAll('.row:nth-child(2n) > div:nth-child(2n+1)')];\n\n//_____functions\nconst init = () => {\n    board = [\n        [0,1,0,1,0,1,0,1,0,1],\n        [1,0,1,0,1,0,1,0,1,0],\n        [0,1,0,1,0,1,0,1,0,1],\n        [1,0,1,0,1,0,1,0,1,0],\n        [0,0,0,0,0,0,0,0,0,0],\n        [0,0,0,0,0,0,0,0,0,0],\n        [0,-1,0,-1,0,-1,0,-1,0,-1],\n        [-1,0,-1,0,-1,0,-1,0,-1,0],\n        [0,-1,0,-1,0,-1,0,-1,0,-1],\n        [-1,0,-1,0,-1,0,-1,0,-1,0]\n    ];\n    flatBoard = [].concat(...board);\n    turn = 1;\n    winner = null;\n    highLighted = {\n        player: false,\n        cell: false,\n        playerHighLights: [],\n        cellHighLights: []\n    }\n    render(flatBoard, false, cells);\n}\n\n//_____function initializations\ninit();\n\n//_____event listeners\nplayableCells.forEach((cell, id) => {\n    cell.addEventListener('click', (e) => {render(flatBoard, e, cells, id, highLighted, message)})\n})\n\n\n//# sourceURL=webpack:///./js/main.js?");

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