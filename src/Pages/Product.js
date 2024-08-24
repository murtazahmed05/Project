import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
	const { featureProductData } = useContext(ProductContext);
	const { productId } = useParams();
	const product = featureProductData.find((e) => e.id === parseInt(productId));
	return (
		<div>
			<ProductDisplay product={product} />
		</div>
	);
};

export default Product;
