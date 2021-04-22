// Burger
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu');
if (iconMenu.classList.contains()) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.add('_lock');
    iconMenu.classList.add('_active');
    menuBody.classList.add('_active');
  });
}


/*document.querySelectorAll('.menu a')
.forEach( menuItem => menuItem.addEventListener('click', hideMenu));*/


const list = document.querySelectorAll(".menu a");
list.forEach(i => {
    i.addEventListener('click', function (hideMenu) {
        hideMenu.preventDefault();
        document.querySelector('.menu').style.display = 'none';
    })
});


/*if (iconMenu.classList.contains('_active')) {
  document.body.classList.remove('_lock');
  iconMenu.classList.remove('_active');
  menuBody.classList.remove('_active');
}*/
