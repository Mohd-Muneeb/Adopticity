import Image from "next/image";
import React, { useState } from "react";

const Carousel = () => {
	const CarouselImages = [
		"https://images.unsplash.com/photo-1674726891037-800f887c0a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1674752271238-507b7de054b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1674590462122-ae799c236b08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1674158687384-023265a5d536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc3fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1674244988420-a85176a1fa30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
	];

	const [Active, setActive] = useState(CarouselImages[0]);

	const handleSelect = (x: string, e: any) => {
		e.preventDefault();
		setActive(x);
		e.target.datatype = "false";
	};

	return (
		<div className="flex items-start justify-center flex-col-reverse md:flex-row gap-4 w-full">
			<div className="flex items-center flex-row md:flex-col gap-4 justify-end">
				{CarouselImages.map((item) => {
					return (
						<div
							key={item}
							onClick={(e) => handleSelect(item, e)}
							datatype="active"
							className={
								Active == item
									? "w-[60px] bg-pink-200 avatar relative rounded-md h-[60px] ring ring-primary ring-offset-base-100 ring-offset-2 "
									: "w-[60px] shadow-sm bg-pink-200 avatar relative rounded-md h-[60px]"
							}
						>
							<Image fill src={item} alt="temp" className="rounded-lg object-fit shadow-lg" />
						</div>
					);
				})}
			</div>
			<div className="relative w-[90vw] h-[75vh] md:w-[75vh] md:h-[75vh]">
				<Image alt="Test" src={Active} fill className="rounded-lg object-cover shadow-lg" />
			</div>
		</div>
	);
};

export default Carousel;
