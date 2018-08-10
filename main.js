
var body = document.getElementsByTagName("body")[0];
body.id = "body";

var colors = ["red", "yellow", "orange", "white", "blue", "purple", "gold", "green", "pink", "grey"];
var currentColor = "black";

// Create H1 element
var header = document.createElement("h1");

// Set element attribute/property
header.innerText = "Color Picker";

// Insert element into DOM
body.appendChild(header);
// body.insertBefore(header, body.childNodes[0]);


var playground = document.createElement("div");
playground.classList.add("playground");
playground.id = "playground";

// create the rows
for (let yPos = 0; yPos < 10; yPos++) {
    var rowDiv = document.createElement("div");
    rowDiv.classList.add("rowDiv");
    rowDiv.id = "row" + yPos;

    // create the pixels for each row
    for (xPos = 0; xPos < 10; xPos++) {
        var pixelDiv = document.createElement("div");
        pixelDiv.id = xPos + "_" + yPos;
        pixelDiv.classList.add("pixelDiv");
        // pixelDiv.addEventListener("click", paintPixel);

        pixelDiv.onclick = paintPixel;
        // add the pixels to the row
        rowDiv.appendChild(pixelDiv);
    }

    // add the row to the playground
    playground.appendChild(rowDiv);
}

// add the playground to the body
body.appendChild(playground);

function paintPixel(event) {
    this.style.backgroundColor = currentColor;
}

var paletteRow = document.createElement("div");
paletteRow.id = "paletteRow";
paletteRow.classList.add("paletteRow");
for (xPos = 0; xPos < 10; xPos++) {
    var paletteDiv = document.createElement("div");
    paletteDiv.classList.add("paletteDiv");
    paletteDiv.style.backgroundColor = colors[xPos];
    paletteDiv.addEventListener("click", setColor)
    paletteRow.appendChild(paletteDiv);
}

playground.appendChild(paletteRow);

function setColor(event) {
    currentColor = this.style.backgroundColor;
}