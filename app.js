const togglebtn = document.getElementById("toggle");
const body = document.body;
const icon = document.querySelector("img");

// Load saved mode from local storage
if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark mode");
    icon.src ="dark theme icon/sun.png";
}


// Toggle dark mode on click
togglebtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Change icon depending on mode
    if (body.classList.contains("dark-mode")) {
        icon.src = "dark theme icon/sun.png"; // switch to sun icon
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = "dark theme icon/moon.png"; // switch back to moon icon
        localStorage.setItem("theme", "light");
    }
});
