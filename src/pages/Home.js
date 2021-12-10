import { ModalLogin } from "../components/ModalLogin/index.js"

export const Home = {
  init: () => {
    Home.listeners()
  },

  listeners: () => {
    const $BODY_HOME = document.querySelector(".body__home")
    if (!$BODY_HOME) return

    const $BUTTON_LOGIN = $BODY_HOME.querySelector(".header__login")
    const $BUTTON_LOGIN_MOBILE = $BODY_HOME.querySelector(".header__login-mobile")

    $BUTTON_LOGIN.addEventListener("click", ModalLogin)
    $BUTTON_LOGIN_MOBILE.addEventListener("click", ModalLogin)
  },
}
