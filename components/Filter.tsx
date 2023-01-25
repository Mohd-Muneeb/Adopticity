import React, { useState } from "react";

const Filter = () => {
	const [CostValue, setCostValue] = useState<number | string>(100);
	const [AgeValue, setAgeValue] = useState<number | string>(100);

	function handleCost(e: any) {
		console.log(e.target.value);
		e.target.innerHTML = e.target.value;
	}
	return (
		<>
			{/* The button to open modal */}
			<label htmlFor="my-modal-5" className="btn btn-outline">
				open modal
			</label>

			{/* Put this part before </body> tag */}
			<input type="checkbox" id="my-modal-5" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box w-11/12 max-w-5xl">
					<h3 className="font-bold text-lg">Apply Filters!</h3>
					<p className="py-4">
						You&apos;ve been selected for a chance
					</p>
					<div className="flex justify-around flex-col md:flex-row gap-4 md:gap-12 p-4">
						<div className="w-full md:w-[80%]">
							<p className="mb-2">Age (Months)</p>
							<input
								type="range"
								min="0"
								max="100"
								value={AgeValue}
								onChange={(e) => setAgeValue(e.target.value)}
								className="range"
								step="25"
							/>
							<div className="w-full flex justify-between text-xs px-2">
								<span>0</span>
								<span>12</span>
								<span>24</span>
								<span>48</span>
								<span>80+</span>
							</div>
						</div>

						<div className="md:w-[80%] w-full ">
							<p className="mb-2">Cost</p>
							<input
								type="range"
								min="0"
								max="100"
								className="range"
								step="25"
								value={CostValue}
								onChange={(e) => setCostValue(e.target.value)}
							/>
							<div className="w-full flex justify-between text-xs px-2">
								<span>0</span>
								<span>2000</span>
								<span>5000</span>
								<span>1000</span>
								<span>max</span>
							</div>
						</div>
					</div>
					<div className="modal-action">
						<label htmlFor="my-modal-5" className="btn btn-outline">
							Yay!
						</label>
					</div>
				</div>
			</div>
			
		</>
	);
};

export default Filter;
