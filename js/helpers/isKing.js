const isKing = (player) => player? player[0].src.split('').includes('K') : false

module.exports = isKing