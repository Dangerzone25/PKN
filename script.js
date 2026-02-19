/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
   var menuBtn = document.getElementById("myNavMenu");

   if(menuBtn.className === "nav-menu"){
     menuBtn.className += " responsive";
   } else {
     menuBtn.className = "nav-menu";
   }
 }

 window.addEventListener('scroll', function() {
  const background = document.querySelector('.home-background::before'); 
  const offset = window.pageYOffset; 
  document.querySelector('.home-background').style.backgroundPositionY = offset * 0.5 + 'px';
});
 

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
 window.onscroll = function() {headerShadow()};

 function headerShadow() {
   const navHeader =document.getElementById("header");

   if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

     navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
     navHeader.style.height = "70px";
     navHeader.style.lineHeight = "70px";

   } else {

     navHeader.style.boxShadow = "none";
     navHeader.style.height = "90px";
     navHeader.style.lineHeight = "90px";

   }
 }


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
   strings : ["Tanahku","Bangsaku","Negeriku"],
   loop : true,
   typeSpeed : 100, 
   backSpeed : 80,
   backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
       origin: 'top',
       distance: '80px',
       duration: 2000,
       reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.scroll-btn',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- IMAGE -- */
sr.reveal('.gallery-item',{interval: 200})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* -- SILA KE - 1 -- */
sr.reveal('.container-SILA1',{delay: 100})
sr.reveal('.SILA-1',{delay: 100})

/* -- SILA KE - 4 -- */
sr.reveal('.SILA-4',{delay: 200})
sr.reveal('.SILA-4-TEXT',{delay: 300})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

const srLeft = ScrollReveal({
 origin: 'left',
 distance: '80px',
 duration: 2000,
 reset: true
})
/* -- SILA KE - 3 -- */
srLeft.reveal('.SILA3-container',{delay: 100})

const srRight = ScrollReveal({
 origin: 'right',
 distance: '80px',
 duration: 2000,
 reset: true
})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
 const scrollY = window.scrollY;

 sections.forEach(current =>{
   const sectionHeight = current.offsetHeight,
       sectionTop = current.offsetTop - 50,
     sectionId = current.getAttribute('id')

   if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

       document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

   }  else {

     document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

   }
 })
}

window.addEventListener('scroll', scrollActive)