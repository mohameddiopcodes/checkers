const { cells } = require('../vars/vars')
const manPlayLogic = require('./manPlayLogic')

const move = (player, cell, turn) => {
    const cellsArr = [...cells]
    return manPlayLogic(cellsArr, cell, player, turn)
}

module.exports = move