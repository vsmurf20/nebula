# NEBULA — guía rápida

NEBULA es una web estática para presentar y jugar a juegos HTML en el navegador. No necesita instalación de servidor: puede publicarse gratis con GitHub Pages.

## Páginas

- `index.html`: portada con los juegos disponibles.
- `catalogo.html`: biblioteca completa con búsqueda y filtros por género.
- `detalle.html?id=ID`: ficha automática de cada juego, con descripción, controles, versión y novedades.
- `play.html?id=ID`: sala de juego con opción de pantalla completa.
- `sobre.html`: información del estudio.
- `sugerencias.html`: formulario local de ideas y preferencias.

## Añadir o actualizar un juego

1. Crea la carpeta `games/<id>/` y copia dentro el HTML del juego con el nombre `index.html`.
2. Crea una portada de 800×450 en `assets/covers/<id>.webp`.
3. Añade un objeto a `games.js` con `id`, `title`, `description`, `category`, `status:"Disponible"`, `icon`, `cover`, `path`, `version`, `about`, `controls`, `updated` y `changes`.
4. Cambia el parámetro `?v=` de `games.js` en `index.html`, `catalogo.html`, `detalle.html` y `play.html` (el mismo en los cuatro) para que los navegadores no usen una copia antigua.
5. Sube los cambios a GitHub. Portada, ficha, filtros y botón de jugar se actualizan solos.

`id` y `path` deben coincidir con el nombre de la carpeta (respeta mayúsculas y minúsculas).

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz del repositorio, de modo que `index.html` quede en la raíz.
2. En GitHub, entra en **Settings → Pages**.
3. Selecciona **Deploy from a branch**, la rama `main` y la carpeta `/(root)`.
4. Guarda y espera a que termine el despliegue.

## Importante

- El formulario de sugerencias requiere configurar el endpoint de Formspree como se explica más abajo. Hasta que lo configures, los envíos no te llegarán y solo se guardarán localmente en el navegador.
- No hay cuentas de usuario ni sincronización de progreso entre dispositivos.
- Antes de publicar, prueba todos los juegos y comprueba que las rutas de sus archivos sean correctas.
- El modo pantalla completa depende de las capacidades y permisos del navegador.
- Revisa que las imágenes, sonidos, fuentes y demás contenido tengan licencia adecuada para publicarse.

## Probar en local

Desde esta carpeta ejecuta `python3 -m http.server 8000` y abre `http://localhost:8000`.


## Portadas
Todos los juegos con portada ilustrada usan archivos WebP en `assets/covers/`. Para cambiar una portada, sustituye el archivo conservando su nombre. Floppy Wings, Party Island, Sala de cartas y Trébol Roto aún usan portadas SVG sencillas.

## Recibir sugerencias por Internet (Formspree)
GitHub Pages sirve archivos estáticos y no procesa formularios por sí solo. NEBULA está preparada para usar Formspree como receptor externo de formularios.

1. Entra en https://formspree.io/ y crea una cuenta.
2. Crea un formulario nuevo y confirma el correo de tu cuenta si te lo solicita.
3. Copia el endpoint que te da Formspree; tendrá una forma parecida a `https://formspree.io/f/xxxxxxxx`.
4. Abre `sugerencias.js` y sustituye `PEGA_AQUI_TU_ENDPOINT_DE_FORMSPREE` en la constante `FORMSPREE_ENDPOINT` por tu endpoint real.
5. Guarda y sube `sugerencias.js` a GitHub; haz una prueba con un mensaje que no contenga datos personales.
6. Revisa el panel de Formspree para comprobar que ha llegado. Configura allí el correo de notificaciones y revisa su filtro antispam.

El plan gratuito de Formspree indica un límite de 50 envíos al mes y 30 días de historial; los límites pueden cambiar, así que comprueba la página oficial antes de usarlo: https://formspree.io/plans/ . La web no contiene contraseñas ni claves secretas; el identificador del endpoint es visible en el frontend por diseño. Si no se configura el endpoint, la web avisará y solo guardará el envío localmente en ese navegador.


## Juegos integrados
- `Party Island`: registrado como disponible en `games.js`, con ruta `games/party-island/index.html`.
- Icono de pestaña (favicon): `assets/nebula-icon.svg`, compartido por todas las páginas principales.


## Juegos añadidos (28 oct 2026)

- **Sala de cartas**: `games/sala-de-cartas/index.html` (blackjack y solitario).
- **Trébol Roto**: `games/trebol-roto/index.html` (juego arcade de rondas y tiradas).

Ambos juegos están registrados como disponibles en `games.js`.

## Juegos añadidos (30 oct 2026)

- **Estadio 11**, **Canastazo**, **Golfitos** y **Bolitos** (juegos 3D de deportes), con portadas propias.
- Fútbol, Básquet y Vóley pasan a llamarse **Pixel Fútbol**, **Pixel Básquet** y **Pixel Vóley** (los identificadores y carpetas no cambian para no romper enlaces).
- Distrito Cero pasa al género **Acción**.
- Se elimina el espacio vacío «Juego 09» y las carpetas de relleno sin usar (`juego-3`, `juego-4`, `juego-06` a `juego-11`).
- Los cuatro juegos nuevos cargan Three.js desde `cdnjs.cloudflare.com`, así que necesitan conexión a Internet.

- **Ruleta Europea** (`games/ruleta-europea/index.html`), con portada propia en `assets/covers/ruleta-europea.webp`. Categoría: Mesa. Es un juego de azar sin dinero real; el saldo se guarda en el navegador.
- Todas las páginas cargan `games.js` con el mismo parámetro de versión (`?v=20261030-ruleta`): cámbialo en los cuatro HTML cada vez que edites `games.js` para evitar que el navegador use una copia antigua.

- **Serpentrón** (`games/serpentron/index.html`), con portada propia en `assets/covers/serpentron.webp`. Categoría: Arcade. Modo 1 jugador contra bots y modo 2 jugadores en pantalla dividida.
