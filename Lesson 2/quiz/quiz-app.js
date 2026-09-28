/**
 * The Basic Elements of Design — Quiz App Logic
 * 15 Multiple-Choice Questions based on the lesson content
 */

// Helper: generate an inline SVG data URI for each question's visual clue
function makeSvgDataUri(svgMarkup) {
  return 'data:image/svg+xml,' + encodeURIComponent(svgMarkup.trim());
}

const questionImages = [
  // Q1 – Elements vs Principles Recipe Analogy
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg1)"/><rect x="150" y="200" width="200" height="90" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/><text x="250" y="245" text-anchor="middle" fill="#38bdf8" font-family="sans-serif" font-size="18" font-weight="bold">7 ELEMENTS</text><text x="250" y="270" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="12">Raw Ingredients</text><text x="390" y="255" text-anchor="middle" fill="#f59e0b" font-family="sans-serif" font-size="32" font-weight="bold">+</text><rect x="430" y="200" width="220" height="90" rx="12" fill="#1e293b" stroke="#a855f7" stroke-width="2"/><text x="540" y="245" text-anchor="middle" fill="#a855f7" font-family="sans-serif" font-size="18" font-weight="bold">PRINCIPLES</text><text x="540" y="270" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="12">Recipe Rules</text><text x="400" y="440" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="24" font-weight="bold">THE FOUNDATION</text></svg>`),

  // Q2 – Line Definition (Moving Point)
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg2)"/><circle cx="200" cy="300" r="16" fill="#38bdf8"/><path d="M 200 300 Q 350 150, 500 300 T 650 300" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="8 6"/><circle cx="650" cy="300" r="10" fill="#38bdf8"/><text x="400" y="480" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="26" font-weight="bold">POINT IN MOTION</text></svg>`),

  // Q3 – Horizontal Line (Horizon & Calm)
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg3)"/><line x1="150" y1="300" x2="650" y2="300" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/><circle cx="400" cy="240" r="45" fill="#f59e0b" fill-opacity="0.3"/><text x="400" y="480" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="26" font-weight="bold">HORIZONTAL LINE</text></svg>`),

  // Q4 – Diagonal Line (Dynamic Action & Speed)
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg4)"/><line x1="200" y1="420" x2="600" y2="180" stroke="#f43f5e" stroke-width="6" stroke-linecap="round"/><polygon points="615,170 590,175 605,195" fill="#f43f5e"/><line x1="240" y1="450" x2="560" y2="250" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6 6"/><text x="400" y="520" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="26" font-weight="bold">DIAGONAL LINE</text></svg>`),

  // Q5 – Stroke Weight / Line Thickness
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg5)"/><line x1="200" y1="200" x2="600" y2="200" stroke="#64748b" stroke-width="1"/><line x1="200" y1="260" x2="600" y2="260" stroke="#94a3b8" stroke-width="3"/><line x1="200" y1="340" x2="600" y2="340" stroke="#38bdf8" stroke-width="10" stroke-linecap="round"/><text x="400" y="490" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="26" font-weight="bold">LINE WEIGHT</text></svg>`),

  // Q6 – 2D Shape (Boundary & Flat Area)
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg6)"/><rect x="180" y="200" width="160" height="160" rx="6" fill="#818cf8" fill-opacity="0.6" stroke="#818cf8" stroke-width="2"/><circle cx="480" cy="280" r="85" fill="#38bdf8" fill-opacity="0.6" stroke="#38bdf8" stroke-width="2"/><text x="400" y="490" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="26" font-weight="bold">2D BOUNDARIES</text></svg>`),

  // Q7 – The 3 Shape Families (Geometric, Organic, Abstract)
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg7" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg7)"/><rect x="160" y="200" width="110" height="110" rx="4" fill="#38bdf8"/><path d="M 370 200 C 440 180, 430 320, 360 300 C 330 250, 340 210, 370 200 Z" fill="#34d399"/><polygon points="560,185 575,225 615,225 580,250 595,290 560,265 525,290 540,250 505,225 545,225" fill="#c084fc"/><text x="400" y="470" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="24" font-weight="bold">SHAPE CLASSIFICATION</text></svg>`),

  // Q8 – The Silhouette Test (<50ms Recognition)
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg8" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg8)"/><circle cx="340" cy="270" r="60" fill="#ffffff"/><circle cx="280" cy="180" r="35" fill="#ffffff"/><circle cx="400" cy="180" r="35" fill="#ffffff"/><rect x="490" y="210" width="120" height="120" rx="16" fill="#ffffff"/><text x="400" y="480" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="26" font-weight="bold">THE SILHOUETTE TEST</text></svg>`),

  // Q9 – 3D Form (Volume & Depth)
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg9" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg9)"/><path d="M 400 160 L 520 220 L 400 280 L 280 220 Z" fill="#38bdf8"/><path d="M 280 220 L 400 280 L 400 420 L 280 360 Z" fill="#0284c7"/><path d="M 520 220 L 400 280 L 400 420 L 520 360 Z" fill="#0369a1"/><text x="400" y="520" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="26" font-weight="bold">3D MASS &amp; VOLUME</text></svg>`),

  // Q10 – The Anatomy of Light (Shaded Sphere)
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg10" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient><radialGradient id="qsphere" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="#ffffff"/><stop offset="20%" stop-color="#38bdf8"/><stop offset="60%" stop-color="#0369a1"/><stop offset="100%" stop-color="#082f49"/></radialGradient></defs><rect width="800" height="600" fill="url(#qbg10)"/><ellipse cx="450" cy="420" rx="140" ry="24" fill="#000000" fill-opacity="0.6"/><circle cx="380" cy="300" r="120" fill="url(#qsphere)"/><line x1="200" y1="140" x2="270" y2="210" stroke="#fbbf24" stroke-width="3" stroke-dasharray="4 4"/><circle cx="180" cy="120" r="14" fill="#fbbf24"/><text x="400" y="520" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="26" font-weight="bold">5 LIGHT ZONES</text></svg>`),

  // Q11 – Positive vs. Negative Space (Rubin's Vase)
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg11" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg11)"/><path d="M 240 180 C 300 180, 300 230, 280 270 C 260 310, 310 330, 310 350 C 310 370, 270 390, 280 430 L 240 430 Z" fill="#38bdf8"/><path d="M 560 180 C 500 180, 500 230, 520 270 C 540 310, 490 330, 490 350 C 490 370, 530 390, 520 430 L 560 430 Z" fill="#38bdf8"/><text x="400" y="320" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="28" font-weight="bold">VASE?</text><text x="400" y="520" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="24" font-weight="bold">FIGURE VS. GROUND</text></svg>`),

  // Q12 – White Space in UI (Cognitive Luxury)
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg12" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg12)"/><rect x="220" y="160" width="360" height="260" rx="14" fill="#0f172a" stroke="#34d399" stroke-width="2"/><text x="400" y="250" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="bold">Minimal Elegance</text><text x="400" y="280" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="14">70% Negative Space</text><rect x="340" y="320" width="120" height="34" rx="17" fill="#34d399"/><text x="400" y="342" text-anchor="middle" fill="#0f172a" font-family="sans-serif" font-size="13" font-weight="bold">Explore</text><text x="400" y="490" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="24" font-weight="bold">MACRO WHITE SPACE</text></svg>`),

  // Q13 – The 3 Properties of Colour
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg13" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg13)"/><circle cx="260" cy="280" r="60" fill="#ef4444"/><circle cx="400" cy="280" r="60" fill="#10b981"/><circle cx="540" cy="280" r="60" fill="#3b82f6"/><text x="260" y="380" text-anchor="middle" fill="#ef4444" font-family="sans-serif" font-size="16" font-weight="bold">HUE</text><text x="400" y="380" text-anchor="middle" fill="#10b981" font-family="sans-serif" font-size="16" font-weight="bold">SATURATION</text><text x="540" y="380" text-anchor="middle" fill="#3b82f6" font-family="sans-serif" font-size="16" font-weight="bold">VALUE</text><text x="400" y="480" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="24" font-weight="bold">THE 3 DIMENSIONS</text></svg>`),

  // Q14 – Value Law (Tonal Scale & Contrast)
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg14" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg14)"/><rect x="160" y="240" width="54" height="80" rx="4" fill="#ffffff"/><rect x="220" y="240" width="54" height="80" rx="4" fill="#cbd5e1"/><rect x="280" y="240" width="54" height="80" rx="4" fill="#94a3b8"/><rect x="340" y="240" width="54" height="80" rx="4" fill="#64748b"/><rect x="400" y="240" width="54" height="80" rx="4" fill="#475569"/><rect x="460" y="240" width="54" height="80" rx="4" fill="#334155"/><rect x="520" y="240" width="54" height="80" rx="4" fill="#1e293b"/><rect x="580" y="240" width="54" height="80" rx="4" fill="#000000" stroke="#475569" stroke-width="1"/><text x="400" y="460" text-anchor="middle" fill="#f59e0b" font-family="sans-serif" font-size="20" font-weight="bold">"VALUE DOES THE WORK"</text></svg>`),

  // Q15 – Texture & Glassmorphism
  makeSvgDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="qbg15" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient></defs><rect width="800" height="600" fill="url(#qbg15)"/><circle cx="320" cy="260" r="70" fill="#f43f5e"/><circle cx="480" cy="300" r="80" fill="#38bdf8"/><rect x="260" y="220" width="280" height="150" rx="14" fill="#ffffff" fill-opacity="0.12" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.3"/><line x1="275" y1="222" x2="525" y2="222" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.7"/><text x="400" y="300" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="bold">FROSTED GLASS BLUR</text><text x="400" y="490" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="24" font-weight="bold">VISUAL TEXTURE</text></svg>`)
];

const quizData = [
  {
    question: "According to the master cooking analogy, what do the Elements of Design represent compared to the Principles of Design?",
    options: [
      "The Elements are the raw ingredients; the Principles are the recipe and structure",
      "The Elements are the baking oven; the Principles are the decorative frosting",
      "The Elements are the dining guests; the Principles are the silverware",
      "The Elements are only for digital screens; the Principles are only for traditional paintings"
    ],
    correct: 0,
    image: questionImages[0],
    imageAlt: "7 Elements raw ingredients plus Principles recipe equation",
    explanation: "The Elements (Line, Shape, Form, etc.) are the physical raw ingredients. The Principles (Balance, Contrast, etc.) are the organizational recipe rules."
  },
  {
    question: "What is the technical and artistic definition of a Line in visual design?",
    options: [
      "A 3-dimensional solid block of color",
      "A continuous mark made on a surface by a moving point",
      "The empty white space surrounding a subject",
      "A mathematically enclosed polygon with equal sides"
    ],
    correct: 1,
    image: questionImages[1],
    imageAlt: "A point moving across a plane to create a line",
    explanation: "A line is fundamentally defined as a point in motion across a surface, connecting thoughts and guiding the viewer's gaze."
  },
  {
    question: "Which psychological emotion or sensory feeling is most strongly communicated by Horizontal lines?",
    options: [
      "High-speed kinetic chaos and adrenaline",
      "Monumental vertical authority and tall dignity",
      "Stability, tranquility, peaceful rest, and horizon grounding",
      "Sudden electrical danger and alarm"
    ],
    correct: 2,
    image: questionImages[2],
    imageAlt: "A solid horizontal line evoking stability and horizon",
    explanation: "Horizontal lines mimic the earth's horizon and a body at rest, naturally evoking peace, calm, and solid stability."
  },
  {
    question: "Why do action sports brands (like Nike or Adidas) and anime speed lines consistently feature Diagonal lines?",
    options: [
      "Because diagonal lines represent instability and active kinetic motion",
      "Because diagonal lines take up less screen storage memory",
      "Because diagonal lines make typography easier to read upside down",
      "Because diagonal lines look like static architectural pillars"
    ],
    correct: 0,
    image: questionImages[3],
    imageAlt: "Dynamic diagonal velocity lines",
    explanation: "Due to gravity, diagonal lines represent an object in active fall or motion, instantly signaling speed, tension, and kinetic energy."
  },
  {
    question: "How does adjusting Line Weight (stroke thickness) impact visual hierarchy in user interfaces?",
    options: [
      "Heavier line weights command immediate focal priority and anchor visual structure",
      "Thicker lines are always invisible to human eyes",
      "Line weight only affects the physical weight of printed paper",
      "All stroke weights carry identical visual importance regardless of thickness"
    ],
    correct: 0,
    image: questionImages[4],
    imageAlt: "Stroke weights ranging from 1px hairline to heavy 10px anchor",
    explanation: "Stroke weight directly controls visual gravity: heavier strokes pull the eye first, while hairlines serve as background scaffolding."
  },
  {
    question: "What is the fundamental dimensional difference between a Shape and a Form?",
    options: [
      "A Shape is 2D (height and width); a Form is 3D (height, width, and depth)",
      "A Shape has tactile texture; a Form is completely invisible",
      "A Shape is always a circle; a Form is always a square",
      "A Shape requires perspective lighting; a Form is flat and borderless"
    ],
    correct: 0,
    image: questionImages[5],
    imageAlt: "Flat 2D circle and rectangle",
    explanation: "Shapes are strictly 2D flat boundaries. Forms possess actual or simulated 3D mass, volume, and depth."
  },
  {
    question: "Which of the following correctly lists the 3 core categories of Shape?",
    options: [
      "Smooth, Loud, and Quiet shapes",
      "Geometric, Organic, and Abstract/Symbolic shapes",
      "RGB, CMYK, and Hexadecimal shapes",
      "Transparent, Opaque, and Glass shapes"
    ],
    correct: 1,
    image: questionImages[6],
    imageAlt: "Geometric square, organic leaf, and abstract star glyph",
    explanation: "Shapes fall into 3 families: Geometric (mathematical), Organic (natural, freeform), and Abstract (stylized glyphs/icons)."
  },
  {
    question: "What is the 'Silhouette Test' in visual and character design?",
    options: [
      "Checking whether an artwork will look good in full sunlight",
      "Verifying if a design or icon is instantly recognizable when filled with solid 100% black",
      "Testing if a website loads in less than 3 seconds",
      "Measuring the exact file weight of a PNG export"
    ],
    correct: 1,
    image: questionImages[7],
    imageAlt: "Mickey Mouse and icon silhouettes recognizable in solid fill",
    explanation: "The Silhouette Test proves that our visual cortex identifies boundary contours in under 50ms before even analyzing color or texture."
  },
  {
    question: "When a flat circle is transformed into a 3D sphere, which design element has been created?",
    options: [
      "Form",
      "Kerning",
      "Negative Space",
      "Typography"
    ],
    correct: 0,
    image: questionImages[8],
    imageAlt: "3D cube with rendered depth planes",
    explanation: "Form represents three-dimensional volume. A flat circle given light and shadow illusion becomes a spherical Form."
  },
  {
    question: "On a realistically shaded 3D object, what is the 'Core Shadow'?",
    options: [
      "The point of direct brightest light reflection",
      "The dark band on the object where the surface turns away from the light source",
      "The color of the light bulb illuminating the room",
      "The shadow projected onto a distant wall"
    ],
    correct: 1,
    image: questionImages[9],
    imageAlt: "Shaded sphere with core shadow band and cast shadow",
    explanation: "The Core Shadow is the darkest area on the object itself where the form curves completely away from direct illumination."
  },
  {
    question: "In the famous 'Rubin's Vase' optical illusion, how do Positive and Negative Space interact?",
    options: [
      "Both shapes disappear completely",
      "The cyan facing profiles (Positive) and central vase (Negative) switch roles depending on gaze focus",
      "The vase only appears if the monitor is turned off",
      "Positive and negative space cannot exist in the same artwork"
    ],
    correct: 1,
    image: questionImages[10],
    imageAlt: "Rubin's Vase showing figure ground reversal",
    explanation: "Figure-ground perception means the eye alternates: when the faces are positive, the vase is negative, and vice versa!"
  },
  {
    question: "Why do prestigious luxury brands (e.g. Apple, Rolex) utilize generous Macro White Space on their websites?",
    options: [
      "They ran out of products to display",
      "Negative space conveys confidence, psychological calm, premium focus, and reduces cognitive load",
      "Empty space saves electricity on servers",
      "Their web designers forgot to fill the blank spots"
    ],
    correct: 1,
    image: questionImages[11],
    imageAlt: "Minimalist landing page with generous white space framing",
    explanation: "Generous white space signals prestige, clarity, and sophistication, while crammed layouts scream bargain discount panic."
  },
  {
    question: "What are the 3 fundamental properties that define every Colour in art and design?",
    options: [
      "Hue, Saturation (Chroma), and Value (Lightness)",
      "Height, Width, and Weight",
      "Volume, Echo, and Frequency",
      "Resolution, Frame Rate, and Bitrate"
    ],
    correct: 0,
    image: questionImages[12],
    imageAlt: "Three color swatches labeled Hue, Saturation, Value",
    explanation: "Every color is defined by its Hue (color name/wavelength), Saturation (intensity/purity), and Value (lightness/darkness)."
  },
  {
    question: "Why do professional artists and art directors declare: 'Colour gets the credit, but VALUE does the work'?",
    options: [
      "Because value contrast determines whether text and subjects are legible and visually hierarchical",
      "Because black and white ink is more expensive than colored ink",
      "Because color is only visible to animals",
      "Because value scales only work in dark rooms"
    ],
    correct: 0,
    image: questionImages[13],
    imageAlt: "9-step value scale from white to black",
    explanation: "Without value contrast, even the most vibrant colors become illegible muddy mush. Human visual acuity relies on value contrast first."
  },
  {
    question: "What is 'Glassmorphism' in modern software interface design, and which element does it represent?",
    options: [
      "A font style; represents Lines",
      "A translucent frosted glass blur with subtle highlights; represents Visual Texture",
      "A mechanical keyboard switch; represents Form",
      "A printing technique for thick cardboard; represents Space"
    ],
    correct: 1,
    image: questionImages[14],
    imageAlt: "Frosted glass card with specular edge blur",
    explanation: "Glassmorphism is a modern visual texture effect using blurred backgrounds and specular strokes to simulate real frosted glass."
  }
];

// App State
let currentQuestion = 0;
let userAnswers = new Array(quizData.length).fill(null);
let score = 0;
let timerSeconds = 0;
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
const questionImage = document.getElementById('questionImage');
const questionBadge = document.getElementById('questionBadge');
const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const retryBtn = document.getElementById('retryBtn');

// Results elements
const resultsIcon = document.getElementById('resultsIcon');
const resultsTitle = document.getElementById('resultsTitle');
const resultsSubtitle = document.getElementById('resultsSubtitle');
const scoreNumber = document.getElementById('scoreNumber');
const scoreRing = document.getElementById('scoreRing');
const statCorrect = document.getElementById('statCorrect');
const statWrong = document.getElementById('statWrong');
const statPercent = document.getElementById('statPercent');
const statTime = document.getElementById('statTime');
const resultsMessage = document.getElementById('resultsMessage');

// Start Quiz
startQuizBtn.addEventListener('click', () => {
  startScreen.classList.remove('active');
  quizScreen.classList.add('active');
  startTimer();
  loadQuestion(0);
});

// Timer Logic
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

// Load Question
function loadQuestion(index) {
  currentQuestion = index;
  const data = quizData[index];

  // Update Counters & Progress
  qCounter.textContent = `Q${index + 1} / ${quizData.length}`;
  questionBadge.textContent = `Question ${index + 1}`;
  scoreDisplay.textContent = `Score: ${score}`;
  const progressPercent = ((index + 1) / quizData.length) * 100;
  quizProgressBar.style.width = `${progressPercent}%`;

  // Update Question Content
  questionImage.src = data.image;
  questionImage.alt = data.imageAlt || `Question ${index + 1} visual clue`;
  questionText.textContent = data.question;

  // Render Options
  optionsGrid.innerHTML = '';
  const answered = userAnswers[index] !== null;

  data.options.forEach((optText, optIdx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + optIdx)}</span>
      <span class="option-text">${optText}</span>
    `;

    if (answered) {
      btn.disabled = true;
      if (optIdx === data.correct) {
        btn.classList.add('correct');
      } else if (optIdx === userAnswers[index]) {
        btn.classList.add('wrong');
      }
    } else {
      btn.addEventListener('click', () => handleSelectAnswer(optIdx));
    }

    optionsGrid.appendChild(btn);
  });

  // Navigation Buttons
  prevBtn.disabled = index === 0;
  if (answered) {
    nextBtn.classList.remove('hidden');
    nextBtn.querySelector('span').textContent = index === quizData.length - 1 ? 'View Results' : 'Next';
  } else {
    nextBtn.classList.add('hidden');
  }
}

