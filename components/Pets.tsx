import React, { useReducer } from "react";
import PetCard from "./PetCard";
import Filter from "./Filter";
import Pagination from "./Pagination";
import FilterBadges from "./FilterBadges";

const Pets = () => {
	const reducer = (state: any, action: any) => {};

	// const [state, dispatch] = useReducer(reducer, {
	// 	state: [],
	// 	something: ""
	// });

	return (
		<div className="mt-8 md:mt-0">
			<div className="flex items-center justify-between flex-col md:flex-row">
				<div className="p-4 md:p-2 rounded-xl">
					<h1 className="text-3xl m-4 text-center md:text-left">Start choosing your companion now!</h1>
					<p className="text-xl m-4 text-center">
						We have a wide variety of pets to choose from and we think you`ll find anything you are looking
						for.
					</p>
				</div>
				<Filter />
				<FilterBadges />
			</div>
			<hr className="my-2 mt-8 md:mt-0" />
			<div className=" p-0 md:p-2 lg:p-4 grid grid-col-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
				<main className="type-1 ">
					<PetCard />
					<PetCard />
				</main>
				<main className="type-2">
					<PetCard />
					<PetCard />
				</main>
				<main>
					<PetCard />{" "}
				</main>
			</div>
			<Pagination />
		</div>
	);
};

export default Pets;
