const toggles = document.querySelectorAll('.toggle')

const beautiful = document.querySelector('#beautiful')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

const design = document.querySelector('#design')
const profit = document.querySelector('#profit')
const performance = document.querySelector('#performance')
const chart = document.querySelector('#chart')

const map = {
    beautiful: design,
    cheap: profit,
    fast: performance
}

let values = [1, 1, 1]

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(beautiful.checked && cheap.checked && fast.checked) {
        if(beautiful === theClickedOne) {
            fast.checked = false
        }

        if(cheap === theClickedOne) {
            beautiful.checked = false
        }

        if(fast === theClickedOne) {
            cheap.checked = false
        }
    }

    toggles.forEach((toggle,idx) => {
        const section = map[toggle.id]
        if(toggle.checked){
            values[idx] = 2
        }else{
            values[idx] = 1
        }
    })

    chart.style = `grid-template-columns: ${values[0]}fr ${values[1]}fr ${values[2]}fr;`
}