document.getElementById('deposit-btn').addEventListener('click',function(){
   // get deposit input field value
   const depositField = document.getElementById('deposit-field');
   const depositFieldValue = depositField.value;
   
   //convert deposit value into number
   const depositFieldValueNumber = parseFloat(depositFieldValue); 
   depositField.value = '';
   if(isNaN(depositFieldValueNumber)){
      alert('Enter valid number...');
      return;
   }
  



   ///// get previous deposit value 
   const prevDepositField = document.getElementById('prev-deposit');
   let prevDepositFieldValue = prevDepositField.innerText;
   const prevDepositFieldValueNumber = parseFloat(prevDepositFieldValue);

   const result = prevDepositFieldValueNumber + depositFieldValueNumber;
   prevDepositField.innerText = result;
   
   //get balance 
   const orginalBalanceField = document.getElementById('orginal-balance');

   const orginalBalanceFieldValue = orginalBalanceField.innerText;
  
   const orginalBalanceFieldValueNumber = parseFloat(orginalBalanceFieldValue);

//    console.log(orginalBalanceFieldValueNumber);
//    console.log(typeof orginalBalanceFieldValueNumber)
   const balance = orginalBalanceFieldValueNumber + depositFieldValueNumber;
   orginalBalanceField.innerText = balance;




   ////
  
 

})