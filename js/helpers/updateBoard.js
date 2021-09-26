const {cells, board, flatBoard} = require('../vars/vars')

const updateBoard = (player, cell) => {
    const cellsArr = [...cells]
    flatBoard[cellsArr.indexOf(cell[0])] = flatBoard[cellsArr.indexOf(player[0].parentElement)]
    flatBoard[cellsArr.indexOf(player[0].parentElement)] = 0
    let i = 0
    let j = 0
    while(j < flatBoard.length) {
        const arr = [flatBoard[j], flatBoard[j+1], flatBoard[j+2], flatBoard[j+3], flatBoard[j+4], flatBoard[j+5], flatBoard[j+6], flatBoard[j+7], flatBoard[j+8], flatBoard[j+9]]
        board[i] = arr
        i += 1
        j += 10
    }
}

module.exports = updateBoard