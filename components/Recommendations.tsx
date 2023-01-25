import Image from "next/image";
import Link from "next/link";
import React from "react";
// import recommendation_image from "../assets/404-recommendations-image.png";
import recommendation_image from "../assets/eren-yeager.png";

const Recommendations = () => {
	return (
		<div className="min-h-[80vh] h-full shadow-md rounded-xl">
			<div className="md:p-8 p-4 w-[80vw] rounded-xl">
				<h1 className="text-xl font-semibold underline">Recommended Pets</h1>
				<p className="text-sm opacity-75">Top pets recommended to you by our team based on your profile</p>
			</div>
			<div className="min-h-[60vh] flex flex-col justify-center items-center relative">
				<div className="w-[70%] h-[70%] flex flex-col justify-center items-center mb-8">
					<Image src={recommendation_image} alt="404 image" />
                    <Link className="btn btn-wide rounded-md text-white bg-[hsl(var(--p))]" href="/pets">Browse pets</Link>
				</div>
			</div>
		</div>
	);
};

export default Recommendations;
