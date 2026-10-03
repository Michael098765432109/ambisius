// reproductor.js — Reproductor de música local con audio HTML5

const LISTA_CANCIONES = [
  { titulo: 'Anhelo',                  artista: "Adolescent's Orquesta",         emoji: '🌹', archivo: "musica/Anhelo-compat.mp3" },
  { titulo: 'Para Dar Contigo',        artista: 'Andrés Cepeda',                 emoji: '💕', archivo: "musica/Para-Dar-Contigo-compat.mp3" },
  { titulo: 'Pensando en Ti',          artista: 'Andrés Cepeda',                 emoji: '✨', archivo: "musica/Pensando-en-Ti-compat.mp3" },
  { titulo: 'Por El Resto De Mi Vida', artista: 'Andrés Cepeda',                 emoji: '💫', archivo: "musica/Por-El-Resto-De-Mi-Vida-compat.mp3" },
  { titulo: 'Do I Wanna Know?',        artista: 'Arctic Monkeys',                emoji: '🎸', archivo: "musica/Arctic Monkeys - Do I Wanna Know (Official Video).mp3" },
  { titulo: 'Hasta Ese Entonces',      artista: 'Alek Pérez',                    emoji: '🎵', archivo: "musica/Hasta-Ese-Entonces-compat.mp3" },
  { titulo: 'Lava You',                artista: 'Canción de los Volcanes',       emoji: '🌋', archivo: "musica/Lava-You-compat.mp3" },
  { titulo: 'Te Esperaré',             artista: 'Julio Jaramillo',               emoji: '🌸', archivo: "musica/Te-Esperare-compat.mp3" },
  { titulo: 'Call Out My Name',        artista: 'The Weeknd',                    emoji: '🌙', archivo: "musica/The Weeknd - Call Out My Name (Official Video).mp3" },
  { titulo: 'Starboy',                 artista: 'The Weeknd ft. Daft Punk',      emoji: '⭐', archivo: "musica/The Weeknd - Starboy ft. Daft Punk (Official Video) ft. Daft Punk.mp3" },
  { titulo: 'Die For You (Remix)',     artista: 'The Weeknd & Ariana Grande',    emoji: '💜', archivo: "musica/The Weeknd, Ariana Grande - Die For You (Remix Lyric Video).mp3" },
  { titulo: 'One Of The Girls',        artista: 'The Weeknd, JENNIE & Lily-Rose',emoji: '🌺', archivo: "musica/The Weeknd, JENNIE, Lily-Rose Depp - One Of The Girls (Official Video).mp3" },
  { titulo: 'Un Millón de Primaveras', artista: 'Vicente Fernández',             emoji: '🌼', archivo: "musica/Un-Millon-de-Primaveras-compat.mp3" },
];

/* ── Estado ── */
let indiceActual    = 0;
let modoShuffle     = false;
let modoRepeat      = 'none'; // 'none' | 'all' | 'one'
let modoRepeatIdx   = 0;
let volumenMuteado  = false;
let volumenAnterior = 0.8;
let playlistAbierta = false;

/* ── Audio ── */
const audio = new Audio();
audio.volume = 0.8;
audio.preload = 'metadata';

/* ── DOM ── */
const reproductor       = document.getElementById('reproductor');
const viniloDisco       = reproductor.querySelector('.vinilo-disco');
const nombreCancion     = reproductor.querySelector('.reproductor-cancion');
const nombreArtista     = reproductor.querySelector('.reproductor-artista');
const numCancion        = reproductor.querySelector('.reproductor-num-cancion');
const btnPlay           = document.getElementById('btn-play-pausa');
const btnAnterior       = document.getElementById('btn-anterior');
const btnSiguiente      = document.getElementById('btn-siguiente');
const btnShuffle        = document.getElementById('btn-shuffle');
const btnRepeat         = document.getElementById('btn-repeat');
const btnMinimizar      = document.getElementById('btn-minimizar');
const btnFlotante       = reproductor.querySelector('.btn-flotante-musica');
const progresoFill      = reproductor.querySelector('.progreso-fill');
const progresoWrap      = reproductor.querySelector('.progreso-wrap');
const tiempoActualEl    = reproductor.querySelector('.tiempo-actual');
const tiempoTotalEl     = reproductor.querySelector('.tiempo-total');
const ecualizador       = reproductor.querySelector('.ecualizador');
const volumenSlider     = reproductor.querySelector('.volumen-slider');
const volumenIcono      = reproductor.querySelector('.volumen-icono');
const btnPlaylistToggle = document.getElementById('btn-playlist-toggle');
const playlistPanel     = reproductor.querySelector('.playlist-panel');
const playlistLista     = reproductor.querySelector('.playlist-lista');

