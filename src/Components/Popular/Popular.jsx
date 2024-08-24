import React from "react";
import "../Popular/Popular.css";
import featureProductData from "../Accets/Data/featureProductData";
import Item from "../Item/Item";
import Pagination from "../Pagination/Pagination";

const Popular = () => {
	return (
		<>
			<div className="popular">
				{featureProductData.map((item, i) => {
					return (
						<Item
							key={i}
							id={item.id}
							name={item.name}
							price={item.price}
							url={item.imagurl}
							desc={item.description}
							color={item.color}
							button={item.button}
						/>
					);
				})}
			</div>
			<Pagination />
		</>
	);
};

export default Popular;
