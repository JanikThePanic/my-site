// load xml file and send requests and stuff
function loadXML() {
    // make new http request, its a js thing
    var xmlhttp = new XMLHttpRequest();

    // GET, file location and name, and some other propertie i forget
    xmlhttp.open("GET", "https://thejanik.000webhostapp.com/thoughts.xml", true);
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
        var date_formated = "";

        // renders the stars instead of a number
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

        // instead of stating the exact date, we'll grab todays date and do a relative statement of when the review was made
        var today = new Date();
        var reviewedDate = Date.parse(pulledData[i].getElementsByTagName("date")[0].childNodes[0].nodeValue);
        var diffTime = Math.abs(today-reviewedDate);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // if the review was made that day, day before, that week, week before that, that month, month before that, within 6 months, and if older than that, just the day
        if (diffDays <= 1) {
            date_formated = "Today";
        }
        else if (diffDays <= 2) {
            date_formated = "Yesterday";
        }
        else if (diffDays <= 7) {
            date_formated = "This Week";
        }
        else if (diffDays <= 14) {
            date_formated = "Last Week";
        }
        else if (diffDays <= 30) {
            date_formated = "This Month";
        }
        else if (diffDays <= 60) {
            date_formated = "Last Month";
        }
        else if (diffDays <= 182) {
            var monthsOld = Math.ceil(Math.abs(diffDays/30));
            date_formated = monthsOld + " Months Ago";
        }
        else {
            date_formated = pulledData[i].getElementsByTagName("date")[0].childNodes[0].nodeValue;
        }

        // lets put the things into their varibles
        image = "<div class=\"image_div\"><img class=\"image\" src=\"" + pulledData[i].getElementsByTagName("image")[0].childNodes[0].nodeValue + "\"></div>";
        title = "<p class=\"title\">" + pulledData[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</p>";
        type = "<div class=\"type_date\"><p class=\"TypeClass\">" + pulledData[i].getElementsByTagName("type")[0].childNodes[0].nodeValue.toUpperCase() + "</p><p>&nbsp · &nbsp</p>";
        date = "<p class=\"date\" value=\"" + pulledData[i].getElementsByTagName("date")[0].childNodes[0].nodeValue + "\">" + date_formated.toUpperCase() + "</p></div>";
        rating = "<div class=\"rating\" value=\"" + rating_value + "\">" + stars + "</div>";
        published = "<div class=\"published_creator\"><p class=\"published\">" + pulledData[i].getElementsByTagName("published")[0].childNodes[0].nodeValue + "</p><p>&nbsp | &nbsp</p>";
        creator = "<p>" + pulledData[i].getElementsByTagName("creator")[0].childNodes[0].nodeValue + "</p></div>";
        thought = "<p class=\"thought\">" + pulledData[i].getElementsByTagName("thought")[0].childNodes[0].nodeValue + "</p>";

        // put it all together
        loaded += "<div class=\"entry\">" + image + "<div class=\"text_div\">" + title + type + date + rating + published + creator + thought + "</div></div>";
    }
    document.getElementById("ThoughtsGoHere").innerHTML += loaded;
    // on load sort the table by latest thought
    sortThoughts();


    // putting the click detections here as some may need the loaded xml first

    // for when paragraphs are clicked and need to be expanded
    var thoughts = document.getElementsByClassName("thought");

    for (var i = 0; i < thoughts.length; i++) {
        thoughts[i].addEventListener("click", function () {
            // if the thought is already expanded nothings happens
            if (this.classList.contains("expand")) {
            }
            // if not it gets expanded
            else {
                this.className += " expand";
            }
        });
    }

    // for when buttons are clicked
    var buttons = document.getElementsByClassName("btn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";

            // based on what class is in the span, itll filter by that type by calling the  filterThoughts function
            if (this.classList.contains("sort_all")) {
                filterThoughts("all");
            }
            else if (this.classList.contains("sort_movies")) {
                filterThoughts("movie");
            }
            else if (this.classList.contains("sort_anime")) {
                filterThoughts("anime");
            }
            else if (this.classList.contains("sort_tv")) {
                filterThoughts("tv");
            }
            else if (this.classList.contains("sort_books")) {
                filterThoughts("book");
            }
            else if (this.classList.contains("sort_music")) {
                filterThoughts("music");
            }

        });
    }

}

