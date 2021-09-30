const {diagonal1, diagonal2} = require('../vars/vars')

const someToEat = (cellsArr, flatBoard, player, turn, isKing) => {
    let afterEnnemy = []
    let beforeEnnemy = []
    let found = false

    diagonal1.forEach(arr => {
        if(arr.includes(cellsArr.indexOf(player[0]))) {

            arr.forEach((id) => {
                if(flatBoard[id] === -1*turn && id < cellsArr.indexOf(player[0])){
                    afterEnnemy = arr.filter(item => item < id)
                    beforeEnnemy = arr.filter(item => item > id && item < cellsArr.indexOf(player[0]))
                    
                    if(!isKing && beforeEnnemy.length === 0 && flatBoard[afterEnnemy[afterEnnemy.length - 1]] === 0) {
                        found = true
                    } else if(isKing && flatBoard[afterEnnemy[afterEnnemy.length - 1]] === 0) {
                        found = true
                    }

                } else if(flatBoard[id] === -1*turn && id > cellsArr.indexOf(player[0])) {
                    afterEnnemy = arr.filter(item => item > id)
                    beforeEnnemy = arr.filter(item => item < id && item > cellsArr.indexOf(player[0]))

                    if(!isKing && beforeEnnemy.length === 0 && flatBoard[afterEnnemy[afterEnnemy.length - 1]] === 0) {
                        found = true
                    } else if(isKing && flatBoard[afterEnnemy[afterEnnemy.length - 1]] === 0) {
                        found = true
                    }
                }
            })
        }
    })
    diagonal2.forEach(arr => {
        if(arr.includes(cellsArr.indexOf(player[0]))) {

            arr.forEach((id) => {
                if(flatBoard[id] === -1*turn && id < cellsArr.indexOf(player[0])){
                    afterEnnemy = arr.filter(item => item < id)
                    beforeEnnemy = arr.filter(item => item > id && item < cellsArr.indexOf(player[0]))
                    
                    if(!isKing && beforeEnnemy.length === 0 && flatBoard[afterEnnemy[afterEnnemy.length - 1]] === 0) {
                        found = true
                    } else if(isKing && flatBoard[afterEnnemy[afterEnnemy.length - 1]] === 0) {
                        found = true
                    }

                } else if(flatBoard[id] === -1*turn && id > cellsArr.indexOf(player[0])) {
                    afterEnnemy = arr.filter(item => item > id)
                    beforeEnnemy = arr.filter(item => item < id && item > cellsArr.indexOf(player[0]))

                    if(!isKing && beforeEnnemy.length === 0 && flatBoard[afterEnnemy[afterEnnemy.length - 1]] === 0) {
                        found = true
                    } else if(isKing && flatBoard[afterEnnemy[afterEnnemy.length - 1]] === 0) {
                        found = true
                    }
                }
            })
        }
    })
    return found
}

module.exports = someToEat