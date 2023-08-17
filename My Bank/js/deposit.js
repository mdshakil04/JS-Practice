// Step-1: add eventListener to the targeted button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('diposit button clicked');
    // Step:2: get the targeted amount from the input field
    const depositField = document.getElementById('deposit-field');
    // If I want get the value from an input field i have to use '.value'
    const newDepositAmountString = depositField.value;
    // by default value of input field its a String
    const newDepositAmount = parseFloat(newDepositAmountString);
    // as junior i have use clg for check
    // console.log(depositAmount);
    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    // console.log(depositTotalElement)
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // console.log(depositTotal);
    // step-4: 
    // This is output
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposite total
    depositTotalElement.innerText = currentDepositTotal;
    // Step-5: Get the current total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current balance total
    const currentBalanceTotal= previousBalanceTotal + newDepositAmount;
    // Set the balace total
    balanceTotalElement.innerText = currentBalanceTotal;


    // step-7: clear the input field
    depositField.value = '';


    


})
