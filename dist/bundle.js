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

eval("const isChip = __webpack_require__(/*! ./isChip */ \"./js/helpers/isChip.js\")\nconst updateBoard = __webpack_require__(/*! ./updateBoard */ \"./js/helpers/updateBoard.js\")\nconst move = __webpack_require__(/*! ./move */ \"./js/helpers/move.js\")\nlet {highLighted, message, turn} = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\nconst isWhitePiece = __webpack_require__(/*! ./isWhitePiece */ \"./js/helpers/isWhitePiece.js\")\nconst moveUtility = __webpack_require__(/*! ./moveUtility */ \"./js/helpers/moveUtility.js\")\n\nconst animateBoard = function(e) {\n    if(turn === 1 && !highLighted.player && isChip(e) && isWhitePiece(e.target) && !highLighted.playerHighLights.length) {\n\n        moveUtility({e, highLighted, message}, {displayMessage: 'Make a move', setHighlight: true, flipPlayer: true, pushPlayer: true})\n    \n    } else if(turn === -1 && !highLighted.player && isChip(e) && !isWhitePiece(e.target) && !highLighted.playerHighLights.length) {\n\n        moveUtility({e, highLighted, message}, {displayMessage: 'Make a move', setHighlight: true, flipPlayer: true, pushPlayer: true})\n    \n    } else if (highLighted.player && !highLighted.cell && !isChip(e) && !highLighted.cellHighLights.length) {\n\n        moveUtility({e, highLighted, message}, {displayMessage: 'Make a move', flipCell: true, pushCell: true})\n\n        const moved = move(highLighted.playerHighLights, highLighted.cellHighLights, turn)\n        turn *= -1\n        if(!moved) {\n            message.textContent = \"Sorry, can't move there\"\n            turn *= -1\n        } else {\n            if(typeof moved === 'number') {\n                turn = updateBoard(turn, highLighted.playerHighLights, highLighted.cellHighLights, moved)\n                moveUtility({message, turn}, {toggleTurn: true})\n            } else {\n                moveUtility({message, turn}, {toggleTurn: true})\n                updateBoard(turn, highLighted.playerHighLights, highLighted.cellHighLights)\n            }\n        }\n\n        moveUtility({e, highLighted, message}, {removeHighlight: true, flipPlayer: true, popPlayer: true})\n\n        moveUtility({e, highLighted, message}, {flipCell: true, popCell: true})\n        \n    } else if (highLighted.player && e.target === highLighted.playerHighLights[0]) {\n\n        moveUtility({e, highLighted, message, turn}, {toggleTurn: true, removeHighlight: true, flipPlayer: true, popPlayer: true})\n\n    }\n}\n\nmodule.exports = animateBoard\n\n//# sourceURL=webpack:///./js/helpers/animateBoard.js?");

/***/ }),

/***/ "./js/helpers/checkWin.js":
/*!********************************!*\
  !*** ./js/helpers/checkWin.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { message, board, flatBoard } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\nconst moveUtility = __webpack_require__(/*! ./moveUtility */ \"./js/helpers/moveUtility.js\")\n\n\nconst checkWin = () => {\n    if(!flatBoard.includes(1) && flatBoard.includes(-1)) {\n        moveUtility({message}, {displayMessage: 'Black Wins'})\n    } else if(!flatBoard.includes(-1) && flatBoard.includes(1)) {\n        moveUtility({message}, {displayMessage: 'White Wins'})\n    }\n}\n\nmodule.exports = checkWin\n\n//# sourceURL=webpack:///./js/helpers/checkWin.js?");

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

/***/ "./js/helpers/isWhitePiece.js":
/*!************************************!*\
  !*** ./js/helpers/isWhitePiece.js ***!
  \************************************/
/***/ ((module) => {

eval("const isWhitePiece = img => img.src && img.src.split('').includes('w') ? true:false\n\nmodule.exports = isWhitePiece\n\n//# sourceURL=webpack:///./js/helpers/isWhitePiece.js?");

/***/ }),

