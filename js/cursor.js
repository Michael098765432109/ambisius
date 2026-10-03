// cursor.js — Cursor personalizado con estela de corazones y destellos

/* Solo activo en dispositivos con puntero fino (desktop) */
if (window.matchMedia('(pointer: fine)').matches) {
  iniciarCursorPersonalizado();
}

function iniciarCursorPersonalizado() {
  /* ── Crear cursor principal ── */
  const cursorEl = document.createElement('div');
  cursorEl.id = 'cursor-principal';
  cursorEl.innerHTML = `<div class="cursor-anillo"><div class="cursor-punto"></div></div>`;
  document.body.appendChild(cursorEl);

  /* ── Posición suavizada ── */
  let posX = -100, posY = -100;
  let curX = -100, curY = -100;

  /* ── Símbolos de la estela ── */
  const SIMBOLOS = ['💕', '✨', '💖', '🌸', '💫', '❤️', '🌟', '💗', '⭐', '🦋'];

  /* ── Throttle para partículas ── */
  let ultimaParticula = 0;
  const INTERVALO_PARTICULA = 80; // ms entre partículas

  /* ── Mover cursor ── */
  document.addEventListener('mousemove', e => {
    posX = e.clientX;
    posY = e.clientY;

    const ahora = Date.now();
    if (ahora - ultimaParticula > INTERVALO_PARTICULA) {
      crearParticula(posX, posY);
      ultimaParticula = ahora;
    }
  });

  /* ── Animación suavizada del cursor ── */
  function animarCursor() {
    curX += (posX - curX) * 0.18;
    curY += (posY - curY) * 0.18;
    cursorEl.style.left = curX + 'px';
    cursorEl.style.top  = curY + 'px';
    requestAnimationFrame(animarCursor);
  }
  animarCursor();

  /* ── Hover sobre interactivos ── */
  const selectoresHover = 'a, button, [role="button"], input, label, .flip-card, .nav-item, .playlist-item, .btn-control';

  document.addEventListener('mouseover', e => {
    if (e.target.closest(selectoresHover)) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(selectoresHover)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  /* ── Click ── */
  document.addEventListener('mousedown', e => {
    document.body.classList.add('cursor-click');
    crearDestello(e.clientX, e.clientY);
    // Ráfaga de partículas en click
    for (let i = 0; i < 6; i++) {
      setTimeout(() => crearParticula(e.clientX, e.clientY, true), i * 30);
    }
  });
  document.addEventListener('mouseup', () => {
    document.body.classList.remove('cursor-click');
  });

  /* ── Crear partícula de estela ── */
  function crearParticula(x, y, esClick = false) {
    const p = document.createElement('div');
    p.className = 'cursor-particula';
    p.textContent = SIMBOLOS[Math.floor(Math.random() * SIMBOLOS.length)];

    const dx = (Math.random() - 0.5) * (esClick ? 80 : 30);
    const dy = -(Math.random() * (esClick ? 70 : 50) + 10);
    const rot = (Math.random() - 0.5) * 360;
    const dur = (Math.random() * 0.4 + (esClick ? 0.7 : 0.6)).toFixed(2);
    const escala = esClick ? (Math.random() * 0.6 + 0.8) : (Math.random() * 0.4 + 0.5);

    p.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      font-size: ${escala}rem;
      --dx-p: ${dx}px;
      --dy-p: ${dy}px;
      --rot-p: ${rot}deg;
      --dur-p: ${dur}s;
    `;

    document.body.appendChild(p);
    setTimeout(() => p.remove(), parseFloat(dur) * 1000 + 100);
  }

  /* ── Crear destello de click ── */
  function crearDestello(x, y) {
    const d = document.createElement('div');
    d.className = 'cursor-destello';
    const tam = Math.random() * 40 + 40;
    d.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: ${tam}px;
      height: ${tam}px;
    `;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 600);
  }

  /* ── Ocultar cursor al salir de la ventana ── */
  document.addEventListener('mouseleave', () => {
    cursorEl.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursorEl.style.opacity = '1';
  });
}
