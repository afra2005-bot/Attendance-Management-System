// DOM Elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');

// Show Registration Form
showRegisterLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

// Show Login Form
showLoginLink.addEventListener('click', (e) => {
  e.preventDefault();
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
});

// Login Form Submission
document.getElementById('login').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  // Add your login logic here (e.g., Firebase authentication)
  console.log('Login:', email, password);
  alert('Login functionality to be implemented.');
});

// Registration Form Submission
document.getElementById('register').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  // Add your registration logic here (e.g., Firebase authentication)
  console.log('Register:', name, email, password);
  alert('Registration functionality to be implemented.');
});