/***/ "./js/helpers/makeKing.js":
/*!********************************!*\
  !*** ./js/helpers/makeKing.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const isWhitePiece = __webpack_require__(/*! ./isWhitePiece */ \"./js/helpers/isWhitePiece.js\")\n\nconst makeKing = (e) => {\n    if(e) {\n        const firstRow = document.querySelector('.first-row')\n        const lastRow = document.querySelector('.last-row')\n\n        if([...lastRow.childNodes].includes(e.target) && isWhitePiece(e.target.childNodes[0])) {\n            e.target.childNodes[0].src = './css/images/whiteKing.PNG'\n        } else if([...firstRow.childNodes].includes(e.target) && !isWhitePiece(e.target.childNodes[0])) {\n            e.target.childNodes[0].src = './css/images/blackKing.PNG'\n        }\n    }\n}\n\nmodule.exports = makeKing\n\n//# sourceURL=webpack:///./js/helpers/makeKing.js?");

/***/ }),

/***/ "./js/helpers/manPlayLogic.js":
/*!************************************!*\
  !*** ./js/helpers/manPlayLogic.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { board, cells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\nconst movePiece = __webpack_require__(/*! ./movePiece */ \"./js/helpers/movePiece.js\")\nconst isWhitePiece = __webpack_require__(/*! ./isWhitePiece */ \"./js/helpers/isWhitePiece.js\")\n\nconst manPlayLogic = (cellsArr, cell, player, turn) => {\n    let i = 0\n    let j = 0\n    while(j < cellsArr.length) {\n        const p = j-10\n        const n = j+10\n        const arr = [cellsArr[j], cellsArr[j+1], cellsArr[j+2], cellsArr[j+3], cellsArr[j+4], cellsArr[j+5], cellsArr[j+6], cellsArr[j+7], cellsArr[j+8], cellsArr[j+9]]\n        const prevArr = [cellsArr[p], cellsArr[p+1], cellsArr[p+2], cellsArr[p+3], cellsArr[p+4], cellsArr[p+5], cellsArr[p+6], cellsArr[p+7], cellsArr[p+8], cellsArr[p+9]]\n        const nextArr = [cellsArr[n], cellsArr[n+1], cellsArr[n+2], cellsArr[n+3], cellsArr[n+4], cellsArr[n+5], cellsArr[n+6], cellsArr[n+7], cellsArr[n+8], cellsArr[n+9]]\n\n        if(nextArr.indexOf(cell[0]) > -1 || prevArr.indexOf(cell[0]) > -1) {\n            const isPlayableCell = isWhitePiece(player[0]) ? ((nextArr.indexOf(cell[0])+1)%10 === arr.indexOf(player[0].parentElement) || (nextArr.indexOf(cell[0])-1)%10 === arr.indexOf(player[0].parentElement)) : ((prevArr.indexOf(cell[0])+1)%10 === arr.indexOf(player[0].parentElement) || (prevArr.indexOf(cell[0])-1)%10 === arr.indexOf(player[0].parentElement))\n            if(arr.includes(player[0].parentElement) && isPlayableCell) {\n                movePiece(player, cell)\n                return isPlayableCell\n            }\n        } else {\n            const p2 = j-20\n            const n2 = j+20\n            const prevArr2 = [cellsArr[p2], cellsArr[p2+1], cellsArr[p2+2], cellsArr[p2+3], cellsArr[p2+4], cellsArr[p2+5], cellsArr[p2+6], cellsArr[p2+7], cellsArr[p2+8], cellsArr[p2+9]]\n            const nextArr2 = [cellsArr[n2], cellsArr[n2+1], cellsArr[n2+2], cellsArr[n2+3], cellsArr[n2+4], cellsArr[n2+5], cellsArr[n2+6], cellsArr[n2+7], cellsArr[n2+8], cellsArr[n2+9]]\n\n            const isPlayableCell = nextArr2.includes(cell[0]) ? ((nextArr2.indexOf(cell[0])+2)%10 === arr.indexOf(player[0].parentElement) || (nextArr2.indexOf(cell[0])-2)%10 === arr.indexOf(player[0].parentElement)) : ((prevArr2.indexOf(cell[0])+2)%10 === arr.indexOf(player[0].parentElement) || (prevArr2.indexOf(cell[0])-2)%10 === arr.indexOf(player[0].parentElement))\n            if(nextArr2.indexOf(cell[0]) > -1 || prevArr2.indexOf(cell[0]) > -1) {\n                if(arr.includes(player[0].parentElement) && isPlayableCell) {\n                    \n                    if(i != 9 && board[i+1][arr.indexOf(player[0].parentElement)+1] === -1*turn && (nextArr2[arr.indexOf(player[0].parentElement)+2] === cell[0])) {\n                        const capturedPieceId = parseInt((i+1).toString() + (arr.indexOf(player[0].parentElement)+1).toString())\n                        cells[capturedPieceId].childNodes[0].style.visibility = 'hidden'\n                        movePiece(player, cell)\n                        return capturedPieceId\n\n                    } else if (i != 9 && board[i+1][arr.indexOf(player[0].parentElement)-1] === -1*turn && (nextArr2[arr.indexOf(player[0].parentElement)-2] === cell[0])) {\n                        const capturedPieceId = parseInt((i+1).toString() + (arr.indexOf(player[0].parentElement)-1).toString())\n                        cells[capturedPieceId].childNodes[0].style.visibility = 'hidden'\n                        movePiece(player, cell)\n                        return capturedPieceId\n\n                    } else if (i != 0 && board[i-1][arr.indexOf(player[0].parentElement)+1] === -1*turn && (prevArr2[arr.indexOf(player[0].parentElement)+2] === cell[0])) {\n                        const capturedPieceId = parseInt((i-1).toString() + (arr.indexOf(player[0].parentElement)+1).toString())\n                        cells[capturedPieceId].childNodes[0].style.visibility = 'hidden'\n                        movePiece(player, cell)\n                        return capturedPieceId\n\n                    }  else if (i != 0 && board[i-1][arr.indexOf(player[0].parentElement)-1] === -1*turn && (prevArr2[arr.indexOf(player[0].parentElement)-2] === cell[0])) {\n                        const capturedPieceId = parseInt((i-1).toString() + (arr.indexOf(player[0].parentElement)-1).toString())\n                        cells[capturedPieceId].childNodes[0].style.visibility = 'hidden'\n                        movePiece(player, cell)\n                        return capturedPieceId\n\n                    }\n                }\n            }\n        }\n\n        i += 1\n        j += 10\n    }\n}\n\nmodule.exports = manPlayLogic\n\n//# sourceURL=webpack:///./js/helpers/manPlayLogic.js?");

