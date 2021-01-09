const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const imgContainer = document.getElementById('imgs')
const options = document.querySelectorAll('.option')

let interval = setInterval(run, 2000)

let img = "";

let idx = 0

setPictures(0)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    }else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

options.forEach((option, idx) => option.addEventListener('click', (e) => selectOption(e, idx)))

function selectOption(e, idx) {
    if(!e.target.classList.contains('active')){
        options.forEach(option => option.classList.remove('active'))
        setPictures(idx)
        e.target.classList.add('active')
    }
}

function setPictures(idx) {
    imgContainer.innerHTML = ""
    const data = [
        [
            "https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/586065/pexels-photo-586065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/586034/pexels-photo-586034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/586093/pexels-photo-586093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ], 
        [
            "https://images.pexels.com/photos/34521/space-shuttle-lift-off-liftoff-nasa.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/87089/rocket-lift-off-liftoff-astronautics-87089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ], 
        [
            "https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/23763/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ]
    ]
    data[idx].forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        imgContainer.appendChild(img)
    })
    img = imgContainer.querySelectorAll('img')
    idx = 0
    changeImage()
    resetInterval()
}