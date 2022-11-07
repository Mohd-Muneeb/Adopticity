import Head from "next/head";
import Image from "next/image";
import { userAgent } from "next/server";
import React, { useEffect, useState } from "react";
import { auth } from "../auth/Auth";
import Pets from "./Pets";

const Dashboard = (props: any) => {
	// type User = {
	// 	displayName: string;
	// };

	// console.log(props.user);
	const [User, setUser] = useState<String>();

	useEffect(() => {
		if (!props.loading) {
			setUser(props.user.email);
		} else {
			setUser("Loading...");
		}
		return () => {
			setUser("Anon");
		};
	}, [props.user, props.loading, User]);

	return (
		<>
			<main className="w-full">
				<section className="ease-in-out transition duration-150 w-[90vw] group ml-[5vw] my-8 flex bg-gradient-to-tr via-[hsl(var(--a))] to-[hsl(var(--s))] from-[hsl(var(--pf))] rounded-2xl pt-8 items-center justify-center flex-col min-h-full md:flex-row justify-items-stretch gap-8">
					<div className="max-w-full md:max-w-[60%] flex flex-col items-center md:items-start px-4">
						<h1 className="font-shadows-into-light flex text-[hsl(var(--nf))] justify-center items-start flex-col cursive text-3xl md:text-5xl text-center md:text-left  mb-4 bg-left-bottom bg-gradient-to-r from-[hsl(var(--p))] to-[hsl(var(--nc))] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
							<br /> Find your <br /> perfect pet!
						</h1>
						<br />
						<p className="text-xl text-center md:text-left text-[hsl(var(--nf))]">
							We are always looking for new wonderful pets for you to adopt. We look forward to give you a
							new companion!{" "}
						</p>
					</div>
					<div className="z-10 h-full">
						<img
							src="https://firebasestorage.googleapis.com/v0/b/adopticity.appspot.com/o/assets%2FdashboardImageDog.png?alt=media&token=080d452f-e0a3-4bf3-aaaa-22d2b4571da8"
							className="md:max-h-[500px] max-h-[400px]"
						/>
					</div>
				</section>
				<hr className="h-[2px] w-[90vw] bg-[hsl(var(--nc))] ml-[5vw] mb-8" />
				<section className="bg-base-300 rounded-xl min-h-[50vh] w-[85vw] ml-[7.5vw]">
					<Pets />
				</section>
			</main>
		</>
	);
};

export default Dashboard;
