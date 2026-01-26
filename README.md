# Elementary Learning Hub

An interactive, kid-friendly web application for elementary students to practice Math, Spelling, Vocabulary, Geography, and Science.

## 🎯 Features

### Core Features (All Subjects)
- **Login System** - Secure access with demo accounts
- **5 Complete Subjects** - Math, Spelling, Vocabulary, Science, Geography
- **Rewards System** - Earn 120+ emoji rewards (animals, vehicles, treats, etc.)
- **45-Second Timer** - Challenge mode with pause/resume functionality
- **Sound Effects** - Audio feedback for correct/incorrect answers
- **Score Tracking** - Track correct answers, streak, and total attempts
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Fun Break Messages** - 30 themed break messages when paused
- **No Dependencies** - Pure HTML/CSS/JavaScript, works offline

## 📁 File Structure

```
math-facts-elementry-2026/
├── index.html              # Login & Subject Selection
├── styles.css              # Shared styles for all pages (1,228 lines)
├── common.js               # Shared JavaScript functions (rewards, timer, sounds)
├── math.html               # Math Facts Practice ✅ COMPLETE
├── spelling.html           # Spelling Practice ✅ COMPLETE (with M-W API)
├── spelling-words.js       # 750 Spelling words from Indiana Spell Bowl
├── vocabulary.html         # Vocabulary Builder ✅ COMPLETE
├── vocabulary-words.js     # 99 Vocabulary words (Word Wizard 3rd-5th)
├── science.html            # Science Practice ✅ COMPLETE
├── science-questions.js    # 80 Science questions (multiple choice)
├── geography.html          # Geography Practice (Template)
├── MERRIAM_WEBSTER_SETUP.md  # Setup guide for M-W API
├── 3738-science-trivia-for-kids.pdf  # Source: Science trivia
├── science.pdf             # Source: Grade 4 Science Test
├── WordWizardVocabList3-5.pdf        # Source: Vocabulary words
└── README.md               # This file
```

## 🚀 Quick Start

1. **Open the app**: Open `index.html` in any web browser
2. **Login**: Use a demo account:
   - student / math123
   - teacher / teach456
   - admin / admin789
3. **Choose a subject**: Click on any subject card (Math, Spelling, Vocabulary, Science)
4. **Start practicing**: Click "Start ▶️" to begin!

### 🎤 Optional: Enable Merriam-Webster Pronunciation (Recommended)

For **professional audio pronunciation** and **automatic definitions** on the spelling page:

1. Get a FREE API key from https://dictionaryapi.com/ (1,000 requests/day)
2. Follow the setup guide in [MERRIAM_WEBSTER_SETUP.md](MERRIAM_WEBSTER_SETUP.md)
3. Add your API key to [spelling.html](spelling.html) line 83

**Note:** The app works perfectly without the API - it uses browser text-to-speech. The M-W API just enhances quality!

## 📊 Project Status

| Subject | Status | Questions/Words | Format | Features |
|---------|--------|----------------|--------|----------|
| 🔢 Math | ✅ COMPLETE | 12 operations | Input answer | Puzzle, Timer, Rewards |
| 📝 Spelling | ✅ COMPLETE | 750 words | Type spelling | Text-to-speech, Timer |
| 📖 Vocabulary | ✅ COMPLETE | 99 words | Flashcards | 10s auto-reveal, Progress |
| 🔬 Science | ✅ COMPLETE | 80 questions | Multiple choice | Categories, Timer, Puzzle |
| 🌍 Geography | ⏳ Template | 0 | TBD | Coming soon |

## 📚 Subject Details

### 🔢 Math Facts Practice (COMPLETE)

**12 Operations:**
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Square Root
6. Cube Root
7. Exponents
8. Add Fractions (same denominator)
9. Find Denominator (equivalent fractions)
10. Find Numerator (equivalent fractions)
11. Reduce Fraction
12. Equal Fractions (comparison)

**Difficulty Levels:**
- Easy: 0-20
- Medium: 0-40
- Hard: 0-100

