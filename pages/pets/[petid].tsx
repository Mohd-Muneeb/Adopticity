import React from "react";
import Carousel from "../../components/Carousel";
import ProductHeroDetails from "../../components/ProductHeroDetails";
import Router, { useRouter } from "next/router";

const ProductPage = () => {

	return (
		<div className="my-4 w-[90vw] ml-[5vw]">
			<div className="flex justify-evenly gap-6 flex-col md:flex-row items-center">
				<Carousel />
				<ProductHeroDetails />
			</div>
		</div>
	);
};

export default ProductPage;
