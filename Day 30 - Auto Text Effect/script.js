const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const messageEl = document.getElementById('message')

let text = messageEl.placeholder
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx) + "_"

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

messageEl.addEventListener('input', (e) => text = e.target.value.length === 0 ? e.target.placeholder : e.target.value)