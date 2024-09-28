
const slides = document.querySelectorAll(".pic-slider-main");

let currentSlide = 0; 
const slideInterval = 3000; 

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("visible"); 
  });
  

  slides[index].classList.add("visible");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; 
  showSlide(currentSlide); 
}


showSlide(currentSlide);

setInterval(nextSlide, slideInterval);
