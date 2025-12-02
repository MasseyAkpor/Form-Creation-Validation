document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');

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

feedbackDiv.style.display = 'block';

if (!isValid) {
    feedbackDiv.textContent = "Registration successful";
    feedbackDiv.style.color = '#28a745';
}else if (isValid) {
    feedbackDiv.innerHTML = messages.join('<br>');
    feedbackDiv.style.color = '#dc3545';
}
})