/***/ }),

/***/ "./js/helpers/move.js":
/*!****************************!*\
  !*** ./js/helpers/move.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { cells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\nconst manPlayLogic = __webpack_require__(/*! ./manPlayLogic */ \"./js/helpers/manPlayLogic.js\")\n\nconst move = (player, cell, turn) => {\n    const cellsArr = [...cells]\n    return manPlayLogic(cellsArr, cell, player, turn)\n}\n\nmodule.exports = move\n\n//# sourceURL=webpack:///./js/helpers/move.js?");

/***/ }),

/***/ "./js/helpers/movePiece.js":
/*!*********************************!*\
  !*** ./js/helpers/movePiece.js ***!
  \*********************************/
/***/ ((module) => {

eval("const movePiece = (player, cell) => {\n    player[0].style.visibility = 'hidden'\n    cell[0].childNodes[0].src = player[0].src\n    cell[0].childNodes[0].style.visibility = 'visible'\n}\n\nmodule.exports = movePiece\n\n//# sourceURL=webpack:///./js/helpers/movePiece.js?");

/***/ }),

/***/ "./js/helpers/moveUtility.js":
/*!***********************************!*\
  !*** ./js/helpers/moveUtility.js ***!
  \***********************************/
/***/ ((module) => {

eval("const moveUtility = ({e, highLighted, turn, message}, {displayMessage, toggleTurn, setHighlight, removeHighlight, flipPlayer, flipCell, flipTurn, pushPlayer, popPlayer, pushCell, popCell}) => {\n    if(displayMessage) {\n        message.textContent = displayMessage\n    }\n    if(toggleTurn) {\n        message.textContent = turn === 1 ? \"White's Turn\": \"Black's Turn\"\n    }\n    if(flipPlayer) {\n        highLighted.player = !highLighted.player\n    } \n    if(flipCell) {\n        highLighted.cell = !highLighted.cell\n    }\n   if(setHighlight) {\n        e.target.setAttribute('class', 'highlight')\n   }\n   if(removeHighlight) {\n        highLighted.playerHighLights[0].classList.remove('highlight')\n   }\n   if(pushPlayer) {\n        highLighted.playerHighLights.push(e.target)\n   }\n   if(popPlayer) {\n        highLighted.playerHighLights.pop()\n   }\n   if(pushCell) {\n        highLighted.cellHighLights.push(e.target)\n   }\n   if(popCell) {\n        highLighted.cellHighLights.pop()\n   }\n}\n\nmodule.exports = moveUtility\n\n//# sourceURL=webpack:///./js/helpers/moveUtility.js?");

/***/ }),