**Special Features:**
- 16-piece jigsaw puzzle (unlocks every 5 correct answers)
- Drag-and-drop puzzle pieces
- Timer pauses during puzzle placement
- Confetti celebration on puzzle completion

### 📝 Spelling Practice (COMPLETE)

**750 Words** from Indiana Academic Spell Bowl Elementary Division 2025

**Difficulty Levels (by word length):**
- Easy: 4-7 letters (235 words) - ache, common, phone, chief, etc.
- Medium: 8-12 letters (455 words) - Indiana, dictionary, California, etc.
- Hard: 13+ letters (60 words) - United States of America, electromagnetic, etc.

**How It Works:**
1. Merriam-Webster School Dictionary API pronounces the word (professional audio)
2. **Definition automatically displays** below the word
3. Student types the spelling
4. First mistake: Shows correct spelling, gives second chance
5. Second mistake: Counts as wrong, moves to next word
6. "🔊 Play Word" button to replay anytime

**Special Features:**
- **Merriam-Webster pronunciation** (real audio, not computer-generated)
- **Auto-display definitions** from School Dictionary API
- Smart fallback to Web Speech API (if offline or API unavailable)
- Slower speech rate (0.8x) for clarity when using fallback
- Case-insensitive spell checking
- Second-chance learning system
- No jigsaw puzzle (focus on words)
- Larger rewards bank for collecting

**Pronunciation System:**
- Primary: Merriam-Webster School Dictionary API (sd4)
- Fallback: Browser's built-in Text-to-Speech
- Free API tier: 1,000 requests/day
- See [MERRIAM_WEBSTER_SETUP.md](MERRIAM_WEBSTER_SETUP.md) for setup instructions

### 📖 Vocabulary Practice (COMPLETE)

**99 Words** from Word Wizard Vocabulary List (Grades 3-5)

**Format:** Flashcard-style learning
- Word appears with grammatical type (n., v., adj., adv.)
- 10-second countdown to think about meaning
- Definition automatically reveals after countdown
- Click "Next Word →" to continue learning
- Progress tracking shows words studied

**Special Features:**
- No quiz format - pure learning experience
- Clean, centered card layout
- No side panels or distractions
- Beautiful animations (fade in, slide in)
- Progress bar tracks completion
- Study all 99 words or restart anytime

**Sample Words:**
- Abbreviate, Ability, Accurate, Alliance, Amateur
- Camouflage, Catastrophe, Chemistry, Communicate
- Diagnose, Dilemma, Diploma, Dynasty, Eclipse
- And 84 more challenging vocabulary words!

### 🌍 Geography Practice (Coming Soon)

Planned features:
- Countries & capitals
- States & cities
- Continents & oceans
- Interactive maps (future)

### 🔬 Science Practice (COMPLETE)

**80 Multiple Choice Questions** from:
- Science Trivia for Kids
- Grade 4 Elementary Science Test (NY State)

**Categories:**
- 🧬 Biology (cells, organisms, adaptations, life cycles)
- 🌍 Geology (Earth layers, rocks, minerals)
- ☁️ Meteorology (weather, atmosphere, instruments)
- 🌌 Astronomy (planets, moon, universe, gravity)
- ⚗️ Physical Science (matter, energy, forces, circuits)
- 🌱 Environmental Science (recycling, ecosystems)
- 🔬 General Science & Scientific Thinking

**Difficulty Levels:**
- Easy: 24 questions (Grades 1-2 concepts)
- Medium: 23 questions (Grades 3-4 concepts)
- Hard: 33 questions (Grades 5-6 concepts)

**How It Works:**
1. Multiple choice format (2-4 options per question)
2. Click the correct answer button
3. Instant visual feedback (green = correct, red = incorrect)
4. Category badge shows the science topic
5. Questions never repeat until all are used

**Special Features:**
- Interactive multiple choice buttons
- Category badges (Biology, Astronomy, etc.)
- Visual answer feedback with animations
- Smart question rotation
- 16-piece jigsaw puzzle system
- Pause/resume functionality

