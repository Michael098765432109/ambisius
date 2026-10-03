// lock.js — Pantalla de bloqueo y seguridad

const CONTRASENA_VALIDA = ['25052025', '25/05/2025'];
const PAGINA_APP        = 'app.html';

/* ── Referencias DOM ── */
const pantalla      = document.getElementById('pantalla-bloqueo');
const campo         = document.getElementById('campo-contrasena');
const btnDesbloquear= document.getElementById('btn-desbloquear');
const btnOjo        = document.getElementById('btn-ojo');
const mensajeError  = document.getElementById('mensaje-error');
const flash         = document.getElementById('flash-desbloqueo');
const contenedorCelebr = document.getElementById('corazones-celebracion');

/* ── Partículas de fondo ── */
function crearParticulasFondo() {
  const contenedor = document.getElementById('particulas-bloqueo');
  const emojis = ['❤️','💕','💗','💖','✨','💫','🌸'];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement('span');
    el.classList.add('particula-corazon');
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left             = Math.random() * 100 + 'vw';
    el.style.bottom           = '-2rem';
    el.style.fontSize         = (0.6 + Math.random() * 1.2) + 'rem';
    el.style.animationDuration= (6 + Math.random() * 10) + 's';
    el.style.animationDelay   = (Math.random() * 8) + 's';
    contenedor.appendChild(el);
  }
}

/* ── Mostrar / ocultar contraseña ── */
let contrasenaVisible = false;
btnOjo.addEventListener('click', () => {
  contrasenaVisible = !contrasenaVisible;
  campo.type        = contrasenaVisible ? 'text' : 'password';
  btnOjo.textContent= contrasenaVisible ? '🙈' : '👁️';
});

/* ── Limpiar estado del campo ── */
function limpiarEstado() {
  campo.classList.remove('error', 'exito');
  mensajeError.textContent = '';
}

campo.addEventListener('input', limpiarEstado);

/* ── Verificar contraseña ── */
function verificarContrasena() {
  const valor = campo.value.trim();

  if (!valor) {
    mostrarError('Ingresa la contraseña para continuar 🔒');
    return;
  }

  if (CONTRASENA_VALIDA.includes(valor)) {
    desbloquear();
  } else {
    mostrarError('Contraseña incorrecta. Inténtalo de nuevo 💔');
    campo.classList.add('error');
    setTimeout(() => campo.classList.remove('error'), 600);
  }
}

/* ── Mostrar error ── */
function mostrarError(msg) {
  mensajeError.textContent = msg;
  campo.classList.add('error');
  setTimeout(() => campo.classList.remove('error'), 600);
}

/* ── Desbloquear ── */
function desbloquear() {
  campo.classList.add('exito');
  mensajeError.textContent = '';

  // 1. Lanzar corazones de celebración
  lanzarCorazones();

  // 2. Flash blanco
  setTimeout(() => {
    flash.classList.add('activo');
  }, 400);

  // 3. Animar salida de la pantalla
  setTimeout(() => {
    pantalla.classList.add('desbloqueando');
  }, 600);

  // 4. Redirigir a la app
  setTimeout(() => {
    window.location.href = PAGINA_APP;
  }, 1400);
}

/* ── Corazones de celebración ── */
function lanzarCorazones() {
  const emojis = ['❤️','💕','💖','💗','💘','✨','🌸','💫'];
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;

  for (let i = 0; i < 28; i++) {
    const el = document.createElement('span');
    el.classList.add('corazon-celebracion');
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const angulo = Math.random() * Math.PI * 2;
    const dist   = 120 + Math.random() * 260;
    const dx     = Math.cos(angulo) * dist;
    const dy     = Math.sin(angulo) * dist - 100;
    const rot    = (Math.random() - 0.5) * 720 + 'deg';

    el.style.left = cx + 'px';
    el.style.top  = cy + 'px';
    el.style.setProperty('--dx', dx + 'px');
    el.style.setProperty('--dy', dy + 'px');
    el.style.setProperty('--rot', rot);
    el.style.animationDelay = (Math.random() * 0.3) + 's';
    el.style.fontSize = (1 + Math.random() * 1.5) + 'rem';

    contenedorCelebr.appendChild(el);
  }
}

/* ── Enter para desbloquear ── */
campo.addEventListener('keydown', e => {
  if (e.key === 'Enter') verificarContrasena();
});

btnDesbloquear.addEventListener('click', verificarContrasena);

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  crearParticulasFondo();
  // Foco automático en el campo
  setTimeout(() => campo.focus(), 500);
});
