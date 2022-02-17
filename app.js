/* Get values from the input fields */
function gettingValue(val, text) {
    const inputField = document.getElementById(val);
    const valueNumber = parseFloat(inputField.value);

    const inputOf = document.getElementById(text);
    const inputOfText = inputOf.innerText;

    if(valueNumber >= 0) {
        return valueNumber;
    }else{
        alert('Give proper and positive value for: ' + inputOfText + '. Please try again.');
    }
    
}

/* Setting value in the page */
function setingValue(fieldId, balance){
    const getValue = document.getElementById(fieldId);
    if (balance >= 0){
        getValue.innerText = balance;
    }else{
        window.location.reload();
    }
    
}

/* Get necessary value and calculate for expense and remaining balance */
document.getElementById('calculate-button').addEventListener('click', function() {
    const incomeNumber = gettingValue('income-field', 'income-text');

    const foodCostNumber = gettingValue('food-cost-field', 'food-text');

    const rentCostNumber = gettingValue('rent-cost-field', 'rent-text');

    const clothesCostNumber = gettingValue('clothes-cost-field', 'clothes-text');

    const totalExpense = foodCostNumber + rentCostNumber + clothesCostNumber;
    const fixedtotalExpense = totalExpense.toFixed(3);

    const remainingBalance = incomeNumber - totalExpense;
    const fixedremainingBalance = remainingBalance.toFixed(3);

    if (totalExpense > incomeNumber) {
        alert('You can not spend more than your income. Please try again.');
        window.location.reload();
    }
    else{
        setingValue('expense', fixedtotalExpense);
        setingValue('remaining-balance', fixedremainingBalance);
    }

})

/* Calculation for finding the save amount */
document.getElementById('save-button').addEventListener('click', function(){
    const incomeNumber = gettingValue('income-field', 'income-text');

    const remainBalanceNumber = document.getElementById('remaining-balance');
    const remainBalanceNumberFloat = parseFloat(remainBalanceNumber.innerText)

    const savingNumber = gettingValue('save-field', 'save-text');

    let saving = incomeNumber * (savingNumber/100);
    let fixedSaving = saving.toFixed(3)

    let remainAfterSave = remainBalanceNumberFloat - saving;
    let fixedRemainAfterSave = remainAfterSave.toFixed(3)

    if (saving > remainBalanceNumberFloat){
        alert('You dont have enough money to save. Please try again.');
        window.location.reload();
    }
    else{
        setingValue('saved-amount', fixedSaving);
        setingValue('remain-after-save', fixedRemainAfterSave);
    }
    
})