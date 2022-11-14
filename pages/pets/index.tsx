import React from "react";
import Footer from "../../components/Footer";
import Pets from "../../components/Pets";

const index = () => {
	return (
		<>
			<header>
				<div className="bg-base-100 m-4 md:m-12 p-4 md:p-8 rounded-lg">
					<Pets />
				</div>
			</header>
			<Footer />
		</>
	);
};

export default index;
