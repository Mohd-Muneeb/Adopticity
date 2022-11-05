import React from "react";
import PropTypes from "prop-types";

const Stats = (props: any) => {
	return (
		<div className="flex flex-col justify-center items-center gap-8">
			<h1 className="text-2xl text-center mb-12">
				We have helped several people find a companion and several animals find a home!
				<br /> <span className="text-[hsl(var(--p))] -z-1 font-bold text-4xl">Help us in helping more!</span>
			</h1>
			<div className="stats md:flex-row flex-col flex shadow">
				<div className="stat place-items-center">
					<div className="stat-title">Downloads</div>
					<div className="stat-value">31K</div>
					<div className="stat-desc">From January 1st to February 1st</div>
				</div>

				<div className="stat place-items-center">
					<div className="stat-title">Users</div>
					<div className="stat-value text-primary">4,200</div>
					<div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
				</div>

				<div className="stat place-items-center">
					<div className="stat-title">New Registers</div>
					<div className="stat-value">1,200</div>
					<div className="stat-desc">↘︎ 90 (14%)</div>
				</div>
			</div>
            <h1 className="text-2xl mt-4">Become one of us!</h1>
		</div>
	);
};

Stats.propTypes = {};

export default Stats;
