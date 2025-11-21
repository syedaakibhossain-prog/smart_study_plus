//accessing the  button elements
const signupBtn = document.getElementById('signupbtn');

//adding event listener to the button
signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    /**
     * acessing all the elements
     */
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const conformpass = document.getElementById('conformpassword').value;
    //validating the input
    if (!fullname || !email || !username || !password || !conformpass) {
        alert("please fill all the fields");
        return;
    }
    //validating the password
    if (password !== conformpass) {
        alert("password does not match");
        return;
    }
    //if all the conditions are met

    else {
        alert("signup succesfull");
        const user = {
            fullname,
            email,
            username,
            password,
        }
        /**
         * storing the user data in local storage
         * converting the user data into json string
         * and redirecting to login page
         */
        localStorage.setItem('user', JSON.stringify(user));

        window.location.href = "../login_page/login.html";
    }

});