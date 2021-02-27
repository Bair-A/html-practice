"use strict";
const headerBurger = document.querySelector(".header__burger")

headerBurger.addEventListener("click", () => {
    
    headerBurger.classList.toggle("header__burger--active");
    document.querySelector("body").classList.toggle("body--burger-active");   
    document.querySelector(".header__menu").classList.toggle("header__menu--active");
})


