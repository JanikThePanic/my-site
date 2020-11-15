// main js file used for all pages

// uwu
// code to include an html file in another html file
// the fuction takes in the name of the attribute we'll be looking for
function includeHTML(lookingFor) {
  var allElements = document.getElementsByTagName("*"); // pulls all elements from html
  var file; // will store the location of the html we're pulling in
  var xhttp; // will be the XMLHttpRequest

  // will loop through all the elements until it find one with the attribute "file"
  for (const element of allElements) {
    file = element.getAttribute(lookingFor); // sets "file" to the attribute "file" of the current element

    // if the current element HAS a "file", it will not be null, and thereby will run the if
    if (file) {
      xhttp = new XMLHttpRequest(); // makes new httprequest

      // once the state of the request changes it'll run the function
      xhttp.onreadystatechange = function() {
        // all green
        if (this.readyState == 4 && this.status == 200) {
          element.innerHTML = this.responseText;
        }
        // the file couldnt be found
        else if (this.status == 404) {
          element.innerHTML = "Page not found.";
          console.log("Page not found.")
        }
      }
      // some js request stuff
      // it GETs the "file", file being the loction of the file
      xhttp.open("GET", file, true);
      xhttp.send();
      // exit the function, we found "file" and pulled it in
      return;
    }
  }
}

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

// ~--------- POP-UP saying things are stil in the working ----------~ //
function inWork() {
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
  modal.style.display = "block";
}