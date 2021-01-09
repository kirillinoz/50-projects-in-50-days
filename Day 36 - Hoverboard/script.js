const container = document.getElementById('container')
const body = document.querySelector('body')
const colors = ['ff3855', 'ff7a00', 'fff700', 'a9f432', '2243b6','9c51b6', 'e936a7']
let SQUARES = "";

function setColor(el) {
    const color = getRandomColor()
    el.style.background = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
    el.style.background = `#1d1d1d`
    el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return '#' + colors[Math.floor(Math.random() * colors.length)]
}

let resizer = new ResizeObserver(calculateSquares)
resizer.observe(body)

function calculateSquares() {
    container.innerHTML = ""
    const bodyWidth = window.getComputedStyle(body).width
    const bodyHeight = window.getComputedStyle(body).height
    const bodyPadding = window.getComputedStyle(body).paddingTop
    const noPx = (e) => e.split('px')[0]
    SQUARES = ((noPx(bodyWidth) - noPx(bodyPadding) * 2) / 20) * ((noPx(bodyHeight) - noPx(bodyPadding) * 2) / 20)
    console.log(SQUARES)

    for(let i = 0; i < SQUARES; i++){
        const square = document.createElement('div')
        square.classList.add('square')
    
        square.addEventListener('mouseover', () => setColor(square))
    
        square.addEventListener('mouseout', () => removeColor(square))
    
        container.appendChild(square)
    }
}