// main js file used for all pages

// open and close menu on mobile
function openNav() {
    document.getElementById("mySidenav").style.height = "100%";
    disableScroll();
}

function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    enableScroll();
}


// disable and enable scroll on mobile menu
function disableScroll() {
    // Get the current page scroll position 
    scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, 
        // set this to the previous value 
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
function enableScroll() {
    window.onscroll = function () { };
} 