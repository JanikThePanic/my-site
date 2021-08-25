import React from "react";
import ImageSlider from "../../ImageSlider/ImageSlider";
import "../../../css/work.css";

export default function LargeDisplay(props) {
	// const for easy referance
	// work display object passed from page compoent
	const work = props.displayObject;

	// handels clicking of block
	function handleClick(event) {
		let clicked = event.target.className;
		// if click is on the background or close button, we close
		if (clicked === "largeDisplay" || clicked === "closeButton") {
			props.close();
		}
	}

	return (
		// whole screen kinda block, it just blurs with css and when click closes
		<div className="largeDisplay" onClick={handleClick}>
			{/* once/if work is loaded */}
			{work ? (
				/* actual work display content */
				<div className="largeDisplayBlock">
					{/* close button at top right */}
					<div className="closeButton">&times;</div>
					{/* content of work */}
					{/* title on top */}
					<div className="title">{work.title}</div>
					{/* image slider */}
					<div className="images">
						<ImageSlider title={work.title} images={work.images} />
					</div>
					Test here
				</div>
			) : (
				/* failed to load */
				<div className="largeDisplayBlock">
					<div className="closeButton">&times;</div>
					<div className="title">Issues Loading Work</div>
				</div>
			)}
		</div>
	);
}
