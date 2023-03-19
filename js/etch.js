const grid = document.querySelector('.container');

function createGrid(){
    for(i = 0; i < 16 ; i++){
        for(j = 0; j < 16 ; j++){
            const rows = document.createElement('div');
            grid.appendChild(rows);
        }
    }
}

createGrid();