const isChip = require('./isChip')
const updateBoard = require('./updateBoard')
const move = require('./move')
let {cells, highLighted, flatBoard, message, turn} = require('../vars/vars')
const isWhitePiece = require('./isWhitePiece')
const moveUtility = require('./moveUtility')

const animateBoard = function(e) {
    const cellsArr = [...cells]

    if(turn === 1 && !highLighted.player && isChip(e) && isWhitePiece(e.target) && !highLighted.playerHighLights.length) {

        moveUtility({e, highLighted, message}, {displayMessage: 'Make a move', setHighlight: true, flipPlayer: true, pushPlayer: true})
    
    } else if(turn === -1 && !highLighted.player && isChip(e) && !isWhitePiece(e.target) && !highLighted.playerHighLights.length) {

        moveUtility({e, highLighted, message}, {displayMessage: 'Make a move', setHighlight: true, flipPlayer: true, pushPlayer: true})
    
    } else if (highLighted.player && !highLighted.cell && !isChip(e) && !highLighted.cellHighLights.length) {

        moveUtility({e, highLighted, message}, {displayMessage: 'Make a move', flipCell: true, pushCell: true})

        const moved = move(highLighted.playerHighLights, highLighted.cellHighLights, turn)
        turn *= -1
        if(!moved) {
            message.textContent = "Sorry, can't move there"
            turn *= -1
        } else {
            if(typeof moved === 'number') {
                turn = updateBoard(turn, highLighted.playerHighLights, highLighted.cellHighLights, moved)
                moveUtility({message, turn}, {toggleTurn: true})
            } else {
                moveUtility({message, turn}, {toggleTurn: true})
                updateBoard(turn, highLighted.playerHighLights, highLighted.cellHighLights)
            }
        }

        moveUtility({e, highLighted, message}, {removeHighlight: true, flipPlayer: true, popPlayer: true})

        moveUtility({e, highLighted, message}, {flipCell: true, popCell: true})
        
    } else if (highLighted.player && e.target === highLighted.playerHighLights[0]) {

        moveUtility({e, highLighted, message, turn}, {toggleTurn: true, removeHighlight: true, flipPlayer: true, popPlayer: true})

    }
}

module.exports = animateBoard