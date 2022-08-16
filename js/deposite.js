
document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite');
    const newDepositeAmount = depositeField.value;

    if (parseFloat(newDepositeAmount) < 0) {
        alert('Please enter positive amount');
    }

    else {
        const amountText = document.getElementById('deposite-amount');
        const previousDepositeAmount = amountText.innerText;

        const currentDepositeAmount = parseFloat(newDepositeAmount) + parseFloat(previousDepositeAmount);
        amountText.innerText = currentDepositeAmount;

        const balance = document.getElementById('balance');
        const previouseTotalBalace = balance.innerText;

        const newTotalBalance = parseFloat(previouseTotalBalace) + parseFloat(newDepositeAmount);
        balance.innerHTML = newTotalBalance;

        depositeField.value = '';
    }
})


