export const dropdown = () => {
  const menuLinks = document.querySelectorAll('.main-menu__link')
  if(menuLinks) {
    console.log(menuLinks)
    menuLinks.forEach(link => {
      if(link.href.slice(-1) === '#') {
        link.addEventListener('click', () => {
          // console.log('hola mundo')
        })
      }
    })
  }
}