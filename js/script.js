"use strict";

                                                            //header burger
const headerBurger = document.querySelector(".header__burger")

headerBurger.addEventListener("click", () => {

    headerBurger.classList.toggle("header__burger--active");

    document.querySelector("body").classList.toggle("body--burger-active");   
    document.querySelector(".header__menu").classList.toggle("header__menu--active");
})

                                                            //header slider
const headerSliderPage = document.querySelectorAll(".header__slider-page");
const hederSliderButton = document.querySelectorAll(".header__slider-item");

hederSliderButton.forEach((event, index) => {
    event.addEventListener("click", () => {
        document.querySelector(".header__slider-item--active").classList.remove("header__slider-item--active");
        event.classList.add("header__slider-item--active");

        document.querySelector(".header__slider-page--active").classList.remove("header__slider-page--active");
        headerSliderPage[index].classList.add("header__slider-page--active");
    })
})
    

                                                                //we-do
const weDoItem = document.querySelectorAll(".we-do__item");
const weDoText = document.querySelectorAll(".we-do__text-wrapper");

weDoItem.forEach((event, index) => {
    event.addEventListener("click", () => {
        event.classList.toggle("open");
        weDoText[index].classList.toggle('we-do__text-wrapper--active')
    })
})
