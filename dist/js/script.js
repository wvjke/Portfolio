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

const percents = document.querySelectorAll('.skills__progress-percent'),
    lines = document.querySelectorAll('.skills__progress-bars-value');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}