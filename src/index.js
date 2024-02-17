const button=document.querySelector('.btn');
button.addEventListener('click',changeGridSize);

function changeGridSize(){
var height=document.getElementById('height1').value;
var width=document.getElementById('width1').value;
const container=document.querySelector('.container');
if(height>100 || width>100){
    container.innerHTML="sorry, please choose a grid size between 0 and 100";
}
else{
container.innerHTML="";
for(let i=0; i<height; i++){
    for(let j=0; j<width; j++){
     var grid=document.createElement('div');
     grid.classList.add('grid');
     grid.addEventListener('mouseover',changeColor); 
     container.append(grid);
    }
}
container.style.width=`${width*30}px`;
container.style.height=`${height*30}px`;
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

