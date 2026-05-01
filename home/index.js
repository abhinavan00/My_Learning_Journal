import articles from "../articles.js";


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
    document.getElementById('articles-section').innerHTML = getArticles()
}

render()