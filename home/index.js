import { navAndFooter, getArticles } from "../utility.js";

/* =================
    DOM Elements
==================== */
const articlesSection = document.getElementById('articles-section')

/* ==================
    MEDIA QUERIES
===================== */
const smallScreenSize = window.matchMedia('(max-width: 649px)')

/* ====================
    MEDIA QUERY MATCH
======================= */
if(smallScreenSize.matches) {
    // LOAD NAV BAR
    navAndFooter()

    // INSERT 1ST 3 ARTICLES
    const firstThreePosts = getArticles().slice(0, 3)
    articlesSection.innerHTML = firstThreePosts.join('')

    // CREATE VIEW MORE BTN
    const newBtn = document.createElement('button')
    newBtn.textContent = 'View More'
    newBtn.classList.add('view-more-btn')
    newBtn.id = 'view-more-btn'
    articlesSection.after(newBtn)
} else {
    navAndFooter()
    articlesSection.innerHTML = getArticles().join('')
}

/* =================================
    EVENT LISTNER FOR VIEW MORE BTN
==================================== */
document.getElementById('view-more-btn').addEventListener('click', loadRestPosts)

function loadRestPosts() {
    const restPosts = getArticles().slice(3)
    if (!articlesSection.innerHTML.includes(restPosts.join(''))) {
        articlesSection.innerHTML += restPosts.join('')
    }
}