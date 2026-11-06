/**
 * Color Theory — Master Presentation Engine (Lesson 5)
 */

document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const totalSlides = slides.length;
  let currentIndex = 0;

  // UI Elements
  const slideIndicator = document.getElementById('slideIndicator');
  const topSlideTitle = document.getElementById('topSlideTitle');
  const progressBar = document.getElementById('progressBar');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotPagination = document.getElementById('dotPagination');
  
  // Drawer Elements
  const drawerToggleBtn = document.getElementById('drawerToggleBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const slideDrawer = document.getElementById('slideDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerGrid = document.getElementById('drawerGrid');

  // Fullscreen Elements
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const fsIconExpand = document.getElementById('fsIconExpand');
  const fsIconCompress = document.getElementById('fsIconCompress');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');

  // 1. Build Navigation UI (Dots & Drawer Items)
  function buildNavigationUI() {
    slides.forEach((slide, idx) => {
      const title = slide.getAttribute('data-title') || `Slide ${idx + 1}`;

      // Create Pagination Dot
      const dot = document.createElement('button');
      dot.className = `dot-btn ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('title', `Go to Slide ${idx + 1}: ${title}`);
      dot.setAttribute('aria-label', `Slide ${idx + 1}`);
      dot.addEventListener('click', () => goToSlide(idx));
      dotPagination.appendChild(dot);

      // Create Drawer Item
      const drawerItem = document.createElement('div');
      drawerItem.className = `drawer-item ${idx === 0 ? 'active' : ''}`;
      drawerItem.innerHTML = `
        <span class="drawer-item-num">${String(idx + 1).padStart(2, '0')}</span>
        <span class="drawer-item-title">${title}</span>
      `;
      drawerItem.addEventListener('click', () => {
        goToSlide(idx);
        closeDrawer();
      });
      drawerGrid.appendChild(drawerItem);
    });
  }

  // 2. Slide Navigation Logic
  function goToSlide(newIndex) {
    if (newIndex < 0 || newIndex >= totalSlides || newIndex === currentIndex) return;

    const currentSlide = slides[currentIndex];
    const nextSlide = slides[newIndex];
    const direction = newIndex > currentIndex ? 'forward' : 'backward';

    slides.forEach((s, idx) => {
      s.classList.remove('active', 'exit-left');
      if (idx === currentIndex && direction === 'forward') {
        s.classList.add('exit-left');
      }
    });

    nextSlide.classList.add('active');
    currentIndex = newIndex;

    updateUI();
    updateURLHash();
  }

  function updateUI() {
    const currentSlide = slides[currentIndex];
    const title = currentSlide.getAttribute('data-title') || '';
    const slideNumber = currentIndex + 1;

    // Header updates
    if (slideIndicator) slideIndicator.textContent = `${String(slideNumber).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
    if (topSlideTitle) topSlideTitle.textContent = title;

    // Progress bar update
    if (progressBar) {
      const progressPercent = (slideNumber / totalSlides) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    // Prev / Next button states
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) {
      if (currentIndex === totalSlides - 1) {
        nextBtn.innerHTML = `<span>Take Quiz &rarr;</span>`;
      } else {
        nextBtn.innerHTML = `<span>Next Slide</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`;
      }
    }

    // Dot pagination update
    const dots = Array.from(dotPagination.querySelectorAll('.dot-btn'));
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });

    // Drawer items update
    const drawerItems = Array.from(drawerGrid.querySelectorAll('.drawer-item'));
    drawerItems.forEach((item, idx) => {
      item.classList.toggle('active', idx === currentIndex);
    });
  }

  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      goToSlide(currentIndex + 1);
    } else {
      window.location.href = 'quiz/index.html';
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  }

  // 3. Event Listeners for Controls
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    // Ignore keys if lightbox or modals are open
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      return;
    }

    const lessonModal = document.getElementById('lessonSelectorModal');
    if (lessonModal && lessonModal.classList.contains('open')) {
      if (e.key === 'Escape') lessonModal.classList.remove('open');
      return;
    }

    if (slideDrawer && slideDrawer.classList.contains('open')) {
      if (e.key === 'Escape') closeDrawer();
      return;
    }

    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key === 't' || e.key === 'T') {
      toggleDrawer();
    }
  });

  // 4. Slide Drawer Logic
  function openDrawer() {
    if (slideDrawer && drawerBackdrop) {
      slideDrawer.classList.add('open');
      drawerBackdrop.classList.add('active');
    }
  }

  function closeDrawer() {
    if (slideDrawer && drawerBackdrop) {
      slideDrawer.classList.remove('open');
      drawerBackdrop.classList.remove('active');
    }
  }

  function toggleDrawer() {
    if (slideDrawer && slideDrawer.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  if (drawerToggleBtn) drawerToggleBtn.addEventListener('click', toggleDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // 5. Fullscreen Logic
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      if (fsIconExpand) fsIconExpand.classList.add('hidden');
      if (fsIconCompress) fsIconCompress.classList.remove('hidden');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        if (fsIconExpand) fsIconExpand.classList.remove('hidden');
        if (fsIconCompress) fsIconCompress.classList.add('hidden');
      }
    }
  }

  if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);

  // 6. Lightbox Zoom Logic
  document.querySelectorAll('.media-frame').forEach(frame => {
    frame.addEventListener('click', () => {
      const zoomSrc = frame.getAttribute('data-zoom') || frame.querySelector('img')?.src;
      const caption = frame.closest('.slide-media-pane')?.querySelector('.media-caption')?.innerHTML || '';
      if (zoomSrc) {
        openLightbox(zoomSrc, caption);
      }
    });
  });

  function openLightbox(src, captionHtml) {
    if (!lightboxModal) return;
    lightboxImg.src = src;
    lightboxCaption.innerHTML = captionHtml;
    lightboxModal.classList.add('active');
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxImg.src = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  // 7. Interactive Checkpoints (Reveal Buttons)
  document.querySelectorAll('.reveal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const content = document.getElementById(targetId);
      if (content) {
        const isHidden = content.classList.contains('hidden');
        content.classList.toggle('hidden', !isHidden);
        btn.textContent = isHidden ? 'Hide Design Insight' : 'Reveal Design Insight';
      }
    });
  });

  // 8. Interactive Multi-Example Gallery Switcher
  document.querySelectorAll('.gallery-nav').forEach(nav => {
    const tabButtons = Array.from(nav.querySelectorAll('.gallery-tab-btn'));
    const mediaPane = nav.closest('.slide-media-pane');
    if (!mediaPane) return;

    const mediaFrame = mediaPane.querySelector('.media-frame');
    const slideImg = mediaPane.querySelector('.slide-img');
    const mediaCaption = mediaPane.querySelector('.media-caption');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const newSrc = btn.getAttribute('data-img');
        const newCaption = btn.getAttribute('data-caption');
        const newAlt = btn.getAttribute('data-alt') || 'Graphic design decade example';

        if (slideImg && newSrc) {
          slideImg.style.opacity = '0.2';
          setTimeout(() => {
            slideImg.src = newSrc;
            slideImg.alt = newAlt;
            if (mediaFrame) mediaFrame.setAttribute('data-zoom', newSrc);
            slideImg.style.opacity = '1';
          }, 150);
        }

        if (mediaCaption && newCaption) {
          mediaCaption.innerHTML = newCaption;
        }
      });
    });
  });

  // 9. Mobile Touch Swipe Navigation
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swiped Left -> Next Slide
      nextSlide();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swiped Right -> Prev Slide
      prevSlide();
    }
  }

  // 10. URL Hash Sync (#slide=X)
  function updateURLHash() {
    window.location.hash = `slide=${currentIndex + 1}`;
  }

  function handleURLHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#slide=')) {
      const slideNum = parseInt(hash.replace('#slide=', ''), 10);
      if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= totalSlides) {
        goToSlide(slideNum - 1);
      }
    }
  }

  // Initialization
  buildNavigationUI();
  updateUI();
  handleURLHash();
});