## 🎮 How to Play

### General Workflow
1. Login at [index.html](index.html)
2. Select a subject
3. Choose difficulty level
4. Click "Start ▶️"
5. Answer questions
6. Earn rewards
7. Complete puzzle (Math only)
8. Click "Pause ⏸️" to take breaks

### Controls
- **Start ▶️** - Begin practice session
- **Pause ⏸️** - Pause and see fun break message (Math, Spelling, Science)
- **Resume ▶️** - Continue from where you left off
- **🔊** - Toggle sound effects
- **← Back to Subjects** - Return to subject selection
- **🏠 Logout** - Clear session and return to login page
- **Enter Key** - Submit answer (Math, Spelling pages)
- **Click Buttons** - Select answer (Science page)
- **Next Word →** - Continue to next word (Vocabulary page)
- **🔊 Play Word** - Replay pronunciation with definition (Spelling page)

### Scoring
- **Correct** - Total correct answers
- **Streak** - Current consecutive correct answers
- **Total** - Total questions attempted

## 🎨 Customization

### Change Login Credentials
Edit `index.html` line 210-214:
```javascript
const validCredentials = {
    'student': 'math123',
    'teacher': 'teach456',
    'admin': 'admin789'
};
```

### Adjust Timer Duration
Edit `common.js` line 9:
```javascript
let timeLeft = 45; // Change to desired seconds
```

### Add More Spelling Words
Edit `spelling-words.js` and add words to the appropriate difficulty array.

### Add More Science Questions
Edit `science-questions.js`:
```javascript
{
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 0,  // Index of correct answer (0-3)
    category: "Biology"  // Or Geology, Astronomy, etc.
}
```

### Add More Vocabulary Words
Edit `vocabulary-words.js`:
```javascript
{
    word: "Example",
    type: "n.",
    definition: "A representative form or pattern."
}
```

### Customize Colors
Edit CSS variables in `styles.css` lines 1-11:
```css
:root {
    --primary-color: #667eea;
    --success-color: #22c55e;
    --warning-color: #f59e0b;
    --error-color: #ef4444;
}
```

## 🏆 Reward System

### Emoji Categories (120+ total):
- ⭐ Achievements & Stars (8)
- 🎉 Celebrations (8)
- 🦄 Animals (32)
- 🚀 Vehicles (24)
- 🍭 Candies & Treats (16)
- 🍎 Fruits (16)
- 🌺 Nature (8)
- 🥷 Ninja & Warriors (7)

### Rewards Bank
- Collects all earned rewards
- Scrollable when full
- Persistent during session
- Visual floating animation on earn

## 🧩 Jigsaw Puzzle (Math Only)

- **16 pieces** total
- **Unlocks** every 5 correct answers
- **Jigsaw-shaped pieces** with zigzag edges
- **Drag-and-drop** to correct slot
- **Timer pauses** until piece is placed
- **Progress bar** shows completion
- **Confetti celebration** when complete

## 🎵 Audio Features

### Math Facts
- Cheerful ascending melody for correct (C-E-G notes)
- Gentle descending tone for incorrect

### Spelling Practice
- **Text-to-Speech** word pronunciation
- Slower rate (0.8x) for kids
- Automatic pronunciation on new word
- Replay button available anytime

## 💾 Session Storage

The app uses `sessionStorage` to remember login:
- Login persists across subject pages
- Cleared when browser tab closes
- No passwords stored permanently

## 🌐 Browser Compatibility

### Required Features:
- **Web Speech API** (for spelling pronunciation)
- **Web Audio API** (for sound effects)
- **CSS Grid** & **Flexbox**
- **CSS Custom Properties** (variables)
- **ES6 JavaScript** (arrow functions, template literals)

### Tested Browsers:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with side panels
- **< 1400px**: Slightly smaller side panels
- **< 1200px**: Compact layout
- **< 900px**: Stacked mobile layout

