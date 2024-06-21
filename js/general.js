/*const hamburger = document.querySelector(".hamburger");
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
});*/

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');
    const pageBottom = document.getElementById('page_bottom');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                checkIntersection();
                /*} else {
                    navbar.style.backgroundColor = "#333"; // Reset or apply your default color
                    console.log("Navbar left page bottom");*/
            }
        });
    }, {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0 // Trigger when at least 10% of the page bottom is visible
    });

    observer.observe(pageBottom); // Observe the page bottom element

    // Also check intersection on scroll to handle continuous checks
    window.addEventListener('scroll', checkIntersection);
    window.addEventListener('resize', checkIntersection); // Optional: Handle resize events to ensure correct detection
});

document.querySelector('.hamburger').addEventListener('click', function() {
    //const navBarColor = document.getElementById('navbar').style.backgroundColor;
    this.classList.toggle('active');
    document.getElementById('overlay').classList.toggle('open');
    //console.log(navBarColor);
    if (this.classList.contains('active')) {
        //console.log(document.getElementById('navbar').style.backgroundColor);
        disableScrolling();
        document.getElementsByTagName('body')[0].style.overflow = 'none';
        document.getElementById('navbar').style.removeProperty("background-color");
    }
    else {
        enableScrolling();
        //console.log("ELSE:", navBarColor);
        if (checkIntersection()){
            document.getElementById('navbar').style.backgroundColor = "rgba(120, 41, 95, 0.8)";
        }
        //console.log(document.getElementById('navbar').style.backgroundColor);
    }
});

/*document.getElementById('empty').addEventListener('click', function() {
    this.classList.remove('empty');
    document.querySelector(".popup").style.display = "none";
    enableScrolling();
});*/

function exitGame() {
    if (document.getElementById("empty").classList.contains("empty")) {
        document.getElementById("empty").classList.remove('empty');
        document.querySelector(".popup").style.display = "none";
        enableScrolling();
    }
}
function disableScrolling(){
    //var x=window.scrollX;
    //var y=window.scrollY;
    //window.onscroll=function(){window.scrollTo(x, y);};
    //window.scrollTo(0,0);
    document.getElementsByTagName('body')[0].classList.add("freeze");
}
function enableScrolling(){
    //window.onscroll=function(){};
    document.getElementsByTagName('body')[0].classList.remove("freeze");
}
function checkIntersection() {
    const navbar = document.getElementById('navbar');
    const pageBottom = document.getElementById('page_bottom');
    const rect1 = navbar.getBoundingClientRect();
    const rect2 = pageBottom.getBoundingClientRect();

    const navbarHeight = rect1.height;
    const intersectionHeight = Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top);

    if (intersectionHeight >= navbarHeight * 0.2) { //here we define the height of the intersection
        navbar.style.backgroundColor = "rgba(120, 41, 95, 0.8)";//"#78295f";
        //console.log("Navbar is 50% or more on page bottom");
    } else {
        //navbar.style.backgroundColor = "#333"; // Reset or apply your default color
        navbar.style.removeProperty("background-color");
        //console.log("Navbar is less than 50% on page bottom");
    }
}
