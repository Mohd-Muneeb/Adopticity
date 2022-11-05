import Image from "next/image";
import "../public/quote.svg";
import React from "react";

const Blog = () => {
	return (
		<div className="min-w-[30vw] text-center opacity-100 text-[hsl(var(--bc))] text-[hsl(var(--n))] flex flex-col rounded-2xl p-4 justify-center items-center bg-[hsl(var(--nc))]">
			<img src="https://www.svgrepo.com/show/146839/left-quote.svg" className="w-8 md:w-12" />
			<h1>This is an awesome place!</h1>
			<p>-Author</p>
		</div>
	);
};

export default Blog;
