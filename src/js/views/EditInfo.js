import React, { useRef, useContext } from "react";

import { Link } from "react-router-dom";

var contactObj = {};

const EditInfo = () => {
	const fullName = useRef(null);
	const email = useRef(null);
	const phone = useRef(null);
	const address = useRef(null);

	// `current` points to the mounted text input element

	const GetInfo = () => {
		contactObj = {
			fullname: fullName.current.value,
			email: email.current.value,
			phone: phone.current.value,
			address: address.current.value
		};
	};

	return (
		<>
			<div className="mx-auto">
				<form>
					<h1>Edit Contact Info</h1>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Enter Name" ref={fullName} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="text" className="form-control" placeholder="Enter Email" ref={email} />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="text" className="form-control" placeholder="Enter Phone #" ref={phone} />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" placeholder="Enter Address" ref={address} />
					</div>
					<button
						className="btn btn-large btn-primary"
						onClick={actions.GetInfo(
							fullname.current.value,
							email.current.value,
							phone.current.value,
							address.current.value
						)}>
						Save Edited Information
					</button>
					<Link to="/rigo">back to contacts</Link>
				</form>
			</div>
		</>
	);
};

export default EditInfo;
