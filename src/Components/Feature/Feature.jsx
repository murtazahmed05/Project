import React from "react";
import { Link } from "react-router-dom";
import "../Feature/Feature.css";

const Feature = (props) => {
	return (
		<>
			<div className="Product">
				<Link to={`/Product/${props.id}`}>
					<img onClick={window.scrollTo(0, 0)} src={props.url} alt={props.name} />
				</Link>
				<h2 className="mt-3">{props.name}</h2>
				<div className="product-details">
					<p>{props.price}</p>
					<p>{props.color}</p>
					<Link to={`/enquire/${props.id}`}>
						<button className="btn btn-dark">{props.button}</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Feature;
