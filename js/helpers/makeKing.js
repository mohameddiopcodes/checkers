const isWhitePiece = require('./isWhitePiece')

const makeKing = (e) => {
    if(e) {
        const firstRow = document.querySelector('.first-row')
        const lastRow = document.querySelector('.last-row')

        if([...lastRow.childNodes].includes(e.target) && isWhitePiece(e.target.childNodes[0])) {
            e.target.childNodes[0].src = './css/images/whiteKing.PNG'
        } else if([...firstRow.childNodes].includes(e.target) && !isWhitePiece(e.target.childNodes[0])) {
            e.target.childNodes[0].src = './css/images/blackKing.PNG'
        }
    }
}

module.exports = makeKing