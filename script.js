function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');

  if (menu.classList.contains("show")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

let currentSlide = 0;

function moveSlide(direction) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track img');
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;

  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
