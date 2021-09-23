//constants
let chipLookup = {
    '1': './css/images/whiteChip.PNG',
    '-1': './css/images/blackChip.PNG'
}

//_____ app-state
const board = [
    [0,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,-1,0,-1,0,-1,0,-1,0,-1],
    [-1,0,-1,0,-1,0,-1,0,-1,0],
    [0,-1,0,-1,0,-1,0,-1,0,-1],
    [-1,0,-1,0,-1,0,-1,0,-1,0]
];
const flatBoard = [].concat(...board) 
let turn = 1
let winner = null
const highLighted = {
    player: false,
    cell: false,
    playerHighLights: [],
    cellHighLights: []
}

//DOM Elements
const message = document.querySelector('h1')
const cells = document.querySelectorAll('.row > .cell')
const playableCells = [...document.querySelectorAll('.row:nth-child(2n+1) > div:nth-child(2n)'), ...document.querySelectorAll('.row:nth-child(2n) > div:nth-child(2n+1)')]

module.exports = {
    chipLookup,
    board,
    flatBoard,
    turn,
    winner,
    highLighted,
    message,
    cells,
    playableCells
}