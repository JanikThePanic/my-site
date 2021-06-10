import React from "react";
import { useParams } from "react-router-dom";
import SupportMe from "../../SupportMe";
import "../../../css/projects.css";

function ProjectPage() {
	// the refName is given in the url
	let { refName } = useParams();
	let loadedPage = "";

	// lets fetch the json doc
	fetch("/assets/projects/" + refName + ".json")
		.then((response) => response.json())
		.then((data) => loadPage(data))
		.catch(function (error) {
			loadedPage =
				"<h1 class='page-title'>Failed to load project.</h1><p>Sorry!<p/>";
			renderData();
		});

	// function to load the page
	function loadPage(json) {
		// i dont wanna referance project and content everytime
		let meta = json.project.meta;
		let content = json.project.content;

		//
		// lets load the meta data
		//
		loadedPage += loadMetaData(meta);

		//
		// lets load the actual page content
		// this means the headings, the imgs, the words and more
		//
		loadedPage += loadContentData(content);

		//
		// and lets write it all to the page
		//
		renderData();
	}

	function loadMetaData(meta) {
		let loadedMeta = "";

		//
		// lets start with the title
		//
		let title = meta.title;
		title = "<h1 class='page-title'>" + title;
		// if theres a version property, we gotta show that
		meta.version !== ""
			? (title += " <sup>" + meta.version + "</sup></h1>")
			: (title += "</h1>");
		// lets add this to loaded
		loadedMeta += title;

		//
		// lets add the link to github or what not
		//
		let projectLinks = "";
		// if there is both a github link and other link
		if (meta.github !== "" && meta.otherLink[0] !== "") {
			projectLinks =
				"<p style='font-style:italic;'>All files available on <a href='" +
				meta.github +
				"'target='_blank'>GitHub</a>.<br> More information available on <a href='" +
				meta.otherLink[0] +
				"'target='_blank'>" +
				meta.otherLink[1] +
				"</a>.</p>";
		}
		// if only github link
		else if (meta.github !== "") {
			projectLinks =
				"<p style='font-style:italic;'>All files available on <a href='" +
				meta.github +
				"'target='_blank'>GitHub</a>.</p>";
		}
		// if only otherlink
		else if (meta.otherLink[0] !== "") {
			projectLinks =
				"<p style='font-style:italic;'>More information available on <a href='" +
				meta.otherLink[0] +
				"'target='_blank'>" +
				meta.otherLink[1] +
				"</a>.</p>";
		}
		// lets add this to be loaded
		loadedMeta += projectLinks;

		return loadedMeta;
	}

	function loadContentData(doc) {
		// json file order of properties
		// heading
		// text
		// image
		// html
		// caption
		// ul

		// loaded content to later render
		let loadedContent = "";
		// shortcut for the images
		let imageLocation =
			process.env.PUBLIC_URL + "/assets/images/projects/" + refName + "/";
		// count of caption
		let captionCount = 1;

		// lets run thru all the content
		for (let contentIndex = 0; contentIndex < doc.length; contentIndex++) {
			// lemme just pull all the content in that content block
			let contentBlock = doc[contentIndex];

			// if the content block has a heading
			if (contentBlock.heading) {
				// add a <br> before headings for space
				// but not for the first one
				if (contentIndex !== 0) {
					loadedContent += "<br>";
				}
				loadedContent += "<h2>" + contentBlock.heading + "</h2>";
			}

			// if the content block has a body text
			if (contentBlock.text) {
				// text is a p element
				loadedContent += "<p>";
				// if the text is just a string
				if (typeof contentBlock.text === "string") {
					loadedContent += contentBlock.text;
				}
				// other wise its an object with text and links
				else {
					// lets run thru all the objects in the text
					for (const i of contentBlock.text) {
						// if its an object, it means it has a link
						if (typeof i === "object") {
							loadedContent +=
								"<a href='" +
								i.link +
								"' target='_blank' rel='noopener noreferrer'> " +
								i.text +
								"</a>";
						}
						// otherwise its just a string, and we just add it
						else {
							loadedContent += i;
						}
					}
				}
				// close that p element
				loadedContent += "</p>";
			}

			// if there is an image in the content block
			if (contentBlock.image) {
				loadedContent +=
					"<img class='normal_img' src='" +
					imageLocation +
					contentBlock.image +
					"'>";
			}

			// if there is just an html, just plug it
			if (contentBlock.html) {
				loadedContent += contentBlock.html;
			}

			// if there is a caption in the content block
			if (contentBlock.caption) {
				loadedContent +=
					"<figcaption> Figure " +
					captionCount +
					". " +
					contentBlock.caption +
					"</figcaption>";
				captionCount++;
			}

			// if there is a list to display
			if (contentBlock.ul) {
				loadedContent += "<ul>";
				loadedContent += loadUl(contentBlock.ul);
				loadedContent += "</ul>";
			}

			function loadUl(list) {
				// points to return and render
				let points = "";

				for (const point of list) {
					// start link
					points += "<li>";
					// if there is an amoung to the point
					if (point.amount) {
						points += "x" + point.amount + " ";
					}
					// if it has a link
					if (point.link) {
						points +=
							"<a href='" +
							point.link +
							"' target='_blank' rel='noopener noreferrer'>" +
							point.text +
							"</a>";
					}
					// if there is just a text
					else if (point.text) {
						points += point.text;
					}
					// if it has a list
					if (point.ul) {
						points += "<ul>";
						points += loadUl(point.ul);
						points += "</ul>";
					}
					// close the point
					points += "</li>";
				}

				// lets send these points back
				return points;
			}
		}

		return loadedContent;
	}

	// write the var to the page
	function renderData() {
		document.getElementsByClassName("ProjectGoesHere")[0].innerHTML =
			loadedPage;
	}

	return (
		<div className="page">
			<span className="ProjectGoesHere"></span>

			<SupportMe />
		</div>
	);
}

export default ProjectPage;
