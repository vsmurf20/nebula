const grid = document.querySelector("#game-grid");
const search = document.querySelector("#search");
const filters = document.querySelector("#filters");
const empty = document.querySelector("#empty-state");
let activeFilter = "Todos";

function renderGames() {
  const term = search.value.trim().toLocaleLowerCase("es");
  const games = (window.GAMES || []).filter(game => {
    const matchesText = [game.title, game.description, game.category].join(" ").toLocaleLowerCase("es").includes(term);
    const matchesCategory = activeFilter === "Todos" ||
      (activeFilter === "Otros" ? !["Terror", "Aventura"].includes(game.category) : game.category === activeFilter);
    return matchesText && matchesCategory;
  });
  grid.innerHTML = games.map((game, index) => {
    const available = game.status === "Disponible";
    return `<article class="game-card">
      <div class="cover" style="--cover-bg:${escapeAttr(game.cover || "linear-gradient(135deg,#292442,#7559a8)")};">
        <span class="cover-tag">${escapeHtml(game.category || "Otros")}</span>
        <span class="cover-art" aria-hidden="true">${escapeHtml(game.icon || "✦")}</span>
        <span class="cover-index">${String((window.GAMES || []).indexOf(game) + 1).padStart(2,"0")}</span>
      </div>
      <div class="card-content">
        <div class="card-topline"><h3 title="${escapeAttr(game.title)}">${escapeHtml(game.title)}</h3><span class="status ${available ? "" : "soon"}">${escapeHtml(game.status || "Próximamente")}</span></div>
        <p>${escapeHtml(game.description || "Más información próximamente.")}</p>
        <div class="card-bottom"><span class="genre">${escapeHtml(game.category || "Otros")}</span>
          ${available ? `<a class="play-link" href="play.html?id=${encodeURIComponent(game.id)}">Jugar ahora <span>↗</span></a>` : `<span class="play-link" style="opacity:.5">Muy pronto</span>`}
        </div>
      </div>
    </article>`;
  }).join("");
  empty.hidden = games.length !== 0;
  document.querySelector("#game-count").textContent = String((window.GAMES || []).length).padStart(2, "0");
}
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch])); }
function escapeAttr(value) { return escapeHtml(value).replace(/`/g, "&#96;"); }
search.addEventListener("input", renderGames);
filters.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  filters.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
  renderGames();
});
document.querySelector("#year").textContent = new Date().getFullYear();
renderGames();