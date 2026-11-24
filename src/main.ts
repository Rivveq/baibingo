import confetti from 'canvas-confetti';

const bingoItems: string[] = [
    // 1+1 gratis
    "1+1 masło", "1+1 ser żółty", "1+1 mozzarella", "1+1 kawa", "1+1 herbata",
    "1+1 Lipton", "1+1 czekolady", "1+1 produkty Milka", "1+1 żelki", "1+1 ciastka",
    "1+1 awokado", "1+1 kosmetyki Nivea", "1+1 kosmetyki do włosów", "1+1 kapsułki do prania",
    "1+1 perfumy do prania", "1+1 salami", "1+1 wędlina", "1+1 chipsy", "1+1 Lay's",
    "1+1 Pringles", "1+1 sok", "1+1 czekoladowy Mikołaj",

    // 2+1 gratis
    "2+1 jogurt", "2+1 śmietana", "2+1 ser", "2+1 nabiał", "2+1 bułki",
    "2+1 pieczywo", "2+1 chipsy", "2+1 Lay's", "2+1 Top Chips", "2+1 zupki chińskie",
    "2+1 przyprawy", "2+1 sos", "2+1 sok", "2+1 woda", "2+1 Dzik",
    "2+1 żelki", "2+1 ciastka", "2+1 czekolady", "2+1 awokado", "2+1 kosmetyki do włosów",

    // 2+2 gratis
    "2+2 mleko", "2+2 masło", "2+2 jogurt", "2+2 woda", "2+2 sok",
    "2+2 piwo", "2+2 Żubr", "2+2 Dzik", "2+2 chipsy", "2+2 czekolady",
    "2+2 zupki chińskie", "2+2 sos",

    // 3+3 gratis
    "3+3 mleko", "3+3 woda", "3+3 sok", "3+3 piwo", "3+3 Żubr",
    "3+3 Dzik", "3+3 jogurt", "3+3 bułki",

    // 4+2 gratis
    "4+2 piwo", "4+2 Żubr", "4+2 woda", "4+2 sok", "4+2 mleko", "4+2 Dzik",

    // 6+6 / 12+12 (typowe wielopaki)
    "6+6 mleko", "6+6 woda", "6+6 piwo", "6+6 Żubr",
    "12+12 piwo", "12+12 Żubr",

    // 2w1 / 3w2 (wielosztuki z gazetki)
    "2w1 kawa", "2w1 herbata", "2w1 kapsułki do prania", "2w1 kosmetyki Nivea",
    "2w1 czekolady", "2w1 chipsy", "2w1 mozzarella", "2w1 salami",
    "3w2 jogurt", "3w2 bułki", "3w2 przyprawy", "3w2 zupki chińskie", "3w2 sok",

    // Drugi za 1 zł / za grosz
    "drugi za 1zł kawa", "drugi za 1zł Lipton", "drugi za 1zł herbata",
    "drugi za 1zł kosmetyki Nivea", "drugi za 1zł kosmetyki do włosów",
    "drugi za 1zł chemia", "drugi za 1zł kapsułki do prania",
    "drugi za 1zł perfumy do prania", "drugi za 1zł zabawki",
    "drugi za 1zł ozdoby świąteczne", "drugi za 1zł czekolady",
    "drugi za 1zł Pringles", "drugi za 1zł masło",
    "2 za grosz kosmetyki Nivea", "2 za grosz chemia", "2 za grosz kawa",
    "2 za grosz zabawki", "2 za grosz ozdoby świąteczne",
    "3 za grosz zupki chińskie", "3 za grosz przyprawy", "3 za grosz bułki",

    // Drugi / trzeci taniej (procentowo)
    "drugi 60% taniej wędlina", "drugi 60% taniej salami", "drugi 60% taniej ser",
    "drugi 60% taniej piersi z kurczaka", "drugi 60% taniej kawa",
    "drugi 60% taniej kosmetyki Nivea", "drugi 60% taniej kapsułki do prania",
    "drugi 60% taniej ubrania", "drugi 60% taniej zabawki",
    "trzeci 70% taniej ubrania", "trzeci 70% taniej zabawki",
    "trzeci 70% taniej kosmetyki do włosów", "trzeci 70% taniej słodycze",

    // Rabaty procentowe ogólne (-50%, -75% wyprzedażowe)
    "-50% piersi z kurczaka", "-50% kurczak", "-50% mięso", "-50% ser",
    "-50% masło", "-50% pomidor", "-50% jabłko", "-50% mandarynka",
    "-50% winogrono", "-50% gruszka", "-50% owoce", "-50% warzywa",
    "-50% pieczywo", "-50% chleb", "-50% kawa", "-50% czekolady",
    "-50% zabawki", "-50% ubrania", "-50% ozdoby świąteczne",
    "-75% ozdoby świąteczne", "-75% czekoladowy Mikołaj",
    "-75% zabawki", "-75% ubrania",

    // Cała marka taniej
    "cała marka -30% Top Chips", "cała marka -30% kosmetyki Nivea",
    "cała marka -30% produkty Milka", "cała marka -30% Lipton",
    "cała marka -50% kosmetyki Nivea", "cała marka -50% Top Chips",

    // Z aplikacją taniej (20% / 30% / 40%)
    "z aplikacją taniej 20% owoce", "z aplikacją taniej 20% warzywa",
    "z aplikacją taniej 20% nabiał", "z aplikacją taniej 20% pieczywo",
    "z aplikacją taniej 20% wędlina", "z aplikacją taniej 20% ser",
    "z aplikacją taniej 20% kawa", "z aplikacją taniej 20% ubrania",
    "z aplikacją taniej 30% piersi z kurczaka", "z aplikacją taniej 30% mięso",
    "z aplikacją taniej 30% pomidor", "z aplikacją taniej 30% jabłko",
    "z aplikacją taniej 30% mandarynka", "z aplikacją taniej 30% winogrono",
    "z aplikacją taniej 30% gruszka", "z aplikacją taniej 30% chleb",
    "z aplikacją taniej 30% masło", "z aplikacją taniej 30% chemia",
    "z aplikacją taniej 40% piersi z kurczaka", "z aplikacją taniej 40% winogrono",
    "z aplikacją taniej 40% mandarynka", "z aplikacją taniej 40% pomidor",
    "z aplikacją taniej 40% zabawki", "z aplikacją taniej 40% ozdoby świąteczne"
];

