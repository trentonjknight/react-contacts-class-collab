import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
function RigoDiaper() {
	const [data, setData] = useState([]);
	const [modalDisplay, setModalDisplay] = useState("d-none");
	const { store, actions } = useContext(Context);

	const ShowData = () => {
		console.log(data);
	};

	const trash = () => {
		if (modalDisplay === "invisible") {
			setModalDisplay("visible");
		} else {
			setModalDisplay("invisible");
		}
	};

	return (
		<>
			<h1> Contact List </h1>
			<div className="d-flex justify-content-end">
				<Link to="/addnew">
					<button className=" btn btn-large btn-success">Add New Contact</button>
				</Link>
			</div>
			<ul>
				{!store.contacts
					? "loading"
					: store.contacts.map((item, index) => {
							return (
								<li key={index} className="m-2" onClick={ShowData}>
									<div className="card p-2">
										<div className="row">
											<div className="col-2">
												{/* <img src="" alt="..." /> */}
												here image
											</div>
											<div className="col">
												{item.full_name}
												<br />
												{item.email}
												<br />
												{item.phone}
												<br />
												{item.address}
												<br />
												{item.created_at}
											</div>
											<div className="col-2">
												<Link to={"/EditInfo/" + index}>
													<i className="fas fa-user-edit" style={{ cursor: "pointer" }} />
												</Link>
												<i
													onClick={trash}
													style={{ cursor: "pointer" }}
													className="fas fa-trash-alt ml-2"
												/>
											</div>
										</div>
									</div>
								</li>
							);
					  })}
			</ul>

			<div className={["modal", modalDisplay].join(" ")}>
				<div className="modal-content">
					<span onClick={trash} className="close">
						&times;
					</span>
					<p>Some text in the Modal..</p>
				</div>
			</div>
		</>
	);
}

export default RigoDiaper;
