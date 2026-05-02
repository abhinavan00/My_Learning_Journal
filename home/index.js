import articles from "../articles.js";
import { navAndFooter } from "../utility.js";


function getArticles() {
   return articles.map(article => {
        const {name, date, img, body, alt} = article
        return `
            <div class="blog-post">
                <img class="blog-img" src="../images/${img}" alt="${alt}">
                <div>
                    <p class="blog-date">${date}</p>
                    <h2>${name}</h2>
                    <p class="blog-body">
                        ${body}
                    </p>
                </div>
            </div>
        `
    }).join('')
}

function render() {
    navAndFooter()
    document.getElementById('articles-section').innerHTML = getArticles()
}

render()