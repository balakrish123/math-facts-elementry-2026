// Common variables and functions shared across all practice pages

// Game state
let correct = 0;
let total = 0;
let streak = 0;
let soundEnabled = true;
let timeLeft = 45;
let timerInterval = null;
let puzzlePiecesRevealed = 0;
const totalPuzzlePieces = 16;
const rewardsPerPiece = 5;
let currentDraggingPiece = null;
let timerPaused = false;
let pendingPieceIndex = null;
let gameStarted = false;
let isPaused = false;
let rewards = [];

// Reward emojis
const rewardEmojis = [
    // Achievements & Stars
    '⭐', '🌟', '✨', '🏆', '🎖️', '🥇', '🎯', '💎',
    // Celebrations
    '🎁', '🎈', '🎉', '🎊', '🎀', '🎪', '🎭', '🎨',
    // Animals
    '🦄', '🐻', '🐼', '🐨', '🦊', '🦁', '🐯', '🐸',
    '🐙', '🦋', '🐶', '🐱', '🐭', '🐹', '🐰', '🦝',
    '🐵', '🐔', '🐧', '🐦', '🦆', '🦅', '🦉', '🦜',
    '🐢', '🐍', '🦎', '🐠', '🐟', '🐬', '🦈', '🐳',
    // Vehicles
    '🚀', '✈️', '🚁', '🚂', '🚃', '🚄', '🚅', '🚆',
    '🚇', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐',
    '🚚', '🚛', '🚜', '🛴', '🛵', '🏍️', '🚲', '🛹',
    // Candies & Treats
    '🍭', '🍬', '🍫', '🍩', '🍪', '🧁', '🎂', '🍰',
    '🍦', '🍨', '🍧', '🍡', '🍮', '🍯',
    // Fruits
    '🍎', '🍓', '🍊', '🍌', '🍉', '🍇', '🍒', '🍑',
    '🍍', '🥝', '🥥', '🍋', '🍈', '🍏', '🫐', '🥭',
    // Nature
    '🌈', '☀️', '🌺', '🌸', '🌼', '🌻', '🌷', '🌹',
    // Ninja & Warriors
    '🥷', '🥋', '⚔️', '🛡️', '👑', '🏹', '🗡️'
];

// Break messages
const breakMessages = [
    { emoji: '🎪', text: "Time for a tiny 10-minute break! Stretch, wiggle, dance… then zoom back here ASAP!" },
    { emoji: '⭐', text: "Take a 10-minute break, little math superstar! Hop back soon!" },
    { emoji: '🚀', text: "Mission pause! You've got a 10-minute break. Return to base ASAP, space cadet!" },
    { emoji: '✨', text: "A magical 10-minute break appears! Come back quickly so the magic continues!" },
    { emoji: '🏆', text: "Great job! Take a quick 10-minute break and come back ready to win again!" },
    { emoji: '🥷', text: "Ninja break time! Take 10 minutes to recharge your stealth powers. Return swiftly!" },
    { emoji: '🐾', text: "Shhh… Ninja rest mode activated! Take a 10-minute break and sneak back ASAP!" },
    { emoji: '⚔️', text: "Great strikes, young ninja! Take 10 quiet minutes, then return for your next mission!" },
    { emoji: '🍵', text: "Your ninja energy needs a refill! Take a 10-minute break and return with silent speed!" },
    { emoji: '🥋', text: "The Ninja Master says: 10-minute pause! Come back quickly for your next challenge!" },
    { emoji: '🦸‍♂️', text: "Superhero break time! Take a mighty 10 minutes, then fly back ASAP!" },
    { emoji: '⚡', text: "Power-up time! Take a 10-minute hero break and return stronger than ever!" },
    { emoji: '💥', text: "Even superheroes rest! Take 10 minutes, then swoop back to save the day!" },
    { emoji: '🔋', text: "Your super-powers need recharging! Take a quick 10-minute break and return fast!" },
    { emoji: '🛡️', text: "Hero alert! 10-minute break activated. Report back as soon as you can!" },
    { emoji: '🍭', text: "Candy break! Take 10 sweet minutes to refuel and return ready for more!" },
    { emoji: '🦄', text: "Unicorn magic needs a rest! Take a 10-minute break and gallop back quickly!" },
    { emoji: '🎨', text: "Artist's break! Take 10 colorful minutes, then paint more math victories!" },
    { emoji: '🎮', text: "Level pause! Take a 10-minute break and prepare for the next challenge!" },
    { emoji: '🌈', text: "Rainbow rest time! Take 10 bright minutes and come back shining!" },
    { emoji: '🐻', text: "Bear hug break! Rest for 10 cozy minutes and come back strong!" },
    { emoji: '🦊', text: "Clever fox break! Take 10 minutes to rest your smart brain!" },
    { emoji: '🚂', text: "All aboard the break train! 10-minute station stop, then zoom ahead!" },
    { emoji: '🏎️', text: "Pit stop! Take a speedy 10-minute break and race back to action!" },
    { emoji: '🍦', text: "Ice cream break! Cool down for 10 minutes and return refreshed!" },
    { emoji: '🦋', text: "Butterfly rest! Take 10 gentle minutes and flutter back soon!" },
    { emoji: '🎯', text: "Target locked on break mode! 10 minutes to recharge, then aim again!" },
    { emoji: '🌟', text: "Star power recharging! Take 10 sparkly minutes and shine back here!" },
    { emoji: '🐧', text: "Penguin waddle break! Take 10 cool minutes and slide back ASAP!" }
];

