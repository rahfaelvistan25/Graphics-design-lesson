/**
 * Principles of Design — Quiz App Logic
 * 15 Multiple-Choice Questions based on the lesson content
 */

// Helper: generate an inline SVG data URI for each question's visual clue
function makeSvgDataUri(svgMarkup) {
  return 'data:image/svg+xml,' + encodeURIComponent(svgMarkup.trim());
}

const questionImages = [
  // Q1 – Balance: seesaw / balanced shapes
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg1)"/><line x1="250" y1="350" x2="550" y2="350" stroke="#38bdf8" stroke-width="4"/><polygon points="400,350 380,380 420,380" fill="#38bdf8"/><rect x="260" y="290" width="80" height="60" rx="8" fill="#a855f7" opacity="0.8"/><rect x="460" y="290" width="80" height="60" rx="8" fill="#a855f7" opacity="0.8"/><circle cx="300" cy="260" r="20" fill="#38bdf8" opacity="0.6"/><circle cx="500" cy="260" r="20" fill="#38bdf8" opacity="0.6"/><text x="400" y="480" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="28" font-weight="bold">BALANCE</text></svg>`),
  // Q2 – Symmetrical Balance: mirrored controller
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg2)"/><line x1="400" y1="100" x2="400" y2="500" stroke="#38bdf8" stroke-width="2" stroke-dasharray="10,6" opacity="0.5"/><rect x="200" y="200" width="160" height="200" rx="40" fill="#1e293b" stroke="#a855f7" stroke-width="3"/><rect x="440" y="200" width="160" height="200" rx="40" fill="#1e293b" stroke="#a855f7" stroke-width="3"/><circle cx="280" cy="280" r="25" fill="none" stroke="#38bdf8" stroke-width="2"/><circle cx="520" cy="280" r="25" fill="none" stroke="#38bdf8" stroke-width="2"/><rect x="255" y="340" width="50" height="8" rx="4" fill="#38bdf8" opacity="0.6"/><rect x="495" y="340" width="50" height="8" rx="4" fill="#38bdf8" opacity="0.6"/><text x="400" y="490" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="24" font-weight="bold">SYMMETRICAL</text></svg>`),
  // Q3 – Unity: connected grid
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg3)"/><rect x="180" y="150" width="130" height="100" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/><rect x="335" y="150" width="130" height="100" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/><rect x="490" y="150" width="130" height="100" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/><rect x="180" y="280" width="130" height="100" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/><rect x="335" y="280" width="130" height="100" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/><rect x="490" y="280" width="130" height="100" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/><line x1="310" y1="200" x2="335" y2="200" stroke="#10b981" stroke-width="2" opacity="0.5"/><line x1="465" y1="200" x2="490" y2="200" stroke="#10b981" stroke-width="2" opacity="0.5"/><line x1="310" y1="330" x2="335" y2="330" stroke="#10b981" stroke-width="2" opacity="0.5"/><line x1="465" y1="330" x2="490" y2="330" stroke="#10b981" stroke-width="2" opacity="0.5"/><text x="400" y="470" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="28" font-weight="bold">UNITY</text></svg>`),
  // Q4 – Contrast: light vs dark
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg4)"/><rect x="150" y="150" width="220" height="300" rx="16" fill="#0f172a" stroke="#334155" stroke-width="2"/><rect x="430" y="150" width="220" height="300" rx="16" fill="#f0f4f8" stroke="#334155" stroke-width="2"/><circle cx="260" cy="300" r="50" fill="#f0f4f8"/><circle cx="540" cy="300" r="50" fill="#0f172a"/><text x="260" y="308" text-anchor="middle" fill="#0f172a" font-family="sans-serif" font-size="20" font-weight="bold">A</text><text x="540" y="308" text-anchor="middle" fill="#f0f4f8" font-family="sans-serif" font-size="20" font-weight="bold">A</text><text x="400" y="520" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="28" font-weight="bold">CONTRAST</text></svg>`),
  // Q5 – Emphasis: spotlight focal point
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient><radialGradient id="spot" cx="0.5" cy="0.5" r="0.35"><stop offset="0%" stop-color="#fbbf24" stop-opacity="0.3"/><stop offset="100%" stop-color="transparent"/></radialGradient></defs><rect width="800" height="600" fill="url(#bg5)"/><circle cx="400" cy="280" r="200" fill="url(#spot)"/><circle cx="250" cy="350" r="30" fill="#334155" opacity="0.5"/><circle cx="550" cy="350" r="30" fill="#334155" opacity="0.5"/><circle cx="300" cy="220" r="25" fill="#334155" opacity="0.5"/><circle cx="500" cy="220" r="25" fill="#334155" opacity="0.5"/><circle cx="400" cy="280" r="45" fill="#f59e0b" opacity="0.9"/><polygon points="400,250 410,270 430,275 415,290 420,310 400,300 380,310 385,290 370,275 390,270" fill="#fbbf24"/><text x="400" y="480" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="28" font-weight="bold">EMPHASIS</text></svg>`),
  // Q6 – Repetition: repeated icons
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg6)"/><rect x="200" y="160" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="290" y="160" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="380" y="160" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="470" y="160" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="560" y="160" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="200" y="260" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="290" y="260" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="380" y="260" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="470" y="260" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="560" y="260" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="200" y="360" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="290" y="360" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="380" y="360" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="470" y="360" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><rect x="560" y="360" width="60" height="60" rx="10" fill="#818cf8" opacity="0.7"/><text x="400" y="500" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="28" font-weight="bold">REPETITION</text></svg>`),
  // Q7 – Pattern: tessellation grid
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg7)"/><g opacity="0.6"><polygon points="300,160 350,200 300,240 250,200" fill="none" stroke="#ec4899" stroke-width="2"/><polygon points="400,160 450,200 400,240 350,200" fill="none" stroke="#ec4899" stroke-width="2"/><polygon points="500,160 550,200 500,240 450,200" fill="none" stroke="#ec4899" stroke-width="2"/><polygon points="250,240 300,280 250,320 200,280" fill="none" stroke="#a855f7" stroke-width="2"/><polygon points="350,240 400,280 350,320 300,280" fill="none" stroke="#a855f7" stroke-width="2"/><polygon points="450,240 500,280 450,320 400,280" fill="none" stroke="#a855f7" stroke-width="2"/><polygon points="550,240 600,280 550,320 500,280" fill="none" stroke="#a855f7" stroke-width="2"/><polygon points="300,320 350,360 300,400 250,360" fill="none" stroke="#ec4899" stroke-width="2"/><polygon points="400,320 450,360 400,400 350,360" fill="none" stroke="#ec4899" stroke-width="2"/><polygon points="500,320 550,360 500,400 450,360" fill="none" stroke="#ec4899" stroke-width="2"/></g><text x="400" y="490" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="28" font-weight="bold">PATTERN</text></svg>`),
  // Q8 – Rhythm: musical bars
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg8)"/><rect x="180" y="320" width="40" height="80" rx="6" fill="#38bdf8" opacity="0.6"/><rect x="240" y="260" width="40" height="140" rx="6" fill="#818cf8" opacity="0.7"/><rect x="300" y="300" width="40" height="100" rx="6" fill="#38bdf8" opacity="0.6"/><rect x="360" y="200" width="40" height="200" rx="6" fill="#a855f7" opacity="0.8"/><rect x="420" y="280" width="40" height="120" rx="6" fill="#38bdf8" opacity="0.6"/><rect x="480" y="240" width="40" height="160" rx="6" fill="#818cf8" opacity="0.7"/><rect x="540" y="310" width="40" height="90" rx="6" fill="#38bdf8" opacity="0.6"/><rect x="600" y="220" width="40" height="180" rx="6" fill="#a855f7" opacity="0.8"/><text x="400" y="490" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="28" font-weight="bold">RHYTHM</text></svg>`),
  // Q9 – Movement: flowing curves
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg9" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg9)"/><path d="M100,350 C200,150 300,450 400,250 S600,350 700,200" fill="none" stroke="#38bdf8" stroke-width="3" opacity="0.7"/><path d="M100,380 C200,180 300,480 400,280 S600,380 700,230" fill="none" stroke="#a855f7" stroke-width="3" opacity="0.5"/><path d="M100,410 C200,210 300,510 400,310 S600,410 700,260" fill="none" stroke="#ec4899" stroke-width="3" opacity="0.3"/><polygon points="700,200 690,210 695,195" fill="#38bdf8" opacity="0.7"/><circle cx="400" cy="250" r="8" fill="#38bdf8"/><circle cx="250" cy="310" r="5" fill="#a855f7" opacity="0.6"/><circle cx="550" cy="280" r="5" fill="#a855f7" opacity="0.6"/><text x="400" y="500" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="28" font-weight="bold">MOVEMENT</text></svg>`),
  // Q10 – Proportion / Golden Ratio: spiral
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg10" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg10)"/><rect x="200" y="120" width="400" height="360" fill="none" stroke="#334155" stroke-width="1"/><line x1="447" y1="120" x2="447" y2="480" stroke="#38bdf8" stroke-width="1" opacity="0.4"/><line x1="200" y1="342" x2="600" y2="342" stroke="#38bdf8" stroke-width="1" opacity="0.4"/><path d="M447,342 Q447,200 340,180 Q220,160 210,280 Q200,420 350,460 Q480,490 520,370" fill="none" stroke="#f59e0b" stroke-width="2.5" opacity="0.8"/><text x="400" y="540" text-anchor="middle" fill="#f59e0b" font-family="sans-serif" font-size="22" font-weight="bold">1 : 1.618</text></svg>`),
  // Q11 – Harmony: colour swatches
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg11" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg11)"/><rect x="200" y="180" width="80" height="240" rx="10" fill="#1e3a5f"/><rect x="300" y="180" width="80" height="240" rx="10" fill="#1e5f8a"/><rect x="400" y="180" width="80" height="240" rx="10" fill="#38bdf8"/><rect x="500" y="180" width="80" height="240" rx="10" fill="#7dd3fc"/><rect x="200" y="430" width="380" height="10" rx="5" fill="#38bdf8" opacity="0.3"/><text x="400" y="500" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="28" font-weight="bold">HARMONY</text></svg>`),
  // Q12 – Monochromatic: banking dashboard
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg12" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg12)"/><rect x="150" y="130" width="500" height="340" rx="16" fill="#0f1729" stroke="#1e3a5f" stroke-width="2"/><rect x="170" y="150" width="460" height="40" rx="8" fill="#1e293b"/><circle cx="190" cy="170" r="8" fill="#38bdf8" opacity="0.5"/><rect x="210" y="164" width="60" height="12" rx="4" fill="#38bdf8" opacity="0.3"/><rect x="170" y="210" width="140" height="80" rx="8" fill="#1e293b" stroke="#1e3a5f" stroke-width="1"/><rect x="330" y="210" width="140" height="80" rx="8" fill="#1e293b" stroke="#1e3a5f" stroke-width="1"/><rect x="490" y="210" width="140" height="80" rx="8" fill="#1e293b" stroke="#1e3a5f" stroke-width="1"/><rect x="170" y="310" width="460" height="140" rx="8" fill="#1e293b" stroke="#1e3a5f" stroke-width="1"/><rect x="190" y="340" width="100" height="8" rx="4" fill="#38bdf8" opacity="0.4"/><rect x="190" y="360" width="80" height="8" rx="4" fill="#38bdf8" opacity="0.25"/><text x="400" y="530" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="22" font-weight="bold">MONOCHROMATIC</text></svg>`),
  // Q13 – Variety: colourful diverse shapes
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg13" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg13)"/><circle cx="250" cy="220" r="50" fill="#f43f5e" opacity="0.7"/><rect x="370" y="180" width="90" height="90" rx="12" fill="#38bdf8" opacity="0.7" transform="rotate(15 415 225)"/><polygon points="550,180 600,280 500,280" fill="#f59e0b" opacity="0.7"/><ellipse cx="300" cy="380" rx="70" ry="40" fill="#a855f7" opacity="0.6"/><rect x="430" y="340" width="120" height="60" rx="30" fill="#10b981" opacity="0.7"/><polygon points="220,320 240,350 200,350" fill="#ec4899" opacity="0.5"/><circle cx="560" cy="370" r="30" fill="#818cf8" opacity="0.5"/><text x="400" y="500" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="28" font-weight="bold">VARIETY</text></svg>`),
  // Q14 – Elements + Principles formula
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg14" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg14)"/><rect x="120" y="220" width="200" height="80" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="220" y="268" text-anchor="middle" fill="#38bdf8" font-family="sans-serif" font-size="20" font-weight="bold">ELEMENTS</text><text x="355" y="270" text-anchor="middle" fill="#f59e0b" font-family="sans-serif" font-size="36" font-weight="bold">+</text><rect x="390" y="220" width="200" height="80" rx="14" fill="#1e293b" stroke="#a855f7" stroke-width="2"/><text x="490" y="268" text-anchor="middle" fill="#a855f7" font-family="sans-serif" font-size="20" font-weight="bold">PRINCIPLES</text><text x="625" y="270" text-anchor="middle" fill="#f59e0b" font-family="sans-serif" font-size="36" font-weight="bold">=</text><rect x="660" y="210" width="120" height="100" rx="14" fill="#10b981" opacity="0.2" stroke="#10b981" stroke-width="2"/><text x="720" y="255" text-anchor="middle" fill="#10b981" font-family="sans-serif" font-size="16" font-weight="bold">EFFECTIVE</text><text x="720" y="278" text-anchor="middle" fill="#10b981" font-family="sans-serif" font-size="16" font-weight="bold">DESIGN</text><text x="400" y="400" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="24" font-weight="bold">THE DESIGN FORMULA</text></svg>`),
  // Q15 – Billboard / Emphasis + Contrast
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="bg15" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#bg15)"/><rect x="150" y="100" width="500" height="280" rx="16" fill="#0f1729" stroke="#334155" stroke-width="3"/><rect x="180" y="130" width="440" height="220" rx="8" fill="#1e293b"/><text x="400" y="210" text-anchor="middle" fill="#f0f4f8" font-family="sans-serif" font-size="36" font-weight="900" letter-spacing="2">BIG BOLD</text><text x="400" y="260" text-anchor="middle" fill="#38bdf8" font-family="sans-serif" font-size="28" font-weight="700">HEADLINE</text><rect x="320" y="290" width="160" height="40" rx="20" fill="#f59e0b"/><text x="400" y="317" text-anchor="middle" fill="#0f172a" font-family="sans-serif" font-size="16" font-weight="800">CTA BUTTON</text><rect x="375" y="400" width="50" height="100" fill="#475569"/><rect x="350" y="500" width="100" height="10" rx="5" fill="#475569"/><text x="400" y="560" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="22" font-weight="bold">CONTRAST + EMPHASIS</text></svg>`)
];

