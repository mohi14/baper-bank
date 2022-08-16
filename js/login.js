document.getElementById('submit-btn').addEventListener('click', function () {

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordFiedl = document.getElementById('user-password');
    const userPassword = passwordFiedl.value;

    if (userEmail === 'shontan@baap.com' && userPassword === 'secret') {
        alert('log in');
    }
    else {
        alert('invalid user');
    }
})