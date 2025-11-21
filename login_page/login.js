//acess the login button
const loginBtn = document.getElementById('loginbtn');
//adding event listener to the login button
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //accessing the input elements
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    //validing the input
    if (!username || !password) {
        alert("please fill all the fields");
        return;
    }
    //cheacking user data
    const user = JSON.parse(localStorage.getItem('user'));

    if (user.username === username && user.password === password) {
        alert("login successfull");
        window.location.href = "../dashbord_page/dashbord.html";
    } else {
        alert("invalid username or password");
    }

});