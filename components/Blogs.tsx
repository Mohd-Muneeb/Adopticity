import React from "react";
import PropTypes from "prop-types";
import Blog from "./Blog";

const Blogs = (props: any) => {
	return (
		<main className="flex flex-col justify-center shadow-xl items-center gap-8">
			<h1 className="text-3xl">Look what <span className="text-[hsl(var(--p))]">people</span> have to say about us!</h1>
			<div className="carousel carousel-center max-w-[80vw] flex-col md:flex-row justify-center gap-4  p-4 opacity-100 bg-base-300 space-x-4 h-[40vh] shadow-xl rounded-xl">
				<div className="carousel-item">
					<Blog />
				</div>
				<div className="carousel-item">
					<Blog />
				</div>
				<div className="carousel-item">
					<Blog />
				</div>
				<div className="carousel-item">
					<Blog />
				</div>
				<div className="carousel-item">
					<Blog />
				</div>
				<div className="carousel-item">
					<Blog />
				</div>
				<div className="carousel-item">
					<Blog />
				</div>
			</div>
		</main>
	);
};

Blogs.propTypes = {};

export default Blogs;
