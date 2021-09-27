const renderCells = require('./renderCells')
const animateBoard = require('./animateBoard')
const makeKing = require('./makeKing')
const { cells, evenPlayableCells, oddPlayableCells } = require('../vars/vars')

const render = (e = false, cellId) => {
    if(e) {
        animateBoard(e)
        makeKing(e)
    } else {
        renderCells(cells)
    }
};

module.exports = render