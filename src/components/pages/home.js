import React from "react";
import { Helmet } from "react-helmet";

function home() {
	return (
		<div className="page">
			<Helmet>
				<title>jahangir abdullayev.</title>
			</Helmet>
			<h1 className="page-title">jahangir abdullayev.</h1>

			<p>
				Although Jahangir Abdullayev is my full name, Janik remains my
				preferred legal name, for simplicity’s sake. I am currently an
				engineering student at Western University in Ontario Canada,
				majoring in mechatronic engineering. I have a great passion for
				anything robotics-related.
			</p>
			<p>¯\_(ツ)_/¯</p>
			<p>i like robots.</p>
		</div>
	);
}

export default home;
