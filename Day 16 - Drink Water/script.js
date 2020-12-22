const cups = document.querySelector('.cups')
let smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const goal = document.getElementById('goal');

goal.addEventListener('keyup', () => detectChange())

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', ()  => highlightCups(idx))
})

function highlightCups(idx) {

    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <=idx) {
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${Math.round(fullCups / totalCups * 100)}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${+goal.value - 250 * fullCups / 1000} L`
    }
}

function detectChange() {
    //RESET
    cups.innerHTML = ``
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0

    if(+goal.value === 0) return;
    for(i=0;i<+goal.value*4;i++){
        const tag = document.createElement('div')
        const text = document.createTextNode('250ml')
        tag.appendChild(text)
        tag.classList.add('cup')
        tag.classList.add('cup-small')
        cups.appendChild(tag)
    }
    smallCups = document.querySelectorAll('.cup-small')
    console.log(smallCups)
    smallCups.forEach((cup, idx) => {
        cup.addEventListener('click', ()  => highlightCups(idx))
    })
    const fullCups = document.querySelectorAll('.cup-small.full').length
    liters.innerText = `${+goal.value - 250 * fullCups / 1000} L`
}