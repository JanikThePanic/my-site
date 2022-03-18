import React from "react";
import { Helmet } from "react-helmet";

function NotFoundPage() {
	return (
		<div className="page">
			<Helmet>
				<title>youre lost</title>
			</Helmet>
			<h1 className="page-title">404</h1>

			<p>you're lost buddy.</p>
			<p>this page doesn't exist.</p>
			<p>
				back to <a href="/index.html">janik.codes</a>.
			</p>
		</div>
	);
}

export default NotFoundPage;
