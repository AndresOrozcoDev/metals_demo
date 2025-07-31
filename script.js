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

let currentStep = 1;

document.querySelectorAll('.card.clickable').forEach(card => {
  card.addEventListener('click', () => {
    goToNextStep();
  });
});

document.querySelectorAll('.next-step').forEach(button => {
  button.addEventListener('click', () => {
    goToNextStep();
  });
});

document.querySelectorAll('.prev-step').forEach(button => {
  button.addEventListener('click', () => {
    goToPrevStep();
  });
});

function goToPrevStep() {
  const current = document.querySelector(`.form-step[data-step="${currentStep}"]`);
  if (current) current.classList.add('hidden');
  currentStep--;
  const prev = document.querySelector(`.form-step[data-step="${currentStep}"]`);
  if (prev) prev.classList.remove('hidden');
}

function goToNextStep() {
  const current = document.querySelector(`.form-step[data-step="${currentStep}"]`);
  if (current) current.classList.add('hidden');
  currentStep++;
  const next = document.querySelector(`.form-step[data-step="${currentStep}"]`);
  if (next) next.classList.remove('hidden');
}
