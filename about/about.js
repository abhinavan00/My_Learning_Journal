import { navAndFooter, getArticles } from "../utility.js";

function render() {
    navAndFooter()
    const firstThreeArticles = getArticles().slice(0, 3)
    document.getElementById('articles-section').innerHTML = firstThreeArticles.join('')
}

render()