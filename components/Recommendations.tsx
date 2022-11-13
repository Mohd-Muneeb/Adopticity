import Image from "next/image";
import React from "react";
// import recommendation_image from "../assets/404-recommendations-image.png";
import recommendation_image from "../assets/eren-yeager.png";

const Recommendations = () => {
	return (
		<div className="min-h-[80vh] h-full shadow-md rounded-xl">
			<div className="md:p-6 p-4 w-[80vw] rounded-xl">
				<h1 className="text-xl font-semibold">Recommended Pets</h1>
				<p className="text-sm opacity-75">Top pets recommended to you by our team based on your profile</p>
			</div>
			<div className="min-h-[60vh] flex flex-col justify-center items-center">
				<div className="w-[70%] h-[70%] flex flex-col justify-center items-center mb-8">
					<Image src={recommendation_image} alt="404 image" />
                    <button className="btn btn-wide rounded-md text-white bg-[hsl(var(--p))]">Browse pets</button>
					{/* <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button> */}
				</div>
			</div>
		</div>
	);
};

export default Recommendations;
