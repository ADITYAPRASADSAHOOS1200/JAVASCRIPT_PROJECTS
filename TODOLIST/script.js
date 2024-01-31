
const inputbox=document.querySelector('#input-box')
const listContainer=document.querySelector('#list-container')
const button=document.querySelector('#btn')

console.log(inputbox);
console.log(listContainer);


showdata()

function addTask(){
    if(inputbox.value === ""){
         alert("kuch toh likh le bhai ! kal kya kaam karega")

    }else{
        let li=document.createElement("li")
        li.innerText=inputbox.value;
        listContainer.appendChild(li)
        
        let span=document.createElement('span')
        span.setAttribute('id','delete')
        span.innerHTML="<i class= 'fa-solid fa-trash'></i>";
        li.append(span)
        console.log(li);
     

       alwaysSave()
    }
 inputbox.value = ""
}

listContainer.addEventListener('click',function(e){
    
     if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");
        alwaysSave()
     }
    else if(e.target.tagName === "I"){
         e.target.parentElement.parentElement.remove(); 
    }
})


function alwaysSave(){
   localStorage.setItem("data",listContainer.innerHTML);
}
function showdata(){
    listContainer.innerHTML=localStorage.getItem("data")
}


button.addEventListener("click",(e)=>{ 
    addTask()
})
window.addEventListener("keyup",(e)=>{
    if(e.key === "Enter"){
        addTask();
    }
})

