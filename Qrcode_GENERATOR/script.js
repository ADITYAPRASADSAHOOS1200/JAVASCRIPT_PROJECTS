const input=document.getElementById('input')
const  button =document.querySelector('#qr-button') 
const qrimg=document.querySelector('#qr-img')

console.log(input,button,qrimg);

 button.addEventListener('click',()=>{
    
     const inputval=input.value ;
        if (!inputval) {

            alert("Please enter a valid non-empty string.");
        } else{
         
    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputval}`
     qrimg.alt=`Qr code ${inputval} `

        }
    })

 






