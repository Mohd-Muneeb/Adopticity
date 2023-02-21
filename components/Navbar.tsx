import Link from "next/link";
import React, { MouseEventHandler } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import Image from "next/image";

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
		<nav className="navbar w-[90vw] bg-base-300 ml-[5vw] md:mx-[5vw] z-10 rounded-xl">
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
							<Link href="/pets">Pets</Link>
						</li>
						<li>
							<Link href="https://mohdmuneeb.live" target="_blank">
								Portfolio
							</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/contact">Contact Us</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<Link className="btn btn-ghost rounded-sm normal-case text-xl" href="/">
					Adopticity
				</Link>
			</div>
			<div className="navbar-end">
				<div className="form-control hidden md:block">
					<input type="text" placeholder="Search" className="input input-bordered" />
				</div>
				<div className="flex-none md:mx-4">
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<div className="indicator">
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
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								<span className="badge badge-sm indicator-item">8</span>
							</div>
						</label>
						<div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
							<div className="card-body">
								<span className="font-bold text-lg">8 Items</span>
								<span className="text-info">Subtotal: $999</span>
								<div className="card-actions">
									<a className="btn btn-primary btn-block" href="/cart">View cart</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-none gap-2">
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full relative">
								<Image
									src="https://firebasestorage.googleapis.com/v0/b/adopticity.appspot.com/o/user%2Fprofile-pics%2Fezgif.com-gif-maker.gif?alt=media&token=c147c038-d525-44dc-a231-509606990d65"
									alt="Something here"
									fill
								/>
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
								<button onClick={(e) => handleSignOut(e)}>Logout</button>
							</li>
						</ul>
					</div>
				</div> 
			</div>
		</nav>
	);
};

export default Navbar;
