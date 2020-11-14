// load xml file and send requests and stuff
function loadXML() {
    // make new http request, its a js thing
    var xmlhttp = new XMLHttpRequest();

    // GET, file location and name, and some other propertie i forget
    xmlhttp.open("GET", "/assets/tempThoughts.xml", true);
    xmlhttp.send();

    // when there is a change in the request's state, itll check all is green and run the table loading function
    xmlhttp.onreadystatechange = function () {
        // all green
        if (this.readyState == 4 && this.status == 200) {
            loadEntries(this);
        }
        // cant find the xml
        if (this.status == 404) {
            console.log("couldn't find the xml file")
        }
    }
}

// function that loops through the data and spins it into the html. required the "this" from the request made above
function loadEntries(xml) {
    var file = xml.responseXML;
    var loaded = "";
    var pulledData = file.getElementsByTagName("entry");

    // loops through all <resource>'s and addes them to the great table varible
    for (i = 0; i < pulledData.length; i++) {
        loaded += "<tr><td>" +
            pulledData[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
            "</td><td>" +
            pulledData[i].getElementsByTagName("thought")[0].childNodes[0].nodeValue +
            "</td><td>" +
            pulledData[i].getElementsByTagName("type")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("noThoughtsGoHere").innerHTML = loaded;
    // by default sort the table by latest thought
    //sortTable(0);
}

// for when buttons are clicked
var buttons = document.getElementsByClassName("btn");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}