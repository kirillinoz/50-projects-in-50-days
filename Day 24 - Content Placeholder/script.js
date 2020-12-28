const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://images.pexels.com/photos/3183135/pexels-photo-3183135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">'
    title.innerHTML = 'New job possibilities'
    excerpt.innerHTML = 'Almost nothing else occupies our lives as much as our work. Probably why it’s called an “occupation.” Will VR change this?'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/40.jpg">'
    name.innerHTML = 'Gordon Freeman'
    date.innerHTML = 'May 5, 2015'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}