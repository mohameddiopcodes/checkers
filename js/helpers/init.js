const render = require('./render')
const resetGame = require('./resetGame')
const { playableCells, flatBoard } = require('../vars/vars')

const init = () => {
    render(false, flatBoard)

    playableCells.forEach((cell, id) => {
        cell.addEventListener('click', e => { render(e, id) })
    })
    document.querySelector('button').addEventListener('click', resetGame)
}

module.exports = init