(function enhance(){
"use strict";
const D=window.BOSQAI_DEEP||{},V=window.BOSQAI_VISUAL||{};
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const $=q=>document.querySelector(q);
const makeTask=(title,cat="Biblioteca")=>{let s;try{s=JSON.parse(localStorage.getItem("bosqai.archcore.v2"))}catch(e){}
if(!s?.tasks){alert("Abre el tablero de Inicio para iniciar tu perfil local.");return}
if(s.tasks.some(t=>t.title===title)){alert("La tarea ya está registrada.");return}
s.tasks.unshift({id:"r-"+Date.now()+"-"+Math.random().toString(36).slice(2,5),title,category:cat,priority:"media",due:"",status:"todo",origin:"Investigación ACY/Atlas"});localStorage.setItem("bosqai.archcore.v2",JSON.stringify(s));const t=$("#toast");if(t){t.textContent="Tarea agregada al tablero BOSQAI";t.classList.remove("hide");setTimeout(()=>t.classList.add("hide"),3500)}};
const srcLabels=[["Atlas crítico",3,"Modelo y topografía"],["Atlas crítico",4,"Sección urbana"],["Atlas crítico",5,"Sección de niveles"],["Atlas crítico",6,"Planta de acceso"],["Atlas crítico",7,"Programa"],["Atlas crítico",8,"Patrimonio y límites"],["Tablero G0 A3",1,"Tres estrategias"],["Tablero G0 A3",2,"Programa y operación"],["Tablero G0 A3",3,"Alineación geométrica"],["Tablero G0 A3",4,"Mapa editorial"],["Dossier",1,"Casa y obligaciones"],["Dossier",2,"Hipótesis rivales"],["Dossier",3,"Vacíos de evidencia"],["Dossier",4,"Entrega YAC"],["Dossier",5,"Autoridad BOSQAI"]];
function tile(i){const x=i%4,y=Math.floor(i/4),d=srcLabels[i];return `<figure class="pdf-figure"><div class="pdf-sprite" role="img" aria-label="Vista de ${esc(d[0])} página ${d[1]}" style="background-image:url('${V.src||""}');background-position:${x*100/3}% ${y*100/3}%"></div><figcaption><strong>${esc(d[2])}</strong><small>${esc(d[0])}, PDF p.${d[1]}</small></figcaption></figure>`}
function taskButton(title,cat){return `<button class="btn small research-task" data-task="${encodeURIComponent(title)}" data-cat="${esc(cat)}">+ Crear tarea</button>`}
document.body.addEventListener("click",e=>{const b=e.target.closest(".research-task");if(b)makeTask(decodeURIComponent(b.dataset.task),b.dataset.cat)});
const tests=[
["T-01","Ubicación","Confirmar acceso oficial de vial a jardín alto en FAQ y planta"],
["T-02","Cotas","Cinco puntos coincidentes entre CAD, RVT, cortes y nivel exterior"],
["T-03","Estructura","No alterar portancia sin comprobación profesional"],
["T-04","Patrimonio","Distinguir fase de creación, estado físico y tutela patrimonial"],
["T-05","Accesibilidad","Resolver recorrido inclusivo sin atajos ilusorios"],
["T-06","Programa","Mapa por planta, capacidad y usuarios reales"],
["T-07","Acústica","Lectura, actos, silencio, horarios y reverberación"],
["T-08","Iluminación","Criterios medibles con fuentes, no apariencia de render"],
["T-09","Materia","Compatibilidad, reversible o irreversible, envejecimiento"],
["T-10","Jardines","Diferenciar funciones y mantenimiento de las dos cotas"],
["T-11","Pabellón","Localizar 16 m² en un jardín y verificar operación"],
["T-12","Mantenimiento","Capacidad de limpieza, humedad, servicios y control"],
["T-13","Entregables","A1, A3, portada, inglés, anonimato y pesos permitidos"],
["T-14","Crítica","Criterios para descartar H-A, H-B o H-C"],
["T-15","Trazabilidad","Fuente, fecha, página, ID y confianza"],
["T-16","Conservación","Evitar escenografía de Campana y tecnología vistosa"],
["T-17","Norte y clima","No usar un EPW para probar geometría incorrecta"],
["T-18","Modelo energético","14 errores Severe: modelo no apto para consumos"],
["T-19","La Chucha","9.0.1 LAB no es release; prueba integral y socio PC2"],
["T-20","Aprobación","Solo BOSQAI aprueba propuesta, cambios BIM y publicación"]
];
if(document.body.dataset.book){
 const year=document.body.dataset.book, cases=(D.toc||[]).filter(c=>c.year===year);
 if(cases.length){
 const section=document.createElement("section");section.className="section deep-acy";section.id="competencias-indice";
 section.innerHTML=`<span class="caps">Índice comprobado · ACY ${esc(year)}</span><h2>${cases.length} concursos, siete lentes de lectura.</h2><p>Tipologías del índice verificadas en la página PDF 5. Materialidades, técnicas y supuestas claves de premio solo se atribuyen cuando existe evidencia específica; de lo contrario son hipótesis o NO VERIFICADO.</p><div class="toolbar"><input class="field" id="acyq" type="search" placeholder="Buscar tipología, acción o idea..." aria-label="Buscar concursos"><select class="field" id="acytype" aria-label="Filtrar tipología"><option value="">Todas las tipologías</option>${cases.map(c=>`<option>${esc(c.type)}</option>`).join("")}</select></div><div id="acydeep" class="case-deep-grid"></div>`;
 $("#root .container")?.append(section);
 function render(){const q=$("#acyq").value.toLowerCase(),t=$("#acytype").value;
 $("#acydeep").innerHTML=cases.filter(c=>(!t||t===c.type)&&(!q||JSON.stringify(c).toLowerCase().includes(q))).map(c=>`<article class="card case-deep"><span class="caps">Impresa p.${c.printed_start} · PDF: localizar caso</span><h3>${esc(c.title)}</h3><span class="tag">${esc(c.type)}</span><span class="tag warn">Rango técnico no verificado</span><p>Acción identificada: ${esc(c.actions)}</p><div class="case-buttons">${[["actions","Acciones"],["material","Materialidad"],["techniques","Técnicas"],["key_decision","Decisiones"],["idea","Idea organizadora"],["marradi","Aplicación Marradi"],["confidence","Fuente"]].map(x=>`<button class="btn small case-lens" data-lens="${x[0]}" data-id="${esc(c.id)}">${x[1]}</button>`).join("")}</div><div class="lens-answer" id="answer-${esc(c.id)}">${esc(c.marradi)}</div>${taskButton("Contrastar "+c.title+" ACY "+year+" impresa p."+c.printed_start,"Biblioteca")}</article>`).join("")}
 $("#acyq").oninput=render;$("#acytype").onchange=render;render();
 section.addEventListener("click",e=>{const b=e.target.closest(".case-lens");if(!b)return;const c=cases.find(c=>c.id===b.dataset.id);const out=document.getElementById("answer-"+c.id);out.innerHTML="<strong>"+esc(b.textContent)+"</strong><p>"+esc(c[b.dataset.lens])+"</p><small>"+esc(D.classification)+"</small>";});
 }
}else{
 const root=$("#root .container");if(!root)return;
 const atlas=document.createElement("section");atlas.className="section";atlas.id="atlas-documental";
 atlas.innerHTML=`<div class="section-head"><div><span class="caps">08 / Atlas documental</span><h2>Quince páginas de PDFs de BOSQAI.</h2><p>Vista mosaico extraída solo de fuentes internas del equipo, sin imágenes externas de internet.</p></div><span class="tag ok">Archivo comprimido</span></div><div class="visual-grid">${srcLabels.map((_,i)=>tile(i)).join("")}</div><p class="tiny">Fuente y página en cada tarjeta. No se reproducen las ilustraciones protegidas de los Yearbooks, ni se presenta este atlas como levantamiento certificado.</p>`;
 root.append(atlas);
 const flow=document.createElement("section");flow.className="section";flow.id="laboratorio";
 flow.innerHTML=`<div class="section-head"><div><span class="caps">09 / Método crítico aplicado</span><h2>Veinte comprobaciones que producen arquitectura.</h2><p>Convertir investigaciones en decisiones, no limitarse a archivar prompts. Todo queda pendiente hasta aportar prueba.</p></div></div><div class="criterion-grid">${tests.map(t=>`<article class="criterion"><small>${t[0]}</small><strong>${t[1]}</strong><p>${esc(t[2])}</p>${taskButton(t[1]+": "+t[2],"Arquitectura")}</article>`).join("")}</div><div class="grid three" style="margin-top:25px">${[
["H-A / Secuencia vertical","Demostrar continuidad accesible por cinco niveles","Accesibilidad y costosa operación"],
["H-B / Jardín cívico","Dibujar la sección entre acceso vial y jardín alto","Sobrevalorar gesto visual sin cotas"],
["H-C / Doble umbral","Definir gradiente público-privado y acústica","Fragmentación del funcionamiento diario"]].map(x=>`<article class="card"><span class="tag warn">EN EVALUACIÓN</span><h3>${x[0]}</h3><p>Prueba: ${x[1]}</p><p>Riesgo: ${x[2]}</p>${taskButton("Contrastar "+x[0]+" — "+x[1],"Arquitectura")}</article>`).join("")}</div>`;
 root.append(flow);
 const sources=document.createElement("section");sources.className="section";sources.id="fuentes-profundo";
 sources.innerHTML=`<div class="section-head"><div><span class="caps">10 / Fuentes y autoridad</span><h2>${D.sources.length} expedientes activados.</h2><p>La fuente original conserva autoridad; los botones transforman preguntas en tareas. Ningún expediente se da por aprobado desde esta interfaz.</p></div></div><div class="source-grid">${D.sources.map(s=>`<article class="card source-card"><span class="tag">${esc(s.authority)}</span><h3>${esc(s.name)}</h3><p>${esc(s.use)}</p><small>${esc(s.coverage)} · ${esc(s.id)}</small><div class="pillbar">${s.buttons.map(b=>`<button class="btn small source-topic" data-id="${s.id}" data-topic="${esc(b)}">${esc(b)}</button>`).join("")}</div><div class="source-answer"></div></article>`).join("")}</div>`;
 root.append(sources);
 sources.addEventListener("click",e=>{const b=e.target.closest(".source-topic");if(!b)return;const s=D.sources.find(s=>s.id===b.dataset.id),topic=b.dataset.topic; b.closest(".source-card").querySelector(".source-answer").innerHTML=`<div class="notice"><strong>${esc(topic)}</strong><p>${esc(s.use)}</p>${taskButton("Extraer "+topic+" de "+s.name,"Investigación")}</div>`});
 }
})();
