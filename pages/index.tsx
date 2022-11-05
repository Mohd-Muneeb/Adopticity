import type { NextPage } from "next";
import { useRouter } from "next/router";
import { auth } from "../auth/Auth";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import Dashboard from "../components/Dashboard";

const Home: NextPage = (user, { loading }) => {
	// const [user, loading] = useAuthState(auth);
	const router = useRouter();
	if (loading) {
		return <Loading />;
	}

	if (!user) {
		router.push("/login");
	}

	return (
		<div className="bg-base-200 min-w-screen">
			<Dashboard />
			<h1>You are logged in?</h1>
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

export default Home;
