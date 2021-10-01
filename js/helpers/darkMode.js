let darkMode = false

const mode = () => {

    document.querySelector('.bg').addEventListener('click', (e) => {

        if(!darkMode) {
            const body = document.querySelector('body')
            body.style.background = 'black'
            body.style.color = "white"
            e.target.style.background = "black"
            e.target.style.color = "white"
        } else {
            const body = document.querySelector('body')
            body.style.background = 'white'
            body.style.color = "black"
            e.target.style.background = "white"
            e.target.style.color = "black"
        }
    
        darkMode = !darkMode
    
    })
    

}

module.exports = mode