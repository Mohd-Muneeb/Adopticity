import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import shipping from "../public/shipping.svg";
import packaging from "../public/package.svg";

const ProductHeroDetails = () => {
	const router = useRouter();
	const { petid } = router.query;
	const ProductName = petid?.toString().replaceAll("-", " ");
	return (
		<div className="w-full min-h-[75vh] bg-base-200 p-8  flex flex-col justify-start rounded-lg">
			<h1 className="font-lexend text-2xl uppercase font-medium my-2">{ProductName}</h1>
			{/* <hr className="my-2" /> */}
			<div>
				<div className="rating">
					Rating : &nbsp;
					<input type="radio" name="rating-2" className="mask mask-star-2 bg-accent-focus" />
					<input type="radio" name="rating-2" className="mask mask-star-2 bg-accent-focus" />
					<input type="radio" name="rating-2" className="mask mask-star-2 bg-accent-focus" checked />
					<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
					<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
					&nbsp; from&nbsp; <span className="text-accent-focus">200</span> &nbsp;ratings!
				</div>
			</div>
			<hr className="my-2" />
			<h1 className="text-2xl font-medium my-1 text-neutral">
				<sup className="text-sm ">Rs</sup>
				&nbsp;2000
			</h1>
			<hr className="my-2" />

			{/* //Perks  */}

			<div>
				<h1 className="mb-2 font-medium">Shop with us for :</h1>

				<div className="flex justify-start gap-4 items-center">
					<div className="flex flex-col text-sm items-center">
						<div className="w-[50px] h-[50px] relative">
							<Image src={shipping} alt="test" fill></Image>
						</div>
						Fast Delivery
					</div>
					<div className="flex flex-col text-sm items-center">
						<div className="w-[50px] h-[50px] relative">
							<Image src={packaging} alt="test" fill></Image>
						</div>
						Safe Packaging
					</div>
				</div>
			</div>
			<hr className="my-2" />

			{/* //Optinal Description, will Add later for sure! */}

			<h1 className="font-light text-sm">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur possimus quae sed. Delectus
				consequuntur commodi ipsum? Alias ipsam, praesentium assumenda esse expedita voluptate natus beatae quis
				necessitatibus minima rem deleniti.
			</h1>

			{/* Tags */}

			<div className="py-2 flex items-center gap-2">
				Tags :<div className="badge badge-outline badge-secondary">Dog</div>
			</div>

			{/* //Filters  */}

			<div className="flex items-start md:items-center flex-col md:flex-row my-2 gap-4">
				<div className="flex items-center gap-2">
					<span className="">Age: </span>

					<select className=" rounded-md select select-primary max-w-xs">
						<option disabled selected>
							Age(months)
						</option>
						<option>0-6</option>
						<option>6-12</option>
						<option>12-24</option>
						<option>24+</option>
					</select>
				</div>
				{/* <div className="flex items-center gap-2"> */}
				<div className="flex items-center gap-2 mr-2">
					<span>
						Coat:<sup className="text-xs">*</sup>
					</span>
					<div className="avatar">
						<div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-[yellow]"></div>
					</div>
				</div>
				{/* </div> */}
				<div className="flex gap-2 items-center">
					Quantity:
					<select className="select rounded-md select-primary max-w-xs">
						<option selected>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
			</div>
			<div className="my-3">
				<h1 className="flex list-none mb-0 gap-2 items-center">
					<span className="material-symbols-outlined">pin_drop</span> Mehedipatnam, Hyderabad - 3 days!.
				</h1>
			</div>
			<div className="flex gap-2">
				<button className="btn text-base-100 rounded-md my-2  ">
					{" "}
					<span className="material-symbols-outlined">add_shopping_cart</span>&nbsp;Add to Cart
				</button>
				<button className="btn btn-outline  rounded-md my-2  ">
					<span className="material-symbols-outlined">sell</span>&nbsp;Buy now!
				</button>
			</div>
		</div>
	);
};
export default ProductHeroDetails;
