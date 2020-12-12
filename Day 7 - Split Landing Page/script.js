const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))

const accBtns = document.querySelectorAll('.accordion_btn')
accBtns.forEach(btn => {

    left.addEventListener('mouseleave', () => {
        container.classList.remove('hover-left')
        btn.classList.remove('active')
        activeUpdate(btn)
    })

    right.addEventListener('mouseleave', () => {
        container.classList.remove('hover-right')
        btn.classList.remove('active')
        activeUpdate(btn)
    })

    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
        activeUpdate(btn)
    })
})


function activeUpdate(btn) {
        const accContent = btn.nextElementSibling
        const word = btn.querySelector('span')

        if(btn.classList.contains('active')){
            accContent.style.maxHeight = accContent.scrollHeight + 'px'
            word.textContent = 'less'
        }else {
            accContent.style.maxHeight = 0
            word.textContent = "more"
        }
}