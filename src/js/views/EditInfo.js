import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const EditInfo = props => {
	const fullname = useRef(null);
	const email = useRef(null);
	const phone = useRef(null);
	const address = useRef(null);
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="mx-auto">
				<form>
					<h1>Edit Contact Info</h1>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							value={store.contacts[props.match.params.id].full_name}
							className="form-control"
							placeholder="Enter Name"
							ref={fullname}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="text"
							value={store.contacts[props.match.params.id].email}
							className="form-control"
							placeholder="Enter Email"
							ref={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="text"
							value={store.contacts[props.match.params.id].phone}
							className="form-control"
							placeholder="Enter Phone #"
							ref={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							value={store.contacts[props.match.params.id].address}
							className="form-control"
							placeholder="Enter Address"
							ref={address}
						/>
					</div>
					<button className="btn btn-large btn-primary" onClick={() => actions.saveInfo()}>
						Save Edited Information
					</button>
					<Link to="/rigo">back to contacts</Link>
				</form>
			</div>
		</>
	);
};
EditInfo.propTypes = {
	match: PropTypes.object
};

export default EditInfo;
