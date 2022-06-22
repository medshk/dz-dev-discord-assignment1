import React from "react";

export default function SubmitBtn({ handleClick }) {
	return (
		<button
			onClick={handleClick}
			className="rounded text-white bg-blue-500 py-1 px-2"
		>
			Submit
		</button>
	);
}
