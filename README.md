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

El catálogo se alimenta desde `games.js`. Cada juego tiene un `id`, `title`, `description`, `category`, `status`, `icon`, `cover`, `path`, `version`, `about`, `controls`, `updated` y `changes`.

Para publicar un juego nuevo en uno de los espacios 05–12:

1. Abre `games.js` y localiza el objeto del espacio, por ejemplo `juego-05`.
2. Copia el archivo HTML del juego dentro de `games/juego-05/` y llámalo exactamente `index.html`.
3. Cambia el título, descripción, género, icono, portada, versión, explicación, controles, fecha y novedades.
4. Comprueba que `path` sea `games/juego-05/index.html`.
5. Cambia `status: "Próximamente"` a `status: "Disponible"`.
6. Guarda y sube los cambios a GitHub. La portada, la ficha y el botón de jugar se actualizan automáticamente.

Puedes usar un identificador y carpeta distintos, pero deben coincidir con `id` y `path` en `games.js`. Respeta mayúsculas y minúsculas en los nombres.

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


## Portadas originales (v6)
Las cuatro primeras fichas usan portadas propias en `assets/covers/`. Para cambiar una portada, sustituye el archivo WebP correspondiente conservando su nombre.

## Recibir sugerencias por Internet (Formspree)
GitHub Pages sirve archivos estáticos y no procesa formularios por sí solo. NEBULA está preparada para usar Formspree como receptor externo de formularios.

1. Entra en https://formspree.io/ y crea una cuenta.
2. Crea un formulario nuevo y confirma el correo de tu cuenta si te lo solicita.
3. Copia el endpoint que te da Formspree; tendrá una forma parecida a `https://formspree.io/f/xxxxxxxx`.
4. Abre `sugerencias.js` y sustituye `PEGA_AQUI_TU_ENDPOINT_DE_FORMSPREE` en la constante `FORMSPREE_ENDPOINT` por tu endpoint real.
5. Guarda y sube `sugerencias.js` a GitHub; haz una prueba con un mensaje que no contenga datos personales.
6. Revisa el panel de Formspree para comprobar que ha llegado. Configura allí el correo de notificaciones y revisa su filtro antispam.

El plan gratuito de Formspree indica un límite de 50 envíos al mes y 30 días de historial; los límites pueden cambiar, así que comprueba la página oficial antes de usarlo: https://formspree.io/plans/ . La web no contiene contraseñas ni claves secretas; el identificador del endpoint es visible en el frontend por diseño. Si no se configura el endpoint, la web avisará y solo guardará el envío localmente en ese navegador.
