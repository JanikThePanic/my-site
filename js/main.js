// main js file used for all pages

// open and close menu on mobile
function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
}

// Open external links in a new window or tab.
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

ready(function () {

  var website = window.location.hostname;

  var internalLinkRegex = new RegExp('^((((http:\\/\\/|https:\\/\\/)(www\\.)?)?'
    + website
    + ')|(localhost:\\d{4})|(\\/.*))(\\/.*)?$', '');

  var anchorEls = document.querySelectorAll('a');
  var anchorElsLength = anchorEls.length;

  for (var i = 0; i < anchorElsLength; i++) {
    var anchorEl = anchorEls[i];
    var href = anchorEl.getAttribute('href');

    if (!internalLinkRegex.test(href)) {
      anchorEl.setAttribute('target', '_blank');
    }
  }
});


// ~--------- POP-UP saying things are stil in the working ----------~
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeM")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function inWork() {
  modal.style.display = "block";
}