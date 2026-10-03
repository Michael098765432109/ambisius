const POEMAS = {
  deadpool: [
    ['Mi refugio en el caos', 'Entre el caos del mundo y el ruido sin fin,|hallé mi refugio en tu dulce jardín.|Alexandra hermosa, de rostro risueño,|apagar el dolor de mi alma es tu sueño.|Rompería la historia, la trama y el guion,|por ser el guardián de tu gran corazón.|Mi cachetona amada, de cachetes de luz,|no existe en el mapa otra dicha como tú.|Lucharía mil veces, venciendo el destino,|con tal de cruzarme siempre en tu camino.|Tu risa es la fuerza que todo lo cura,|la dulce locura que a mi alma restaura.|En este universo de sombras y fuego,|amarte es mi vida, no un simple juego.|Te quiero completa, con tu luz y tu paz,|eres mi heroína y mi refugio jamás.'],
    ['El único refugio', 'En un mundo de caos y mil batallas,|tú eres el único refugio que no falla.|Entre locuras y risas sin control,|Alexandra, tu amor es mi único sol.'],
    ['Tu nombre en cada rincón', 'Daría mil vidas, rompería la pantalla,|por verte sonreír en cada batalla.|Escribo tu nombre en cada rincón,|porque solo tú mandas en mi corazón.'],
    ['Amor sin igual', 'No hay superhéroe ni fuerza en la tierra|que venza el amor que este pecho encierra.|Contigo la vida es una aventura genial,|mi Alexandra hermosa, mi amor sin igual.'],
    ['Cicatrices de amor', 'Mis cicatrices cuentan mil historias,|pero ninguna supera tus glorias.|Eres la razón por la que sigo aquí,|Alexandra, todo lo bueno empezó en ti.'],
    ['Cuarta pared', 'Rompo la cuarta pared para decirte,|que no hay universo donde pueda perderte.|Eres el guion que quiero vivir,|mi Alexandra, mi razón de existir.'],
    ['Sin máscara', 'Sin máscara ni traje soy solo yo,|un corazón que por ti latió.|Contigo no necesito ser el héroe,|basta con amarte, ese es mi deseo.'],
  ],
  snoopy: [
    ['Sueño de algodón', 'Sobre el techo del mundo mirando al cielo,|dibujo tu nombre en mi humilde desvelo.|Cachetona querida, mi dulce ilusión,|en un abrazo tuyo cabe mi corazón.|Como un sueño de algodón en la tarde serena,|tu mirada borra cualquier triste pena.|Alexandra mía, estrellita sin par,|contigo la vida es soñar y soñar.|Guardo en mi pecho la nota más bella,|escrita al alero de alguna estrella.|Esa que dice que tu piel y tu aroma|son el único puerto donde mi alma asoma.|Volemos tan alto donde no llegue el viento,|a vivir sin prisa este gran sentimiento.|Eres la caricia, la calma y el sol,|la dueña absoluta de mi gira-sol.'],
    ['Mirando las estrellas', 'Sobre el techo de mi casa mirando las estrellas,|pienso en tus besos, las cosas más bellas.|Alexandra bonita, en cada pensamiento,|tú eres la calma y mi dulce momento.'],
    ['Carta en el cielo azul', 'Como una carta escrita en el cielo azul,|no hay nadie en el mundo tan dulce como tú.|Soñar a tu lado es mi lugar favorito,|amar a Alexandra es un lazo infinito.'],
    ['Puerto de paz', 'Entre nubes de algodón y tardes de paz,|tu abrazo es el puerto a donde voy a dar.|Si el mundo da vueltas y cambia de color,|a tu lado, mi vida, siempre está el amor.'],
    ['Baile en el jardín', 'Bailando en el jardín bajo la lluvia fina,|tu risa, Alexandra, todo lo ilumina.|Como Snoopy feliz dando vueltas al viento,|contigo cada instante es un bello momento.'],
    ['Globo de pensamiento', 'En mi globo de pensamiento solo estás tú,|pintada de colores, de rosa y de azul.|Cada día contigo es una nueva aventura,|eres mi alegría, mi mayor ternura.'],
    ['Amigos del alma', 'Como Charlie y Snoopy, inseparables dos,|caminamos juntos de la mano con Dios.|Alexandra querida, amiga y amor mío,|contigo no existe el frío.'],
  ],
  bless: [
    ['Luz de neón', 'Bajo la luz del neón que pinta la ciudad,|tu amor, Alexandra, es mi única verdad.|Elegante y perfecta con tu estilo único,|ante tu belleza me vuelvo un poético.|Mi cachetona hermosa, brillas en la noche,|de cariño por ti nunca hago un derroche.|Rimas en la mente y fuego en las venas,|a tu lado se olvidan todas las cadenas.|Eres la melodía de mi mejor canción,|el verso que retumba con fuerza e ilusión.|No hay ritmo en la calle ni estrella en el cielo|que supere el abrigo de tu cálido velo.|Caminemos juntos sin mirar atrás,|prometo quererte cada día más.|Mi musa, mi reina, mi luz y mi gloria,|contigo escribo la más bella historia.'],
    ['Nuestro ritmo', 'Cuando suena una canción de Blessd,|tu sonrisa me marca el compás.|Mi cachetona, bailando contigo|no necesito nada más.'],
    ['Noche de Medellín', 'La noche despierta con luces,|la música empieza a sonar;|mi cachetona, entre miles de voces,|solo contigo quiero bailar.'],
    ['Mi canción favorita', 'Puede cambiar el ritmo del día,|puede cambiar la canción;|pero tu risa, mi vida,|siempre manda en mi corazón.'],
    ['Versos para mi reina', 'Con un beat que nos lleva despacio,|y la luna mirando también;|mi cachetona, me quedo en tus brazos,|mi lugar favorito y mi bien.'],
    ['A tu compás', 'Que suene la calle encendida,|que el bajo nos haga vibrar;|mi cachetona, contigo en la vida,|cada paso me enseña a amar.'],
    ['Cierre de concierto', 'Cuando se apaguen las luces,|y se quede en silencio la voz,|mi cachetona, mi estrella de siempre,|seguirá sonando nuestro amor.'],
  ],
  hellokitty: [
    ['Mi mundo rosado', 'Un lazo de seda y un toque de flor,|así es la belleza de tu puro amor.|Alexandra mi vida, mi dulce regalo,|estar a tu lado es lo único que valgo.|Mis manos anhelan tocar tus cachetes,|llenarte de besos, abrazos y fletes.|Un mundo rosado cargado de ternura,|donde cada segundo a tu lado me cura.|Llenas el aire de magia y dulzura,|amarte sin fin es mi bella aventura.|Detalles pequeños que hacen un tesoro,|para recordarte lo mucho que te adoro.|Eres el detalle más lindo de mi día,|mi fuente constante de paz y alegría.|Mi cachetona amada, princesita del sol,|tienes encerrado a mi corazón en tu farol.'],
    ['Lazo rosa', 'Un lazo rosa y un gesto de ternura,|amarte, Alexandra, es la mayor dulzura.|Llenas mis días de colores y flores,|eres la reina de todos mis amores.'],
    ['Detalles pequeños', 'Detalles pequeños que hacen un mundo,|por ti yo siento un amor muy profundo.|Caramelos, sonrisas y un abrazo apretado,|soy el más feliz cuando estoy a tu lado.'],
    ['Toque de magia', 'Un toque de magia en cada rincón,|tu mirada tierna me roba la razón.|Alexandra bella, mi luz y mi alegría,|te pienso en la noche y todo el santa día.'],
    ['Corazones de azúcar', 'Corazones de azúcar y lazos de seda,|tu amor, Alexandra, es lo que me queda.|Cada abrazo tuyo es un regalo del cielo,|contigo no necesito más consuelo.'],
    ['Mundo de colores', 'Pintas mi mundo de rosa y de blanco,|con tu amor, mi vida, nunca me estanco.|Eres la ternura hecha realidad,|mi Alexandra hermosa, mi felicidad.'],
    ['Estrella de purpurina', 'Eres la estrella de purpurina y amor,|que ilumina mi vida con su resplandor.|Alexandra dulce, mi sueño hecho real,|tu cariño es lo más especial.'],
  ],
  kuromi: [
    ['Candado de neón', 'Entre sombras moradas y un toque rebelde,|hallé este cariño que jamás se pierde.|Alexandra adorada, mi chica especial,|tu forma de amarme no tiene rival.|Con un estilo único y un brillo de estrella,|entre mil personas tú eres la más bella.|Tus cachetes tiernos rompen la armadura,|de este corazón que por ti se apresura.|Un candado neón protegiendo el secreto,|de este profundo amor sincero y directo.|Aunque el mundo gire con loco vaivén,|en tus brazos encuentro mi eterno edén.|Reina de mi alma, traviesa y genial,|nuestro lazo es fuerte, puro y celestial.|Sello este verso con fuego y pasión,|pues tuya es la llave de mi corazón.'],
    ['Corazón de oro', 'Con un toque rebelde y un corazón de oro,|Alexandra mía, tú eres mi tesoro.|Estilo misterioso y brillo en la mirada,|de ti yo vivo completamente enamorado.'],
    ['Imperio de amor', 'Entre detalles oscuros y notas de color,|construimos juntos un imperio de amor.|Nadie se compara a tu forma de ser,|eres mi presente y todo mi querer.'],
    ['Candado de neón', 'Un candado de neón guardando la promesa,|de amarte por siempre, mi dulce princesa.|Aunque el mundo sea loco o un poco travieso,|yo sello mi vida con uno de tus besos.'],
    ['Rebelde con causa', 'Rebelde con causa y amor en el pecho,|por ti, Alexandra, todo lo he hecho.|Tu estilo oscuro me cautiva el alma,|eres mi tormenta y también mi calma.'],
    ['Magia oscura', 'Con magia oscura y destellos de plata,|tu amor, Alexandra, todo lo rescata.|Eres el misterio que quiero descubrir,|la razón perfecta para existir.'],
    ['Nota de amor', 'Una nota de amor en papel negro,|para decirte que sin ti me muero.|Alexandra única, mi luz en la sombra,|tu nombre en mi pecho nunca se escombra.'],
  ],
  stitch: [
    ['Mi pacto bendito', 'Ohana es la promesa de no abandonar,|y yo a tu lado siempre quiero estar.|Alexandra hermosa, mi sol tropical,|tu llegada a mi vida fue algo colosal.|Sopló la brisa azul sobre la ancha mar,|y me enseñó lo hermoso que es poder amar.|Esos cachetes lindos que me hacen suspirar,|son el destino exacto donde quiero anclar.|Un amor sin fronteras, gigante y profundo,|capaz de abrazar todito este mundo.|Cruzaría los mares y el ancho océano,|solo por sostener con fuerza tu mano.|Mi pequeña estrella de otro firmamento,|eres la causa de mi pensamiento.|En este rincón del universo infinito,|amarte, Alexandra, es mi pacto bendito.'],
    ['Ohana', 'Ohana significa que la familia no se abandona,|y mi alma a tu lado se vuelve más buena.|Entre olas del mar y brisa tropical,|amar a Alexandra es algo colosal.'],
    ['Gran sorpresa', 'Llegaste a mi vida como una gran sorpresa,|cambiando mi mundo, llenándolo de certeza.|Estar a tu lado es mi lugar en el mapa,|tu amor me atrapa, de mi pecho no escapa.'],
    ['Hasta el infinito', 'Volando entre estrellas y playas de cristal,|nuestra historia juntos es algo magistral.|Alexandra amada, de aquí hasta el infinito,|tu nombre en mi pecho siempre queda escrito.'],
    ['Ola de ternura', 'Como una ola que llega a la orilla,|tu amor, Alexandra, brilla y maravilla.|Eres la marea que mueve mi corazón,|mi compañera en cada estación.'],
    ['Experimento perfecto', 'Si fuera un experimento, serías el 626,|el más perfecto, el que siempre vuelve.|Alexandra mía, creada para amar,|eres el ser que no puedo olvidar.'],
    ['Cielo de Hawaii', 'Bajo el cielo azul de Hawaii soñando,|tu nombre, Alexandra, voy susurrando.|Eres la aventura que siempre quise vivir,|mi razón de sonreír y existir.'],
  ],
  sulley: [
    ['Refugio de paz', 'Un abrazo gigante, abrigado y sincero,|es lo que te entrego porque tanto te quiero.|Alexandra amada, mi refugio de paz,|a tu lado el temor no regresa jamás.|Con tu risa de cristal abres la gran puerta,|de una vida mágica, dulce y despierta.|Ver tus cachetes hermosos al despertar,|es la mayor bendición que puedo lograr.|Te cuido de las sombras, te abrigo del frío,|pongo mi vida entera al borde del río.|Eres la ternura en forma de mujer,|la más bella luz de mi amanecer.|Tan grande es la dicha que cabe en el pecho,|que por tu felicidad todo lo he hecho.|Eres mi tesoro, mi suave guardián,|donde mis mañanas dichosas están.'],
    ['Abrazo gigante', 'Un abrazo gigante, suave y protector,|eso es lo que siento en tu cálido amor.|Alexandra querida, contigo no hay temor,|tu risa transforma todo en buen humor.'],
    ['Puerta a la magia', 'Abriendo la puerta a un mundo de magia,|tu dulce presencia todo lo contagia.|Grandes momentos se sienten pequeñitos,|si no estoy contigo viviendo lo bonito.'],
    ['Refugio de felpa', 'Como un refugio de felpa y suavidad,|tu cariño me llena de pura felicidad.|Un amor tan grande que no cabe en el pecho,|por hacerte feliz, todo lo he hecho.'],
    ['Monstruo de amor', 'Soy el monstruo más grande de este lugar,|pero contigo solo quiero amar.|Alexandra hermosa, mi fuerza y mi calma,|eres la dueña de toda mi alma.'],
    ['Risa que ilumina', 'Tu risa ilumina más que mil ciudades,|borrando del mundo todas las maldades.|Alexandra querida, luz de mi existir,|contigo cada día es un nuevo vivir.'],
    ['Puerta sin llave', 'No necesito llave para entrar a tu mundo,|porque tu amor es infinito y profundo.|Eres la puerta que siempre está abierta,|mi Alexandra bella, mi verdad más cierta.'],
  ],
  lotso: [
    ['Mi abrazo sin fin', 'Un aroma a fresa que llena el ambiente,|tu recuerdo, Alexandra, vive en mi mente.|Suave como el felpa, cálido como el sol,|tu amor me envuelve en un lindo arrebol.|Cachetona hermosa, de mejillas de miel,|dibujo tu rostro sobre mi propia piel.|Un abrazo apretado que no tenga fin,|haciendo florecer todito el jardín.|En cada detalle de rosa y dulzura,|se esconde la llama de mi gran locura.|No existe peluche ni dulce en el suelo,|que abraza tan fuerte como yo al cielo.|Te entrego mi vida envuelta en un lazo,|para vivir siempre preso en tu abrazo.|Alexandra mía, mi amor sin igual,|eres mi ternura más pura y real.'],
    ['Aroma a fresas', 'Aroma a fresas y un abrazo sin fin,|eres la flor más bella de todo el jardín.|Alexandra hermosa, dulce y consentida,|tú le das el toque perfecto a mi vida.'],
    ['Suave como el sol', 'Suave como un peluche, cálida como el sol,|en este corazón tú tienes el control.|Cada pensamiento huela a felicidad,|porque amarte tanto es mi gran verdad.'],
    ['Detalles de fresa', 'Detalles de fresa, tonos de rosa y miel,|escribo lo que siento al tocar tu piel.|No hay peluche ni dulce que se compare a ti,|Alexandra linda, tú me haces sonreír.'],
    ['Jardín de amor', 'En el jardín más dulce del corazón,|cultivo cada día tu hermosa canción.|Alexandra fragante, flor entre las flores,|eres la más bella de todos los colores.'],
    ['Miel y ternura', 'Miel y ternura en cada mirada tuya,|tu amor, Alexandra, nunca se atenúa.|Eres el dulce que endulza mi existir,|la razón perfecta para sonreír.'],
    ['Peluche eterno', 'Como un peluche que nunca se desgasta,|tu amor, Alexandra, siempre me basta.|Suave, constante, cálido y real,|eres mi amor más especial.'],
  ],
  pinguinos: [
    ['Promesa de por vida', 'Sobre el hielo blanco un camino de luz,|en el frío del mundo mi abrigo eres tú.|Los pingüinos eligen pareja una vez,|y yo te elegí con toda mi fe.|Alexandra linda, mi cachetona adorada,|te entrego la piedra más pulida y amada.|Un símbolo eterno de mi compromiso,|de hacer de tus días un dulce paraíso.|Caminando a tu paso, juntitos los dos,|deslizándonos libres con la bendición de Dios.|No importa la nieve ni el viento helado,|tu abrazo me mantiene siempre resguardado.|Promesa de vida, de amor y de calma,|has echado raíces muy dentro de mi alma.|Hoy y por siempre, en el frío o el sol,|tú serás el centro de mi girasol.'],
    ['Camino de luz', 'Sobre el hielo blanco un camino de luz,|no existe en el mundo nadie como tú.|Los pingüinos eligen una pareja de por vida,|y tú eres la mía, mi Alexandra querida.'],
    ['Piedrita de amor', 'Deslizándonos juntos en el tiempo y el amor,|frente a cualquier frío tu abrazo me da calor.|Una piedrita guardada como gran tesoro,|para recordarte lo mucho que te adoro.'],
    ['Promesa del alma', 'Caminando a tu paso, juntitos los dos,|agradezco cada día tenerte con Dios.|Alexandra mía, promesa de mi alma,|en la tormenta fría, tú eres toda mi calma.'],
    ['Hielo y fuego', 'En el hielo más frío tu amor me calienta,|cada momento contigo el alma se alimenta.|Alexandra querida, mi fuego en el frío,|eres el calor más grande que es mío.'],
    ['Pareja eterna', 'Como los pingüinos que nunca se separan,|nuestros corazones siempre se amparan.|Alexandra amada, mi pareja elegida,|contigo quiero pasar toda la vida.'],
    ['Danza en el hielo', 'Bailamos juntos sobre el hielo brillante,|tu amor, Alexandra, siempre es constante.|Eres la danza que quiero bailar,|mi compañera eterna en este lugar.'],
  ],
};

