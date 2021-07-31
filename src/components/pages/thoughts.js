import React from "react";
import { Helmet } from "react-helmet";
import "../../css/thoughts.css";

function thoughts() {
	return (
		<div className="thoughts-page">
			<Helmet>
				<title>Thoughts | Jahangir Abdullayev</title>
			</Helmet>

			<h1 className="page-title">Thoughts</h1>

			<br />

			{/* thoughts page bs */}

			<div className="sorting">
				{/* <!-- buttons for the catagorys --> */}
				<div className="buttons">
					<span className="sort_all btn active">
						<svg className="sort_icons" viewBox="-42 164 514 514">
							<path
								d="M417.7,163.9H12.3c-29.4,0-53.3,24-53.3,53.4v406.1c0,29.5,23.9,53.4,53.3,53.4h405.3c29.4,0,53.3-24,53.3-53.4V217.3
              C471,187.9,447.1,163.9,417.7,163.9z M428.3,217.3V399h-192V206.6h181.3C423.6,206.6,428.3,211.4,428.3,217.3z M12.3,206.6h181.3
              V399H1.7V217.3C1.7,211.4,6.4,206.6,12.3,206.6z M1.7,623.5V441.8h192v192.4H12.3C6.4,634.1,1.7,629.3,1.7,623.5z M417.7,634.1
              H236.3V441.8h192v181.7C428.3,629.3,423.6,634.1,417.7,634.1z"
							/>
						</svg>
						<p>
							<span>&nbsp;</span>All
						</p>
					</span>

					<span className="sort_movies btn">
						<svg className="sort_icons" viewBox="-40 164 514 514">
							<path
								id="XMLID_521_"
								d="M450.7,163.7h-93.5H76.8h-93.5c-12.9,0-23.4,10.5-23.4,23.4v93.5v93.5v93.5v93.5v93.5
              c0,12.9,10.5,23.4,23.4,23.4h93.5h280.4h93.5c12.9,0,23.4-10.5,23.4-23.4v-93.5v-93.5v-93.5v-93.5v-93.5
              C474.1,174.2,463.6,163.7,450.7,163.7z M53.6,631H6.9v-46.7h46.7V631z M53.6,537.5H6.9v-46.7h46.7V537.5z M53.6,444.1H6.9v-46.7
              h46.7V444.1z M53.6,350.6H6.9v-46.7h46.7V350.6z M53.6,257.1H6.9v-46.7h46.7V257.1z M333.9,467.4v93.5V631H100.3v-70.1v-93.5V444
              h233.6V467.4z M333.9,280.5V374v23.4H100.3V374v-93.5v-70.1h233.6V280.5z M427.4,631h-46.7v-46.7h46.7V631z M427.4,537.5h-46.7
              v-46.7h46.7V537.5z M427.4,444.1h-46.7v-46.7h46.7V444.1z M427.4,350.6h-46.7v-46.7h46.7V350.6z M427.4,257.1h-46.7v-46.7h46.7
              V257.1z"
							/>
						</svg>
						<p>
							<span>&nbsp;</span>Movies
						</p>
					</span>

					<span className="sort_anime btn">
						<svg className="sort_icons" viewBox="-40 164 514 514">
							<path
								className="st0"
								d="M473,542.4v-30.2h-92v-55.5c0-57-28.8-107.4-72.5-137.3V270h30V255c0-47.8-33.3-80-34.7-81.3l-10.3-9.7
            l-10.3,9.7c-1.4,1.3-34.7,33.5-34.7,81.3V270h30v33.3c-19.3-7.9-40.4-12.4-62.5-12.4c-9.3,0-18.5,0.8-27.5,2.3V270h30V255
            c0-47.8-33.3-80-34.7-81.3l-10.3-9.7l-10.3,9.7c-1.4,1.3-34.7,33.5-34.7,81.3V270h30v31.3c-47.3,17.7-85,56.6-100.3,106.8
            c-19.3,10.4-31.8,30.9-31.8,53.3v9.7c-40.6,24.5-65.4,68.2-65.4,116.3v90.5h30v-30c0-58.2,47.1-105.5,105-105.5s105,47.3,105,105.5
            v30h30v-30c0-74.8-60.6-135.7-135-135.7c-40.1,0-76.1,17.6-100.8,45.5c7.9-27.5,26.8-50.9,53-64.4l8.2-4.2v-27.8
            c0-12.6,7.9-23.9,19.6-28.2l7.4-2.7l2-7.6C100.8,362.8,154.4,321,216.1,321c74.4,0,135,60.9,135,135.7v55.5h-90v30.2h90v30.2h-90
            v30.2h90v75.2h30v-75.2h92v-30.2h-92v-30.2H473V542.4z M160.1,239.9c2.7-12.9,8.4-23.7,13.5-31.5c5.1,7.6,10.8,18.5,13.4,31.5H160.1
            z M280,239.9c2.7-12.9,8.4-23.7,13.5-31.5c5.1,7.6,10.8,18.5,13.4,31.5H280z"
							/>
							<path
								className="st0"
								d="M185.9,373.8c-24.8,0-45,20.3-45,45.2c0,24.9,20.2,45.2,45,45.2s45-20.3,45-45.2
            C230.9,394.1,210.8,373.8,185.9,373.8z M185.9,434.1c-8.3,0-15-6.7-15-15.1s6.7-15.1,15-15.1s15,6.7,15,15.1
            S194.3,434.1,185.9,434.1z"
							/>
							<rect
								x="80.9"
								y="632.9"
								className="st0"
								width="30"
								height="30.2"
							/>
							<rect
								x="20.9"
								y="632.9"
								className="st0"
								width="30"
								height="30.2"
							/>
							<rect
								x="140.9"
								y="632.9"
								className="st0"
								width="30"
								height="30.2"
							/>
						</svg>
						<p>
							<span>&nbsp;</span>Anime
						</p>
					</span>

					<span className="sort_tv btn">
						<svg className="sort_icons" viewBox="-40 164 514 514">
							<path
								d="M396.3,341.3H38.1c-12.1,0.2-21.8,10-21.8,22.1v247.1c0,12.2,9.9,22.1,22.1,22.1h357.9c12.2,0,22.1-9.9,22.1-22.1V363.4
              C418.4,351.2,408.5,341.3,396.3,341.3z M395.9,610H38.2V363.4h358L395.9,610z"
							/>
							<path
								d="M451.8,296.3H241.9l101.7-112.6c4.9-3.6,5.9-10.5,2.3-15.4c-3.6-4.9-10.6-5.9-15.5-2.3c-1.1,0.8-2,1.8-2.7,2.9L217.2,290.3
              L106.7,169c-3.8-4.8-10.8-5.5-15.5-1.7c-4.8,3.8-5.5,10.8-1.7,15.5c0.3,0.3,0.6,0.7,0.9,1L192,296.3H-17.9
              c-12.2,0-22.1,9.9-22.1,22.1v337.4c0,12.2,9.9,22.1,22.1,22.1h469.8c12.2,0,22.1-9.9,22.1-22.1V318
              C473.8,306,463.9,296.3,451.8,296.3z M451.8,655.5H-16.8V318h233.7h1h1h233.4L451.8,655.5z"
							/>
						</svg>
						<p>
							<span>&nbsp;</span>TV
						</p>
					</span>

					<span className="sort_books btn">
						<svg className="sort_icons" viewBox="-202 164 514 514">
							<path
								d="M216.8,164h-44.3v149.8c0,10.5-10.6,15.7-18.9,2.5l-29.2-46.8l-29.2,46.8c-8.3,13.2-18.9,8-18.9-2.5V164H-72
                c-35.9,0.1-64.9,29.2-64.9,65.1v384.1c0.1,35.8,29.1,64.8,64.9,64.9h288.9c7.9,0,15.5-3.2,21-8.8c5.6-5.6,8.8-13.1,8.8-21V193.9
                C246.6,177.4,233.3,164.1,216.8,164z M222.3,600.9l-281.9,0.4c-6.1,0.4-11,5.3-11.5,11.5c-0.5,6.8,4.7,12.7,11.5,13.2h281.9
                l-0.1,22.7c0,1.4-0.5,2.7-1.5,3.6c-1,0.9-2.3,1.5-3.6,1.5H-72c-22.2,0-40.2-18-40.2-40.2s18-40.2,40.2-40.2h289.2
                c2.8,0,5.1,2.3,5.1,5.1V600.9z"
							/>
						</svg>
						<p>
							<span>&nbsp;</span>Books
						</p>
					</span>

					<span className="sort_music btn">
						<svg className="sort_icons" viewBox="-40 164 514 514">
							<path
								d="M467.9,168.5c-3.9-3.5-9.1-5.1-14.3-4.6l-330.4,36.8c-9.3,1-16.3,8.9-16.3,18.2V546c-16.6-9.9-35.7-15.1-55.1-15.1
            c-50.6,0-91.8,32.9-91.8,73.4s41.2,73.6,91.8,73.6s91.8-32.9,91.8-73.4V327.2l293.7-32.7v214.8c-16.7-9.9-35.7-15.1-55.1-15
            c-50.6,0-91.8,32.9-91.8,73.4s41.2,73.4,91.8,73.4c50.6,0,91.8-32.9,91.8-73.4V182.2C474,177,471.8,172,467.9,168.5z M51.8,641.1
            c-29.8,0-55.1-16.8-55.1-36.7s25.2-36.7,55.1-36.7s55.1,16.8,55.1,36.7S81.7,641.1,51.8,641.1z M382.2,604.4
            c-29.8,0-55.1-16.8-55.1-36.7s25.2-36.7,55.1-36.7c29.9,0,55.1,16.8,55.1,36.7S412.1,604.4,382.2,604.4z M437.3,257.6l-293.7,32.6
            v-54.8l293.7-32.7V257.6z"
							/>
						</svg>
						<p>
							<span>&nbsp;</span>Music
						</p>
					</span>
				</div>

				{/* <!-- the dropdown for sorting --> */}
				<div className="sort">
					<label>
						Sort by: <span>&nbsp;</span>
					</label>
					{/* add this to onChange */}
					<select
						id="mySort"
						defultvalue="review_date"
						onChange={sortThoughts}
					>
						<option value="review_date">Review Date</option>
						<option value="rating_desc">Highest Rating</option>
						<option value="rating_asc">Lowest Rating</option>
						<option value="date_asc">Newest</option>
						<option value="date_desc">Oldest</option>
					</select>
				</div>
			</div>

			<br />

			{/* <!-- will drop xml thoughts into here --> */}
			<div id="ThoughtsGoHere" onLoad={loadXML()}></div>
		</div>
	);
}

