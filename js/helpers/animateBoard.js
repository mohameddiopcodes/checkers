const isChip = require('./isChip')

const animateBoard = function(e, highLighted, message) {
    if(!highLighted.player && isChip(e) && !highLighted.playerHighLights.length) {
        message.textContent = 'Make a move'
        e.target.setAttribute('class', 'highlight')
        highLighted.player = !highLighted.player
        highLighted.playerHighLights.push(e.target)
    } else if (!highLighted.cell && !isChip(e) && !highLighted.cellHighLights.length) {
        message.textContent = 'Make a move'
        e.target.setAttribute('class', 'highlight')
        highLighted.cell = !highLighted.cell
        highLighted.cellHighLights.push(e.target)
    } else if (highLighted.player && isChip(e) && highLighted.playerHighLights[0] === e.target) {
        e.target.classList.remove('highlight')
        highLighted.player = !highLighted.player
        highLighted.playerHighLights.pop()
    } else if (highLighted.cell && !isChip(e)  && highLighted.cellHighLights[0] === e.target) {
        e.target.classList.remove('highlight')
        highLighted.cell = !highLighted.cell
        highLighted.cellHighLights.pop()
    }
}

module.exports = animateBoard