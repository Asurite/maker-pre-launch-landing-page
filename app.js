function validateEmail() {
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';
    errorMessage.classList.remove('error');

    if (!emailInput.value.trim()) {
        errorMessage.textContent = 'Oops! Please add your email';
        errorMessage.classList.add('error');
    }
        
    else if (!isValidEmail(emailInput.value)) {
        errorMessage.textContent = 'Oops! That doesn’t look like an email address';
        errorMessage.classList.add('error');
    }

    else {

        alert('Form submitted successfully!');
    }
}

// Simple email format validation function
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
