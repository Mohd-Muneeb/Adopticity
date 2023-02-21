import React from "react";
import Footer from "../components/Footer";
import BreadCrumbs from "../components/BreadCrumbs";
import Image from "next/image";
import CartTable from "../components/CartTable";
import CartBill from "../components/CartBill";

const Cart = () => {
	return (
		<div className="mt-8 w-[90vw] ml-[5vw]">
			<BreadCrumbs />
			<div className="flex flex-col my-4 md:flex-row gap-4">
				<CartTable />
				<CartBill />
			</div>
			<hr className="my-8" />
			<Footer />
		</div>
	);
};

export default Cart;
