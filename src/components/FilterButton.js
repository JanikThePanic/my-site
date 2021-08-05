import React, { Fragment, useState } from "react";
import "../css/filter&sort.css";

function FilterButton(props) {
	// holds weather or not button is hovered
	const [hovered, setHovered] = useState(false);

	// each button has a different color
	// by default, the button should have a colored border and text
	const defualtFilterButtonStyles = {
		borderColor: "var(--color_" + props.color + ")",
		color: "var(--color_" + props.color + ")",
		fill: "var(--color_" + props.color + ")",
	};
	// when hovered or selected, color fills and text is plain
	const hoveredFilterButtonStyles = {
		backgroundColor: "var(--color_" + props.color + ")",
		borderColor: "var(--color_" + props.color + ")",
		fill: "var(--fill)",
		color: "var(--fill)",
	};

	// hold the svg paths we'll need for this button
	const [buttonSVG, setButtonSVG] = useState("");
	// lets fetch that icon
	if (props.icon) {
		fetch(
			"https://janik.codes/dependencies/svg/filter_icon_" +
				props.icon +
				".html"
		)
			.then(function (response) {
				return response.text();
			})
			.then(function (svg) {
				setButtonSVG(svg);
			});
	}

	return (
		<span
			onClick={props.onClick}
			className="filterButton"
			// style based on weather we're hovered or not
			style={
				hovered || props.activeButton === props.text
					? hoveredFilterButtonStyles
					: defualtFilterButtonStyles
			}
			// change hovered state
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{/* insert svg we are holding as the icon */}
			{/* if there is one */}
			{props.icon ? (
				<Fragment>
					<svg
						className="filterIcon"
						// the book svg is a different size -_-
						viewBox={
							props.icon !== "book"
								? "-42 164 514 514"
								: "-202 164 514 514"
						}
						dangerouslySetInnerHTML={{ __html: buttonSVG }}
					></svg>

					<p>
						{/* display the buttons place holder text */}
						<span>&nbsp;</span>
						{props.text}
					</p>
				</Fragment>
			) : (
				// if theres no icon, just show the text with no space
				<p>{props.text}</p>
			)}
		</span>
	);
}

export default FilterButton;
