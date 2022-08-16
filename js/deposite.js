
document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    depositeField.value = '';

    if (isNaN(newDepositeAmount)) {
        alert('Enters valid Input');
        return;
    }
    if (newDepositeAmount < 0) {
        alert('Enter positive amount');
        return;
    }
    const amountText = document.getElementById('deposite-amount');
    const previousDepositeAmountString = amountText.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountString);


    const balance = document.getElementById('balance');
    const previouseTotalBalaceString = balance.innerText;
    const previouseTotalBalace = parseFloat(previouseTotalBalaceString);

    const currentDepositeAmount = newDepositeAmount + previousDepositeAmount;
    amountText.innerText = currentDepositeAmount;

    const newTotalBalance = previouseTotalBalace + newDepositeAmount;
    balance.innerHTML = newTotalBalance;
})


