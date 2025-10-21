const signupForm = document.querySelector('form');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if(!name || !email || !password || !confirmPassword) {
        alert('Please fill all fields!');
        return;
    }

    if(password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }else {
        const userdata = {name, email, password};
        localStorage.setItem('userdata', JSON.stringify(userdata));

        alert('Signup successful! Welcome, ' + name + '!');
        window.location.href = 'login.html';
    }
});

