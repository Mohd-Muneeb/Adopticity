import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../auth/Auth";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";

const Login = () => {
	const [user, loading] = useAuthState(auth);
	const router = useRouter();
	if (loading) {
		return <progress className="progress h-[80vh] bg-base-200 flex justify-center items-center w-56"></progress>;
	}
	if (user) {
		router.push("/");
	}

	return (
		<div className="bg-base-200 min-w-screen">
			<Hero />
			<div className="h-full mt-[20vh] mb-[10vh] flex justify-center items-center">
				<Stats />
			</div>
			<div className="shadow">
				<Blogs />
			</div>
			<Footer />
		</div>
	);
};

export default Login;
