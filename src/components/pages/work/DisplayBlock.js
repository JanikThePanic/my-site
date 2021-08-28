import React from "react";
import "../../../css/work.css";

export default function DisplayBlock(props) {
	// check if the thumbnails is external
	let localImg = null;
	if (!props.thumbnail.includes("http")) {
		localImg = "https://janik.codes/dependencies/work/" + props.thumbnail;
	}

	return (
		// display block div
		<div className="displayBlock" onClick={props.onClick}>
			{/* the thumnail, aka the first image in the imgs array */}
			<img
				alt={props.title}
				src={localImg ? localImg : props.thumbnail}
			/>

			{/* div for the overlay hover gradient */}
			<div className="displayOverlay"></div>

			{/* a count of how many imgs are in the display */}
			{/* if 1, dont show, if more than 9, show 9+ */}
			{props.count > 1 ? (
				<div className="displayCount">
					{props.count > 9 ? "9+" : props.count}
				</div>
			) : null}

			{/* the div for the title that shows when hovered */}
			<div className="displayTitle">{props.title}</div>
		</div>
	);
}
