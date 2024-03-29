import Image from "next/image";
import React from "react";

const PetCard = () => {
	function handleClick(e: any) {
		window.location.href = `/pets/pug`;
	}
	return (
		<div
			onClick={(e) => handleClick(e)}
			className="group wrapper bg-bottom  bg-gradient-to-r from-[hsl(var(--n))] to-[hsl(var(--n))] bg-[length:1%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out bg-base-200 rounded-2xl md:rounded-xl antialiased"
		>
			<div className="min-w-full">
				<Image
					src="https://source.unsplash.com/random/350x350"
					alt=" random imgee"
					width={100}
					height={100}
					className="w-full object-cover object-center rounded-lg shadow-md opacity-70 transition-opacity delay-100 group-hover:opacity-100"
				/>

				<div className="relative px-4 -mt-16 ">
					<div className="bg-base-300 p-6 rounded-lg shadow-lg">
						<div className="flex items-baseline">
							<span className="bg-[hsl(var(--in))] text-[hsl(var(--n))] text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
								New
							</span>
							<div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
								2 baths &bull; 3 rooms
							</div>
						</div>

						<h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>

						<div className="mt-1">
							$1800
							<span className="text-gray-600 text-sm"> /wk</span>
						</div>
						<div className="my-2">
							<span className="text-[hsl(var(--a))] text-md font-semibold">4/5 ratings </span>
							<span className="text-sm text-gray-600">(234 ratings)</span>
						</div>
						<button className="btn btn-outline  rounded-md">Buy Now!</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PetCard;
