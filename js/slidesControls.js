let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function showSlides(n) {
  console.log(n);
  let slides = document.getElementsByClassName("frame");
  
  if(n > slides.length - 1) {
    slideIndex = 0;
  }
  if(n < 0) {
    slideIndex = slides.length - 1;
  }
  
  for(let i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" -active", "");
  }

  slides[slideIndex].className += " -active";
}