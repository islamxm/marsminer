import menuToggle from "../modules/menu.js";
import header from "../modules/header.js";
import searchToggle from "../modules/search.js";
import rangeSlider from "../modules/rangeSlider.js";
import filter from "../modules/filter.js";

const catalogPage = () => {
    menuToggle()
    header()
    searchToggle()
    rangeSlider()
    filter()
}

catalogPage()
export default catalogPage;