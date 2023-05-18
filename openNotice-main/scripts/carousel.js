const carouselContainer = document.querySelector(".carousel-container");
const carouselSlides = document.querySelector(".carousel-slides");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const slideWidth = carouselContainer.clientWidth;
let currentPosition = 0;

nextButton.addEventListener("click", () => {
  if (currentPosition > -(slideWidth * (carouselSlides.children.length - 1))) {
    currentPosition -= slideWidth;
    carouselSlides.style.transform = `translateX(${currentPosition}px)`;
  }
});

prevButton.addEventListener("click", () => {
  if (currentPosition < 0) {
    currentPosition += slideWidth;
    carouselSlides.style.transform = `translateX(${currentPosition}px)`;
  }
});
