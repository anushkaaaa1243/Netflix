let emailButton = document.querySelector('button'); 
let emailInput = document.querySelector('input[type=email]'); 
let emailRadio = document.querySelector('input[value=email]'); 
let smsRadio = document.querySelector('input[value=Message]'); 
let messageParagraph = document.querySelector('#page2 p'); 

emailButton.addEventListener('click', function() {
    let emailAddress = emailInput.value.trim(); 

    if (emailAddress === '') {
        messageParagraph.textContent = 'Please enter a valid email address.';
    } else if (!emailAddress.includes('@')) {
        messageParagraph.textContent = 'Please enter a valid email address with @ symbol.';
    } else {
        messageParagraph.textContent = '';
    }
});

emailRadio.addEventListener('click', function(e) {
    messageParagraph.textContent = 'We will send an email to reset your password.';
});

smsRadio.addEventListener('click', function(e) {
    messageParagraph.textContent = 'We will send a message to reset your password.';
});
