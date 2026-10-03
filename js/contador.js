// contador.js — Contador de tiempo transcurrido desde el 25/05/2025

const FECHA_INICIO = new Date('2025-05-25T00:00:00');

const elDias    = document.getElementById('cnt-dias');
const elHoras   = document.getElementById('cnt-horas');
const elMinutos = document.getElementById('cnt-minutos');
const elSegundos= document.getElementById('cnt-segundos');

function actualizarContador() {
  const ahora     = new Date();
  const diferencia= ahora - FECHA_INICIO;

  if (diferencia < 0) {
    // Fecha futura: mostrar cuenta regresiva
    const restante = Math.abs(diferencia);
    const dias     = Math.floor(restante / 86400000);
    const horas    = Math.floor((restante % 86400000) / 3600000);
    const minutos  = Math.floor((restante % 3600000)  / 60000);
    const segundos = Math.floor((restante % 60000)    / 1000);
    if (elDias)     elDias.textContent     = String(dias).padStart(2, '0');
    if (elHoras)    elHoras.textContent    = String(horas).padStart(2, '0');
    if (elMinutos)  elMinutos.textContent  = String(minutos).padStart(2, '0');
    if (elSegundos) elSegundos.textContent = String(segundos).padStart(2, '0');
    return;
  }

  const dias     = Math.floor(diferencia / 86400000);
  const horas    = Math.floor((diferencia % 86400000) / 3600000);
  const minutos  = Math.floor((diferencia % 3600000)  / 60000);
  const segundos = Math.floor((diferencia % 60000)    / 1000);

  if (elDias)     elDias.textContent     = String(dias).padStart(2, '0');
  if (elHoras)    elHoras.textContent    = String(horas).padStart(2, '0');
  if (elMinutos)  elMinutos.textContent  = String(minutos).padStart(2, '0');
  if (elSegundos) elSegundos.textContent = String(segundos).padStart(2, '0');
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarContador();
  setInterval(actualizarContador, 1000);
});
