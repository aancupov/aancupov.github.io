/**
 * Created by andrew on 27.02.14.
 */
window.onload = function() {
    /* --------- make donation module start -------------- */
    (function() {
        var searchButton = document.getElementById('searchButton');
        var searchForm = document.forms['searchForm'];
        var searchResultPage = document.getElementById('search-result-page');
        var homePageCarusel = document.getElementById('carusel');
        var homePageProductList = document.getElementById('product-list');
        var homeLink = document.getElementById('link-2-home');
        var homeLinkFooter = document.getElementById('footer-home');

        function showSearchResult() {
            searchForm.style.display = "none";
            homePageCarusel.style.display = "none";
            homePageProductList.style.display = "none";
            searchResultPage.style.display = "block";
        }

        function showHomePage() {
            searchForm.style.display = "block";
            homePageCarusel.style.display = "block";
            homePageProductList.style.display = "block";
            searchResultPage.style.display = "none";
            window.scrollTo(0,0); //Go to begin of page
        }

        showHomePage();
        // Register the event listeners
        searchButton.addEventListener('click', showSearchResult, false);
        homeLink.addEventListener('click', showHomePage, false);
        homeLinkFooter.addEventListener('click', showHomePage, false);
    })();
    /* --------- make donation module end -------------- */

}
