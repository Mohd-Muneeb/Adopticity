import React from "react";

const CartTable = () => {
	return (
		<div className="overflow-x-auto w-full">
			<table className="table w-full">
				{/* <!-- head --> */}
				<thead>
					<tr>
						<th>Item</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>
							<label>
								<input type="checkbox" className="checkbox" />
							</label>
						</th>
					</tr>
				</thead>
				<tbody>
					{/* <!-- row 1 --> */}
					<tr>
						<td>
							<div className="flex items-center space-x-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<img
											src="/tailwind-css-component-profile-2@56w.png"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
								<div>
									<div className="font-bold">Hart Hagerty</div>
									<div className="text-sm opacity-50">United States</div>
								</div>
							</div>
						</td>
						<td>Purple</td>
						<th>2000</th>
						<th>
							<label>
								<input type="checkbox" className="checkbox" />
							</label>
						</th>
					</tr>
					{/* <!-- row 2 --> */}
					<tr>
						<td>
							<div className="flex items-center space-x-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<img
											src="https://images.unsplash.com/photo-1674726891037-800f887c0a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
								<div>
									<div className="font-bold">Brice Swyre</div>
									<div className="text-sm opacity-50">China</div>
								</div>
							</div>
						</td>
						<td>Red</td>
						<th>2000</th>
						<th>
							<label>
								<input type="checkbox" className="checkbox" />
							</label>
						</th>
					</tr>
					{/* <!-- row 3 --> */}
					<tr>
						<td>
							<div className="flex items-center space-x-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<img
											src="/tailwind-css-component-profile-4@56w.png"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
								<div>
									<div className="font-bold">Marjy Ferencz</div>
									<div className="text-sm opacity-50">Russia</div>
								</div>
							</div>
						</td>
						<td>Crimson</td>
						<th>2000</th>
						<th>
							<label>
								<input type="checkbox" className="checkbox" />
							</label>
						</th>
					</tr>
					{/* <!-- row 4 --> */}
					<tr>
						<td>
							<div className="flex items-center space-x-3">
								<div className="avatar">
									<div className="mask mask-squircle w-12 h-12">
										<img
											src="/tailwind-css-component-profile-5@56w.png"
											alt="Avatar Tailwind CSS Component"
										/>
									</div>
								</div>
								<div>
									<div className="font-bold">Yancy Tear</div>
									<div className="text-sm opacity-50">Brazil</div>
								</div>
							</div>
						</td>
						<td>Indigo</td>
						<th>2000</th>
						<th>
							<label>
								<input type="checkbox" className="checkbox" />
							</label>
						</th>
					</tr>
				</tbody>
				{/* <!-- foot --> */}
			</table>
		</div>
	);
};

export default CartTable;
