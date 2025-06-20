function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({behavior:'smooth'});
}

document.getElementById('appointmentForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('✅ Thank you! Your appointment is booked.');
  e.target.reset();
});

window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
});

