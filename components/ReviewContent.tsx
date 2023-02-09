import React from "react";

const ReviewContent = () => {
	return (

		<div className="mt-4">
		<hr className="w-[60vw]"/>
        	<div className="flex items-center justify-between my-1 gap-4">
				<h1 className="text-lg">Some really cool heading!</h1>
				<h1>21/12/2024</h1>
			</div>
			<div className="my-1">
				<div className="rating">
					<input type="radio" name="rating-2" className="mask h-5 mask-star-2 bg-accent-focus" />
					<input type="radio" name="rating-2" className="mask h-5 mask-star-2 bg-accent-focus" />
					<input type="radio" name="rating-2" className="mask h-5 mask-star-2 bg-accent-focus" checked />
					<input type="radio" name="rating-2" className="mask h-5 mask-star-2 bg-orange-200" />
					<input type="radio" name="rating-2" className="mask h-5 mask-star-2 bg-orange-200" />
					{/* &nbsp; from&nbsp; <span className="text-accent-focus">200</span> &nbsp;ratings! */}
				</div>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit distinctio dolores autem atque
				facere quia asperiores ex illo, sequi mollitia possimus maiores excepturi in perspiciatis eligendi a
				modi pariatur.
			</p>
		</div>
	);
};

export default ReviewContent;
