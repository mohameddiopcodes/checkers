//_____ app-state
let chipLookup , board, flatBoard, resetBoard, turn, highLighted, diagonal1, diagonal2
let playableCells = []

//DOM Elements
const message = document.querySelector('h1')
const cells = document.querySelectorAll('.row > .cell')
const evenPlayableCells = [...document.querySelectorAll('.row:nth-child(even) > div:nth-child(odd)')]
const oddPlayableCells = [...document.querySelectorAll('.row:nth-child(odd) > div:nth-child(even)')]


const setState = () => {
        //constants
    chipLookup = {
        '1': './css/images/whiteChip.PNG',
        '-1': './css/images/blackChip.PNG'
    }

    //_____ app-state
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
    ]
    flatBoard = [].concat(...board)
    resetBoard = [...flatBoard] 
    turn = 1
    highLighted = {
        player: false,
        cell: false,
        playerHighLights: [],
        cellHighLights: []
    }

    diagonal1 = [
        [1, 10],
        [3, 12, 21, 30],
        [5, 14, 23, 32, 41, 50],
        [7, 16, 25, 34, 43, 52, 61, 70],
        [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
        [29, 38, 47, 56, 65, 74, 83, 92],
        [49, 58, 67, 76, 85, 94],
        [69, 78, 87, 96],
        [89, 98]
    ]
    diagonal2 = [
        [9],
        [7, 18, 29],
        [5, 16, 27, 38, 49],
        [3, 14, 25, 36, 47, 58, 69],
        [1, 12, 23, 34, 45, 56, 67, 78, 89],
        [10, 21, 32, 43, 54, 65, 76, 87, 98],
        [30, 41, 52, 63, 74, 85, 96],
        [50, 61, 72, 83, 94],
        [70, 81, 92],
        [90]
    ]

    i = 1

    while(i < 22) {
        cellIdArray = [i-1, i, i+1, i+2, i+3]

        cellIdArray.forEach(id => {
            playableCells.push(oddPlayableCells[id])
        })
        cellIdArray.forEach(id => {
            playableCells.push(evenPlayableCells[id])
        })

        i+=5  
    }
}

setState()

module.exports = {
    chipLookup,
    board,
    flatBoard,
    turn,
    highLighted,
    message,
    cells,
    playableCells,
    evenPlayableCells,
    oddPlayableCells,
    diagonal1,
    diagonal2,
    resetBoard,
    setState
}