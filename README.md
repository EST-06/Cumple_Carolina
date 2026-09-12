# Invitación digital de cumpleaños

## Personalizar contenido
Edita únicamente `js/config.js` (objeto `EVENT_CONFIG`):
- `nombre`, `edad`, `fechaISO`, `fechaTexto`, `hora`, `lugar`, `direccion`, `dressCode`
- `maps`, `spotify`, `formulario`, `drive` → reemplazar los placeholders `AQUI_LINK_...`
- `mensaje`, `regaloTexto`, `regaloInfo`

## Reemplazar imágenes
- `assets/fotos/foto-principal.jpg` → foto principal del hero (recomendado 4:5, ≥900px de ancho)
- `assets/fotos/foto-1.jpg` a `foto-6.jpg` → galería "Algunos momentos"
- Mantén los mismos nombres de archivo para no tocar el HTML/CSS.

## Reemplazar íconos
Los íconos están en `assets/icons/*.svg` (calendario, reloj, ubicación, regalo, pastel, estrellas, música, cámara, confirmación). Puedes sustituir cada archivo por otro SVG/PNG manteniendo el mismo nombre.

## Estructura
```
index.html          → punto de entrada, carga CSS/JS y monta el router
pages/portada.html   → pantalla inicial (caja de regalo interactiva)
pages/invitacion.html→ hero, contador, mensaje, info y galería
pages/detalles.html  → experiencia, regalo, música, compartir fotos y RSVP
css/                 → un archivo por vista + styles.css con variables globales
js/config.js         → datos editables centralizados
js/app.js            → router (fetch de vistas, compatible con GitHub Pages y Live Server)
```

## Ejecutar localmente
No uses doble clic sobre `index.html` (el `fetch()` de las vistas falla con `file://`).
Usa la extensión **Live Server** de VS Code, o:
```bash
python3 -m http.server 8000
```
y abre `http://localhost:8000`.

## Publicar en GitHub Pages
Sube la carpeta tal cual a un repositorio y activa Pages sobre la rama `main`. El router detecta automáticamente la ruta base del repositorio.

## Zona horaria del contador
El contador usa la fecha `fechaISO` en formato ISO con offset `-05:00` (Colombia). Modifícala en `js/config.js` si cambia la fecha u hora.
