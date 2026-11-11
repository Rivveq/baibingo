import confetti from 'canvas-confetti';

const bingoItems: string[] = [
    "1+1 przyprawy", "2+2 woda", "3+1 soki", "6+6 mleko", "12+12",
    "1+1 kawa", "4+4 piwo", "3+3 milka", "2+1 na masło", "2+2 na mleko",
    "drugi 60% taniej na ciastka", "drugi 50% taniej na czekolada",
    "drugi 70% taniej dezodoranty", "drugi za 1zł pasta do zębów",
    "drugi za 1grosz", "trzeci za 1grosz chemia", "2+2 dzik",
    "1+1 znicze", "1+1 awokado", "z aplikacją taniej 30% na owoce",
    "wszystkie kosmetyki do twarzy Nivea drugi za 1zł"
];

interface BingoCell {
    text: string;
    active: boolean;
}

const STORAGE_KEY = 'bingo_board_state';
const THEME_KEY = 'bingo_theme_state';
const clickSound = new Audio('click.mp3');

// --- LOGIKA MOTYWU (THEME) ---
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButtonText(savedTheme);

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
        updateThemeButtonText(newTheme);
    });
}

function updateThemeButtonText(theme: string) {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.innerText = theme === 'dark' ? 'Tryb Jasny ☀️' : 'Tryb Ciemny 🌙';
    }
}

// --- EFEKTY BINGO ---
function triggerConfetti() {
    const duration = 2.5 * 500;
    const end = Date.now() + duration;

    // Kolory konfetti dopasowane do motywu (złoty, platynowy, biały)
    const colors = ['#d4af37', '#f0f0f0', '#b8901f'];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function countBingos(state: BingoCell[]): number {
    let bingos = 0;

    // Sprawdzanie wierszy
    for (let r = 0; r < 5; r++) {
        let rowWin = true;
        for (let c = 0; c < 5; c++) {
            if (!state[r * 5 + c].active) rowWin = false;
        }
        if (rowWin) bingos++;
    }

    // Sprawdzanie kolumn
    for (let c = 0; c < 5; c++) {
        let colWin = true;
        for (let r = 0; r < 5; r++) {
            if (!state[r * 5 + c].active) colWin = false;
        }
        if (colWin) bingos++;
    }

    // Sprawdzanie przekątnych
    let diag1Win = true;
    let diag2Win = true;
    for (let i = 0; i < 5; i++) {
        if (!state[i * 5 + i].active) diag1Win = false;
        if (!state[i * 5 + (4 - i)].active) diag2Win = false;
    }
    if (diag1Win) bingos++;
    if (diag2Win) bingos++;

    return bingos;
}

// --- LOGIKA BINGO ---
function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function generateNewBoard(): BingoCell[] {
    const shuffledItems = shuffleArray(bingoItems);
    const neededExtras = 25 - shuffledItems.length;
    const extraItems = shuffleArray(bingoItems).slice(0, neededExtras);

    const fullBoardStrings = shuffleArray([...shuffledItems, ...extraItems]);
    return fullBoardStrings.map(text => ({ text, active: false }));
}

function saveState(state: BingoCell[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState(): BingoCell[] | null {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try { return JSON.parse(saved); }
        catch (e) { return null; }
    }
    return null;
}

function renderBoard() {
    const boardContainer = document.getElementById('bingo-board');
    if (!boardContainer) return;

    boardContainer.innerHTML = '';
    let currentState = loadState();

    if (!currentState) {
        currentState = generateNewBoard();
        saveState(currentState);
    }

    let currentBingoCount = countBingos(currentState);

    currentState.forEach((cell, index) => {
        const cellEl = document.createElement('div');
        cellEl.className = `cell ${cell.active ? 'active' : ''}`;
        cellEl.innerText = cell.text;

        cellEl.addEventListener('click', () => {
            // Odtwarzanie dźwięku
            clickSound.currentTime = 0;
            clickSound.play().catch(() => {});

            cell.active = !cell.active;
            cellEl.classList.toggle('active');

            const stateToUpdate = loadState();
            if(stateToUpdate) {
                stateToUpdate[index].active = cell.active;
                saveState(stateToUpdate);

                // Sprawdzanie czy wpadło nowe bingo
                const newBingoCount = countBingos(stateToUpdate);
                if (newBingoCount > currentBingoCount) {
                    triggerConfetti();
                }
                currentBingoCount = newBingoCount;
            }
        });

        boardContainer.appendChild(cellEl);
    });
}

document.getElementById('new-board-btn')?.addEventListener('click', () => {
    if(confirm('Czy na pewno chcesz wygenerować nową tablicę? Twój dotychczasowy postęp zostanie usunięty.')) {
        const newState = generateNewBoard();
        saveState(newState);
        renderBoard();
    }
});

// Start
initTheme();
renderBoard();