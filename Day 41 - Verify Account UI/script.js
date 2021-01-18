const codes = document.querySelectorAll('.code')
const secret_code = document.querySelector('#secret-code span').innerText

codes[0].focus()

let currentValues = []

codes.forEach((code, idx) => {
    code.addEventListener('click', () => {
        if(code.value != undefined){
            code.select()
        }
    })

    code.addEventListener('keydown', (e) => {
        if(idx < 5 && e.key >= 0 && e.key <=9) {
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        }else if(idx > 0 && e.key === 'Backspace') {
            setTimeout(() => codes[idx-1].select(), 10)
        }else if(idx === 5 && e.key >= 0 && e.key <=9) {
            codes[idx].value = ''
            setTimeout(() => codes[idx].blur(), 10)
        }
        currentValues.length = 0
        setTimeout(() => {
            codes.forEach(code => currentValues.push(code.value))
            console.log(currentValues)
            if(!currentValues.includes("")){
                console.log(currentValues.join("") === secret_code)
                let color = currentValues.join("") === secret_code ? "accepted" : "denied"
                codes.forEach(code => {
                    code.classList.add(color)
                    setTimeout(() => code.classList.remove(color), 500)
                    code.value = ""
                })
            }
        }, 10)
    })
    
})