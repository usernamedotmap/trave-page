// picture slider or devs called hero

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
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(nextSlide, slideInterval);

// changing color of the nav background

const links = document.querySelectorAll("nav ul li a");
 
links.forEach(function (link) {
  link.onmouseover = function () {
    document.querySelector(".header-container").style.background = "rgba(255, 255, 255, .17)"; /* #8c7f85, #4f494c */
  };

  link.onmouseout = function () {
    document.querySelector(".header-container").style.background = "transparent";
  };
});
