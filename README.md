# BOSQAI Arch-Core · House of Poetry (YAC Marradi)

**© 2026 Julián Osorno Arboleda y Sebastián Julio Bedoya. Todos los derechos reservados.**

## Qué hace esta plataforma

No es un inventario de chats: es un **entorno de trabajo** con agenda/semana/mes, tablero Kanban editable, Pomodoro 25/5/15, búsqueda local de hallazgos, transferencia de hallazgos a tareas y respaldo JSON manual entre PC y Samsung Galaxy S23. El almacenamiento del tablero es local al navegador; GitHub Pages **no sincroniza** tareas entre dispositivos.

### Biblioteca y fuentes (edición extendida 2026-11-01)

- **30 concursos** identificados en los índices PDF de ACY 2020, 2021, 2022. Para cada caso: tipología, acción, materialidad, técnica, decisión conceptual, idea organizadora, sugerencia aplicada a Marradi, límite probatorio. **No inventar materiales, técnica ni causas del premio**. Indicadores NO VERIFICADO cuando corresponda.
- **19 fichas previas de lectura selectiva** de ACY; las páginas impresas del índice no equivalen al número de página PDF.
- **21 páginas del Tratado Maestro** y **13 del Atlas V2** convertidas en capítulos aplicados con tareas, sin sustituir originales ni su jerarquía.
- **15 expedientes fuente** navegables; cada botón activa una pregunta de investigación, no modifica fuentes.
- **15 miniaturas** de tres documentos PDF **del equipo**, en un sprite WebP comprimido. Procedencia exacta y SHA en `PROCEDENCIA_VISUAL_Y_LICENCIAS.md`.
- **20 controles adversariales** (acceso, patrimonio, estructura, programa, materia, accesibilidad, mantenimiento, luz, representación, aprobación BOSQAI).
- Roadmap YAC y H-A/H-B/H-C **como hipótesis**, no alternativas aprobadas.

## Biblioteca ampliada y lector de PDF local (1 de noviembre de 2026)

La edición actual incorpora `dossier-pro.js` y `dossier-pro.css` al inicio y a las tres subpáginas ACY. Sus **30 fichas por concurso** contrastan nombres de 1.º/2.º/3.º premio según índices impresos, problema del encargo, lectura técnica cuando hay fundamento, riesgos de extrapolación y test aplicado a Marradi. Cada prueba puede añadirse al tablero local sin elevar una hipótesis a decisión aprobada. Las páginas impresas se identifican por separado de la localización aproximada en el PDF.

El **lector PDF local**, compatible con la arquitectura estática de GitHub Pages, admite siete documentos base (Tratado, Atlas, brief EN y ES y anuarios 2020–2022). El lector pide seleccionar el archivo en el navegador, utiliza una URL temporal del propio dispositivo y permite abrir una página específica. **No transmite, almacena ni publica esos PDFs**; la vinculación se pierde al recargar o cambiar de PC a S23. Para el año consultado, «Ver PDF original» salta a la página estimada del caso; se conserva el PDF original como autoridad. Otros 15 registros documentales siguen navegables como expedientes, aunque no todos sus binarios están disponibles en este entorno.

**Imágenes:** se mantienen 15 miniaturas tomadas exclusivamente de PDFs internos del equipo. El lector expone todas las ilustraciones de los PDF que el usuario abra localmente; eso **no equivale a que esas imágenes estén alojadas en la web pública**. No se han incorporado imágenes externas o generadas ni imágenes de libros de terceros al servidor. El requisito de multiplicar por cinco las imágenes publicadas permanece condicionado por los derechos de reproducción y por los originales disponibles.

**Límite de la disección:** títulos y orden de premios confirmados en índices, y lecturas selectivas de los proyectos documentados. No se afirma haber analizado a profundidad cada mención especial, imagen o página de los tres anuarios. Las supuestas «claves para ganar» son **hipótesis de análisis** salvo que el autor del caso lo atribuya expresamente a su proceso; nunca se infieren preferencias privadas del jurado.

## Seguridad y restricciones

Este repositorio es **público** y la web también; no subir RVT, modelos, informaciones personales, Yearbooks en PDF, originales completos del Tratado, históricos, scripts de La Chucha ni claves. La 9.0.1 es LAB y no release; el ensayo EnergyPlus con 14 Severe no demuestra rendimiento térmico.

La web tiene derechos reservados a sus autores. La entrega YAC requiere **anonimato**: no trasladar la firma de esta web a paneles.

## GitHub Pages: dominio personalizado

GitHub Pages está desplegándose desde GitHub Actions. El repositorio registra `bosqai.com` como dominio personalizado, pero ese dominio aparece actualmente en la captura del usuario como página «En construcción» de un servicio de terceros. **El código del sitio no puede cambiar los registros DNS del dominio.** Corregir DNS en su proveedor solo tras verificar propiedad y decidir si se reemplaza la web actual. Evitar destruir otros servicios (correo y Squarespace). El sitio por defecto es `https://sjuliob-bosqai.github.io/Bosqai/` si se elimina la asignación de dominio personalizado desde Settings → Pages.

## GitHub Free: arquitectura de bajo peso

HTML/CSS/JS estáticos y atlas visual con menos de 5 KB de imágenes, sin frameworks ni dependencias, con GitHub Actions y allowlist de artefactos. GitHub Docs: repositorio Pages recomendado <=1 GB; publicación <=1 GB; límite flexible de ~100 GB/mes.

## Procedencia

Consultar `FUENTES_Y_LIMITES.md`, `PROCEDENCIA_VISUAL_Y_LICENCIAS.md` y los archivos originales conservados fuera del sitio. No se puede deducir permiso de publicación de todo documento por el mero hecho de que BOSQAI lo haya usado internamente.
