// poema-especial.js — lógica compartida para las 9 páginas de poema

document.addEventListener('DOMContentLoaded', function() {

  /* ── Animar versos escalonados ── */
  document.querySelectorAll('.poema-especial-verso').forEach(function(verso, i) {
    verso.style.animationDelay = (0.3 + i * 0.15) + 's';
  });

  /* ── Partículas de fondo ── */
  var fondo = document.querySelector('.poema-pagina-fondo');
  if (fondo) {
    var simbolos = ['💕', '✨', '🌸', '💫', '⭐', '💖', '🌟', '💗'];
    var config   = window.POEMA_CONFIG || {};
    var extras   = config.simbolos || [];
    var todos    = simbolos.concat(extras);

    for (var i = 0; i < 18; i++) {
      var p = document.createElement('span');
      p.className = 'poema-pagina-fondo-particula';
      p.textContent = todos[i % todos.length];
      p.style.left         = (Math.random() * 100) + '%';
      p.style.fontSize     = (Math.random() * 1 + 0.6) + 'rem';
      p.style.animationDuration  = (Math.random() * 12 + 10) + 's';
      p.style.animationDelay     = (Math.random() * 8) + 's';
      fondo.appendChild(p);
    }
  }

});
