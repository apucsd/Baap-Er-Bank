document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Enter valid Email and Password')
    }


})