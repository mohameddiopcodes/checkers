const { cells } = require('../vars/vars')

const movePiece = (player, cell, capture = false) => {
    player[0].style.visibility = 'hidden'
    cell[0].childNodes[0].src = player[0].src
    cell[0].childNodes[0].style.visibility = 'visible'
    if(capture) {
        cells[capture].childNodes[0].style.visibility = 'hidden'
    }
}

module.exports = movePiece