const renderCells = require('./renderCells')
const animateBoard = require('./animateBoard')
const makeKing = require('./makeKing')
const { cells } = require('../vars/vars');
const checkWin = require('./checkWin');

const render = (e = false) => {
    if(e) {
        animateBoard(e)
        makeKing(e)
        checkWin()
    } else {
        renderCells(cells)
    }
};

module.exports = render