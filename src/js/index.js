import Swiper from "swiper"
import {saludo, despedida} from "./modules/example"
import {activeMenu} from './modules/active-menu'

// saludo()
// despedida()
activeMenu()

if(!document.querySelector('.customers')) {

} else {
  let mySwiper = new Swiper('.swiper-container--customers', {
    loop: true,
    slidesPerView: 5,
    slidesPerColumn: 1,
    preloadImages: false,
    watchSlidesVisibility: true,
    lazy: {
      loadPrevNext: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      }
    }
  }); 
}

if(!document.querySelector('.projects')) {

} else {
  let projectsSlider = new Swiper('.swiper-container--projects', {
    loop: true,
    slidesPerColumn: 1,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

