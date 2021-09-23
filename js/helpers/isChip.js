const isChip = function(e) {
    if(e.target.children[0]) {
        return false
    } else {
        return true
    }
}

module.exports = isChip