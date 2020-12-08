const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.value = '';
    input.focus()
})

input.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        window.open("https://google.com/search?q=" + input.value, '_self')
    }
})