import React, { useState } from "react";

const ProductDetailsBody = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="">
			<hr className="w-[80vw] ml-[5vw] my-4" />
			<h1 className="text-sm font-light">Overview</h1>
			<div className="flex my-4 flex-col md:flex-row justify-around gap-4 items-start">
				<div className="h-full md:border-r-2 pr-4">
					<p className="text-md my-4">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum delectus ea ad reiciendis
						inventore eaque, provident amet facilis aliquam quaerat, cupiditate fuga consequatur sed.
						Quaerat explicabo ad sunt labore molestiae?
					</p>

					<div>
						<h1 className="font-light">We suggest you buy a Pug along with the following products!</h1>
						<div className="w-[80vw] md:w-[45vw] h-[200px] bg-base-200 rounded-lg shadow-sm my-4"></div>
					</div>
				</div>
				<div className="w-full">
					<div className="overflow-x-auto flex flex-col justify-center h-full overflow-y-hidden items-center">
						<table className="table table-zebra w-full">
							<thead>
								<tr>
									<th>Name</th>
									<th>Job</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>
								</tr>
								{isActive ? (
									<>
										<tr>
											<td>Hart Hagerty</td>
											<td>Desktop Support Technician</td>
										</tr>
										<tr>
											<td>Brice Swyre</td>
											<td>Tax Accountant</td>
										</tr>
									</>
								) : (
									""
								)}
							</tbody>
						</table>
						<button
							className="btn btn-accent rounded-md btn-outline justify-center"
							onClick={(e) => setIsActive(!isActive)}
						>
							{!isActive ? "Show More" : "Show Less"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsBody;
