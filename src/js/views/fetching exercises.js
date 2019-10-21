import React, { useState, useEffect } from "react";

function RigoDiaper() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda")
			.then(resp => resp.json())
			.then(data => setData(data));
	});

	// const [x, setX] = useState(3)
	//     .then(data => setX(4))

	// let y = 2
	//     y = 1

	// const myHuggies= () => {
	//     useEffect(()
	//     )
	// }
	return (
		<>
			<h1> BABY </h1>
			<ul>
				{!data
					? "loading"
					: data.map((item, index) => {
							return <li key={index}>{item}</li>;
					  })}
			</ul>
		</>
	);
}
export default RigoDiaper;
