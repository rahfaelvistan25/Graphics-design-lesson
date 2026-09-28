/**
 * The Basic Elements of Design — Interactive Student Presentation App
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

    // Button disabled states
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === totalSlides - 1;

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
    history.replaceState(null, null, `#slide-${currentIndex + 1}`);
  }

  function checkURLHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#slide-')) {
      const slideNum = parseInt(hash.replace('#slide-', ''), 10);
      if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= totalSlides) {
        goToSlide(slideNum - 1);
      }
    }
  }

  // 3. Drawer Logic
  function openDrawer() {
    slideDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
  }

  function closeDrawer() {
    slideDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
  }

  if (drawerToggleBtn) drawerToggleBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // 4. Fullscreen Logic
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function updateFullscreenIcons() {
    if (document.fullscreenElement) {
      if (fsIconExpand) fsIconExpand.classList.add('hidden');
      if (fsIconCompress) fsIconCompress.classList.remove('hidden');
    } else {
      if (fsIconExpand) fsIconExpand.classList.remove('hidden');
      if (fsIconCompress) fsIconCompress.classList.add('hidden');
    }
  }

  if (fullscreenBtn) fullscreenBtn.addEventListener('click', toggleFullscreen);
  document.addEventListener('fullscreenchange', updateFullscreenIcons);

  // 5. Lightbox Logic
  function openLightbox(imgSrc, captionText) {
    if (!lightboxModal) return;
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = captionText || '';
    lightboxModal.classList.add('open');
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
    lightboxImg.src = '';
  }

  document.querySelectorAll('.media-frame').forEach(frame => {
    frame.addEventListener('click', () => {
      const zoomSrc = frame.getAttribute('data-zoom');
      const img = frame.querySelector('img');
      const caption = frame.nextElementSibling ? frame.nextElementSibling.textContent : '';
      openLightbox(zoomSrc || (img ? img.src : ''), caption);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  // 6. Checkpoint Reveal Buttons
  document.querySelectorAll('.reveal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const content = document.getElementById(targetId);
      if (content) {
        const isHidden = content.classList.contains('hidden');
        content.classList.toggle('hidden');
        btn.textContent = isHidden ? 'Hide Design Insight' : 'Reveal Design Insight';
      }
    });
  });

  // 7. Interactive Live Widgets Handlers
  // Slide 2: Line interactive tester
  const lineWeightSlider = document.getElementById('lineWeightSlider');
  const lineWeightVal = document.getElementById('lineWeightVal');
  const liveLinePreview = document.getElementById('liveLinePreview');
  if (lineWeightSlider && liveLinePreview) {
    lineWeightSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      if (lineWeightVal) lineWeightVal.textContent = `${val}px`;
      liveLinePreview.style.borderBottomWidth = `${val}px`;
    });
  }

  // Slide 3: Shape Radius tester
  const shapeRadiusSlider = document.getElementById('shapeRadiusSlider');
  const shapeRadiusVal = document.getElementById('shapeRadiusVal');
  const liveShapePreview = document.getElementById('liveShapePreview');
  if (shapeRadiusSlider && liveShapePreview) {
    shapeRadiusSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      if (shapeRadiusVal) shapeRadiusVal.textContent = `${val}px`;
      liveShapePreview.style.borderRadius = `${val}px`;
    });
  }

  // Slide 4: 3D Form Elevation slider
  const formElevationSlider = document.getElementById('formElevationSlider');
  const liveFormPreview = document.getElementById('liveFormPreview');
  if (formElevationSlider && liveFormPreview) {
    formElevationSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      liveFormPreview.style.boxShadow = `0 ${val * 3}px ${val * 6}px rgba(0, 0, 0, ${0.3 + val * 0.05}), 0 0 ${val * 4}px rgba(56, 189, 248, ${val * 0.04})`;
      liveFormPreview.style.transform = `translateY(-${val * 1.5}px)`;
    });
  }

  // Slide 5: Positive vs Negative Space Inverter
  const spaceInvertBtn = document.getElementById('spaceInvertBtn');
  const spacePreviewFrame = document.getElementById('spacePreviewFrame');
  if (spaceInvertBtn && spacePreviewFrame) {
    spaceInvertBtn.addEventListener('click', () => {
      spacePreviewFrame.classList.toggle('inverted');
      const isInverted = spacePreviewFrame.classList.contains('inverted');
      spaceInvertBtn.textContent = isInverted ? 'Reset Space View' : 'Invert Figure / Ground';
    });
  }

  // Slide 6: Color Harmony preview buttons
  const colorBtns = document.querySelectorAll('.color-harmony-btn');
  const colorLiveBox = document.getElementById('colorLiveBox');
  if (colorBtns.length > 0 && colorLiveBox) {
    colorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        colorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.getAttribute('data-harmony');
        if (mode === 'complementary') {
          colorLiveBox.style.background = 'linear-gradient(135deg, #3b82f6 0%, #f97316 100%)';
        } else if (mode === 'analogous') {
          colorLiveBox.style.background = 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)';
        } else if (mode === 'triadic') {
          colorLiveBox.style.background = 'linear-gradient(135deg, #f59e0b 0%, #ec4899 50%, #3b82f6 100%)';
        } else if (mode === 'monochromatic') {
          colorLiveBox.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #38bdf8 100%)';
        }
      });
    });
  }

  // Slide 7: Grayscale / Squint Test toggle
  const squintTestBtn = document.getElementById('squintTestBtn');
  const valueSlideGrid = document.getElementById('valueSlideGrid');
  if (squintTestBtn && valueSlideGrid) {
    squintTestBtn.addEventListener('click', () => {
      valueSlideGrid.classList.toggle('squint-grayscale');
      const isSquint = valueSlideGrid.classList.contains('squint-grayscale');
      squintTestBtn.textContent = isSquint ? 'Restore Normal Color' : 'Activate Squint / Grayscale Test';
      squintTestBtn.classList.toggle('active', isSquint);
    });
  }

  // Slide 8: Texture Overlay buttons
  const textureBtns = document.querySelectorAll('.texture-mode-btn');
  const textureLiveBox = document.getElementById('textureLiveBox');
  if (textureBtns.length > 0 && textureLiveBox) {
    textureBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        textureBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.getAttribute('data-texture');
        textureLiveBox.className = `live-texture-box texture-${mode}`;
      });
    });
  }

  // 8. Navigation Button Clicks
  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  // 9. Global Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    // If typing in input or textarea, ignore
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      e.preventDefault();
      goToSlide(currentIndex + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      goToSlide(currentIndex - 1);
    } else if (e.key === ' ') {
      // Space advances slide if not clicking a button
      if (document.activeElement.tagName !== 'BUTTON') {
        e.preventDefault();
        goToSlide(currentIndex + 1);
      }
    } else if (e.key.toLowerCase() === 'f') {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key.toLowerCase() === 't') {
      e.preventDefault();
      if (slideDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    } else if (e.key === 'Escape') {
      if (lightboxModal && lightboxModal.classList.contains('open')) {
        closeLightbox();
      } else if (slideDrawer.classList.contains('open')) {
        closeDrawer();
      }
    }
  });

  // 10. Touch Swipe Support
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
      goToSlide(currentIndex + 1);
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      goToSlide(currentIndex - 1);
    }
  }

  // Initialize
  buildNavigationUI();
  checkURLHash();
  updateUI();
});
