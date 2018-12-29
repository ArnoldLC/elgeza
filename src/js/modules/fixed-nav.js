export const fixedNav = () => {
  const mainHeader = document.querySelector('.main-header')

  const setSticky = (scroll) => {
    if(scroll > 1) {
      mainHeader.classList.add('fixed')
    } else {
      mainHeader.classList.remove('fixed')
    }
  }

  const calculateScroll = () => {
    const scroll = window.scrollY;
    setSticky(scroll);
  }

  window.addEventListener('scroll', calculateScroll);
}