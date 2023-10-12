import menuToggle from "../modules/menu.js";
import header from "../modules/header.js";
import searchToggle from "../modules/search.js";
import blogImg from "../modules/blogImg.js";

const blogPage = () => {
    menuToggle()
    header()
    searchToggle()
    blogImg()
}

blogPage()
export default blogPage;