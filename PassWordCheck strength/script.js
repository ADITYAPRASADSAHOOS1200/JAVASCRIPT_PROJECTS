const input=document.getElementById('input');
const outer=document.getElementById('outer')
console.log(input,outer);

input.addEventListener('input',()=>{
   
    let password=input.value;
      if(!password){
        outer.innerText=`please enter the password`
      }
    else if(password.length < 8 ){
        outer.innerText=`password is weak`;
        outer.style.color='red'
    }else{
        
       if(password.search(/[a-z]/) == -1){
        
        outer.innerText=`contain at least one lowercase character `
        outer.style.color='red'
       }else if(password.search(/[A-Z]/) == -1){
         outer.innerText=`contain at least one uppercase character `
         outer.style.color='red'
       }else if(password.search(/[0-9]/) == -1){
         outer.innerText=`contain at least one Numeric character `
         outer.style.color='red'
       }else if(password.search(/[!\^\$\@\#]/) == -1){
         outer.innerText=`contain at least one!^$@# character `
         outer.style.color='red'
       }else{
        outer.innerText=`password is strong`;
        outer.style.color='green'
       }
    }
    
})







