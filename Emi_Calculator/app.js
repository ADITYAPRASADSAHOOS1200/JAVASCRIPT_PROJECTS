const loanAmount=document.querySelector("#Loan-amount");
const loanTenure=document.querySelector("#Loan-tenure");
const interestRate=document.querySelector("#interest-rate")
const buttons=document.querySelector(".btn-1");

console.log(buttons);


const month=document.getElementById('Month')
const Principle=document.getElementById('principle')
const interestrate=document.getElementById('interest')
const totalamount=document.getElementById('total')


console.log(month,Principle,interestrate,total);


buttons.addEventListener("click",function(){
     
    let amount=loanAmount.value;
    let tenure=loanTenure.value;
    let rate=interestRate.value/1200;

    
    
    let emi = (amount * rate * (1 + rate)** tenure) / ((1 + rate)** tenure - 1);
    let total = emi * tenure;
    let interest = total - amount;
  
  

    month.textContent=`${Math.floor(emi)}`
    Principle.textContent=`${Math.floor(amount)}`
    interestrate.textContent=`${Math.floor(interest)}`
    totalamount.textContent=`${Math.floor(total)}`


  //loanchart

//   let xValues=["Principle","interestrate","month","totalamount"]
//   let yValues=[`${Math.floor(amount)}`,`${Math.floor(interest)}`,`${Math.floor(total)}`]

//   let barcolor=['#FFD700','#ADD8E6','#90EE90','#808080']

//   new Chart("LoanChart", {
//     type: 'pie',
//     data: {
//         labels: xValues,
//         datasets: [{
//             backgroundColor: barcolor,
//             data: yValues,
//         }]
//     },
//     options: {
//         title: {
//             display: false,
//         }
//     }
//  });
})