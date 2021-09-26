const { board, flatBoard, cells, playableCells, evenPlayableCells, oddPlayableCells } = require('../vars/vars')

const move = (player, cell) => {
    const cellsArr = [...cells]
    if(evenPlayableCells.includes(player[0].parentElement)) {
        console.log(flatBoard[cellsArr.indexOf(player[0].parentElement)])
    } else if(oddPlayableCells.includes(player[0].parentElement)) {
        console.log(flatBoard[cellsArr.indexOf(player[0].parentElement)])
    }
    player[0].style.visibility = 'hidden'
    cell[0].childNodes[0].src = player[0].src
    cell[0].childNodes[0].style.visibility = 'visible'
}

module.exports = move