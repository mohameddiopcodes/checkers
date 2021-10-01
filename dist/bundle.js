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

eval("const isChip = __webpack_require__(/*! ./isChip */ \"./js/helpers/isChip.js\")\nconst updateBoard = __webpack_require__(/*! ./updateBoard */ \"./js/helpers/updateBoard.js\")\nconst move = __webpack_require__(/*! ./move */ \"./js/helpers/move.js\")\nlet {cells, highLighted, flatBoard, message, turn} = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\nconst isWhitePiece = __webpack_require__(/*! ./isWhitePiece */ \"./js/helpers/isWhitePiece.js\")\nconst utilities = __webpack_require__(/*! ./utilities */ \"./js/helpers/utilities.js\")\nconst movePiece = __webpack_require__(/*! ./movePiece */ \"./js/helpers/movePiece.js\")\nconst someToEat = __webpack_require__(/*! ./someToEat */ \"./js/helpers/someToEat.js\")\nconst isKing = __webpack_require__(/*! ./isKing */ \"./js/helpers/isKing.js\")\n\nconst animateBoard = function(e) {\n    const cellsArr = [...cells]\n    const capture = e.target.src? someToEat(cellsArr, flatBoard, [e.target.parentElement], turn, isKing([e.target])): false\n    \n    if(turn === 1 && !highLighted.player && isChip(e) && isWhitePiece(e.target) && !highLighted.playerHighLights.length) {\n        highLighted.capture = capture\n\n        if(capture) {\n            utilities({e, highLighted, message}, {displayMessage: 'Capture your opponent', setHighlight: true, flipPlayer: true, pushPlayer: true})   \n        } else {\n            utilities({e, highLighted, message}, {displayMessage: 'Make a move', setHighlight: true, flipPlayer: true, pushPlayer: true})\n        }\n        \n        \n    } else if(turn === -1 && !highLighted.player && isChip(e) && !isWhitePiece(e.target) && !highLighted.playerHighLights.length) {\n        highLighted.capture = capture\n\n        if(capture) {\n            utilities({e, highLighted, message}, {displayMessage: 'Capture your opponent', setHighlight: true, flipPlayer: true, pushPlayer: true})   \n        } else {\n            utilities({e, highLighted, message}, {displayMessage: 'Make a move', setHighlight: true, flipPlayer: true, pushPlayer: true})\n        }\n\n    } else if (highLighted.player && !highLighted.cell && !isChip(e) && !highLighted.cellHighLights.length) {\n\n        utilities({e, highLighted, message}, {displayMessage: 'Make a move', flipCell: true, pushCell: true})\n    \n        const moved = move(highLighted.playerHighLights, highLighted.cellHighLights, turn)\n        turn *= -1\n        \n        if(!moved || (moved === true && highLighted.capture)) {\n            message.textContent = \"Sorry, can't move there\"\n            turn *= -1\n        } else {\n            if(typeof moved === 'number') {\n                movePiece(highLighted.playerHighLights, highLighted.cellHighLights, moved)\n                turn = updateBoard(turn, highLighted.playerHighLights, highLighted.cellHighLights, moved)\n                utilities({message, turn}, {toggleTurn: true})\n                highLighted.capture = null\n            } else {\n                movePiece(highLighted.playerHighLights, highLighted.cellHighLights)\n                utilities({message, turn}, {toggleTurn: true})\n                updateBoard(turn, highLighted.playerHighLights, highLighted.cellHighLights)\n            }\n        }\n\n        utilities({e, highLighted, message}, {removeHighlight: true, flipPlayer: true, popPlayer: true})\n\n        utilities({e, highLighted, message}, {flipCell: true, popCell: true})\n\n        \n        \n    } else if (!highLighted.capture && highLighted.player && e.target === highLighted.playerHighLights[0]) {\n\n        utilities({e, highLighted, message, turn}, {toggleTurn: true, removeHighlight: true, flipPlayer: true, popPlayer: true})\n\n    }\n}\n\nmodule.exports = animateBoard\n\n//# sourceURL=webpack:///./js/helpers/animateBoard.js?");

/***/ }),

