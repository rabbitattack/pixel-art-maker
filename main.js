
const grid = querySelector(".grid");

    for (let i =0; i < 11; i++)  {
        const rowi = document.createElement("div")
        rowi.classList.add('rowi')
        grid.appendChild(rowi);
    }