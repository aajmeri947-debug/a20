(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var F={box:['Box calf','smooth &amp; polished','A smooth calfskin with a glossy, glazed surface. Crisp, formal and holds sharp lines; scratches show, but it polishes up beautifully.',[30,35,95,45],'linear-gradient(160deg,#6E2230,#4A121C 55%,#2E0A10)'],
pebbled:['Pebbled calf','grained &amp; carefree','Calfskin with a raised, pebbled grain. Hides marks, shrugs off light rain and softens gently with time. The everyday champion.',[85,75,60,65],'radial-gradient(circle at 30% 30%,rgba(255,255,255,.12) 1px,transparent 2px) 0 0/7px 7px,linear-gradient(160deg,#8A5A3A,#6A3F25)'],
embossed:['Embossed calf','fine-grain &amp; rigid','Pressed with a fine, uniform grain and lightly coated. Light, scratch-resistant and keeps a crisp structure even when full.',[90,80,85,35],'repeating-linear-gradient(45deg,rgba(255,255,255,.06) 0 2px,transparent 2px 4px),linear-gradient(160deg,#3D4A5A,#28323F)'],
nappa:['Nappa calf','soft &amp; supple','A soft, smooth, full-grain calfskin with a gentle sheen. Drapes and slouches, feels wonderful, and develops a lived-in softness.',[45,45,30,90],'linear-gradient(160deg,#C9A17A,#A87D56 60%,#8C6544)'],
nubuck:['Calf nubuck','velvety &amp; matte','Calfskin buffed on the grain side to a fine velvet nap. Luxurious to touch, but needs protection from rain and stains.',[30,15,55,85],'radial-gradient(rgba(0,0,0,.05) 1px,transparent 1px) 0 0/3px 3px,linear-gradient(160deg,#B89B85,#9C8069)']};
var A=[0,0,0,0];function fn(){var k;if(A[2]===2||(A[0]===2&&A[2]!==0&&A[1]===2))k='nubuck';else if(A[2]===1)k=(A[3]===0||A[1]===0)?'pebbled':'nappa';else if(A[0]===2)k='box';else if(A[1]===0||A[3]===0)k=A[0]===1?'embossed':'pebbled';else k=A[0]===1?'box':'pebbled';if(A[2]===0&&A[3]===0&&A[1]===0)k='embossed';
 var f=F[k];$('fn-t').innerHTML=f[0];$('fn-k').innerHTML=f[1];$('fn-d').innerHTML=f[2];f[3].forEach(function(v,i){$('fn-b'+i).style.width=v+'%';});$('fn-sw').style.background=f[4];var t=$('fn-t');t.style.animation='none';t.offsetHeight;t.style.animation='';}
[].forEach.call(document.querySelectorAll('.cd-op'),function(g){var bs=[].slice.call(g.querySelectorAll('button'));bs.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){A[+g.dataset.q]=+b.dataset.v;bs.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});fn();});});});if($('fn-t'))fn();
var T=[[0,4,'Mini crossbody','about 20 &times; 14 &times; 6 cm','A small crossbody or wallet-on-strap holds the essentials and keeps your hands free.',170,120],[5,9,'Shoulder bag','about 26 &times; 18 &times; 9 cm','A classic shoulder bag or small top-handle bag with an inner pocket for keys.',220,165],[10,15,'Medium tote','about 32 &times; 26 &times; 12 cm','A medium tote or bucket bag. Choose one with a zip pocket so small items do not sink.',260,200],[16,22,'Large work tote','about 38 &times; 30 &times; 14 cm','A structured work tote with a padded sleeve. Check the strap drop clears your shoulder in a coat.',300,230],[23,99,'Weekender','about 45 &times; 28 &times; 22 cm','That is a lot to carry. Consider a weekender, or split items between a tote and a pouch.',330,250]];
function ft(){var cs=[].slice.call(document.querySelectorAll('.cd-it input:checked')),v=cs.reduce(function(s,c){return s+ +c.dataset.v;},0),t=T.filter(function(x){return v>=x[0]&&v<=x[1];})[0];var b=$('ft-box');b.style.setProperty('--w',t[5]+'px');b.style.setProperty('--h',t[6]+'px');
 $('ft-t').textContent=t[2];$('ft-d').innerHTML=t[3];$('ft-n').textContent=t[4];$('ft-k').textContent=cs.length+(cs.length===1?' item':' items')+', '+v+' units of space';
 $('ft-in').innerHTML=cs.map(function(c,i){var u=+c.dataset.v;return '<i style="width:'+(14+u*8)+'px;height:'+(10+u*4)+'px;animation-delay:'+i*.05+'s" title="'+c.parentNode.textContent+'"></i>';}).join('');}
if($('ft-box')){[].forEach.call(document.querySelectorAll('.cd-it input'),function(c){c.addEventListener('change',ft);});ft();}
})();
