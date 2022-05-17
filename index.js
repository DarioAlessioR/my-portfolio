let ul = document.getElementById('show');
let open = document.getElementById('open');
let links = document.querySelectorAll('.menu-link ');

if(ul.classList.contains('show')){
  ul.classList.remove('show')
}
links.forEach(link=>{
link.addEventListener('click', ()=>{
  ul.classList.remove('show')
})
})

open.addEventListener('click',()=>{
 ul.classList.add('show')
 console.log("Hola")
})