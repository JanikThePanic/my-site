import React from "react";
import { Link } from "react-router-dom";
import "../../../css/projects.css";

function ProjectItem(props) {
	// lets take that refName pls
	let refLink = "/projects/" + props.refName;

	// vars for you know, title and description
	let title;
	let description;

	// lets fetch the json doc using the referance name (refName)
	// catch error, and just say sorry :(
	fetch("/assets/projects/" + props.refName + ".json")
		.then((response) => response.json())
		.then((data) => pullMetaData(data))
		.catch(function (error) {
			title = "Sorry!";
			description = " — Failed to load project.";
			renderData();
		});

	// set up varible for link
	let link;
	// i dont always finish writing ABOUT projects in time
	// so if i didnt finish imma just redirect to github or the project
	props.link ? (link = props.link) : (link = refLink);

	function pullMetaData(json) {
		let meta = json.project.meta;
		title = meta.title;
		description = " — " + meta.description;
		// if theres a version, i want it shown with the title
		if (meta.version !== "") {
			title += " " + meta.version;
		}
		renderData();
	}

	function renderData() {
		let listItemId = "project-" + props.refName;
		document
			.getElementById(listItemId)
			.getElementsByClassName("project-title")[0].innerHTML = title;
		document
			.getElementById(listItemId)
			.getElementsByClassName("project-description")[0].innerHTML =
			description;
	}

	return (
		<li id={"project-" + props.refName}>
			{props.link ? (
				<a href={link} target="_blank" rel="noopener noreferrer">
					<span className="project-title"></span>
				</a>
			) : (
				<Link to={link}>
					<span className="project-title"></span>
				</Link>
			)}
			<span className="project-description"></span>
		</li>
	);
}

export default ProjectItem;
