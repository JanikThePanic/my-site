import React from "react";
import { Helmet } from "react-helmet";
import ProjectItem from "./ProjectItem";
import SupportMe from "../../SupportMe";
import "../../../css/projects.css";

function projects() {
	return (
		<div className="page">
			<Helmet>
				<title>Projects | Jahangir Abdullayev</title>
			</Helmet>

			<h1 className="page-title">projects</h1>

			<ul className="project-list">
				<ProjectItem refName="rc-ultimate" />
				<ProjectItem refName="macrobox_v2" />
				<ProjectItem refName="macrobox_v1" />
				<ProjectItem refName="frc2020" />
				<ProjectItem
					refName="the-repository"
					link="https://janik.codes/the-repository/"
				/>
				<ProjectItem refName="frc2019" />
			</ul>

			<SupportMe />
		</div>
	);
}

export default projects;
