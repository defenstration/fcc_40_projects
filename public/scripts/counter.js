const count = document.getElementById("count-container")
const increase = document.getElementById("increase-btn")
const reset = document.getElementById("reset-btn")
const decrease = document.getElementById("decrease-btn")

let counter = 0

window.onload = () => {
    setCount()
}

increase.addEventListener("click", () => {
    counter++
    setCount()
})

reset.addEventListener("click", () => {
    counter = 0
    setCount()
})

decrease.addEventListener("click", () => {
    counter--
    setCount()
})

const setCount = () => {
    count.innerText = counter

    if (counter == 0) {
        count.style.color = "black"
    } else if (counter %2 == 0) {
        count.style.color = "green"
    } else if (counter%2 != 0) {
        count.style.color = "red"
    }
}