const isChip = require('./isChip')
const updateBoard = require('./updateBoard')
const move = require('./move')
const {highLighted, message} = require('../vars/vars')

const animateBoard = function(e) {
    if(!highLighted.player && isChip(e) && !highLighted.playerHighLights.length) {

        message.textContent = 'Make a move'
        e.target.setAttribute('class', 'highlight')
        highLighted.player = !highLighted.player
        highLighted.playerHighLights.push(e.target)

    } else if (highLighted.player && !highLighted.cell && !isChip(e) && !highLighted.cellHighLights.length) {

        message.textContent = 'Make a move'
        highLighted.cell = !highLighted.cell
        highLighted.cellHighLights.push(e.target)
        move(highLighted.playerHighLights, highLighted.cellHighLights)
        updateBoard(highLighted.playerHighLights, highLighted.cellHighLights)

        highLighted.playerHighLights[0].classList.remove('highlight')
        highLighted.player = !highLighted.player
        highLighted.playerHighLights.pop()

        highLighted.cell = !highLighted.cell
        highLighted.cellHighLights.pop()

    }
}

module.exports = animateBoard