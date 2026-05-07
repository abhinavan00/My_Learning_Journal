import { navAndFooter, getArticles } from "../utility.js";

function render() {
    navAndFooter()
    const recentThreeArticles = getArticles().slice(0, 3)
    document.getElementById('articles-section').innerHTML = recentThreeArticles.join('')
}

render()