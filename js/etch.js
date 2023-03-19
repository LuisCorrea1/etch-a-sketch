const grid = document.querySelector('.container');

function createGrid(){
    for(i = 0; i < 16 ; i++){
        for(j = 0; j < 16 ; j++){
            const squares = document.createElement('div');
            squares.classList.add("gridSquare");
            grid.appendChild(squares);
        }
    }
}

const color = document.querySelector('div');
color.addEventListener("mouseover", function(event){
    event.target.classList.replace("gridSquare","changeColor");
});


createGrid();