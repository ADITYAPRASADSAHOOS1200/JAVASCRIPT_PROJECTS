const newYears='1 JAN 2025';


const dayel=document.getElementById('days');
const hourel=document.getElementById('hours');
const minel=document.getElementById('min');
const secel=document.getElementById('seconds');



function countDown(){

    const newyears=new Date(newYears);
     const currenDate=new Date();
     console.log(
    "curren",currenDate," newyears",newyears)
    

      const seconds=(newyears-currenDate)/1000;
      const days=Math.floor(seconds/3600/24);
      const hours=Math.floor(seconds/3600) % 24;
      const minutes=Math.floor(seconds/60) % 60;
      const second=Math.floor(seconds) % 60;
     
     
      console.log(days," ", hours," ",minutes," ", second);

       dayel.innerHTML=format(days)
       hourel.innerHTML=format(hours)
       minel.innerHTML=format(minutes)
       secel.innerHTML=format(second)

}

function format(time){

    return time < 10 ? `0${time}` : time;
}


countDown();

setInterval(countDown,1000)





