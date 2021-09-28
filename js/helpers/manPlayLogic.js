const { board, cells } = require('../vars/vars')
const movePiece = require('./movePiece')
const isWhitePiece = require('./isWhitePiece')

const manPlayLogic = (cellsArr, cell, player, turn) => {
    let i = 0
    let j = 0
    while(j < cellsArr.length) {
        const p = j-10
        const n = j+10
        const arr = [cellsArr[j], cellsArr[j+1], cellsArr[j+2], cellsArr[j+3], cellsArr[j+4], cellsArr[j+5], cellsArr[j+6], cellsArr[j+7], cellsArr[j+8], cellsArr[j+9]]
        const prevArr = [cellsArr[p], cellsArr[p+1], cellsArr[p+2], cellsArr[p+3], cellsArr[p+4], cellsArr[p+5], cellsArr[p+6], cellsArr[p+7], cellsArr[p+8], cellsArr[p+9]]
        const nextArr = [cellsArr[n], cellsArr[n+1], cellsArr[n+2], cellsArr[n+3], cellsArr[n+4], cellsArr[n+5], cellsArr[n+6], cellsArr[n+7], cellsArr[n+8], cellsArr[n+9]]

        if(nextArr.indexOf(cell[0]) > -1 || prevArr.indexOf(cell[0]) > -1) {
            const isPlayableCell = isWhitePiece(player[0]) ? ((nextArr.indexOf(cell[0])+1)%10 === arr.indexOf(player[0].parentElement) || (nextArr.indexOf(cell[0])-1)%10 === arr.indexOf(player[0].parentElement)) : ((prevArr.indexOf(cell[0])+1)%10 === arr.indexOf(player[0].parentElement) || (prevArr.indexOf(cell[0])-1)%10 === arr.indexOf(player[0].parentElement))
            if(arr.includes(player[0].parentElement) && isPlayableCell) {
                movePiece(player, cell)
                return isPlayableCell
            }
        } else {
            const p2 = j-20
            const n2 = j+20
            const prevArr2 = [cellsArr[p2], cellsArr[p2+1], cellsArr[p2+2], cellsArr[p2+3], cellsArr[p2+4], cellsArr[p2+5], cellsArr[p2+6], cellsArr[p2+7], cellsArr[p2+8], cellsArr[p2+9]]
            const nextArr2 = [cellsArr[n2], cellsArr[n2+1], cellsArr[n2+2], cellsArr[n2+3], cellsArr[n2+4], cellsArr[n2+5], cellsArr[n2+6], cellsArr[n2+7], cellsArr[n2+8], cellsArr[n2+9]]

            const isPlayableCell = nextArr2.includes(cell[0]) ? ((nextArr2.indexOf(cell[0])+2)%10 === arr.indexOf(player[0].parentElement) || (nextArr2.indexOf(cell[0])-2)%10 === arr.indexOf(player[0].parentElement)) : ((prevArr2.indexOf(cell[0])+2)%10 === arr.indexOf(player[0].parentElement) || (prevArr2.indexOf(cell[0])-2)%10 === arr.indexOf(player[0].parentElement))
            if(nextArr2.indexOf(cell[0]) > -1 || prevArr2.indexOf(cell[0]) > -1) {
                if(arr.includes(player[0].parentElement) && isPlayableCell) {
                    
                    if(i != 9 && board[i+1][arr.indexOf(player[0].parentElement)+1] === -1*turn && (nextArr2[arr.indexOf(player[0].parentElement)+2] === cell[0])) {
                        const capturedPieceId = parseInt((i+1).toString() + (arr.indexOf(player[0].parentElement)+1).toString())
                        cells[capturedPieceId].childNodes[0].style.visibility = 'hidden'
                        movePiece(player, cell)
                        return capturedPieceId

                    } else if (i != 9 && board[i+1][arr.indexOf(player[0].parentElement)-1] === -1*turn && (nextArr2[arr.indexOf(player[0].parentElement)-2] === cell[0])) {
                        const capturedPieceId = parseInt((i+1).toString() + (arr.indexOf(player[0].parentElement)-1).toString())
                        cells[capturedPieceId].childNodes[0].style.visibility = 'hidden'
                        movePiece(player, cell)
                        return capturedPieceId

                    } else if (i != 0 && board[i-1][arr.indexOf(player[0].parentElement)+1] === -1*turn && (prevArr2[arr.indexOf(player[0].parentElement)+2] === cell[0])) {
                        const capturedPieceId = parseInt((i-1).toString() + (arr.indexOf(player[0].parentElement)+1).toString())
                        cells[capturedPieceId].childNodes[0].style.visibility = 'hidden'
                        movePiece(player, cell)
                        return capturedPieceId

                    }  else if (i != 0 && board[i-1][arr.indexOf(player[0].parentElement)-1] === -1*turn && (prevArr2[arr.indexOf(player[0].parentElement)-2] === cell[0])) {
                        const capturedPieceId = parseInt((i-1).toString() + (arr.indexOf(player[0].parentElement)-1).toString())
                        cells[capturedPieceId].childNodes[0].style.visibility = 'hidden'
                        movePiece(player, cell)
                        return capturedPieceId

                    }
                }
            }
        }

        i += 1
        j += 10
    }
}

module.exports = manPlayLogic