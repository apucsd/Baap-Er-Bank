document.getElementById('Withdraw-btn').addEventListener('click',function(){
    const WithdrawField = document.getElementById('Withdraw-field');
    const WithdrawFieldValue = WithdrawField.value;
    const WithdrawFieldValueNumber = parseFloat(WithdrawFieldValue);
    ////validate input field 

    if(isNaN(WithdrawFieldValueNumber)){
        alert('Enter valid number...');
        return;
     }

    const prevWithdraw = document.getElementById('prev-withdraw');
    const prevWithdrawValue = prevWithdraw.innerText;
    const prevWithdrawValueNumber = parseFloat(prevWithdrawValue);
    prevWithdraw.innerText = prevWithdrawValueNumber + WithdrawFieldValueNumber;

   
   


const orginalBalanceField = document.getElementById('orginal-balance');
const orginalBalanceFieldValue = orginalBalanceField.innerText;
const orginalBalanceFieldValueNumber = parseFloat(orginalBalanceFieldValue);

orginalBalanceField.innerText = orginalBalanceFieldValueNumber - WithdrawFieldValueNumber;





// //////
WithdrawField.value = '';
})