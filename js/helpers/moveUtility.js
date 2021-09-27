const moveUtility = ({e, highLighted, turn, message}, {displayMessage, toggleTurn, setHighlight, removeHighlight, flipPlayer, flipCell, flipTurn, pushPlayer, popPlayer, pushCell, popCell}) => {
    if(displayMessage) {
        message.textContent = displayMessage
    }
    if(toggleTurn) {
        message.textContent = turn === 1 ? "White's Turn": "Black's Turn"
    }
    if(flipPlayer) {
        highLighted.player = !highLighted.player
    } 
    if(flipCell) {
        highLighted.cell = !highLighted.cell
    }
   if(setHighlight) {
        e.target.setAttribute('class', 'highlight')
   }
   if(removeHighlight) {
        highLighted.playerHighLights[0].classList.remove('highlight')
   }
   if(pushPlayer) {
        highLighted.playerHighLights.push(e.target)
   }
   if(popPlayer) {
        highLighted.playerHighLights.pop()
   }
   if(pushCell) {
        highLighted.cellHighLights.push(e.target)
   }
   if(popCell) {
        highLighted.cellHighLights.pop()
   }
}

module.exports = moveUtility