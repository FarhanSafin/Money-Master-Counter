document.getElementById('calculate').addEventListener('click', function() {
    const foodCost = document.getElementById('food-cost');
    const foodCostNumber = parseFloat(foodCost.value);

    const rentCost = document.getElementById('rent-cost');
    const rentCostNumber = parseFloat(rentCost.value);

    const clothesCost = document.getElementById('clothes-cost');
    const clothesCostNumber = parseFloat(clothesCost.value);

    const totalExpense = foodCostNumber + rentCostNumber + clothesCostNumber;

    const expense = document.getElementById('expense');
    expense.innerText = totalExpense;

    const income = document.getElementById('income');
    const incomeNumber = parseFloat(income.value); 

    const remainingBalance = incomeNumber - totalExpense;

    const remain = document.getElementById('remaining-balance');
    remain.innerText = remainingBalance;
})