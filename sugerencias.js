/* NEBULA · sugerencias
   Para recibir respuestas de todo el mundo: crea un formulario en Formspree y pega aquí su endpoint.
   Ejemplo: https://formspree.io/f/abcdwxyz
   No pegues contraseñas ni claves privadas; el endpoint público del formulario está diseñado para estar en el frontend. */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzeeenwz";
const SUG_KEY='nebula_suggestions_v3';
function readSuggestions(){try{return JSON.parse(localStorage.getItem(SUG_KEY)||'[]')}catch{return []}}
function setStatus(el,msg,kind='success'){el.textContent=msg;el.className='form-status show '+kind}
function saveLocal(obj){const all=readSuggestions();all.push(obj);localStorage.setItem(SUG_KEY,JSON.stringify(all));}
function uid(){return (crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2));}
const endpointReady=FORMSPREE_ENDPOINT.startsWith('https://formspree.io/f/')&&!FORMSPREE_ENDPOINT.includes('PEGA_AQUI');
async function submitData(payload,statusEl){
 if(!endpointReady){saveLocal(payload);setStatus(statusEl,'Todavía no se ha conectado el envío online. Esta respuesta se ha guardado solo en este navegador. Para recibirla tú, configura el endpoint de Formspree siguiendo LEEME.md.','error');return;}
 try{
  const response=await fetch(FORMSPREE_ENDPOINT,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify({...payload,_subject:`NEBULA · ${payload.type||'Cuestionario'}`})});
  if(!response.ok)throw new Error('El servicio no ha aceptado la respuesta.');
  setStatus(statusEl,'¡Enviado correctamente! Gracias por ayudar a mejorar NEBULA.');
 }catch(err){saveLocal(payload);setStatus(statusEl,'No se pudo enviar ahora mismo. Hemos guardado la respuesta en este navegador; prueba más tarde o revisa el endpoint de Formspree.','error');}
}
const quiz=document.querySelector('#quiz-form');
if(quiz)quiz.addEventListener('submit',async e=>{e.preventDefault();const priorities=[...document.querySelectorAll('[name="priority"]:checked')].map(x=>x.value);const payload={id:uid(),type:'Cuestionario',title:'Preferencias de juego',genre:document.querySelector('#genre').value,platform:document.querySelector('#platform').value,priorities:priorities.join(', ')||'Sin seleccionar',createdAt:new Date().toISOString()};const btn=quiz.querySelector('[type="submit"]');btn.disabled=true;await submitData(payload,document.querySelector('#quiz-status'));btn.disabled=false;if(endpointReady)quiz.reset();});
const form=document.querySelector('#suggestion-form');
if(form)form.addEventListener('submit',async e=>{e.preventDefault();const payload={id:uid(),type:document.querySelector('#type').value,title:document.querySelector('#title').value.trim(),message:document.querySelector('#message').value.trim(),createdAt:new Date().toISOString()};const btn=form.querySelector('[type="submit"]');btn.disabled=true;await submitData(payload,document.querySelector('#suggestion-status'));btn.disabled=false;if(endpointReady)form.reset();});
