import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { useParams } from "react-router-dom";
import Enquire from "../Components/Enquire/Enquire";
import Form from "../Components/Form/Form";

const EnquireProduct = () => {
	const { featureProductData } = useContext(ProductContext);
	const { productId } = useParams();
	const enquire = featureProductData.find((e) => e.id === parseInt(productId));
	return (
		<div>
			<Enquire enquire={enquire} />
			<Form />
		</div>
	);
};

export default EnquireProduct;
