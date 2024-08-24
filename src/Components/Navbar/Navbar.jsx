import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
	return (
		<>
			<nav className="navbar d-flex justify-content-around">
				<Link className="none" to={"/"}>
					<h1>BEAOXOGO.</h1>
				</Link>

				<ul className="d-flex">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/shop">Shop</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
