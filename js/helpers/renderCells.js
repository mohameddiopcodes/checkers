const { flatBoard } = require('../vars/vars')

const renderCells = function(cells) {
    cells.forEach((cell, cellId) => {
        if(flatBoard[cellId] === 1) {
            cell.childNodes[0].style.visibility = 'visible'
            cell.childNodes[0].setAttribute('src', './css/images/whiteChip.PNG')
        } else if(flatBoard[cellId] === -1) {
            cell.childNodes[0].style.visibility = 'visible'
            cell.childNodes[0].setAttribute('src', './css/images/blackChip.PNG')
        } else {
            cell.childNodes[0].style.visibility = 'hidden'
        }
    })
}

module.exports = renderCells