import React from "react";
import { Helmet } from "react-helmet";
import "../../css/blog.css";

function blog() {
	return (
		<div className="page">
			<Helmet>
				<title>blog - janik</title>
			</Helmet>
			<h1 className="page-title">blog</h1>

			<div className="blog-page">
				<ul id="BlogGoesHere" onLoad={loadXML()}>
					{/* lets put the entries for the blog here */}
				</ul>
			</div>
		</div>
	);
}

// load xml file and send requests and stuff
function loadXML() {
	// make new http request, its a js thing
	var xmlhttp = new XMLHttpRequest();

	// GET, file location and name, and some other propertie i forget
	xmlhttp.open("GET", "https://thejanik.000webhostapp.com/blog.xml", true);
	xmlhttp.send();

	// when there is a change in the request's state, itll check all is green and run the table loading function
	xmlhttp.onreadystatechange = function () {
		// all green
		if (this.readyState === 4 && this.status === 200) {
			loadEntries(this);
		}
		// cant find the xml
		if (this.status === 404) {
			console.log("couldn't find the xml file");
		}
	};
}

// lets do some hardwire code (bad) to put this into JSX elements
function loadEntries(xml) {
	var file = xml.responseXML;
	var loaded = "";
	// pulls all elements of xml with "entry"
	var pulledEntries = file.getElementsByTagName("entry");

	// lets run thru all the entries
	for (let i = 0; i < pulledEntries.length; i++) {
		var headLine = "";
		var date = "";
		var body = "";

		headLine =
			'<span class="blog-title">' +
			pulledEntries[i].getElementsByTagName("title")[0].childNodes[0]
				.nodeValue +
			"</span>";
		date =
			'<p class = "blog-date">' +
			pulledEntries[i].getElementsByTagName("date")[0].childNodes[0]
				.nodeValue +
			"</p>";
		body =
			'<p class = "blog-body">' +
			pulledEntries[i].getElementsByTagName("content")[0].childNodes[0]
				.wholeText +
			"</p>";

		loaded = "<li>" + headLine + date + body + "</li>";
		document.getElementById("BlogGoesHere").innerHTML += loaded;
	}
}

export default blog;
