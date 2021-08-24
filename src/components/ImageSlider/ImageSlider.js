import React, { useState } from "react";
import SliderButton from "./SliderButton";
import "../../css/ImageSlider.css";

export default function ImageSlider(props) {
	// state hook holding index of active image
	const [slideIndex, setSlideIndex] = useState(0);

	// next slide
	const nextSlide = () => {
		if (slideIndex !== props.images.length - 1) {
			setSlideIndex(slideIndex + 1);
		} else {
			setSlideIndex(0);
		}
	};
	// previous slide
	const prevSlide = () => {
		if (slideIndex !== 0) {
			setSlideIndex(slideIndex - 1);
		} else {
			setSlideIndex(props.images.length - 1);
		}
	};

	return (
		<div className="container-slider">
			{/* map all images for slider */}
			{props.images.map((obj, key) => {
				return (
					<div
						key={key}
						// if active index, needs active class
						className={
							slideIndex === key
								? "image-slide active-image-slide"
								: "image-slide"
						}
					>
						<img alt={"Image of " + props.title} src={obj} />
					</div>
				);
			})}

			{/* buttons to change imgs */}
			<SliderButton onClick={nextSlide} direction={"next"} />
			<SliderButton onClick={prevSlide} direction={"prev"} />
		</div>
	);
}
