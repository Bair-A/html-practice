"use strict";
document.querySelector(".header__burger").addEventListener("click", () => {
    document.querySelector(".header__burger").classList.toggle("header__burger--active");
    document.querySelector("body").classList.toggle("body--burger-active");   
    document.querySelector(".header__menu").classList.toggle("header__menu--active");
})
