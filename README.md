# NEBULA — Tu web para publicar videojuegos

Esta carpeta contiene una web estática: HTML, CSS y JavaScript. No necesita base de datos, servidor propio ni instalación de dependencias.

## 1. Estructura

- `index.html`: portada y catálogo.
- `styles.css`: diseño adaptable a móvil y ordenador.
- `games.js`: catálogo central; aquí añades, editas o retiras juegos.
- `app.js`: búsqueda, filtros y tarjetas.
- `play.html`, `play.css`, `play.js`: página donde se juega dentro de un iframe.
- `games/`: carpeta de cada videojuego.

## 2. Instalar los cuatro juegos

Copia cada juego HTML dentro de su carpeta y nómbralo `index.html`:

- Tu archivo de Distrito Cero → `games/distrito-cero/index.html`
- Tu archivo de Pizzería Cascabel → `games/pizzeria-cascabel/index.html`
- Juego 3 → `games/elixir-brawl/index.html`
- Juego 4 → `games/minecraft-tycoon/index.html`

Si un juego utiliza archivos adicionales (imágenes, audio, fuentes, CSS o JS externos), copia también esos archivos y carpetas, manteniendo las rutas relativas. Si cada juego ya es un HTML autocontenido, basta con copiarlo y renombrarlo.

**Importante:** este paquete no incluye los cuatro HTML originales porque no estaban adjuntos en esta petición. La web trae las fichas de los proyectos conocidos y espacios para otros dos; instala los archivos reales siguiendo los pasos anteriores.

## 3. Marcar juegos como disponibles

Abre `games.js`. Cada juego tiene un objeto con `id`, `title`, `description`, `category`, `status`, `icon`, `cover` y `path`. Para publicar un juego, usa `status: "Disponible"` y pon la ruta correcta.

Ejemplo:

```js
{
  id: "mi-nuevo-juego",
  title: "Mi nuevo juego",
  description: "Una aventura breve en un mundo misterioso.",
  category: "Aventura",
  status: "Disponible",
  icon: "🎮",
  cover: "linear-gradient(135deg,#25224d,#7045a8)",
  path: "games/mi-nuevo-juego/index.html",
  version: "v1.0"
}
```

Añade la carpeta `games/mi-nuevo-juego/` y su `index.html`. Puedes añadir tantos objetos como juegos tengas. Los filtros actuales son `Terror`, `Aventura` y `Otros`.

## 4. Probarlo en tu ordenador

La forma más sencilla es abrir `index.html`. Si algún navegador limita la carga de archivos locales, levanta un servidor local:

**Con Python 3**, abre una terminal dentro de esta carpeta y ejecuta:

```bash
python3 -m http.server 8000
```

Después visita `http://localhost:8000`. Para detener el servidor, pulsa `Ctrl+C`.

## 5. Publicar gratis con GitHub Pages

1. Crea una cuenta en GitHub si no tienes una.
2. Crea un repositorio nuevo, por ejemplo `nebula-games`.
3. Sube **el contenido** de esta carpeta al directorio raíz del repositorio (debe quedar `index.html` en la raíz).
4. En el repositorio, entra en **Settings → Pages**.
5. En “Build and deployment”, elige **Deploy from a branch**, selecciona `main` y la carpeta `/ (root)`, y guarda.
6. Espera a que termine la publicación. GitHub te mostrará la URL pública de la web en la sección Pages.

Cada vez que cambies un juego o `games.js`, vuelve a subir los archivos modificados y la web se actualizará.

Alternativas sencillas: Netlify o Cloudflare Pages; ambas pueden publicar una web estática. Revisa sus condiciones y límites actuales al crear el sitio.

## 6. Cosas que debes comprobar antes de publicar

- **Rutas:** conserva las carpetas y los nombres de archivo; en servidores Linux las mayúsculas y minúsculas importan.
- **Audio:** algunos navegadores no permiten sonido hasta que el jugador pulse o haga clic.
- **Guardado:** `localStorage` guarda datos en el navegador y dominio donde se juega; no es una cuenta online ni sincroniza progreso entre dispositivos.
- **Privacidad:** no incluyas claves secretas ni datos personales en el código del navegador.
- **Contenido externo:** revisa licencias de imágenes, música, fuentes y librerías.
- **Juegos muy grandes:** comprime imágenes/audio y prueba los tiempos de carga en móvil.
- **Compatibilidad:** prueba cada juego en escritorio y móvil, y revisa que los controles funcionen en el iframe.

## 7. Límites de esta primera versión

Esta es una web estática, ideal para publicar y jugar a juegos HTML. No tiene cuentas, comentarios, rankings globales ni guardado sincronizado entre jugadores. Eso requeriría integrar un backend o servicios adicionales. El botón de pantalla completa intenta ampliar el contenedor del juego; el comportamiento exacto depende del navegador.

## 8. Personalizar el nombre

En esta plantilla la marca es **NEBULA**. Puedes cambiarla por el nombre de tu estudio buscando `NEBULA` en `index.html`, `play.html` y `LEEME.md`. Colores, tipografía y diseño están principalmente en `styles.css`.


## Páginas nuevas de NEBULA

- `index.html`: portada con proyectos destacados.
- `catalogo.html`: catálogo completo con búsqueda y filtros.
- `sobre.html`: información del proyecto y hoja de ruta.
- `registro.html` y `login.html`: demostración de (el sistema de cuentas se ha eliminado).
- `sugerencias.html`: cuestionario y buzón de propuestas anónimas, guardados localmente.
- `sugerencias.html`: cuestionario de preferencias y buzón de ideas.

### Importante sobre las cuentas y formularios

Esta versión es estática: el registro, inicio de sesión y los formularios funcionan en el navegador usando `localStorage` y Web Crypto para comparar contraseñas mediante hash. No existe un servidor de autenticación ni una base de datos compartida. Las cuentas no funcionan entre dispositivos y no se deben usar contraseñas reales/reutilizadas. Para publicar cuentas reales para todos los usuarios hay que añadir backend, base de datos, HTTPS, gestión de sesiones, recuperación de contraseña y medidas antiabuso. Las sugerencias de esta versión tampoco llegan al propietario del sitio: solo se guardan en el navegador que las envía.

Para probar la web localmente, abre una terminal dentro de esta carpeta y ejecuta `python3 -m http.server 8000`; después visita `http://localhost:8000`.
