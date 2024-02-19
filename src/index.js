
//changing grid size
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
container.style.width=`${width*40}px`;
container.style.height=`${height*40}px`;
}
}

let isClicked=false;

//e represented the grid div calling the function.
function changeColor(e){
    const pickColor= document.querySelector('.pickColor');
    const rainbow= document.querySelector('.rainbowInk');
    pickColor.addEventListener('click',()=>{
        isClicked=true;
    });
    rainbow.addEventListener('click',()=>{
        isClicked=false;
    })
    if(isClicked){
        const colorPicker=document.querySelector('.colorpicker');
       e.target.style.backgroundColor = `${colorPicker.value}`;
    }
    else{
    e.target.style.backgroundColor = `rgb(${generateRandomColor()})`;
}
}

//generates random rgb number
function generateRandomNumber(){
    return Math.floor(Math.random() * 256);
}

//return an rgb color using the random numbers generated
function generateRandomColor(){
    var red=generateRandomNumber();
    var green=generateRandomNumber();
    var blue=generateRandomNumber();
    return red+','+green+','+blue;
}

const reset=document.querySelector('.reset');
reset.addEventListener('click',resetGrid);

//removing all colors from grid, resetting it
function resetGrid(){
    const container=document.querySelector('.container');
    var grid=container.childNodes;
    grid.forEach((elem)=>{
        elem.style.backgroundColor='white';
    })
}

