import Image from "next/image";
import React from "react";

const ProductPageSuggestions = () => {
	return (
		<div>
			{" "}
			<hr className="w-[80vw] my-4 ml-[5vw]" />
			<h1 className="font-light text-md">Owners of this pet also considered buying</h1>
			<div>
				<div className="m-4 bg-base-200 border-2 border-solid rounded-xl p-2">
					<div className="relative h-[170px] w-[160px]">
						<Image
							src="https://images.unsplash.com/photo-1676030789467-a097e2291bb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60"
							alt="asdasadsad"
							fill
							className="object-cover rounded-md"
						/>
					</div>
					<div className="p-2">
						<h1>Heading</h1>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPageSuggestions;
