path = r"c:\Users\SatoSan\Desktop\College files\SHS\Graphics-design-lesson-main\Graphics-design-lesson-main\Lesson 5\TEACHER_SCRIPT.md"

script_content = """# Instructor Lecture Delivery Script & Pedagogical Blueprint
## Lesson 5: Color Theory — Chromatic Science, Harmonies & Branding
**Estimated Lecture Duration:** 60–75 Minutes  
**Target Audience:** Senior High School / Undergraduate Visual Design & Digital Media Students  
**Required Materials:** Projector / Interactive Display running `Lesson 5/index.html`, physical prism, printed color swatch fan deck, and student mobile devices for the 15-question Mastery Quiz.

---

### Lecture Overview & Pedagogical Architecture
Color is arguably the most emotionally intoxicating yet scientifically demanding weapon in the graphic designer's toolkit. Amateur designers select colors based on personal whim or fleeting aesthetic trends; master designers wield color as an exact science of optics, human retinal biology, mathematical geometry, and subconscious behavioral psychology.

This curriculum guides students through six foundational movements:
1. **The Scientific Bedrock:** Sir Isaac Newton's 1666 prism discovery, the electromagnetic visible spectrum (380–700 nm), and trichromatic human vision.
2. **The 12-Part Color Wheel:** Johannes Itten's Bauhaus system, primary/secondary/tertiary hierarchies, and the RYB vs. CMY pigment evolution.
3. **The 3 Dimensions of Color Space:** Hue, Saturation, and Value (HSV/HSB), Albert Munsell's 3D color solid, and tint/shade/tone value scales.
4. **Thermal Dynamics & Geometric Harmonies:** Warm advancing vs. cool receding optical forces, followed by complementary, analogous, triadic, and tetradic geometries.
5. **Physical Mediums & Pre-Press Realities:** Additive RGB screen photons vs. subtractive CMYK ink absorption, the Gamut wall, and Pantone (PMS) spot inks.
6. **Commercial Strategy & Systems:** Brand color psychology archetypes, cultural semiotics, the 60-30-10 palette proportion rule, and WCAG 2.1 accessibility standards.

---

### Slide-by-Slide Delivery Script

#### Slide 1: Introduction: The Science of Color & Human Perception (00:00 – 06:00)
- **Visuals on Screen:** `assets/newton_prism_light.jpg` (Newton's Dual Prism Experiment), `assets/visible_spectrum_wavelengths.png`, and `assets/slide1_intro_physics.svg`.
- **Instructor Spoken Dialogue:**
  > "Welcome, designers. Today we demystify color. Before we ever touch a software color picker or select a brand palette, I want to shatter a common human assumption: color does not physically reside inside objects.
  > 
  > An apple is not red. A leaf is not green. In 1666, a 23-year-old Isaac Newton closed his shutters, bored a tiny pinhole to admit a ray of sunlight, and passed it through a clear glass prism. What emerged on his far wall was not white light, but a rainbow ribbon of electromagnetic radiation ranging from 700 nanometers at the red end down to 380 nanometers at the violet end.
  > 
  > When you look at a crisp red apple, its surface molecular skin is absorbing all yellow, green, cyan, blue, and violet photons, while bouncing only the 700-nanometer wave into your eyes. Inside your retinas, roughly 6 million cone photoreceptors—split into Long (Red), Medium (Green), and Short (Blue) sensitivities—fire bio-electrical impulses into your visual cortex. Color is an optical illusion synthesized entirely inside your brain!"
- **Classroom Checkpoint Interaction (Click 'Reveal Design Insight'):**
  - Prompt students: *"Why does a brand logo printed on paper look gorgeous inside your bedroom, but shifts noticeably under outdoor sunlight?"*
  - Reveal: **The Metamerism Paradox**—two pigments can reflect matching wavelengths under a 4000K fluorescent bulb, but appear completely mismatched under 6500K natural sunlight due to differing spectral power distributions!
- **Transition Line:** *"Now that we understand the physics of light, how do we organize this infinite spectrum into a usable tool for designers? Let's advance to the Color Wheel."*

---

#### Slide 2: The 12-Part Color Wheel: Primary, Secondary & Tertiary Hues (06:00 – 12:00)
- **Visuals on Screen:** `assets/johannes_itten_color_wheel.png` (Johannes Itten 1961 Farbkreis), `assets/primary_secondary_tertiary_wheel.jpg`, and `assets/slide2_color_wheel.svg`.
- **Instructor Spoken Dialogue:**
  > "Look at the screen. You are looking at the 12-part color wheel formalized by Johannes Itten at the legendary Bauhaus design school in Weimar, Germany.
  > 
  > The wheel organizes color into three distinct architectural tiers:
  > First, the Primaries: Red, Yellow, and Blue. In traditional painter's subtractive color mixing, these three hues are irreducible; you cannot mix any other paints together to create red, yellow, or blue.
  > 
  > Second, the Secondaries: Orange, Green, and Violet. These sit midway between the primaries. Mix 50% Red with 50% Yellow, you get Orange. Mix Yellow with Blue, you get Green. Mix Blue with Red, you get Violet.
  > 
  > Third, the Tertiaries: Six intermediate hues created by pairing a primary with its neighbor. Notice the naming convention—design standards require the primary parent to always be spoken and written first: Red-Orange, Yellow-Orange, Yellow-Green, Blue-Green, Blue-Violet, and Red-Violet."
- **Classroom Checkpoint Interaction:**
  - Prompt students: *"Why did classical artists use Red, Yellow, Blue, while modern computer printers use Cyan, Magenta, Yellow?"*
  - Reveal: **The RYB vs. CMY Pigment Revolution**—Renaissance masters lacked synthetic organic chemistry and relied on imperfect mineral ores. Modern chemistry proved that Cyan, Magenta, and Yellow are the true physical subtractive primaries capable of producing the cleanest, broadest color gamut.
- **Transition Line:** *"Having 12 pure hues on a circle is clean, but what happens when a color needs to be softer, darker, or more vivid? Let's examine the 3 dimensions of color space."*

---

#### Slide 3: 2b. Color Attributes: Hue, Saturation, and Value (HSV / HSB) (12:00 – 18:00)
- **Visuals on Screen:** `assets/hsv_color_solid_cylinder.png` (HSV 3D Color Solid Cylinder), `assets/munsell_color_tree.jpg`, and `assets/slide3_hue_saturation_value.svg`.
- **Instructor Spoken Dialogue:**
  > "When you open Adobe Illustrator, Figma, or CSS, you are constantly encountering the HSV or HSL model. Color is not a flat two-dimensional stamp; it is a 3D coordinate space.
  > 
  > Dimension 1 is Hue: The angular position (0° to 360°) along the perimeter of the wheel. It answers: What color family is this?
  > 
  > Dimension 2 is Saturation or Chroma: The purity or vividness of the color from 0% to 100%. At 100%, you have screaming, pure chromatic intensity. As you reduce saturation toward 0%, you bleed all chromatic vitality out until it becomes a neutral gray.
  > 
  > Dimension 3 is Value or Brightness: The relative luminance from 0% (pitch black darkness) to 100% (maximum light emission).
  > 
  > Memorize this rule: Value does the heavy lifting in graphic design; Hue simply takes the credit. If your value contrast is broken, a visually impaired user cannot read your text, a mobile user cannot see your buttons in sunlight, and your hierarchy collapses into visual chaos."
- **Classroom Checkpoint Interaction:**
  - Prompt students: *"What is the fastest test used by senior art directors to verify if a UI layout has sufficient contrast?"*
  - Reveal: **The Grayscale Value Test**—convert the entire screen to 100% grayscale. If the hierarchy remains crystal clear in black and white, the design will succeed in full color.
- **Transition Line:** *"Now let's see how professional designers manipulate Value and Saturation using three precise formulas: Tints, Shades, and Tones."*

---

#### Slide 4: 2c. Altering Color: Tints, Shades, and Tones (18:00 – 24:00)
- **Visuals on Screen:** `assets/tint_tone_shade_chart.png` (1875 Hints on Tints Archive), and `assets/slide4_tint_shade_tone.svg` (Master Vector Swatches).
- **Instructor Spoken Dialogue:**
  > "In casual speech, people misuse the word 'shade' to mean any color alteration. As professional designers, we use three distinct technical definitions:
  > 
  > Tint: Take a pure hue and add pure White. Tints elevate value and reduce saturation, giving birth to pastels, fresh spring vibes, and clean UI card backgrounds.
  > 
  > Shade: Take a pure hue and add pure Black. Shades decrease value, introducing dramatic mystery, depth, authority, and luxurious dark-mode surfaces.
  > 
  > Tone: Take a pure hue and add neutral Gray. Tones desaturate a hue without extreme shifts toward pure white or pure black. Tones are the secret behind sophisticated, earthy, retro, and understated brand palettes.
  > 
  > When you work with modern design systems like Tailwind CSS, notice how color tokens (e.g., Blue-50 to Blue-900) are engineered: 50 to 300 are Tints, 500 is your pure Hue, and 700 to 900 are Shades."
- **Classroom Checkpoint Interaction:**
  - Prompt students: *"Why should digital illustrators never shade a subject by simply multiplying pure black (#000000) over the base color?"*
  - Reveal: **The Muddy Shadow Error**—pure black removes chromatic vibrancy, producing dead, dirty shadows. Master artists shift the hue toward cool blue/violet while darkening, mimicking natural ambient skylight in shadows.
- **Transition Line:** *"Beyond lightness and darkness, colors possess a visceral psychological temperature. Let's explore Warm vs. Cool dynamics."*

---

#### Slide 5: 2d. Color Temperature: Warm vs. Cool Colors (24:00 – 30:00)
- **Visuals on Screen:** `assets/monet_impression_sunrise_warm_cool.jpg` (Claude Monet's Impression Sunrise), `assets/warm_vs_cool_color_wheel.jpg`, and `assets/slide5_warm_vs_cool.svg`.
- **Instructor Spoken Dialogue:**
  > "Split the 12-part color wheel right down the middle from Yellow-Green to Red-Violet, and you bisect the emotional universe:
  > 
  > On one half, Warm Colors: Reds, Oranges, and Yellows. Warm colors physically stimulate the human nervous system, raising heart rate and blood pressure. Optically, warm colors 'advance' forward—they appear closer to the viewer than they actually are.
  > 
  > On the other half, Cool Colors: Blues, Greens, and Violets. Cool colors evoke calm water, deep alpine lakes, and night skies. Optically, cool colors 'recede' backward into the background.
  > 
  > Look at Claude Monet's masterpiece 'Impression, Sunrise' on screen. Notice how that fiery orange sun and its reflection seem to hover inches off the canvas, while the cool blue-gray water and harbor recede miles into the distance. This is Atmospheric Perspective, and web designers use it every day to make Call-to-Action buttons pop forward over cool slate cards."
- **Classroom Checkpoint Interaction:**
  - Prompt students: *"In astrophysics, blue stars (25,000K) are vastly hotter than red stars (3,000K). Why does human psychology perceive red as hot and blue as freezing cold?"*
  - Reveal: **The Terrestrial Evolutionary Bias**—our survival evolved around earthly elements: fire, embers, and blood signify heat and physical arousal; ice, snow, and deep mountain waters signify cold.
- **Transition Line:** *"Now that we understand chromatic temperatures, how do we combine multiple colors into harmonious chords? Let's dive into Color Harmonies."*

---

#### Slide 6: 3. Color Harmonies I: Complementary & Analogous Schemes (30:00 – 38:00)
- **Visuals on Screen:** `assets/van_gogh_night_cafe_complementary.jpg` (Van Gogh's Night Café), `assets/van_gogh_cafe_terrace.jpg`, and `assets/slide6_harmonies_part1.svg`.
- **Instructor Spoken Dialogue:**
  > "Color harmonies are not matters of subjective taste; they are geometric chords struck across the color circle.
  > 
  > First: Complementary Harmony. Two colors positioned 180° directly opposite on the wheel—Blue and Orange, Red and Green, Yellow and Violet. Complementary colors create Simultaneous Contrast. When placed side-by-side, each makes the other appear brighter, more saturated, and visually electric. That's why sports teams (Knicks, Mets) and movie posters use it to grab attention.
  > 
  > Look at Vincent van Gogh's 'The Night Café' on screen. Van Gogh famously wrote to his brother Theo: 'I have tried to express the terrible passions of humanity by means of red and green.' The clash of blood-red walls and acidic green ceilings produces visceral emotional tension.
  > 
  > Second: Analogous Harmony. Three to five colors sitting right next to each other within a 30° to 60° arc—like Yellow, Yellow-Green, and Green. Because they share a common root wavelength, there is zero visual friction. Analogous palettes feel peaceful, organic, and cohesive, which is why brands like Mastercard and BP use them."
- **Classroom Checkpoint Interaction:**
  - Prompt students: *"Why do over 80% of Hollywood blockbuster movies grade their film footage in Teal and Orange?"*
  - Reveal: **The Hollywood Teal & Orange Phenomenon**—human skin tones fall in the warm orange spectrum across all ethnic groups. The exact complement of orange is cyan/teal. Pushing shadows to teal and actors' faces to warm orange pops actors off the screen with cinematic depth.
- **Transition Line:** *"Complementary and analogous are only the beginning. Let's look at more complex geometric relationships: Monochromatic, Triadic, and Tetradic schemes."*

---

#### Slide 7: 3b. Color Harmonies II: Monochromatic, Triadic & Tetradic (38:00 – 46:00)
- **Visuals on Screen:** `assets/mondrian_composition_triadic.jpg` (Piet Mondrian), `assets/picasso_old_guitarist_monochromatic.jpg` (Picasso Blue Period), `assets/tetradic_color_harmony_design.jpg`, and `assets/slide7_harmonies_part2.svg`.
- **Instructor Spoken Dialogue:**
  > "Let's examine three more master harmonies:
  > 
  > Monochromatic: Uses a single base hue, modulated exclusively through tints, shades, and tones. It is impossible for a monochromatic palette to clash. Look at Picasso's 'The Old Guitarist' on screen from his Blue Period (1901–1904). By stripping away all competing hues and using only somber blue values, Picasso creates an atmosphere of grief and contemplative poverty.
  > 
  > Triadic Harmony: Three colors spaced exactly 120° apart, forming an equilateral triangle on the wheel. Look at Piet Mondrian's 'Composition with Red, Yellow, and Blue'. Triadic palettes offer high chromatic energy while maintaining optical balance. It is the signature palette of comic book superheroes—think of Superman's primary blue suit, red cape, and yellow shield.
  > 
  > Tetradic (Double-Complementary): Four colors formed by two complementary pairs (a rectangle or square on the wheel). Tetradic offers the richest variety of any harmony, but beware: never use all four colors in equal 25% amounts! Choose one dominant hue and use the other three as supporting accents."
- **Classroom Checkpoint Interaction:**
  - Prompt students: *"How did Piet Mondrian revolutionize modern graphic design by using only the primary triad with black lines and white space?"*
  - Reveal: **The Mondrian Constraint**—Mondrian proved that pure structural rhythm and balance can achieve monumental power without decorative clutter.
- **Transition Line:** *"We now understand harmonies in the abstract. But what happens when we take our designs into the physical world? Let's examine the two competing color models: RGB and CMYK."*

---

#### Slide 8: 4. Color Models I: RGB (Additive Screen Light) (46:00 – 52:00)
- **Visuals on Screen:** `assets/rgb_additive_spotlights.png` (Additive Focused Beams), `assets/rgb_oled_subpixel_macro.jpg` (Subpixel Microscope Photo), and `assets/slide8_rgb_additive.svg`.
- **Instructor Spoken Dialogue:**
  > "Every digital device you own—smartphones, monitors, televisions—operates under the RGB Additive Color Model.
  > 
  > Why 'Additive'? Because it begins in total pitch-black darkness. When your screen is powered off, it emits 0 photons. To create color, microscopic Red, Green, and Blue subpixels emit light wavelengths directly into your retinas.
  > 
  > In 8-bit digital color, each channel has 256 intensity values (0 to 255). When Red, Green, and Blue all fire at full 255 power, the light adds up to produce pure, luminous White (#FFFFFF).
  > 
  > Look at the microscope photo on screen. That is an extreme close-up of an OLED smartphone screen. Those tiny red, green, and blue LEDs fire in varying combinations to trick your brain into seeing photographic reality."
- **Classroom Checkpoint Interaction:**
  - Prompt students: *"Your phone screen has no physical yellow light LEDs—only Red, Green, and Blue. How do you see yellow on screen?"*
  - Reveal: **Retinal Cone Synthesis**—when adjacent Red and Green subpixels fire simultaneously at equal intensity, your L-cones and M-cones activate together, and your visual cortex synthesizes pure Yellow light!
- **Transition Line:** *"Light emission works wonders on glass. But what happens when we put ink on dead wood fibers? Let's turn to CMYK printing."*

---

#### Slide 9: 4b. Color Models II: CMYK (Subtractive Print Pigments) (52:00 – 58:00)
- **Visuals on Screen:** `assets/cmyk_four_color_process_plates.jpg` (Process Printing Plates), and `assets/slide9_cmyk_subtractive.svg` (Halftone & TAC Diagram).
- **Instructor Spoken Dialogue:**
  > "Print is the exact polar opposite of digital screens. Print is a Subtractive Color Model.
  > 
  > Printing begins on white paper that reflects ambient room light. When a commercial printing press deposits ink on that paper, the ink acts as a physical chemical filter that absorbs—or subtracts—specific wavelengths of light.
  > 
  > Cyan ink absorbs red light; Magenta ink absorbs green light; Yellow ink absorbs blue light.
  > 
  > In theory, overlapping 100% C + 100% M + 100% Y should absorb all light and produce black. But in the real world of chemical inks, physical impurities turn that mixture into a muddy, murky brown. That is why commercial printing requires a fourth plate: Key Black (K). The black plate provides sharp text, deep shadows, and reduces ink costs."
- **Classroom Checkpoint Interaction:**
  - Prompt students: *"What catastrophic physical press failure happens if a designer sends a print file containing 100% C + 100% M + 100% Y + 100% K (400% total ink)?"*
  - Reveal: **The Total Area Coverage (TAC) Disaster**—the paper becomes soaked in wet liquid ink, tears in high-speed press rollers, smudges onto adjacent sheets, and never dries. Commercial printers enforce a Total Area Coverage limit between 280% and 320%.
- **Transition Line:** *"Because screen light and print ink operate under completely different physics, we hit a massive obstacle: The Gamut Wall. Let's see how professional designers navigate it."*

---

#### Slide 10: 4c. Production Workflow: When to Use RGB vs. CMYK & The Gamut Wall (58:00 – 64:00)
- **Visuals on Screen:** `assets/cie_gamut_rgb_vs_cmyk.png` (CIE 1931 Chromaticity Gamut Comparison), `assets/pantone_swatch_book_pms.jpg`, and `assets/slide10_rgb_vs_cmyk_gamut.svg`.
- **Instructor Spoken Dialogue:**
  > "Look at the CIE 1931 Chromaticity diagram on screen. That large horseshoe curve represents all colors the human eye can see.
  > 
  > The triangle inside represents the sRGB digital screen gamut. Notice how large it is.
  > 
  > Now look at the small squashed shape inside: that is the CMYK print gamut. This mismatch is why amateur designers cry when their posters come back from the print shop! That electric neon lime green or glowing cyan they designed on an iMac literally does not exist in the physical universe of four-color process inks.
  > 
  > How do elite designers solve this?
  > Rule 1: Always design in CMYK mode (300 DPI) from day one if the project is headed for print.
  > Rule 2: For brand logos requiring neon or metallic perfection on paper, specify a Pantone Matching System (PMS) spot color—a custom pre-mixed ink formula run on a dedicated 5th printing press station."
- **Classroom Checkpoint Interaction:**
  - Prompt students: *"What does the yellow warning triangle inside Adobe Photoshop's Color Picker mean?"*
  - Reveal: **The 'Out of Gamut' Warning**—the selected screen color cannot be reproduced using CMYK inks. Clicking the alert automatically snaps the color to the nearest achievable print ink equivalent.
- **Transition Line:** *"With technical production mastered, let's explore how color drives commercial decisions and human emotions: Brand Psychology."*

---

#### Slide 11: 5. Color Palette & Branding: Color Psychology & Semiotics (64:00 – 70:00)
- **Visuals on Screen:** `assets/color_psychology_matrix.jpg` (Applied Psychology Archive), and `assets/slide11_color_psychology.svg` (Brand Psychology Matrix).
- **Instructor Spoken Dialogue:**
  > "Studies show that between 62% and 90% of a consumer's snap evaluation of a product is based on color alone. Color is a subconscious shortcut.
  > 
  > Let's decode the emotional archetypes:
  > Red: Physiologically elevates heart rate, creating urgency, passion, and appetite stimulation. Brands: Coca-Cola, Netflix, Target, Red Bull.
  > Blue: The world's most trusted corporate color. Lowers pulse rate, evoking stability, security, institutional dependability, and logic. Brands: IBM, PayPal, Intel, Chase, American Express.
  > Green: Symbolizes organic renewal, nature, balance, and financial growth. Brands: Starbucks, Whole Foods, Spotify.
  > Yellow: The most luminous color to the human eye. Radiates optimism, youth, and warmth. Brands: McDonald's, IKEA, Snapchat.
  > Purple: Historically the rarest dye (Phoenician Tyrian purple from sea snails). Evokes royalty, luxury, fantasy, and mystery. Brands: Cadbury, Hallmark, Twitch.
  > Black & White: Timeless luxury, authority, and modern minimalism. Brands: Apple, Nike, Chanel."
- **Classroom Checkpoint Interaction:**
  - Prompt students: *"Why could a global campaign featuring white bridal gowns and red celebration envelopes cause offensive confusion in China or India?"*
  - Reveal: **Cultural Color Semiotics**—in the West, white signifies purity and weddings; in East Asian cultures, white is the traditional mourning color of funerals, while red represents good fortune, joy, and weddings!
- **Transition Line:** *"Knowing what colors mean is half the battle; the other half is proportion. How much color should you use? Let's master the 60-30-10 Rule."*

---

#### Slide 12: 5b. Designing a Brand Color Palette: The 60-30-10 Rule & Systems (70:00 – 74:00)
- **Visuals on Screen:** `assets/palette_design_swatches.jpg` (Design Swatch Palette Systems), and `assets/slide12_brand_palette_60_30_10.svg`.
- **Instructor Spoken Dialogue:**
  > "Borrowed from classical interior architecture, the 60-30-10 Rule is the single most effective formula to ensure your layouts never look cluttered:
  > 
  > 60% Dominant Base: Your grounding neutral canvas (backgrounds, negative space, margins, neutral cards). Usually deep slate, off-white, or soft charcoal.
  > 
  > 30% Secondary Color: Your structural brand identity (headers, navigation, secondary cards, typography headings).
  > 
  > 10% Accent Color: Your high-contrast focal beacon reserved strictly for Call-to-Action buttons, active badges, and urgent notifications.
  > 
  > When an amateur designer loves a color like hot magenta, they paint 50% of the website in it. When everything screams for attention, nothing is heard. By keeping 60% of your canvas neutral, your 10% accent acts like a lighthouse directing the user's eye straight to what matters."
- **Classroom Checkpoint Interaction:**
  - Prompt students: *"What is the 'Carnival Clutter' trap in brand style guides?"*
  - Reveal: Using 5 saturated neon colors in equal 20% stripes. Visual hierarchy dissolves, and the user's eye experiences acute sensory fatigue.
- **Transition Line:** *"Let's conclude by uniting technical precision, accessibility law, and our master checklist."*

---

#### Slide 13: 6. Conclusion: The Master Color Playbook & WCAG Accessibility (74:00 – 78:00)
- **Visuals on Screen:** `assets/wcag_color_contrast_accessibility.png` (WCAG Contrast Guidelines), and `assets/slide13_wcag_accessibility.svg` (Playbook Summary Vector).
- **Instructor Spoken Dialogue:**
  > "We conclude with the most important responsibility of a modern designer: Accessibility.
  > 
  > The Web Content Accessibility Guidelines (WCAG) are not optional suggestions; in many jurisdictions, they are legal requirements.
  > Level AA mandates a minimum contrast ratio of 4.5:1 for standard body text, and 3.0:1 for large headings.
  > Level AAA mandates 7.0:1 for enhanced legibility.
  > 
  > Furthermore, roughly 8% of all men and 0.5% of women have color vision deficiency—most commonly red-green Deuteranopia. Never convey information using color alone! If a form field has an error, don't just turn the border red; add an exclamation icon and descriptive helper text.
  > 
  > Remember the 5 Laws of Color Mastery:
  > 1. Value Precedes Color.
  > 2. Temperature Directs Space.
  > 3. Harmony Governs Emotion.
  > 4. Respect the Medium (RGB vs. CMYK).
  > 5. Guard the 60-30-10 Hierarchy.
  > 
  > You are now ready to prove your chromatic command. Pull out your devices or click the Quiz button in the top navigation bar. Let's begin the Lesson 5 Mastery Quiz!"
- **Classroom Action:** Direct students to click 'Quiz Challenge' in the header to take the 15-question interactive quiz.

---
"""

with open(path, "w", encoding="utf-8") as f:
    f.write(script_content)

print("Lesson 5 TEACHER_SCRIPT.md generated successfully!")

