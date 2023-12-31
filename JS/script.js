document.getElementById('calculate').addEventListener('click', function(){
    const income = document.getElementById('income-amount');
    const incomeAmountString = income.value;
    const incomeAmount = parseInt(incomeAmountString);

    const food = document.getElementById('food');
    const foodString = food.value;
    const foodAmount = parseInt(foodString);

    const rent = document.getElementById('rent');
    const rentString = rent.value;
    const rentAmount = parseInt(rentString);

    const clothes = document.getElementById('clothes');
    const clothString = clothes.value;
    const clothAmount = parseInt(clothString);

    const expense = document.getElementById('total-expenses');
    const calculateExpenses = foodAmount + rentAmount + clothAmount;
    expense.innerText = calculateExpenses;

    const balance = document.getElementById('balance');
    const balanceRemaining = incomeAmount - calculateExpenses;
    balance.innerText = balanceRemaining;

});

document.getElementById('savings').addEventListener('click', function(){
    const balance = document.getElementById('balance');
    const savingAmount = document.getElementById('saving-amount');

    const saveAmount = balance * 0.2;
    savingAmount.innerText = saveAmount;

    const remainingBalance = document.getElementById('remaining-balance');
    const totalRemainingBalance = balance - saveAmount;
    remainingBalance.innerText = totalRemainingBalance;

});


