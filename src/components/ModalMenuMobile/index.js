import { Element } from "../../utils/Element/index.js"

export const ModalMenuMobile = () => {
  const $MODAL = document.querySelector(".modal")
  if (!$MODAL) return

  $MODAL.classList.add("active")

  ModalMenuMobileEvents($MODAL)

  const _title = Element({
    elementType: "h2",
    classList: ["modal__login--title"],
    text: "Funcionalidade em desenvolvimento",
  })

  const _container = Element({
    elementType: "div",
    classList: ["modal__login"],
    children: [_title],
  })

  $MODAL.appendChild(_container)
}

const ModalMenuMobileEvents = (element) => {
  element.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return

    element.classList.remove("active")
    element.innerHTML = ""
  })

  document.addEventListener("keydown", (e) => {
    e.preventDefault()
    const keyCode = e.key === "Escape"
    if (!keyCode) return

    element.classList.remove("active")
    element.innerHTML = ""
  })
}
