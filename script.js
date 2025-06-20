function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('appointmentForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks! We received your booking request.');
  e.target.reset();
});
