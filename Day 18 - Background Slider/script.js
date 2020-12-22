const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

setBgToBody()

leftBtn.addEventListener('click', () => {
    if(activeSlide <= 0){
        activeSlide = slides.length - 1
    }else {
        activeSlide--
    }
    setBgToBody()
    setActiveSlide()
})

rightBtn.addEventListener('click', () => {
    if(activeSlide >= slides.length - 1){
        activeSlide = 0
    }else {
        activeSlide++
    }
    setActiveSlide()
    setBgToBody()
})

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}