const TEMAS = {
  deadpool: ['#ff3b3b', '❤️'], snoopy: ['#f5c842', '🐾'], bless: ['#ef4058', '🎤'],
  hellokitty: ['#ff6eb4', '🎀'], kuromi: ['#9b59b6', '🖤'], stitch: ['#4fc3f7', '🌊'],
  sulley: ['#42a5f5', '💙'], lotso: ['#f06292', '🍓'], pinguinos: ['#80deea', '🐧'],
};
let temaActual = 'deadpool';
let indicePoemaActual = 0;

function textoSeguro(elemento, texto) { elemento.textContent = texto; }

function renderizarPoemas(tema) {
  const contenedor = document.querySelector(`.poemas-grid[data-seccion="${tema}"]`);
  if (!contenedor) return;
  const [color, icono] = TEMAS[tema];
  contenedor.replaceChildren(...POEMAS[tema].map(([titulo, texto], indice) => {
    const articulo = document.createElement('article');
    articulo.className = 'poema-tarjeta revelar';
    articulo.tabIndex = 0;
    articulo.setAttribute('role', 'button');
    articulo.setAttribute('aria-label', `Leer poema ${indice + 1}: ${titulo}`);
    articulo.style.setProperty('--color-poema', color);
    articulo.style.setProperty('--glow-poema', `${color}55`);
    const brillo = document.createElement('div'); brillo.className = 'poema-tarjeta-brillo';
    const numero = document.createElement('div'); numero.className = 'poema-numero'; numero.textContent = `${icono} Poema ${indice + 1}`;
    const encabezado = document.createElement('h3'); encabezado.className = 'poema-titulo-tarjeta'; encabezado.textContent = titulo;
    const preview = document.createElement('div'); preview.className = 'poema-preview';
    texto.split('|').slice(0, 2).forEach(verso => { const p = document.createElement('p'); p.textContent = verso; preview.append(p); });
    const pie = document.createElement('div'); pie.className = 'poema-tarjeta-pie';
    const leer = document.createElement('span'); leer.className = 'poema-leer-btn'; leer.textContent = 'Leer poema completo ✦';
    const lineas = document.createElement('span'); lineas.className = 'poema-lineas'; lineas.textContent = `${texto.split('|').length} versos`;
    pie.append(leer, lineas); articulo.append(brillo, numero, encabezado, preview, pie);
    articulo.addEventListener('click', () => abrirPoema(tema, indice));
    articulo.addEventListener('keydown', evento => { if (evento.key === 'Enter' || evento.key === ' ') { evento.preventDefault(); abrirPoema(tema, indice); } });
    return articulo;
  }));
}

