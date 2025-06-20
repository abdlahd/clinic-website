function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('appointmentForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('👍 Thank you! Your appointment request has been received.');
  e.target.reset();
});

