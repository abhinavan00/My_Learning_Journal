import { navAndFooter, getArticles } from "../utility.js";

function render() {
    navAndFooter()
    document.getElementById('articles-section').innerHTML = getArticles()
}

render()