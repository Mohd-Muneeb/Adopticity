import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { auth } from "../auth/Auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";

function MyApp({ Component, pageProps }: AppProps) {
	const [user, loading] = useAuthState(auth);

	return (
		<>
			<Head>
				<title>Adopticity</title>
				<meta
					name="A web app to ease the adoption system for animals"
					content="A adoption website for animals!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-base-100 pt-4 font-poppins">
				<Navbar user={user?.displayName} />
				<Component {...pageProps} user={user} loading={loading} />
			</div>
		</>
	);
}

export default MyApp;
