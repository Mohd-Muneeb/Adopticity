import type { NextPage } from "next";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Dashboard from "../components/Dashboard";

const Home: NextPage = (props: any) => {
	// const [user, loading] = useAuthState(auth);
	console.log(props.user, props.loading);
	const router = useRouter();
	if (props.loading) {
		return <Loading />;
	}
	if (props.user == null) {
		router.push("/login");
		console.log("Login Muneeb");
	}

	return (
		<div className="bg-base-100 min-w-screen">
			<Dashboard user={props.user} loading={props.loading} />
			<Footer />
		</div>
	);
};

export default Home;
