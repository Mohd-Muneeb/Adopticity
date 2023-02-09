import React from "react";
import Carousel from "../../components/Carousel";
import ProductHeroDetails from "../../components/ProductHeroDetails";
import Router, { useRouter } from "next/router";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProductDetailsBody from "../../components/ProductDetailsBody";
import ProductReviews from "../../components/ProductReviews";

const ProductPage = () => {
	return (
		<div className="my-4 w-[90vw] ml-[5vw]">
			<BreadCrumbs />
			<hr className="mt-2" />
			<div className="flex justify-center gap-6 flex-col h-full my-8 md:flex-row items-start">
				<Carousel />
				<ProductHeroDetails />
			</div>
			<ProductDetailsBody />
			<ProductReviews />
		</div>
	);
};

export default ProductPage;
