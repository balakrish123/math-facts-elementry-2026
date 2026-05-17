# Elementary Learning Hub 2026

An interactive, kid-friendly web application for elementary students to practice Math, Spelling, Vocabulary, Geography, Science, Measurement, and Chess Puzzles.

## Live Site

**https://balakrish123.github.io/math-facts-elementry-2026/**

| Page | Link |
|------|------|
| Home / Login | [index.html](https://balakrish123.github.io/math-facts-elementry-2026/index.html) |
| Math | [math.html](https://balakrish123.github.io/math-facts-elementry-2026/math.html) |
| Spelling | [spelling.html](https://balakrish123.github.io/math-facts-elementry-2026/spelling.html) |
| Vocabulary | [vocabulary.html](https://balakrish123.github.io/math-facts-elementry-2026/vocabulary.html) |
| Science | [science.html](https://balakrish123.github.io/math-facts-elementry-2026/science.html) |
| Geography | [geography.html](https://balakrish123.github.io/math-facts-elementry-2026/geography.html) |
| Measurement | [measurement.html](https://balakrish123.github.io/math-facts-elementry-2026/measurement.html) |
| Chess Puzzles | [chess.html](https://balakrish123.github.io/math-facts-elementry-2026/chess.html) |

## 🎯 Features

### Core Features (All Subjects)
- **Login System** - Secure access with demo accounts
- **7 Complete Subjects** - Math, Spelling, Vocabulary, Science, Geography, Measurement, Chess
- **Rewards System** - Earn 120+ emoji rewards (animals, vehicles, treats, etc.)
- **45-Second Timer** - Challenge mode with pause/resume functionality
- **Sound Effects** - Audio feedback for correct/incorrect answers
- **Score Tracking** - Track correct answers, streak, and total attempts
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Fun Break Messages** - 30 themed break messages when paused
- **No Build Process** - Pure HTML/CSS/JavaScript, works offline

## 📁 File Structure

```
math-facts-elementry-2026/
├── index.html              # Login & Subject Selection
├── styles.css              # Shared styles for all pages
├── common.js               # Shared JavaScript functions (rewards, timer, sounds)
├── math.html               # Math Facts Practice ✅ COMPLETE
├── spelling.html           # Spelling Practice ✅ COMPLETE (with M-W API)
├── spelling-words.js       # 2026 Elementary Spell Bowl word list
├── vocabulary.html         # Vocabulary Builder ✅ COMPLETE
├── vocabulary-words.js     # 99 Vocabulary words (Word Wizard 3rd-5th)
├── science.html            # Science Practice ✅ COMPLETE
├── science-questions.js    # 80 Science questions (multiple choice)
├── geography.html          # Geography Practice ✅ COMPLETE
├── measurement.html        # Measurement Practice ✅ COMPLETE
├── chess.html              # Chess Puzzles ✅ COMPLETE (interactive board)
├── puzzles-easy.js         # 500 easy chess puzzles (from Lichess)
├── puzzles-medium.js       # 500 medium chess puzzles
├── puzzles-hard.js         # 250 hard chess puzzles
├── lib/                    # Local CDN fallback (git-ignored, see setup below)
├── MERRIAM_WEBSTER_SETUP.md  # Setup guide for M-W API
└── README.md               # This file
```

## 🚀 Quick Start

### Running Locally

The Chess Puzzles page uses ES modules, so it must be served over HTTP (opening `file://` directly won't work). Start a local server:

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080

> **Note:** All other pages (Math, Spelling, etc.) work fine when opened directly in a browser. Only the Chess page requires a local server due to ES module imports.

### Login

1. **Open the app**: Open `index.html` (or http://localhost:8080)
2. **Login**: Use a demo account:
   - student / math123
   - teacher / teach456
   - admin / admin789
3. **Choose a subject**: Click on any subject card
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
| 🌍 Geography | ✅ COMPLETE | — | Multiple choice | Maps, Timer |
| 📏 Measurement | ✅ COMPLETE | — | Input answer | Timer, Rewards |
| ♟️ Chess | ✅ COMPLETE | 1,250 puzzles | Drag & drop / Type | Interactive board, Lichess link |

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

### ♟️ Chess Puzzles (COMPLETE)

**1,250 Puzzles** from the [Lichess open database](https://database.lichess.org/#puzzles) (CC0 license)

**Difficulty Levels:**
- Easy: 500 puzzles (Mate in 1, simple tactics, rating ≤1600)
- Medium: 500 puzzles (Mate in 2, tactical puzzles, rating ≤1800)
- Hard: 250 puzzles (Mate in 2-5, advanced tactics, rating ≤2200)

**Interactive Board** powered by [chessground](https://github.com/lichess-org/chessground):
- **Drag & drop** pieces to make moves
- **Legal move hints** shown as dots on valid squares
- **Auto-orientation** — board flips to the side that needs to move
- **Type Move** mode available as alternative input

**Special Features:**
- **"Try on Lichess"** link on each puzzle to practice on [lichess.org](https://lichess.org)
- Puzzle rating displayed for each problem
- Category badges (Mate in 1, Fork, Pin, Skewer, etc.)
- CDN loading with local fallback (see setup below)

**Refreshing Puzzles:**
1. Download the latest database: https://database.lichess.org/puzzles/lichess_db_puzzle.csv.zst
2. Place it at `~/Downloads/lichess_db_puzzle.csv.zst`
3. Run: `python3 generate_puzzles.py`
4. Requires `python-chess` (`pip install chess`) and `zstd`

**CDN Fallback Setup** (local backup for chess libraries):
```sh
mkdir -p lib/chessground lib/chess
curl -sL -o lib/chessground/chessground.base.css "https://unpkg.com/chessground@9.1.1/assets/chessground.base.css"
curl -sL -o lib/chessground/chessground.brown.css "https://unpkg.com/chessground@9.1.1/assets/chessground.brown.css"
curl -sL -o lib/chessground/chessground.cburnett.css "https://unpkg.com/chessground@9.1.1/assets/chessground.cburnett.css"
curl -sL -o lib/chessground/chessground.min.js "https://unpkg.com/chessground@9.1.1/dist/chessground.min.js"
curl -sL -o lib/chess/chess.min.js "https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.3/chess.min.js"
```

### 🌍 Geography Practice (COMPLETE)

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

### Chess Puzzles
- **Source**: [Lichess Puzzle Database](https://database.lichess.org/#puzzles)
- **License**: CC0 (public domain)
- **Total Puzzles**: 1,250 (500 easy + 500 medium + 250 hard)
- **Board Library**: [chessground](https://github.com/lichess-org/chessground) by Lichess (GPL-3.0)
- **Move Validation**: [chess.js](https://github.com/jhlywa/chess.js) (MIT)

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

### Complete Subjects (7 of 7)
1. **Math Facts** - 12 operations, 16-piece puzzle, unlimited questions
2. **Spelling** - 750 words, text-to-speech, second-chance system
3. **Science** - 80 questions, multiple choice, 7 categories
4. **Vocabulary** - 99 words, flashcard learning, auto-reveal
5. **Geography** - Geography questions with maps
6. **Measurement** - Measurement practice
7. **Chess Puzzles** - 1,250 Lichess puzzles, interactive drag-and-drop board

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
- [x] ~~Geography questions~~ ✅ COMPLETE
- [x] ~~Measurement practice~~ ✅ COMPLETE
- [x] ~~Chess puzzles with interactive board~~ ✅ COMPLETE (1,250 Lichess puzzles)
- [ ] Progress tracking across sessions (localStorage)
- [ ] Printable certificates
- [ ] Teacher dashboard
- [ ] Custom word lists
- [ ] Multiplayer mode
- [ ] More vocabulary words (currently 99 of 200+ available)
- [ ] Science question images/diagrams
- [ ] Spelling word audio caching for offline use

## 🎯 Quick Feature Comparison

| Feature | Math | Spelling | Vocabulary | Science | Chess |
|---------|------|----------|------------|---------|-------|
| Timer | ✅ 45s | ✅ 45s | ❌ Auto | ✅ 45s | ✅ 90s |
| Pause/Resume | ✅ | ✅ | ❌ | ✅ | ✅ |
| Jigsaw Puzzle | ✅ 16pc | ❌ | ❌ | ✅ 16pc | ❌ |
| Difficulty Levels | ✅ 3 | ✅ 3 | ❌ | ✅ 3 | ✅ 3 |
| Sound Effects | ✅ | ✅ | ✅ | ✅ | ✅ |
| Score Tracking | ✅ | ✅ | ✅ Progress | ✅ | ✅ |
| Input Method | Type | Type | None | Click | Drag / Type |
| Special Feature | Fractions | M-W Dictionary | Auto-reveal | Categories | Lichess link |

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

**Version**: 3.0 (May 2026)
**Subjects Complete**: 7/7 (Math, Spelling, Vocabulary, Science, Geography, Measurement, Chess)
**Total Learning Items**: 2,179+ questions, words, and puzzles
