const grid = document.querySelector('.container');

function createGrid() {
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            const squares = document.createElement('div');
            squares.classList.add("gridSquare");
            grid.appendChild(squares);
        }
    }
}

const color = document.querySelector('div');
color.addEventListener("mouseover", function (event) {
    event.target.classList.replace("gridSquare", "changeColor");
});

function updateGrid() {
    grid.innerHTML="";
    const update = document.getElementById('size').value;
    grid.style.setProperty("grid-template-columns",`repeat(${update}, 2fr)`);
    grid.style.setProperty("grid-template-rows",`repeat(${update}, 2fr)`);
    for (i = 0; i < update; i++) {
        for (j = 0; j < update; j++) {
            const squares = document.createElement('div');
            squares.classList.add("gridSquare");
            grid.appendChild(squares);
        }
    }
}

function resetGrid(){
    grid.innerHTML="";
    grid.style.setProperty("grid-template-columns",`repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows",`repeat(16, 2fr)`);
    createGrid();
}



createGrid();