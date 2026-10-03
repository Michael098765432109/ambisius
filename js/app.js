// app.js
function initCursor() {
  const cur = document.createElement('div');
  cur.style.cssText = `
    position:fixed; pointer-events:none; z-index:99999;
    font-size:1.1rem; transform:translate(-50%,-50%);
    transition:transform 0.12s; opacity:0; will-change:left,top;
  `;
  cur.textContent = '❤️';
  document.body.appendChild(cur);

  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
    cur.style.opacity = '1';
  });
  document.addEventListener('mouseleave', () => { cur.style.opacity = '0'; });

  document.addEventListener('appReady', () => {
    document.querySelectorAll('button, a, .card').forEach(el => {
      el.addEventListener('mouseenter', () => { cur.style.transform = 'translate(-50%,-50%) scale(2)'; });
      el.addEventListener('mouseleave', () => { cur.style.transform = 'translate(-50%,-50%) scale(1)'; });
    });
  });
}

function initGlitchTitle() {
  document.addEventListener('appReady', () => {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    setInterval(() => {
      if (Math.random() > 0.85) {
        title.style.animation = 'titleGlitch 0.4s steps(1) forwards';
        setTimeout(() => { title.style.animation = ''; }, 450);
      }
    }, 3000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(pointer:fine)').matches) initCursor();
  initGlitchTitle();
});
