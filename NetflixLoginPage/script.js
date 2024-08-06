let signIn = document.querySelector('.page-sign button ');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let errorMessage = document.querySelector('.error-message');
let errorMessage2 = document.querySelector('.error-message2');

signIn.addEventListener('click', function(e) {
    e.preventDefault();

    let email = emailInput.value;
    let password = passwordInput.value;

    if (email === '' || password === '') {
return;
    } else {
        if (password === 'correctPassword') {
            errorMessage.textContent = '';
            window.location.href = '/homePage/index.html';
        } else {
            errorMessage.textContent = 'Incorrect password. Please try again.';
            // window.location.href = '/ForgetPassword/index.html';
        }
    }
});

emailInput.addEventListener('input', function() {
    errorMessage.textContent = '';
});

passwordInput.addEventListener('input', function() {
    errorMessage2.textContent = '';
});
