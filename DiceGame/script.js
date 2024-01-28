const button=document.querySelector(".btn-1")


button.addEventListener("click",dicegame)

function dicegame() {

 let dice=Math.floor((Math.random() * 6)+1);
 let diceLocation="./image"+"/dice-"+dice+".png"+".png"
 let image1=document.querySelectorAll("img")[0];
 image1.setAttribute('src',diceLocation)

 let dice1=Math.floor((Math.random() * 6)+1);
 let diceLocation2="./image"+"/dice-"+dice1+".png"+".png"
 let image2=document.querySelectorAll("img")[1];
 image2.setAttribute('src',diceLocation2)
 
 if(dice > dice1){
    document.querySelector('.head').innerHTML="🥇PLayer 1 win !"
 }else if(dice1 > dice){
    document.querySelector('.head').innerHTML="🥇PLayer 2 win !"
 }else if(dice1 === dice){
    document.querySelector('.head').innerHTML="Match Draw !"
    document.querySelector(".btn-1").textContent="START AGAIN"
 }

 document.querySelector(".btn-1").innerHTML="PLAY AGAIN"


}