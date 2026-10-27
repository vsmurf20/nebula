const SUG_KEY='nebula_suggestions_v2';
function readSuggestions(){try{return JSON.parse(localStorage.getItem(SUG_KEY)||'[]')}catch{return []}}
function setStatus(el,msg,kind='success'){el.textContent=msg;el.className='form-status show '+kind}
function saveSuggestion(obj){const all=readSuggestions();all.push(obj);localStorage.setItem(SUG_KEY,JSON.stringify(all));}
function uid(){return (crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2));}
const quiz=document.querySelector('#quiz-form');
if(quiz)quiz.addEventListener('submit',e=>{e.preventDefault();const priorities=[...document.querySelectorAll('[name="priority"]:checked')].map(x=>x.value);saveSuggestion({id:uid(),type:'Cuestionario',title:'Preferencias de juego',message:`Género: ${document.querySelector('#genre').value}; plataforma: ${document.querySelector('#platform').value}; prioridades: ${priorities.join(', ')||'Sin seleccionar'}.`,createdAt:new Date().toISOString()});setStatus(document.querySelector('#quiz-status'),'¡Respuestas guardadas en este navegador! No se han enviado a Internet.');quiz.reset();});
const form=document.querySelector('#suggestion-form');
if(form)form.addEventListener('submit',e=>{e.preventDefault();saveSuggestion({id:uid(),type:document.querySelector('#type').value,title:document.querySelector('#title').value.trim(),message:document.querySelector('#message').value.trim(),createdAt:new Date().toISOString()});setStatus(document.querySelector('#suggestion-status'),'Propuesta guardada en este navegador. No se ha enviado al propietario de la web.');form.reset();});
