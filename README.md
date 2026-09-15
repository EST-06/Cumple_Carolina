# Invitación digital de cumpleaños

## Personalizar contenido
Edita únicamente `js/config.js` (objeto `EVENT_CONFIG`):
- `nombre`, `fechaISO`, `fechaTexto`, `hora`, `lugar`, `direccion`, `dressCode`
- `maps` → ya apunta a la ruta real del evento; `formulario` → reemplazar `AQUI_LINK_FORMULARIO` por el link real de confirmación
- `mensaje` → texto de la sección "Quiero que estés ahí"
- `horaPista`, `personasPorPista`, `valorZapatos` → valores de la card de presupuesto compartido

## Modo claro / oscuro
El botón circular fijo en la esquina superior derecha alterna el tema. La preferencia se guarda en `localStorage` y se aplica automáticamente en visitas futuras. La tipografía de títulos cambia con el tema: **Fraunces** (itálica, elegante) en modo claro y **Baloo 2** (redondeada, festiva) en modo oscuro — se controla con la variable CSS `--font-display` en `css/styles.css`, bajo el selector `[data-theme="dark"]`.

## Reemplazar / agregar imágenes
- `assets/fotos/foto-principal.jpeg` → foto principal del hero (recomendado 4:5, ≥900px de ancho)
- Galería "Algunos momentos": agrega las fotos en `assets/fotos/` y luego lista su nombre
  en el arreglo `galeria` de `js/config.js`. Se acomodan solas en mosaico (móvil 3 columnas,
  tablet 4, escritorio 5) con proporciones alternas. No hace falta tocar el HTML/CSS.

## Reemplazar íconos
Los íconos están en `assets/icons/*.svg` (calendario, reloj, ubicación, regalo, pastel, estrellas, música, cámara, confirmación). Puedes sustituir cada archivo por otro SVG/PNG manteniendo el mismo nombre.

## Estructura
```
index.html           → punto de entrada, carga CSS/JS, botón de tema y monta el router
pages/portada.html    → pantalla inicial (caja de regalo interactiva)
pages/invitacion.html → hero, contador, mensaje, información, presupuesto, galería y RSVP
css/styles.css        → variables globales y tokens de tema claro/oscuro
css/portada.css       → estilos de la portada
css/invitacion.css    → estilos de hero, info, presupuesto, galería, lightbox y RSVP
js/config.js          → datos editables centralizados
js/theme.js           → lógica del selector de tema (localStorage)
js/reveal.js          → animaciones de aparición al hacer scroll
js/app.js             → router (fetch de vistas, compatible con GitHub Pages y Live Server)
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
