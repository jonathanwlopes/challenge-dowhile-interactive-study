import { Home } from "./pages/Home.js"
import { isScrollRevival } from "./scripts/ScrollRevival/index.js"
import { swiperChallenges, swiperPresentation } from "./scripts/Swiper/index.js"

swiperChallenges("home__recentChallenges__content")
swiperPresentation("home__presentation__right--content")

isScrollRevival(["home__recentChallenges", "home__howToPlay"])

Home.init()
