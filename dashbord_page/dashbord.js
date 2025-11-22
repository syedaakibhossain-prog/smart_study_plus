//accessing all the element
const sidebarItem = document.querySelectorAll('.sidebar li');
const mainContent = document.querySelector('.main');
const grid = document.querySelector('.grid');
const title = document.querySelector('.title');

//sidebar item click event
sidebarItem.forEach(item => {

    item.addEventListener('click', () => {

        //remove active class from all the item
        sidebarItem.forEach(i => i.classList.remove("active"));

        //add active class to the clicked item
        item.classList.add("active");

        //change the main content
        title.textContent = `OPENING ${item.textContent.toUpperCase()}...`;

        // load content dynamically
        loadSection(item.textContent);
    });
});

function loadSection(scetion) {
    grid.innerHTML = ""; // empty the grid

    switch (scetion.toLowerCase()) {
        case "dashboard":
            showDashboard();
            break;

        case "notes":
            grid.innerHTML = `<div class="card holo">
                <h3>AI Notes</h3>
                <p>Generate smart notes instantly.</p>
                <button class="btn" onclick="openNotes()">OPEN</button>
                </div>
                `;
            break;

        case "quizzes":
            grid.innerHTML = `<div class="card holo">
                <h3>AI Quizzes</h3>
                <p>Test your knowledge with AI-powered quizzes.</p>
                <button class="btn">OPEN</button>
                </div>
                `;
            break;
        case "progress":
            grid.innerHTML = `<div class="card holo">
                <h3>Progress Graph</h3>
                <p>Visualize your learning journey.</p>
                <button class="btn">VIEW</button>
                </div>
                `;
            break;
        case "settings":
            grid.innerHTML = `<div class="card holo">
                <h3>Study Analysis</h3>
                <p>Track strengths & weaknesses.</p>
                <button class="btn">ANALYZE</button>
                </div>
                `;
            break;
    }
}

function showDashboard() {
    grid.innerHTML = `<div class="card holo">
                <h3>AI Notes</h3>
                <p>Generate smart notes instantly.</p>
                <button class="btn" onclick="openNotes()">OPEN</button>
            </div>
            <div class="card holo">
                <h3>AI Quizzes</h3>
                <p>Test your knowledge with AI-powered quizzes.</p>
                <button class="btn" >OPEN</button>
            </div>
            <div class="card holo">
                <h3>Progress Graph</h3>
                <p>Visualize your learning journey.</p>
                <button class="btn">VIEW</button>
            </div>
            <div class="card holo">
                <h3>Study Analysis</h3>
                <p>Track strengths & weaknesses.</p>
                <button class="btn">ANALYZE</button>
            </div>
            `;
}

window.openNotes = function () {
    window.location.href = "../note_page/note.html";
}
