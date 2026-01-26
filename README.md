# Elementary Learning Hub

An interactive, kid-friendly web application for elementary students to practice Math, Spelling, Vocabulary, Geography, and Science.

## 🎯 Features

### Core Features (All Subjects)
- **Login System** - Secure access with demo accounts
- **Multiple Subjects** - Math, Spelling, Vocabulary, Geography, Science
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
├── styles.css              # Shared styles for all pages
├── common.js               # Shared JavaScript functions
├── math.html               # Math Facts Practice (COMPLETE)
├── spelling.html           # Spelling Practice (COMPLETE)
├── spelling-words.js       # 750 Spelling words from Indiana Spell Bowl
├── vocabulary.html         # Vocabulary Practice (Template)
├── geography.html          # Geography Practice (Template)
├── science.html            # Science Practice (Template)
└── README.md               # This file
```

## 🚀 Quick Start

1. **Open the app**: Open `index.html` in any web browser
2. **Login**: Use a demo account:
   - student / math123
   - teacher / teach456
   - admin / admin789
3. **Choose a subject**: Click on any subject card
4. **Start practicing**: Click "Start ▶️" to begin!

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
1. Browser speaks the word using Text-to-Speech
2. Student types the spelling
3. First mistake: Shows correct spelling, gives second chance
4. Second mistake: Counts as wrong, moves to next word
5. "🔊 Play Word" button to replay anytime

**Special Features:**
- Slower speech rate (0.8x) for clarity
- Case-insensitive spell checking
- Second-chance learning system
- No jigsaw puzzle (focus on words)
- Larger rewards bank for collecting

### 📖 Vocabulary Practice (Coming Soon)

Planned features:
- Word definitions & synonyms
- Context sentences
- Multiple choice questions
- Same rewards & timer system

### 🌍 Geography Practice (Coming Soon)

Planned features:
- Countries & capitals
- States & cities
- Continents & oceans
- Interactive maps (future)

### 🔬 Science Practice (Coming Soon)

Planned features:
- Life Science questions
- Earth Science topics
- Physical Science concepts
- Fun experiments & facts

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
- **Pause ⏸️** - Pause and see fun break message
- **Resume ▶️** - Continue from where you left off
- **🔊** - Toggle sound effects
- **← Back to Subjects** - Return to subject selection
- **Enter Key** - Submit answer (all pages)

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

### To Implement Other Subjects:
1. Copy `spelling.html` structure
2. Replace word list with subject content
3. Modify `generateProblem()` and `checkAnswer()`
4. Keep same UI/timer/rewards system

## 🎓 Credits

### Spelling Word List
- **Source**: Indiana Academic Spell Bowl Elementary Division 2025
- **Dictionary**: Merriam-Webster's Collegiate Dictionary 11th Edition
- **Total Words**: 750
- **Website**: www.iasp.org

## 📄 License

This is an educational project created for elementary students.

## 🐛 Known Issues

None currently! Report any issues you find.

## 🚀 Future Enhancements

- [ ] Vocabulary word lists with definitions
- [ ] Geography questions with maps
- [ ] Science questions with images
- [ ] Progress tracking across sessions (localStorage)
- [ ] Printable certificates
- [ ] Teacher dashboard
- [ ] Custom word lists
- [ ] Multiplayer mode

## 📞 Support

For questions or issues, please refer to the code comments or contact the developer.

---

**Made with ❤️ for elementary learners**
