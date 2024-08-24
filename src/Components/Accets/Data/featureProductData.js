import p1 from "../Images/Products/p1.jpg";
import p2 from "../Images/Products/p2.jpg";
import p3 from "../Images/Products/p3.jpg";
import p4 from "../Images/Products/p4.jpg";
import p5 from "../Images/Products/p5.jpg";
import p6 from "../Images/Products/p6.jpg";
import p7 from "../Images/Products/p7.jpg";
import p8 from "../Images/Products/p8.jpg";
import p9 from "../Images/Products/p9.jpg";
import p10 from "../Images/Products/p10.jpg";
import H01 from "../Images/Products/Hoodie/H1.0/main-hoody.png";
import H01m1 from "../Images/Products/Hoodie/H1.0/mini-H1.0.png";
import H01m2 from "../Images/Products/Hoodie/H1.0/mini-H1.2.png";
import H01m3 from "../Images/Products/Hoodie/H1.0/mini-H1.3.png";
import H01m4 from "../Images/Products/Hoodie/H1.0/mini-H1.4.png";
import H01m5 from "../Images/Products/Hoodie/H1.0/mini-H1.5.png";

const featureProductData = [
	{
		id: 1,
		name: "Hoodie 1",
		imagurl: {
			main: H01,
			mini: [H01m1, H01m2, H01m3, H01m4, H01m5],
		},
		category: "Hoodies",
		price: "$19.99",
		description: "Description : A stylish and comfortable t-shirt perfect for any casual occasion.",
		color: ["Black", "Blue", "Red", "Yellow", "White", "Gray"],
		material: "Material : Cotton, Polyester ",
		feature: "GSM",
		bulk_quantity: "Bulk : 100",
		customized: "Yes",
		button: "Inquire",
	},
	{
		id: 2,
		name: "Classic Jeans",
		imagurl: p2,
		category: "Bottoms",
		price: 49.99,
		description: "Timeless jeans with a perfect fit for everyday wear.",
		color: "Dark Blue",
		material: "Denim",
		feature: "Stretchable",
		bulk_quantity: 50,
		button: "Inquire",
	},
	{
		id: 3,
		name: "Elegant Dress",
		imagurl: p3,
		category: "Dresses",
		price: 79.99,
		description: "A beautiful dress that combines elegance and comfort.",
		color: "Red",
		material: "Silk",
		feature: "Soft and luxurious feel",
		bulk_quantity: 30,
		button: "Inquire",
	},
	{
		id: 4,
		name: "Sporty Hoodie",
		imagurl: p4,
		category: "Outerwear",
		price: 39.99,
		description: "A cozy hoodie perfect for sports or casual wear.",
		color: "Gray",
		material: "Polyester",
		feature: "Quick-dry technology",
		bulk_quantity: 75,
		button: "Inquire",
	},
	{
		id: 5,
		name: "Formal Shirt",
		imagurl: p5,
		category: "Tops",
		price: 29.99,
		description: "A sleek formal shirt suitable for office or events.",
		color: "White",
		material: "Cotton",
		feature: "Wrinkle-free",
		bulk_quantity: 60,
		button: "Inquire",
	},
	{
		id: 6,
		name: "Casual Shorts",
		imagurl: p6,
		category: "Bottoms",
		price: 24.99,
		description: "Comfortable shorts for a relaxed day out.",
		color: "Khaki",
		material: "Cotton",
		feature: "Elastic waistband",
		bulk_quantity: 90,
		button: "Inquire",
	},
	{
		id: 7,
		name: "Winter Jacket",
		imagurl: p7,
		category: "Outerwear",
		price: 99.99,
		description: "A warm jacket to keep you cozy during winter.",
		color: "Black",
		material: "Wool",
		feature: "Water-resistant",
		bulk_quantity: 40,
		button: "Inquire",
	},
	{
		id: 8,
		name: "Summer Hat",
		imagurl: p8,
		category: "Accessories",
		price: 14.99,
		description: "A stylish hat to protect you from the sun.",
		color: "Beige",
		material: "Straw",
		feature: "UV protection",
		bulk_quantity: 150,
		button: "Inquire",
	},
	{
		id: 9,
		name: "Yoga Pants",
		imagurl: p9,
		category: "Bottoms",
		price: 29.99,
		description: "Flexible and comfortable pants for yoga sessions.",
		color: "Black",
		material: "Spandex",
		feature: "High-waisted",
		bulk_quantity: 120,
		button: "Inquire",
	},
	{
		id: 10,
		name: "Sneakers",
		imagurl: p10,
		category: "Footwear",
		price: 59.99,
		description: "Stylish and comfortable sneakers for everyday wear.",
		color: "White",
		material: "Leather",
		feature: "Slip-resistant sole",
		bulk_quantity: 200,
		button: "Inquire",
	},
];

export default featureProductData;
