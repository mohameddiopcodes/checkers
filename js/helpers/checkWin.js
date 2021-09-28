const { message, board, flatBoard } = require('../vars/vars')
const moveUtility = require('./moveUtility')


const checkWin = () => {
    if(!flatBoard.includes(1) && flatBoard.includes(-1)) {
        moveUtility({message}, {displayMessage: 'Black Wins'})
    } else if(!flatBoard.includes(-1) && flatBoard.includes(1)) {
        moveUtility({message}, {displayMessage: 'White Wins'})
    }
}

module.exports = checkWin