/***/ "./js/helpers/checkWin.js":
/*!********************************!*\
  !*** ./js/helpers/checkWin.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let { message, flatBoard } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\nconst utilities = __webpack_require__(/*! ./utilities */ \"./js/helpers/utilities.js\")\n\nconst checkWin = () => {\n    let remaining = flatBoard.filter(item => item === 1 || item === -1)\n\n    if(!flatBoard.includes(1)) {\n        utilities({message}, {displayMessage: 'Black Wins', endGame: true})\n    } else if(!flatBoard.includes(-1)) {\n        utilities({message}, {displayMessage: 'White Wins', endGame: true})\n    } else if(remaining.length === 2) {\n        utilities({message}, {displayMessage: 'Draw', endGame: true})\n    }\n}\n\nmodule.exports = checkWin\n\n//# sourceURL=webpack:///./js/helpers/checkWin.js?");

/***/ }),

/***/ "./js/helpers/init.js":
/*!****************************!*\
  !*** ./js/helpers/init.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const render = __webpack_require__(/*! ./render */ \"./js/helpers/render.js\")\nconst resetGame = __webpack_require__(/*! ./resetGame */ \"./js/helpers/resetGame.js\")\nconst { playableCells, flatBoard } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst init = () => {\n    render(false, flatBoard)\n\n    playableCells.forEach((cell, id) => {\n        cell.addEventListener('click', e => { render(e, id) })\n    })\n    document.querySelector('button').addEventListener('click', resetGame)\n}\n\nmodule.exports = init\n\n//# sourceURL=webpack:///./js/helpers/init.js?");

/***/ }),

/***/ "./js/helpers/isChip.js":
/*!******************************!*\
  !*** ./js/helpers/isChip.js ***!
  \******************************/
/***/ ((module) => {

eval("const isChip = function(e) {\n    if(e.target.children[0]) {\n        return false\n    } else {\n        return true\n    }\n}\n\nmodule.exports = isChip\n\n//# sourceURL=webpack:///./js/helpers/isChip.js?");

/***/ }),

/***/ "./js/helpers/isKing.js":
/*!******************************!*\
  !*** ./js/helpers/isKing.js ***!
  \******************************/
/***/ ((module) => {

eval("const isKing = (player) => player? player[0].src.split('').includes('K') : false\n\nmodule.exports = isKing\n\n//# sourceURL=webpack:///./js/helpers/isKing.js?");

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

/***/ "./js/helpers/move.js":
/*!****************************!*\
  !*** ./js/helpers/move.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { cells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst playLogic = __webpack_require__(/*! ./playLogic */ \"./js/helpers/playLogic.js\")\n\nconst move = (player, cell, turn) => {\n    const cellsArr = [...cells]\n    return playLogic(cellsArr, cell, player, turn)\n}\n\nmodule.exports = move\n\n//# sourceURL=webpack:///./js/helpers/move.js?");

/***/ }),

/***/ "./js/helpers/movePiece.js":
/*!*********************************!*\
  !*** ./js/helpers/movePiece.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { cells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst movePiece = (player, cell, capture = false) => {\n    player[0].style.visibility = 'hidden'\n    cell[0].childNodes[0].src = player[0].src\n    cell[0].childNodes[0].style.visibility = 'visible'\n    if(capture) {\n        cells[capture].childNodes[0].style.visibility = 'hidden'\n    }\n}\n\nmodule.exports = movePiece\n\n//# sourceURL=webpack:///./js/helpers/movePiece.js?");

/***/ }),

