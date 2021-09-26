const renderCells = require('./renderCells')
const animateBoard = require('./animateBoard')
const { cells, evenPlayableCells, oddPlayableCells } = require('../vars/vars')

const render = (e = false, cellId) => {
    if(e) {
        animateBoard(e)
    } else {
        renderCells(cells)
    }
};

module.exports = render