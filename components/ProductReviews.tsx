import React, { useState } from "react";
import ReviewContent from "./ReviewContent";

const ProductReviews = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div>
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
				<button className="btn btn-outline btn-accent rounded-md my-4" onClick={() => setIsActive(!isActive)}>
					Show More
				</button>
			</div>
		</div>
	);
};

export default ProductReviews;
