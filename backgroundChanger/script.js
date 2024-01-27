const hexcode=[0,1,2,3,4,5,6,7,8,9,10,"A","B","C","D","E","F"]

const color=document.querySelector('.color ')
const  button=document.querySelector('.btn-1')

button.addEventListener('click',()=>{
     let hex="#";
     for (let i = 0; i < 6; i++) {
        hex += hexcode[getRandom()];
     }
     color.textContent=hex;
     document.body.style.backgroundColor=hex
     console.log(Math.floor(Math.random()*hexcode.length));
})

function getRandom(){
return Math.floor(Math.random()*hexcode.length);
}