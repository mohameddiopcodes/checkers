let { message, flatBoard } = require('../vars/vars')
const utilities = require('./utilities')

const checkWin = () => {
    let remaining = flatBoard.filter(item => item === 1 || item === -1)

    if(!flatBoard.includes(1)) {
        console.log(flatBoard)
        utilities({message}, {displayMessage: 'Black Wins', endGame: true})
    } else if(!flatBoard.includes(-1)) {
        console.log(flatBoard)
        utilities({message}, {displayMessage: 'White Wins', endGame: true})
    } else if(remaining.length === 2) {
        console.log(flatBoard)
        utilities({message}, {displayMessage: 'Draw', endGame: true})
    }
}

module.exports = checkWin