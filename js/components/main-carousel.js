let pixels = 0;
const btnRight = document.querySelector(".button-arrow.-right");
const btnLeft = document.querySelector(".button-arrow.-left");
const items = document.querySelector(".items");
const elements = document.querySelector(".elements");

let interval;
btnRight.addEventListener('click', () => {carouselEvent(10)});
btnLeft.addEventListener('click', () => {carouselEvent(-10)});

function carouselEvent(n) {
    // clearInterval(interval);
    // interval = setInterval(() => translate(n), 1000);
    translate(n);
}

function translate(n) {
    pixels += n;
    items.style = `transform: translateX(${pixels}px)`;
}