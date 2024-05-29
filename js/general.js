const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    // hamburger.classList.toggle("toggle");
});


function exitGame() {
    if (document.getElementById("empty").classList.contains("empty")) {
        document.getElementById("empty").classList.remove('empty');
        document.querySelector(".popup").style.display = "none";
    }
}

