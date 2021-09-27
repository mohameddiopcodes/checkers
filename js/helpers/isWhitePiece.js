const isWhitePiece = img => img.src && img.src.split('').includes('w') ? true:false

module.exports = isWhitePiece