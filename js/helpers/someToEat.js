const { board, cells } = require('../vars/vars')

const someToEat = (cellsArr, flatBoard, player) => {
    let found = false
    const targetCells = [cellsArr[cellsArr.indexOf(player[0]) + 22], cellsArr[cellsArr.indexOf(player[0]) + 18], cellsArr[cellsArr.indexOf(player[0]) - 22], cellsArr[cellsArr.indexOf(player[0]) - 18]]
    const targetPieces = [cellsArr[cellsArr.indexOf(player[0]) + 11], cellsArr[cellsArr.indexOf(player[0]) + 9], cellsArr[cellsArr.indexOf(player[0]) - 11], cellsArr[cellsArr.indexOf(player[0]) - 9]]
    targetPieces.forEach((target, id) => {
        switch(id) {
            case 0:
                if(flatBoard[(cellsArr.indexOf(player[0])+11)] != 0) {
                    if(flatBoard[cellsArr.indexOf(player[0])] === -1* flatBoard[cellsArr.indexOf(target)] && flatBoard[cellsArr.indexOf(targetCells[0])] === 0 && flatBoard[cellsArr.indexOf(targetCells[0])] != -1) {
                        found = true
                    }
                }
                break;
            case 1:
                if(flatBoard[(cellsArr.indexOf(player[0])+9)] != 0) {
                    if(flatBoard[cellsArr.indexOf(player[0])] === -1* flatBoard[cellsArr.indexOf(target)] && flatBoard[cellsArr.indexOf(targetCells[1])] === 0 && flatBoard[cellsArr.indexOf(targetCells[1])] != -1) {
                        found = true
                    }
                }
                break;
            case 2:
                if(flatBoard[(cellsArr.indexOf(player[0])-11)] != 0) {
                    if(flatBoard[cellsArr.indexOf(player[0])] === -1* flatBoard[cellsArr.indexOf(target)] && flatBoard[cellsArr.indexOf(targetCells[2])] === 0&& flatBoard[cellsArr.indexOf(targetCells[2])] != -1) {
                        found = true
                    }
                }
                break;
            case 3:
                if(flatBoard[(cellsArr.indexOf(player[0])-9)] != 0) {
                    if(flatBoard[cellsArr.indexOf(player[0])] === -1* flatBoard[cellsArr.indexOf(target)] && flatBoard[cellsArr.indexOf(targetCells[3])] === 0 && flatBoard[cellsArr.indexOf(targetCells[3])]  != -1) {
                        found = true
                    }
                }
                break;
        }
    })
    return found
}

module.exports = someToEat