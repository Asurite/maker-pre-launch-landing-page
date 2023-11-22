function validateEmail() {
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('error-message');

    // Reset previous error message
    errorMessage.textContent = '';
    errorMessage.classList.remove('error');

    // Check if the email field is empty
    if (!emailInput.value.trim()) {
        errorMessage.textContent = 'Oops! Please add your email';
        errorMessage.classList.add('error');
    }
    // Check if the email is not formatted correctly
    else if (!isValidEmail(emailInput.value)) {
        errorMessage.textContent = 'Oops! That doesn’t look like an email address';
        errorMessage.classList.add('error');
    }
    // If the email is valid, you can submit the form or perform other actions
    else {
        // Your logic for form submission or other actions here
        alert('Form submitted successfully!');
    }
}

// Simple email format validation function
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}