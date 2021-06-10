import React, { Fragment } from "react";
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

	return (
		<Fragment>
			<Router>
				{/* show navbar, which will change the /whatever */}
				<Navbar />
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