/***/ "./js/helpers/playLogic.js":
/*!*********************************!*\
  !*** ./js/helpers/playLogic.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { board, flatBoard, diagonal1, diagonal2 } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\nconst isWhitePiece = __webpack_require__(/*! ./isWhitePiece */ \"./js/helpers/isWhitePiece.js\")\nconst isKing = __webpack_require__(/*! ./isKing */ \"./js/helpers/isKing.js\")\n\nconst playLogic = (cellsArr, cell, player, turn) => {\n\n    let i = 0\n    let j = 0\n\n    if(!isKing(player)) {\n    \n        while(j < cellsArr.length) {\n            const p = j-10\n            const n = j+10\n            const arr = [cellsArr[j], cellsArr[j+1], cellsArr[j+2], cellsArr[j+3], cellsArr[j+4], cellsArr[j+5], cellsArr[j+6], cellsArr[j+7], cellsArr[j+8], cellsArr[j+9]]\n            const prevArr = [cellsArr[p], cellsArr[p+1], cellsArr[p+2], cellsArr[p+3], cellsArr[p+4], cellsArr[p+5], cellsArr[p+6], cellsArr[p+7], cellsArr[p+8], cellsArr[p+9]]\n            const nextArr = [cellsArr[n], cellsArr[n+1], cellsArr[n+2], cellsArr[n+3], cellsArr[n+4], cellsArr[n+5], cellsArr[n+6], cellsArr[n+7], cellsArr[n+8], cellsArr[n+9]]\n\n            if((nextArr.indexOf(cell[0]) > -1 || prevArr.indexOf(cell[0]) > -1)) {\n                const isPlayableCell = isWhitePiece(player[0]) ? ((nextArr.indexOf(cell[0])+1)%10 === arr.indexOf(player[0].parentElement) || (nextArr.indexOf(cell[0])-1)%10 === arr.indexOf(player[0].parentElement)) : ((prevArr.indexOf(cell[0])+1)%10 === arr.indexOf(player[0].parentElement) || (prevArr.indexOf(cell[0])-1)%10 === arr.indexOf(player[0].parentElement))\n                if(arr.includes(player[0].parentElement) && isPlayableCell) {\n                    \n                    return isPlayableCell\n                }\n            } else {\n                const p2 = j-20\n                const n2 = j+20\n                const prevArr2 = [cellsArr[p2], cellsArr[p2+1], cellsArr[p2+2], cellsArr[p2+3], cellsArr[p2+4], cellsArr[p2+5], cellsArr[p2+6], cellsArr[p2+7], cellsArr[p2+8], cellsArr[p2+9]]\n                const nextArr2 = [cellsArr[n2], cellsArr[n2+1], cellsArr[n2+2], cellsArr[n2+3], cellsArr[n2+4], cellsArr[n2+5], cellsArr[n2+6], cellsArr[n2+7], cellsArr[n2+8], cellsArr[n2+9]]\n    \n                const isPlayableCell = nextArr2.includes(cell[0]) ? ((nextArr2.indexOf(cell[0])+2)%10 === arr.indexOf(player[0].parentElement) || (nextArr2.indexOf(cell[0])-2)%10 === arr.indexOf(player[0].parentElement)) : ((prevArr2.indexOf(cell[0])+2)%10 === arr.indexOf(player[0].parentElement) || (prevArr2.indexOf(cell[0])-2)%10 === arr.indexOf(player[0].parentElement))\n                if(nextArr2.indexOf(cell[0]) > -1 || prevArr2.indexOf(cell[0]) > -1) {\n                    if(arr.includes(player[0].parentElement) && isPlayableCell) {\n                        \n                        if(i != 9 && board[i+1][arr.indexOf(player[0].parentElement)+1] === -1*turn && (nextArr2[arr.indexOf(player[0].parentElement)+2] === cell[0])) {\n                            const capturedPieceId = parseInt((i+1).toString() + (arr.indexOf(player[0].parentElement)+1).toString())\n                            \n                            return capturedPieceId\n    \n                        } else if (i != 9 && board[i+1][arr.indexOf(player[0].parentElement)-1] === -1*turn && (nextArr2[arr.indexOf(player[0].parentElement)-2] === cell[0])) {\n                            const capturedPieceId = parseInt((i+1).toString() + (arr.indexOf(player[0].parentElement)-1).toString())\n                            \n                            return capturedPieceId\n    \n                        } else if (i != 0 && board[i-1][arr.indexOf(player[0].parentElement)+1] === -1*turn && (prevArr2[arr.indexOf(player[0].parentElement)+2] === cell[0])) {\n                            const capturedPieceId = parseInt((i-1).toString() + (arr.indexOf(player[0].parentElement)+1).toString())\n                            \n                            return capturedPieceId\n    \n                        }  else if (i != 0 && board[i-1][arr.indexOf(player[0].parentElement)-1] === -1*turn && (prevArr2[arr.indexOf(player[0].parentElement)-2] === cell[0])) {\n                            const capturedPieceId = parseInt((i-1).toString() + (arr.indexOf(player[0].parentElement)-1).toString())\n                            \n                            return capturedPieceId\n    \n                        }\n                    }\n                }\n            }\n    \n            i += 1\n            j += 10\n        }     \n    } else {\n        let moved = false\n        const ennemies = []\n        diagonal1.forEach(arr => {\n            if(arr.includes(cellsArr.indexOf(player[0].parentElement)) && arr.includes(cellsArr.indexOf(cell[0]))) {\n                arr.forEach((id) => {\n                    if(flatBoard[id] === -1*turn && id > cellsArr.indexOf(cell[0]) && id < cellsArr.indexOf(player[0].parentElement)){\n\n                        let path = arr.filter(item => item >= cellsArr.indexOf(cell[0]) && item < cellsArr.indexOf(player[0].parentElement))\n                        path = path.filter(item => ![cellsArr.indexOf(player[0].parentElement), id].includes(item))\n                        if(path.filter(item => flatBoard[item] === 0).length === path.length) {\n                            moved = id\n                            \n                        }\n\n                    } else if(flatBoard[id] === -1*turn && id < cellsArr.indexOf(cell[0]) && id > cellsArr.indexOf(player[0].parentElement)) {\n\n                        let path = arr.filter(item => item > cellsArr.indexOf(player[0].parentElement) && item <= cellsArr.indexOf(cell[0]))\n                        path = path.filter(item => ![cellsArr.indexOf(player[0].parentElement), id].includes(item))\n                        if(path.filter(item => flatBoard[item] === 0).length === path.length) {\n                            moved = id\n                            \n                        }\n                    } else if (cellsArr.indexOf(cell[0]) > cellsArr.indexOf(player[0].parentElement)) {\n                        let path = arr.filter(item => item > cellsArr.indexOf(player[0].parentElement) && item <= cellsArr.indexOf(cell[0]))\n                        path = path.filter(item => cellsArr.indexOf(player[0].parentElement) != item)\n                        if(path.filter(item => flatBoard[item] === 0).length === path.length) {\n                            moved = true\n                            \n                        }\n                    } else if (cellsArr.indexOf(player[0].parentElement) > cellsArr.indexOf(cell[0])) {\n                        let path = arr.filter(item => item >= cellsArr.indexOf(cell[0]) && item < cellsArr.indexOf(player[0].parentElement))\n                        path = path.filter(item => cellsArr.indexOf(player[0].parentElement) != item)\n                        if(path.filter(item => flatBoard[item] === 0).length === path.length) {\n                            moved = true\n                            \n                        }\n                    }\n                })\n            }\n        })\n        diagonal2.forEach(arr => {\n            if(arr.includes(cellsArr.indexOf(player[0].parentElement)) && arr.includes(cellsArr.indexOf(cell[0]))) {\n                arr.forEach((id) => {\n                    if(flatBoard[id] === -1*turn && id > cellsArr.indexOf(cell[0]) && id < cellsArr.indexOf(player[0].parentElement)){\n\n                        let path = arr.filter(item => item >= cellsArr.indexOf(cell[0]) && item < cellsArr.indexOf(player[0].parentElement))\n                        path = path.filter(item => ![cellsArr.indexOf(player[0].parentElement), id].includes(item))\n                        if(path.filter(item => flatBoard[item] === 0).length === path.length) {\n                            moved = id\n                            \n                        }\n\n                    } else if(flatBoard[id] === -1*turn && id < cellsArr.indexOf(cell[0]) && id > cellsArr.indexOf(player[0].parentElement)) {\n\n                        let path = arr.filter(item => item > cellsArr.indexOf(player[0].parentElement) && item <= cellsArr.indexOf(cell[0]))\n                        path = path.filter(item => ![cellsArr.indexOf(player[0].parentElement), id].includes(item))\n                        if(path.filter(item => flatBoard[item] === 0).length === path.length) {\n                            moved = id\n                            \n                        }\n                    } else if (cellsArr.indexOf(cell[0]) > cellsArr.indexOf(player[0].parentElement)) {\n                        let path = arr.filter(item => item > cellsArr.indexOf(player[0].parentElement) && item <= cellsArr.indexOf(cell[0]))\n                        path = path.filter(item => cellsArr.indexOf(player[0].parentElement) != item)\n                        if(path.filter(item => flatBoard[item] === 0).length === path.length) {\n                            moved = true\n                            \n                        }\n                    } else if (cellsArr.indexOf(player[0].parentElement) > cellsArr.indexOf(cell[0])) {\n                        let path = arr.filter(item => item >= cellsArr.indexOf(cell[0]) && item < cellsArr.indexOf(player[0].parentElement))\n                        path = path.filter(item => cellsArr.indexOf(player[0].parentElement) != item)\n                        if(path.filter(item => flatBoard[item] === 0).length === path.length) {\n                            moved = true\n                            \n                        }\n                    }\n                })\n            }\n        })\n        return moved\n    }\n}\n\nmodule.exports = playLogic\n\n//# sourceURL=webpack:///./js/helpers/playLogic.js?");