// function that filters by the type of entry
function filterThoughts(filterBy) {
    // clear expanded thoughts (just looks better)
    clearExpanded();

    // pulls all entries
    var entries = document.getElementsByClassName("entry");

    // loops thru them all
    for (var i = 0; i < entries.length; i++) {

        // if we're filtering by "all" we need to show all
        if (filterBy == "all") {
            entries[i].style.display = "";
        }

        // if we're filtering anything else, then ...
        else {
            // gets the p element holding the type
            var type = entries[i].getElementsByClassName("TypeClass")[0];

            // if it matchs what we are filtering by it stays
            if (type.innerHTML.toString().toLowerCase() == filterBy) {
                entries[i].style.display = "";
            }
            // else it will just be gone
            else {
                entries[i].style.display = "none";
            }
        }
    }
}

// function that unexpanded currently expanded thoughts
function clearExpanded() {
    // pulls the thoughts
    var thoughts = document.getElementsByClassName("thought");

    // loops thru them
    for (var i = 0; i < thoughts.length; i++) {
        // if a thought has expand in it, it'll replace it with nothing
        if (thoughts[i].classList.contains("expand")) {
            thoughts[i].className = thoughts[i].className.replace(" expand", "");
        }
    }
}

function sortThoughts() {
    // clear expanded thoughts (just looks better)
    clearExpanded();

    // pulls the value we're soring by
    var sortValue = document.getElementById("mySort").value;

    var sortBy; // old what we're soring by
    var order; // hold sort order

    // based on the value of sort, we can make an order and sortby
    if (sortValue == "review_date") {
        sortBy = sortValue;
        order = "desc";
    }
    else if (sortValue == "rating_asc") {
        sortBy = "rating";
        order = "asc";
    }
    else if (sortValue == "rating_desc") {
        sortBy = "rating";
        order = "desc";
    }
    else if (sortValue == "date_asc") {
        sortBy = "date";
        order = "asc";
    }
    else if (sortValue == "date_desc") {
        sortBy = "date";
        order = "desc";
    }

    // some varibles we'll need
    var entries = document.getElementsByClassName("entry"); // pulls all entries
    var switching = true; // shows that we're still running through the entries
    var shouldSwitch; // this var will hold whether or not a switch between two rows needs to be made
    var entryNum; // will store what entry number we're at
    var currentEntry; // will hold the current entry plain "text"
    var nextEntry; // will hold the next entry plain "text"

    while (switching) {
        // set it that there is no switching done, this may be changed later
        switching = false;

        // run through all the entries, expect last, as at that point we wont be able to compare it to the next
        for (entryNum = 0; entryNum < entries.length - 1; entryNum++) {
            // state that there is need for switching at the moment
            shouldSwitch  = false;

            // compare current entry's whatever we're soring by and the next

            // different elements for different sorts
            // lets do rating first, its the easiest
            if (sortBy == "rating") {
                currentEntry = parseFloat(entries[entryNum].getElementsByClassName("rating")[0].getAttribute("value"));
                nextEntry = parseFloat(entries[entryNum + 1].getElementsByClassName("rating")[0].getAttribute("value"));
            }
            // if date
            else if (sortBy == "review_date") {
                currentEntry = Date.parse(entries[entryNum].getElementsByClassName("date")[0].getAttribute("value"));
                nextEntry = Date.parse(entries[entryNum + 1].getElementsByClassName("date")[0].getAttribute("value"));
            }
            else if (sortBy == "date") {
                currentEntry = entries[entryNum].getElementsByClassName("published")[0].innerHTML;
                nextEntry = entries[entryNum + 1].getElementsByClassName("published")[0].innerHTML;
            }

            // if we're doing ascending order
            if (order == "asc") {
                if (currentEntry > nextEntry) {
                    // if this is true, means we need to to place the current one above the next one
                    shouldSwitch = true;
                    break;
                }
            }
            if (order == "desc") {
                if (currentEntry < nextEntry) {
                    // if this is true, means we need to to place the current one above the next one
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            entries[entryNum].parentNode.insertBefore(entries[entryNum + 1], entries[entryNum]);
            switching = true;
        }
    }
}