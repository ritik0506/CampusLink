// Login Button
document.querySelector('.login-btn').addEventListener('click', () => {
  alert('Redirecting to login page...');
});

// Join Us Button
document.getElementById('joinBtn').addEventListener('click', () => {
  alert('Thanks for joining! Registration will open soon.');
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});