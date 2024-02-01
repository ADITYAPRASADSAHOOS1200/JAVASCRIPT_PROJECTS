const questions = [
    {
        question: "Which is the largest animal?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Mouse", correct: false },
        ]
    },
    {
        question: "What is the capital of France?",
        answer: [
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "What is the capital of Japan?",
        answer: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false },
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answer: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Silver", correct: false },
        ]
    },
    {
        question: "What is the largest mammal on Earth?",
        answer: [
            { text: "Giraffe", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Hippopotamus", correct: false },
        ]
    },
    {
        question: "In which year did Christopher Columbus reach the Americas?",
        answer: [
            { text: "1492", correct: true },
            { text: "1600", correct: false },
            { text: "1776", correct: false },
            { text: "1850", correct: false },
        ]
    },
    {
        question: "What is the currency of Australia?",
        answer: [
            { text: "Dollar", correct: true },
            { text: "Euro", correct: false },
            { text: "Yen", correct: false },
            { text: "Pound", correct: false },
        ]
    },
    {
        question: "Which planet is known as the 'Morning Star'?",
        answer: [
            { text: "Venus", correct: true },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answer: [
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
        ]
        
    },
];


const questionel=document.getElementById('question')
const answerbuttons=document.getElementById('answer-buttons')
const next=document.getElementById('next-btn')

console.log(questionel,answerbuttons,next);


let Index=0;
let Score=0;



function startQuiz(){
   Index=0;
   Score=0;
   next.innerHTML='Next';
   showquiz();
}
function showquiz(){
    resetState()
    let questionType=questions[Index];
    console.log(questionType);

    let questNo=Index+1; 
    // console.log(questNo);

    questionel.innerHTML=questNo+". "+questionType.question;
    // console.log(questionel);

questionType.answer.forEach(element => {
         let button=document.createElement('button')
         button.classList.add('btn')
         button.innerHTML=element.text
         answerbuttons.append(button)
         console.log(answerbuttons);
    
       if(element.correct ){
           button.dataset.correct = element.correct
        console.log(button.dataset.correct = element.correct);
       }
       button.addEventListener('click',selectAnswer)
        console.log(button);
     });

}

 function resetState(){
    next.style.display='none'
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
 }

startQuiz();

  function selectAnswer(e){
     let selectBtn=e.target;
     let isCorrect=selectBtn.dataset.correct === "true";
    console.log(isCorrect);

    if(isCorrect){
        selectBtn.classList.add('correct')
    }else{
        selectBtn.classList.add('incorrect')
    }

    Array.from(answerbuttons.children).forEach( element =>{
          if(element.dataset.correct === true){
              element.classList.add('correct')      
         }
         element.disabled=true;
    })
    next.style.display="block";
  }


function showScore(){
    resetState();
    questionel.innerHTML=`youre ${Score} out of ${questions.length}`
    next.innerHTML="Play Again";
    next.style.display="block"
  
}


   function handleNextButton(){
      Index++;
     if(Index < questions.length){
          startQuiz();
     }else{
        showScore();
     }
   }



   next.addEventListener('click',()=>{
    if(Index < questions.length ){
     handleNextButton();        
    }else{
        startQuiz();
    }

   })