// Helper functions
function getRandomReward() {
    return rewardEmojis[Math.floor(Math.random() * rewardEmojis.length)];
}

function getRandomBreakMessage() {
    return breakMessages[Math.floor(Math.random() * breakMessages.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sound effects using Web Audio API
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playCorrectSound() {
    if (!soundEnabled) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    const now = audioContext.currentTime;
    oscillator.frequency.setValueAtTime(523.25, now);
    oscillator.frequency.setValueAtTime(659.25, now + 0.1);
    oscillator.frequency.setValueAtTime(783.99, now + 0.2);

    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    oscillator.start(now);
    oscillator.stop(now + 0.4);
}

function playWrongSound() {
    if (!soundEnabled) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    const now = audioContext.currentTime;
    oscillator.frequency.setValueAtTime(392.00, now);
    oscillator.frequency.setValueAtTime(329.63, now + 0.15);

    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.2, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    oscillator.start(now);
    oscillator.stop(now + 0.3);
}

// Rewards
function addReward(x, y) {
    const reward = getRandomReward();
    rewards.push(reward);

    const rewardsContainer = document.getElementById('rewards');
    const rewardEl = document.createElement('span');
    rewardEl.className = 'reward-item';
    rewardEl.textContent = reward;
    rewardsContainer.appendChild(rewardEl);

    const floatingReward = document.createElement('div');
    floatingReward.className = 'floating-reward';
    floatingReward.textContent = reward;
    floatingReward.style.left = x + 'px';
    floatingReward.style.top = y + 'px';
    document.body.appendChild(floatingReward);

    setTimeout(() => floatingReward.remove(), 2000);

    checkPuzzleReveal();
}

// Timer functions
function startTimer() {
    timeLeft = 45;
    updateTimerDisplay();

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    timerEl.textContent = timeLeft;

    if (timeLeft <= 10) {
        timerEl.classList.add('warning');
    } else {
        timerEl.classList.remove('warning');
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function pauseTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerPaused = true;
        const timerEl = document.getElementById('timer');
        timerEl.style.background = '#ffe4b5';
        if (!timerEl.textContent.includes('⏸️')) {
            timerEl.textContent = '⏸️ ' + timeLeft;
        }
    }
}

function resumeTimer() {
    if (timerPaused || !timerInterval) {
        timerPaused = false;
        const timerEl = document.getElementById('timer');
        timerEl.style.background = '#f0f4ff';
        timerEl.textContent = timeLeft;

        if (timerInterval) clearInterval(timerInterval);

        timerInterval = setInterval(() => {
            if (!isPaused && !timerPaused) {
                timeLeft--;
                updateTimerDisplay();

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    handleTimeout();
                }
            }
        }, 1000);
    }
}

// Scoreboard
function updateScoreboard() {
    document.getElementById('correct').textContent = correct;
    document.getElementById('total').textContent = total;
    document.getElementById('streak').textContent = streak;
}

// Break tooltip
function showBreakTooltip() {
    const message = getRandomBreakMessage();

    const overlay = document.createElement('div');
    overlay.className = 'break-overlay';
    overlay.id = 'breakOverlay';

    const tooltip = document.createElement('div');
    tooltip.className = 'break-tooltip show';
    tooltip.innerHTML = `
        <div style="position: absolute; top: 15px; left: 15px; font-size: 1.8em; animation: wiggle 3s ease-in-out infinite;">✨</div>
        <div style="position: absolute; top: 15px; right: 15px; font-size: 2em; animation: pulse 2s infinite;">⭐</div>
        <div style="position: absolute; bottom: 60px; left: 15px; font-size: 1.8em; animation: float 3s ease-in-out infinite;">🌟</div>
        <div style="position: absolute; bottom: 60px; right: 15px; font-size: 2em; animation: pulse 2.5s infinite;">💫</div>
        <div class="tooltip-emoji">${message.emoji}</div>
        <div class="tooltip-message">${message.text}</div>
        <button class="tooltip-close" id="closeTooltip">Got it! 👍</button>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(tooltip);

    tooltip.offsetHeight;

    document.getElementById('closeTooltip').addEventListener('click', closeBreakTooltip);
    overlay.addEventListener('click', closeBreakTooltip);
}

function closeBreakTooltip() {
    const overlay = document.getElementById('breakOverlay');
    const tooltip = document.querySelector('.break-tooltip');
    if (overlay) overlay.remove();
    if (tooltip) tooltip.remove();
}

// Puzzle functions
function initializePuzzle() {
    const puzzleGrid = document.getElementById('puzzleGrid');
    puzzleGrid.innerHTML = '';

    for (let i = 0; i < totalPuzzlePieces; i++) {
        const slot = document.createElement('div');
        slot.className = 'puzzle-slot';
        slot.id = `puzzle-slot-${i}`;
        slot.dataset.slotIndex = i;

        slot.addEventListener('dragover', handleDragOver);
        slot.addEventListener('drop', handleDrop);

        puzzleGrid.appendChild(slot);
    }

    updatePuzzleProgress();
}

function updatePuzzleProgress() {
    const progressEl = document.getElementById('puzzleProgress');
    progressEl.textContent = `${puzzlePiecesRevealed}/${totalPuzzlePieces} pieces`;

    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const percentage = (puzzlePiecesRevealed / totalPuzzlePieces) * 100;
        progressBar.style.width = percentage + '%';
    }

    if (puzzlePiecesRevealed === totalPuzzlePieces) {
        document.getElementById('puzzleComplete').style.display = 'block';
        document.getElementById('dropZone').style.display = 'none';
        playCorrectSound();
        createConfetti();

        setTimeout(() => {
            const feedbackEl = document.getElementById('feedback');
            feedbackEl.textContent = '🎊 PUZZLE COMPLETE! You are a CHAMPION! 🏆';
            feedbackEl.className = 'feedback correct celebrating';
        }, 500);
    }
}

function checkPuzzleReveal() {
    const rewardCount = rewards.length;
    const shouldHavePieces = Math.min(
        Math.floor(rewardCount / rewardsPerPiece),
        totalPuzzlePieces
    );

    if (shouldHavePieces > puzzlePiecesRevealed && pendingPieceIndex === null) {
        revealPuzzlePiece();
    }
}

function revealPuzzlePiece() {
    if (puzzlePiecesRevealed >= totalPuzzlePieces) return;

    pendingPieceIndex = puzzlePiecesRevealed;
    pauseTimer();

    document.getElementById('answer').disabled = true;
    document.getElementById('submit').disabled = true;

    const dropZone = document.getElementById('dropZone');
    dropZone.style.display = 'block';
    dropZone.innerHTML = '<div class="drop-zone-text">Drag piece to correct spot! 👇</div>';

    const piece = document.createElement('div');
    piece.className = 'puzzle-piece';
    piece.id = `draggable-piece-${pendingPieceIndex}`;
    piece.dataset.pieceIndex = pendingPieceIndex;
    piece.textContent = '🧩';
    piece.draggable = true;

    piece.style.width = '80px';
    piece.style.height = '80px';
    piece.style.left = '50%';
    piece.style.top = '50%';
    piece.style.transform = 'translate(-50%, -50%)';

    piece.addEventListener('dragstart', handleDragStart);
    piece.addEventListener('dragend', handleDragEnd);

    dropZone.appendChild(piece);

    setTimeout(() => {
        const feedbackEl = document.getElementById('feedback');
        if (feedbackEl.textContent.includes('Correct')) {
            feedbackEl.textContent += ' 🧩 New puzzle piece! Drag it!';
        }
    }, 100);
}

function handleDragStart(e) {
    currentDraggingPiece = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    if (e.preventDefault) e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDrop(e) {
    if (e.stopPropagation) e.stopPropagation();
    e.preventDefault();

    const slot = e.currentTarget;
    const slotIndex = parseInt(slot.dataset.slotIndex);
    const pieceIndex = currentDraggingPiece ? parseInt(currentDraggingPiece.dataset.pieceIndex) : null;

    if (pieceIndex === slotIndex && pieceIndex === pendingPieceIndex) {
        slot.classList.add('filled');
        currentDraggingPiece.remove();
        document.getElementById('dropZone').style.display = 'none';

        puzzlePiecesRevealed++;
        pendingPieceIndex = null;
        updatePuzzleProgress();

        playCorrectSound();

        if (!isPaused) {
            document.getElementById('answer').disabled = false;
            document.getElementById('submit').disabled = false;
            resumeTimer();
        }

        const feedbackEl = document.getElementById('feedback');
        feedbackEl.textContent = '🎉 Perfect! Piece placed correctly!';
        feedbackEl.className = 'feedback correct celebrating';
    } else {
        const feedbackEl = document.getElementById('feedback');
        feedbackEl.textContent = '❌ Try a different spot!';
        feedbackEl.className = 'feedback incorrect';

        setTimeout(() => {
            feedbackEl.textContent = '';
        }, 1500);
    }

    currentDraggingPiece = null;
    return false;
}

// Confetti celebration
function createConfetti() {
    const confettiEmojis = ['🎉', '🎊', '⭐', '✨', '🌟', '💫', '🏆'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            confetti.style.fontSize = (Math.random() * 2 + 1) + 'em';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = `confettiFall ${Math.random() * 2 + 2}s linear forwards`;

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 4000);
        }, i * 100);
    }
}

// Add confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(${Math.random() * 720}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Utility Functions

// Unified login check
function checkLoginStatus() {
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html';
    }
}

// Simplified addReward for non-math pages (no puzzle dependency)
function addRewardSimple(x, y) {
    const reward = getRandomReward();
    rewards.push(reward);

    const rewardsContainer = document.getElementById('rewards');
    const rewardEl = document.createElement('span');
    rewardEl.className = 'reward-item';
    rewardEl.textContent = reward;
    rewardsContainer.appendChild(rewardEl);

    const floatingReward = document.createElement('div');
    floatingReward.className = 'floating-reward';
    floatingReward.textContent = reward;
    floatingReward.style.left = x + 'px';
    floatingReward.style.top = y + 'px';
    document.body.appendChild(floatingReward);

    setTimeout(() => floatingReward.remove(), 2000);
}

// Problem display helper
function displayProblem(text, useHTML = false) {
    const problemEl = document.getElementById('problem');
    if (useHTML) {
        problemEl.innerHTML = text;
    } else {
        problemEl.textContent = text;
    }
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('answer').focus();
}

// Setup common event listeners - only basic ones
function setupSoundToggle() {
    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
        soundToggle.addEventListener('click', function() {
            soundEnabled = !soundEnabled;
            this.textContent = soundEnabled ? '🔊' : '🔇';
            this.classList.toggle('muted');
        });
    }
}

function setupStartPauseButtons() {
    // Start button
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            const answerInput = document.getElementById('answer');
            const submitBtn = document.getElementById('submit');
            const pronounceBtn = document.getElementById('pronounceBtn');

            closeBreakTooltip();

            if (!gameStarted) {
                gameStarted = true;
                isPaused = false;
                this.classList.add('hidden');
                document.getElementById('pauseBtn').classList.remove('hidden');

                answerInput.disabled = false;
                submitBtn.disabled = false;
                if (pronounceBtn) pronounceBtn.disabled = false;
                document.getElementById('feedback').textContent = '';

                generateProblem();
            } else if (isPaused) {
                isPaused = false;
                this.classList.add('hidden');
                document.getElementById('pauseBtn').classList.remove('hidden');
                this.textContent = 'Start ▶️';

                answerInput.disabled = false;
                submitBtn.disabled = false;
                if (pronounceBtn) pronounceBtn.disabled = false;
                document.getElementById('feedback').textContent = '';

                resumeTimer();
            }
        });
    }

    // Pause button
    const pauseBtn = document.getElementById('pauseBtn');
    if (pauseBtn) {
        pauseBtn.addEventListener('click', function() {
            isPaused = true;
            this.classList.add('hidden');
            const startBtn = document.getElementById('startBtn');
            startBtn.classList.remove('hidden');
            startBtn.textContent = 'Resume ▶️';

            document.getElementById('answer').disabled = true;
            document.getElementById('submit').disabled = true;
            const pronounceBtn = document.getElementById('pronounceBtn');
            if (pronounceBtn) pronounceBtn.disabled = true;

            pauseTimer();

            setTimeout(() => showBreakTooltip(), 300);
        });
    }
}

// Auto-initialize sound toggle on load
document.addEventListener('DOMContentLoaded', function() {
    setupSoundToggle();
    setupStartPauseButtons();

    // Initialize puzzle only if puzzle grid exists
    const puzzleGrid = document.getElementById('puzzleGrid');
    if (puzzleGrid) {
        initializePuzzle();
    }
});
