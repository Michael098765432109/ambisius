// hearts.js
const EMOJIS = ['❤️','💘','💕','💗','🖤','💔','✨','💫'];

function spawnHearts() {
  const c = document.getElementById('hearts');
  if (!c) return;
  for (let i = 0; i < 24; i++) {
    const h = document.createElement('span');
    h.classList.add('heart');
    h.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    h.style.left              = Math.random() * 100 + 'vw';
    h.style.fontSize          = (0.7 + Math.random() * 1.8) + 'rem';
    h.style.animationDuration = (5 + Math.random() * 9) + 's';
    h.style.animationDelay    = (Math.random() * 10) + 's';
    c.appendChild(h);
  }
}

class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx    = canvas.getContext('2d');
    this.pts    = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.loop();
  }
  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  spawn() {
    const palette = [
      'rgba(230,57,70,',
      'rgba(244,196,48,',
      'rgba(155,28,28,',
      'rgba(167,139,250,',
    ];
    this.pts.push({
      x: Math.random() * this.canvas.width,
      y: this.canvas.height + 5,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -(0.3 + Math.random() * 0.9),
      r:  0.8 + Math.random() * 2.2,
      life: 1,
      decay: 0.002 + Math.random() * 0.004,
      color: palette[Math.floor(Math.random() * palette.length)],
    });
  }
  loop() {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.7) this.spawn();
    if (Math.random() < 0.3) this.spawn();
    this.pts = this.pts.filter(p => p.life > 0);
    for (const p of this.pts) {
      p.x += p.vx; p.y += p.vy; p.life -= p.decay;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.life.toFixed(2) + ')';
      ctx.fill();
    }
    requestAnimationFrame(() => this.loop());
  }
}

function initHearts() {
  spawnHearts();
  const canvas = document.getElementById('particles-canvas');
  if (canvas) new ParticleSystem(canvas);
}

document.addEventListener('appReady', initHearts);
