import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		fetch("products.json")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	useEffect(() => {
		const storedCart = getStoredCart();
		const saveCart = [];
		for (const id in storedCart) {
			const addedCart = products.find((product) => product.id === id);
			if (addedCart) {
				const quantity = storedCart[id];
				addedCart.quantity = quantity;
				saveCart.push(addedCart);
			}
		}
		setCart(saveCart);
	}, [products]);

	// R jodi dependencies na thake tahole 1 bar call korbe
	// Dependencies thakle bar bar call korbe
	const handleAddToCart = (selectedProduct) => {
		// console.log("Clicked");
		let newCart;
		const exists = cart.find((product) => product.id === selectedProduct.id);
		if (!exists) {
			selectedProduct.quantity = 1;
			newCart = [...cart, selectedProduct];
		} else {
			const rest = cart.filter((product) => product.id !== selectedProduct.id);
			exists.quantity = exists.quantity + 1;
			newCart = [...rest, exists];
		}
		setCart(newCart);
		addToDb(selectedProduct.id);
	};

	return (
		<div className="shop-container">
			<div className="products-container">
				{products.map((product) => (
					<Product
						product={product}
						key={product.id}
						handleAddToCart={handleAddToCart}
					></Product>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
