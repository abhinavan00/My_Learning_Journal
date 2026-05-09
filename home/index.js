import { navAndFooter, getArticles } from "../utility.js";

/* =================
    DOM Elements
==================== */
const articlesSection = document.getElementById('articles-section')
const viewMoreBtnContainer = document.getElementById('view-more-btn-container')

/* ==================
    MEDIA QUERIES
===================== */
const mediaQuery = window.matchMedia('(max-width: 649px)')

function trackScreenSizeChange(e) {
    if(e.matches) {
        // LOAD NAV BAR
        navAndFooter()

        // INSERT 1ST 3 ARTICLES
        const firstThreePosts = getArticles().slice(0, 3)
        articlesSection.innerHTML = firstThreePosts.join('')

        // CREATE VIEW MORE BTN
        viewMoreBtnContainer.innerHTML = `
            <button class='view-more-btn' id='view-more-btn' >
                View More
            </button>
        `

        // EVENT LISTNER FOR VIEW MORE BTN
        const viewMoreBtn = document.getElementById('view-more-btn')
        viewMoreBtn.addEventListener('click', loadRestPosts)

        function loadRestPosts() {
            const restPosts = getArticles().slice(3)
            if (!articlesSection.innerHTML.includes(restPosts.join(''))) {
                articlesSection.innerHTML += restPosts.join('')
            }
        }
    } else {
        navAndFooter()
        articlesSection.innerHTML = getArticles().join('')

        // REMOVE VIEW MORE BTN
        const viewMoreBtn = document.getElementById('view-more-btn')
        viewMoreBtn.remove()

    }
}

mediaQuery.addEventListener('change', trackScreenSizeChange)

trackScreenSizeChange(mediaQuery)

/* =================================
    EVENT LISTNER FOR VIEW MORE BTN
==================================== */
