import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "../assets/right-arrow-recentSearch.svg";

const RecentSearchsCards = () => {
	return (
		<div className="h-[150px] w-[80vw] p-4 ">
			<div className="flex bg-base-200 p-4 rounded relative border-black-solid">
				<div className="avatar">
					<div className="w-20 rounded">
						<img
							src="https://placeimg.com/192/192/people"
							alt="Tailwind-CSS-Avatar-component"
							onClick={() => (window.location.href = "/")}
						/>
					</div>
				</div>
				<div className="mx-8">
					<Link className=" text-lg hover:underline" href="/">
						Petname
					</Link>
					<p className="opacity-70 text-sm">Dog</p>
					<p className="opacity-70 text-sm">Location</p>
					<div className="badge badge-outline">Available</div>
				</div>
				<div className="absolute opacity-20 hover:opacity-100 top-12 right-12">
					<Link href="/pets">
						<Image src={arrow} alt="Right arrow" height={30} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecentSearchsCards;
