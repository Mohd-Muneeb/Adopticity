import React from "react";
import PetCard from "./PetCard";

const Pets = () => {
	return (
		<div>
			<div className="mt-8 md:mt-12 ">
				<h1 className="text-3xl m-4 text-center">Start choosing your companion now!</h1>
				<p className="text-xl m-4 text-center">
					We have a wide variety of pets to choose from and we think you`ll find anything you are looking for.
				</p>
			</div>
			<div className="p-8 grid grid-cols-1 gap-4 md:grid-cols-2">
				<main className="type-1">
					<PetCard />
					<PetCard />
					<PetCard />
				</main>
				<main className="type-2">
					<PetCard />
					<PetCard />{" "}
				</main>
			</div>
		</div>
	);
};

export default Pets;
