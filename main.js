var menuBtn = document.getElementById("menu-btn")
var navLinks = document.getElementById("nav-links")
var menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    var isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
})


var scrollRevelOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

// header container
ScrollReveal().reveal(".header_container h1", {
    ...scrollRevelOption,
})

ScrollReveal().reveal(".header_container p", {
    ...scrollRevelOption,
    delay: 500,
})

ScrollReveal().reveal(".header_container form", {
    ...scrollRevelOption,
    delay: 1000,
})

ScrollReveal().reveal(".header_container a", {
    ...scrollRevelOption,
    delay: 1500,
})

var swiper = new Swiper(".swiper", {
    loop:true,
    pagination:{
        el: ".swiper-pagination",
    },
})