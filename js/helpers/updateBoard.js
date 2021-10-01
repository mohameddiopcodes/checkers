const {cells, board, flatBoard } = require('../vars/vars')
const someToEat = require('./someToEat')
const isKing = require('./isKing')

const updateBoard = (turn, player, cell, moved = false) => {
    const cellsArr = [...cells]
    const cellsBoard = []
    flatBoard[cellsArr.indexOf(cell[0])] = flatBoard[cellsArr.indexOf(player[0].parentElement)]
    flatBoard[cellsArr.indexOf(player[0].parentElement)] = 0
    if(moved) {
        flatBoard[moved] = 0
    }
    let i = 0
    let j = 0
    while(j < flatBoard.length) {
        const arr = [flatBoard[j], flatBoard[j+1], flatBoard[j+2], flatBoard[j+3], flatBoard[j+4], flatBoard[j+5], flatBoard[j+6], flatBoard[j+7], flatBoard[j+8], flatBoard[j+9]]
        cellsBoard[i] = [cellsArr[j], cellsArr[j+1], cellsArr[j+2], cellsArr[j+3], cellsArr[j+4], cellsArr[j+5], cellsArr[j+6], cellsArr[j+7], cellsArr[j+8], cellsArr[j+9]]
        board[i] = arr
        i += 1
        j += 10
    }

    if(someToEat(cellsArr, flatBoard, cell, -1*turn, isKing(player))) {
        turn *= -1
    }
    return turn
}

module.exports = updateBoard