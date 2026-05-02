import articles from "./articles.js"

export function navAndFooter() {
    document.querySelector('nav').innerHTML = `
        <div class="logo-container">
            <img class="logo-img" src="../images/logo.svg" alt="logo image">
            <p class="logo-title">My Learning Journal</p>
        </div>
        <div class="nav-options-container">
            <a class="nav-links" href="../home/index.html">Home</a>
            <a class="nav-links" href="">About me</a>
        </div>
    `
    document.querySelector('footer').innerHTML = `
        <p class="footer-title" >My Learning Journal</p>
        <p class="copyright">Copyright © 2026</p>
    `
}

export function getArticles() {
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