const body = document.querySelector('body')
const docEl = document.documentElement

body.addEventListener('click', () => {
    docEl.style.setProperty('--direction', getComputedStyle(docEl).getPropertyValue('--direction') * (-1))
})