
const gameBoard=document.getElementsByClassName('right')[0];
const boardArray=[];
let selectedTool=null;

//menu 
const menu=document.getElementsByClassName('left')[0];
console.log(menu);
const toolsArray=['Axe','Pickaxe','Shovel','PurningTool','rockPlacer','grassPlacer','soilPlacer','trunkPlacer','leavesPlacer'];

//create tools:
for (i=0; i<toolsArray.length; i++){
    const tool=document.createElement('div');
    tool.setAttribute('id',toolsArray[i]);

     //click events for tools, only one tool can be clicked at a time.
     tool.addEventListener('click', function() {
        const currentClicked=document.querySelector('.left .clicked');
        if (currentClicked){
            currentClicked.classList.remove('clicked')
        }
        tool.classList.add('clicked');
            console.log(`tool clicked: ${tool.id}`); // Log the clicked tile ID
            selectedTool=tool.id;
    });
    menu.appendChild(tool);
}

//create rock counter
const Axe=document.getElementById('Axe');
Axe.innerText ='axe';

const rockCounter=document.getElementById('rockPlacer');
rockCounter.innerText ='0';
let currentRockCount=parseInt(rockPlacer.innerText);

//Create background tiles and store them in a 2D array
for(let i=1; i<16; i++){
    const row=document.createElement('div');
    row.classList.add('row'); 
        
        for(let j=1; j<16; j++){
            const rowTile=document.createElement('div');
            rowTile.setAttribute('id', `tile-${i}-${j}`);
            rowTile.setAttribute('class','boardTile');
            const tileID=rowTile.id;

            //Click event for each tile
            rowTile.addEventListener('click', function() {
            
            //ROCK   
                //removes rock
            if(rowTile.classList.contains('rock') && selectedTool==='Axe'){
                    rowTile.classList.remove('rock');
                    console.log(`remove the rock from:, ${tileID}`);
                //counter rock 
                    currentRockCount+=1;
                    rockCounter.innerText=currentRockCount;
                    // rockCounter.setAttribute('id','rockPlacer');
               }
            
                //add rock to board
            if(selectedTool==='rockPlacer' && currentRockCount>=1 ){
                if (!rowTile.classList.contains('rock')){
                    rowTile.classList.add('rock');
                    console.log(`added rock to:, ${tileID}`);

                    currentRockCount-=1;
                    rockCounter.innerText=currentRockCount;
            } }
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

//function the creates soil:
function soil(){
    for(let i=12; i<=13; i++){
        for(let j=1; j<16; j++){
            const soil=document.getElementById(`tile-${i}-${j}`)
            soil.classList.add('soil');
        }
    }
}
soil();
//function the creates grass:
function grass(){
    for(let i=11; i<=11; i++){
        for(let j=1; j<16; j++){
            const grass=document.getElementById(`tile-${i}-${j}`)
            grass.classList.add('grass');
        }
    }
}
grass();
//function the creates treetrunk:
function treeTrunk(jNum){
    for(let i=6; i<=10; i++){
        for(let j=jNum; j<=jNum; j++){
            const treeTrunk=document.getElementById(`tile-${i}-${j}`)
            treeTrunk.classList.add('treeTrunk');
        }
    }
    //function the creates treetrunk:
    // function leaves(lNum){
        for(let i=2; i<=5; i++){
            for(let j=jNum-2; j<=jNum+2; j++){
                const leaves=document.getElementById(`tile-${i}-${j}`)
                leaves.classList.add('leaves');
            }   
        }  
}

treeTrunk(4);
treeTrunk(10);
 
