export const newSwiper = (element) => {
  new Swiper(`.${element}`, {
    direction: "horizontal",
    spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      480: {
        slidesPerView: 2,
      },

      640: {
        slidesPerView: 4,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
}
