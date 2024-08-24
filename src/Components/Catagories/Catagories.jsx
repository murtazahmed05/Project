import React from "react";
import { Link } from "react-router-dom";
import "../Catagories/Catagories.css";
import ct1 from "../Accets/Images/Catagories/ct-1.jpg";
import ct2 from "../Accets/Images/Catagories/ct-2.jpg";
import ct3 from "../Accets/Images/Catagories/ct-3.jpg";
import ct4 from "../Accets/Images/Catagories/ct-4.jpg";
import ct5 from "../Accets/Images/Catagories/ct-5.jpg";
import ct6 from "../Accets/Images/Catagories/ct-6.jpg";

const Catagories = () => {
	return (
		<>
			<div className="catagories d-flex flex-wrap justify-content-center align-items-center">
				<div className="box">
					<Link to={"/tops"}>
						<div className="content position-absolute">
							<a className="btn btn-dark px-4 py-3" href="">
								Tops
							</a>
						</div>
					</Link>
					<img src={ct1} />
				</div>
				<div className="box">
					<Link to={"/bottoms"}>
						<div className="content position-absolute">
							<a className="btn btn-dark px-4 py-3" href="">
								Bottoms
							</a>
						</div>
					</Link>
					<img src={ct6} />
				</div>
				<div className="box">
					<div className="content position-absolute">
						<a className="btn btn-dark px-4 py-3" href="">
							Catagory 3
						</a>
					</div>
					<img src={ct3} />
				</div>
				<div className="box">
					<div className="content position-absolute">
						<a className="btn btn-dark px-4 py-3" href="">
							Catagory 5
						</a>
					</div>
					<img src={ct4} />
				</div>
				<div className="box">
					<div className="content position-absolute">
						<a className="btn btn-dark px-4 py-3" href="">
							Catagory 5
						</a>
					</div>
					<img src={ct5} />
				</div>
				<div className="box">
					<div className="content position-absolute">
						<a className="btn btn-dark px-4 py-3" href="">
							Catagory 6
						</a>
					</div>
					<img src={ct2} />
				</div>
			</div>
		</>
	);
};

export default Catagories;