/***/ "./js/helpers/render.js":
/*!******************************!*\
  !*** ./js/helpers/render.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderCells = __webpack_require__(/*! ./renderCells */ \"./js/helpers/renderCells.js\")\nconst animateBoard = __webpack_require__(/*! ./animateBoard */ \"./js/helpers/animateBoard.js\")\nconst makeKing = __webpack_require__(/*! ./makeKing */ \"./js/helpers/makeKing.js\")\nconst { cells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\");\nconst checkWin = __webpack_require__(/*! ./checkWin */ \"./js/helpers/checkWin.js\");\n\nconst render = (e = false, cellId) => {\n    if(e) {\n        animateBoard(e)\n        makeKing(e)\n        checkWin()\n    } else {\n        renderCells(cells)\n    }\n};\n\nmodule.exports = render\n\n//# sourceURL=webpack:///./js/helpers/render.js?");

/***/ }),

/***/ "./js/helpers/renderCells.js":
/*!***********************************!*\
  !*** ./js/helpers/renderCells.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { flatBoard } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst renderCells = function(cells) {\n    cells.forEach((cell, cellId) => {\n        if(flatBoard[cellId] === 1) {\n            cell.childNodes[0].style.visibility = 'visible'\n            cell.childNodes[0].setAttribute('src', './css/images/whiteChip.PNG')\n        } else if(flatBoard[cellId] === -1) {\n            cell.childNodes[0].style.visibility = 'visible'\n            cell.childNodes[0].setAttribute('src', './css/images/blackChip.PNG')\n        } else {\n            cell.childNodes[0].style.visibility = 'hidden'\n        }\n    })\n}\n\nmodule.exports = renderCells\n\n//# sourceURL=webpack:///./js/helpers/renderCells.js?");

/***/ }),

