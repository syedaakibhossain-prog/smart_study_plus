const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill all fields!');
        return;
    }
    // Retrieve stored user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userdata'));
    if (!storedUserData) {
        alert('No user found. Please sign up first.');
        return;
    }
    if (email === storedUserData.email && password === storedUserData.password) {
        alert('Login successful! Welcome back, ' + storedUserData.name + '!');
        window.location.href = 'dashbord.html'; // Redirect to homepage or dashboard
    } else {
        alert('Invalid email or password!');
    } 
});
