const { cells } = require('../vars/vars')

const playLogic = require('./playLogic')

const move = (player, cell, turn) => {
    const cellsArr = [...cells]
    return playLogic(cellsArr, cell, player, turn)
}

module.exports = move