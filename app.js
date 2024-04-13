const navButton = document.querySelector('.nav-button');
const navLinks = document.querySelectorAll('a');

navButton.addEventListener('click', () => {
  navLinks.forEach(link => link.classList.toggle('show'));
});

.show {
  display: block;
}
