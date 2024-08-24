import { createContext } from "react";
import featureProductData from "../Components/Accets/Data/featureProductData";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
	const contextValue = { featureProductData };

	return <ProductContext.Provider value={contextValue}>{props.children}</ProductContext.Provider>;
};

export default ProductContextProvider;
