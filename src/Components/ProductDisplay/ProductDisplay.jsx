import React from "react";
import "../ProductDisplay/ProductDisplay.css";
import { useState } from "react";

const ProductDisplay = (props) => {
	const { product } = props;

	const [mainImage, setMainImage] = useState(product.imagurl.main);

	const handleImageClick = (image) => {
		setMainImage(image);
	};

	return (
		<div className="container-fluid d-flex display">
			<div className="left w-50 d-flex flex-column justify-content-center align-items-center">
				<img onClick={window.scrollTo(0, 0)} src={mainImage} alt={product.name} />
				<div className="mini">
					{product.imagurl.mini.map((image, index) => (
						<img
							key={index}
							// onClick={window.scrollTo(0, 0)}
							src={image}
							alt={product.name}
							onClick={() => handleImageClick(image)}
						/>
					))}
				</div>
			</div>
			<div className="right w-50 d-flex justify-content-center align-items-center flex-column">
				<h1>{product.name}</h1>
				<h1>{product.price}</h1>
				<h1>{product.category}</h1>
				<h1>{product.description}</h1>
				<h1>{product.color}</h1>
				<h1>{product.material}</h1>
				<h1>{product.feature}</h1>
				<h1>{product.bulk_quantity}</h1>
			</div>
		</div>
	);
};

export default ProductDisplay;
