const buttons = document.querySelectorAll('.ripple')
const santa = document.querySelector('.wrapper')
const sound = document.getElementById('santa')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)

        //CHRISTMAS CUSTOM
        if(sound.paused){
        santa.classList.add('active')

        setTimeout(() => santa.classList.remove('active'), 2000)

        sound.play()
        }
    })
})