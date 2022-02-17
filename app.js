function gettingValue(val) {
    const value = document.getElementById(val);
    const valueNumber = parseFloat(value.value);

    if(valueNumber >= 0) {
        return valueNumber;
    }else{
        alert('give positive number');
    }
    
}

function setingValue(fieldId, balance){
    const getValue = document.getElementById(fieldId);
    if(balance != 'number') {
        window.location.reload()
    }else{
        getValue.innerText = balance;
    }
    
}

document.getElementById('calculate').addEventListener('click', function() {
    const foodCostNumber = gettingValue('food-cost');

    const rentCostNumber = gettingValue('rent-cost');

    const clothesCostNumber = gettingValue('clothes-cost');

    const incomeNumber = gettingValue('income') 

    const totalExpense = foodCostNumber + rentCostNumber + clothesCostNumber;

    const remainingBalance = incomeNumber - totalExpense;

    if (totalExpense > incomeNumber) {
        alert('cannt spend');
        window.location.reload();
    }else{
        setingValue('expense', totalExpense);
        setingValue('remaining-balance', remainingBalance);
    }
    
})