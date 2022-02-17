function gettingValue(val, text) {
    const inputField = document.getElementById(val);
    const valueNumber = parseFloat(inputField.value);

    const inputOf = document.getElementById(text);
    const inputOfText = inputOf.innerText;

    if(valueNumber >= 0) {
        return valueNumber;
    }else{
        alert('Give proper and positive value for: ' + inputOfText);
    }
    
}

function gettingValueFromText(val, text) {
    const inputField = document.getElementById(val);
    const valueNumber = parseFloat(inputField.innerText);

    const inputOf = document.getElementById(text);
    const inputOfText = inputOf.innerText;

    if(valueNumber >= 0) {
        return valueNumber;
    }else{
        alert('Give proper and positive value for: ' + inputOfText);
    }
    
}

function setingValue(fieldId, balance){
    const getValue = document.getElementById(fieldId);
    if (balance >= 0){
        getValue.innerText = balance;
    }else{
        getValue.innerText = "Can not calculate. Invalid Information"
    }
    
}

document.getElementById('calculate-button').addEventListener('click', function() {
    const incomeNumber = gettingValue('income-field', 'income-text');

    const foodCostNumber = gettingValue('food-cost-field', 'food-text');

    const rentCostNumber = gettingValue('rent-cost-field', 'rent-text');

    const clothesCostNumber = gettingValue('clothes-cost-field', 'clothes-text');

    const totalExpense = foodCostNumber + rentCostNumber + clothesCostNumber;

    const remainingBalance = incomeNumber - totalExpense;

    if (totalExpense > incomeNumber) {
        alert('You can not spend more than your income.');
        window.location.reload();
    }
    else{
        setingValue('expense', totalExpense);
        setingValue('remaining-balance', remainingBalance);
    }
    
})



document.getElementById('save-button').addEventListener('click', function(){
    const incomeNumber = gettingValue('income-field', 'income-text');

    const remainBalanceNumber = gettingValueFromText('remaining-balance', 'balance-text');

    const savingNumber = gettingValue('save-field', 'save-text');

    const saving = incomeNumber * (savingNumber/100);

    const remainAfterSave = remainBalanceNumber - saving;

    setingValue('saved-amount', saving);

    setingValue('remain-after-save', remainAfterSave);
})