import menuToggle from "../modules/menu.js";
import header from "../modules/header.js";
import searchToggle from "../modules/search.js";
import faq from "../modules/faq.js";

const servPage = () => {
    menuToggle()
    header()
    searchToggle()
    faq()
}
servPage()
export default servPage;