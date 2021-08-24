import React from "react";

export default function SliderButton(props) {
	return (
		<button
			onClick={props.onClick}
			className={
				props.direction === "next" ? "btn-slide next" : "btn-slide prev"
			}
		>
			{props.direction === "next" ? (
				<svg viewBox="0 0 32 32" version="1.1" aria-hidden="false">
					<path d="M11.3333 7.3333l2-2L24 16 13.3333 26.6666l-2-2L20 16l-8.6667-8.6667z"></path>
				</svg>
			) : (
				<svg viewBox="0 0 32 32" version="1.1" aria-hidden="false">
					<path d="M20.6667 24.6666l-2 2L8 16 18.6667 5.3333l2 2L12 16l8.6667 8.6666z"></path>
				</svg>
			)}
		</button>
	);
}
