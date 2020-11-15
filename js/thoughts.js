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

    // vars holding star svgs
    star_full = "<svg version=\"1.1\" viewBox=\"-44 -44 600 600\" class=\"stars\"><path class=\"star full\" d=\"M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z\" /></svg>";
    star_half = "<svg version=\"1.1\" viewBox=\"-44 -44 600 600\" class=\"stars\"><defs><clipPath id=\"cut-off-right\"><rect x=\"-44\" y=\"0\" width=\"50%\" height=\"100%\" /></clipPath></defs><path class=\"star empty\" d=\"M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z\" /><path class=\"star full\" d=\"M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z\" clip-path=\"url(#cut-off-right)\" /></svg>";
    star_empty = "<svg version=\"1.1\" viewBox=\"-44 -44 600 600\" class=\"stars\"><path class=\"star empty\" d=\"M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.63l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z\" /></svg>";

    // loops through all <resource>'s and addes them to the great table varible
    for (i = 0; i < pulledData.length; i++) {
        var image = "";
        var title = "";
        var type = "";
        var date = "";
        var rating = "";
        var published = "";
        var creator = "";
        var thought = "";
        var stars = "";
        var star_count = 0;
        var rating_value = parseFloat(pulledData[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue);
        var rating_temp = rating_value;

        while (star_count < 5) {
            if (rating_temp >= 1) {
                stars += star_full;
                star_count++;
                rating_temp += -1;
            }
            else if (rating_temp >= 0.5) {
                stars += star_half;
                star_count++;
                rating_temp += -0.5;
            }
            else {
                stars += star_empty;
                star_count++;
            }
        }

        image = "<div class=\"image_div\"><img class=\"image\" src=\"" + pulledData[i].getElementsByTagName("image")[0].childNodes[0].nodeValue + "\"></div>";
        title = "<p class=\"title\">" + pulledData[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</p>";
        type = "<div class=\"type_date\"><p>" + pulledData[i].getElementsByTagName("type")[0].childNodes[0].nodeValue + "</p><p>&nbsp · &nbsp</p>";
        date = "<p class=\"date\">" + pulledData[i].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</p></div>";
        rating = "<div class=\"rating\" value=\"" + rating_value + "\">" + stars + "</div>";
        published = "<div class=\"published_creator\"><p>" + pulledData[i].getElementsByTagName("published")[0].childNodes[0].nodeValue + "</p><p>&nbsp | &nbsp</p>";
        creator = "<p>" + pulledData[i].getElementsByTagName("creator")[0].childNodes[0].nodeValue + "</p></div>";
        thought = "<p class=\"thought\">" + pulledData[i].getElementsByTagName("thought")[0].childNodes[0].nodeValue + "</p>";

        loaded += "<div class=\"entry\">" + image + "<div class=\"text_div\">" + title + type + date + rating + published + creator + thought + "</div></div>";
        console.log(loaded);
    }
    document.getElementById("ThoughtsGoHere").innerHTML += loaded;
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