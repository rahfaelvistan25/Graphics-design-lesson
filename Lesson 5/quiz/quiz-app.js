/**
 * Color Theory — Interactive Mastery Quiz Engine
 * Lesson 5: Chromatic Science, Systems, Harmonies & Branding
 */

document.addEventListener('DOMContentLoaded', () => {

  const questions = [
    {
      id: 1,
      module: "Optics & Light Physics",
      text: "In 1666, what fundamental optical principle did Sir Isaac Newton prove by passing a beam of white sunlight through a clear glass prism?",
      image: "../assets/newton_prism_light.jpg",
      options: [
        "Light travels in straight lines and cannot be bent by glass",
        "White light is not homogeneous, but a composite mixture of all visible electromagnetic wavelengths ranging from 700 nm (Red) to 380 nm (Violet)",
        "Colors are chemical dyes embedded inside the surface of glass prisms",
        "The human eye can only register two colors simultaneously"
      ],
      correct: 1,
      explanation: "Newton proved that white light is not a single entity, but an optical composite of the visible spectrum. Each hue has a distinct electromagnetic wavelength that refracts (bends) at a different angle when passing through a dense medium."
    },
    {
      id: 2,
      module: "The 12-Part Color Wheel",
      text: "On a standard 12-part artistic color wheel (such as Johannes Itten's Bauhaus model), what are the three foundational Primary colors that cannot be created by mixing other pigments?",
      image: "../assets/johannes_itten_color_wheel.png",
      options: [
        "Orange, Green, and Violet",
        "Cyan, Magenta, and Yellow",
        "Red, Yellow, and Blue (RYB traditional model)",
        "Red, Green, and Blue"
      ],
      correct: 2,
      explanation: "In the traditional subtractive artist's color wheel formalized at the Bauhaus by Johannes Itten, Red, Yellow, and Blue are the three primary building blocks from which all secondary and tertiary colors are mixed."
    },
    {
      id: 3,
      module: "Tertiary Color Naming",
      text: "How are Tertiary (Intermediate) colors created and systematically named on the color wheel?",
      image: "../assets/primary_secondary_tertiary_wheel.jpg",
      options: [
        "By mixing black and white together in varying proportions",
        "By combining equal parts of an adjacent Primary and Secondary color, always formatted with the Primary color name first (e.g., Red-Orange, Blue-Green)",
        "By randomly diluting secondary pigments with water",
        "By inverting complementary colors on a digital screen"
      ],
      correct: 1,
      explanation: "Tertiary colors sit directly between a primary and secondary color on the 12-part wheel. Standardization rules dictate that the primary color's name always comes first: Red-Orange, Yellow-Orange, Yellow-Green, Blue-Green, Blue-Violet, and Red-Violet."
    },
    {
      id: 4,
      module: "Color Dimensions (HSV)",
      text: "In digital color spaces (HSV / HSB), how does Saturation differ from Value?",
      image: "../assets/hsv_color_solid_cylinder.png",
      options: [
        "Saturation measures the temperature of light, while Value measures file size in kilobytes",
        "Saturation measures chromatic purity (from dull neutral gray at 0% to vivid purity at 100%), while Value measures luminance (from pitch black at 0% to full brightness at 100%)",
        "Saturation refers exclusively to print inks, while Value refers to screen monitors",
        "Saturation and Value are identical terms that can be used interchangeably"
      ],
      correct: 1,
      explanation: "Saturation (Chroma) measures the intensity or purity of a color—desaturating adds gray until it becomes a neutral monochrome. Value (Brightness) measures the relative lightness or darkness from pure black (0%) to maximum light (100%)."
    },
    {
      id: 5,
      module: "Altering Hue: Tints, Shades & Tones",
      text: "Which exact additive formula correctly produces a 'Tone' of a pure base hue?",
      image: "../assets/tint_tone_shade_chart.png",
      options: [
        "Pure Hue + Pure White",
        "Pure Hue + Pure Black",
        "Pure Hue + Neutral Gray (desaturating without extreme white or black shifts)",
        "Pure Hue + Complementary Hue"
      ],
      correct: 2,
      explanation: "Adding White to a hue produces a Tint (pastels). Adding Black produces a Shade (shadows/depth). Adding Gray produces a Tone, which creates subtle, sophisticated, earthy, and vintage color nuances."
    },
    {
      id: 6,
      module: "Color Temperature Dynamics",
      text: "How do Warm colors (reds, oranges) and Cool colors (blues, greens) behave optically in a two-dimensional layout or painting?",
      image: "../assets/monet_impression_sunrise_warm_cool.jpg",
      options: [
        "Warm colors recede backward into space, while cool colors pop forward toward the viewer",
        "Warm colors optically advance forward toward the viewer demanding attention, while cool colors recede backward into depth",
        "Both warm and cool colors have identical optical focal lengths and depth planes",
        "Color temperature has no effect on human visual perception"
      ],
      correct: 1,
      explanation: "Due to chromatic aberration and evolutionary biology, warm hues (longer wavelengths) appear physically closer and advance toward the eye, whereas cool hues (shorter wavelengths) appear to recede backward, creating atmospheric depth."
    },
    {
      id: 7,
      module: "Complementary Harmony",
      text: "What visual phenomenon occurs when complementary colors (located 180° directly opposite on the wheel, such as Blue and Orange) are placed directly side-by-side?",
      image: "../assets/van_gogh_night_cafe_complementary.jpg",
      options: [
        "They cancel each other out and turn into invisible gray pixels",
        "Simultaneous contrast: each hue heightens the perceived chromatic vibration and luminosity of the other, generating maximum optical energy",
        "They cause the human eye to instantly lose focus and blink",
        "They blend into a soothing, low-contrast pastel wash"
      ],
      correct: 1,
      explanation: "Complementary colors placed side-by-side generate Simultaneous Contrast. Because the eye's photoreceptors crave optical equilibrium, placing direct opposites next to each other creates kinetic visual vibration and maximum attention."
    },
    {
      id: 8,
      module: "Analogous Harmony",
      text: "What defining visual attribute characterizes an Analogous color scheme (as seen in serene landscapes or the Mastercard and BP logos)?",
      image: "../assets/slide6_harmonies_part1.svg",
      options: [
        "Using colors that sit exactly 180° opposite each other",
        "Using 3 to 5 colors that sit directly adjacent to each other on the color wheel within a 30° to 60° arc, producing organic unity and minimal visual friction",
        "Using only grayscale black, white, and silver tones",
        "Using four colors that form a perfect 90° square"
      ],
      correct: 1,
      explanation: "Analogous palettes consist of neighbor colors that share a common dominant root hue (e.g., Yellow, Yellow-Green, Green). Because there is no jarring chromatic tension, they feel harmonious, natural, and visually comfortable."
    },
    {
      id: 9,
      module: "Triadic Harmony & Modernism",
      text: "How did Dutch master Piet Mondrian use Triadic color harmony in seminal modern artworks like 'Composition with Red, Yellow, and Blue'?",
      image: "../assets/mondrian_composition_triadic.jpg",
      options: [
        "By placing three colors spaced exactly 120° apart (an equilateral triangle) on the wheel, achieving dynamic equilibrium and vibrant balance",
        "By using 12 rainbow colors arranged in concentric circles",
        "By painting realistic oil portraits using only earthy brown tones",
        "By eliminating all color and using only pencil hatching"
      ],
      correct: 0,
      explanation: "A Triadic harmony connects three colors that form an equilateral triangle on the color wheel (120° apart). Mondrian's red, yellow, and blue palette delivers supreme vibrancy while maintaining visual equilibrium."
    },
    {
      id: 10,
      module: "Monochromatic Storytelling",
      text: "During Pablo Picasso's famous 'Blue Period' (1901–1904), how did he utilize a Monochromatic palette to convey psychological storytelling?",
      image: "../assets/picasso_old_guitarist_monochromatic.jpg",
      options: [
        "He used bright yellow and neon pink to express joyful celebration",
        "By restricting the canvas to a single base blue hue modulated exclusively through tints, shades, and tones, evoking sorrow, poverty, and isolation",
        "He printed posters using 4-color CMYK silkscreen printing presses",
        "He proved that monochromatic palettes cannot convey human emotion"
      ],
      correct: 1,
      explanation: "A monochromatic scheme uses a single hue varied strictly through value and saturation. Picasso harnessed cool blue tints and deep shades to immerse the viewer in the melancholy and destitution of his subjects."
    },
    {
      id: 11,
      module: "RGB Additive Light",
      text: "Why is the digital screen RGB color model technically referred to as an 'Additive' system?",
      image: "../assets/rgb_additive_spotlights.png",
      options: [
        "Because you add chemical mineral pigments to water to make paint",
        "Because it begins in total darkness (Black = #000000) and adds photons of Red, Green, and Blue light together until full intensity combines into pure White",
        "Because it adds 10% tax onto all digital advertising assets",
        "Because each pixel adds more resolution to the file format"
      ],
      correct: 1,
      explanation: "Additive color starts in complete blackness (a turned-off screen). By adding luminous wavelengths of Red, Green, and Blue light, the overall luminosity increases until full saturation (R:255, G:255, B:255) produces pure White light."
    },
    {
      id: 12,
      module: "CMYK Subtractive Print",
      text: "In commercial four-color process printing (CMYK), why is a dedicated 'Key' Black (K) ink plate mandatory if Cyan, Magenta, and Yellow theoretically combine to make black?",
      image: "../assets/cmyk_four_color_process_plates.jpg",
      options: [
        "Because government printing laws require a black border around all posters",
        "Because real chemical ink pigments contain microscopic impurities that mix into a muddy dark brown; a dedicated black plate is needed for crisp text, deep shadow density, and cost efficiency",
        "Because Cyan, Magenta, and Yellow inks are completely transparent and cannot be seen on paper",
        "Because printing presses only have room for one single ink roller"
      ],
      correct: 1,
      explanation: "In practice, physical C+M+Y inks produce an unsatisfying muddy brownish-gray due to pigment impurities. A separate Key Black plate ensures razor-sharp text, rich shadow depth, and saves substantial ink costs."
    },
    {
      id: 13,
      module: "Color Gamut & RGB vs. CMYK",
      text: "What is a 'Color Gamut', and why do glowing electric screen neons turn dull and muted when printed on paper?",
      image: "../assets/cie_gamut_rgb_vs_cmyk.png",
      options: [
        "A gamut is the physical weight of printing paper measured in grams",
        "A gamut is the complete range of colors a system can reproduce; digital RGB light has a vastly wider gamut than physical CMYK ink on paper, making screen neons physically 'out of gamut' for print",
        "A gamut is a software bug found in early versions of Adobe Illustrator",
        "Printers intentionally desaturate colors to preserve paper quality"
      ],
      correct: 1,
      explanation: "Color Gamut is the reproducible chromatic range of a device or medium. Emissive digital RGB light has a wide gamut; reflective CMYK ink pigments on paper have a significantly narrower gamut. Glowing neons simply cannot be physically mixed with four ink dots."
    },
    {
      id: 14,
      module: "Color Psychology in Branding",
      text: "According to global brand color psychology, why do premier financial and corporate tech institutions (IBM, Chase, PayPal, Intel, LinkedIn) overwhelmingly select Blue as their core brand color?",
      image: "../assets/color_psychology_matrix.jpg",
      options: [
        "Because blue ink is the cheapest ink to purchase worldwide",
        "Because blue is scientifically proven to evoke subconscious feelings of institutional trust, security, dependability, stability, and calm logic",
        "Because red and green were declared illegal for financial institutions in 1950",
        "Because blue light increases human appetite and thirst"
      ],
      correct: 1,
      explanation: "Blue physically lowers heart rate and respiratory speed. In corporate and financial branding, it serves as a universal subconscious anchor for reliability, institutional security, technical competence, and unshakeable trust."
    },
    {
      id: 15,
      module: "The 60-30-10 Palette Rule",
      text: "According to the professional 60-30-10 palette architecture rule, how should colors be proportionally allocated across a brand website or mobile app?",
      image: "../assets/slide12_brand_palette_60_30_10.svg",
      options: [
        "60% Vibrant Red, 30% Neon Yellow, 10% Pitch Black",
        "60% Dominant Neutral Base (backgrounds/canvas), 30% Secondary Brand Structure (cards/headers), and 10% High-Contrast Accent (Call-to-Action buttons and focal alerts)",
        "Divide all five brand colors equally into 20% strips across the page",
        "60% Images, 30% Text, 10% Blank Space"
      ],
      correct: 1,
      explanation: "The 60-30-10 rule creates visual breathing room and unmistakable hierarchy: 60% neutral foundation provides stability; 30% secondary color establishes brand identity; and the 10% high-contrast accent directs the user's eye straight to critical conversion actions."
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let userAnswers = new Array(questions.length).fill(null);
  let timerSeconds = 0;
  let timerInterval = null;

  // DOM Elements
  const startScreen = document.getElementById('startScreen');
  const quizScreen = document.getElementById('quizScreen');
  const resultsScreen = document.getElementById('resultsScreen');
  
  const startQuizBtn = document.getElementById('startQuizBtn');
  const retakeQuizBtn = document.getElementById('retakeQuizBtn');
  const reviewQuestionsBtn = document.getElementById('reviewQuestionsBtn');
  
  const qCounter = document.getElementById('qCounter');
  const scoreDisplay = document.getElementById('scoreDisplay');
  const timerText = document.getElementById('timerText');
  const quizProgressBar = document.getElementById('quizProgressBar');
  
  const questionBadge = document.getElementById('questionBadge');
  const questionText = document.getElementById('questionText');
  const questionImageWrap = document.getElementById('questionImageWrap');
  const questionImage = document.getElementById('questionImage');
  const optionsGrid = document.getElementById('optionsGrid');
  
  const feedbackCard = document.getElementById('feedbackCard');
  const feedbackIcon = document.getElementById('feedbackIcon');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackExplanation = document.getElementById('feedbackExplanation');
  const nextQuestionBtn = document.getElementById('nextQuestionBtn');
  
  const scoreNum = document.getElementById('scoreNum');
  const scoreRing = document.getElementById('scoreRing');
  const rankBadge = document.getElementById('rankBadge');
  const resultMessage = document.getElementById('resultMessage');
  const breakdownGrid = document.getElementById('breakdownGrid');
  
  const reviewDrawer = document.getElementById('reviewDrawer');
  const reviewBackdrop = document.getElementById('reviewBackdrop');
  const closeReviewBtn = document.getElementById('closeReviewBtn');
  const reviewList = document.getElementById('reviewList');

  // Start Quiz Event
  if (startQuizBtn) {
    startQuizBtn.addEventListener('click', () => {
      startScreen.classList.remove('active');
      quizScreen.classList.add('active');
      currentQuestionIndex = 0;
      score = 0;
      userAnswers.fill(null);
      startTimer();
      loadQuestion(0);
    });
  }

  // Timer logic
  function startTimer() {
    timerSeconds = 0;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timerSeconds++;
      const mins = Math.floor(timerSeconds / 60);
      const secs = timerSeconds % 60;
      timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  // Load Question
  function loadQuestion(idx) {
    const q = questions[idx];
    qCounter.textContent = `Q${idx + 1} / ${questions.length}`;
    scoreDisplay.textContent = `Score: ${score}`;
    
    // Progress
    const progressPercent = ((idx) / questions.length) * 100;
    quizProgressBar.style.width = `${progressPercent}%`;
    
    questionBadge.textContent = `${q.module} • Question ${idx + 1}`;
    questionText.textContent = q.text;
    
    // Image clue
    if (q.image) {
      questionImage.src = q.image;
      questionImage.alt = `Visual clue for ${q.module}`;
      questionImageWrap.style.display = 'block';
    } else {
      questionImageWrap.style.display = 'none';
    }
    
    // Reset feedback
    feedbackCard.classList.add('hidden');
    feedbackCard.classList.remove('correct', 'incorrect');
    nextQuestionBtn.classList.add('hidden');
    
    // Populate options
    optionsGrid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[optIdx]}</span>
        <span class="option-text">${optText}</span>
      `;
      btn.addEventListener('click', () => selectAnswer(optIdx, btn));
      optionsGrid.appendChild(btn);
    });
  }

  // Select Answer
  function selectAnswer(selectedIdx, btnElement) {
    const q = questions[currentQuestionIndex];
    if (userAnswers[currentQuestionIndex] !== null) return; // already answered
    
    userAnswers[currentQuestionIndex] = selectedIdx;
    const isCorrect = selectedIdx === q.correct;
    if (isCorrect) score++;

    // Freeze all option buttons
    const allBtns = optionsGrid.querySelectorAll('.option-btn');
    allBtns.forEach((b, i) => {
      b.disabled = true;
      if (i === q.correct) {
        b.classList.add('correct');
      } else if (i === selectedIdx && !isCorrect) {
        b.classList.add('incorrect');
      }
    });

    // Show feedback card
    feedbackCard.classList.remove('hidden');
    feedbackCard.classList.add(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      feedbackIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
      feedbackTitle.textContent = 'Correct! Outstanding Color Mastery';
    } else {
      feedbackIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
      feedbackTitle.textContent = 'Incorrect Insight';
    }
    feedbackExplanation.textContent = q.explanation;
    
    nextQuestionBtn.classList.remove('hidden');
    nextQuestionBtn.textContent = currentQuestionIndex === questions.length - 1 ? 'View Final Results →' : 'Next Question →';
  }

  // Next Question Button
  if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener('click', () => {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
      } else {
        finishQuiz();
      }
    });
  }

  // Finish Quiz & Show Results
  function finishQuiz() {
    stopTimer();
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    scoreNum.textContent = score;
    const percentage = Math.round((score / questions.length) * 100);
    
    // Animate circular score ring (perimeter = 2 * pi * 54 = 339.29)
    const circumference = 339.29;
    const offset = circumference - (percentage / 100) * circumference;
    if (scoreRing) {
      scoreRing.style.strokeDashoffset = offset;
      if (percentage >= 80) scoreRing.style.stroke = '#a855f7';
      else if (percentage >= 60) scoreRing.style.stroke = '#3b82f6';
      else scoreRing.style.stroke = '#ef4444';
    }

    // Rank & Message
    let rank = '';
    let msg = '';
    if (score >= 14) {
      rank = 'Grand Master Colorist \u{1F3C6}';
      msg = 'Flawless chromatic mastery! You possess deep command of optical light physics, Bauhaus color wheels, HSV dimensions, Pantone pre-press production, and the 60-30-10 palette architecture.';
    } else if (score >= 11) {
      rank = 'Senior Brand Art Director \u{2728}';
      msg = 'Exceptional performance! You demonstrate thorough mastery of color harmonies, RGB vs CMYK printing gamuts, and brand psychology semiotics.';
    } else if (score >= 8) {
      rank = 'Apprentice Visual Designer \u{1F3A8}';
      msg = 'Good working foundation! Review the pre-press CMYK gamut limitations and the 60-30-10 palette proportion rule to elevate your skills.';
    } else {
      rank = 'Color Theory Explorer \u{1F50D}';
      msg = 'Valuable learning experience. Review Lesson 5 slides on the 12-part wheel, HSV dimensions, and complementary vs. analogous harmonies, then retake the challenge!';
    }
    
    if (rankBadge) rankBadge.textContent = rank;
    if (resultMessage) resultMessage.textContent = msg;

    // Build Category Breakdown
    buildBreakdown();
  }

  function buildBreakdown() {
    if (!breakdownGrid) return;
    breakdownGrid.innerHTML = '';
    
    const categories = {};
    questions.forEach((q, idx) => {
      const cat = q.module;
      if (!categories[cat]) categories[cat] = { total: 0, correct: 0 };
      categories[cat].total++;
      if (userAnswers[idx] === q.correct) categories[cat].correct++;
    });

    Object.keys(categories).forEach(catName => {
      const c = categories[catName];
      const pct = Math.round((c.correct / c.total) * 100);
      const card = document.createElement('div');
      card.className = 'breakdown-item';
      card.innerHTML = `
        <div class="breakdown-cat-header">
          <span class="breakdown-title">${catName}</span>
          <span class="breakdown-score">${c.correct}/${c.total} (${pct}%)</span>
        </div>
        <div class="breakdown-bar-track">
          <div class="breakdown-bar-fill" style="width: ${pct}%; background: ${pct >= 70 ? '#a855f7' : '#ef4444'};"></div>
        </div>
      `;
      breakdownGrid.appendChild(card);
    });
  }

  // Retake Quiz
  if (retakeQuizBtn) {
    retakeQuizBtn.addEventListener('click', () => {
      resultsScreen.classList.remove('active');
      startScreen.classList.add('active');
    });
  }

  // Review Drawer
  if (reviewQuestionsBtn) {
    reviewQuestionsBtn.addEventListener('click', () => {
      openReviewDrawer();
    });
  }

  function openReviewDrawer() {
    if (!reviewDrawer || !reviewBackdrop) return;
    reviewList.innerHTML = '';
    
    questions.forEach((q, idx) => {
      const userAns = userAnswers[idx];
      const isCorrect = userAns === q.correct;
      const letters = ['A', 'B', 'C', 'D'];

      const item = document.createElement('div');
      item.className = `review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}`;
      item.innerHTML = `
        <div class="review-q-header">
          <span class="review-q-num">Q${idx + 1} &bull; ${q.module}</span>
          <span class="review-status-badge ${isCorrect ? 'badge-correct' : 'badge-incorrect'}">${isCorrect ? '✔ Correct' : '✖ Incorrect'}</span>
        </div>
        <p class="review-q-text">${q.text}</p>
        <div class="review-answers-box">
          <p class="review-ans"><strong>Your Answer:</strong> ${userAns !== null ? `${letters[userAns]}. ${q.options[userAns]}` : 'Unanswered'}</p>
          ${!isCorrect ? `<p class="review-ans correct-ans"><strong>Correct Answer:</strong> ${letters[q.correct]}. ${q.options[q.correct]}</p>` : ''}
        </div>
        <div class="review-explanation">
          <strong>Key Takeaway:</strong> ${q.explanation}
        </div>
      `;
      reviewList.appendChild(item);
    });

    reviewDrawer.classList.add('open');
    reviewBackdrop.classList.add('active');
  }

  function closeReviewDrawer() {
    if (reviewDrawer && reviewBackdrop) {
      reviewDrawer.classList.remove('open');
      reviewBackdrop.classList.remove('active');
    }
  }

  if (closeReviewBtn) closeReviewBtn.addEventListener('click', closeReviewDrawer);
  if (reviewBackdrop) reviewBackdrop.addEventListener('click', closeReviewDrawer);

});
