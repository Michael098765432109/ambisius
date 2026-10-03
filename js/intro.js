// intro.js
const SCENES = ['scene1','scene2','scene3','scene4'];
const DOTS   = ['dot0','dot1','dot2','dot3'];
const DELAYS = [3200, 2800, 2800, 0];

let current = 0;
let timer   = null;

function buildRain() {
  const c = document.getElementById('rain');
  if (!c) return;
  for (let i = 0; i < 70; i++) {
    const d = document.createElement('div');
    d.classList.add('rain-drop');
    d.style.left              = Math.random() * 100 + '%';
    d.style.height            = (30 + Math.random() * 60) + 'px';
    d.style.opacity           = (0.08 + Math.random() * 0.3).toFixed(2);
    d.style.animationDuration = (0.35 + Math.random() * 0.5) + 's';
    d.style.animationDelay    = (Math.random() * 2) + 's';
    c.appendChild(d);
  }
}

function buildShatterParticles() {
  const c = document.getElementById('shatterParticles');
  if (!c) return;
  for (let i = 0; i < 16; i++) {
    const p = document.createElement('div');
    const angle = (i / 16) * 360;
    const dist  = 60 + Math.random() * 60;
    p.style.cssText = `
      position:absolute; width:${4+Math.random()*6}px; height:${4+Math.random()*6}px;
      background:var(--red); border-radius:2px;
      top:50%; left:50%;
      opacity:0;
      animation: shatterPiece 0.6s ease-out ${0.4 + Math.random()*0.3}s forwards;
      --tx:${Math.cos(angle*Math.PI/180)*dist}px;
      --ty:${Math.sin(angle*Math.PI/180)*dist}px;
    `;
    c.appendChild(p);
  }

  // Inyectar keyframe dinámico si no existe
  if (!document.getElementById('shatterPieceStyle')) {
    const s = document.createElement('style');
    s.id = 'shatterPieceStyle';
    s.textContent = `
      @keyframes shatterPiece {
        0%   { transform: translate(-50%,-50%) translate(0,0) scale(1); opacity:1; }
        100% { transform: translate(-50%,-50%) translate(var(--tx),var(--ty)) scale(0); opacity:0; }
      }
    `;
    document.head.appendChild(s);
  }
}

function buildSparkles() {
  const c = document.getElementById('sparkleField');
  if (!c) return;
  const symbols = ['✦','✧','⋆','★','·'];
  for (let i = 0; i < 14; i++) {
    const s = document.createElement('span');
    s.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    s.style.cssText = `
      position:absolute;
      font-size:${0.5 + Math.random() * 1}rem;
      color:${Math.random() > 0.5 ? 'var(--gold)' : '#a78bfa'};
      top:${Math.random()*100}%; left:${Math.random()*100}%;
      opacity:0;
      animation:floatUp ${2+Math.random()*3}s ease-in ${Math.random()*2}s infinite;
    `;
    c.appendChild(s);
  }
}

function showScene(idx) {
  SCENES.forEach((id, i) => {
    document.getElementById(id).classList.toggle('active', i === idx);
    document.getElementById(DOTS[i]).classList.toggle('active', i === idx);
  });
  current = idx;
  clearTimeout(timer);
  if (DELAYS[idx] > 0) timer = setTimeout(nextScene, DELAYS[idx]);
}

function nextScene() {
  if (current < SCENES.length - 1) showScene(current + 1);
}

function enterApp() {
  clearTimeout(timer);
  const intro = document.getElementById('intro');
  const app   = document.getElementById('app');
  intro.style.transition = 'opacity 0.9s ease';
  intro.style.opacity    = '0';
  setTimeout(() => {
    intro.style.display = 'none';
    document.body.classList.add('app-ready');
    app.classList.add('visible');
    document.dispatchEvent(new CustomEvent('appReady'));
  }, 900);
}

window.enterApp = enterApp;

document.addEventListener('DOMContentLoaded', () => {
  buildRain();
  buildShatterParticles();
  buildSparkles();
  showScene(0);
  DOTS.forEach((id, i) => document.getElementById(id).addEventListener('click', () => showScene(i)));
});
