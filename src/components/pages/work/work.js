import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import DisplayBlock from "./DisplayBlock";
import FilterButton from "../../FilterButton";
import "../../../css/work.css";
import "../../../css/filter&sort.css";

function work() {
	// state holding filter properties
	const [filterTerm, setFilterTerm] = useState("");
	// state holding work display json data
	const [workDisplay, setWorkDisplay] = useState();
	const [activeButton, setActiveButton] = useState("All");

	// fetch the json file with all the work displays
	useEffect(() => {
		fetch("https://janik.codes/dependencies/work/000_work.json")
			.then((response) => response.json())
			.then((json) => setWorkDisplay(json));
	}, []);

	// contains what buttons we want on the page
	// array order:
	// TEXT, COLOR, FILTER_TAG , SVG
	// the all button filter is blank as we want everything to show
	const neededFilterButtons = [
		["All", "all", "", "all"],
		["cringe", "music", "ew", ""],
		["liyam", "anime", "epic", ""],
		["lmao", "anime", "cool", ""],
		["bad", "anime", "anime", ""],
		["hey man", "anime", "anime", ""],
	];

	// handels when a filter button is pressed
	function handleFilterButtonClick(buttonPressed, buttonFilter) {
		// if button is pressed it becomes active
		setActiveButton(buttonPressed);
		// sets the filtering term to whatever the buttons filtering is
		setFilterTerm(buttonFilter.toLowerCase());
	}

	return (
		<div className="work-page">
			<Helmet>
				<title>Work | Jahangir Abdullayev</title>
			</Helmet>
			<h1 className="page-title">Work</h1>

			<br />

			{/* for sorting thru work display */}
			<div className="filterAndSortBlock">
				{/* the buttons for filtering */}
				<div className="filterButtons">
					{neededFilterButtons.map((button) => (
						<FilterButton
							activeButton={activeButton}
							key={button[0]}
							text={button[0]}
							color={button[1]}
							icon={button[3]}
							onClick={() => {
								handleFilterButtonClick(button[0], button[2]);
							}}
						/>
					))}
				</div>

				{/* the sort drop down */}
				<div className="sortMenu">
					{/* if i want a sort menu later */}
					{/* <label>
						Sort by: <span>&nbsp;</span>
					</label>
					<select className="sortDropdown" defultvalue="date_asc">
						<option value="date_asc">Newest</option>
						<option value="date_desc">Oldest</option>
						<option value="coolness">Coolness &#128526;</option>
					</select> */}
				</div>
			</div>

			<br />

			{/* container for all the blocks */}
			<div className="displayParent">
				{/* map all the json work displays to the componets */}
				{/* but before it maps, it filters the objects 
				based on the filter. anything that has the filter passes*/}
				{workDisplay ? (
					workDisplay.work
						.filter((display) => {
							if (filterTerm === "") {
								return display;
							} else if (
								display.tags.some(
									(tag) => tag.toLowerCase() === filterTerm
								)
							) {
								return display;
							} else {
								// if the display doesnt have the filter, dont pass it
								return null;
							}
						})
						.map((display, key) => {
							return (
								<DisplayBlock
									title={display.title}
									key={key}
									count={Object.keys(display.images).length}
									thumbnail={display.images[0]}
								/>
							);
						})
				) : (
					// if there is an issue loading the json
					<p>Issues loading work page. Please contact admin.</p>
				)}
			</div>
		</div>
	);
}

export default work;