## 🎯 Educational Goals

### Math
- Master basic arithmetic
- Understand roots and exponents
- Practice fraction operations
- Build mental math speed

### Spelling
- Learn 750 competition words
- Improve listening skills
- Practice correct spelling
- Build vocabulary

## 🔧 Technical Details

### No Build Process
- Plain HTML/CSS/JavaScript
- No npm, webpack, or build tools
- Open files directly in browser
- Edit with any text editor

### Code Organization
- **Shared styles** - `styles.css` (responsive, variables)
- **Shared logic** - `common.js` (rewards, timer, sounds)
- **Page-specific** - Each subject has own logic

### Performance Optimizations
- CSS `will-change` for animations
- Efficient DOM updates
- Lazy sound initialization
- Conditional puzzle rendering

## 📝 Adding New Content

### To Add More Math Operations:
1. Edit `math.html`
2. Add button to operations grid
3. Add case to `generateProblem()` switch statement

### To Add Spelling Words:
1. Edit `spelling-words.js`
2. Add words to appropriate difficulty array
3. Words auto-categorize by length

### To Add Science Questions:
1. Edit `science-questions.js`
2. Add question object with: `question`, `options` array, `correct` index, `category`
3. Place in appropriate difficulty level (easy, medium, hard)
4. Questions auto-randomize and track used questions

### To Add Vocabulary Words:
1. Edit `vocabulary-words.js`
2. Add word object with: `word`, `type` (n., v., adj., adv.), `definition`
3. Append to the vocabularyWords array
4. Update total count in vocabulary.html

### To Implement Other Subjects:
1. Copy `spelling.html` or `science.html` structure
2. Replace content with subject-specific questions
3. Modify `generateProblem()` and `checkAnswer()`
4. Keep same UI/timer/rewards system

## 🎓 Credits

### Spelling Word List
- **Source**: Indiana Academic Spell Bowl Elementary Division 2025
- **Dictionary**: Merriam-Webster's Collegiate Dictionary 11th Edition
- **Total Words**: 750
- **Website**: www.iasp.org

### Pronunciation & Definitions
- **API**: Merriam-Webster School Dictionary API (sd4)
- **Features**: Professional audio pronunciation + word definitions
- **Cost**: FREE (1,000 requests/day)
- **Documentation**: See [MERRIAM_WEBSTER_SETUP.md](MERRIAM_WEBSTER_SETUP.md)
- **Fallback**: Browser Web Speech API (works offline)

### Science Questions
- **Source 1**: Science Trivia for Kids
  - Website: kids.lovetoknow.com/child-education/kids-science-trivia-questions
  - Categories: Biology, Geology, Meteorology, Astronomy, General Science
- **Source 2**: Grade 4 Elementary-Level Science Test
  - The University of the State of New York
  - State Education Department, June 2018
  - 30 multiple choice + 15 open-ended questions

### Vocabulary Words
- **Source**: Word Wizard Vocabulary Word List (3rd-5th Grade)
- **Organization**: Florida Education Fund
- **Total Words**: 99 (selected from comprehensive list)
- **Content**: Academic vocabulary with definitions

## ✨ What's New

### Latest Updates (January 2026)
- ✅ **Science Page Complete** - 80 multiple choice questions across 7 categories
- ✅ **Vocabulary Builder Complete** - 99 words with flashcard-style learning
- ✅ **Merriam-Webster Integration** - Professional pronunciation audio for spelling
- ✅ **Auto-Display Definitions** - Word meanings shown during spelling practice
- ✅ **Logout Functionality** - Secure logout returns to login screen
- ✅ **Enhanced UI** - Beautiful animations and responsive design
- ✅ **Smart Question Management** - No repeats until all questions used
- ✅ **Category Badges** - Shows topic for each science question
- ✅ **Progress Tracking** - Visual progress bars and counters
- ✅ **Fixed Pause/Resume** - Works perfectly on all pages
- ✅ **Layout Improvements** - No overlapping panels

