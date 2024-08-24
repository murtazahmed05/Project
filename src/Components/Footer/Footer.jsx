import React from "react";
import "../Footer/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<>
			<div id="footer" className="container">
				<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
					<div className="col-md-4 d-flex align-items-center">
						<a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
							<svg className="bi" width="30" height="24">
								<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
								</a>
							</svg>
						</a>
						<span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
					</div>

					<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
						<li className="ms-3">
							<a className="text-body-secondary" href="#">
								<svg className="bi" width="24" height="24">
									<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
										<FontAwesomeIcon icon={faTwitter} size="2x" color="black" />
									</a>
								</svg>
							</a>
						</li>
						<li className="ms-3">
							<a className="text-body-secondary" href="#">
								<svg className="bi" width="24" height="24">
									<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
										<FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
									</a>
								</svg>
							</a>
						</li>
						<li className="ms-3">
							<a className="text-body-secondary" href="#">
								<svg className="bi" width="24" height="24">
									<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
										<FontAwesomeIcon icon={faFacebook} size="2x" color="black" />
									</a>
								</svg>
							</a>
						</li>
					</ul>
				</footer>
			</div>
			;
		</>
	);
};

export default Footer;
