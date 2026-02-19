/* ----- NAVIGATION MENU ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["Indonesia", "Pancasila", "Bhinneka Tunggal Ika"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

/* ----- SCROLL REVEAL ANIMATION ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.featured-text', {});
sr.reveal('.image-gallery', { delay: 200 });
sr.reveal('.project-box', { interval: 200 });
sr.reveal('.top-header', {});

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});

srLeft.reveal('.SILA3-container', { delay: 100 });
srLeft.reveal('.SILA-4-content', { delay: 100 });
