/**
 * Rules of Composition — Master Interactive Slide Deck Application
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

    // Button States
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) {
      if (currentIndex === totalSlides - 1) {
        nextBtn.innerHTML = `<span>Take Quiz &rarr;</span>`;
        nextBtn.onclick = () => { window.location.href = 'quiz/index.html'; };
      } else {
        nextBtn.innerHTML = `
          <span>Next Slide</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        `;
        nextBtn.onclick = () => goToSlide(currentIndex + 1);
      }
    }

    // Update Dots
    const dots = Array.from(dotPagination.querySelectorAll('.dot-btn'));
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });

    // Update Drawer Active Item
    const drawerItems = Array.from(drawerGrid.querySelectorAll('.drawer-item'));
    drawerItems.forEach((item, idx) => {
      item.classList.toggle('active', idx === currentIndex);
    });
  }

  function updateURLHash() {
    history.replaceState(null, null, `#slide-${currentIndex + 1}`);
  }

  function handleHashNavigation() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#slide-')) {
      const slideNum = parseInt(hash.replace('#slide-', ''), 10);
      if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= totalSlides) {
        goToSlide(slideNum - 1);
      }
    }
  }

  // 3. Drawer Toggle Logic
  function openDrawer() {
    slideDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
  }

  function closeDrawer() {
    slideDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
  }

  drawerToggleBtn.addEventListener('click', openDrawer);
  closeDrawerBtn.addEventListener('click', closeDrawer);
  drawerBackdrop.addEventListener('click', closeDrawer);

  // 4. Fullscreen Logic
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Fullscreen request failed: ${err.message}`);
      });
      fsIconExpand.classList.add('hidden');
      fsIconCompress.classList.remove('hidden');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        fsIconExpand.classList.remove('hidden');
        fsIconCompress.classList.add('hidden');
      }
    }
  }

  fullscreenBtn.addEventListener('click', toggleFullscreen);

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      fsIconExpand.classList.remove('hidden');
      fsIconCompress.classList.add('hidden');
    }
  });

  // 5. Lightbox Zoom Logic
  document.querySelectorAll('.media-frame').forEach(frame => {
    frame.addEventListener('click', () => {
      const img = frame.querySelector('.slide-img');
      const caption = frame.parentElement.querySelector('.media-caption');
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.innerHTML = caption ? caption.innerHTML : '';
        lightboxModal.classList.add('active');
      }
    });
  });

  function closeLightbox() {
    lightboxModal.classList.remove('active');
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);

  // 6. Interactive Checkpoint Reveals
  document.querySelectorAll('.reveal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const isHidden = targetEl.classList.contains('hidden');
        targetEl.classList.toggle('hidden');
        btn.textContent = isHidden ? 'Hide Design Insight' : 'Reveal Design Insight';
      }
    });
  });

  // 7. Keyboard Navigation Bindings
  document.addEventListener('keydown', (e) => {
    // If modal is open, let Esc close it
    if (e.key === 'Escape') {
      if (lightboxModal.classList.contains('active')) {
        closeLightbox();
        return;
      }
      if (slideDrawer.classList.contains('active')) {
        closeDrawer();
        return;
      }
    }

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      if (currentIndex < totalSlides - 1) {
        e.preventDefault();
        goToSlide(currentIndex + 1);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      if (currentIndex > 0) {
        e.preventDefault();
        goToSlide(currentIndex - 1);
      }
    } else if (e.key === 'Home') {
      goToSlide(0);
    } else if (e.key === 'End') {
      goToSlide(totalSlides - 1);
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key === 't' || e.key === 'T') {
      if (slideDrawer.classList.contains('active')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    }
  });

  // 8. Prev Button Click
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) goToSlide(currentIndex - 1);
    });
  }

  // 9. Interactive In-Slide Demos & Widgets

  // Slide 1 Viewfinder toggle
  const widgetThirdsToggle = document.getElementById('widgetThirdsToggle');
  if (widgetThirdsToggle) {
    widgetThirdsToggle.addEventListener('click', () => {
      widgetThirdsToggle.classList.toggle('active');
      const active = widgetThirdsToggle.classList.contains('active');
      widgetThirdsToggle.textContent = active ? 'Grid Guides: ON' : 'Grid Guides: OFF';
    });
  }

  // Slide 3 Scale Delta slider
  const scaleSlider = document.getElementById('scaleSlider');
  const scaleVal = document.getElementById('scaleVal');
  if (scaleSlider && scaleVal) {
    scaleSlider.addEventListener('input', (e) => {
      scaleVal.textContent = `${e.target.value}x`;
    });
  }

  // Slide 4 Leading Lines tracer toggle
  const laserTracerBtn = document.getElementById('laserTracerBtn');
  if (laserTracerBtn) {
    laserTracerBtn.addEventListener('click', () => {
      laserTracerBtn.classList.toggle('active');
      const on = laserTracerBtn.classList.contains('active');
      laserTracerBtn.textContent = on ? 'Gaze Path: Active' : 'Trace Gaze Path';
    });
  }

  // Slide 5 Hierarchy Scanner Buttons
  const hierBtns = document.querySelectorAll('.hier-btn');
  const hierNotice = document.getElementById('hierNotice');
  if (hierBtns.length > 0 && hierNotice) {
    hierBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        hierBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const level = btn.getAttribute('data-level');
        if (level === '1') {
          hierNotice.innerHTML = `<strong>Level 1 (Hero Hook):</strong> Captures 100% of human attention in the first 50ms. High contrast, largest scale.`;
        } else if (level === '2') {
          hierNotice.innerHTML = `<strong>Level 2 (Supporting Context):</strong> Gives meaning, proof, and navigation. Medium scale, secondary color.`;
        } else if (level === '3') {
          hierNotice.innerHTML = `<strong>Level 3 (Fine Nuance):</strong> Explanations, metadata, and fine print. Smallest scale, muted contrast.`;
        }
      });
    });
  }

  // Slide 6 Balance Mode Switcher
  const balSymBtn = document.getElementById('balSymBtn');
  const balAsymBtn = document.getElementById('balAsymBtn');
  const balDesc = document.getElementById('balDesc');
  if (balSymBtn && balAsymBtn && balDesc) {
    balSymBtn.addEventListener('click', () => {
      balSymBtn.classList.add('active');
      balAsymBtn.classList.remove('active');
      balDesc.textContent = 'Symmetrical: Mirrored formal equilibrium. Dignified, monumental, and calm.';
    });
    balAsymBtn.addEventListener('click', () => {
      balAsymBtn.classList.add('active');
      balSymBtn.classList.remove('active');
      balDesc.textContent = 'Asymmetrical: Dynamic equilibrium. 1 Heavy center mass balanced by 2 small vibrant outer masses.';
    });
  }

  // Slide 7 Odds vs Evens Switcher
  const oddsBtn = document.getElementById('oddsBtn');
  const evensBtn = document.getElementById('evensBtn');
  const oddsDesc = document.getElementById('oddsDesc');
  if (oddsBtn && evensBtn && oddsDesc) {
    oddsBtn.addEventListener('click', () => {
      oddsBtn.classList.add('active');
      evensBtn.classList.remove('active');
      oddsDesc.textContent = 'Rule of Odds (Trio): Natural center anchor. The brain loops gracefully around the triangle.';
    });
    evensBtn.addEventListener('click', () => {
      evensBtn.classList.add('active');
      oddsBtn.classList.remove('active');
      oddsDesc.textContent = 'Pair of Two (Evens): Dueling focal standoff. The gaze darts back and forth statically.';
    });
  }

  // Slide 9 Framing Aperture Slider
  const frameSlider = document.getElementById('frameSlider');
  const frameVal = document.getElementById('frameVal');
  if (frameSlider && frameVal) {
    frameSlider.addEventListener('input', (e) => {
      frameVal.textContent = `${e.target.value}%`;
    });
  }

  // Slide 10 Lead Room Slider
  const leadRoomSlider = document.getElementById('leadRoomSlider');
  const leadRoomVal = document.getElementById('leadRoomVal');
  if (leadRoomSlider && leadRoomVal) {
    leadRoomSlider.addEventListener('input', (e) => {
      leadRoomVal.textContent = `${e.target.value}% buffer`;
    });
  }

  // Slide 11 Horizon Line Shift Slider
  const horizonSlider = document.getElementById('horizonSlider');
  const horizonVal = document.getElementById('horizonVal');
  if (horizonSlider && horizonVal) {
    horizonSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      if (val < 40) {
        horizonVal.textContent = `${val}% (Low Horizon: Epic Sky)`;
      } else if (val > 60) {
        horizonVal.textContent = `${val}% (High Horizon: Ground Detail)`;
      } else {
        horizonVal.textContent = `${val}% (Caution: Bisecting)`;
      }
    });
  }

  // Slide 12 10-Point Checklist Interactive Toggles
  const auditChecks = document.querySelectorAll('.audit-check');
  const auditScore = document.getElementById('auditScore');
  if (auditChecks.length > 0 && auditScore) {
    auditChecks.forEach(ch => {
      ch.addEventListener('change', () => {
        const checkedCount = document.querySelectorAll('.audit-check:checked').length;
        auditScore.textContent = `${checkedCount} / 10 Checked`;
      });
    });
  }

  // Initialize UI & hash
  buildNavigationUI();
  updateUI();
  handleHashNavigation();
  window.addEventListener('hashchange', handleHashNavigation);

});