### Complete Subjects (4 of 5)
1. **Math Facts** - 12 operations, 16-piece puzzle, unlimited questions
2. **Spelling** - 750 words, text-to-speech, second-chance system
3. **Science** - 80 questions, multiple choice, 7 categories
4. **Vocabulary** - 99 words, flashcard learning, auto-reveal

## 📊 Application Statistics

- **Total Questions/Words**: 80 science + 750 spelling + 99 vocabulary = 929+ learning items
- **Total Code Lines**: ~4,000+ lines of HTML/CSS/JavaScript
- **File Count**: 13 main files + 3 PDF sources + 1 setup guide
- **Emoji Rewards**: 120+ unique rewards
- **Break Messages**: 30+ themed messages
- **Supported Operations**: 12 math operations
- **Science Categories**: 7 topics
- **Vocabulary Words**: 99 with definitions
- **API Integration**: Merriam-Webster School Dictionary (free tier)
- **Responsive Breakpoints**: 4 screen sizes

## 📄 License

This is an educational project created for elementary students. Content sources are credited above.

## 🐛 Known Issues

None currently! Report any issues you find.

## 🚀 Future Enhancements

- [x] ~~Vocabulary word lists with definitions~~ ✅ COMPLETE (99 words)
- [x] ~~Science questions~~ ✅ COMPLETE (80 multiple choice)
- [x] ~~Merriam-Webster pronunciation~~ ✅ COMPLETE (with API integration)
- [x] ~~Word definitions in spelling~~ ✅ COMPLETE (auto-display)
- [x] ~~Logout functionality~~ ✅ COMPLETE
- [ ] Geography questions with maps
- [ ] Progress tracking across sessions (localStorage)
- [ ] Printable certificates
- [ ] Teacher dashboard
- [ ] Custom word lists
- [ ] Multiplayer mode
- [ ] More vocabulary words (currently 99 of 200+ available)
- [ ] Science question images/diagrams
- [ ] Spelling word audio caching for offline use

## 🎯 Quick Feature Comparison

| Feature | Math | Spelling | Vocabulary | Science |
|---------|------|----------|------------|---------|
| Timer | ✅ 45s | ✅ 45s | ❌ Auto | ✅ 45s |
| Pause/Resume | ✅ | ✅ | ❌ | ✅ |
| Jigsaw Puzzle | ✅ 16pc | ❌ | ❌ | ✅ 16pc |
| Rewards Bank | ✅ | ✅ | ❌ | ✅ |
| Difficulty Levels | ✅ 3 | ✅ 3 | ❌ | ✅ 3 |
| Sound Effects | ✅ | ✅ | ✅ | ✅ |
| Score Tracking | ✅ | ✅ | ✅ Progress | ✅ |
| Side Panels | ✅ | ✅ Small | ❌ Clean | ✅ |
| Input Method | Type | Type | None | Click |
| Definitions | ❌ | ✅ M-W API | ✅ Built-in | ❌ |
| Pronunciation | ❌ | ✅ M-W Audio | ❌ | ❌ |
| Special Feature | Fractions | M-W Dictionary | Auto-reveal | Categories |

## 💡 Tips for Best Experience

### For Students:
- Start with **Easy** difficulty to build confidence
- Use **Pause ⏸️** when you need a break
- Try to beat your **Streak** record
- Complete the **Jigsaw Puzzle** in Math & Science
- Collect all **120+ emoji rewards**
- Review vocabulary words multiple times

### For Teachers/Parents:
- Monitor **Streak** to gauge mastery
- Adjust **Timer** duration in code if needed
- Start with **Spelling** for younger students
- Use **Vocabulary** for reading comprehension
- **Science** questions align with Grade 4 standards

## 📞 Support

For questions or issues, please refer to the code comments or contact the developer.

---

**Made with ❤️ for elementary learners**

**Version**: 2.0 (January 2026)
**Subjects Complete**: 4/5 (Math, Spelling, Vocabulary, Science)
**Total Learning Items**: 929+ questions and words
