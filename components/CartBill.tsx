import React from "react";

const CartBill = () => {
	return (
		<div className="overflow-x-auto md:w-[60%] w-full">
			<h1 className=" underline font-medium text-1xl h-12 flex items-center mx-4">Order Summary</h1>
			<table className="table w-full">
				<tbody>
					{/* <!-- row 1 --> */}
					<tr>
						<td>Subtotal</td>
						<td>8000</td>
					</tr>
					<tr>
						<td className="text-sm">Shipping</td>
						<td className="text-sm">150</td>
					</tr>
					{/* <!-- row 2 --> */}
					<tr>
						<td className="text-sm">Discount</td>
						<td className="text-sm">2000</td>
					</tr>
					{/* <!-- row 3 --> */}
					<tr>
						<td>Total</td>
						<td>6000</td>
					</tr>
				</tbody>
			</table>

			{/* Coupon  */}

			<div className="my-4">
				<p className="mx-4">Have a Coupon?</p>

				<div className="m-4 gap-4 flex flex-row items-center">
					<input type="text" placeholder="Type here" className="input w-full max-w-xs h-[40px] rounded-md" />
					<button className="btn btn-outline w-[30%] rounded-md ">Submit</button>
				</div>
				<p className="mx-4">
					Coupon <span className="text-secondary-focus">DISCOUNT30</span> is being applied
				</p>
			</div>

			<div className="w-full flex items-center justify-center md:justify-end gap-3">
				<button className="btn btn-outline btn-accent rounded-md ">Place Order</button>
				<button className="btn btn-outline  rounded-md ">Continue Shopping</button>
			</div>
		</div>
	);
};

export default CartBill;
