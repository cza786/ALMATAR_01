/* ==========================================================================
   ALMATAR PETROLEUM SERVICES - INTERACTIVE JAVASCRIPT
   Aramco-Inspired Header Carousel, Side Drawer & Collapsible Navigation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  initSideDrawer();
  initPageViewNavigation();
  initContactForm();
});

/* --- 1. DYNAMIC HERO CAROUSEL CONTROLLER (HOME SCREEN ONLY) --- */
let currentSlideIndex = 0;
let carouselTimer = null;
const SLIDE_DURATION = 6000; // 6 seconds per slide

function initHeroCarousel() {
  const carouselElem = document.getElementById('home-hero-carousel');
  if (!carouselElem) return;

  const slides = carouselElem.querySelectorAll('.hero-slide');
  const tabs = carouselElem.querySelectorAll('.hero-tab-item');
  const learnMoreBtns = carouselElem.querySelectorAll('.btn-learn-more');

  if (!slides.length || !tabs.length) return;

  function showSlide(index) {
    currentSlideIndex = index;
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    tabs.forEach((tab, i) => {
      const fill = tab.querySelector('.progress-fill');
      if (i === index) {
        tab.classList.add('active');
        if (fill) {
          fill.style.animation = 'none';
          fill.offsetHeight; // trigger reflow
          fill.style.animation = `heroProgress ${SLIDE_DURATION}ms linear forwards`;
        }
      } else {
        tab.classList.remove('active');
        if (fill) fill.style.animation = 'none';
      }
    });

    resetTimer();
  }

  function nextSlide() {
    let nextIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function resetTimer() {
    if (carouselTimer) clearInterval(carouselTimer);
    carouselTimer = setInterval(nextSlide, SLIDE_DURATION);
  }

  // Click on tab items
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      showSlide(i);
    });
  });

  // Click on "Learn More" buttons inside hero slides
  learnMoreBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = btn.getAttribute('data-target-page');
      if (targetPage) {
        switchPageView(targetPage);
      }
    });
  });

  // Start initial slide
  showSlide(0);
}

/* --- 2. SIDE DRAWER & COLLAPSIBLE ACCORDION CONTROLLER --- */
function initSideDrawer() {
  const toggleBtn = document.getElementById('drawer-toggle');
  const closeBtn = document.getElementById('drawer-close');
  const overlay = document.getElementById('side-drawer-overlay');
  const searchInput = document.getElementById('drawer-search-input');
  const drawerLinks = document.querySelectorAll('.drawer-nav-link');
  const servicesToggle = document.getElementById('drawer-services-toggle');
  const servicesSubContainer = document.getElementById('drawer-services-sub');
  const servicesArrow = document.getElementById('drawer-services-arrow');

  if (!toggleBtn || !overlay) return;

  function openDrawer() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeDrawer();
    }
  });

  // Collapsible Services Portfolio Accordion
  if (servicesToggle && servicesSubContainer) {
    servicesToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isVisible = servicesSubContainer.style.display !== 'none';
      if (isVisible) {
        servicesSubContainer.style.display = 'none';
        if (servicesArrow) servicesArrow.textContent = '›';
      } else {
        servicesSubContainer.style.display = 'block';
        if (servicesArrow) servicesArrow.textContent = '▾';
      }
    });
  }

  // Search filter inside drawer
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      drawerLinks.forEach((link) => {
        const text = link.textContent.toLowerCase();
        const parent = link.closest('.drawer-nav-item');
        if (text.includes(term)) {
          if (parent) parent.style.display = 'block';
        } else {
          if (parent) parent.style.display = 'none';
        }
      });
    });
  }
}

/* --- 3. PAGE VIEW SWITCHER & NAVIGATION --- */
function initPageViewNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .drawer-nav-link, .footer-link, [data-navigate], [data-page]');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetPage = link.getAttribute('data-page') || link.getAttribute('data-navigate');
      if (targetPage) {
        e.preventDefault();
        switchPageView(targetPage);

        // Close drawer if open
        const overlay = document.getElementById('side-drawer-overlay');
        if (overlay && overlay.classList.contains('open')) {
          overlay.classList.remove('open');
          document.body.style.overflow = '';
        }
      }
    });
  });
}

function switchPageView(pageId) {
  const views = document.querySelectorAll('.page-view');
  const navLinks = document.querySelectorAll('.nav-link');
  const drawerLinks = document.querySelectorAll('.drawer-nav-link');
  const heroCarousel = document.getElementById('home-hero-carousel');

  let targetFound = false;

  views.forEach((view) => {
    if (view.id === `page-${pageId}`) {
      view.classList.add('active');
      targetFound = true;
    } else {
      view.classList.remove('active');
    }
  });

  if (!targetFound) return;

  // Show dynamic hero slider ONLY on Home page view
  if (heroCarousel) {
    if (pageId === 'home') {
      heroCarousel.style.display = 'block';
    } else {
      heroCarousel.style.display = 'none';
    }
  }

  // Update active state in top header nav
  navLinks.forEach((link) => {
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Update active state in drawer nav
  drawerLinks.forEach((link) => {
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Scroll smoothly to top of content
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/* --- 4. CONTACT FORM HANDLER --- */
function initContactForm() {
  const form = document.getElementById('almatar-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting ALMATAR Integrated Oilfield & Projects Management. Our technical engineering team will review your inquiry and contact you shortly.');
    form.reset();
  });
}
