const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upBtn = document.querySelector('.up-btn')
const downBtn = document.querySelector('.down-btn')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up')) //changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        upBtn.classList.add('active')
        activeSlideIndex++
        if(activeSlideIndex >= slidesLength) {
            activeSlideIndex = 0
        }
        setTimeout(() => upBtn.classList.remove('active'), 250)
    } else if(direction === 'down') {
        downBtn.classList.add('active')
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
        setTimeout(() => downBtn.classList.remove('active'), 250)
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}