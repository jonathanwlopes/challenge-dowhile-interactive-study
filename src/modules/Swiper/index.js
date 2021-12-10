export const newSwiper = (element) => {
  new Swiper(`.${element}`, {
    direction: "horizontal",
    spaceBetween: 30,
    freeMode: true,

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
