import Head from "next/head";
import Image from "next/image";
import { userAgent } from "next/server";
import React, { useEffect, useState } from "react";
import { auth } from "../auth/Auth";
import Pets from "./Pets";
import "../assets/dashboardhero.png";
import Recommendations from "./Recommendations";

function Dashboard(props: any) {
	const [User, setUser] = useState<String>();

	useEffect(() => {
		if (!props.loading) {
			setUser(props.user !== null ? props.user.email : "Loading...");
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
					<div className="max-w-full md:max-w-[60%] flex flex-col items-center md:items-start p-12">
						<h1 className="font-lexend font-semibold flex text-[hsl(var(--nf))] justify-center items-start flex-col cursive text-3xl md:text-5xl text-center md:text-left  mb-4 bg-left-bottom bg-gradient-to-r from-[hsl(var(--n))] to-[hsl(var(--n))] bg-[length:1%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
							Find your <br /> perfect pet!
						</h1>
						<br />
						<p className="text-xl text-center md:text-left text-[hsl(var(--nf))]">
							We are always looking for new wonderful pets for you to adopt. We look forward to give you a
							new companion! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
							explicabo repellendus, reiciendis maiores quae, ipsa impedit architecto libero doloremque
							officia culpa eos. Quasi magni debitis autem minima velit laborum nisi!
						</p>
					</div>
					<div className="overflow-hidden ">
						<Image
							alt="Dashboard Hero Picture SVG"
							src="https://firebasestorage.googleapis.com/v0/b/adopticity.appspot.com/o/assets%2Fsomething-removebg.png?alt=media&token=63c98435-c36b-4a1e-b48a-0a8c2f31c073"
							className="min-h-[300px] transition ease-in-out duration-150 group-hover:-translate-y-6 group-hover:scale-105"
							width={700}
							height={700}
							// fill
						/>
					</div>
				</section>
				<hr className="h-[2px] w-[90vw] bg-[hsl(var(--nc))] ml-[5vw] mb-8" />
				<section className="bg-base-100 rounded-xl min-h-[50vh] w-[85vw] ml-[7.5vw] ">
					<Recommendations />
				</section>
			</main>
		</>
	);
}

export default Dashboard;
