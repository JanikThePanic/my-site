import React from "react";
import { Helmet } from "react-helmet";

function home() {
	return (
		<div className="page">
			<Helmet>
				<title>Jahangir Abdullayev</title>
			</Helmet>
			<h1 className="page-title">Jahangir Abdullayev</h1>

			<p>
				My name is Jahangir Abdullayev, Janik for short. I am a Canadian
				Highschool student at{" "}
				<a
					href="http://bci.wrdsb.ca/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Bluevale Collegiate Institute
				</a>
				. As well, I am an engineering, design, and programming
				enthusiast. In time, I have also become a leading student on{" "}
				<a
					href="https://2702rebels.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					The 2702 Rebels.
				</a>
			</p>

			<p>
				I created{" "}
				<a
					href="https://janikthepanic.github.io/the-repository/"
					target="_blank"
					rel="noopener noreferrer"
				>
					the repository
				</a>
				, a grant bookmark. More importantly, over the years I have
				built multiple advanced competitive robots with the{" "}
				<a
					href="https://2702rebels.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					2702 Rebels
				</a>{" "}
				Team.
			</p>

			<p>
				Living in Canada, I know three languages. These are Russian,
				English, and a work-place level of French. Alongside this, I
				possess high skill sets in various fields of STEM and
				technology.
			</p>

			<p>
				Throughout high school, I have worked for{" "}
				<a
					href="https://uwaterloo.ca/engineering-science-quest/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Engineering Science Quest
				</a>{" "}
				as a Highschool Leader. On the side, I freelance on{" "}
				<a
					href="https://www.fiverr.com/janikdesign"
					target="_blank"
					rel="noopener noreferrer"
				>
					Fiverr
				</a>{" "}
				doing Computer-Assisted Design and Graphical Design.
			</p>
		</div>
	);
}

export default home;
