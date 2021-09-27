const movePiece = (player, cell) => {
    player[0].style.visibility = 'hidden'
    cell[0].childNodes[0].src = player[0].src
    cell[0].childNodes[0].style.visibility = 'visible'
}

module.exports = movePiece