const inputList=document.querySelectorAll('.property input')
console.log(inputList);

let box=document.querySelector('.box')


function fetch(){

let Hoffset=document.getElementById('hoffset').value;
let Voffset=document.getElementById('Voffset').value;
let blur=document.getElementById('blur').value;
let spread=document.getElementById('spread').value;
let color=document.getElementById('color').value;
let moz=document.querySelector('.moz');
let webkit=document.querySelector('.webkit');
let normal=document.querySelector('.normal');


let boxshadow = `${Hoffset}px ${Voffset}px ${blur}px ${spread}px ${color}`;
box.style.boxShadow = `${boxshadow}`;

moz.textContent = `-moz-box-shadow: ${boxshadow};`;
webkit.textContent = `-webkit-box-shadow: ${boxshadow};`;
normal.textContent = `box-shadow: ${boxshadow};`;

}


inputList.forEach( input=>{
   input.addEventListener('change',fetch)
})

inputList.forEach(input =>{
    input.addEventListener('mousemove',fetch)
})