// load xml file and send requests and stuff
function loadXML() {
	// make new http request, its a js thing
	var xmlhttp = new XMLHttpRequest();

	// GET, file location and name, and some other propertie i forget
	xmlhttp.open(
		"GET",
		"https://thejanik.000webhostapp.com/thoughts.xml",
		true
	);
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

// function that loops through the data and spins it into the html. required the "this" from the request made above
function loadEntries(xml) {
	// clear existing entries
	document.getElementById("ThoughtsGoHere").innerHTML = "";

	var file = xml.responseXML;
	var loaded = "";
	var pulledData = file.getElementsByTagName("entry");

	// vars holding star svgs
	var star_full =
		'<svg version="1.1" viewBox="-44 -44 600 600" class="stars"><path class="star full" d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z" /></svg>';
	var star_half =
		'<svg version="1.1" viewBox="-44 -44 600 600" class="stars"><defs><clipPath id="cut-off-right"><rect x="-44" y="0" width="50%" height="100%" /></clipPath></defs><path class="star empty" d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z" /><path class="star full" d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z" clip-path="url(#cut-off-right)" /></svg>';
	var star_empty =
		'<svg version="1.1" viewBox="-44 -44 600 600" class="stars"><path class="star empty" d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.63l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955C511.56,208.649,513.033,202.688,511.267,197.258z" /></svg>';

	// loops through all <resource>'s and addes them to the great table varible
	for (let i = 0; i < pulledData.length; i++) {
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
		var rating_value = parseFloat(
			pulledData[i].getElementsByTagName("rating")[0].childNodes[0]
				.nodeValue
		);
		var rating_temp = rating_value;
		var date_formated = "";

		// renders the stars instead of a number
		while (star_count < 5) {
			if (rating_temp >= 1) {
				stars += star_full;
				star_count++;
				rating_temp += -1;
			} else if (rating_temp >= 0.5) {
				stars += star_half;
				star_count++;
				rating_temp += -0.5;
			} else {
				stars += star_empty;
				star_count++;
			}
		}

		// instead of stating the exact date, we'll grab todays date and do a relative statement of when the review was made
		var today = new Date();
		var reviewedDate = Date.parse(
			pulledData[i].getElementsByTagName("date")[0].childNodes[0]
				.nodeValue
		);
		var diffTime = Math.abs(today - reviewedDate);
		var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		// if the review was made that day, day before, that week, week before that, that month, month before that, within 6 months, and if older than that, just the day
		if (diffDays <= 1) {
			date_formated = "Today";
		} else if (diffDays <= 2) {
			date_formated = "Yesterday";
		} else if (diffDays <= 7) {
			date_formated = "This Week";
		} else if (diffDays <= 14) {
			date_formated = "Last Week";
		} else if (diffDays <= 30) {
			date_formated = "This Month";
		} else if (diffDays <= 60) {
			date_formated = "Last Month";
		} else if (diffDays <= 182) {
			var monthsOld = Math.ceil(Math.abs(diffDays / 30));
			date_formated = monthsOld + " Months Ago";
		} else {
			date_formated =
				pulledData[i].getElementsByTagName("date")[0].childNodes[0]
					.nodeValue;
		}

		// lets put the things into their varibles
		image =
			'<div class="image_div"><img class="image" src="' +
			pulledData[i].getElementsByTagName("image")[0].childNodes[0]
				.nodeValue +
			'"></div>';
		title =
			'<p class="title">' +
			pulledData[i].getElementsByTagName("title")[0].childNodes[0]
				.nodeValue +
			"</p>";
		type =
			'<div class="type_date"><p class="TypeClass">' +
			pulledData[i]
				.getElementsByTagName("type")[0]
				.childNodes[0].nodeValue.toUpperCase() +
			"</p><p>&nbsp · &nbsp</p>";
		date =
			'<p class="date" value="' +
			pulledData[i].getElementsByTagName("date")[0].childNodes[0]
				.nodeValue +
			'">' +
			date_formated.toUpperCase() +
			"</p></div>";
		rating =
			'<div class="rating" value="' +
			rating_value +
			'">' +
			stars +
			"</div>";
		published =
			'<div class="published_creator"><p class="published">' +
			pulledData[i].getElementsByTagName("published")[0].childNodes[0]
				.nodeValue +
			"</p><p>&nbsp | &nbsp</p>";
		creator =
			"<p>" +
			pulledData[i].getElementsByTagName("creator")[0].childNodes[0]
				.nodeValue +
			"</p></div>";
		thought =
			'<p class="thought">' +
			pulledData[i].getElementsByTagName("thought")[0].childNodes[0]
				.nodeValue +
			"</p>";

		// put it all together
		loaded +=
			'<div class="entry">' +
			image +
			'<div class="text_div">' +
			title +
			type +
			date +
			rating +
			published +
			creator +
			thought +
			"</div></div>";
	}
	document.getElementById("ThoughtsGoHere").innerHTML += loaded;
	// on load sort the table by latest thought
	sortThoughts();

	// putting the click detections here as some may need the loaded xml first

	// for when paragraphs are clicked and need to be expanded
	var thoughts = document.getElementsByClassName("thought");

	for (let i = 0; i < thoughts.length; i++) {
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

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";

			// based on what class is in the span, itll filter by that type by calling the  filterThoughts function
			if (this.classList.contains("sort_all")) {
				filterThoughts("all");
			} else if (this.classList.contains("sort_movies")) {
				filterThoughts("movie");
			} else if (this.classList.contains("sort_anime")) {
				filterThoughts("anime");
			} else if (this.classList.contains("sort_tv")) {
				filterThoughts("tv");
			} else if (this.classList.contains("sort_books")) {
				filterThoughts("book");
			} else if (this.classList.contains("sort_music")) {
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
	for (let i = 0; i < entries.length; i++) {
		// if we're filtering by "all" we need to show all
		if (filterBy === "all") {
			entries[i].style.display = "";
		}

		// if we're filtering anything else, then ...
		else {
			// gets the p element holding the type
			var type = entries[i].getElementsByClassName("TypeClass")[0];

			// if it matchs what we are filtering by it stays
			if (type.innerHTML.toString().toLowerCase() === filterBy) {
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
	for (let i = 0; i < thoughts.length; i++) {
		// if a thought has expand in it, it'll replace it with nothing
		if (thoughts[i].classList.contains("expand")) {
			thoughts[i].className = thoughts[i].className.replace(
				" expand",
				""
			);
		}
	}
}

function sortThoughts() {
	// clear expanded thoughts (just looks better)
	clearExpanded();

	var sortValue = document.getElementById("mySort").value;
	var sortBy; // old what we're soring by
	var order; // hold sort order

	// based on the value of sort, we can make an order and sortby
	if (sortValue === "review_date") {
		sortBy = sortValue;
		order = "desc";
	} else if (sortValue === "rating_asc") {
		sortBy = "rating";
		order = "asc";
	} else if (sortValue === "rating_desc") {
		sortBy = "rating";
		order = "desc";
	} else if (sortValue === "date_desc") {
		sortBy = "date";
		order = "asc";
	} else if (sortValue === "date_asc") {
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
			shouldSwitch = false;

			// compare current entry's whatever we're soring by and the next

			// different elements for different sorts
			// lets do rating first, its the easiest
			if (sortBy === "rating") {
				currentEntry = parseFloat(
					entries[entryNum]
						.getElementsByClassName("rating")[0]
						.getAttribute("value")
				);
				nextEntry = parseFloat(
					entries[entryNum + 1]
						.getElementsByClassName("rating")[0]
						.getAttribute("value")
				);
			}
			// if date
			else if (sortBy === "review_date") {
				currentEntry = Date.parse(
					entries[entryNum]
						.getElementsByClassName("date")[0]
						.getAttribute("value")
				);
				nextEntry = Date.parse(
					entries[entryNum + 1]
						.getElementsByClassName("date")[0]
						.getAttribute("value")
				);
			} else if (sortBy === "date") {
				currentEntry =
					entries[entryNum].getElementsByClassName("published")[0]
						.innerHTML;
				nextEntry =
					entries[entryNum + 1].getElementsByClassName("published")[0]
						.innerHTML;
			}

			// if we're doing ascending order
			if (order === "asc") {
				if (currentEntry > nextEntry) {
					// if this is true, means we need to to place the current one above the next one
					shouldSwitch = true;
					break;
				}
			}
			if (order === "desc") {
				if (currentEntry < nextEntry) {
					// if this is true, means we need to to place the current one above the next one
					shouldSwitch = true;
					break;
				}
			}
		}

		if (shouldSwitch) {
			entries[entryNum].parentNode.insertBefore(
				entries[entryNum + 1],
				entries[entryNum]
			);
			switching = true;
		}
	}
}

export default thoughts;
