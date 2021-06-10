import React from "react";
import { Helmet } from "react-helmet";

/* eslint-disable */

function contact() {
	return (
		<div className="page">
			<Helmet>
				<title>Contact | Jahangir Abdullayev</title>
			</Helmet>
			<h1 className="page-title">Contact</h1>
			<p>
				{/* Work: <a href="mailto:j4abdull@uwaterloo.ca">j4abdull@uwaterloo.ca</a> <br /> */}
				Personal:{" "}
				<a href="mailto:jk4abdl@gmail.com">jk4abdl@gmail.com</a>
				<br />
				Phone: <a href="tel:+1-226-978-5283">+1 (226) 978 - 5283</a>
			</p>
			<p></p>
			<p>
				GitHub:{" "}
				<a
					href="https://github.com/JanikThePanic"
					target="_blank"
					rel="noopener noreferrer"
				>
					JanikThePanic
				</a>
				<br />
				Fiverr:{" "}
				<a
					href="https://www.fiverr.com/janikdesign"
					target="_blank"
					rel="noopener noreferrer"
				>
					JanikDesign
				</a>
				<br />
				EasyEDA:{" "}
				<a
					href="https://easyeda.com/jk4abdl/"
					target="_blank"
					rel="noopener noreferrer"
				>
					jk4abdl
				</a>
			</p>
			<p>
				LinkedIn:{" "}
				<a
					href="https://www.linkedin.com/in/jahangir-janik-abdullayev-303a11188/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Jahangir Abdullayev
				</a>
				<br />
				Instagram:{" "}
				<a
					href="https://www.instagram.com/quite_a_janik/"
					target="_blank"
					rel="noopener noreferrer"
				>
					quite_a_janik
				</a>
				<br />
				Facebook:{" "}
				<a
					href="https://www.facebook.com/janiktitor"
					target="_blank"
					rel="noopener noreferrer"
				>
					Jahangir Abdullayev
				</a>
				<br />
				Twitter:{" "}
				<a
					href="https://twitter.com/the_janik"
					target="_blank"
					rel="noopener noreferrer"
				>
					the_janik
				</a>
			</p>
			<br />
			<p>☕ Buy me a Coffee ☕</p>
			<p>
				PayPal:{" "}
				<a
					href="https://www.paypal.me/thejanik"
					target="_blank"
					rel="noopener noreferrer"
				>
					thejanik
				</a>
			</p>
		</div>
	);
}

export default contact;
