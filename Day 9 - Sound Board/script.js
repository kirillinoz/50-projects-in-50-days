const sounds = ['good luck', 'florin', 'ebook', 'tomorrow', 'applause', 'sure that', 'legen... dary']
const img = document.querySelector('img');

sounds.forEach((sound, idx) => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()

        img.src = `/img/${idx + 1}.jpg`
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}