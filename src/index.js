import { Home } from "./pages/Home.js"

const isHome = document.body.classList.contains("body__home")
if (isHome) Home.init()