/* ── Helpers ── */
function fmt(seg) {
  if (!isFinite(seg) || isNaN(seg)) return '0:00';
  const m = Math.floor(seg / 60);
  const s = Math.floor(seg % 60);
  return m + ':' + String(s).padStart(2, '0');
}

function actualizarIconoVolumen() {
  if (audio.volume === 0 || volumenMuteado) {
    volumenIcono.textContent = '🔇';
  } else if (audio.volume < 0.5) {
    volumenIcono.textContent = '🔉';
  } else {
    volumenIcono.textContent = '🔊';
  }
}

/* ── Construir playlist ── */
function construirPlaylist() {
  playlistLista.innerHTML = '';
  LISTA_CANCIONES.forEach((c, i) => {
    const item = document.createElement('div');
    item.className = 'playlist-item' + (i === indiceActual ? ' activa' : '');
    item.dataset.idx = i;
    item.innerHTML =
      '<span class="pl-num">' + (i + 1) + '</span>' +
      '<div class="pl-ondas">' +
        '<div class="pl-onda-barra"></div>' +
        '<div class="pl-onda-barra"></div>' +
        '<div class="pl-onda-barra"></div>' +
      '</div>' +
      '<span class="pl-emoji">' + c.emoji + '</span>' +
      '<div class="pl-info">' +
        '<div class="pl-titulo">' + c.titulo + '</div>' +
        '<div class="pl-artista">' + c.artista + '</div>' +
      '</div>' +
      '<span class="pl-duracion">—</span>';
    item.addEventListener('click', function() {
      indiceActual = i;
      cargarCancion(i, true);
    });
    playlistLista.appendChild(item);
  });
}

function actualizarPlaylistActiva() {
  playlistLista.querySelectorAll('.playlist-item').forEach(function(el, i) {
    el.classList.toggle('activa', i === indiceActual);
  });
}

/* ── Cargar canción ── */
function cargarCancion(idx, autoplay) {
  var c = LISTA_CANCIONES[idx];
  nombreCancion.textContent  = c.titulo;
  nombreArtista.textContent  = c.artista;
  numCancion.textContent     = (idx + 1) + ' / ' + LISTA_CANCIONES.length;
  progresoFill.style.width   = '0%';
  tiempoActualEl.textContent = '0:00';
  tiempoTotalEl.textContent  = '0:00';

  audio.src = c.archivo;
  audio.load();
  actualizarPlaylistActiva();

  if (autoplay) {
    audio.play().then(function() {
      setEstadoPlay(true);
    }).catch(function() {
      setEstadoPlay(false);
      mostrarError(c.titulo);
    });
  }
}

/* ── Estado visual ── */
function setEstadoPlay(playing) {
  btnPlay.textContent = playing ? '⏸' : '▶';
  btnPlay.setAttribute('aria-label', playing ? 'Pausar' : 'Reproducir');
  if (playing) {
    viniloDisco.classList.add('girando');
    ecualizador.classList.remove('pausado');
  } else {
    viniloDisco.classList.remove('girando');
    ecualizador.classList.add('pausado');
  }
}

function mostrarError(titulo) {
  nombreArtista.textContent = '⚠ No se pudo reproducir el audio';
  console.warn('[Reproductor] No se pudo reproducir: ' + titulo, audio.error);
}

/* ── Controles ── */
function togglePlay() {
  if (audio.paused) {
    audio.play().then(function() {
      setEstadoPlay(true);
    }).catch(function() {
      mostrarError(LISTA_CANCIONES[indiceActual].titulo);
    });
  } else {
    audio.pause();
    setEstadoPlay(false);
  }
}

function siguienteCancion() {
  if (modoRepeat === 'one') {
    audio.currentTime = 0;
    audio.play().then(function() { setEstadoPlay(true); });
    return;
  }
  if (modoShuffle) {
    var nuevo = indiceActual;
    while (nuevo === indiceActual && LISTA_CANCIONES.length > 1) {
      nuevo = Math.floor(Math.random() * LISTA_CANCIONES.length);
    }
    indiceActual = nuevo;
  } else {
    indiceActual = (indiceActual + 1) % LISTA_CANCIONES.length;
  }
  cargarCancion(indiceActual, true);
}