function crearModal() {
  if (document.getElementById('modal-poema')) return;
  const modal = document.createElement('div'); modal.id = 'modal-poema'; modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-label', 'Leer poema');
  modal.innerHTML = `<div class="modal-fondo" id="modal-fondo"></div><div class="modal-contenedor" id="modal-contenedor"><div class="modal-destellos" id="modal-destellos"></div><button class="modal-cerrar" id="modal-cerrar" aria-label="Cerrar">✕</button><div class="modal-cabecera"><span class="modal-icono" id="modal-icono"></span><span class="modal-num" id="modal-num"></span></div><h2 class="modal-titulo" id="modal-titulo"></h2><div class="modal-versos" id="modal-versos"></div><div class="modal-firma"><span class="modal-firma-texto">— Con todo mi amor, para Alexandra 💕</span></div><div class="modal-acciones"><button class="modal-btn" id="modal-anterior">← Anterior</button><button class="modal-btn" id="modal-siguiente">Siguiente →</button></div></div>`;
  document.body.append(modal);
  document.getElementById('modal-cerrar').addEventListener('click', cerrarModal);
  document.getElementById('modal-fondo').addEventListener('click', cerrarModal);
  document.getElementById('modal-anterior').addEventListener('click', () => moverPoema(-1));
  document.getElementById('modal-siguiente').addEventListener('click', () => moverPoema(1));
  document.addEventListener('keydown', e => { if (!modal.classList.contains('activo')) return; if (e.key === 'Escape') cerrarModal(); if (e.key === 'ArrowLeft') moverPoema(-1); if (e.key === 'ArrowRight') moverPoema(1); });
}

