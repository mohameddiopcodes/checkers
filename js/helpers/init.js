const render = require('./render')
const resetGame = require('./resetGame')
const darkMode = require('./darkMode')
const { playableCells, flatBoard } = require('../vars/vars')

const init = () => {
    render(false, flatBoard)
    darkMode()

    playableCells.forEach((cell, id) => {
        cell.addEventListener('click', e => { render(e, id) })
    })
    document.querySelector('button').addEventListener('click', resetGame)
}

module.exports = init