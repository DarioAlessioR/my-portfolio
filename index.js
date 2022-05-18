
/* FROM HERE ARRAY WITH WORKS FOR POPUP PROJECT */ 

const projectsArray = [
  {
    client: 'Fugados Band',
    description: 'Official site for best indie rock band of Venezuela. Site was created following client strict requirements, according to indie rock websites standards.',
    image: 'images/portfolio/Fugados.jpg',
    languages: ['HTML', 'CSS', 'Ruby'],
    link: 'http://www.fugadosband.com/',
    source: 'https://github.com/DarioAlessioR',
  }, 
  {
    client: 'Fugados Band 2',
    description: 'New Official site for best indie rock band of Venezuela. Site was created following client strict requirements, according to indie rock websites standards.',
    image: 'images/portfolio/Fugados.jpg',
    languages: ['HTML', 'CSS', 'React', 'Ruby'],
    link: 'http://www.fugadosband.com/',
    source: 'https://github.com/DarioAlessioR',
  }, 
  {
    client: 'Fugados Band 3',
    description: 'Very new Official site for best indie rock band of Venezuela. Site was created following client strict requirements, according to indie rock websites standards.',
    image: 'images/portfolio/Fugados.jpg',
    languages: ['HTML', 'CSS', 'Ruby'],
    link: 'http://www.fugadosband.com/',
    source: 'https://github.com/DarioAlessioR',
  }, 
  {
    client: 'Fugados Band 4',
    description: 'Very and super new Official site for best indie rock band of Venezuela. Site was created following client strict requirements, according to indie rock websites standards.',
    image: 'images/portfolio/Fugados.jpg',
    languages: ['HTML', 'CSS', 'React', 'Ruby'],
    link: 'http://www.fugadosband.com/',
    source: 'https://github.com/DarioAlessioR',
  }, 
];

/* FROM HERE CODE FOR MENU PROJECT */

const ul = document.getElementById('show');
const open = document.getElementById('open');
const links = document.querySelectorAll('.menu-link');

if (ul.classList.contains('show')){
  ul.classList.remove('show');
}

links.forEach((link)=>{
link.addEventListener('click', ()=>{
  ul.classList.remove('show');
});
});

open.addEventListener('click', () => {
  ul.classList.add('show');
});

/* FROM HERE CODE FOR POPUP PROJECT */

const modalClose = (opc = false) => {
  if (opc) {
    modal.classList.remove('modal_show');
    modal.classList.add('modal_hide');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  }
};







