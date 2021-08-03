import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import SupportMe from "../../SupportMe";
import "../../../css/projects.css";
import { Fragment } from "react/cjs/react.production.min";

function ProjectPage() {
	// the refName is given in the url
	let { refName } = useParams();
	// will use for rendering and holding json
	const [projectContent, setProjectContent] = useState();
	// relative link for images
	let imageLocation =
		process.env.PUBLIC_URL + "/assets/images/projects/" + refName + "/";
	// caption counter used to count captions
	let captionCount = 0;

	// lets fetch that json
	useEffect(() => {
		fetch("/assets/projects/" + refName + ".json")
			.then((response) => response.json())
			.then((json) => setProjectContent(json));
	}, []);

	//
	// function will load the page, taking the json and setting it to JSX
	//
	function loadProjectPage() {
		// easier to referance
		let meta = projectContent.project.meta;

		return (
			<div className="page">
				<Helmet>
					<title>
						{meta.title} {meta.version} | Jahangir Abdullayev
					</title>
				</Helmet>

				{/* show title */}
				<h1 className="page-title">
					{meta.title}
					{/* show version, if one is present */}
					{meta.version ? (
						<Fragment>
							{" "}
							<sup> {meta.version} </sup>
						</Fragment>
					) : null}
				</h1>

				{/* add github link */}
				{meta.github ? (
					<p className="meta_link">
						All files available on <a href={meta.github}>GitHub</a>.
					</p>
				) : null}
				{/* add other project link */}
				{meta.otherLink[0] ? (
					<p className="meta_link">
						More information available on{" "}
						<a href={meta.otherLink[0]}>{meta.otherLink[1]}</a>.
					</p>
				) : null}

				{/* time for the actual content */}
				{/* 
				// json file order of properties
				// heading
				// text
				// image
				// external images
				// cad
				// caption
				// ul
				*/}

				{
					// lets map and run thru every index of the content array
					projectContent.project.content.map((content, index) => {
						// if theres an image we need its full position
						let fullImageLocation;
						if (content.image) {
							fullImageLocation = imageLocation + content.image;
						}
						// if theres a caption, we need to add on to make it count
						if (content.caption) {
							captionCount++;
						}

						return (
							<Fragment>
								{/* if the current content index has a heading */}
								{/* we also want a br but not in the first */}
								{content.heading && index !== 0 ? <br /> : null}
								{content.heading ? (
									<Fragment>
										{" "}
										<h2>{content.heading}</h2>{" "}
									</Fragment>
								) : null}

								{/* text */}
								{/* and if text is just a string or has links */}
								{content.text &&
								typeof content.text === "string" ? (
									<p>{content.text}</p>
								) : null}
								{/* if its text and is an object, it means there are links */}
								{content.text &&
								typeof content.text !== "string" ? (
									<p>
										{content.text.map((i, index) => {
											return typeof i === "string" ? (
												<Fragment>{i}</Fragment>
											) : (
												<a
													href={i.link}
													target="_blank"
													rel="noopener noreferrer"
												>
													{" "}
													{i.text}
												</a>
											);
										})}
									</p>
								) : null}

								{/* next on the list we have images */}
								{content.image ? (
									<img
										alt=""
										className="normal_img"
										src={fullImageLocation}
									/>
								) : null}

								{/* or if the images are not on my domain */}
								{content.eximage ? (
									<img
										alt=""
										className="normal_img"
										src={content.eximage}
									/>
								) : null}

								{/* cad for designs */}
								{content.cad ? (
									<iframe
										scrolling="no"
										class="normal_cad"
										frameborder="0"
										allowfullscreen="true"
										title={meta.title}
										src={content.cad}
									/>
								) : null}

								{/* with great images, comes great captions */}
								{content.caption ? (
									<figcaption>
										Figure {captionCount}. {content.caption}
									</figcaption>
								) : null}

								{/* now, recursive lists, as in theory, a list can be infinite */}
								{content.ul ? createList(content.ul) : null}
							</Fragment>
						);
					})
				}

				<SupportMe />
			</div>
		);
	}

	// function that creates a list with JSX
	function createList(list) {
		return (
			<ul>
				{/* map all points of list */}
				{list.map((i, key) => {
					return (
						// create point
						<li>
							{/* if there is an amount */}
							{i.amount ? "x" + i.amount + " " : null}

							{/* if there is a link */}
							{i.link ? (
								<a
									href={i.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{i.text}
								</a>
							) : // or if there is just text
							i.text ? (
								i.text
							) : null}

							{/* if theres a list inside a list */}
							{i.ul ? createList(i.ul) : null}
						</li>
					);
				})}
			</ul>
		);
	}

	// if for whatever the loadingpage fucntion fails
	// the "failed to load" will be there
	return projectContent ? (
		loadProjectPage()
	) : (
		<div className="page">
			<h1 className="page-title">Failed to load project.</h1>
			<p>Sorry!</p>

			<SupportMe />
		</div>
	);
}

export default ProjectPage;
