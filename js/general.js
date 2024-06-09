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

document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('overlay').classList.toggle('open');
    if (this.classList.contains('active'))
        disableScrolling();
    else
        enableScrolling();
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
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}
function enableScrolling(){
    window.onscroll=function(){};
}