/***/ }),

/***/ "./js/helpers/render.js":
/*!******************************!*\
  !*** ./js/helpers/render.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderCells = __webpack_require__(/*! ./renderCells */ \"./js/helpers/renderCells.js\")\nconst animateBoard = __webpack_require__(/*! ./animateBoard */ \"./js/helpers/animateBoard.js\")\nconst makeKing = __webpack_require__(/*! ./makeKing */ \"./js/helpers/makeKing.js\")\nconst { cells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\");\nconst checkWin = __webpack_require__(/*! ./checkWin */ \"./js/helpers/checkWin.js\");\n\nconst render = (e = false) => {\n    if(e) {\n        animateBoard(e)\n        makeKing(e)\n        checkWin()\n    } else {\n        renderCells(cells)\n    }\n};\n\nmodule.exports = render\n\n//# sourceURL=webpack:///./js/helpers/render.js?");

/***/ }),

/***/ "./js/helpers/renderCells.js":
/*!***********************************!*\
  !*** ./js/helpers/renderCells.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { flatBoard } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst renderCells = function(cells) {\n    cells.forEach((cell, cellId) => {\n        if(flatBoard[cellId] === 1) {\n            cell.childNodes[0].style.visibility = 'visible'\n            cell.childNodes[0].setAttribute('src', './css/images/whiteChip.PNG')\n        } else if(flatBoard[cellId] === -1) {\n            cell.childNodes[0].style.visibility = 'visible'\n            cell.childNodes[0].setAttribute('src', './css/images/blackChip.PNG')\n        } else {\n            cell.childNodes[0].style.visibility = 'hidden'\n        }\n    })\n}\n\nmodule.exports = renderCells\n\n//# sourceURL=webpack:///./js/helpers/renderCells.js?");

/***/ }),

