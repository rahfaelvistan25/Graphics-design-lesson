/**
 * Unified Lesson Selector & Navigation System
 * Allows seamless switching between Lesson 1, Lesson 2, and Lesson 3
 * across all presentations and quizzes.
 */

(function () {
  'use strict';

  // 1. Lesson Curriculum Data
  const LESSONS = [
    {
      id: 1,
      num: '01',
      title: 'Principles of Design',
      shortTitle: 'Principles',
      subtitle: 'The 11 structural rules organizing elements of art & digital design.',
      topics: ['Balance', 'Contrast', 'Emphasis', 'Movement', 'Pattern', 'Rhythm', 'Unity', 'Variety', 'Proportion'],
      deckFile: 'index.html',
      quizFile: 'quiz/index.html',
      slidesCount: 13,
      quizCount: 15,
      accentClass: 'card-lesson-1',
      badgeClass: 'lesson-1',
      iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>`
    },
    {
      id: 2,
      num: '02',
      title: 'Elements of Design',
      shortTitle: 'Elements',
      subtitle: 'The 7 foundational visual building blocks for all compositions.',
      topics: ['Line', 'Shape', 'Form', 'Space', 'Colour', 'Value', 'Texture'],
      deckFile: 'Lesson 2/index.html',
      quizFile: 'Lesson 2/quiz/index.html',
      slidesCount: 9,
      quizCount: 15,
      accentClass: 'card-lesson-2',
      badgeClass: 'lesson-2',
      iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>`
    },
    {
      id: 3,
      num: '03',
      title: 'Rules of Composition',
      shortTitle: 'Composition',
      subtitle: 'The 9 spatial arrangement strategies directing visual attention & depth.',
      topics: ['Focal Points', 'Scale', 'Leading Lines', 'Rule of Thirds', 'Golden Ratio', 'Framing', 'Depth Planes'],
      deckFile: 'Lesson 3/index.html',
      quizFile: 'Lesson 3/quiz/index.html',
      slidesCount: 12,
      quizCount: 15,
      accentClass: 'card-lesson-3',
      badgeClass: 'lesson-3',
      iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>`
    }
  ];

  // 2. Detect Current Page Context
  function detectContext() {
    const body = document.body;
    let currentLesson = parseInt(body.getAttribute('data-current-lesson') || '0', 10);
    let currentType = body.getAttribute('data-current-type') || '';
    let rootPath = body.getAttribute('data-root-path') || '';

    // If attributes not explicitly defined, inspect path & title
    const path = window.location.pathname.replace(/\\/g, '/');
    const isQuiz = path.includes('/quiz/') || path.endsWith('/quiz') || path.endsWith('/quiz/index.html');

    if (!currentType) {
      currentType = isQuiz ? 'quiz' : 'deck';
    }

    if (!currentLesson) {
      if (path.includes('Lesson 2') || path.includes('Lesson%202')) {
        currentLesson = 2;
      } else if (path.includes('Lesson 3') || path.includes('Lesson%203')) {
        currentLesson = 3;
      } else {
        currentLesson = 1;
      }
    }

    if (!rootPath) {
      if (currentLesson === 1) {
        rootPath = isQuiz ? '../' : './';
      } else {
        rootPath = isQuiz ? '../../' : '../';
      }
    }

    return { currentLesson, currentType, rootPath };
  }

  const ctx = detectContext();

  // Helper to resolve links relative to current page
  function resolveUrl(relativeToRoot) {
    return ctx.rootPath + relativeToRoot;
  }

  // 3. Build Modal HTML
  function buildModalDOM() {
    if (document.getElementById('lessonSelectorModal')) return;

    const modal = document.createElement('div');
    modal.className = 'lesson-modal';
    modal.id = 'lessonSelectorModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'lessonModalTitle');

    let cardsHtml = '';
    LESSONS.forEach(l => {
      const isCurrentLesson = l.id === ctx.currentLesson;
      const isCurrentDeck = isCurrentLesson && ctx.currentType === 'deck';
      const isCurrentQuiz = isCurrentLesson && ctx.currentType === 'quiz';

      const topicsPills = l.topics.map(t => `<span class="lesson-topic-pill">${t}</span>`).join('');

      cardsHtml += `
        <article class="lesson-card ${l.accentClass} ${isCurrentLesson ? 'is-current' : ''}">
          ${isCurrentLesson ? `
            <div class="lesson-current-indicator">
              <span class="lesson-current-dot"></span>
              <span>Active Lesson</span>
            </div>
          ` : ''}

          <div class="lesson-card-icon-wrap">
            ${l.iconSvg}
          </div>

          <span class="lesson-card-module-tag">Module ${l.num}</span>
          <h3 class="lesson-card-title">${l.title}</h3>
          <p class="lesson-card-desc">${l.subtitle}</p>

          <div class="lesson-card-topics">
            ${topicsPills}
          </div>

          <div class="lesson-card-stats">
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              ${l.slidesCount} Slides
            </span>
            <span>&bull;</span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              ${l.quizCount} Quiz Qs
            </span>
          </div>

          <div class="lesson-card-actions">
            <a href="${resolveUrl(l.deckFile)}" class="lesson-card-btn lesson-card-btn-deck ${isCurrentDeck ? 'active-now' : ''}" title="Open Slides for ${l.title}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              <span>${isCurrentDeck ? 'Current Slides' : 'Open Slides'}</span>
            </a>
            <a href="${resolveUrl(l.quizFile)}" class="lesson-card-btn lesson-card-btn-quiz ${isCurrentQuiz ? 'active-now' : ''}" title="Open Quiz for ${l.title}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span>${isCurrentQuiz ? 'Current Quiz' : 'Take Quiz'}</span>
            </a>
          </div>
        </article>
      `;
    });

    modal.innerHTML = `
      <div class="lesson-modal-backdrop" id="lessonModalBackdrop"></div>
      <div class="lesson-modal-dialog">
        <header class="lesson-modal-header">
          <div class="lesson-modal-title-group">
            <div class="lesson-modal-eyebrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>Course Curriculum</span>
            </div>
            <h2 class="lesson-modal-title" id="lessonModalTitle">Interactive Design Masterclasses</h2>
            <p class="lesson-modal-subtitle">Switch between any lesson slides or test your knowledge with interactive visual quizzes.</p>
          </div>
          <button class="lesson-modal-close-btn" id="lessonModalCloseBtn" aria-label="Close Lesson Selector">&times;</button>
        </header>

        <div class="lesson-cards-grid">
          ${cardsHtml}
        </div>

        <footer class="lesson-modal-footer">
          <div class="lesson-modal-keyboard-hints">
            <span>Quick shortcuts:</span>
            <span><kbd class="lesson-kbd">L</kbd> Switch Lesson</span>
            <span><kbd class="lesson-kbd">Esc</kbd> Close</span>
          </div>
          <span style="font-size: 0.8rem; color: #64748b;">3 Complete Modules with 45+ Practice Questions</span>
        </footer>
      </div>
    `;

    document.body.appendChild(modal);

    // Event listeners
    const backdrop = document.getElementById('lessonModalBackdrop');
    const closeBtn = document.getElementById('lessonModalCloseBtn');

    if (backdrop) backdrop.addEventListener('click', closeLessonModal);
    if (closeBtn) closeBtn.addEventListener('click', closeLessonModal);
  }

  // 4. Modal Open / Close Functions
  function openLessonModal() {
    buildModalDOM();
    const modal = document.getElementById('lessonSelectorModal');
    if (modal) {
      modal.classList.add('open');
      document.querySelectorAll('.lesson-picker-btn').forEach(btn => {
        btn.setAttribute('aria-expanded', 'true');
      });
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLessonModal() {
    const modal = document.getElementById('lessonSelectorModal');
    if (modal) {
      modal.classList.remove('open');
      document.querySelectorAll('.lesson-picker-btn').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
      });
      document.body.style.overflow = '';
    }
  }

  function toggleLessonModal() {
    const modal = document.getElementById('lessonSelectorModal');
    if (modal && modal.classList.contains('open')) {
      closeLessonModal();
    } else {
      openLessonModal();
    }
  }

  // 5. Enhance Headers & Drawers
  function initHeaderButtons() {
    const currentLessonData = LESSONS.find(l => l.id === ctx.currentLesson) || LESSONS[0];

    // Setup or bind any existing .lesson-picker-btn
    document.querySelectorAll('.lesson-picker-btn, [data-open-lesson-modal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleLessonModal();
      });
    });

    // If deck header exists but lacks a lesson-picker-btn, inject it into .header-left
    const deckHeader = document.querySelector('.deck-header');
    if (deckHeader) {
      const headerLeft = deckHeader.querySelector('.header-left');
      if (headerLeft && !headerLeft.querySelector('.lesson-picker-btn')) {
        const pickerBtn = document.createElement('button');
        pickerBtn.className = `lesson-picker-btn ${currentLessonData.badgeClass}`;
        pickerBtn.setAttribute('title', 'Switch Lesson (Keyboard: L)');
        pickerBtn.setAttribute('aria-label', `Current Lesson: ${currentLessonData.title}. Click to switch.`);
        pickerBtn.innerHTML = `
          <span class="lesson-picker-badge">L${currentLessonData.id}</span>
          <span class="lesson-picker-name">${currentLessonData.shortTitle}</span>
          <svg class="lesson-picker-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        `;
        pickerBtn.addEventListener('click', (e) => {
          e.preventDefault();
          toggleLessonModal();
        });

        // Insert after divider-v or at end of headerLeft
        const divider = headerLeft.querySelector('.divider-v');
        if (divider && divider.nextSibling) {
          headerLeft.insertBefore(pickerBtn, divider.nextSibling);
        } else {
          headerLeft.appendChild(pickerBtn);
        }
      }

      // Ensure Quiz button exists in header-right if missing (e.g. Lesson 1)
      const headerRight = deckHeader.querySelector('.header-right');
      if (headerRight && !headerRight.querySelector('.quiz-link')) {
        const quizBtn = document.createElement('a');
        quizBtn.href = currentLessonData.quizFile;
        quizBtn.className = 'nav-btn-icon quiz-link';
        quizBtn.title = 'Open Interactive Knowledge Quiz';
        quizBtn.id = 'headerQuizBtn';
        quizBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
          <span class="btn-label">Quiz Challenge</span>
        `;
        // Insert as first item in header-right
        headerRight.insertBefore(quizBtn, headerRight.firstChild);
      }
    }

    // Enhance slide drawer if present
    const slideDrawer = document.getElementById('slideDrawer');
    if (slideDrawer) {
      const drawerHeader = slideDrawer.querySelector('.drawer-header');
      if (drawerHeader && !slideDrawer.querySelector('.drawer-lesson-switcher')) {
        const switcherBanner = document.createElement('div');
        switcherBanner.className = 'drawer-lesson-switcher';
        switcherBanner.innerHTML = `
          <div class="drawer-lesson-info">
            <span class="drawer-lesson-label">Active Masterclass</span>
            <span class="drawer-lesson-name">Lesson ${currentLessonData.id}: ${currentLessonData.title}</span>
          </div>
          <button class="lesson-picker-btn ${currentLessonData.badgeClass}" id="drawerSwitchLessonBtn">
            <span>Change Lesson</span>
            <svg class="lesson-picker-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        `;
        switcherBanner.querySelector('#drawerSwitchLessonBtn').addEventListener('click', () => {
          // If drawer has a close function or button, trigger it
          const closeDrawerBtn = document.getElementById('closeDrawerBtn');
          if (closeDrawerBtn) closeDrawerBtn.click();
          openLessonModal();
        });

        drawerHeader.insertAdjacentElement('afterend', switcherBanner);
      }
    }

    // Enhance Quiz Pages
    if (ctx.currentType === 'quiz') {
      initQuizPageEnhancements(currentLessonData);
    }
  }

  // 6. Quiz Page Enhancements (Top Bar & Action Buttons)
  function initQuizPageEnhancements(currentLessonData) {
    // Check if quiz top bar exists for Start and Results screens
    let topBar = document.querySelector('.quiz-top-bar');
    if (!topBar) {
      topBar = document.createElement('header');
      topBar.className = 'quiz-top-bar';
      topBar.innerHTML = `
        <div class="quiz-top-left">
          <a href="${resolveUrl(currentLessonData.deckFile)}" class="quiz-nav-back-btn" title="Back to Lesson Slides">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            <span>Back to Slides</span>
          </a>
        </div>
        <div class="quiz-top-center">
          <span class="lesson-picker-badge ${currentLessonData.badgeClass}">Lesson ${currentLessonData.id} Quiz</span>
          <span>${currentLessonData.title}</span>
        </div>
        <div class="quiz-top-right">
          <button class="lesson-picker-btn ${currentLessonData.badgeClass}" id="quizTopLessonBtn" title="Switch Lesson (L)">
            <span class="lesson-picker-badge">L${currentLessonData.id}</span>
            <span class="lesson-picker-name">Switch Lesson</span>
            <svg class="lesson-picker-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      `;
      topBar.querySelector('#quizTopLessonBtn').addEventListener('click', toggleLessonModal);
      document.body.prepend(topBar);
    }

    // Enhance quiz-header with inline exit button and lesson switcher
    const quizHeader = document.querySelector('.quiz-header');
    if (quizHeader) {
      const qHeaderLeft = quizHeader.querySelector('.header-left');
      if (qHeaderLeft && !qHeaderLeft.querySelector('.quiz-header-back-btn')) {
        const exitBtn = document.createElement('a');
        exitBtn.href = resolveUrl(currentLessonData.deckFile);
        exitBtn.className = 'quiz-header-back-btn';
        exitBtn.title = 'Back to Lesson Slides';
        exitBtn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          <span class="exit-label">Slides</span>
        `;
        qHeaderLeft.prepend(exitBtn);
      }

      const qHeaderRight = quizHeader.querySelector('.header-right');
      if (qHeaderRight && !qHeaderRight.querySelector('.quiz-header-picker')) {
        const pickerBtn = document.createElement('button');
        pickerBtn.className = `lesson-picker-btn quiz-header-picker ${currentLessonData.badgeClass}`;
        pickerBtn.title = 'Switch Lesson (L)';
        pickerBtn.innerHTML = `
          <span class="lesson-picker-badge">L${currentLessonData.id}</span>
          <svg class="lesson-picker-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        `;
        pickerBtn.addEventListener('click', toggleLessonModal);
        qHeaderRight.appendChild(pickerBtn);
      }
    }

    // Toggle body class in-quiz-mode when starting or ending quiz
    const startBtn = document.getElementById('startQuizBtn');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        document.body.classList.add('in-quiz-mode');
      });
    }

    const retryBtn = document.getElementById('retryBtn');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        document.body.classList.add('in-quiz-mode');
      });
    }

    // Watch for results screen
    const observer = new MutationObserver(() => {
      const resultsScreen = document.getElementById('resultsScreen');
      if (resultsScreen && resultsScreen.classList.contains('active')) {
        document.body.classList.remove('in-quiz-mode');
      }
    });
    const quizApp = document.getElementById('quizApp');
    if (quizApp) {
      observer.observe(quizApp, { attributes: true, subtree: true, attributeFilter: ['class'] });
    }

    // Add "Switch Lesson" button to start-card if not already there
    const startCard = document.querySelector('.start-card');
    if (startCard && startBtn && !startCard.querySelector('.btn-switch-lesson')) {
      const switchBtn = document.createElement('button');
      switchBtn.type = 'button';
      switchBtn.className = 'btn-switch-lesson';
      switchBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
        <span>Switch Lesson / Select Another Quiz</span>
      `;
      switchBtn.addEventListener('click', toggleLessonModal);
      startBtn.insertAdjacentElement('afterend', switchBtn);
    }

    // Add "Switch Lesson" button to results-actions if not already there
    const resultsActions = document.querySelector('.results-actions');
    if (resultsActions && !resultsActions.querySelector('.btn-switch-lesson')) {
      const resSwitchBtn = document.createElement('button');
      resSwitchBtn.type = 'button';
      resSwitchBtn.className = 'btn-switch-lesson';
      resSwitchBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
        <span>Switch Lesson</span>
      `;
      resSwitchBtn.addEventListener('click', toggleLessonModal);
      resultsActions.appendChild(resSwitchBtn);
    }
  }

  // 7. Global Keyboard Event Listener
  window.addEventListener('keydown', (e) => {
    // If typing in input or textarea, ignore
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.key === 'l' || e.key === 'L') {
      e.preventDefault();
      toggleLessonModal();
    } else if (e.key === 'Escape') {
      const modal = document.getElementById('lessonSelectorModal');
      if (modal && modal.classList.contains('open')) {
        e.preventDefault();
        closeLessonModal();
      }
    }
  });

  // Expose on window for programmatic control
  window.LessonNav = {
    open: openLessonModal,
    close: closeLessonModal,
    toggle: toggleLessonModal,
    lessons: LESSONS,
    context: ctx
  };

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      buildModalDOM();
      initHeaderButtons();
    });
  } else {
    buildModalDOM();
    initHeaderButtons();
  }
})();
