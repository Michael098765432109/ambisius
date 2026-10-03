// particulas.js — Canvas de partículas interactivas románticas

const SIMBOLOS  = ['❤', '✦', '✧', '⋆', '·', '✿', '❋', '◦'];
const COLORES   = [
  [230, 57,  70],   // rojo
  [244, 196, 48],   // dorado
  [168, 85,  247],  // morado
  [236, 72,  153],  // rosa
  [56,  189, 248],  // azul
  [52,  211, 153],  // verde menta
  [251, 191, 36],   // ámbar
];

class SistemaParticulas {
  constructor(canvas) {
    this.canvas   = canvas;
    this.ctx      = canvas.getContext('2d');
    this.pts      = [];
    this.mouse    = { x: -999, y: -999 };
    this.activo   = true;

    this.resize();
    this.bindEventos();
    this.loop();
  }

  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  bindEventos() {
    window.addEventListener('resize', () => this.resize());

    // Reacción al cursor
    window.addEventListener('mousemove', e => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      // Emitir partículas extra al mover el cursor
      if (Math.random() < 0.4) this.emitirEnPosicion(e.clientX, e.clientY, 1);
    });

    // Reacción al toque (móvil)
    window.addEventListener('touchmove', e => {
      const t = e.touches[0];
      this.mouse.x = t.clientX;
      this.mouse.y = t.clientY;
      this.emitirEnPosicion(t.clientX, t.clientY, 2);
    }, { passive: true });

    // Click: explosión de partículas
    window.addEventListener('click', e => {
      this.emitirEnPosicion(e.clientX, e.clientY, 8);
    });
  }

  crearParticula(x, y, forzada = false) {
    const color = COLORES[Math.floor(Math.random() * COLORES.length)];
    const angulo = Math.random() * Math.PI * 2;
    const velocidad = forzada
      ? 0.8 + Math.random() * 2.5
      : 0.2 + Math.random() * 0.8;

    return {
      x, y,
      vx: Math.cos(angulo) * velocidad * (forzada ? 1 : 0.3),
      vy: Math.sin(angulo) * velocidad * (forzada ? 1 : 0.3) - (forzada ? 0 : 0.5),
      r:  forzada ? 1.5 + Math.random() * 3 : 0.8 + Math.random() * 2,
      vida: 1,
      decaimiento: forzada
        ? 0.008 + Math.random() * 0.012
        : 0.003 + Math.random() * 0.005,
      color,
      simbolo: Math.random() < 0.15 ? SIMBOLOS[Math.floor(Math.random() * SIMBOLOS.length)] : null,
      tamanoTexto: 10 + Math.random() * 10,
      rotacion: Math.random() * Math.PI * 2,
      velRotacion: (Math.random() - 0.5) * 0.05,
    };
  }

  emitirEnPosicion(x, y, cantidad = 1) {
    for (let i = 0; i < cantidad; i++) {
      this.pts.push(this.crearParticula(x, y, true));
    }
  }

  spawnAleatorio() {
    this.pts.push(this.crearParticula(
      Math.random() * this.canvas.width,
      this.canvas.height + 10,
      false
    ));
  }

  loop() {
    if (!this.activo) return;
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Emitir partículas de fondo
    if (Math.random() < 0.4) this.spawnAleatorio();

    // Limitar cantidad máxima
    if (this.pts.length > 300) this.pts.splice(0, 10);

    this.pts = this.pts.filter(p => p.vida > 0);

    for (const p of this.pts) {
      p.x  += p.vx;
      p.y  += p.vy;
      p.vy -= 0.01; // gravedad inversa suave
      p.vida -= p.decaimiento;
      p.rotacion += p.velRotacion;

      const [r, g, b] = p.color;
      const alpha = Math.max(0, p.vida);

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotacion);

      if (p.simbolo) {
        ctx.font = `${p.tamanoTexto}px serif`;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.simbolo, 0, 0);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.6)`;
        ctx.shadowBlur  = 6;
        ctx.fill();
      }

      ctx.restore();
    }

    requestAnimationFrame(() => this.loop());
  }

  destruir() { this.activo = false; }
}

/* ── Init ── */
let sistemaParticulas = null;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas-particulas');
  if (canvas) sistemaParticulas = new SistemaParticulas(canvas);
});
