import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Item from "../Components/Item/Item";
import "../Pages/Styles/Shop.css";
import Pagination from "../Components/Pagination/Pagination";

const Shop = (props) => {
	const { featureProductData } = useContext(ProductContext);
	return (
		<>
			<div className="catagories">
				{featureProductData.map((item, i) => {
					if (props.category === item.category) {
						return (
							<Item
								Key={i}
								id={item.id}
								name={item.name}
								price={item.price}
								url={item.imagurl}
								desc={item.description}
								color={item.color}
								button={item.button}
								category={item.category}
							/>
						);
					} else {
						return null;
					}
				})}
			</div>
			<Pagination />
		</>
	);
};

export default Shop;
