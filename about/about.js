import articles from "../articles.js";
import { navAndFooter, getArticles } from "../utility.js";

const articlesSection = document.getElementById('articles-section')
const viewMoreBtn = document.getElementById('view-more-btn')

viewMoreBtn.addEventListener('click', function() {
    const restArticles = getArticles().slice(3)
    if (!articlesSection.innerHTML.includes(restArticles.join(''))) {
        articlesSection.innerHTML += restArticles.join('')
    }
})

function render() {
    navAndFooter()
    const firstThreeArticles = getArticles().slice(0, 3)
    articlesSection.innerHTML = firstThreeArticles.join('')
}

render()