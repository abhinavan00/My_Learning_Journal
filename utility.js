export function navAndFooter() {
    document.querySelector('nav').innerHTML = `
        <div class="logo-container">
            <img class="logo-img" src="../images/logo.svg" alt="logo image">
            <p class="logo-title">My Learning Journal</p>
        </div>
        <div class="nav-options-container">
            <a class="nav-links" href="">Home</a>
            <a class="nav-links" href="">About me</a>
        </div>
    `
    document.querySelector('footer').innerHTML = `
        <p class="footer-title" >My Learning Journal</p>
        <p class="copyright">Copyright © 2026</p>
    `
}