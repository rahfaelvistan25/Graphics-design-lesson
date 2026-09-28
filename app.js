/**
 * Principles of Design — Interactive Student Presentation App
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

  // 1. Initialize Pagination Dots & Drawer Items
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

    // Determine direction for smooth transition classes
    const direction = newIndex > currentIndex ? 'forward' : 'backward';

    // Update active classes
    slides.forEach((s, idx) => {
      s.classList.remove('active', 'exit-left');
      if (idx === currentIndex) {
        if (direction === 'forward') {
          s.classList.add('exit-left');
        }
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
    slideIndicator.textContent = `${String(slideNumber).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
    topSlideTitle.textContent = title;

    // Progress bar update
    const progressPercent = (slideNumber / totalSlides) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Button disabled states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalSlides - 1;

    // Dot active state
    const dots = dotPagination.querySelectorAll('.dot-btn');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });

    // Drawer active state
    const drawerItems = drawerGrid.querySelectorAll('.drawer-item');
    drawerItems.forEach((item, idx) => {
      item.classList.toggle('active', idx === currentIndex);
    });
  }

  function updateURLHash() {
    window.location.hash = `slide-${currentIndex + 1}`;
  }

  function parseURLHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#slide-')) {
      const slideNum = parseInt(hash.replace('#slide-', ''), 10);
      if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= totalSlides) {
        goToSlide(slideNum - 1);
      }
    }
  }

  // 3. Drawer Controls
  function openDrawer() {
    slideDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
  }

  function closeDrawer() {
    slideDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
  }

  drawerToggleBtn.addEventListener('click', openDrawer);
  closeDrawerBtn.addEventListener('click', closeDrawer);
  drawerBackdrop.addEventListener('click', closeDrawer);

  // 4. Lightbox Controls
  function openLightbox(imgSrc, captionText) {
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = captionText || '';
    lightboxModal.classList.add('open');
  }

  function closeLightbox() {
    lightboxModal.classList.remove('open');
    lightboxImg.src = '';
  }

  document.querySelectorAll('.media-frame').forEach(frame => {
    frame.addEventListener('click', () => {
      const zoomSrc = frame.getAttribute('data-zoom');
      const caption = frame.nextElementSibling ? frame.nextElementSibling.textContent.trim() : '';
      if (zoomSrc) {
        openLightbox(zoomSrc, caption);
      }
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);

  // 5. Checkpoint Reveal Buttons
  document.querySelectorAll('.reveal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) {
        const isHidden = target.classList.contains('hidden');
        target.classList.toggle('hidden');
        btn.textContent = isHidden ? 'Hide Design Insight' : 'Reveal Design Insight';
      }
    });
  });

  // 6. Fullscreen API
  fullscreenBtn.addEventListener('click', toggleFullscreen);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Error attempting fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  document.addEventListener('fullscreenchange', () => {
    const isFs = !!document.fullscreenElement;
    fsIconExpand.classList.toggle('hidden', isFs);
    fsIconCompress.classList.toggle('hidden', !isFs);
  });

  // 7. Navigation Event Handlers
  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // If lightbox is open, ESC closes it
    if (lightboxModal.classList.contains('open')) {
      if (e.key === 'Escape') {
        closeLightbox();
        return;
      }
    }

    // If drawer is open, ESC closes it
    if (slideDrawer.classList.contains('open')) {
      if (e.key === 'Escape') {
        closeDrawer();
        return;
      }
    }

    switch (e.key) {
      case 'ArrowRight':
      case ' ': // Spacebar
        e.preventDefault();
        goToSlide(currentIndex + 1);
        break;
      case 'ArrowLeft':
      case 'Backspace':
        e.preventDefault();
        goToSlide(currentIndex - 1);
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
      case 't':
      case 'T':
        if (slideDrawer.classList.contains('open')) {
          closeDrawer();
        } else {
          openDrawer();
        }
        break;
      case 'Escape':
        closeDrawer();
        closeLightbox();
        break;
    }
  });

  // Swipe Gestures for Touch Screens
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
      // Swiped Left -> Go Next
      goToSlide(currentIndex + 1);
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      // Swiped Right -> Go Prev
      goToSlide(currentIndex - 1);
    }
  }

  // Initial Setup
  buildNavigationUI();
  parseURLHash();
  updateUI();
});
