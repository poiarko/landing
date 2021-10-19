import './style.sass'

document.querySelector('.menu__btn').addEventListener('click', () => {
  document.querySelector('.menu__list').classList.toggle('menu__list_active');
});
