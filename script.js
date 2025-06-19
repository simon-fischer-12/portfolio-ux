document.addEventListener('DOMContentLoaded', function() {
  // Add is-loaded class to all images
  document.querySelectorAll('img').forEach(img => {
    img.classList.add('is-loaded');
  });
  // Add is-loaded class to project header
  document.querySelector('.project-header')?.classList.add('is-loaded');
  // Add is-loaded class to thumbnail elements
  document.querySelectorAll('.thumbnail-home, .thumbnail-home-dark').forEach(thumbnail => {
    thumbnail.classList.add('is-loaded');
  });
}); 