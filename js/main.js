// main js file used for all pages

// open and close menu on mobile
function openNav() {
    document.getElementById("mySidenav").style.height = "150%";
    disableScroll();
}

function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    enableScroll();
}