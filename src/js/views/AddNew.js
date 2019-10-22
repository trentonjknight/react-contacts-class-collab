import React from "react";
import { Link } from "react-router-dom";

function AddNew() {
	return (
		<>
			<div className="mx-auto">
				<form>
					<h1>Add a New Contact</h1>
					<div className="form-group">
			<label>Phone</label>
						<input type="text" className="form-control" placeholder="Enter Phone #" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" placeholder="Enter Address" />
					</div>
					<button className="btn btn-large btn-primary">Save Contact</button>
					<Link to="/rigo">back to contacts</Link>
				</form>
			</div>
		</>
	);
}

export default AddNew;
acitions.