import menuToggle from "../modules/menu.js";
import header from "../modules/header.js";
import searchToggle from "../modules/search.js";
import articleSliders from "../modules/articleSliders.js";

const articlePage = () => {
    menuToggle()
    header()
    searchToggle()
    articleSliders()
}

articlePage()
export default articlePage;