// Handle Answer Selection
function handleSelectAnswer(selectedIndex) {
  userAnswers[currentQuestion] = selectedIndex;
  const data = quizData[currentQuestion];
  const isCorrect = selectedIndex === data.correct;

  if (isCorrect) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }

  // Update option styles immediately
  const buttons = optionsGrid.querySelectorAll('.option-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === data.correct) {
      btn.classList.add('correct');
    } else if (idx === selectedIndex) {
      btn.classList.add('wrong');
    }
  });

  // Show Next Button
  nextBtn.classList.remove('hidden');
  nextBtn.querySelector('span').textContent = currentQuestion === quizData.length - 1 ? 'View Results' : 'Next';
}

// Nav Buttons
prevBtn.addEventListener('click', () => {
  if (currentQuestion > 0) {
    loadQuestion(currentQuestion - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentQuestion < quizData.length - 1) {
    loadQuestion(currentQuestion + 1);
  } else {
    showResults();
  }
});

// Results Screen
function showResults() {
  stopTimer();
  quizScreen.classList.remove('active');
  resultsScreen.classList.add('active');

  const total = quizData.length;
  const correctCount = score;
  const wrongCount = total - correctCount;
  const percentage = Math.round((correctCount / total) * 100);

  // Animate numbers
  scoreNumber.textContent = correctCount;
  statCorrect.textContent = correctCount;
  statWrong.textContent = wrongCount;
  statPercent.textContent = `${percentage}%`;

  const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
  const secs = String(timerSeconds % 60).padStart(2, '0');
  statTime.textContent = `${mins}:${secs}`;

  // Score Ring Animation
  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (percentage / 100) * circumference;
  scoreRing.style.strokeDasharray = `${circumference}`;
  scoreRing.style.strokeDashoffset = `${circumference}`;
  setTimeout(() => {
    scoreRing.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
    scoreRing.style.strokeDashoffset = `${offset}`;
  }, 100);

  // Performance Message & Badges
  if (percentage >= 90) {
    resultsIcon.innerHTML = '&#127942;';
    resultsTitle.textContent = 'Design Virtuoso!';
    resultsSubtitle.textContent = 'Outstanding mastery of the Elements of Design!';
    resultsMessage.textContent = 'You demonstrated world-class mastery of lines, shapes, 3D form, white space, color harmonies, value scales, and tactile textures!';
  } else if (percentage >= 70) {
    resultsIcon.innerHTML = '&#127881;';
    resultsTitle.textContent = 'Great Job!';
    resultsSubtitle.textContent = 'Solid grasp of the core design elements!';
    resultsMessage.textContent = 'You have a strong understanding of how elements construct visual compositions. Review the few missed topics to hit 100%!';
  } else {
    resultsIcon.innerHTML = '&#128218;';
    resultsTitle.textContent = 'Keep Practicing!';
    resultsSubtitle.textContent = 'Good initial effort on the design fundamentals!';
    resultsMessage.textContent = 'Design takes deliberate eye training. Revisit the lesson slides, study the 5 light zones and color harmonies, and try again!';
  }
}

// Retry Quiz
retryBtn.addEventListener('click', () => {
  resultsScreen.classList.remove('active');
  startScreen.classList.add('active');
  userAnswers = new Array(quizData.length).fill(null);
  score = 0;
  scoreDisplay.textContent = 'Score: 0';
  quizProgressBar.style.width = '0%';
});
