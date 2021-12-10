import { animateCSS } from "../../utils/AnimationCss/index.js"

export const swiperChallenges = (element) => {
  new Swiper(`.${element}`, {
    direction: "horizontal",
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      480: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 3,
      },

      1024: {
        slidesPerView: 4,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
}

export const swiperPresentation = (element) => {
  const swiper = new Swiper(`.${element}`, {
    direction: "horizontal",
    spaceBetween: 30,
    slidesPerView: 1,

    autoplay: {
      delay: 6000,
    },
  })

  swiper.on("slideChange", function (e) {
    const swiperActive = swiper.slides[e.activeIndex]

    const $TEXT = swiperActive.querySelector(".home__presentation__right--content-banner-title")
    animateCSS($TEXT, "lightSpeedInRight")
  })
}
