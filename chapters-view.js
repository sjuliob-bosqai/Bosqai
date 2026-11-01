(function mountChapters(){
"use strict";
if(document.body.dataset.book)return;
const C=window.BOSQAI_CHAPTERS||{tratado:[],atlas:[]};
const root=document.querySelector("#root .container");if(!root)return;
const safe=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const section=document.createElement("section");section.className="section";section.id="lectura-de-fuentes";
section.innerHTML=`<div class="section-head"><div><span class="caps">11 / Tratado y Atlas página por página</span><h2>34 capítulos convertidos en trabajo proyectual.</h2><p>21 páginas del Tratado Maestro y 13 del Atlas V2. Cada lectura conserva procedencia, límite y tarea sugerida. Los originales nunca se reemplazan por esta síntesis.</p></div></div><div class="toolbar"><select id="chapter-source" class="field" style="max-width:200px"><option value="all">Ambos documentos</option><option value="tratado">Tratado Maestro</option><option value="atlas">Atlas crítico V2</option></select><input type="search" class="field" id="chapter-search" placeholder="Buscar patrimonio, luz, sección, jurado, accesibilidad..." aria-label="Buscar en capítulos"></div><div class="chapter-grid" id="chapters-list"></div>`;
root.append(section);
const entries=[...C.tratado.map(x=>({...x,source:"tratado"})),...C.atlas.map(x=>({...x,source:"atlas"}))];
function update(){const q=document.getElementById("chapter-search").value.toLowerCase(),f=document.getElementById("chapter-source").value;
document.getElementById("chapters-list").innerHTML=entries.filter(c=>(f==="all"||c.source===f)&&(!q||JSON.stringify(c).toLowerCase().includes(q))).map(c=>`<article class="chapter-card"><div class="caps">${safe(c.id)} · ${safe(c.source)} · PDF p.${c.page}</div><h3>${safe(c.theme)}</h3><p><strong>Lectura:</strong> ${safe(c.reading)}</p><p><strong>Operación:</strong> ${safe(c.task)}</p><small class="muted">${safe(c.authority)} · No es aprobación arquitectónica</small><button type="button" class="btn small chapter-task" data-id="${safe(c.id)}">+ Trasladar al tablero</button></article>`).join("")||'<div class="empty">No hay coincidencias.</div>';}
document.getElementById("chapter-search").oninput=update;document.getElementById("chapter-source").onchange=update;update();
section.addEventListener("click",e=>{const b=e.target.closest(".chapter-task");if(!b)return;const c=entries.find(x=>x.id===b.dataset.id);let state;try{state=JSON.parse(localStorage.getItem("bosqai.archcore.v2"))}catch(err){}if(!state||!Array.isArray(state.tasks)){alert("Inicia el tablero en Inicio antes de importar.");return;}const title=c.id+" — "+c.task;if(state.tasks.some(t=>t.title===title)){alert("Ya existe esa tarea.");return;}state.tasks.push({id:"chapter-"+Date.now(),title,category:"Investigación",priority:"media",status:"todo",due:"",origin:c.source+" PDF p."+c.page});localStorage.setItem("bosqai.archcore.v2",JSON.stringify(state));alert("Tarea incorporada a la agenda BOSQAI.")});
})();
