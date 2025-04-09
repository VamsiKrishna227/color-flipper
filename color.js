function flipColor() {
    const randomColor = generateRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color").textContent = randomColor;
}

function generateRandomHexColor() {
    const hexValues = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hexValues[Math.floor(Math.random() * 16)];
    }
    return hexColor;
}
