// picture slider or devs called hero

const slides = document.querySelectorAll(".pic-slider-main");

let currentSlide = 0;
const slideInterval = 3000;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("visible");
  });
  if (slides[index]) {
    slides[index].classList.add("visible");
  } else {
    console.error("Missyou", index);
  }
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

// modal function na 2 hehehe

const images = [
  "https://crissyannpalacio.wordpress.com/wp-content/uploads/2017/02/img_3397.jpg",
  "https://triptheislands.com/wp-content/uploads/2016/09/Sapot.jpg",
  "https://outoftownblog.com/wp-content/uploads/2021/12/Sunset-at-Luljettas-Hanging-Gardens-Spa-photo-via-FB-Page.jpeg",
];

let currentImage = 0;

function openModal(index) {
  currentImage = index;
  const modalImage = document.getElementById("modalImage");

  if (modalImage) {
    modalImage.src = images[currentImage];
    document.getElementById("imageModal").style.display = "flex";
  } else {
    console.error("Cannot find modal image element.");
  }

  localStorage.setItem("modalOpen", "true");
  localStorage.setItem("modalIndex", index);
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
  } else {
    console.error("Failed to close the modal.");
  }

  localStorage.removeItem("modalOpen");
  localStorage.removeItem("modalIndex");
}

// para lang 2 sa ano kapag ni refresh hindi mawala yung modal
// tapos yung mga localStorage kaparehas lang siya kapag nag store ka ng token
// getchi?

window.onload = function () {
  const modalOpen = localStorage.getItem("modalOpen");
  const modalIndex = localStorage.getItem("modalIndex");

  if (modalOpen === "true" && modalIndex !== null) {
    openModal(parseInt(modalIndex));
  }
};

function nextImage() {
  if (currentImage < images.length - 1) {
    currentImage += 1;
  } else {
    currentImage = 0;
  }

  openModal(currentImage);
}

function prevImage() {
  if (currentImage > 0) {
    currentImage -= 1;
  } else {
    currentImage = images.length - 1;
  }

  openModal(currentImage);
}

//

document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll('.nav-link')

  const activeLink = localStorage.getItem('activeNavItem');

  function removeActive() {
    navItems.forEach(item => {
      item.parentElement.classList.remove('active');
    });
  }

  function addActive() {
    if( activeLink) {
      removeActive();
      const activeELement = document.querySelector(`a[href="${activeLink}"]`);
      if(activeELement) {
        activeELement.parentElement.classList.add("active");
      }
    }
  }

  addActive();

  navItems.forEach(item => {
    item.addEventListener('click', function() {
      localStorage.setItem('activeLink')
    })
  })

})


