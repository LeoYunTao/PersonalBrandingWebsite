let nav = document.querySelector("nav .navbar-nav");

nav.addEventListener("click", event => {
    nav.querySelector(".active").className = "nav-link";
    event.target.className += " active";
});

//TODO make the script detect the section automatically then change the class name
