import React from "react";
import "../Enquire/Enquire.css";

const Enquire = (props) => {
	const { enquire } = props;
	return (
		<div className="container-fluid d-flex e-display">
			<div className="left enquire w-25 d-flex justify-content-center align-items-center">
				<img onClick={window.scrollTo(0, 0)} src={enquire.imagurl} alt="" />
			</div>
			<div className="right w-75 d-flex justify-content-center align-items-left  bg-body-secondary">
				<h1>{enquire.name}</h1>
				<h1>{enquire.price}</h1>
				<h1>{enquire.bulk_quantity}</h1>
			</div>
		</div>
	);
};

export default Enquire;
