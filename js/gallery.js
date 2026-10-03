// gallery.js
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 130);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const start  = performance.now();
  const dur    = 1800;
  (function step(now) {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(start);
}

function initStats() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number[data-target]').forEach(el => obs.observe(el));
}

function initTilt() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transition = 'transform 0.08s';
      card.style.transform  = `translateY(-12px) rotateX(${(-y*10).toFixed(1)}deg) rotateY(${(x*10).toFixed(1)}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s var(--ease-out)';
      card.style.transform  = '';
    });
  });
}

document.addEventListener('appReady', () => {
  initReveal();
  initStats();
  initTilt();
});
