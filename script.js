document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.video-bg');
  
  // Fade in the video smoothly once it can play through
  video.addEventListener('canplaythrough', () => {
    video.style.opacity = '0.2'; // Adjust this value if you want it brighter/dimmer
  });

  // Smooth scroll behavior for nav links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});