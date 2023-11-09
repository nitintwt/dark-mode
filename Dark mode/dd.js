const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');

  const moonIcon = document.getElementById('moonIcon');
  const sunIcon = document.getElementById('sunIcon');
  moonIcon.style.display = moonIcon.style.display === 'none' ? 'inline' : 'none';
  sunIcon.style.display = sunIcon.style.display === 'none' ? 'inline' : 'none';
});
