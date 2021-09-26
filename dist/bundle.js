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

eval("const isChip = __webpack_require__(/*! ./isChip */ \"./js/helpers/isChip.js\")\nconst updateBoard = __webpack_require__(/*! ./updateBoard */ \"./js/helpers/updateBoard.js\")\nconst move = __webpack_require__(/*! ./move */ \"./js/helpers/move.js\")\nconst {highLighted, message} = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst animateBoard = function(e) {\n    if(!highLighted.player && isChip(e) && !highLighted.playerHighLights.length) {\n\n        message.textContent = 'Make a move'\n        e.target.setAttribute('class', 'highlight')\n        highLighted.player = !highLighted.player\n        highLighted.playerHighLights.push(e.target)\n\n    } else if (highLighted.player && !highLighted.cell && !isChip(e) && !highLighted.cellHighLights.length) {\n\n        message.textContent = 'Make a move'\n        highLighted.cell = !highLighted.cell\n        highLighted.cellHighLights.push(e.target)\n        move(highLighted.playerHighLights, highLighted.cellHighLights)\n        updateBoard(highLighted.playerHighLights, highLighted.cellHighLights)\n\n        highLighted.playerHighLights[0].classList.remove('highlight')\n        highLighted.player = !highLighted.player\n        highLighted.playerHighLights.pop()\n\n        highLighted.cell = !highLighted.cell\n        highLighted.cellHighLights.pop()\n\n    }\n}\n\nmodule.exports = animateBoard\n\n//# sourceURL=webpack:///./js/helpers/animateBoard.js?");

/***/ }),

/***/ "./js/helpers/init.js":
/*!****************************!*\
  !*** ./js/helpers/init.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const render = __webpack_require__(/*! ./render */ \"./js/helpers/render.js\")\nconst { playableCells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst init = () => {\n    render();\n    playableCells.forEach((cell, id) => {\n        cell.addEventListener('click', (e) => {render(e, id)})\n    })\n}\n\nmodule.exports = init\n\n//# sourceURL=webpack:///./js/helpers/init.js?");

/***/ }),

/***/ "./js/helpers/isChip.js":
/*!******************************!*\
  !*** ./js/helpers/isChip.js ***!
  \******************************/
/***/ ((module) => {

eval("const isChip = function(e) {\n    if(e.target.children[0]) {\n        return false\n    } else {\n        return true\n    }\n}\n\nmodule.exports = isChip\n\n//# sourceURL=webpack:///./js/helpers/isChip.js?");

/***/ }),

/***/ "./js/helpers/move.js":
/*!****************************!*\
  !*** ./js/helpers/move.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { board, flatBoard, cells, playableCells, evenPlayableCells, oddPlayableCells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst move = (player, cell) => {\n    const cellsArr = [...cells]\n    if(evenPlayableCells.includes(player[0].parentElement)) {\n        console.log(flatBoard[cellsArr.indexOf(player[0].parentElement)])\n    } else if(oddPlayableCells.includes(player[0].parentElement)) {\n        console.log(flatBoard[cellsArr.indexOf(player[0].parentElement)])\n    }\n    player[0].style.visibility = 'hidden'\n    cell[0].childNodes[0].src = player[0].src\n    cell[0].childNodes[0].style.visibility = 'visible'\n}\n\nmodule.exports = move\n\n//# sourceURL=webpack:///./js/helpers/move.js?");

/***/ }),

/***/ "./js/helpers/render.js":
/*!******************************!*\
  !*** ./js/helpers/render.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderCells = __webpack_require__(/*! ./renderCells */ \"./js/helpers/renderCells.js\")\nconst animateBoard = __webpack_require__(/*! ./animateBoard */ \"./js/helpers/animateBoard.js\")\nconst { cells, evenPlayableCells, oddPlayableCells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst render = (e = false, cellId) => {\n    if(e) {\n        animateBoard(e)\n    } else {\n        renderCells(cells)\n    }\n};\n\nmodule.exports = render\n\n//# sourceURL=webpack:///./js/helpers/render.js?");

/***/ }),

