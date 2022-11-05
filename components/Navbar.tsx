import Link from "next/link";
import React, { MouseEventHandler } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";

const Navbar = (user: any) => {
	const router = useRouter();

	const handleSignOut = (e: any) => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				router.push("/login");
			})
			.catch((error) => {
				router.push("404.html");
				console.error(error);
			});
	};

	return (
		<div className="navbar w-[90vw] bg-base-300 ml-[5vw] rounded-2xl">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link href="/">Homepage</Link>
						</li>
						<li>
							<Link href="/portfolio">Portfolio</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<Link className="btn btn-ghost normal-case text-xl" href="/">
					Adopticity
				</Link>
			</div>
			<div className="navbar-end">
				<div className="flex-none gap-2">
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								{/* <img src="https://placeimg.com/80/80/people" /> */}
								<img src="https://firebasestorage.googleapis.com/v0/b/adopticity.appspot.com/o/user%2Fprofile-pics%2Fezgif.com-gif-maker.gif?alt=media&token=c147c038-d525-44dc-a231-509606990d65" />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
						>
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<button onClick={(e) => handleSignOut(e)}>
									Logout
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