/***/ "./js/helpers/resetGame.js":
/*!*********************************!*\
  !*** ./js/helpers/resetGame.js ***!
  \*********************************/
/***/ ((module) => {

eval("const resetGame = (e) => {\n    location.reload()\n}\n\nmodule.exports = resetGame\n\n//# sourceURL=webpack:///./js/helpers/resetGame.js?");

/***/ }),

/***/ "./js/helpers/someToEat.js":
/*!*********************************!*\
  !*** ./js/helpers/someToEat.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {diagonal1, diagonal2} = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst someToEat = (cellsArr, flatBoard, player, turn, isKing) => {\n    let afterEnnemy = []\n    let beforeEnnemy = []\n    let found = false\n\n    diagonal1.forEach(arr => {\n        if(arr.includes(cellsArr.indexOf(player[0]))) {\n\n            arr.forEach((id) => {\n                if(flatBoard[id] === -1*turn && id < cellsArr.indexOf(player[0])){\n                    afterEnnemy = arr.filter(item => item < id)\n                    beforeEnnemy = arr.filter(item => item > id && item < cellsArr.indexOf(player[0]))\n                    \n                    if(!isKing && beforeEnnemy.length === 0 && flatBoard[afterEnnemy[afterEnnemy.length - 1]] === 0) {\n                        found = id\n                    } else if(isKing && flatBoard[afterEnnemy[afterEnnemy.length - 1]] === 0) {\n                        found = id\n                    }\n                    \n                } else if(flatBoard[id] === -1*turn && id > cellsArr.indexOf(player[0])) {\n                    afterEnnemy = arr.filter(item => item > id)\n                    beforeEnnemy = arr.filter(item => item < id && item > cellsArr.indexOf(player[0]))\n\n                    if(!isKing && beforeEnnemy.length === 0 && flatBoard[afterEnnemy[0]] === 0) {\n                        found = id\n                    } else if(isKing && flatBoard[afterEnnemy[0]] === 0) {\n                        found = id\n                    }\n                    \n                }\n            })\n        }\n    })\n    diagonal2.forEach(arr => {\n        if(arr.includes(cellsArr.indexOf(player[0]))) {\n\n            arr.forEach((id) => {\n                if(flatBoard[id] === -1*turn && id < cellsArr.indexOf(player[0])){\n                    afterEnnemy = arr.filter(item => item < id)\n                    beforeEnnemy = arr.filter(item => item > id && item < cellsArr.indexOf(player[0]))\n                    \n                    if(!isKing && beforeEnnemy.length === 0 && flatBoard[afterEnnemy[afterEnnemy.length - 1]] === 0) {\n                        found = id\n                    } else if(isKing && flatBoard[afterEnnemy[afterEnnemy.length - 1]] === 0) {\n                        found = id\n                    }\n                    \n                } else if(flatBoard[id] === -1*turn && id > cellsArr.indexOf(player[0])) {\n                    afterEnnemy = arr.filter(item => item > id)\n                    beforeEnnemy = arr.filter(item => item < id && item > cellsArr.indexOf(player[0]))\n\n                    if(!isKing && beforeEnnemy.length === 0 && flatBoard[afterEnnemy[0]] === 0) {\n                        found = id\n                    } else if(isKing && flatBoard[afterEnnemy[0]] === 0) {\n                        found = id\n                    }\n                    \n                }\n            })\n        }\n    })\n    return found\n}\n\nmodule.exports = someToEat\n\n//# sourceURL=webpack:///./js/helpers/someToEat.js?");

/***/ }),

