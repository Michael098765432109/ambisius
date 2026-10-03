// navegacion.js — Orquesta la app completa

/* ══ PANTALLA DE CARGA ══ */
function iniciarCarga() {
  const barra    = document.getElementById('carga-barra');
  const pantalla = document.getElementById('pantalla-carga');
  let progreso   = 0;

  const intervalo = setInterval(() => {
    progreso += Math.random() * 15 + 5;
    if (progreso >= 100) {
      progreso = 100;
      clearInterval(intervalo);
      barra.style.width = '100%';
      setTimeout(() => {
        pantalla.classList.add('ocultar');
        setTimeout(() => {
          pantalla.style.display = 'none';
          document.body.classList.remove('app-cargando');
          revelarSeccionActiva();
        }, 700);
      }, 300);
    }
    barra.style.width = progreso + '%';
  }, 80);
}

/* ══ CAMBIO DE TEMA ══ */
const secciones = document.querySelectorAll('.tema-seccion');
const itemsNav  = document.querySelectorAll('.nav-item');
const itemsInf  = document.querySelectorAll('.nav-inf-item');

function cambiarTema(nombre) {
  secciones.forEach(s => s.classList.remove('activa'));
  itemsNav.forEach(i => i.classList.remove('activo'));
  itemsInf.forEach(i => i.classList.remove('activo'));

  const seccion = document.getElementById('tema-' + nombre);
  if (seccion) {
    seccion.classList.add('activa');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Resetear revelar para re-animar
    seccion.querySelectorAll('.revelar').forEach(el => el.classList.remove('visible'));
    setTimeout(revelarSeccionActiva, 80);
  }

  itemsNav.forEach(i => { if (i.dataset.tema === nombre) i.classList.add('activo'); });
  itemsInf.forEach(i => { if (i.dataset.tema === nombre) i.classList.add('activo'); });

  // Cerrar panel en móvil
  document.getElementById('nav-panel')?.classList.remove('abierto');
}

/* ══ REVELAR ELEMENTOS ══ */
function revelarSeccionActiva() {
  const activa = document.querySelector('.tema-seccion.activa');
  if (!activa) return;
  activa.querySelectorAll('.revelar').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 130);
  });
}

/* ══ SCROLL REVEAL GLOBAL ══ */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const hermanos = [...entry.target.parentElement.querySelectorAll('.revelar')];
      const idx = hermanos.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 120);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.revelar').forEach(el => obs.observe(el));
}

/* ══ FLIP CARDS ══ */
function initFlipCards() {
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('volteada'));
  });
}

/* ══ NAV TOGGLE ══ */
document.getElementById('nav-toggle')?.addEventListener('click', () => {
  document.getElementById('nav-panel')?.classList.toggle('abierto');
});

/* ══ EVENTOS DE NAVEGACIÓN ══ */
itemsNav.forEach(btn => btn.addEventListener('click', () => cambiarTema(btn.dataset.tema)));
itemsInf.forEach(btn => btn.addEventListener('click', () => cambiarTema(btn.dataset.tema)));

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded', () => {
  iniciarCarga();
  initFlipCards();
  initScrollReveal();
});
