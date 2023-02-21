import React, { useState } from "react";
import ReviewContent from "./ReviewContent";

const ProductReviews = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div>
			<hr className="my-4 w-[80vw] ml-[5vw]" />
			<h1 className="text-sm font-light">Pet Reviews</h1>
			<div>
				<ReviewContent />
				<ReviewContent />
				<ReviewContent />
				{isActive ? (
					<>
						<ReviewContent />
						<ReviewContent />
						<ReviewContent />
						<ReviewContent />
						<ReviewContent />
						<ReviewContent />
					</>
				) : (
					""
				)}
				<div className=" flex justify-center items-center ">
					<button
						className="btn btn-outline btn-accent rounded-md my-4"
						onClick={() => setIsActive(!isActive)}
					>
						Show More
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductReviews;