/***/ "./js/helpers/updateBoard.js":
/*!***********************************!*\
  !*** ./js/helpers/updateBoard.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {cells, board, flatBoard } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\nconst someToEat = __webpack_require__(/*! ./someToEat */ \"./js/helpers/someToEat.js\")\nconst isKing = __webpack_require__(/*! ./isKing */ \"./js/helpers/isKing.js\")\n\nconst updateBoard = (turn, player, cell, moved = false) => {\n    const cellsArr = [...cells]\n    const cellsBoard = []\n    flatBoard[cellsArr.indexOf(cell[0])] = flatBoard[cellsArr.indexOf(player[0].parentElement)]\n    flatBoard[cellsArr.indexOf(player[0].parentElement)] = 0\n    if(moved) {\n        flatBoard[moved] = 0\n    }\n    let i = 0\n    let j = 0\n    while(j < flatBoard.length) {\n        const arr = [flatBoard[j], flatBoard[j+1], flatBoard[j+2], flatBoard[j+3], flatBoard[j+4], flatBoard[j+5], flatBoard[j+6], flatBoard[j+7], flatBoard[j+8], flatBoard[j+9]]\n        cellsBoard[i] = [cellsArr[j], cellsArr[j+1], cellsArr[j+2], cellsArr[j+3], cellsArr[j+4], cellsArr[j+5], cellsArr[j+6], cellsArr[j+7], cellsArr[j+8], cellsArr[j+9]]\n        board[i] = arr\n        i += 1\n        j += 10\n    }\n\n    if(someToEat(cellsArr, flatBoard, cell, -1*turn, isKing(player))) {\n        turn *= -1\n    }\n    return turn\n}\n\nmodule.exports = updateBoard\n\n//# sourceURL=webpack:///./js/helpers/updateBoard.js?");

/***/ }),

