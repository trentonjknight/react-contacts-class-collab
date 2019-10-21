import React from "react";
import { Link } from "react-router-dom";

function AddNew() {
	return (
		<>
			<div>
				<h1>Add a New Contact</h1>
				<input label="Full Name" type="text" placeholder="Enter Name" />
				<input label="Email" type="text" placeholder="Enter Email" />
				<input label="Phone" type="text" placeholder="Enter Phone #" />
				<input label="Address" type="text" placeholder="Enter Address" />
				<button className="btn btn-large btn-primary">Save Contact</button>
				<Link to="/rigo">back to contacts</Link>
			</div>
		</>
	);
}

export default AddNew;
