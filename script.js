const form = document.getElementById('registration-form');
const feedBackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', async(event) => {
    event.preventDefault();
});

const userInput = document.getElementById('username').value.trim();
const emailInput = document.getElementById('email').value.trim();
const passwordInput = document.getElementById('password').value.trim();

let isValid = true;
let messages = [];

if (userInput.length < 3) {
    isValid = false;
    messages.push('Username must be at least 3 characters long.');
}

if (!/\S+@\S+\.\S+/.test(emailInput)) {
    isValid = false;
    messages.push('Please enter a valid email address.');
}

if (passwordInput.length < 8) {
    isValid = false;
    messages.push('Password must be at least 6 characters long.');
}

feedBackDiv.style.display = 'block';

if (!isValid) {
    feedBackDiv.textContent = "Regustration Successful";
    feedBackDiv.style.color = '#28a745';
}else if (isValid) {
    feedBackDiv.textContent = messages.join('<br>');
    feedBackDiv.style.color = '#dc3545';
}