/***/ "./js/helpers/someToEat.js":
/*!*********************************!*\
  !*** ./js/helpers/someToEat.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { board, cells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst someToEat = (cellsArr, flatBoard, player) => {\n    let found = false\n    const targetCells = [cellsArr[cellsArr.indexOf(player[0]) + 22], cellsArr[cellsArr.indexOf(player[0]) + 18], cellsArr[cellsArr.indexOf(player[0]) - 22], cellsArr[cellsArr.indexOf(player[0]) - 18]]\n    const targetPieces = [cellsArr[cellsArr.indexOf(player[0]) + 11], cellsArr[cellsArr.indexOf(player[0]) + 9], cellsArr[cellsArr.indexOf(player[0]) - 11], cellsArr[cellsArr.indexOf(player[0]) - 9]]\n    targetPieces.forEach((target, id) => {\n        switch(id) {\n            case 0:\n                if(flatBoard[(cellsArr.indexOf(player[0])+11)] != 0) {\n                    if(flatBoard[cellsArr.indexOf(player[0])] === -1* flatBoard[cellsArr.indexOf(target)] && flatBoard[cellsArr.indexOf(targetCells[0])] === 0 && cellsArr.indexOf(target)%10 != 0 && cellsArr.indexOf(target)%10 != 9) {\n                        found = true\n                    }\n                }\n                break;\n            case 1:\n                if(flatBoard[(cellsArr.indexOf(player[0])+9)] != 0) {\n                    if(flatBoard[cellsArr.indexOf(player[0])] === -1* flatBoard[cellsArr.indexOf(target)] && flatBoard[cellsArr.indexOf(targetCells[1])] === 0 && cellsArr.indexOf(target)%10 != 0 && cellsArr.indexOf(target)%10 != 9) {\n                        found = true\n                    }\n                }\n                break;\n            case 2:\n                if(flatBoard[(cellsArr.indexOf(player[0])-11)] != 0) {\n                    if(flatBoard[cellsArr.indexOf(player[0])] === -1* flatBoard[cellsArr.indexOf(target)] && flatBoard[cellsArr.indexOf(targetCells[2])] === 0 && cellsArr.indexOf(target)%10 != 0 && cellsArr.indexOf(target)%10 != 9) {\n                        found = true\n                    }\n                }\n                break;\n            case 3:\n                if(flatBoard[(cellsArr.indexOf(player[0])-9)] != 0) {\n                    if(flatBoard[cellsArr.indexOf(player[0])] === -1* flatBoard[cellsArr.indexOf(target)] && flatBoard[cellsArr.indexOf(targetCells[3])] === 0 && cellsArr.indexOf(target)%10 != 0 && cellsArr.indexOf(target)%10 != 9) {\n                        found = true\n                    }\n                }\n                break;\n        }\n    })\n    return found\n}\n\nmodule.exports = someToEat\n\n//# sourceURL=webpack:///./js/helpers/someToEat.js?");

/***/ }),

/***/ "./js/helpers/updateBoard.js":
/*!***********************************!*\
  !*** ./js/helpers/updateBoard.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {cells, board, flatBoard} = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\nconst someToEat = __webpack_require__(/*! ./someToEat */ \"./js/helpers/someToEat.js\")\n\nconst updateBoard = (turn, player, cell, moved = false) => {\n    const cellsArr = [...cells]\n    const cellsBoard = []\n    flatBoard[cellsArr.indexOf(cell[0])] = flatBoard[cellsArr.indexOf(player[0].parentElement)]\n    flatBoard[cellsArr.indexOf(player[0].parentElement)] = 0\n    if(moved) {\n        flatBoard[moved] = 0\n    }\n    let i = 0\n    let j = 0\n    while(j < flatBoard.length) {\n        const arr = [flatBoard[j], flatBoard[j+1], flatBoard[j+2], flatBoard[j+3], flatBoard[j+4], flatBoard[j+5], flatBoard[j+6], flatBoard[j+7], flatBoard[j+8], flatBoard[j+9]]\n        cellsBoard[i] = [cellsArr[j], cellsArr[j+1], cellsArr[j+2], cellsArr[j+3], cellsArr[j+4], cellsArr[j+5], cellsArr[j+6], cellsArr[j+7], cellsArr[j+8], cellsArr[j+9]]\n        board[i] = arr\n        i += 1\n        j += 10\n    }\n\n    if(someToEat(cellsArr, flatBoard, cell, turn)) {\n        turn *= -1\n    }\n    return turn\n}\n\nmodule.exports = updateBoard\n\n//# sourceURL=webpack:///./js/helpers/updateBoard.js?");

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