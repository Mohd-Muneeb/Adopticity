import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/Footer";

const about = (props: any) => {
	return (
		<div className="h-screen flex flex-col justify-start items-center p-12 gap-8 text-center">
			<h1 className="font-bold text-3xl underline">About Us!</h1>
			<h3 className="text-xl">
				Welcome To <span id="W_Name1" className="text-[hsl(var(--p))] text-2xl">Adopticity</span>
			</h3>
			<p>
				<span>Adopticity</span> is a Professional <span id="W_Type1">Pets</span> Platform. Here we will provide
				you only interesting content, which you will like very much. We`re dedicated to providing you the best
				of <span id="W_Type2">Pets</span>, with a focus on dependability and{" "}
				<span id="W_Spec">Adopt animals, User friendly, Comfortable, Free</span>. We`re working to turn our
				passion for <span id="W_Type3">Pets</span> into a booming{" "}
				<a
					href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html"
					rel="do-follow"
				>
					online website
				</a>
				. We hope you enjoy our <span id="W_Type4">Pets</span> as much as we enjoy offering them to you.
			</p>
			<p>
				I will keep posting more important posts on my Website for all of you. Please give your support and
				love.
			</p>
			<p>
				Thanks For Visiting Our Site
				<br />
				<br />
				<span>Have a nice day!</span>
			</p>
			<hr className="h-4 w-[50vw] bg-[hsl(var(--ac))]"/>
			<Footer />
		</div>
	);
};

about.propTypes = {};

export default about;
