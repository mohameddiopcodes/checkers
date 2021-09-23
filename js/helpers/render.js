const renderCells = require('./renderCells')
const animateBoard = require('./animateBoard')
const { cells } = require('../vars/vars')

const render = (e = false) => {
    if(e) {
        animateBoard(e)
    } else {
        renderCells(cells)
    }
};

module.exports = render