interface BingoCell {
    text: string;
    active: boolean;
}

interface WinningLine {
  startIdx: number;
  endIdx: number;
  id: string;
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
            origin: { x: 0, y: 1 },
            colors: colors
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Zwraca listę wszystkich aktualnie ułożonych linii (wiersze, kolumny, przekątne)
function getWinningLines(state: BingoCell[]): WinningLine[] {
  const lines: WinningLine[] = [];

  // Wiersze
  for (let r = 0; r < 5; r++) {
    let win = true;
    for (let c = 0; c < 5; c++) {
      if (!state[r * 5 + c].active) win = false;
    }
    if (win) lines.push({ startIdx: r * 5, endIdx: r * 5 + 4, id: `row-${r}` });
  }

  // Kolumny
  for (let c = 0; c < 5; c++) {
    let win = true;
    for (let r = 0; r < 5; r++) {
      if (!state[r * 5 + c].active) win = false;
    }
    if (win) lines.push({ startIdx: c, endIdx: 20 + c, id: `col-${c}` });
  }

  // Przekątna główna (lewy górny -> prawy dolny)
  let diag1 = true;
  for (let i = 0; i < 5; i++) {
    if (!state[i * 5 + i].active) diag1 = false;
  }
  if (diag1) lines.push({ startIdx: 0, endIdx: 24, id: 'diag-1' });

  // Przekątna druga (prawy górny -> lewy dolny)
  let diag2 = true;
  for (let i = 0; i < 5; i++) {
    if (!state[i * 5 + (4 - i)].active) diag2 = false;
  }
  if (diag2) lines.push({ startIdx: 4, endIdx: 20, id: 'diag-2' });

  return lines;
}

// Renderuje linie SVG na podstawie aktualnych wymiarów kafelków
function drawWinningLines(winningLines: WinningLine[], animate = true) {
  const svg = document.getElementById('bingo-lines');
  const boardContainer = document.getElementById('bingo-board');
  if (!svg || !boardContainer) return;

  const cells = boardContainer.querySelectorAll<HTMLElement>('.cell');
  if (cells.length < 25) return;

  // Zapamiętujemy linie, które już istniały, aby nie powtarzać animacji rysowania przy zmianie rozmiaru okna
  const existingIds = new Set(
    Array.from(svg.querySelectorAll('line')).map(el => el.dataset.lineId)
  );

  svg.innerHTML = '';

  winningLines.forEach(line => {
    const startCell = cells[line.startIdx];
    const endCell = cells[line.endIdx];

    // Środki kafelków względem kontenera planszy
    const x1 = startCell.offsetLeft + startCell.offsetWidth / 2;
    const y1 = startCell.offsetTop + startCell.offsetHeight / 2;
    const x2 = endCell.offsetLeft + endCell.offsetWidth / 2;
    const y2 = endCell.offsetTop + endCell.offsetHeight / 2;

    // Delikatne wydłużenie linii poza środki skrajnych kafelków (o 25% promienia kafelka)
    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.hypot(dx, dy);
    const overhang = Math.min(startCell.offsetWidth, startCell.offsetHeight) * 0.28;

    const extX = length > 0 ? (dx / length) * overhang : 0;
    const extY = length > 0 ? (dy / length) * overhang : 0;

    const svgLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    svgLine.setAttribute('x1', (x1 - extX).toString());
    svgLine.setAttribute('y1', (y1 - extY).toString());
    svgLine.setAttribute('x2', (x2 + extX).toString());
    svgLine.setAttribute('y2', (y2 + extY).toString());
    svgLine.setAttribute('class', 'bingo-strike-line');
    svgLine.dataset.lineId = line.id;

    // Jeśli linia była już narysowana wcześniej (np. tylko zmieniamy rozmiar okna), wyłączamy ponowną animację
    if (!animate || existingIds.has(line.id)) {
      svgLine.style.animation = 'none';
      svgLine.style.strokeDashoffset = '0';
    }

    svg.appendChild(svgLine);
  });
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
  // Tasujemy całą dostępną pulę i bierzemy dokładnie 25 unikalnych haseł na planszę 5x5
  const selectedItems = shuffleArray(bingoItems).slice(0, 25);
  return selectedItems.map(text => ({ text, active: false }));
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

let activeWinningLines: WinningLine[] = [];

function renderBoard() {
  const boardContainer = document.getElementById('bingo-board');
  if (!boardContainer) return;
  
  boardContainer.innerHTML = '';
  let currentState = loadState();
  
  if (!currentState) {
    currentState = generateNewBoard();
    saveState(currentState);
  }

  activeWinningLines = getWinningLines(currentState);
  let currentBingoCount = activeWinningLines.length;

  currentState.forEach((cell, index) => {
    const cellEl = document.createElement('div');
    cellEl.className = `cell ${cell.active ? 'active' : ''}`;
    cellEl.innerText = cell.text;
    
    cellEl.addEventListener('click', () => {
      clickSound.currentTime = 0;
      clickSound.play().catch(() => {});

      cell.active = !cell.active;
      cellEl.classList.toggle('active');
      
      const stateToUpdate = loadState();
      if (stateToUpdate) {
        stateToUpdate[index].active = cell.active;
        saveState(stateToUpdate);
        
        activeWinningLines = getWinningLines(stateToUpdate);
        const newBingoCount = activeWinningLines.length;

        if (newBingoCount > currentBingoCount) {
          triggerConfetti();
        }
        currentBingoCount = newBingoCount;

        // Przerysowanie linii (jeśli odznaczono pole, linia natychmiast zniknie)
        drawWinningLines(activeWinningLines, true);
      }
    });
    
    boardContainer.appendChild(cellEl);
  });

  // Narysowanie zapisanych linii zaraz po wyrenderowaniu kafelków (bez animacji przy starcie strony)
  requestAnimationFrame(() => drawWinningLines(activeWinningLines, false));
}

// Automatyczne dopasowanie współrzędnych linii przy zmianie rozmiaru okna lub orientacji ekranu
const boardElement = document.getElementById('bingo-board');
if (boardElement) {
  const resizeObserver = new ResizeObserver(() => {
    drawWinningLines(activeWinningLines, false);
  });
  resizeObserver.observe(boardElement);
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

// --- LOGIKA INTERAKTYWNEJ GRAFIKI I DŹWIĘKÓW ---

const interactiveImg = document.getElementById('interactive-img');

const boingSound = new Audio('sound.mp3');
const catSoundRare = new Audio('sound_rare.mp3');

interactiveImg?.addEventListener('click', () => {
    boingSound.currentTime = 0; // Reset the sound if clicked again
    catSoundRare.currentTime = 0;

    let rdm = Math.random() * 100;

    // Playing the sound
    if (rdm < 5){
        catSoundRare.play().catch(e => console.error("ERROR: Sound problem", e));
    } else {
        boingSound.play().catch(e => console.error("ERROR: Sound problem", e));
    }
});