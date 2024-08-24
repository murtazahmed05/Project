import "./Pages/Styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Popular from "./Components/Popular/Popular";
import Footer from "./Components/Footer/Footer";
import Enquire from "./Pages/Enquire";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/Shop" element={<Popular />} />
				<Route path="/tops" element={<Shop category="Tops" />} />
				<Route path="/bottoms" element={<Shop category="Bottoms" />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/product" element={<Product />} />
				<Route path="/product/:productId" element={<Product />} />
				<Route path="/enquire/:productId" element={<Enquire />} />
			</Routes>
			<Footer />
		</Router>
	);
}
export default App;
