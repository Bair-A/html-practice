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

        weDoText[index].classList.toggle("we-do__text-wrapper--active");       
    })
})

                                                            //we-do-slider
const sliderLine = document.querySelector(".we-do__slider-line");
const leftArrow = document.querySelector(".we-do__left-arrow");
const rightArrow = document.querySelector(".we-do__right-arrow");
const sliderItems = document.querySelectorAll(".we-do__slider-item");
let width;
let count = 0;

function init() {
    width = document.querySelector(".we-do__slider-window").offsetWidth;
    sliderLine.style.width = width*sliderItems.length + "px";
    sliderItems.forEach(item => {
        item.style.width = width + "px";  
        item.style.height = "auto";
    })
}
function rollSlider() {
    sliderLine.style.transform = `translate(-${count * width}px)`;
    console.log(sliderLine.style.transform)
}

window.addEventListener("resize", init);
init();

rightArrow.addEventListener("click", () => {
    count++;
    if(count >= sliderItems.length) {
        count = 0; 
    }
    rollSlider();
    console.log("rightArrow")
})

leftArrow.addEventListener("click", () => {
    count--;
    if(count < 0) {
        count = sliderItems.length - 1; 
    }
    rollSlider();
    console.log("leftArrow");
})


                                                            // slider
const singleSliderLine = document.querySelector(".slider__line");
const singleLeftArrow = document.querySelector(".arrow__left");
const singleRightArrow = document.querySelector(".arrow__right");
const singleSliderItems = document.querySelectorAll(".slider__item");
let singleWidth;
let singleCount = 0;

function singleInit() {
    singleWidth = document.querySelector(".slider__window").offsetWidth;
    singleSliderLine.style.width = singleWidth*singleSliderItems.length + "px";
    singleSliderItems.forEach(item => {
        item.style.width = singleWidth + "px";  
        item.style.height = "auto";
    })
}
function singleRollSlider() {
    singleSliderLine.style.transform = `translate(-${singleCount * singleWidth}px)`;
    console.log(singleSliderLine.style.transform)
}

window.addEventListener("resize", singleInit);
singleInit();

singleRightArrow.addEventListener("click", () => {
    singleCount++;
    if(singleCount >= singleSliderItems.length) {
        singleCount = 0; 
    }
    singleRollSlider();
    console.log("rightArrow")
})

singleLeftArrow.addEventListener("click", () => {
    singleCount--;
    if(singleCount < 0) {
        singleCount = singleSliderItems.length - 1; 
    }
    singleRollSlider();
    console.log("leftArrow");
})