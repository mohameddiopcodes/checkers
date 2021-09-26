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
const evenPlayableCells = [...document.querySelectorAll('.row:nth-child(even) > div:nth-child(odd)')]
const oddPlayableCells = [...document.querySelectorAll('.row:nth-child(odd) > div:nth-child(even)')]
const playableCells = [];

let i = 1

while(i < 22) {
    const cellIdArray = [i-1, i, i+1, i+2, i+3]

    cellIdArray.forEach(id => {
        playableCells.push(oddPlayableCells[id])
    })
    cellIdArray.forEach(id => {
        playableCells.push(evenPlayableCells[id])
    })

    i+=5  
}

module.exports = {
    chipLookup,
    board,
    flatBoard,
    turn,
    winner,
    highLighted,
    message,
    cells,
    playableCells,
    evenPlayableCells,
    oddPlayableCells
}