const btn = document.getElementById('btn')
const toasts = document.getElementById('toasts')
const typeSelector = document.getElementById('type')

const messages = [
    "You've got a message! 📨",
    'How are you doing? ❓',
    'Happy New Year! 🎉',
    'Happy Holidays! 🎊',
]

btn.addEventListener('click', () => createNotification())

function createNotification() {
    const type = typeSelector.value
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type)

    if(type === "attention"){
        setInterval(() => notif.classList.toggle(type), 300)
    }

    //TRANSITION
    notif.classList.add('new')
    setTimeout(() => notif.classList.remove('new'), 30)
    //-----

    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => notif.classList.add('new'), 2700)
    setTimeout(() => notif.remove(), 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}