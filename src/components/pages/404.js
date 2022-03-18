import React from "react";
import { Helmet } from "react-helmet";

function NotFoundPage() {
	return (
		<div className="page">
			<Helmet>
				<title>youre lost</title>
			</Helmet>
			<h1 className="page-title">404</h1>

			<p>You appear lost.</p>
			<p>This page does not seam to exist.</p>
			<p>
				Back to <a href="/index.html">janik.codes</a>.
			</p>
		</div>
	);
}

export default NotFoundPage;
