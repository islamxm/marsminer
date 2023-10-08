import menuToggle from "../modules/menu.js";
import header from "../modules/header.js";
import searchToggle from "../modules/search.js";
import heroParallax from "../modules/heroParallax.js";

const homePage = () => {
    menuToggle()
    header()
    searchToggle()
    heroParallax()
}

homePage()
export default homePage;