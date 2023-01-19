const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuItem = menu.childNodes;
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const overlay = document.querySelector('.menu__overlay');
document.addEventListener('mousedown', (e) => {
   if (overlay.contains(e.target)) {
      menu.classList.remove('active')
   }
});