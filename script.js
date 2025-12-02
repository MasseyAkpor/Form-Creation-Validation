document.addEventListener("DOMContentLoaded", function () {
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

if (userName.length < 3) {
    isValid = false;
    messages.push("Username must be at least 3 characters long.");
}

if (!email.includes("@") || !email.includes(".")) {
    isValid = false;
    messages.push("Please enter a valid email address.");
}

if (password.length < 8) {
    isValid = false;
    messages.push('Password must be at least 8 characters long.');
}

feedBackDiv.style.display = 'block';

if (!isValid) {
    feedBackDiv.textContent = "Regustration Successful";
    feedBackDiv.style.color = '#28a745';
}else if (isValid) {
    feedBackDiv.textContent = messages.join('<br>');
    feedBackDiv.style.color = '#dc3545';
}
})


