
const gameBoard=document.getElementsByClassName('right')[0];
const boardArray=[];

//make the gameBoard as 2d array, create background tiles.
for(let i=1; i<16; i++){
    const row=document.createElement('div');
    row.classList.add('row'); 
        
        for(let j=1; j<16; j++){
            const rowTile=document.createElement('div');
            rowTile.setAttribute('id', `tile-${i}-${j}`);
            rowTile.setAttribute('class','boardTile');
            const tileID=rowTile.id;

            //click events
            rowTile.addEventListener('click', function() {
               console.log(`Tile clicked: ${tileID}`); // Log the clicked tile ID
               
               if(rowTile.classList.contains('rock') && selectedTool==='Axe'){
                    rowTile.classList.remove('rock');
                    console.log(`remove the rock from:, ${tileID}`);
               }
            });

            row.appendChild(rowTile);
            boardArray.push(rowTile);
        }
    boardArray.push(row);
    gameBoard.appendChild(row);
}

//function the creates cement:
function rock(){
    for(let i=14; i<=15; i++){
        for(let j=1; j<16; j++){
            const rock=document.getElementById(`tile-${i}-${j}`)
            rock.classList.add('rock');
            console.log(rock);
        }
    }
}
rock();

// if()

// //menu buttons
// a. Axe - for cutting trees
// b.Pickaxe - for mining rocks
// c. Shovel - for digging dirt
// counters: leaves, treetrunk, grass*, soil, rock.

const menu=document.getElementsByClassName('left')[0];
console.log(menu);
const toolsArray=['Axe','Pickaxe','Shovel'];
let selectedTool;
//create tools:
for (i=0; i<toolsArray.length; i++){
    const tool=document.createElement('div');
    tool.setAttribute('id',toolsArray[i]);
    tool.textContent=toolsArray[i];

     //click events
    tool.addEventListener('click', function() {
        const currentClicked=document.querySelector('.left .clicked');
        if (currentClicked){
            currentClicked.classList.remove('clicked')
        }

        tool.classList.add('clicked');
            console.log(`tool clicked: ${tool.id}`); // Log the clicked tile ID
            selectedTool=tool.id;
    });

    console.log(tool);
    menu.appendChild(tool);
}

//create rock counter