const quizData = [
  {
    question: "What is the principle of Balance in design?",
    options: [
      "The distribution of visual weight within a composition",
      "The use of several different elements to hold the viewer's attention",
      "The path the viewer's eye takes through the artwork",
      "A regular arrangement of alternating or repeated elements"
    ],
    correct: 0,
    image: questionImages[0],
    imageAlt: "Balanced shapes in symmetrical composition"
  },
  {
    question: "Which type of balance is demonstrated by a game controller where the left side mirrors the right?",
    options: [
      "Asymmetrical Balance",
      "Radial Balance",
      "Proportional Balance",
      "Symmetrical Balance"
    ],
    correct: 3,
    image: questionImages[1],
    imageAlt: "Symmetrical mirrored layout"
  },
  {
    question: "Unity in design prevents the composition from feeling:",
    options: [
      "Predictable and boring",
      "Fragmented and chaotic",
      "Too colorful and vibrant",
      "Too dark and monotone"
    ],
    correct: 1,
    image: questionImages[2],
    imageAlt: "Cohesive unified grid layout"
  },
  {
    question: "What does Contrast create in a design?",
    options: [
      "A sense of calm and relaxation",
      "A repetitive and predictable layout",
      "Excitement, visual tension, and commands attention",
      "Blurry and soft visual effects"
    ],
    correct: 2,
    image: questionImages[3],
    imageAlt: "High contrast light and dark comparison"
  },
  {
    question: "In the lesson, what principle is described as 'the focal point of a design that commands the most attention'?",
    options: [
      "Emphasis",
      "Balance",
      "Contrast",
      "Rhythm"
    ],
    correct: 0,
    image: questionImages[4],
    imageAlt: "Spotlight emphasizing a single focal point"
  },
  {
    question: "How does Repetition benefit user experience in app design?",
    options: [
      "It makes every page look completely different",
      "It creates inconsistency to keep users guessing",
      "It removes all visual elements from the interface",
      "It builds familiarity and reduces cognitive learning curve"
    ],
    correct: 3,
    image: questionImages[5],
    imageAlt: "Repeating grid of identical elements"
  },
  {
    question: "What is the difference between Repetition and Pattern?",
    options: [
      "They are exactly the same concept",
      "Pattern uses random arrangements while Repetition is organized",
      "Repetition is reusing an element; Pattern is repetition organized into a formal geometric structure",
      "Repetition only applies to color while Pattern applies to shapes"
    ],
    correct: 2,
    image: questionImages[6],
    imageAlt: "Geometric tessellation pattern"
  },
  {
    question: "What does Rhythm in design suggest?",
    options: [
      "Static and unchanging layouts",
      "Organized movement and keeps the viewer's eye engaged",
      "Complete uniformity across all elements",
      "The removal of all whitespace"
    ],
    correct: 1,
    image: questionImages[7],
    imageAlt: "Visual rhythm with varying bar heights"
  },
  {
    question: "In the lesson, Movement refers to:",
    options: [
      "Animations and video playback",
      "Physical motion of the design elements",
      "Moving elements from one page to another",
      "The intentional path the viewer's eye takes through the artwork"
    ],
    correct: 3,
    image: questionImages[8],
    imageAlt: "Flowing curves guiding the eye"
  },
  {
    question: "What is the Golden Ratio mentioned in the Proportion principle?",
    options: [
      "A ratio of 1 to 1.618",
      "A ratio of 1 to 2",
      "A ratio of 1 to 3.14",
      "A ratio of 2 to 3"
    ],
    correct: 0,
    image: questionImages[9],
    imageAlt: "Golden ratio spiral and grid"
  },
  {
    question: "Harmony in design creates a sense of:",
    options: [
      "Chaos and visual noise",
      "Extreme variety and randomness",
      "High contrast and shock value",
      "Calm, elegance, and visual agreement"
    ],
    correct: 3,
    image: questionImages[10],
    imageAlt: "Harmonious monochromatic colour swatches"
  },
  {
    question: "According to the lesson, why do banking platforms favor monochromatic palettes?",
    options: [
      "Because they can't afford multiple colors",
      "Because monochromatic schemes reduce cognitive load and signal security",
      "Because rainbow colors are too expensive to print",
      "Because users only see one color at a time"
    ],
    correct: 1,
    image: questionImages[11],
    imageAlt: "Clean monochromatic dashboard interface"
  },
  {
    question: "What is the role of Variety in design?",
    options: [
      "To make the design look as chaotic as possible",
      "To use only one type of element throughout",
      "To remove all consistency from the layout",
      "To prevent boredom and monotony while working with Unity"
    ],
    correct: 3,
    image: questionImages[12],
    imageAlt: "Diverse colourful design shapes"
  },
  {
    question: "The lesson's conclusion formula states:",
    options: [
      "Elements + Principles = Effective Design",
      "Colors + Shapes = Art",
      "Contrast + Balance = Perfect Layout",
      "Fonts + Images = Good Website"
    ],
    correct: 0,
    image: questionImages[13],
    imageAlt: "Elements plus Principles equals Effective Design"
  },
  {
    question: "According to the lesson, which design principles are most important for a billboard or landing page?",
    options: [
      "Unity and Pattern",
      "Rhythm and Movement",
      "Contrast and Emphasis",
      "Harmony and Proportion"
    ],
    correct: 2,
    image: questionImages[14],
    imageAlt: "Eye-catching billboard design with strong emphasis"
  }
];


