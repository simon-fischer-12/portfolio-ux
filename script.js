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



// COMPONENTS

// MAIN HEADER WITH NAV
class HeaderNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Get attributes (with fallback defaults)
    const dotColor = this.getAttribute("dot-color") || "var(--ridemetric)";
    const navText = this.getAttribute("nav-text") || "Projekty";

    this.innerHTML = `
      <header class="header-main">
        <a href="index.html">
          <h2 class="H3-regular">
            SZYMON FISCHER<span style="color: ${dotColor};">.</span>
          </h2>
        </a>
        <nav class="nav-main">
          <a href="index.html">
            <h2 class="H3-regular hover-color nav-desktop">${navText}</h2>
            <img src="assets/icons/close.svg" alt="Close" class="nav-mobile" style="opacity: 0.7;">
          </a>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-nav", HeaderNav);


// SECTION HEADER
class XSectionHeader extends HTMLElement {
  static get observedAttributes() { return ['title', 'text']; }

  connectedCallback() {
    if (!this._initialized) {
      this.innerHTML = `
        <section class="section-header">
          <div class="H3 H3-bold"></div>
          <p class="Body-L Body-L-regular"></p>
        </section>
      `;
      this._titleEl = this.querySelector('.H3-bold');
      this._textEl = this.querySelector('p');
      this._apply();
      this._initialized = true;
    }
  }

  attributeChangedCallback() {
    this._apply();
  }

  get title() { return this.getAttribute('title') ?? ''; }
  set title(v) { this.setAttribute('title', v); }

  get text() { return this.getAttribute('text') ?? ''; }
  set text(v) { this.setAttribute('text', v); }

  _apply() {
    // Title
    if (this._titleEl) {
      if (this.title.trim() === '') {
        this._titleEl.style.display = 'none';
      } else {
        this._titleEl.style.display = '';
        this._titleEl.textContent = this.title;
      }
    }

    // Text
    if (this._textEl) {
      if (this.text.trim() === '') {
        this._textEl.style.display = 'none';
      } else {
        this._textEl.style.display = '';
        this._textEl.textContent = this.text;
      }
    }
  }
}

customElements.define('x-section-header', XSectionHeader);


// FOOTER
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