/***/ "./js/helpers/renderCells.js":
/*!***********************************!*\
  !*** ./js/helpers/renderCells.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { flatBoard } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst renderCells = function(cells) {\n    cells.forEach((cell, cellId) => {\n        if(flatBoard[cellId] === 1) {\n            cell.childNodes[0].style.visibility = 'visible'\n            cell.childNodes[0].setAttribute('src', './css/images/whiteChip.PNG')\n        } else if(flatBoard[cellId] === -1) {\n            cell.childNodes[0].style.visibility = 'visible'\n            cell.childNodes[0].setAttribute('src', './css/images/blackChip.PNG')\n        } else {\n            cell.childNodes[0].style.visibility = 'hidden'\n        }\n    })\n}\n\nmodule.exports = renderCells\n\n//# sourceURL=webpack:///./js/helpers/renderCells.js?");

/***/ }),

/***/ "./js/helpers/updateBoard.js":
/*!***********************************!*\
  !*** ./js/helpers/updateBoard.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {cells, board, flatBoard} = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst updateBoard = (player, cell) => {\n    const cellsArr = [...cells]\n    flatBoard[cellsArr.indexOf(cell[0])] = flatBoard[cellsArr.indexOf(player[0].parentElement)]\n    flatBoard[cellsArr.indexOf(player[0].parentElement)] = 0\n    let i = 0\n    let j = 0\n    while(j < flatBoard.length) {\n        const arr = [flatBoard[j], flatBoard[j+1], flatBoard[j+2], flatBoard[j+3], flatBoard[j+4], flatBoard[j+5], flatBoard[j+6], flatBoard[j+7], flatBoard[j+8], flatBoard[j+9]]\n        board[i] = arr\n        i += 1\n        j += 10\n    }\n}\n\nmodule.exports = updateBoard\n\n//# sourceURL=webpack:///./js/helpers/updateBoard.js?");

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

eval("//constants\nlet chipLookup = {\n    '1': './css/images/whiteChip.PNG',\n    '-1': './css/images/blackChip.PNG'\n}\n\n//_____ app-state\nconst board = [\n    [0,1,0,1,0,1,0,1,0,1],\n    [1,0,1,0,1,0,1,0,1,0],\n    [0,1,0,1,0,1,0,1,0,1],\n    [1,0,1,0,1,0,1,0,1,0],\n    [0,0,0,0,0,0,0,0,0,0],\n    [0,0,0,0,0,0,0,0,0,0],\n    [0,-1,0,-1,0,-1,0,-1,0,-1],\n    [-1,0,-1,0,-1,0,-1,0,-1,0],\n    [0,-1,0,-1,0,-1,0,-1,0,-1],\n    [-1,0,-1,0,-1,0,-1,0,-1,0]\n];\nconst flatBoard = [].concat(...board) \nlet turn = 1\nlet winner = null\nconst highLighted = {\n    player: false,\n    cell: false,\n    playerHighLights: [],\n    cellHighLights: []\n}\n\n//DOM Elements\nconst message = document.querySelector('h1')\nconst cells = document.querySelectorAll('.row > .cell')\nconst evenPlayableCells = [...document.querySelectorAll('.row:nth-child(even) > div:nth-child(odd)')]\nconst oddPlayableCells = [...document.querySelectorAll('.row:nth-child(odd) > div:nth-child(even)')]\nconst playableCells = [];\n\nlet i = 1\n\nwhile(i < 22) {\n    const cellIdArray = [i-1, i, i+1, i+2, i+3]\n\n    cellIdArray.forEach(id => {\n        playableCells.push(oddPlayableCells[id])\n    })\n    cellIdArray.forEach(id => {\n        playableCells.push(evenPlayableCells[id])\n    })\n\n    i+=5  \n}\n\nmodule.exports = {\n    chipLookup,\n    board,\n    flatBoard,\n    turn,\n    winner,\n    highLighted,\n    message,\n    cells,\n    playableCells,\n    evenPlayableCells,\n    oddPlayableCells\n}\n\n//# sourceURL=webpack:///./js/vars/vars.js?");

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