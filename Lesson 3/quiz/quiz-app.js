/**
 * Rules of Composition — Interactive Mastery Quiz Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  const questions = [
    {
      id: 1,
      module: "Module 1 & 2: Introduction & Definition",
      text: "According to the fundamental laws of visual design, what is the true definition and purpose of Composition?",
      image: "../assets/slide1_intro.svg",
      options: [
        "The physical pigment, typography, and vector code used to render pixels on screen",
        "The intentional arrangement and orchestration of visual elements within a frame to direct human attention and emotion",
        "The mechanical resolution and pixel aspect ratio chosen during canvas export",
        "The strict mathematical rule that all subjects must always be placed dead center in the canvas"
      ],
      correct: 1,
      explanation: "Composition is the invisible conductor and architecture of design: it is not the raw ingredients themselves, but how you arrange them to guide the viewer's gaze, evoke feelings, and communicate meaning effortlessly."
    },
    {
      id: 2,
      module: "Module 2: What Is Composition?",
      text: "Why is the distinction between 'Subject' and 'Composition' vital for every visual artist and designer?",
      image: "../assets/slide2_what_is_composition.svg",
      options: [
        "Because an extraordinary subject cannot rescue terrible composition, but masterful composition can make even an ordinary subject breathtaking",
        "Because the subject is the only thing the human brain notices during the first 5 seconds",
        "Because subjects only exist in 3D photography, whereas composition only exists in 2D graphic design",
        "Because adding more subjects automatically fixes poor lighting, awkward horizons, and edge collisions"
      ],
      correct: 0,
      explanation: "A breathtaking waterfall ruined by edge tangents and a bisecting horizon feels amateur, while a simple wooden chair orchestrated with exquisite lighting, leading lines, and negative space can become an iconic museum masterpiece."
    },
    {
      id: 3,
      module: "Module 3.1: Focal Point",
      text: "In visual psychology, what is a 'Focal Point' and what happens when a design lacks one?",
      image: "../assets/slide3_focal_scale.svg",
      options: [
        "It is the exact physical geometric center of the frame; without it, the canvas will tilt",
        "It is the primary visual anchor where the eye lands first; without one, the viewer's brain experiences cognitive fatigue and visual wandering",
        "It is the smallest element on the screen designed to hide fine-print disclaimers",
        "It is a digital watermark placed in the corner to protect copyright"
      ],
      correct: 1,
      explanation: "The focal point is the retinal magnet of your composition. If everything shouts with equal intensity, nothing is heard, leaving the viewer confused and disengaged."
    },
    {
      id: 4,
      module: "Module 3.2: Scale",
      text: "How does the principle of Scale manipulate the emotional and psychological narrative of a scene?",
      image: "../assets/slide3_focal_scale.svg",
      options: [
        "By enforcing that all UI elements share the exact same pixel width for uniformity",
        "By using relative size differences to establish dominance, vulnerability, monumental awe, or intimate proximity",
        "By scaling up the file size in megabytes so the graphic looks sharper on high-DPI displays",
        "By making background mountains larger than foreground characters to invert 3D perspective"
      ],
      correct: 1,
      explanation: "Scale is relative: placing a tiny human silhouette beside a colossal monolith immediately conveys awe, mystery, and humility. Scale establishes emotional hierarchy and drama."
    },
    {
      id: 5,
      module: "Module 3.3: Contrast",
      text: "Which of the following represents the most powerful form of Contrast to command immediate human gaze priority?",
      image: "../assets/slide4_contrast_lines.svg",
      options: [
        "Extreme Value (Luminance) disparity, such as a radiant light element against deep shadow",
        "Slightly altering the font tracking from 0.01em to 0.02em",
        "Matching two analogous shades of blue that are only 2% apart on the color wheel",
        "Using transparent grey borders on an identical grey background"
      ],
      correct: 0,
      explanation: "Human evolution tuned our visual cortex to detect light against dark (value contrast) for survival and threat detection. Extreme value contrast will out-pull almost all other visual stimuli."
    },
    {
      id: 6,
      module: "Module 3.4: Leading Lines",
      text: "What makes William Hogarth's classical 'S-Curve' (the Line of Beauty) so universally captivating in composition?",
      image: "../assets/slide4_contrast_lines.svg",
      options: [
        "It forces the viewer to exit the frame as quickly as possible through the upper corner",
        "It creates a gentle, meandering journey that slows down visual exploration and adds organic elegance",
        "It is the only line that can be drawn without a digital graphics tablet",
        "It eliminates the need for any foreground or middle ground elements"
      ],
      correct: 1,
      explanation: "Unlike straight diagonal lines which feel fast, aggressive, and kinetic, the serpentine S-curve invites the eye to glide gracefully across multiple depths and focal areas."
    },
    {
      id: 7,
      module: "Module 3.5: Hierarchy",
      text: "In Western interface and editorial design, what visual scanning pattern does the eye commonly follow across high-level compositions?",
      image: "../assets/slide5_hierarchy_distance.svg",
      options: [
        "A counter-clockwise spiral starting from the bottom-right corner",
        "The Z-Pattern (Top-left &rarr; Top-right &rarr; Diagonal sweep &rarr; Bottom-right payoff)",
        "A vertical bounce between the top-center and bottom-center only",
        "A random chaotic scatter that never returns to previous elements"
      ],
      correct: 1,
      explanation: "Because Western literacy reads left-to-right and top-to-bottom, visual compositions leverage the Z-Pattern to place branding at top-left, nav at top-right, hero diagonal in the center, and the Call-To-Action (CTA) at the bottom-right."
    },
    {
      id: 8,
      module: "Module 3.6: Distance & Depth",
      text: "What is 'Atmospheric Perspective' and how does it convince the brain of vast distance on a flat 2D canvas?",
      image: "../assets/slide5_hierarchy_distance.svg",
      options: [
        "Distant objects appear darker, saturated with warm red hues, and razor sharp",
        "Distant objects lose contrast, desaturate, and shift toward cooler, hazy background tones due to light scattering",
        "Objects become infinitely brighter and sharper the further away they travel from the lens",
        "It is a digital blur filter that can only be applied to sky layers in Photoshop"
      ],
      correct: 1,
      explanation: "Atmospheric moisture and particles scatter light across long distances. As a result, far-away mountains appear pale, low-contrast, and bluish-grey compared to punchy foreground rocks."
    },
    {
      id: 9,
      module: "Module 3.7: Balance",
      text: "How does 'Asymmetrical Balance' achieve visual equilibrium compared to rigid Symmetrical Balance?",
      image: "../assets/slide6_balance_space_repetition.svg",
      options: [
        "By mirroring the exact identical shapes on both the left and right sides of a center axis",
        "By balancing a large, visually heavy mass near the center against a smaller, vibrant or high-contrast element placed farther out on the lever",
        "By leaving 100% of the canvas completely blank on one side with zero elements anywhere",
        "By rotating the entire canvas by 45 degrees so that gravity levels the shapes"
      ],
      correct: 1,
      explanation: "Just like a playground seesaw, a heavy weight close to the fulcrum can be perfectly balanced by a lighter, energetic weight placed far out at the edge. This creates dynamic, sophisticated equilibrium."
    },
    {
      id: 10,
      module: "Module 3.8: Space",
      text: "In high-end editorial and modern digital UI design, what is the role of 'Active Negative Space' (White Space)?",
      image: "../assets/slide6_balance_space_repetition.svg",
      options: [
        "It is wasted real estate that should immediately be filled with promotional banner ads",
        "It acts as visual oxygen that gives focal points authority, creates psychological calm, and communicates luxury and clarity",
        "It is a rendering glitch where CSS margins fail to compute properly",
        "It is only used when the designer runs out of copy or imagery to show"
      ],
      correct: 1,
      explanation: "Space is not an absence of design; space IS design. Generous macro negative space isolates key elements, prevents cognitive overload, and imbues products with prestige."
    },
    {
      id: 11,
      module: "Module 3.9: Repetition",
      text: "Why is the technique of 'Breaking the Motif' (The Anomaly Rule) so effective in pattern-based compositions?",
      image: "../assets/slide6_balance_space_repetition.svg",
      options: [
        "Because repeating patterns lull the subconscious into expectations; the one anomaly immediately triggers an involuntary orienting reflex in the brain",
        "Because repeating patterns are illegal under graphic design copyright standards",
        "Because it reduces rendering cost for WebGL GPU pipelines",
        "Because the brain hates patterns and always tries to close the browser window when seeing one"
      ],
      correct: 0,
      explanation: "The human brain is a master pattern-recognition machine. Once a rhythm is established, any deliberate break (in color, shape, or orientation) instantly becomes the undeniable star of the frame."
    },
    {
      id: 12,
      module: "Module 4.1: Rule of Thirds",
      text: "Where does the Rule of Thirds suggest placing key subjects and horizon baselines for maximum visual engagement?",
      image: "../assets/slide7_thirds_odds.svg",
      options: [
        "Dead center at exactly 50% horizontal and 50% vertical",
        "Along the 3x3 gridlines and directly upon the 4 power intersection junctions, with horizons on the upper or lower third",
        "Scattered along the outermost 1px perimeter border to maximize edge tension",
        "Randomly wherever the software cursor was initially clicked"
      ],
      correct: 1,
      explanation: "Positioning heroes off-center along the thirds creates energy, negative breathing space, and an engaging conversational balance, while placing horizons on the lower or upper third prioritizes either sky or ground."
    },
    {
      id: 13,
      module: "Module 4.2: Rule of Odds",
      text: "Why do visual compositions with odd numbers of subjects (3, 5, or 7) typically feel more pleasing and natural than even numbers (2, 4, or 6)?",
      image: "../assets/slide7_thirds_odds.svg",
      options: [
        "Because even numbers allow the brain to easily pair objects into opposing duels, while odd numbers provide a natural anchor and keep the gaze in active motion",
        "Because camera lenses can only process an odd number of focal points at once",
        "Because odd numbers take up less visual megabytes on the canvas",
        "Because even numbers are culturally unlucky across all continents"
      ],
      correct: 0,
      explanation: "Pairs of two create a static stalemate where the eyes dart back and forth. A group of three forms a dynamic triangle with a natural anchor, inviting continuous looping curiosity."
    },
    {
      id: 14,
      module: "Module 4.3 & 4.4: Golden Ratio & Golden Triangle",
      text: "What unique compositional quality does the 'Golden Triangle' technique bring to dynamic action and cinematic framing?",
      image: "../assets/slide8_golden_ratio_triangle.svg",
      options: [
        "It forces all content into flat, rigid horizontal bars like spreadsheet rows",
        "It splits the canvas with a corner-to-corner diagonal bisected by two perpendicular 90° lines, generating high-octane diagonal tension and dynamic focal apexes",
        "It guarantees that all shapes inside the frame must be perfect equilateral triangles",
        "It completely removes the need for lighting, shadows, or contrast"
      ],
      correct: 1,
      explanation: "The Golden Triangle leverages diagonal vectors that collide at 90-degree right angles, creating exhilarating visual movement perfect for sports photography, fashion, cinema, and kinetic posters."
    },
    {
      id: 15,
      module: "Module 4.5 - 5.6: Framing, Depth & Pro Tips",
      text: "What is 'Lead Room' (Look Room / Nose Room) and what psychological discomfort occurs if a designer violates it?",
      image: "../assets/slide10_depth_leadroom_l2r.svg",
      options: [
        "It is extra padding added below text cards so the developer can fit a logo",
        "It is the open buffer space placed in the direction a subject is looking or moving; violating it makes the subject appear trapped against a claustrophobic barrier",
        "It is the lead-based paint traditionally used by Renaissance oil painters",
        "It is the physical distance between the teacher's podium and the first row of students"
      ],
      correct: 1,
      explanation: "Humans instinctively project trajectories into the future. If a sprinting runner or gazing character is crammed right against the frame border with no space ahead, the viewer feels intense claustrophobia and visual crash."
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let userAnswers = new Array(questions.length).fill(null);
  let timerSeconds = 0;
  let timerInterval = null;

  // UI Bindings
  const startScreen = document.getElementById('startScreen');
  const quizScreen = document.getElementById('quizScreen');
  const resultsScreen = document.getElementById('resultsScreen');
  
  const startQuizBtn = document.getElementById('startQuizBtn');
  const qCounter = document.getElementById('qCounter');
  const scoreDisplay = document.getElementById('scoreDisplay');
  const timerText = document.getElementById('timerText');
  const quizProgressBar = document.getElementById('quizProgressBar');

  const questionBadge = document.getElementById('questionBadge');
  const questionText = document.getElementById('questionText');
  const questionImage = document.getElementById('questionImage');
  const optionsGrid = document.getElementById('optionsGrid');
  
  const explanationCard = document.getElementById('explanationCard');
  const explanationTitle = document.getElementById('explanationTitle');
  const explanationText = document.getElementById('explanationText');

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Results Bindings
  const finalScore = document.getElementById('finalScore');
  const finalTotal = document.getElementById('finalTotal');
  const scoreRing = document.getElementById('scoreRing');
  const rankName = document.getElementById('rankName');
  const rankMessage = document.getElementById('rankMessage');
  const breakdownGrid = document.getElementById('breakdownGrid');
  const restartBtn = document.getElementById('restartBtn');
  const reviewBtn = document.getElementById('reviewBtn');

  // Review Modal Bindings
  const reviewModal = document.getElementById('reviewModal');
  const reviewBackdrop = document.getElementById('reviewBackdrop');
  const closeReviewBtn = document.getElementById('closeReviewBtn');
  const reviewList = document.getElementById('reviewList');

  // 1. Start Quiz
  startQuizBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    startTimer();
    renderQuestion(0);
  });

  // 2. Timer
  function startTimer() {
    timerSeconds = 0;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timerSeconds++;
      const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
      const secs = String(timerSeconds % 60).padStart(2, '0');
      timerText.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  // 3. Render Question
  function renderQuestion(index) {
    currentQuestionIndex = index;
    const q = questions[index];

    // Update Progress & Header
    qCounter.textContent = `Q${index + 1} / ${questions.length}`;
    scoreDisplay.textContent = `Score: ${score}`;
    quizProgressBar.style.width = `${((index + 1) / questions.length) * 100}%`;

    // Populate question card
    questionBadge.textContent = `${q.module} &middot; Question ${index + 1}`;
    questionText.textContent = q.text;
    questionImage.src = q.image;
    questionImage.alt = `Illustration clue for question ${index + 1}`;

    // Clear Options
    optionsGrid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    const hasAnswered = userAnswers[index] !== null;

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[optIdx]}</span>
        <span class="option-label">${optText}</span>
      `;

      if (hasAnswered) {
        btn.disabled = true;
        if (optIdx === q.correct) {
          btn.classList.add('correct');
        } else if (optIdx === userAnswers[index]) {
          btn.classList.add('incorrect');
        }
      } else {
        btn.addEventListener('click', () => selectAnswer(optIdx));
      }

      optionsGrid.appendChild(btn);
    });

    // Update Explanation Card
    if (hasAnswered) {
      explanationCard.classList.remove('hidden');
      const isCorrect = userAnswers[index] === q.correct;
      explanationTitle.textContent = isCorrect ? "Correct Insight!" : "Design Rationale:";
      explanationText.textContent = q.explanation;
      nextBtn.classList.remove('hidden');
    } else {
      explanationCard.classList.add('hidden');
      nextBtn.classList.add('hidden');
    }

    // Prev Button State
    prevBtn.disabled = index === 0;
  }

  // 4. Handle Option Selection
  function selectAnswer(selectedIndex) {
    const q = questions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedIndex;

    const isCorrect = selectedIndex === q.correct;
    if (isCorrect) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    }

    // Disable all options and show feedback
    const optionButtons = optionsGrid.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correct) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('incorrect');
      }
    });

    // Show Explanation
    explanationCard.classList.remove('hidden');
    explanationTitle.textContent = isCorrect ? "Correct Insight!" : "Design Rationale:";
    explanationText.textContent = q.explanation;

    // Show Next Button
    nextBtn.classList.remove('hidden');
  }

  // 5. Navigation Buttons
  prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
      renderQuestion(currentQuestionIndex - 1);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
      renderQuestion(currentQuestionIndex + 1);
    } else {
      finishQuiz();
    }
  });

  // 6. Finish Quiz
  function finishQuiz() {
    stopTimer();
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    finalScore.textContent = score;
    finalTotal.textContent = `/ ${questions.length}`;

    // Animate circular ring
    const radius = 52;
    const circumference = 2 * Math.PI * radius; // ~326.7
    const percent = score / questions.length;
    const offset = circumference - (percent * circumference);
    setTimeout(() => {
      scoreRing.style.strokeDashoffset = offset;
    }, 150);

    // Rank Logic
    if (score >= 14) {
      rankName.textContent = "Grand Master Visual Architect";
      rankMessage.textContent = "Flawless mastery! You command the frame like Stanley Kubrick or a Renaissance master. Every leading line, depth plane, and power intersection is intuitive.";
    } else if (score >= 11) {
      rankName.textContent = "Master Composition Director";
      rankMessage.textContent = "Exceptional visual instincts! You understand visual guidance, scale tensions, and depth layers with high professional sophistication.";
    } else if (score >= 8) {
      rankName.textContent = "Journeyman Frame Sculptor";
      rankMessage.textContent = "Solid foundations! You know the core rules like the Rule of Thirds and Leading Lines well, but review subtleties like Atmospheric Perspective and Lead Room.";
    } else {
      rankName.textContent = "Apprentice Composition Explorer";
      rankMessage.textContent = "A great start on your compositional journey! Review the companion slide deck and practice spotting leading lines and thirds in movies and apps.";
    }

    // Category Breakdown
    buildCategoryBreakdown();
  }

  function buildCategoryBreakdown() {
    breakdownGrid.innerHTML = '';
    
    // Group questions by module categories
    const categories = [
      { name: "Intro & Definition (Q1-2)", indices: [0, 1] },
      { name: "Focal, Scale & Contrast (Q3-5)", indices: [2, 3, 4] },
      { name: "Lines, Hierarchy & Depth (Q6-8)", indices: [5, 6, 7] },
      { name: "Balance, Space & Rhythm (Q9-11)", indices: [8, 9, 10] },
      { name: "Thirds, Odds & Golden (Q12-14)", indices: [11, 12, 13] },
      { name: "Lead Room & Pro Tips (Q15)", indices: [14] }
    ];

    categories.forEach(cat => {
      let catScore = 0;
      cat.indices.forEach(idx => {
        if (userAnswers[idx] === questions[idx].correct) catScore++;
      });

      const item = document.createElement('div');
      item.className = 'breakdown-item';
      item.innerHTML = `
        <span class="breakdown-name">${cat.name}</span>
        <span class="breakdown-score">${catScore} / ${cat.indices.length}</span>
      `;
      breakdownGrid.appendChild(item);
    });
  }

  // 7. Retake Quiz
  restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(questions.length).fill(null);
    scoreRing.style.strokeDashoffset = 326.7;
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    startTimer();
    renderQuestion(0);
  });

  // 8. Review Modal
  reviewBtn.addEventListener('click', () => {
    buildReviewList();
    reviewModal.classList.add('active');
  });

  closeReviewBtn.addEventListener('click', () => {
    reviewModal.classList.remove('active');
  });

  reviewBackdrop.addEventListener('click', () => {
    reviewModal.classList.remove('active');
  });

  function buildReviewList() {
    reviewList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    questions.forEach((q, idx) => {
      const userAns = userAnswers[idx];
      const isCorrect = userAns === q.correct;
      const card = document.createElement('div');
      card.className = 'review-item';
      card.innerHTML = `
        <div class="review-item-q">
          <span style="color: var(--primary);">Q${idx + 1}:</span> ${q.text}
        </div>
        <div class="review-item-answer ${isCorrect ? 'user-correct' : 'user-wrong'}">
          <strong>Your Answer:</strong> ${userAns !== null ? `(${letters[userAns]}) ${q.options[userAns]}` : 'Not answered'}
          <span>${isCorrect ? '✓' : '✗'}</span>
        </div>
        ${!isCorrect ? `
          <div class="review-item-answer user-correct">
            <strong>Correct Answer:</strong> (${letters[q.correct]}) ${q.options[q.correct]}
          </div>
        ` : ''}
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
          <em>${q.explanation}</em>
        </div>
      `;
      reviewList.appendChild(card);
    });
  }

});
