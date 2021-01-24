const screens = document.querySelectorAll('.screen')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const start_btn = document.getElementById('start-btn')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
const game_container = document.getElementById('game-container')

const reload_btns = document.querySelectorAll('.reload')
const finalMsg = document.getElementById('final-message')
const gameModes = document.querySelectorAll('input')

let seconds = 0
let score = 0
let selected_insect = {}
let gameMode = ""
let timer = undefined

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
    gameModes.forEach(gm => {
        if(gm.checked) gameMode = gm.value
    })
    console.log(gameMode)
})

reload_btns.forEach(btn => btn.addEventListener('click', completeReload))

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = {src, alt}
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    if(gameMode === "time") seconds = 30
    timer = setInterval(gameMode === "time" ? decreaseTime : increaseTime, 1000)
    game_container.querySelectorAll(".insect").forEach(el => el.remove())
}

function changeTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    return {m, s}
}

function increaseTime() {
    changeTime()
    seconds++
}

function decreaseTime() {
    changeTime()
    seconds--
    if(seconds <= 0) {
        gameOver()
    } 
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const {x, y} = getRandomLocation()
    const size = getRandomSize()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transfrom: rotate(${Math.random() * 360}deg); width: ${size}px; height: ${size}px">`

    insect.addEventListener('click', catchInsect)

    game_container.appendChild(insect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return {x, y}
}

function getRandomSize() {
    const size = Math.random() * 100 + 50
    return size
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects() {
    to1 = setTimeout(createInsect, 1000)
    to2 = setTimeout(createInsect, 1500)
}

function increaseScore() {
    score++
    if(score > 19 && gameMode === "unlimited") {
        message.classList.add('visible')
    }
    if(score > 39 && gameMode === "score") {
        gameOver()
    }
    scoreEl.innerHTML = `Score: ${score}`
}

function gameOver() {
    clearInterval(timer)
    game_container.querySelectorAll(".insect").forEach(el => el.remove())
    screens[2].classList.add('up')
    if(gameMode === "time"){
        finalMsg.innerHTML = `Congratulations! You've scored <span>${score}</span> points in 30 seconds.`
    }else{
        const {m, s} = changeTime()
        finalMsg.innerHTML = `Congratulations! You've scored 40 points in <span>${m}:${s}</span>.`
    }
}

function completeReload() {
    screens.forEach(screen => {
        screen.classList.remove('up')
    })
    clearInterval(timer)
    seconds = 0
    score = 0
    selected_insect = {}
    gameMode = ""
    message.classList.remove('visible')
    scoreEl.innerHTML = `Score: 0`
    changeTime()
}