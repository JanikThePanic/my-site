import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

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
				back to <Link to="/">janik.codes</Link>.
			</p>
		</div>
	);
}

export default NotFoundPage;
