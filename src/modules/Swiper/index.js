export const newSwiper = (element) => {
  new Swiper(`.${element}`, {
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
}
