document.addEventListener('DOMContentLoaded',()=>{
 const t=document.querySelector('.menu-toggle');
 const m=document.querySelector('nav ul');
 if(t){t.onclick=()=>m.classList.toggle('active');}
});
