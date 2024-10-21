const modalBtn =  document.getElementById("modal-btn")
const input = document.getElementById("input")
const dialog = document.getElementById("dialog-box")
const dialogText = document.getElementById("output-text")
const clearBtn = document.getElementById("clear-btn")

modalBtn.addEventListener("click", () => {
    dialog.showModal()

    if (input.value == "") {
        dialogText.textContent = "You didn't type anything!"
    } else {
        dialogText.textContent = input.value
    }
    
})

clearBtn.addEventListener("click", () => {
    input.value = ""
    dialog.close()
})