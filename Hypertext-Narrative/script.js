// NARRATIVE DATA 

// Keys follow the pattern "stringIndex-fretIndex"
// (stringIndex: 0=low E, 1=A, 2=D, 3=G, 4=B, 5=high e)

const NODES = {
  '0-0':  { title: '', coord: '', body: '', links: [] },
  '0-3':  { title: '', coord: '', body: '', links: [] },
  '0-5':  { title: '', coord: '', body: '', links: [] },
  '0-7':  { title: '', coord: '', body: '', links: [] },
  '1-0':  { title: '', coord: '', body: '', links: [] },
  '1-2':  { title: '', coord: '', body: '', links: [] },
  '1-3':  { title: '', coord: '', body: '', links: [] },
  '1-5':  { title: '', coord: '', body: '', links: [] },
  '1-7':  { title: '', coord: '', body: '', links: [] },
  '2-0':  { title: '', coord: '', body: '', links: [] },
  '2-2':  { title: '', coord: '', body: '', links: [] },
  '2-3':  { title: '', coord: '', body: '', links: [] },
  '2-5':  { title: '', coord: '', body: '', links: [] },
  '2-7':  { title: '', coord: '', body: '', links: [] },
  '3-0':  { title: '', coord: '', body: '', links: [] },
  '3-2':  { title: '', coord: '', body: '', links: [] },
  '3-5':  { title: '', coord: '', body: '', links: [] },
  '3-7':  { title: '', coord: '', body: '', links: [] },
  '4-0':  { title: '', coord: '', body: '', links: [] },
  '4-2':  { title: '', coord: '', body: '', links: [] },
  '4-3':  { title: '', coord: '', body: '', links: [] },
  '4-5':  { title: '', coord: '', body: '', links: [] },
  '4-7':  { title: '', coord: '', body: '', links: [] },
  '5-0':  { title: '', coord: '', body: '', links: [] },
  '5-3':  { title: '', coord: '', body: '', links: [] },
  '5-5':  { title: '', coord: '', body: '', links: [] },
  '5-7':  { title: '', coord: '', body: '', links: [] },
};

// FRETBOARD CONFIG 

const STRINGS     = ['e', 'B', 'G', 'D', 'A', 'E'];
const FRET_COUNT  = 13;
const INLAY_FRETS = [3, 5, 7, 9, 12];
const MARKER_FRETS = [3, 5, 7, 9, 12];

const STRING_STYLES = [
  // index 0 → high e (thinnest, rendered on top)
  { top: '#d4c8a0', mid: '#f0e0a0', bot: '#b0a070', thickness: '1px'  },
  // index 1 → B
  { top: '#c8bc94', mid: '#e4d494', bot: '#a09060', thickness: '1.5px' },
  // index 2 → G
  { top: '#beb08a', mid: '#d8c880', bot: '#968450', thickness: '1.8px' },
  // index 3 → D
  { top: '#b4a47e', mid: '#ccbc74', bot: '#8c7844', thickness: '2.2px' },
  // index 4 → A
  { top: '#a89870', mid: '#c0b068', bot: '#806c3a', thickness: '2.6px' },
  // index 5 → low E (thickest, rendered on bottom)
  { top: '#9c8c60', mid: '#b4a45c', bot: '#746030', thickness: '3px'  },
];


let visitedNodes = new Set();
let activeNode   = null;
let history      = [];


function buildFretboard() {
  const labelsEl  = document.getElementById('fretLabels');
  const linesEl   = document.getElementById('fretLines');
  const stringsEl = document.getElementById('strings');

  // Fret number labels
  for (let f = 0; f < FRET_COUNT; f++) {
    const d = document.createElement('div');
    d.className = 'fret-label' + (MARKER_FRETS.includes(f) ? ' marker' : '');
    d.textContent = f === 0 ? '○' : f;
    labelsEl.appendChild(d);
  }

  // Fret lines + inlay dots
  for (let f = 0; f < FRET_COUNT; f++) {
    const d = document.createElement('div');
    d.className = 'fret-line';
    if (INLAY_FRETS.includes(f) && f !== 0) {
      const dot = document.createElement('div');
      dot.className = 'inlay';
      d.appendChild(dot);
    }
    linesEl.appendChild(d);
  }

  // String rows — visual order: high e on top, low E on bottom
  // stringOrder[visualRow] = index into STRINGS / STRING_STYLES
  const stringOrder = [5, 4, 3, 2, 1, 0];

  stringOrder.forEach((si, visualRow) => {
    const style = STRING_STYLES[visualRow]; // thinnest at top

    const row = document.createElement('div');
    row.className = 'string-row';

    // String name label (e B G D A E)
    const nameEl = document.createElement('div');
    nameEl.className = 'string-name';
    nameEl.textContent = STRINGS[si];
    row.appendChild(nameEl);

    const track = document.createElement('div');
    track.className = 'string-track';

    // The string line itself
    const line = document.createElement('div');
    line.className = 'string-line';
    line.style.setProperty('--thickness',   style.thickness);
    line.style.setProperty('--string-top',  style.top);
    line.style.setProperty('--string-mid',  style.mid);
    line.style.setProperty('--string-bot',  style.bot);
    track.appendChild(line);

    // Node dots along this string
    const nodesEl = document.createElement('div');
    nodesEl.className = 'nodes';

    for (let f = 0; f < FRET_COUNT; f++) {
      const slot = document.createElement('div');
      slot.className = 'node-slot';

      const key = `${si}-${f}`;
      if (NODES[key]) {
        const node = document.createElement('div');
        node.className = 'node unvisited';
        node.dataset.key = key;
        // No click handler — nodes are visual-only for now
        slot.appendChild(node);
      }

      nodesEl.appendChild(slot);
    }

    track.appendChild(nodesEl);
    row.appendChild(track);
    stringsEl.appendChild(row);
  });

  document.getElementById('totalCount').textContent = Object.keys(NODES).length;
}

// ── PLACEHOLDER INTERACTION ───────────────────────────────────────────────
// These functions are stubs — wired up to the back button in the HTML

function activateNode(key) {
 
}

function goBack() {

}


buildFretboard();