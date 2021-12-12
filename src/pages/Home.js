import { ModalLogin } from "../components/ModalLogin/index.js"
import { ModalMenuMobile } from "../components/ModalMenuMobile/index.js"
import { isScrollRevival } from "../scripts/ScrollRevival/index.js"
import { swiperChallenges, swiperPresentation } from "../scripts/Swiper/index.js"

export const Home = {
  init: () => {
    isScrollRevival(["home__recentChallenges", "home__howToPlay"])
    swiperChallenges("home__recentChallenges__content")
    swiperPresentation("home__presentation--right--content")

    Home.eventsMenu([
      { targetTo: "home__presentation", button: "link-home" },
      { targetTo: "home__howToPlay", button: "link-howToPlay" },
      { targetTo: "home__recentChallenges", button: "link-challenges" },
      { targetTo: "home__watch", button: "link-share" },
    ])

    Home.listenersHeader()
    Home.listenersModal()
  },

  listenersModal: () => {
    const $BODY_HOME = document.querySelector(".body__home")
    const $BUTTON_LOGIN = $BODY_HOME.querySelector(".header__login")
    const $BUTTON_LOGIN_MOBILE = $BODY_HOME.querySelector(".header__login-mobile")
    const $BUTTON_MENU_MOBILE = $BODY_HOME.querySelector('.header.mob .header--icon-menu')

    $BUTTON_LOGIN.addEventListener("click", ModalLogin)
    $BUTTON_LOGIN_MOBILE.addEventListener("click", ModalLogin)
    $BUTTON_MENU_MOBILE.addEventListener('click', ModalMenuMobile)
  },

  listenersHeader: () => {
    window.addEventListener("scroll", function (e) {
      const $element = document.querySelector(".header.desk")
      let scroll = window.scrollY

      if (scroll >= 80) {
        $element.classList.add("sticky", "animate__animated", "animate__backInDown")
      } else {
        $element.classList.remove("sticky", "animate__animated", "animate__backInDown")
      }
    })
  },

  eventsMenu: (props) => {
    for (let prop of props) {
      const $targetElm = document.querySelector(`.${prop.targetTo}`)
      const $button = document.querySelector(`.${prop.button}`)

      $button.addEventListener("click", function (e) {
        e.preventDefault()
        $targetElm.scrollIntoView({ block: "center", behavior: "smooth" })
      })
    }
  },
}