/***/ "./js/helpers/utilities.js":
/*!*********************************!*\
  !*** ./js/helpers/utilities.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let { cells } = __webpack_require__(/*! ../vars/vars */ \"./js/vars/vars.js\")\n\nconst utilities = ({e, highLighted, turn, message}, {displayMessage, toggleTurn, setHighlight, removeHighlight, flipPlayer, flipCell, pushPlayer, popPlayer, pushCell, popCell, endGame}) => {\n    if(displayMessage) {\n        message.textContent = displayMessage\n    }\n    if(toggleTurn) {\n        message.textContent = turn === 1 ? \"White's Turn\": \"Black's Turn\"\n    }\n    if(flipPlayer) {\n        highLighted.player = !highLighted.player\n    } \n    if(flipCell) {\n        highLighted.cell = !highLighted.cell\n    }\n   if(setHighlight) {\n        e.target.setAttribute('class', 'highlight')\n   }\n   if(removeHighlight) {\n        highLighted.playerHighLights[0].classList.remove('highlight')\n   }\n   if(pushPlayer) {\n        highLighted.playerHighLights.push(e.target)\n   }\n   if(popPlayer) {\n        highLighted.playerHighLights.pop()\n   }\n   if(pushCell) {\n        highLighted.cellHighLights.push(e.target)\n   }\n   if(popCell) {\n        highLighted.cellHighLights.pop()\n   }\n   if(endGame) {\n      document.querySelector('button').style.visibility = 'visible'\n      cells.forEach(cell => {\n          cell.style.pointerEvents = 'none';\n      })\n   }\n}\n\nmodule.exports = utilities\n\n//# sourceURL=webpack:///./js/helpers/utilities.js?");

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

eval("//_____ app-state\nlet chipLookup , board, flatBoard, resetBoard, turn, highLighted, diagonal1, diagonal2\nlet playableCells = []\n\n//DOM Elements\nconst message = document.querySelector('h1')\nconst cells = document.querySelectorAll('.row > .cell')\nconst evenPlayableCells = [...document.querySelectorAll('.row:nth-child(even) > div:nth-child(odd)')]\nconst oddPlayableCells = [...document.querySelectorAll('.row:nth-child(odd) > div:nth-child(even)')]\n\n\nconst setState = () => {\n        //constants\n    chipLookup = {\n        '1': './css/images/whiteChip.PNG',\n        '-1': './css/images/blackChip.PNG'\n    }\n\n    //_____ app-state\n    board = [\n        [0,1,0,1,0,1,0,1,0,1],\n        [1,0,1,0,1,0,1,0,1,0],\n        [0,1,0,1,0,1,0,1,0,1],\n        [1,0,1,0,1,0,1,0,1,0],\n        [0,0,0,0,0,0,0,0,0,0],\n        [0,0,0,0,0,0,0,0,0,0],\n        [0,-1,0,-1,0,-1,0,-1,0,-1],\n        [-1,0,-1,0,-1,0,-1,0,-1,0],\n        [0,-1,0,-1,0,-1,0,-1,0,-1],\n        [-1,0,-1,0,-1,0,-1,0,-1,0]\n    ]\n    flatBoard = [].concat(...board)\n    resetBoard = [...flatBoard] \n    turn = 1\n    highLighted = {\n        player: false,\n        cell: false,\n        playerHighLights: [],\n        cellHighLights: []\n    }\n\n    diagonal1 = [\n        [1, 10],\n        [3, 12, 21, 30],\n        [5, 14, 23, 32, 41, 50],\n        [7, 16, 25, 34, 43, 52, 61, 70],\n        [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],\n        [29, 38, 47, 56, 65, 74, 83, 92],\n        [49, 58, 67, 76, 85, 94],\n        [69, 78, 87, 96],\n        [89, 98]\n    ]\n    diagonal2 = [\n        [9],\n        [7, 18, 29],\n        [5, 16, 27, 38, 49],\n        [3, 14, 25, 36, 47, 58, 69],\n        [1, 12, 23, 34, 45, 56, 67, 78, 89],\n        [10, 21, 32, 43, 54, 65, 76, 87, 98],\n        [30, 41, 52, 63, 74, 85, 96],\n        [50, 61, 72, 83, 94],\n        [70, 81, 92],\n        [90]\n    ]\n\n    i = 1\n\n    while(i < 22) {\n        cellIdArray = [i-1, i, i+1, i+2, i+3]\n\n        cellIdArray.forEach(id => {\n            playableCells.push(oddPlayableCells[id])\n        })\n        cellIdArray.forEach(id => {\n            playableCells.push(evenPlayableCells[id])\n        })\n\n        i+=5  \n    }\n}\n\nsetState()\n\nmodule.exports = {\n    chipLookup,\n    board,\n    flatBoard,\n    turn,\n    highLighted,\n    message,\n    cells,\n    playableCells,\n    evenPlayableCells,\n    oddPlayableCells,\n    diagonal1,\n    diagonal2,\n    resetBoard,\n    setState\n}\n\n//# sourceURL=webpack:///./js/vars/vars.js?");

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