document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentQuestion = 0;
  let score = 0;
  let answered = false;
  let startTime = null;
  let timerInterval = null;

  // DOM Elements
  const startScreen = document.getElementById('startScreen');
  const quizScreen = document.getElementById('quizScreen');
  const resultsScreen = document.getElementById('resultsScreen');
  const startQuizBtn = document.getElementById('startQuizBtn');
  const qCounter = document.getElementById('qCounter');
  const scoreDisplay = document.getElementById('scoreDisplay');
  const timerText = document.getElementById('timerText');
  const quizProgressBar = document.getElementById('quizProgressBar');
  const questionContainer = document.getElementById('questionContainer');
  const questionImageWrap = document.getElementById('questionImageWrap');
  const questionImage = document.getElementById('questionImage');
  const questionBadge = document.getElementById('questionBadge');
  const questionText = document.getElementById('questionText');
  const optionsGrid = document.getElementById('optionsGrid');
  const nextBtn = document.getElementById('nextBtn');
  const retryBtn = document.getElementById('retryBtn');

  // Results Elements
  const resultsIcon = document.getElementById('resultsIcon');
  const resultsTitle = document.getElementById('resultsTitle');
  const scoreNumber = document.getElementById('scoreNumber');
  const scoreRing = document.getElementById('scoreRing');
  const statCorrect = document.getElementById('statCorrect');
  const statWrong = document.getElementById('statWrong');
  const statPercent = document.getElementById('statPercent');
  const statTime = document.getElementById('statTime');
  const resultsMessage = document.getElementById('resultsMessage');

  // Add SVG gradient for score ring
  const svgNS = "http://www.w3.org/2000/svg";
  const scoreRingSVG = document.querySelector('.score-ring');
  if (scoreRingSVG) {
    const defs = document.createElementNS(svgNS, 'defs');
    const linearGradient = document.createElementNS(svgNS, 'linearGradient');
    linearGradient.setAttribute('id', 'scoreGradient');
    linearGradient.setAttribute('x1', '0%');
    linearGradient.setAttribute('y1', '0%');
    linearGradient.setAttribute('x2', '100%');
    linearGradient.setAttribute('y2', '100%');

    const stop1 = document.createElementNS(svgNS, 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', '#38bdf8');

    const stop2 = document.createElementNS(svgNS, 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', '#a855f7');

    linearGradient.appendChild(stop1);
    linearGradient.appendChild(stop2);
    defs.appendChild(linearGradient);
    scoreRingSVG.insertBefore(defs, scoreRingSVG.firstChild);
  }

  // ============================
  // SCREEN TRANSITIONS
  // ============================
  function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
  }

  // ============================
  // TIMER
  // ============================
  function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
      const secs = String(elapsed % 60).padStart(2, '0');
      timerText.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function getElapsedTime() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mins = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const secs = String(elapsed % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  }

  // ============================
  // RENDER QUESTION
  // ============================
  function renderQuestion() {
    answered = false;
    nextBtn.disabled = true;
    nextBtn.classList.add('hidden');

    const q = quizData[currentQuestion];
    const num = currentQuestion + 1;

    // Update header
    qCounter.textContent = `Q${num} / ${quizData.length}`;
    scoreDisplay.textContent = `Score: ${score}`;
    quizProgressBar.style.width = `${(num / quizData.length) * 100}%`;

    // Update question content
    questionBadge.textContent = `Question ${num}`;
    questionText.textContent = q.question;

    // Update image
    questionImage.src = q.image;
    questionImage.alt = q.imageAlt;

    // Reset the Next button text
    nextBtn.querySelector('span').textContent = 'Next';

    // Build options
    optionsGrid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((option, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span class="option-text">${option}</span>
      `;
      btn.addEventListener('click', () => handleAnswer(idx, btn));
      optionsGrid.appendChild(btn);
    });

    // Animate in
    questionContainer.classList.remove('fade-out');
    questionContainer.classList.add('fade-in');
    setTimeout(() => questionContainer.classList.remove('fade-in'), 350);
  }

  // ============================
  // HANDLE ANSWER
  // ============================
  function handleAnswer(selectedIdx, selectedBtn) {
    if (answered) return;
    answered = true;

    const q = quizData[currentQuestion];
    const isCorrect = selectedIdx === q.correct;

    // Disable all options
    const allBtns = optionsGrid.querySelectorAll('.option-btn');
    allBtns.forEach((btn, idx) => {
      btn.classList.add('disabled');

      if (idx === q.correct) {
        btn.classList.add('correct');
        const icon = document.createElement('span');
        icon.className = 'feedback-icon';
        icon.textContent = '✓';
        btn.appendChild(icon);
      }

      if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
        const icon = document.createElement('span');
        icon.className = 'feedback-icon';
        icon.textContent = '✗';
        btn.appendChild(icon);
      }
    });

    if (isCorrect) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    }

    // Show next button and enable it
    nextBtn.disabled = false;
    nextBtn.classList.remove('hidden');

    if (currentQuestion === quizData.length - 1) {
      nextBtn.querySelector('span').textContent = 'See Results';
    }
  }

  // ============================
  // NEXT QUESTION
  // ============================
  function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
      // Animate out
      questionContainer.classList.add('fade-out');
      setTimeout(() => {
        currentQuestion++;
        renderQuestion();
      }, 250);
    } else {
      // Show results
      stopTimer();
      showResults();
    }
  }

  // ============================
  // SHOW RESULTS
  // ============================
  function showResults() {
    const total = quizData.length;
    const wrong = total - score;
    const percent = Math.round((score / total) * 100);
    const time = getElapsedTime();

    // Update stats
    scoreNumber.textContent = score;
    statCorrect.textContent = score;
    statWrong.textContent = wrong;
    statPercent.textContent = `${percent}%`;
    statTime.textContent = time;

    // Animate score ring
    const circumference = 2 * Math.PI * 52; // r=52
    const offset = circumference - (score / total) * circumference;
    setTimeout(() => {
      scoreRing.style.strokeDashoffset = offset;
    }, 300);

    // Set message and emoji
    if (percent >= 90) {
      resultsIcon.textContent = '🏆';
      resultsTitle.textContent = 'Outstanding!';
      resultsMessage.textContent = 'You have an excellent understanding of the Principles of Design! You\'re ready to create professional-level compositions.';
    } else if (percent >= 70) {
      resultsIcon.textContent = '🌟';
      resultsTitle.textContent = 'Great Job!';
      resultsMessage.textContent = 'You have a solid grasp of design principles. Review a few topics to reach mastery level!';
    } else if (percent >= 50) {
      resultsIcon.textContent = '💪';
      resultsTitle.textContent = 'Good Effort!';
      resultsMessage.textContent = 'You\'re on the right track! Revisit the lesson to strengthen your understanding of the core principles.';
    } else {
      resultsIcon.textContent = '📚';
      resultsTitle.textContent = 'Keep Learning!';
      resultsMessage.textContent = 'Design principles take practice! Go through the lesson again and pay close attention to each principle\'s definition and purpose.';
    }

    showScreen(resultsScreen);

    // Confetti for high scores
    if (percent >= 70) {
      launchConfetti();
    }
  }

  // ============================
  // CONFETTI
  // ============================
  function launchConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    const colors = ['#38bdf8', '#a855f7', '#10b981', '#f59e0b', '#f43f5e', '#818cf8', '#ec4899'];
    const shapes = ['circle', 'square'];

    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];

      piece.style.cssText = `
        left: ${Math.random() * 100}%;
        background: ${color};
        width: ${6 + Math.random() * 8}px;
        height: ${6 + Math.random() * 8}px;
        border-radius: ${shape === 'circle' ? '50%' : '2px'};
        animation-delay: ${Math.random() * 1.5}s;
        animation-duration: ${2 + Math.random() * 2}s;
      `;

      container.appendChild(piece);
    }

    setTimeout(() => container.remove(), 5000);
  }

  // ============================
  // RESET QUIZ
  // ============================
  function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;

    // Reset score ring
    scoreRing.style.strokeDashoffset = 326.73;

    showScreen(quizScreen);
    startTimer();
    renderQuestion();
  }

  // ============================
  // EVENT LISTENERS
  // ============================
  startQuizBtn.addEventListener('click', () => {
    showScreen(quizScreen);
    startTimer();
    renderQuestion();
  });

  nextBtn.addEventListener('click', nextQuestion);
  retryBtn.addEventListener('click', resetQuiz);

  // Keyboard shortcuts
  window.addEventListener('keydown', (e) => {
    if (!quizScreen.classList.contains('active')) return;

    if (e.key >= '1' && e.key <= '4' && !answered) {
      const idx = parseInt(e.key) - 1;
      const btns = optionsGrid.querySelectorAll('.option-btn');
      if (btns[idx]) btns[idx].click();
    }

    if ((e.key === 'Enter' || e.key === ' ') && answered) {
      e.preventDefault();
      nextQuestion();
    }
  });
});
