import React from "react";
import RecentSearchsCards from "./RecentSearchsCards";

const RecentSearchs = () => {
	return (
		<div className=" w-full m-4">
			<h1 className="text-xl m-4 font-semibold underline text-center md:text-left">Recently viewed pets</h1>
			<p className="mx-4 opacity-75">
				Did you think you missed the perfect pet in the last search? Don`t worry, We got you covered.
			</p>
			{<RecentSearchsCards />}
			{<RecentSearchsCards />}
			{<RecentSearchsCards />}
			<h1 className="m-4 opacity-75 text-center md:text-left">
				Continue browsing till you find the perfect friend!
			</h1>
		</div>
	);
};

export default RecentSearchs;
