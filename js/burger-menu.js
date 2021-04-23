// Burger
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu');
const menuSocialIcons = document.querySelector('.social-networks-fa-burger');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    menuSocialIcons.classList.toggle('_active');
  });
}

document.querySelectorAll('.menu a')
  .forEach((menuItem) => menuItem.addEventListener('click', hideMenu));

function hideMenu() {
  if (iconMenu.classList.contains('_active')) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
    menuSocialIcons.classList.remove('_active');
  }
}