function anteriorCancion() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }
  indiceActual = (indiceActual - 1 + LISTA_CANCIONES.length) % LISTA_CANCIONES.length;
  cargarCancion(indiceActual, !audio.paused);
}

function ciclarRepeat() {
  modoRepeatIdx = (modoRepeatIdx + 1) % 3;
  var modos  = ['none', 'all', 'one'];
  var iconos = ['🔁', '🔁', '🔂'];
  var labels = ['Sin repetir', 'Repetir todo', 'Repetir una'];
  modoRepeat = modos[modoRepeatIdx];
  btnRepeat.textContent = iconos[modoRepeatIdx];
  btnRepeat.title       = labels[modoRepeatIdx];
  btnRepeat.classList.toggle('activo', modoRepeatIdx > 0);
}

function toggleShuffle() {
  modoShuffle = !modoShuffle;
  btnShuffle.classList.toggle('activo', modoShuffle);
}

function toggleMute() {
  if (volumenMuteado) {
    audio.volume = volumenAnterior || 0.8;
    volumenSlider.value = audio.volume;
    volumenMuteado = false;
  } else {
    volumenAnterior = audio.volume || 0.8;
    audio.volume = 0;
    volumenSlider.value = 0;
    volumenMuteado = true;
  }
  actualizarIconoVolumen();
}

function togglePlaylist() {
  playlistAbierta = !playlistAbierta;
  playlistPanel.classList.toggle('abierto', playlistAbierta);
  btnPlaylistToggle.classList.toggle('abierto', playlistAbierta);
}

function toggleMinimizar() {
  reproductor.classList.toggle('minimizado');
}

/* ── Eventos audio ── */
audio.addEventListener('timeupdate', function() {
  if (!audio.duration) return;
  var pct = (audio.currentTime / audio.duration) * 100;
  progresoFill.style.width   = pct + '%';
  tiempoActualEl.textContent = fmt(audio.currentTime);
});

audio.addEventListener('loadedmetadata', function() {
  tiempoTotalEl.textContent = fmt(audio.duration);
  var items = playlistLista.querySelectorAll('.playlist-item');
  if (items[indiceActual]) {
    items[indiceActual].querySelector('.pl-duracion').textContent = fmt(audio.duration);
  }
});

audio.addEventListener('ended', function() {
  if (modoRepeat === 'one') {
    audio.currentTime = 0;
    audio.play();
  } else if (modoRepeat === 'all' || modoShuffle) {
    siguienteCancion();
  } else if (indiceActual < LISTA_CANCIONES.length - 1) {
    siguienteCancion();
  } else {
    setEstadoPlay(false);
  }
});

audio.addEventListener('error', function() {
  mostrarError(LISTA_CANCIONES[indiceActual].titulo);
  setEstadoPlay(false);
});

/* ── Click en progreso ── */
progresoWrap.addEventListener('click', function(e) {
  if (!audio.duration) return;
  var rect = progresoWrap.getBoundingClientRect();
  var pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  audio.currentTime = pct * audio.duration;
});

/* ── Volumen ── */
volumenSlider.addEventListener('input', function() {
  audio.volume = parseFloat(volumenSlider.value);
  volumenMuteado = audio.volume === 0;
  if (audio.volume > 0) volumenAnterior = audio.volume;
  actualizarIconoVolumen();
});

/* ── Botones ── */
btnPlay.addEventListener('click', togglePlay);
btnAnterior.addEventListener('click', anteriorCancion);
btnSiguiente.addEventListener('click', siguienteCancion);
btnShuffle.addEventListener('click', toggleShuffle);
btnRepeat.addEventListener('click', ciclarRepeat);
btnMinimizar.addEventListener('click', toggleMinimizar);
btnFlotante.addEventListener('click', toggleMinimizar);
volumenIcono.addEventListener('click', toggleMute);
btnPlaylistToggle.addEventListener('click', togglePlaylist);

/* ── Init ── */
document.addEventListener('DOMContentLoaded', function() {
  construirPlaylist();
  actualizarIconoVolumen();
  setEstadoPlay(false);
  cargarCancion(0, false);
});
