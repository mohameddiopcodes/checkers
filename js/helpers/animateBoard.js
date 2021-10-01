const isChip = require('./isChip')
const updateBoard = require('./updateBoard')
const move = require('./move')
let {cells, highLighted, flatBoard, message, turn} = require('../vars/vars')
const isWhitePiece = require('./isWhitePiece')
const utilities = require('./utilities')
const movePiece = require('./movePiece')
const someToEat = require('./someToEat')
const isKing = require('./isKing')

const animateBoard = function(e) {
    const cellsArr = [...cells]
    const capture = e.target.src? someToEat(cellsArr, flatBoard, [e.target.parentElement], turn, isKing([e.target])): false    
    
    if(turn === 1 && !highLighted.player && isChip(e) && isWhitePiece(e.target) && !highLighted.playerHighLights.length) {
        highLighted.capture = capture

        if(capture) {
            utilities({e, highLighted, message}, {displayMessage: 'Capture your opponent', setHighlight: true, flipPlayer: true, pushPlayer: true})   
        } else {
            utilities({e, highLighted, message}, {displayMessage: 'Make a move', setHighlight: true, flipPlayer: true, pushPlayer: true})
        }
        
        
    } else if(turn === -1 && !highLighted.player && isChip(e) && !isWhitePiece(e.target) && !highLighted.playerHighLights.length) {

        if(capture) {
            utilities({e, highLighted, message}, {displayMessage: 'Capture your opponent', setHighlight: true, flipPlayer: true, pushPlayer: true})   
        } else {
            utilities({e, highLighted, message}, {displayMessage: 'Make a move', setHighlight: true, flipPlayer: true, pushPlayer: true})
        }

    } else if (highLighted.player && !highLighted.cell && !isChip(e) && !highLighted.cellHighLights.length) {

        utilities({e, highLighted, message}, {displayMessage: 'Make a move', flipCell: true, pushCell: true})
    
        const moved = move(highLighted.playerHighLights, highLighted.cellHighLights, turn)
        turn *= -1
        
        if(!moved || (moved === true && highLighted.capture)) {
            message.textContent = "Sorry, can't move there"
            turn *= -1
        } else {
            if(typeof moved === 'number') {
                movePiece(highLighted.playerHighLights, highLighted.cellHighLights, moved)
                turn = updateBoard(turn, highLighted.playerHighLights, highLighted.cellHighLights, moved)
                utilities({message, turn}, {toggleTurn: true})
                highLighted.capture = null
            } else {
                movePiece(highLighted.playerHighLights, highLighted.cellHighLights)
                utilities({message, turn}, {toggleTurn: true})
                updateBoard(turn, highLighted.playerHighLights, highLighted.cellHighLights)
            }
        }

        utilities({e, highLighted, message}, {removeHighlight: true, flipPlayer: true, popPlayer: true})

        utilities({e, highLighted, message}, {flipCell: true, popCell: true})

        
        
    } else if (!highLighted.capture && highLighted.player && e.target === highLighted.playerHighLights[0]) {

        utilities({e, highLighted, message, turn}, {toggleTurn: true, removeHighlight: true, flipPlayer: true, popPlayer: true})

    }
}

module.exports = animateBoard