function abrirPoema(tema, indice) { temaActual = tema; indicePoemaActual = indice; actualizarModal(); document.getElementById('modal-poema').classList.add('activo'); document.body.style.overflow = 'hidden'; document.getElementById('modal-cerrar').focus(); }
function cerrarModal() { document.getElementById('modal-poema').classList.remove('activo'); document.body.style.overflow = ''; }
function actualizarModal() {
  const [titulo, texto] = POEMAS[temaActual][indicePoemaActual];
  const [color, icono] = TEMAS[temaActual];
  const modal = document.getElementById('modal-poema'); modal.style.setProperty('--color-modal', color); modal.style.setProperty('--glow-modal', `${color}55`);
  textoSeguro(document.getElementById('modal-icono'), icono); textoSeguro(document.getElementById('modal-num'), `Poema ${indicePoemaActual + 1} de ${POEMAS[temaActual].length}`); textoSeguro(document.getElementById('modal-titulo'), titulo);
  const versos = document.getElementById('modal-versos'); versos.replaceChildren(...texto.split('|').map((linea, i) => { const p = document.createElement('p'); p.className = 'modal-verso'; p.style.animationDelay = `${0.12 * i}s`; p.textContent = linea; return p; }));
  document.getElementById('modal-anterior').disabled = indicePoemaActual === 0; document.getElementById('modal-siguiente').disabled = indicePoemaActual === POEMAS[temaActual].length - 1;
}
function moverPoema(direccion) { const nuevo = indicePoemaActual + direccion; if (nuevo < 0 || nuevo >= POEMAS[temaActual].length) return; indicePoemaActual = nuevo; actualizarModal(); }

document.addEventListener('DOMContentLoaded', () => { crearModal(); Object.keys(POEMAS).forEach(renderizarPoemas); });
