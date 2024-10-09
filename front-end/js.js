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
    document.querySelector(".header-container").style.background =
      "rgba(255, 255, 255, .17)"; /* #8c7f85, #4f494c */
  };

  link.onmouseout = function () {
    document.querySelector(".header-container").style.background =
      "transparent";
  };
});

// modal function na 2

const images = [
  "https://crissyannpalacio.wordpress.com/wp-content/uploads/2017/02/img_3397.jpg",
  "https://triptheislands.com/wp-content/uploads/2016/09/Sapot.jpg",
  "https://outoftownblog.com/wp-content/uploads/2021/12/Sunset-at-Luljettas-Hanging-Gardens-Spa-photo-via-FB-Page.jpeg",
];

let currentImage = 0;

function openModal(index) {
  currentImage = index;
  document.getElementById("modalImage").src = images[currentImage];
  document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("modalImage").src = images[currentImage];
}

// animated bounce

