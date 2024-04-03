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
				Heyo! My name is Janik (legally Jahangir Abdullayev).{" "}
				<span role="img" aria-label="Waving hand emoji">
					👋
				</span>
			</p>

			<p>
				I am an undergraduate engineering student at the University of
				Western Ontario studying Mechatronics and Artificial
				Intelligence Systems Engineering.{" "}
				<span role="img" aria-label="Emojis illustrating my degree">
					🎓🤖💻
				</span>
			</p>

			<p>
				Starting as a hobbyist, I aim to turn my passion for anything
				robotics-related into a career. Over the years, I have picked up
				a wide variety of skills but most importantly adapted to be a
				quick and efficient learner with the drive to see things done.
			</p>

			<p>
				I could say many things here about my skills and inspirations,
				but at the end of the day:
			</p>

			<p>i like robots. (INCLUDING the 2005 film, Robots)</p>
		</div>
	);
}

export default home;
