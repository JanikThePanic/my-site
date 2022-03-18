import React from "react";
import { Helmet } from "react-helmet";
import SupportMe from "../SupportMe";

/* eslint-disable */

function contact() {
	return (
		<div className="page">
			<Helmet>
				<title>contact - janik</title>
			</Helmet>
			<h1 className="page-title">contact me</h1>
			<p>
				{/* Work: <a href="mailto:j4abdull@uwaterloo.ca">j4abdull@uwaterloo.ca</a> <br /> */}
				personal:{" "}
				<a href="mailto:janik@janik.codes">janik@janik.codes</a>
				<br />
				phone: <a href="tel:+1-226-978-5283">+1 (226) 978 - 5283</a>
			</p>
			<p></p>
			<p>
				github:{" "}
				<a
					href="https://github.com/JanikThePanic"
					target="_blank"
					rel="noopener noreferrer"
				>
					JanikThePanic
				</a>
				{/* <br />
				Fiverr:{" "}
				<a
					href="https://www.fiverr.com/janikdesign"
					target="_blank"
					rel="noopener noreferrer"
				>
					JanikDesign
				</a> */}
				<br />
				easyEDA:{" "}
				<a
					href="https://easyeda.com/jk4abdl/"
					target="_blank"
					rel="noopener noreferrer"
				>
					jk4abdl
				</a>
			</p>
			<p>
				linkedin:{" "}
				<a
					href="https://www.linkedin.com/in/jahangir-janik-abdullayev-303a11188/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Jahangir Abdullayev
				</a>
				<br />
				instagram:{" "}
				<a
					href="https://www.instagram.com/quite_a_janik/"
					target="_blank"
					rel="noopener noreferrer"
				>
					quite_a_janik
				</a>
				<br />
				facebook:{" "}
				<a
					href="https://www.facebook.com/janiktitor"
					target="_blank"
					rel="noopener noreferrer"
				>
					Jahangir Abdullayev
				</a>
				<br />
				twitter:{" "}
				<a
					href="https://twitter.com/the_janik"
					target="_blank"
					rel="noopener noreferrer"
				>
					the_janik
				</a>
			</p>
			<SupportMe />
		</div>
	);
}

export default contact;
