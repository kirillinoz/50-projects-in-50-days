const buttons = document.querySelectorAll("nav ul li")
const contents = document.querySelectorAll(".content")
const brightnessEl = document.getElementById("brightness")
const phone = document.querySelector(".phone")
const brightness = document.getElementById("brightness-value")

//GET ALL BUTTONS AND CLICKED BUTTON
buttons.forEach((button, idx) => button.addEventListener("click", () => {
    //IF NOT ALREADY SELECTED, PROCEED
    if(!button.classList.contains("active")){
        //REMOVE ALL ACTIVES
        buttons.forEach(button => button.classList.remove("active"))
        contents.forEach(content => content.classList.remove("show"))
        //ADD ACTIVES TO CLICKED
        button.classList.add("active")
        contents[idx].classList.add("show")
    }
}))

brightnessEl.addEventListener("input", () => {
    brightness.innerText = brightnessEl.value + "%"
    const newBrightness = brightnessEl.value / 2 + 50
    phone.style.filter = `brightness(${newBrightness}%)`
})
