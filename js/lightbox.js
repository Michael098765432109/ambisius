// lightbox.js — Lightbox con navegación, teclado y swipe

const IMAGES = [
  { src: 'imgs/entrada/deadpool disparo.jpg', title: 'El Disparo del Amor' },
  { src: 'imgs/entrada/deadpool unicorn.jpg', title: 'El Lado Tierno'      },
  { src: 'imgs/entrada/luz.jpg',              title: 'La Luz que Guía'     },
  { src: 'imgs/entrada/rotura.jpg',           title: 'El Corazón Roto'     },
];

let currentIndex = 0;
let touchStartX  = 0;

function openLightbox(src) {
  const idx = IMAGES.findIndex(img => img.src === src);
  currentIndex = idx >= 0 ? idx : 0;
  renderLightbox();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function renderLightbox() {
  const img   = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const count = document.getElementById('lightbox-count');
  const data  = IMAGES[currentIndex];

  img.style.opacity = '0';
  img.src = data.src;
  img.onload = () => { img.style.transition = 'opacity 0.3s'; img.style.opacity = '1'; };

  if (title) title.textContent = data.title;
  if (count) count.textContent = `${currentIndex + 1} / ${IMAGES.length}`;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
  renderLightbox();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % IMAGES.length;
  renderLightbox();
}

/* ── Teclado ── */
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('active')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft')  prevImage();
});

/* ── Swipe táctil ── */
function initSwipe() {
  const lb = document.getElementById('lightbox');
  lb.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend',   e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextImage() : prevImage();
  });
}

/* ── Init ── */
function initLightbox() {
  initSwipe();

  // Cerrar al hacer clic en el fondo
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeLightbox();
  });
}

document.addEventListener('appReady', initLightbox);

// Exponer globalmente para los onclick del HTML
window.openLightbox  = openLightbox;
window.closeLightbox = closeLightbox;
window.prevImage     = prevImage;
window.nextImage     = nextImage;
