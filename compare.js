(function compare(){
"use strict";if(document.body.dataset.book)return;const root=document.querySelector("#root .container");if(!root)return;
const checks=[
["Acceso","Vial → jardín alto → casa con cotas reales"],
["Accesibilidad","Recorrido universal o solución equivalente comprobable"],
["Conservación","Intervenciones compatibles con fábrica y estructura"],
["Programa","Usos por planta, relaciones y horarios"],
["Jardines","Dos cotas, pabellón 16 m², operación"],
["Luz","Atmósfera, asoleo y estrategia verificable"],
["Acústica","Lectura vs actos; gradiente de privacidad"],
["Viabilidad","Mantenimiento y construcción de prueba"],
["Representación","Plantas/sección con escala y fuentes"],
["Aprobación","Decisión expresa BOSQAI fechada"]
];
let st;try{st=JSON.parse(localStorage.getItem("bosqai.compare.v1"))}catch(e){}if(!st||typeof st!=="object")st={};
const sec=document.createElement("section");sec.id="matriz-alternativas";sec.className="section";
sec.innerHTML='<div class="section-head"><div><span class="caps">12 / Decisión controlada</span><h2>Matriz comparativa de madurez de evidencia.</h2><p>0 = no verificado, 1 = hipótesis y 2 = prueba documentada. No mide la calidad de una forma, no predice un premio y no constituye aprobación de BOSQAI.</p></div></div><div class="matrix-overflow"><table class="matrix-table"><thead><tr><th>Criterio de demostración</th><th>H-A</th><th>H-B</th><th>H-C</th></tr></thead><tbody id="matrix-body"></tbody></table></div><div id="matrix-summary" class="ribbon"></div><div class="toolbar"><button class="btn primary" id="matrix-export">Exportar acta JSON</button><button class="btn" id="matrix-reset">Restablecer hipótesis</button></div><p class="tiny">Las verificaciones anotadas en esta matriz son declaraciones del operador hasta adjuntar evidencias y acta. La aplicación no valida planos ni aprueba diseño.</p>';
root.append(sec);
function fmt(){document.getElementById("matrix-body").innerHTML=checks.map((c,i)=>'<tr><td><strong>'+c[0]+'</strong><small>'+c[1]+'</small></td>'+["A","B","C"].map(a=>'<td><select class="field matrix-select" data-key="'+a+"-"+i+'" aria-label="'+a+" "+c[0]+'">'+[[0,"0 · Sin prueba"],[1,"1 · Hipótesis"],[2,"2 · Evidencia declarada"]].map(([v,t])=>'<option value="'+v+'" '+(st[a+"-"+i]===v?"selected":"")+'>'+t+'</option>').join("")+'</select></td>').join("")+'</tr>').join("");update()}
function update(){const scores={A:0,B:0,C:0};for(const a of ["A","B","C"])for(let i=0;i<checks.length;i++)scores[a]+=Number(st[a+"-"+i]||0);
document.getElementById("matrix-summary").textContent="Madurez declarada (máximo 20 unidades por alternativa; valor cero inicial): H-A "+scores.A+"/20 · H-B "+scores.B+"/20 · H-C "+scores.C+"/20. No es un ranking arquitectónico.";}
sec.addEventListener("change",e=>{const b=e.target.closest(".matrix-select");if(!b)return;st[b.dataset.key]=Number(b.value);localStorage.setItem("bosqai.compare.v1",JSON.stringify(st));update()});
document.getElementById("matrix-reset").onclick=()=>{if(!confirm("¿Reiniciar todas las declaraciones de evidencia locales?"))return;st={};localStorage.removeItem("bosqai.compare.v1");fmt()};
document.getElementById("matrix-export").onclick=()=>{const b=new Blob([JSON.stringify({app:"BOSQAI",type:"matriz-evidencia",date:new Date().toISOString(),criteria:checks,states:st},null,2)],{type:"application/json"}),u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download="BOSQAI_MATRIZ_HABC_"+new Date().toISOString().slice(0,10)+".json";a.click();URL.revokeObjectURL(u)};
fmt();
})();
