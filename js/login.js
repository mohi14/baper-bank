document.getElementById('submit-btn').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordFiedl = document.getElementById('user-password');
    const userPassword = passwordFiedl.value;

    if (userEmail === 'shontan@baap.com' && userPassword === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user');
    }
})

/* --------------------------
Log out
-----------------------------*/

