(function BOSQAI_DOSSIER_PRO(){
"use strict";
const D=window.BOSQAI_DEEP||{}, all=D.toc||[];
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const notes={
"ACY2020-01":["Jorejick Family House","African House","Generational House","El encargo plantea vivienda asequible y replicable en Tanzania, no un objeto icónico aislado.","Programar un espacio cultural cotidiano desde capacidades reales y ciclos de mantenimiento, antes que desde una imagen.","No trasladar sin crítica condiciones económicas o constructivas africanas a la casa histórica.","Sistemas concretos: NO VERIFICADOS en este registro."],
"ACY2020-02":["Foldable Emergency Shelter","SAFE House","Kaira Loro","El concurso aborda operaciones de emergencia, abrigo y respuesta rápida ante crisis.","Ensayar la operación de evacuación, refugio climático y accesos del inmueble y jardines.","Una solución de emergencia no equivale a un detalle compatible con patrimonio.","Mecanismo plegable sugerido por el título premiado; funcionamiento técnico no validado."],
"ACY2020-03":["The Year Without a Winter","Symbiosis","Lloronas of Juárez","El formato Fairy Tales premia relatos y representaciones especulativas; no equivale a un edificio construible.","Construir un guion de experiencia poética verificable en cuatro escenas espaciales, sin escenografía literal.","Confundir intensidad narrativa con accesibilidad o conservación.","No es posible atribuir materialidad construida a una propuesta literaria sin más documentos."],
"ACY2020-04":["Xi’An Train Station — primer premio","Xi’An Train Station — segundo","Xi’An Train Station — tercero","La propuesta publicada vincula oriente y occidente mediante la metáfora de anillo y la conexión de sistemas urbanos.","Dibujar primero un grafo de llegada vial-jardín-casa y sus retornos reales.","Trasladar literalmente una figura circular ignoraría la tipología doméstica de Marradi.","Red de flujos documentada; secciones de infraestructura no transferibles automáticamente."],
"ACY2020-05":["Epidemic Babel: Healthcare Emergency Skyscraper","Egalitarian Nature: Vertical Green Park","Coast Breakwater: Vertical Community","La tipología especulativa plantea programas verticales frente a crisis sanitarias y ambientales.","Comprobar cruces entre circulación pública, investigación y servicio por plantas.","No confundir espectacularidad vertical con viabilidad de las escaleras existentes.","Sistemas constructivos de las propuestas: NO VERIFICADOS para ejecución."],
"ACY2020-06":["The Windows of Hverfjall","Crater II","Hverfjall Volcano Museum","El museo se emplaza ante el paisaje volcánico de Hverfjall; la experiencia de observación es parte del programa.","Seleccionar vistas reales desde la casa y jardines con coordenadas y cotas.","La geografía islandesa no proporciona una solución climática para el valle del Lamone.","Respuesta térmica y cerramientos: NO VERIFICADOS caso por caso."],
"ACY2020-07":["Piscina Mirabilis — primer premio","Piscina Mirabilis — segundo","Piscina Mirabilis — tercero","La memoria del primer premio describe la sala hipóstila, el agua y la luz cenital como condiciones a interpretar.","Identificar elementos no sustituibles, luz y recorridos antes de ubicar nuevas piezas.","No trasplantar agua o tratamiento de bóvedas a un edificio residencial diferente.","Fuente textual aborda disposición lateral de funciones; compatibilidad material por investigar."],
"ACY2020-08":["Site Mirador — primer premio","In Situ","Site Mirador — tercero","La ficha describe hormigón y tierra roja vertidos en encofrados de madera tallada y una transición hacia el horizonte.","Diseñar un detalle-test de umbral y vista con material local solo después de verificar compatibilidad.","Una técnica expresiva de mirador no prueba pertinencia en fábrica histórica.","Hormigón + tierra roja y encofrados tallados: descritos en ACY 2020, índice visual p. 6–7."],
"ACY2020-09":["Botte de Paile","Can Silo","Agora","La convocatoria combina alojamiento sostenible replicable y actividades de convivencia comunitaria.","Probar horarios de taller, visitas y trabajo silencioso, incluyendo independencia parcial del jardín.","Una vivienda social nueva no es precedente directo de intervención en inmueble protegido.","La técnica sugerida por el título no sustituye memoria y detalle de obra."],
"ACY2020-10":["Buque de La Artes","Artifacts of Entropy","Returning","Innatur 9 investiga la interacción entre intervención contemporánea y medio natural.","Hacer una matriz de vistas, asoleamiento y mantenimiento en ambos jardines.","La inmersión paisajística puede convertirse en parque temático si se ignora la comunidad.","Sistemas constructivos NO VERIFICADOS; estudiar cada lámina del PDF."],
"ACY2021-11":["Bauhaus Campus 2021 — primer premio","Bauhaus Campus 2021 — segundo","Bauhaus Campus 2021 — tercero","La convocatoria reinterpreta cómo funcionaría hoy un campus de enseñanza y creación.","Comparar espacios de aprendizaje temporal, talleres y archivo con tres regímenes de uso.","La flexibilidad abstracta no garantiza silencio ni conservación documental.","Estructura y montaje de la propuesta premiada: lectura técnica pendiente."],
"ACY2021-12":["Future Headquarter","Flowing Through Times","Future Headquarter — tercer premio","El primer premio organiza cinco centros funcionales a lo largo del eje del sitio y explicita siete principios.","Construir diagrama de dependencias funcionales del Centro Studi, museo, talleres y visitantes.","Importar ejes volumétricos sin comprobar recintos y cotas sería una analogía débil.","Disposición longitudinal descrita en la memoria; especificación material no acreditada."],
"ACY2021-13":["Women’s House — primer premio","Women’s House — segundo","Women’s House — tercero","El encargo vincula capacitación y sensibilización sobre igualdad de género con infraestructura comunitaria.","Probar acceso a talleres, refugio acústico, acogida y programación habitual.","No asimilar sin contexto la dimensión social de otro territorio a Marradi.","Soluciones climáticas concretas: comprobar en planos y memoria por premio."],
"ACY2021-14":["Rising from Grjótagjá","The Moving Surfaces","Hófsemi","El programa combina un lugar de observación y pequeño centro de visitantes en un terreno geológicamente sensible.","Verificar punto de observación, control de acceso y alternativa accesible en el jardín alto.","Exigir un gesto panorámico sin suelo y cotas comprobadas pone en riesgo la viabilidad.","Materialidad y cimentación en entorno volcánico NO extrapolables."],
"ACY2021-15":["The Tectonic Soul of the Ruin","The Door Closed Forever","Chisea Diruta – Risveglia","La memoria premiada describe ruina como palimpsesto, cubierta ausente y un volumen nuevo envuelto en policarbonato opal.","Examinar críticamente legibilidad de estratos y reversibilidad, sin presuponer un box-in-a-box.","Una solución dentro de una ruina no obliga a usar cajas interiores o translúcidos en Casa Campana.","Policarbonato opal mencionado en el texto del ganador; compatibilidad no transferida."],
"ACY2021-16":["Living Skyscraper For New York City","Lluvioso Skyscraper Collects Rainwater","Hmong Skyscraper","Las tres propuestas especulan sobre infraestructura ambiental y densidad vertical.","Traducir inquietudes ambientales en verificaciones de ventilación, drenaje y servicio, no en forma.","Un rascacielos especulativo no es precedente técnico de rehabilitación doméstica.","Tecnologías y balances: NO VERIFICADOS mediante ingeniería independiente."],
"ACY2021-17":["Cultural Centre for Norwegian Waterfront","Fortress of Culture","Ratljóst","El programa cultural se enfrenta al borde urbano y a su relación con la memoria y la comunidad.","Precisar qué ofrece la casa a la calle fuera de las horas de museo.","No confundir una fachada de referencia con la escala doméstica del inmueble.","Materialidad nórdica: no transferir sin estudios climáticos y de mantenimiento."],
"ACY2021-18":["Terraced Vineyards Hostel","Quatre Courts","Hostel on a Mediterranean Coast","La propuesta premiada relaciona hospedaje, terrazas y recorrido paisajístico.","Ensayar secuencia jardín-casa en una sección cotada, incluyendo pausas voluntarias.","La terraza no puede justificar rampas fuera de norma o alteración de taludes.","Detalles de terrazas y drenaje: NO VERIFICADOS aquí."],
"ACY2021-19":["A Night at the Museum","Almost Commemorative","Becoming Landscape","El Living Museum pide integrar residencia temporal de artistas con museo en el parque del Museo Nivola.","Comparar regímenes de archivo, residencia artística y visita; identificar incompatibilidades.","El programa de Marradi no incluye automáticamente todas las piezas del precedente.","Acabados y sistemas por comprobar; la conexión museo-acogida sí está documentada en bases."],
"ACY2021-20":["Elementary School","The River School","Tyoha School","El concurso responde a déficit educativo y alta ocupación escolar en Senegal.","Organizar talleres pequeños, accesibles y fáciles de mantener en la House of Poetry.","No transferir modelos escolares tropicales como respuesta higrotérmica italiana.","Soluciones de sombra y cubierta deben verificarse por caso."],
"ACY2022-21":["Children’s House","Children’s House — segundo","Children’s House — tercero","La convocatoria se centra en un espacio infantil para combatir la malnutrición en África subsahariana.","Comprobar escala infantil y diversidad de edades en un taller cultural intergeneracional.","No trivializar un programa sanitario como recurso formal para un museo.","Técnicas climáticas y locales pendientes de lectura de memoria específica."],
"ACY2022-22":["The House of Light","Fata Morgana","TWOFOLD: A water infrastructure that heals","La memoria del ganador aborda reactivar el antiguo Idroscalo mediante iluminación y permeabilidad desde el espacio público.","Probar un umbral que comunique actividad sin falsear aberturas patrimoniales.","Convertir luz en una imagen de vidrio sin medir protección solar, carga térmica y conservación.","El texto describe incorporación de superficies acristaladas en la propuesta; no avala su uso en Marradi."],
"ACY2022-23":["Urban Elevation, Azure Fascination","Let inspiration bloom along the tracks!","Sensory Maze","La propuesta ganadora organiza una experiencia contemplativa elevada sobre cubiertas parisinas.","Comparar dos formas de contemplar Marradi: jardín accesible y estancia interior silenciosa.","Una experiencia elevada exclusivamente por escalera puede excluir visitantes.","La viabilidad de acceso, soporte y cerramiento requiere comprobación propia."],
"ACY2022-24":["Our Tabo","KUBOnihan","Rebuilding the Tabo, Siargao Coco Lab","El concurso responde al tifón Rai de 2021 y busca reconstruir infraestructura social en Siargao.","Estudiar resiliencia operativa ante humedad, agua y continuidad cultural, con riesgos locales reales.","Una solución a tifones tropicales no reemplaza diagnóstico hidrogeológico apenínico.","Sistemas constructivos resistentes a vientos: verificar fuente antes de recomendar."],
"ACY2022-25":["The Innovation Farm","One Roof","Along the Street","La memoria del primer premio articula dos ejes en cruz —circulación y producción— mediante un impluvium y menciona acero.","Separar circuitos de visita y funcionamiento del archivo mediante diagrama antes que con formas.","Copiar una planta en cruz o sistema metálico sería arbitrariedad en casa existente.","Ejes en cruz, impluvium y acero: aparecen en la memoria de ACY 2022."],
"ACY2022-26":["The Building Block","Parallel","Urban Terrace School","El ganador propone organización por módulos combinables para un campus educativo de Bamako.","Evaluar mobiliario modular y organización reversible de talleres sin alterar muros históricos.","No justificar nuevas perforaciones por analogía con bloques de construcción.","Montaje de módulos y especificaciones no verificados como obra ejecutada."],
"ACY2022-27":["Climate: Control Tower","Tsunami Park","New Spring","El primer premio es una torre especulativa motivada por riesgos climáticos y respuesta social.","Convertir ambición ambiental en umbrales medibles y QA energético con fuentes y unidades.","Tecnología icónica no prueba rendimiento ni compatibilidad patrimonial.","Propuesta visionaria, no sistema constructivo validado para House of Poetry."],
"ACY2022-28":["The Beirut Lines","Beirut Port: An Urban Life Generator","Beirut Port / Port of Beirut","La convocatoria busca regeneración tras la explosión de agosto de 2020 y apertura urbana del frente portuario.","Evaluar Casa Campana como infraestructura cultural de barrio y no sólo destino turístico.","La escala y el trauma de Beirut no admiten equivalencias narrativas superficiales.","Soluciones urbanas no certifican construcción ni presupuestos de Marradi."],
"ACY2022-29":["Site Bathhouse — primer premio","Site Bathhouse — segundo","Site Bathhouse — tercero","El lugar combina restos patrimoniales, acantilado, agua y programa termal o balneario.","Comparar cómo la materia y la acústica sirven a un recorrido de lectura y pausa.","No transformar lo poético en sauna o escenografía sensorial sin función pública.","Técnicas de control de humedad y salinidad NO transferibles sin estudios."],
"ACY2022-30":["Harvesting in the fog","The Smokes, That Thunder(ed)","Pampa","Innatur 10 enfrenta refugios e instalaciones contemporáneas con la experiencia territorial.","Probar qué recorridos exteriores pueden operar sin abrir toda la casa.","La instalación pintoresca no sustituye mantenimiento ni accesibilidad.","Materiales y técnicas constructivas: NO VERIFICADOS por el índice."]
};
const year=document.body.dataset.book||"";
const base=document.body.dataset.base||"";
const root=document.querySelector("#root .container");
if(!root)return;
const shelf=[
["TRATADO","Tratado Maestro","Tratado_Maestro_House_of_Poetry_Marradi.pdf",21,"FUENTE EQUIPO"],
["ATLAS","Atlas crítico V2","ATLAS_CRITICO_Y_DIRECCION_ARQUITECTONICA.pdf",13,"FUENTE EQUIPO"],
["BRIEF-EN","Bases YAC inglés","HP_brief_eng.pdf",21,"OFICIAL · cotejar adendas"],
["BRIEF-ES","Bases YAC español","HP_brief_esp.pdf",21,"TRADUCCIÓN DE APOYO"],
["ACY2020","Architecture Competitions Yearbook 2020","Architecture Competitions Yearbook 2020",109,"EDITORIAL DE TERCEROS"],
["ACY2021","Architecture Competitions Yearbook 2021","Architecture Competitions Yearbook 2021",123,"EDITORIAL DE TERCEROS"],
["ACY2022","Architecture Competitions Yearbook 2022","Architecture Competitions Yearbook 2022",119,"EDITORIAL DE TERCEROS"]
];
const loaded={};
const src=document.createElement("section");src.className="section pro-sources";src.id="lector-pdf-local";
src.innerHTML=`<div class="section-head"><div><span class="caps">Fuentes reales · sin redistribución</span><h2>Biblioteca visual completa, desde tus PDF.</h2><p>Vincula en tu propio dispositivo las siete fuentes PDF. El lector muestra sus páginas e ilustraciones originales <strong>sin subir el archivo a GitHub ni a un servidor</strong>. Los PDF de terceros no se copian a la web pública. Debes elegir los archivos de nuevo al cambiar de dispositivo o recargar.</p></div></div><div class="pro-source-grid">${shelf.map(s=>`<article class="pro-source" data-source="${esc(s[0])}"><small>${esc(s[4])} · ${s[3]} páginas</small><h3>${esc(s[1])}</h3><p class="pro-file">${esc(s[2])}</p><button type="button" class="btn small pro-load" data-source="${s[0]}">Vincular PDF local</button><button type="button" class="btn small pro-open" data-source="${s[0]}" disabled>Leer / ver imágenes</button><span class="pro-status">Aún no vinculado</span><input class="pro-file-input" type="file" accept="application/pdf,.pdf" data-source="${s[0]}" aria-label="Seleccionar ${esc(s[1])}" hidden></article>`).join("")}</div><div class="pro-pdf-viewer" id="pro-pdf-viewer" hidden><div class="pro-view-bar"><strong id="pro-view-label">Documento</strong><label>Página PDF <input id="pro-page" type="number" min="1" value="1" class="field" style="width:90px"></label><button class="btn small" id="pro-page-go" type="button">Ir a página</button><a id="pro-open-tab" class="btn small" href="#" target="_blank" rel="noopener">Abrir en pestaña</a><button type="button" class="btn small" id="pro-close">Cerrar</button></div><iframe id="pro-iframe" title="Lector local de documento PDF" loading="lazy"></iframe><p class="tiny">Algunos navegadores móviles abren mejor el PDF mediante “Abrir en pestaña”. Este lector no modifica el archivo.</p></div><p class="tiny">La documentación se registra por fuente, edición y página impresa/PDF. Ninguna visualización sustituye la comprobación de derechos, la fuente original ni la decisión de BOSQAI.</p>`;
root.append(src);
let current=null;
function openPdf(id, page=1){
 const blob=loaded[id];if(!blob)return;
 current=id;
 const source=shelf.find(s=>s[0]===id);
 const n=Math.max(1,Math.min(source[3],Number(page)||1));
 const address=blob.url+"#page="+n;
 src.querySelector("#pro-pdf-viewer").hidden=false;
 src.querySelector("#pro-view-label").textContent=source[1]+" — p. PDF "+n;
 src.querySelector("#pro-page").max=String(source[3]);
 src.querySelector("#pro-page").value=String(n);
 src.querySelector("#pro-iframe").src=address;
 src.querySelector("#pro-open-tab").href=address;
 src.querySelector("#pro-pdf-viewer").scrollIntoView({behavior:"smooth",block:"start"});
}
src.addEventListener("click",e=>{
 const load=e.target.closest(".pro-load");if(load){src.querySelector(`input[data-source="${load.dataset.source}"]`).click();return}
 const op=e.target.closest(".pro-open");if(op){openPdf(op.dataset.source);return}
 if(e.target.id==="pro-page-go"&&current){openPdf(current,src.querySelector("#pro-page").value);return}
 if(e.target.id==="pro-close"){src.querySelector("#pro-pdf-viewer").hidden=true;src.querySelector("#pro-iframe").removeAttribute("src");return}
});
src.addEventListener("change",e=>{
 if(!e.target.matches(".pro-file-input"))return;
 const f=e.target.files&&e.target.files[0],id=e.target.dataset.source;
 if(!f)return;
 if(!/\.pdf$/i.test(f.name)&&f.type!=="application/pdf"){alert("Selecciona un archivo PDF.");return}
 if(loaded[id])URL.revokeObjectURL(loaded[id].url);
 loaded[id]={url:URL.createObjectURL(f),name:f.name};
 const card=e.target.closest(".pro-source");
 card.querySelector(".pro-status").textContent="Vinculado en esta sesión: "+f.name;
 card.querySelector(".pro-open").disabled=false;
});
window.addEventListener("pagehide",()=>Object.values(loaded).forEach(x=>URL.revokeObjectURL(x.url)),{once:true});
const cards=all.filter(c=>!year||c.year===year);
const atlas=document.createElement("section");atlas.className="section pro-dossier";atlas.id="laboratorio-ganadores";
atlas.innerHTML=`<div class="section-head"><div><span class="caps">Lectura de 30 concursos · ACY 2020–2022</span><h2>Premios, decisiones y pruebas transferibles.</h2><p>Comparación de primeros, segundos y terceros premios y una lectura de proyecto individual. “Decisión para ganar” significa aquí <strong>hipótesis editorial contrastable</strong>, no una explicación causal del jurado. Material y técnica se señalan únicamente cuando el caso los documenta.</p></div></div><div class="pro-controls"><input class="field" type="search" id="pro-search" placeholder="Buscar casa, ruina, acogida, sección, museo..." aria-label="Buscar fichas críticas">${year?"":'<select class="field" id="pro-year"><option value="">Todos los años</option><option>2020</option><option>2021</option><option>2022</option></select>'}<span id="pro-count" class="tag"></span></div><div class="pro-case-grid" id="pro-cases"></div><p class="tiny">Títulos y clasificaciones de premios: índices impresos de Architecture Competitions Yearbook N.º 02/03/04, página PDF 4; apartados de concursos desde página impresa indicada en cada ficha. Las preguntas para Marradi son del equipo de análisis, no afirmaciones de ACY.</p>`;
root.append(atlas);
function addTask(c,n){
 const key="bosqai.archcore.v2";let s;
 try{s=JSON.parse(localStorage.getItem(key))}catch(_){}
 if(!s||!Array.isArray(s.tasks)){alert("Abre Inicio para inicializar el tablero local y vuelve a intentarlo.");return}
 const title="ACY "+c.year+" — "+c.title+": "+n[4];
 if(s.tasks.some(t=>t.title===title)){alert("Esta prueba ya está en el tablero.");return}
 s.tasks.unshift({id:"pro-"+Date.now(),title,category:"Investigación",priority:"alta",due:"",status:"todo",origin:"ACY "+c.year+" p. impresa "+c.printed_start});
 try{localStorage.setItem(key,JSON.stringify(s));alert("Prueba agregada al tablero del navegador actual.")}catch(_){alert("No se pudo guardar; exporta tus tareas.")}
}
function render(){
 const q=atlas.querySelector("#pro-search").value.toLocaleLowerCase("es");
 const yf=year||atlas.querySelector("#pro-year")?.value||"";
 const items=cards.filter(c=>{
 const n=notes[c.id]||[];
 return (!yf||c.year===yf)&&(!q||JSON.stringify([c,n]).toLocaleLowerCase("es").includes(q));
 });
 atlas.querySelector("#pro-count").textContent=items.length+" fichas";
 atlas.querySelector("#pro-cases").innerHTML=items.map(c=>{
 const n=notes[c.id]||["NO VERIFICADO","NO VERIFICADO","NO VERIFICADO","En revisión","Pendiente","Pendiente","NO VERIFICADO"];
 const pg=Math.floor((Number(c.printed_start)+4)/2);
 return `<article class="pro-case" id="pro-${esc(c.id)}"><div class="pro-case-top"><span class="caps">${esc(c.id)} · impresa p.${c.printed_start} · PDF ≈ p.${pg}</span><span class="tag">${esc(c.type)}</span></div><h3>${esc(c.title)}</h3><div class="pro-prizes"><strong>1.º ${esc(n[0])}</strong><span>2.º ${esc(n[1])}</span><span>3.º ${esc(n[2])}</span></div><p><strong>Problema y proceso documentado:</strong> ${esc(n[3])}</p><details><summary>Acciones arquitectónicas, ideas y comparación</summary><p><strong>Acción registrada:</strong> ${esc(c.actions)}</p><p><strong>Hipótesis de decisión e idea organizadora:</strong> ${esc(c.idea)}. ${esc(c.key_decision)}</p><p>Los títulos de 2.º y 3.º sirven para el contraste; sin una lectura individual de sus memorias no se atribuyen causas a sus posiciones.</p></details><details><summary>Materiales y técnicas · prueba documental</summary><p>${esc(n[6])}</p><p><strong>Clasificación de materialidad:</strong> ${esc(c.material)}</p><p>Si falta memoria constructiva o detalle a escala, el sistema registra NO VERIFICADO; no convierte renders en prueba de obra.</p></details><details><summary>Aplicación precisa a House of Poetry</summary><p><strong>Test:</strong> ${esc(n[4])}</p><p><strong>Riesgo de extrapolación:</strong> ${esc(n[5])}</p><p>Prueba requerida: planta o sección, uso, fuente, límite y revisión adversarial de BOSQAI.</p></details><div class="pro-actions"><button class="btn small pro-task" type="button" data-id="${esc(c.id)}">+ Prueba al tablero</button><button class="btn small pro-jump" type="button" data-id="${esc(c.id)}" data-page="${pg}">Ver PDF original p.${pg}</button></div></article>`;
 }).join("")||'<p class="muted">No hay casos coincidentes.</p>';
}
atlas.querySelector("#pro-search").addEventListener("input",render);
if(!year)atlas.querySelector("#pro-year").addEventListener("change",render);
atlas.addEventListener("click",e=>{
 const t=e.target.closest(".pro-task");if(t){const c=all.find(x=>x.id===t.dataset.id);if(c)addTask(c,notes[c.id]);return}
 const b=e.target.closest(".pro-jump");if(b){
 const c=all.find(x=>x.id===b.dataset.id),id="ACY"+c.year;
 if(!loaded[id]){alert("Vincula primero el PDF del Yearbook "+c.year+" en la sección Biblioteca visual.");src.querySelector(`.pro-source[data-source="${id}"]`).scrollIntoView({behavior:"smooth"});return}
 openPdf(id,Number(b.dataset.page)||1);
 }
});
render();
})();
