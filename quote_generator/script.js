const quote=document.querySelector('.quote')
const author=document.querySelector('#author')
const next=document.getElementById('next')
const tweet=document.getElementById('tweet')

quote.innerHTML='Loading....' ? "press the generate btn to generate":'Loading....' 

   

let URL="https://api.quotable.io/random"

async function geturl(){
    
    const response = await fetch(URL)
   const data= await response.json();
   console.log(data);


   quote.innerHTML=`"${data.content}"`
   author.innerHTML=`"${data.author}"`
}



setTimeout(()=>{
    if(quote.innerHTML == "press the generate btn to generate"){
        next.addEventListener('click',()=>{
            quote.innerHTML="Loading...."
            geturl()
        })
    }
 },100)


function Tt(){
    if(quote.innerHTML != 'Loading....' &&  author.innerHTML!= "by author" ){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----byauthor" + author.innerHTML ,"Tweet Window","width=20","height=20")
    }else{
        alert("please generate quote")
    }
}

tweet.addEventListener('click',()=>{
    Tt();
})
