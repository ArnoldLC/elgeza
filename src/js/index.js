import Swiper from "swiper";
import { saludo, despedida } from "./modules/example";
import { activeMenu } from "./modules/active-menu";
import { showNav } from "./modules/show-nav";
import { fixedNav } from "./modules/fixed-nav";
import { dropdown } from "./modules/dropdown-menu";
import { fadeIn } from "./modules/fade-in";
import { tabsForm } from "./modules/tabs-form";

// saludo()
// despedida()
activeMenu();
showNav();
fixedNav();
dropdown();
fadeIn();
tabsForm();

if (!document.querySelector(".customers")) {
} else {
  let mySwiper = new Swiper(".swiper-container--customers", {
    loop: true,
    slidesPerView: 5,
    slidesPerColumn: 1,
    preloadImages: false,
    watchSlidesVisibility: true,
    autoplay: {
      delay: 3000
    },
    lazy: {
      loadPrevNext: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
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

if (!document.querySelector(".projects")) {
} else {
  let projectsSlider = new Swiper(".swiper-container--projects", {
    loop: true,
    slidesPerColumn: 1,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}
