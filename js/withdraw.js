document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw');
    const newWithdrawAmount = withdrawField.value;

    const withdraw = document.getElementById('withdraw-amount');
    const previousWithdrawAmount = withdraw.innerText;

    const totalWithdrawAmount = parseFloat(newWithdrawAmount) + parseFloat(previousWithdrawAmount);

    const balance = document.getElementById('balance');
    const previouseTotalBalace = balance.innerText;

    const newTotalBalance = parseFloat(previouseTotalBalace) - parseFloat(newWithdrawAmount);

    if (parseFloat(newTotalBalance) < 0) {
        alert('insufficient balance')
    }
    else {
        withdraw.innerText = totalWithdrawAmount;
        balance.innerHTML = newTotalBalance;
    }

    withdrawField.value = '';
})