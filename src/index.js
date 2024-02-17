const container=document.querySelector('.container');

for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
     var grid=document.createElement('div');
     grid.classList.add('grid');
     grid.addEventListener('mouseover',changeColor); 
     container.append(grid);
    }
}

//e represented the grid div calling the function.
function changeColor(e){
    e.target.style.backgroundColor = `rgb(${generateRandomColor()})`; // Corrected the style assignment
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 256);
}

function generateRandomColor(){
    var red=generateRandomNumber();
    var green=generateRandomNumber();
    var blue=generateRandomNumber();
    return red+','+green+','+blue;
}

function changeGridSize(){
    var height=document.getElementsByName('height1');
    console.log(height);
}