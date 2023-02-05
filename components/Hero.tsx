import React, { useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/Auth";
import Link from "next/link";

const Hero = () => {
	const [Email, setEmail] = useState("");
	const [Password, setPassword] = useState("");
	const [ErrorMessage, setErrorMessage] = useState("");

	const SubmitHandler = () => {
		if (Email == null || "" || Password === null || "") {
			throw new Error("Enter a valid email or Password");
		}
		signInWithEmailAndPassword(auth, Email, Password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				if (
					errorMessage == "Firebase: Error (auth/invalid-email)" ||
					"Firebase: Error (auth/invalid-password)"
				) {
					setErrorMessage("Invalid username or password");
				}
				// ..
				return error;
			});
	};
	return (
		<>
			<div className="hero min-h-[90vh] bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center ml-8 lg:text-left">
						<h1 className="text-5xl font-bold">Login now!</h1>
						<p className="py-6">
							Continue browsing the wonderful animals near your area and adopt one today! Connect with
							your companion with a click of a button🐾🐈🐠🦦.
						</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="email"
									className="input input-bordered"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									placeholder="password"
									onChange={(e) => setPassword(e.target.value)}
									className="input input-bordered"
								/>
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">
										Forgot password?
									</a>
								</label>
								<label className="label">
									<p>
										Don`t have an Account yet?{" "}
										<Link href="/sign-up" className="opacity-90 hover:underline hover:opacity-100">
											Sign Up!
										</Link>
									</p>
								</label>
								{ErrorMessage === "" ? "" : <h1 className="text-[hsl(var(--er))]">{ErrorMessage}</h1>}
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary" onClick={SubmitHandler}>
									Login
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hero bg-base-200">
				<div className="hero-content group flex-col md:flex-row transition-all duration-300 ease-in-out p-12 bg-base-300 rounded-xl">
					<img
						src="https://wallpapercave.com/dwp1x/wp581113.jpg"
						alt="Cute cat Image"
						className="rounded-xl transition m-4 ease-in-out delay-150 font-bold group-hover:scale-105 group-hover:translate-x-4 shadow-xl"
					/>
					<div className="p-8 group">
						<h1 className="font-bold text-4xl mb-4 bg-left-bottom bg-gradient-to-r from-[hsl(var(--s))] to-[hsl(var(--sc))] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:90%_2px] transition-all duration-500 ease-out">
							Adopt your friend 🐈
						</h1>
						<p className="">
							Something else will be here Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							pariatur eaque ipsa deleniti commodi perspiciatis eligendi et, eius beatae voluptatibus
							voluptas dolore veritatis quas tenetur quasi est! Odio, eveniet quos?
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
