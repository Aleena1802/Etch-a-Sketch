const container=document.querySelector('.container');

for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
     var grid=document.createElement('div');
     grid.classList.add('grid');
     container.append(grid);
    }
}

container.style.cssText='';