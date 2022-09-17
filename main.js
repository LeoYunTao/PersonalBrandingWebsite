// let nav = document.querySelector("nav .navbar-nav");

// nav.addEventListener("click", event => {
//     nav.querySelector(".active").className = "nav-link";
//     event.target.className += " active";
// });

// //TODO make the script detect the section automatically then change the class name

let homeActive = "";
let projectActive = "";

if (window.location.pathname == "/") {
    homeActive = "active";
} else {
    projectActive = "active"
}

let navigationUI = `
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div class="container">
          <a class="navbar-brand" href="/"><img src="img/profile.jfif" class="rounded-circle" width="52" height="52" alt="Profile Picture"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
                <a class="nav-link ${homeActive}" aria-current="page" href="/">Home</a>
                <div class="dropdown">
                    <a class="nav-link ${projectActive} href="#" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Projects<img src="img/expand_more_icon.svg" width="16"></a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="mobile_app_projects.html">Mobile App</a></li>
                        <li><a class="dropdown-item" href="web_projects.html">Web</a></li>
                    </ul>
                </div>
                <a class="nav-link" href="mailto:leoyuntao@gmail.com">Contact</a>
            </div>
            <div class="d-inline-flex">
                <a href="https://docs.google.com/document/d/1yiiTevzrBBMJihcTKcciCfTdzn8eRj-5YBI-KDP4gzM/export?format=pdf" class="me-3" target="_blank" 
                data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Download Resume" >
                    <img src="img/resume.png" height="32" alt="download icon">
                </a>
                <a href="https://www.linkedin.com/in/leoyuntao/" target="_blank"><img src="img/LI-In-Bug 1.svg" alt="linkedin"></a>
            </div>
          </div>
        </div>
    </nav>
`;

// Insert navigation bar
document.body.innerHTML = navigationUI + document.body.innerHTML;

// Enable tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
