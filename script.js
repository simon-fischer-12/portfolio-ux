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



class FooterMain extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
      <footer id="bottom" class="footer-main">
        <hr class="footer-divider">

        <div class="footer-text">
        
          <h4 class="H4-regular footer-copyright">Copyright 2025</h4>   
  
          <div class="contact">
                <h3 class="H3-regular">szymon.fischer@gmail.com</h3>
                <h3 class="H3-regular hover-color"><a href="https://www.linkedin.com/in/szymonfischer/" target="_blank">LinkedIn</a></h3>
                <h3 class="H3-regular hover-color"><a href="https://www.behance.net/s-fischer" target="_blank">Behance</a></h3>
          </div>
          
      </footer>
    `;
  }
}

customElements.define('footer-main', FooterMain);

