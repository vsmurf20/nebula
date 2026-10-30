function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
const grid=document.querySelector('#game-grid'),search=document.querySelector('#search'),filters=document.querySelector('#filters'),empty=document.querySelector('#empty-state'),resultCount=document.querySelector('#result-count');
let activeFilter='Todos';
const categories=['Todos',...new Set((window.GAMES||[]).map(g=>g.category||'Otros').filter(Boolean).filter(c=>c!=='Todos'))];
filters.innerHTML=categories.map(c=>`<button class="filter ${c==='Todos'?'active':''}" data-filter="${esc(c)}" type="button">${esc(c)}</button>`).join('');
function render(){
 const term=search.value.trim().toLocaleLowerCase('es');
 const games=(window.GAMES||[]).filter(g=>[g.title,g.description,g.category,g.about].join(' ').toLocaleLowerCase('es').includes(term)&&(activeFilter==='Todos'||(g.category||'Otros')===activeFilter));
 grid.innerHTML=games.map(g=>`<article class="game-card ${g.status==='Disponible'?'is-available':'is-soon'}">
 <a class="cover game-icon-link ${g.status==='Disponible'?'has-cover':''}" href="detalle.html?id=${encodeURIComponent(g.id)}" aria-label="Abrir ficha de ${esc(g.title)}" "><img class="cover-image" src="${esc(g.cover)}" alt="" loading="lazy"><span class="cover-tag">${esc(g.category||'Otros')}</span><span class="cover-art" aria-hidden="true">${esc(g.icon||'✦')}</span><span class="icon-hint">${g.status==='Disponible'?'Ver detalles y jugar ↗':'Ver ficha ↗'}</span></a>
 <div class="card-content"><div class="card-topline"><h3><a href="detalle.html?id=${encodeURIComponent(g.id)}">${esc(g.title)}</a></h3><span class="status ${g.status==='Disponible'?'':'soon'}">${esc(g.status)}</span></div><p>${esc(g.description)}</p><div class="card-bottom"><span class="genre">${esc(g.category||'Otros')}</span><a class="play-link" href="detalle.html?id=${encodeURIComponent(g.id)}">${g.status==='Disponible'?'Ver ficha y jugar ↗':'Más información ↗'}</a></div></div></article>`).join('');
 empty.hidden=games.length>0;if(resultCount)resultCount.textContent=`Mostrando ${games.length} de ${(window.GAMES||[]).length} juegos`; 
}
search.addEventListener('input',render);
filters.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;activeFilter=b.dataset.filter;filters.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));render();});
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
const total=document.querySelector('#total-games');if(total)total.textContent=(window.GAMES||[]).length;
const available=document.querySelector('#available-games');if(available)available.textContent=(window.GAMES||[]).filter(g=>g.status==='Disponible').length;
render();
