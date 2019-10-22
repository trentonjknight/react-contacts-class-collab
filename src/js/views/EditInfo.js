import React from "react";
import { Link } from "react-router-dom";

function EditInfo() {
	return (
		<>
			<div className="mx-auto">
				<form>
					<h1>Edit Contact Info</h1>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Enter Name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="text" className="form-control" placeholder="Enter Email" />
					</div>
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

export default EditInfo;
