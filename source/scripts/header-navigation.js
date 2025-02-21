const navMain = document.querySelector('.page-header__navigation');
const navToggle = document.querySelector('.header-buttons__button--menu');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});
