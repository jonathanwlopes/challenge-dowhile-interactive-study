import { isScrollRevival } from "./ScrollRevival/index.js"
import { newSwiper } from "./Swiper/index.js"

newSwiper("home__recentChallenges__content")

isScrollRevival(["home__recentChallenges", "home__howToPlay"])