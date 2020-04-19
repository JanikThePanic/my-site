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