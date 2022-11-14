import React from "react";
import PetCard from "./PetCard";

const Pets = () => {
	return (
		<div>
			<div className="mt-8 md:mt-12 p-4 rounded-xl">
				<h1 className="text-3xl m-4 text-center">Start choosing your companion now!</h1>
				<p className="text-xl m-4 text-center">
					We have a wide variety of pets to choose from and we think you`ll find anything you are looking for.
				</p>
			</div>
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
		</div>
	);
};

export default Pets;
