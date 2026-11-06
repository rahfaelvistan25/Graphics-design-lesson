/**
 * Design Styles Across the Decades — Interactive Mastery Quiz Engine
 * Lesson 4: 100 Years of Graphic Design (1920s - 2020s)
 */

document.addEventListener('DOMContentLoaded', () => {

  const questions = [
    {
      id: 1,
      module: "Decade Foundations: Design Cycles",
      text: "According to visual design history, how does the 'Pendulum of Design' explain why movements shift dramatically from one decade to the next?",
      image: "../assets/slide1_intro.svg",
      options: [
        "Design styles change purely at random without any cultural or economic influence",
        "Visual culture continuously oscillates between periods of high ornamentation/expression and periods of austere rationalism/minimalism as each generation rebels against the previous one",
        "Design styles are determined solely by government mandates passed every ten years",
        "Software developers dictate all typography trends based on programming language syntax"
      ],
      correct: 1,
      explanation: "Design history is an aesthetic pendulum. When an era becomes overwhelmingly ornamental or chaotic (like 1920s Deco, 1960s Psychedelia, or 1980s Memphis), the succeeding generation reacts with rigorous order and minimalism (like 1930s WPA, 1950s/60s Swiss Style, or 2010s Flat Design)."
    },
    {
      id: 2,
      module: "1920s: Art Deco & The Jazz Age",
      text: "Which combination of visual motifs and cultural themes defines the 1920s Art Deco movement?",
      image: "../assets/1920s_chrysler_art_deco.jpg",
      options: [
        "Distressed typewriter fonts, safety pins, and torn newspaper collages",
        "Geometric symmetry, stepped ziggurats, radiating sunbursts, metallic gold accents, and machine-age streamline speed",
        "Earthy avocado greens, bubble fonts, and multi-line rainbow stripes",
        "Aqua glass buttons, brushed aluminum textures, and drop shadows"
      ],
      correct: 1,
      explanation: "Art Deco (crystallized at the 1925 Paris Exposition) celebrated the exuberance of the post-WWI Machine Age through geometric symmetry, stepped pyramids (ziggurats), aerodynamic speed curves, and opulent metallic gold, brass, and silver."
    },
    {
      id: 3,
      module: "1920s: Cassandre & Travel Posters",
      text: "What revolutionary technique did poster master A.M. Cassandre introduce in seminal 1920s posters like 'Nord Express' and 'L'Étoile du Nord'?",
      image: "../assets/1920s_royal_mail_art_deco.jpg",
      options: [
        "Hiding text in microscopic disclaimers at the bottom of the canvas",
        "Synthesizing monumental architecture and locomotive mechanics with typography integrated directly into the structural geometry",
        "Painting ultra-realistic oil portraits of locomotive passengers with high photographic grain",
        "Using neon squiggles and clashing plastic laminates to mimic arcade cabinets"
      ],
      correct: 1,
      explanation: "Cassandre treated posters as monumental architectural statements. He pioneered typography constructed with mathematical geometric tools, making letters an inseparable structural component of the train or ocean liner rather than an afterthought."
    },
    {
      id: 4,
      module: "1930s: Great Depression & WPA",
      text: "What primary printing technique defined the iconic visual aesthetic of the U.S. Works Progress Administration (WPA) Federal Art Project?",
      image: "../assets/1930s_wpa_work_pays.jpg",
      options: [
        "12-color offset lithography with glossy varnish coatings",
        "Silkscreen serigraphy using 3 to 4 bold, flat, opaque color separations on heavy cardstock",
        "Digital laser inkjet printing with high-DPI stochastic screening",
        "Hand-carved marble bas-relief engravings"
      ],
      correct: 1,
      explanation: "During the Great Depression, the WPA Federal Art Project operated nationwide screen-printing poster shops. Due to limited budgets, artists mastered silkscreen serigraphy using just 3 or 4 flat opaque colors, resulting in bold, graphic, high-impact public awareness and conservation posters."
    },
    {
      id: 5,
      module: "1930s: Lester Beall & REA",
      text: "Why were Lester Beall's 1930s Rural Electrification Administration (REA) posters considered a watershed triumph in American modernism?",
      image: "../assets/1930s_wpa_see_america.jpg",
      options: [
        "They used complex academic paragraphs of text that only college professors could decipher",
        "They combined European avant-garde photomontage, dynamic arrows, and stark geometric symbols to communicate instantaneously to rural, non-literate populations",
        "They were printed entirely in microscopic grayscale to save ink costs",
        "They rejected all photography in favor of hand-drawn cartoon comic strips"
      ],
      correct: 1,
      explanation: "Lester Beall recognized that millions of rural Americans during the Depression had low literacy. By marrying crisp photographic cutouts with universal symbols (faucets, lightbulbs, power pylons) and patriotic diagonal stripes, his message reached everyone in less than 2 seconds."
    },
    {
      id: 6,
      module: "1940s: WWII Wartime Propaganda",
      text: "In J. Howard Miller's iconic 1943 Westinghouse poster ('We Can Do It!'), what was the primary visual and psychological objective?",
      image: "../assets/1940s_we_can_do_it.jpg",
      options: [
        "To advertise home vacuum cleaners and household consumer appliances to suburban housewives",
        "To boost factory morale, counter industrial absenteeism, and recruit women into essential wartime defense manufacturing",
        "To promote a Hollywood musical comedy premiering on Broadway",
        "To protest against the introduction of standardized factory work uniforms"
      ],
      correct: 1,
      explanation: "Commissioned by the Westinghouse War Production Co-Ordinating Committee, Miller's 'We Can Do It!' (later celebrated globally as Rosie the Riveter) rallied civilian factory workers, symbolizing female strength, patriotic duty, and wartime manufacturing resolve."
    },
    {
      id: 7,
      module: "1940s: Soviet Constructivism & War",
      text: "Which visual compositional device was most famously weaponized by Soviet Constructivist and WWII agitprop designers like El Lissitzky and Rodchenko?",
      image: "../assets/1940s_soviet_red_wedge.jpg",
      options: [
        "Soft pastel watercolor gradients with floral symmetrical borders",
        "Aggressive 45-degree diagonal thrust vectors, sharp geometric wedges, and stark high-contrast red, white, and black palettes",
        "Centrally balanced horizontal still-life arrangements of fruit and flowers",
        "Translucent glassmorphic blur layers with floating drop shadows"
      ],
      correct: 1,
      explanation: "Soviet Constructivism pioneered the dynamic diagonal wedge ('Beat the Whites with the Red Wedge') to convey unstoppable kinetic revolution, urgency, and mechanical power, using primary red, stark white, and deep black."
    },
    {
      id: 8,
      module: "1950s: Saul Bass & Film Graphics",
      text: "How did Saul Bass revolutionize graphic design and movie titles during the 1950s with classics like 'Vertigo' and 'The Man with the Golden Arm'?",
      image: "../assets/1950s_saul_bass_vertigo.jpg",
      options: [
        "By replacing literal movie star portraits with cut-paper geometric metaphors and kinetic opening sequence animation",
        "By writing 500-word synopses on movie posters in tiny cursive script",
        "By printing film posters on metallic foil that had to be viewed with 3D glasses",
        "By painting hyper-realistic renaissance oil portraits of Alfred Hitchcock"
      ],
      correct: 0,
      explanation: "Before Saul Bass, film posters were dull collages of actors' faces. Bass revolutionized Hollywood by distilling the film's core psychological premise into a single, punchy, jagged cut-paper visual metaphor (like the disembodied spiraling silhouette in Vertigo)."
    },
    {
      id: 9,
      module: "1950s: Corporate Modernism",
      text: "What famous philosophy guided Paul Rand, creator of the timeless corporate identities for IBM, ABC, and UPS?",
      image: "../assets/1950s_paul_rand_ibm_rebus.jpg",
      options: [
        "\"Add as many decorative ribbons and drop shadows as the canvas will hold.\"",
        "\"Don't try to be original, just try to be good — design is the silent ambassador of your brand.\"",
        "\"Always change your company logo every 6 months to stay trendy.\"",
        "\"Never use geometric shapes when you can draw freehand floral patterns.\""
      ],
      correct: 1,
      explanation: "Paul Rand championed Modernism in corporate America. He argued that great design should not strive for superficial novelty or trendy gimmicks, but for clarity, timelessness, wit, and functional geometric simplicity."
    },
    {
      id: 10,
      module: "1960s: Swiss Style (International Style)",
      text: "What are the core technical foundations of the Swiss International Typographic Style perfected by Josef Müller-Brockmann and Armin Hofmann?",
      image: "../assets/1960s_swiss_muller_brockmann.jpg",
      options: [
        "Melting distorted hand-drawn letters, day-glo neon gradients, and symmetrical borders",
        "Rigid modular mathematical grids, asymmetrical layouts, objective black-and-white photography, and flush-left rag-right sans-serif typography (Helvetica)",
        "Airbrushed metallic chrome letters, laser grids, and synthwave sunset horizons",
        "Torn paper collages, safety pins, and ransom-note cutouts"
      ],
      correct: 1,
      explanation: "The Swiss Style believed design should be an objective science of visual communication. By employing strict modular grid systems, flush-left un-justified typography (Neue Haas Grotesk/Helvetica), and stark white space, they achieved absolute clarity."
    },
    {
      id: 11,
      module: "1960s: Psychedelic Counterculture",
      text: "Why did 1960s psychedelic rock poster artists (Wes Wilson, Victor Moscoso) deliberately design typography that was difficult to read?",
      image: "../assets/1960s_psychedelic_sun.jpg",
      options: [
        "Because their printing presses were broken and smeared the ink",
        "To create retinal optical vibration, mimic hallucinogenic experiences, and reward the counterculture audience who took the time to decipher the insider message",
        "To comply with legal bans on concert advertising in San Francisco",
        "Because sans-serif fonts like Helvetica had been declared illegal by the government"
      ],
      correct: 1,
      explanation: "Wes Wilson and Victor Moscoso weaponized maximum retinal stimulation. By pairing vibrating complementary colors (electric violet against lime green) and bending letterforms into swirling waves, reading the poster became an active sensory trip that excluded 'straight' mainstream authority."
    },
    {
      id: 12,
      module: "1970s: Punk DIY Graphic Design",
      text: "What DIY production technique gave 1970s punk graphic design (such as Jamie Reid's artwork for the Sex Pistols) its raw, authentic power?",
      image: "../assets/1970s_punk_fanzines.jpg",
      options: [
        "High-end 3D ray-traced computer graphics from Silicon Valley workstations",
        "Cheap black-and-white Xerox photocopying, newspaper headline cutout ransom-letters, safety pins, and torn paper collage",
        "Intricate Japanese woodblock printing on handmade rice paper",
        "Brushed aluminum embossing and glossy enamel varnish"
      ],
      correct: 1,
      explanation: "Punk rejected the expensive, polished corporate advertising machinery. Armed with scissors, glue sticks, and 5-cent Xerox machines, designers like Jamie Reid created an immediate anti-aesthetic vernacular that anyone with no budget could replicate."
    },
    {
      id: 13,
      module: "1980s: Memphis Milano & Excess",
      text: "Founded in 1981 by Ettore Sottsass, what was the artistic objective of the Milan-based Memphis Group?",
      image: "../assets/1980s_memphis_milano.jpg",
      options: [
        "To enforce strict adherence to black-and-white Swiss Bauhaus functionalism",
        "To explode conventional 'good taste' through vibrant pastel and neon colors, asymmetrical geometric squiggles, terrazzo patterns, and cheap plastic laminates",
        "To design camouflage uniforms for military combat units",
        "To ban all consumer electronics from modern architecture"
      ],
      correct: 1,
      explanation: "The Memphis Group protested against the cold, serious, grey-and-black minimalism of 1970s design. Their radical furniture, textiles, and graphics embraced squiggles, polka dots, clashing colors, and plastic laminates, defining the vibrant visual language of MTV and 80s pop culture."
    },
    {
      id: 14,
      module: "1990s: Grunge & Digital Deconstruction",
      text: "Why was David Carson's art direction of 'Ray Gun' magazine in the 1990s hailed as a revolutionary turning point in graphic design?",
      image: "../assets/1990s_grunge_nirvana_poster.png",
      options: [
        "He enforced rigid 12-column Swiss grids and made sure all fonts were set in 10pt Times New Roman",
        "He shattered the traditional rules of editorial grid and legibility, overlapping distressed type, slicing letterforms, and treating typography as pure emotional texture",
        "He introduced the first animated GIF banners to print magazines",
        "He proved that print magazines should only be published in black-and-white"
      ],
      correct: 1,
      explanation: "Armed with early versions of Macintosh desktop publishing and QuarkXPress, David Carson famously declared that 'legibility does not equal communication.' His deliberate disregard for margins, overlapping words, and distressed textures captured the raw emotional ethos of the grunge decade."
    },
    {
      id: 15,
      module: "2000s–2020s: Digital Paradigms",
      text: "How did digital UI design evolve from the 2000s skeuomorphic era to 2010s Flat Design, and finally to 2020s Neo-Brutalism & Sustainability?",
      image: "../assets/2000s_apple_ipod_nano_colors.jpg",
      options: [
        "Interfaces became increasingly complex with 3D animation until keyboards were completely phased out",
        "Design moved from physical imitation (leather, glass gloss, reflections) to flat functional surfaces, and now to raw high-contrast black borders, acid tones, and eco-minimalist ink reduction",
        "Modern websites now use exclusively 1920s Art Deco hand-lettering and gold leaf printing",
        "Screen graphics completely eliminated color in favor of monochrome command-line terminals"
      ],
      correct: 1,
      explanation: "Early touchscreens required skeuomorphism (Apple Aqua, leather textures) to teach users how digital buttons worked. By the 2010s, users understood touch, sparking the Flat & Material Design revolution. In the 2020s, designers rebelled against bland corporate templates with Neo-Brutalism (heavy borders, raw layout honesty) and eco-conscious minimalism."
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
    questionBadge.textContent = `${q.module} · Question ${index + 1}`;
    questionText.textContent = q.text;
    questionImage.src = q.image;
    questionImage.alt = `Illustration clue for question ${index + 1}: ${q.module}`;

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
      explanationTitle.textContent = isCorrect ? "Correct Historical Insight!" : "Design Movement Rationale:";
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

    // Lock options and show feedback
    const optionBtns = optionsGrid.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correct) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('incorrect');
      }
    });

    // Reveal explanation
    explanationCard.classList.remove('hidden');
    explanationTitle.textContent = isCorrect ? "Correct Historical Insight!" : "Design Movement Rationale:";
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

    // Animate circular ring (r=52 -> 326.7)
    const radius = 52;
    const circumference = 2 * Math.PI * radius;
    const percent = score / questions.length;
    const offset = circumference - (percent * circumference);
    setTimeout(() => {
      scoreRing.style.strokeDashoffset = offset;
    }, 150);

    // Rank Logic
    if (score >= 14) {
      rankName.textContent = "Grand Master of Visual History";
      rankMessage.textContent = "Flawless historical mastery! You command the full 100-year evolution from Art Deco to Neo-Futurism with museum-curator precision.";
    } else if (score >= 11) {
      rankName.textContent = "Senior Design Historian & Stylist";
      rankMessage.textContent = "Exceptional historical instincts! You have a profound command of typography revolutions, socio-economic forces, and graphic paradigms.";
    } else if (score >= 8) {
      rankName.textContent = "Journeyman Decade Archivist";
      rankMessage.textContent = "Solid foundations! You know the major movements well, but take a moment to review nuances like Lester Beall's REA posters and Swiss Grid philosophy.";
    } else {
      rankName.textContent = "Apprentice Style Explorer";
      rankMessage.textContent = "A great start on your journey across the decades! Revisit the companion interactive slide deck to study the iconic posters and movements.";
    }

    // Category Breakdown
    buildCategoryBreakdown();
  }

  function buildCategoryBreakdown() {
    breakdownGrid.innerHTML = '';
    
    // Group questions by decade eras
    const categories = [
      { name: "Cycles & 1920s Art Deco (Q1-3)", indices: [0, 1, 2] },
      { name: "1930s Depression & WPA (Q4-5)", indices: [3, 4] },
      { name: "1940s WWII & Soviet (Q6-7)", indices: [5, 6] },
      { name: "1950s Midcentury Modern (Q8-9)", indices: [7, 8] },
      { name: "1960s Swiss & Psychedelic (Q10-11)", indices: [9, 10] },
      { name: "1970s Punk & 1980s Neon (Q12-13)", indices: [11, 12] },
      { name: "1990s Grunge to 2020s Neo (Q14-15)", indices: [13, 14] }
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

  // 8. Review Modal Logic
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
      const userChoice = userAnswers[idx];
      const isCorrect = userChoice === q.correct;

      const item = document.createElement('div');
      item.className = 'review-item';
      item.innerHTML = `
        <div class="review-item-q">
          <span style="color: ${isCorrect ? '#34d399' : '#f43f5e'}; font-weight: bold; margin-right: 6px;">
            ${isCorrect ? '✓' : '✗'}
          </span>
          Q${idx + 1}: ${q.text}
        </div>
        <div class="review-item-answer ${isCorrect ? 'user-correct' : 'user-wrong'}">
          <strong>Your Answer:</strong> ${userChoice !== null ? `${letters[userChoice]}) ${q.options[userChoice]}` : 'Unanswered'}
        </div>
        ${!isCorrect ? `
          <div class="review-item-answer user-correct">
            <strong>Correct Answer:</strong> ${letters[q.correct]}) ${q.options[q.correct]}
          </div>
        ` : ''}
        <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 4px; line-height: 1.45;">
          <strong>Historical Note:</strong> ${q.explanation}
        </div>
      `;
      reviewList.appendChild(item);
    });
  }

});
