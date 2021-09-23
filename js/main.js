const isChip = require('./helpers/isChip')
const animateBoard = require('./helpers/animateBoard')
const updateBoard = require('./helpers/updateBoard')
const renderCells = require('./helpers/renderCells')
const render = require('./helpers/render')

//constants
let chipLookup = {
    '1': './css/images/whiteChip.PNG',
    '-1': './css/images/blackChip.PNG'
}

//_____ app-state
let board, flatBoard, turn, winner, highLighted;

//DOM Elements
const message = document.querySelector('h1');
const cells = document.querySelectorAll('.row > .cell');
const playableCells = [...document.querySelectorAll('.row:nth-child(2n+1) > div:nth-child(2n)'), ...document.querySelectorAll('.row:nth-child(2n) > div:nth-child(2n+1)')];

//_____functions
const init = () => {
    board = [
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
    flatBoard = [].concat(...board);
    turn = 1;
    winner = null;
    highLighted = {
        player: false,
        cell: false,
        playerHighLights: [],
        cellHighLights: []
    }
    render(flatBoard, false, cells);
}

//_____function initializations
init();

//_____event listeners
playableCells.forEach((cell, id) => {
    cell.addEventListener('click', (e) => {render(flatBoard, e, cells, id, highLighted, message)})
})
