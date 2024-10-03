
const gameBoard=document.getElementsByClassName('right')[0];
// console.log(skyTiles);

//make the gameBoard as 2d array, create background tiles.
for(let i=1; i<6; i++){
    const row=document.createElement('div');
    row.classList.add('row'); 
    const boardArray=[];
        
        for(let j=1; j<9; j++){
            const rowTile=document.createElement('div');
            rowTile.setAttribute('id', `sky-${i}-${j}`);
            row.appendChild(rowTile);
            
            boardArray.push(rowTile);
        }
    boardArray.push(row);
    gameBoard.appendChild(row);

}
