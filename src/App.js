import React, { Fragment, useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
// navbar
import Navbar from "./components/Navbar";
// all the pages needed
import home from "./components/pages/home";
import projects from "./components/pages/projects/projects";
import ProjectPage from "./components/pages/projects/ProjectPage";
import work from "./components/pages/work";
import blog from "./components/pages/blog";
import thoughts from "./components/pages/thoughts";
import contact from "./components/pages/contact";
import NotFoundPage from "./components/pages/404";
import friend from "./components/pages/friend";

function App() {
	// stfu, i know the last link element in nav doesnt have a to= just stfu
	// console.log = console.warn = console.error = () => {};

	// i stole this code from https://www.w3schools.com/js/js_cookies.asp
	// thats why it is shit
	function setCookie(cname, cvalue, exdays) {
		const d = new Date();
		if (!exdays) {
			exdays = 99999;
		}
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		let expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		let name = cname + "=";
		let ca = document.cookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	const [darkMode, setTheme] = useState(
		getCookie("theme") === "dark" ? true : false
	);

	function toggleTheme() {
		let theme;

		if (!darkMode) {
			theme = "dark";
		} else {
			theme = "light";
		}

		setCookie("theme", theme, "");
		setTheme(darkMode ? false : true);
	}

	return (
		<Fragment>
			<Router>
				{/* style for different themes */}
				<style
					dangerouslySetInnerHTML={{
						__html: darkMode
							? `:root {
								--bg-color: #181a1b;
								--color: #e8e6e3;
								--bg-color-hover: #242729;
								--link-color: #3397ff;
								--m-color: #a8a095;
								--mobile-nav: rgba(24, 26, 27, 0.75);

								--color_all: #d0ccc6;
								--color_movies: #2fd3f6;
								--color_anime: #adc95d;
								--color_tv: #ffa248;
								--color_books: #d86161;
								--color_music: #d66dc8;
								--fill: #181a1b;
					}`
							: `:root {
								--bg-color: white;
								--color: black;
								--bg-color-hover: #e9e9e9;
								--link-color: #05f;
								--m-color: #999999;
								--mobile-nav: rgba(255, 255, 255, 0.75);

								--color_all: #1e272e;
								--color_movies: #0abde3;
								--color_anime: #a6c44e;
								--color_tv: #ff9f43;
								--color_books: #d65858;
								--color_music: #d467c6;
								--fill: #ffffff;
					}`,
					}}
				/>
				{/* show navbar, which will change the /whatever */}
				<Navbar toggleTheme={toggleTheme} />
				{/* then based on the /whatever show appropriate whatever */}
				<Switch>
					{/* if its the /projects, we go to the list page */}
					{/* else we need to go directly to the project page */}
					<Route exact path="/projects" component={projects} />
					<Route path="/projects/:refName" component={ProjectPage} />
					{/* other pages */}
					<Route path="/work" component={work} />
					<Route path="/blog" component={blog} />
					<Route path="/thoughts" component={thoughts} />
					<Route path="/contact" component={contact} />
					{/* fun easteregg */}
					<Route path="/friends/:refName" component={friend} />
					{/* home page */}
					<Route exact path="/" component={home} />
					{/* incase 404 */}
					<Route path="/404" component={NotFoundPage} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
