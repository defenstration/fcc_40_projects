const colorBtn = document.querySelector(".color-flip-btn")

const colors = [
    { "Red": 'hsl(0, 100%, 50%)' },
    { "Orange": 'hsl(30, 100%, 50%)' },
    { "Yellow": 'hsl(60, 100%, 50%)' },
    { "Light Green": 'hsl(90, 100%, 50%)' },
    { "Green": 'hsl(120, 100%, 50%)' },
    { "Mint Green": 'hsl(150, 100%, 50%)' },
    { "Cyan": 'hsl(180, 100%, 50%)' },
    { "Sky Blue": 'hsl(210, 100%, 50%)' },
    { "Blue": 'hsl(240, 100%, 50%)' },
    { "Purple": 'hsl(270, 100%, 50%)' },
    { "Magenta": 'hsl(300, 100%, 50%)' },
    { "Pink": 'hsl(330, 100%, 50%)' },
    { "Gray": 'hsl(0, 0%, 50%)' },
    { "Dark Cyan": 'hsl(180, 50%, 25%)' },
    { "Light Yellow": 'hsl(60, 80%, 90%)' }
  ];
  

colorBtn.addEventListener("click", () => {
    let number = Math.floor(Math.random() * 15)
    
    let color = colors[number]

    let colorName
    let colorHSL
    
    for (let key in color) {
      colorName = key
      colorHSL = color[key]
    }
    
    const colorText = document.getElementById("color-text")
    const background = document.getElementById("background")

    colorText.textContent = `Background Color: ${colorName}`
    background.style.backgroundColor = colorHSL
})