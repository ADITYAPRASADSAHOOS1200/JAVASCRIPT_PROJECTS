

const S=new Audio("./song/Bongo VY 05.wav")
const a=new Audio("./song/Cowbell VY 06.wav")
const N=new Audio("./song/Hat VY 20.wav")
const E=new Audio("./song/Open Hat VY 04.wav")
const R=new Audio("./song/Perc VY 02.wav")
const i=new Audio("./song/Roll VY 03.wav")
const Y=new Audio("./song/Snare VY 16.wav")
const A=new Audio("./song/Snare VY 39.wav")



document.body.addEventListener("keydown",(e)=>{
     if(e.key === 's'){
        S.play();
     }
     else if(e.key === 'a'){
        a.play();
     }
     else if(e.key === 'n'){
        N.play();
     }
     else if(e.key === 'e'){
        E.play();
     }
     else if(e.key === 'r'){
        R.play();
     }
     else if(e.key === 'i'){
        i.play();
     }
     else if(e.key === 'y'){
        Y.play();
     }
     else if(e.key === 'a'){
        A.play();
     }

})


