const decrease=document.querySelector('.dec')
const reset=document.querySelector('.res')
const increse=document.querySelector('.inc')
const count=document.querySelector('.value')



function increase(){
   let value=parseInt(count.innerText);
   value = value + 1;
   count.innerText=value;
}
increse.addEventListener('click',increase)
function decreae(){
   let value=parseInt(count.innerText);
   value = value - 1;
   count.innerText=value;
}
decrease.addEventListener('click',decreae)

reset.addEventListener('click',()=>{
    let value=parseInt(count.innerText);
    value = 0;
    count.innerText=value;
})



