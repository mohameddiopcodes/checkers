const render = require('./render')
const { playableCells } = require('../vars/vars')

const init = () => {
    render();
    playableCells.forEach((cell, id) => {
        cell.addEventListener('click', (e) => {render(e)})
    })
}

module.exports = init