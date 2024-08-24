import React from "react";
import "../Pages/Styles/Home.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Catagories from "../Components/Catagories/Catagories";
import featureProductData from "../Components/Accets/Data/featureProductData";
import Feature from "../Components/Feature/Feature";
import { Link } from "react-router-dom";

const Home = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	const productData = featureProductData.map((item, i) => (
		<Feature
			key={i}
			id={item.id}
			name={item.name}
			price={item.price}
			url={item.imagurl}
			desc={item.description}
			color={item.color}
			button={item.button}
		/>
	));
	return (
		<>
			<div id="Hero" className="d-flex align-items-center justify-content-center flex-column">
				<span>50% off on the website</span>
				<h1 className="title">Cloth Manufacturer and Stock Provider</h1>
				<Link to={"/shop"}>
					<button className="btn btn-dark rounded-2 ">Shop Now</button>
				</Link>
			</div>
			<h1 className="text-center mt-5 mb-4">All Catagories</h1>
			<hr />
			<Catagories />
			<h1 className="text-center mt-5">Feature Products</h1>
			<hr />
			<Carousel responsive={responsive}>{productData}</Carousel>;
		</>
	);
};

export default Home;
