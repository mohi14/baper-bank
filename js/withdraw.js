document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Enter valid input');
        return;
    }

    const withdraw = document.getElementById('withdraw-amount');
    const previousWithdrawAmountString = withdraw.innerText;
    const previousDepositeAmount = parseFloat(previousWithdrawAmountString);

    const balance = document.getElementById('balance');
    const previouseTotalBalaceString = balance.innerText;
    const previouseTotalBalace = parseFloat(previouseTotalBalaceString)

    if (newWithdrawAmount > previouseTotalBalace) {
        alert('Insufficient Balance')
        return;
    }

    if (newWithdrawAmount < 0) {
        alert('Enter positive amount')
        return;
    }


    const totalWithdrawAmount = newWithdrawAmount + previousDepositeAmount;
    withdraw.innerText = totalWithdrawAmount;

    const newTotalBalance = previouseTotalBalace - newWithdrawAmount;
    balance.innerHTML = newTotalBalance;

})