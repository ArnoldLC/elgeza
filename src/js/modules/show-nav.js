export const showNav = () => {
  const toggle = document.querySelector('.main-menu-toggle'),
    navContainer = document.querySelector('.header-links');
  if(toggle) {
    toggle.addEventListener('click', () => {
      navContainer.classList.toggle('show')
    })
  }
}