import React from "react";
import { Helmet } from "react-helmet";
import SupportMe from "../SupportMe";
import { Link } from "react-router-dom";

/* eslint-disable */

function contact() {
	return (
		<div className="page">
			<Helmet>
				<title>resume - janik</title>
			</Helmet>
			<h1 className="page-title">my resume</h1>

			<p>if you are interested in my resume as a(n) . . .</p>

			<h3>employer:</h3>
			<p>
				Thank you for taking the time to look at my website and take an
				interest in me. Please feel free to explore my LinkedIn, and
				email me with any questions or to see a copy of my resume; the
				necessary links are found on the{" "}
				<Link to="/contact">contact</Link> page.
			</p>

			<h3>friend/colleague:</h3>
			<p>
				Don’t worry, I too stalk my friends from time to time. Find me
				roaming around ACEB and ask me about my resume. Or just hit up
				my DMs.
			</p>

			<SupportMe />
		</div>
	);
}

export default contact;
