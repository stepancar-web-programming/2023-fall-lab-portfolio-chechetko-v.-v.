(function () {
  const carouselItems = document.querySelectorAll(".portfolio_carousel_item");
  const prevButton = document.querySelector(".slider-prev");
  const nextButton = document.querySelector(".slider-next");
  let currentSlide = 0;

  function showSlide(n) {
    carouselItems[currentSlide].style.display = "none";
    currentSlide = (n + carouselItems.length) % carouselItems.length;
    carouselItems[currentSlide].style.display = "block";
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function updateSlide() {
    showSlide(currentSlide);
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  window.updateSlide = updateSlide;

  showSlide(currentSlide);
})();

