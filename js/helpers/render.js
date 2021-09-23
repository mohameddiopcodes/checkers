const renderCells = require('./renderCells')
const animateBoard = require('./animateBoard')

const render = (flatBoard, e = false, cells, cellId, highLighted, message) => {
    if(!e) {
        renderCells(cells, flatBoard)
    } else {
        animateBoard(e, highLighted, message)
    }
};

module.exports = render