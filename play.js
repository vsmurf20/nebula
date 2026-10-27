const params = new URLSearchParams(location.search);
const game = (window.GAMES || []).find(item => item.id === params.get("id"));
const title = document.querySelector("#game-title");
const description = document.querySelector("#game-description");
const version = document.querySelector("#game-version");
const frame = document.querySelector("#game-frame");
const placeholder = document.querySelector("#placeholder");
const wrap = document.querySelector("#frame-wrap");
if (!game) {
  title.textContent = "Juego no encontrado";
  description.textContent = "Vuelve al catálogo y selecciona un juego disponible.";
  placeholder.querySelector("h2").textContent = "No encontramos este juego";
  placeholder.querySelector("p").textContent = "Comprueba que el identificador del juego existe en games.js.";
} else {
  title.textContent = game.title;
  description.textContent = game.description || "";
  version.textContent = game.version || "Proyecto independiente";
  if (game.status === "Disponible" && game.path) {
    frame.src = game.path;
    frame.style.display = "block";
    placeholder.style.display = "none";
    frame.addEventListener("error", () => {
      placeholder.style.display = "flex";
      placeholder.querySelector("h2").textContent = "No se ha podido cargar el juego";
      placeholder.querySelector("p").textContent = "Comprueba que la ruta del archivo en games.js sea correcta.";
    });
  } else {
    placeholder.querySelector("h2").textContent = "Este juego llegará pronto";
    placeholder.querySelector("p").textContent = "Todavía no está publicado. Vuelve al catálogo para descubrir otros proyectos.";
  }
}
document.querySelector("#fullscreen").addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await (wrap.requestFullscreen ? wrap.requestFullscreen() : frame.requestFullscreen());
  } catch { /* El navegador puede bloquear pantalla completa; el juego sigue funcionando. */ }
});