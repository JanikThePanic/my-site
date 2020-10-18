// uwu
// code to include an html file in another html file
// the fuction takes in the name of the attribute we'll be looking for
function includeHTML(lookingFor) {
  var allElements = document.getElementsByTagName("*"); // pulls all elements from html
  var element; // will store the element in which the attribute "file" is stored
  var file; // will store the location of the html we're pulling in
  var xhttp; // will be the XMLHttpRequest

  // will loop through all the elements until it find one with the attribute "file"
  for (i = 0; i < allElements.length; i++) {
    element = allElements[i]; // sets "element" to the current element we're running through
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