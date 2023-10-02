const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreboard = document.querySelector('.score')
const sound = new Audio('images/smash.mp3')
let score = 0

//console.log(holes.length)

function start() {
    let time = 0

    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'images/mole.png'
    hole.appendChild(img)

    img.addEventListener('click', () => {
        sound.play()
        score += 1
        scoreboard.textContent = 'SCORE : ' + score
        img.src = 'images/mole-whacked.png'
        clearTimeout(time)
        setTimeout(() => {
            hole.removeChild(img)
            start()
        },500)
    })

    time = setTimeout(() => {
        hole.removeChild(img)
        start()
    }, 1000)
}

window.addEventListener('mousemove', a => {
    cursor.style.top = a.pageY + 'px'
    cursor.style.left = a.pageX + 'px'
})  

window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
}) 

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
}) 

start()