// Animasi Scroll Fade In
const fadeElements = document.querySelectorAll('.fade-in');

function showElements() {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 100) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showElements);
showElements();

// Form Submit Alert
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Pesan berhasil dikirim!');
  contactForm.reset();
});
