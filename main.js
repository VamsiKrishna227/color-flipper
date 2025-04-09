const colors = ["RED", "blue", "lightgreen", "yellow", "#FF33F3", "#33FFF3"];
let colorIndex = 0;

function flipColor() {
    // Cycle through the colors array
    colorIndex = (colorIndex + 1) % colors.length;
    const newColor = colors[colorIndex];

    // Update the background color and the displayed color text
    document.body.style.backgroundColor = newColor;
    document.getElementById("color").textContent = newColor;
}
