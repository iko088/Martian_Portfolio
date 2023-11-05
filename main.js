// Navigation bar effects on scroll 
window.addEventListener("scroll", function(){
    const header =  document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Services section - modal 
const serviceModals = document.querySelectorAll(".service-modal")
const LearnmoreBtns = document.querySelectorAll(".learn-more-btn")
const modalCloseBtns = document.querySelectorAll(".modal-close-btn")

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

LearnmoreBtns.forEach((LearnmoreBtns, i) =>{
    LearnmoreBtns.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtns) =>{
    modalCloseBtns.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active")
        });
    });
});


// Portfolio section - modal 
const portfolioModals = document.querySelectorAll(".portfolio-model")
const imgCards = document.querySelectorAll(".img-card")
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn")

var portfoliomodal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) =>{
    imgCard.addEventListener("click", () => {
        portfoliomodal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) =>{
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active")
        });
    });
});


// Our clients - swiper 
var swiper = new Swiper(".content-swipper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "lighe";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon" ;

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}



// Scroll to top button 
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500)
})

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Navigation menu item actove on page scroll 


// Responsive navigation menu toggle 
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItems) => {
    navItems.addEventListener("click", () => {
    navigation.classList.remove("active");
    })
})

// scroll reveal animation 


// Common reveal options to create reveal animation 
ScrollReveal({
     reset: true,
     distance: '60px',
     duration: 2500,
     delay: 100
    });

// Target elements, and specify options to creaate reveal animation 

ScrollReveal().reveal('.home .info h2, .section-title-01 , .section-title-02', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.home-img, .about-img', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.about .professional-list li', {delay: 500, origin: 'right', interval: 200});
ScrollReveal().reveal('.skills-description, .service-description, .contact-card, .client-swiper, .contact-left h2', {delay: 700, origin: 'left'});
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', {delay: 800, origin: 'bottom', interval: 200});
ScrollReveal().reveal('footer .group', {delay: 500, origin: 'top', interval: 200});