let pixels = 0;
const btnRight = document.querySelector(".button-arrow.-right");
const btnLeft = document.querySelector(".button-arrow.-left");
const items = document.querySelector(".items");
const elements = document.querySelector(".elements");
btnRight.addEventListener('click', () => {translate(10)});
btnLeft.addEventListener('click', () => {translate(-10)});

function translate(n) {
    pixels += n;
    items.style = `transform: translateX(${pixels}px)`;
}
