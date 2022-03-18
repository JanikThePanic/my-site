import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

// opens and closes the nav on mobile
function openNav() {
	document.getElementById("mySidenav").style.height = "100%";
	document.body.classList.add("noscroll");
}

function closeNav() {
	document.getElementById("mySidenav").style.height = "0";
	document.body.classList.remove("noscroll");
}

// on mobile, when you click, menu should be gone
function checkForMobile() {
	if (window.innerWidth < 600) {
		closeNav();
	}
}

function navbar(props) {
	return (
		<div>
			<div id="mySidenav" className="nav" onClick={checkForMobile}>
				<div className="navList">
					<Link to="/">home</Link>
					<Link to="/projects">projects</Link>
					<Link to="/work">work</Link>
					<Link to="/blog">blog</Link>
					{/* <Link to="/thoughts">Thoughts</Link> */}
					<a
						href={
							process.env.PUBLIC_URL + "/dependencies/Resume.pdf"
						}
					>
						resume
					</a>
					<Link to="/contact">contact</Link>
					<Link className="closebtn" onClick={closeNav}>
						&times;
					</Link>

					<br />

					{/* button to switch themes */}
					<Link className="theme-button" onClick={props.toggleTheme}>
						theme
					</Link>
				</div>
			</div>

			{/* little menu button for mobile */}
			<span onClick={openNav}>
				<img
					className="openbtn"
					src={
						process.env.PUBLIC_URL +
						"/iconfinder_menu-alt_134216.svg"
					}
					alt=""
				/>
			</span>
			<div className="btnbox"></div>
		</div>
	);
}

export default navbar;
