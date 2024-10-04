
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

            //add click events
            rowTile.addEventListener('click', function() {
               console.log(`Tile clicked: ${tileID}`); // Log the clicked tile ID
            
            //rock   
               if(rowTile.classList.contains('rock') && selectedTool==='Axe'){
                    rowTile.classList.remove('rock');
                    console.log(`remove the rock from:, ${tileID}`);
                    
                    currentRockCount+=1;
                    rockCounter.innerText=currentRockCount;
                    rockCounter.setAttribute('id','rockCounter');
               }
            });

            row.appendChild(rowTile);
            boardArray.push(rowTile);
        }
    boardArray.push(row);
    gameBoard.appendChild(row);
}

//function the creates rock:
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
    tool.setAttribute('class','CurrentTool');
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

const currentTool=document.querySelector('.currentTool');
console.log(`currentTool: ${currentTool}`)

//create rock counter
const rockCounter=document.createElement('div');
menu.appendChild(rockCounter);
rockCounter.innerText ='0';
let currentRockCount=parseInt(rockCounter.innerText);

//when rock counter clicks -- adds rock to tiles in the board game
rockCounter.addEventListener('click', function() {
    rockCounter.classList.add('clicked');
    currentTool.classList.remove('clicked')

    if(rockCounter.classList.contains('clicked') && currentRockCount>0){
        // && (!rowTile.classList.contains('rock'))
        rowTile.classList.add('rock');
        console.log(`added rock to:, ${tileID}`);
        currentRockCount-=1;
        rockCounter.innerText=currentRockCount;
   }
});

