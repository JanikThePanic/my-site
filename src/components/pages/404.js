import React from "react";
import { Helmet } from "react-helmet";

function NotFoundPage() {
	return (
		<div className="page">
			<Helmet>
				<title>404 - janik</title>
			</Helmet>
			<h1 className="page-title">404</h1>

			<p>you're lost. i am too, it's okay.</p>
			<p>this page doesn't exist.</p>
			<p>
				back to <a href="/">janik.codes</a>.
			</p>
		</div>
	);
}

export default NotFoundPage;
