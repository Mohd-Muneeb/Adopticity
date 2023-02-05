import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/Auth";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import Footer from "../components/Footer";
import { db } from "../db/collections/firebase";
import { storage } from "../db/files";
import { ref, uploadBytes } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Loading from "../components/Loading";

const SignUp = (props: any) => {
	const [user, loading] = useAuthState(auth);

	const router = useRouter();
	if (loading) {
		return <Loading />;
	}
	if (user) {
		router.push("/");
	}

	return (
		<div>
			<main className="min-h-[80vh] flex justify-center items-center my-12">
				<SignUpForm />
			</main>
			<Footer />
		</div>
	);
};

const SignUpForm = () => {
	const [ShowPassword, setShowPassword] = useState<boolean>(false);
	const [FirstName, setFirstName] = useState<string>("");
	const [SecondName, setSecondName] = useState<string>("");
	const [Email, setEmail] = useState<string>("");
	const [Password, setPassword] = useState<string>("");
	const [RetypePassword, setRetypePassword] = useState<string>("");
	const [SignUpError, setSignUpError] = useState<string>("");
	const [UID, setUID] = useState<string>("");
	const [File, setFile] = useState<Blob>();

	const handleSignUp = async () => {
		if (RetypePassword !== Password) {
			setSignUpError("Passwords don`t match");
			throw new Error("Passwords don`t match");
		}
		if (/\S+@\S+\.\S+/.test(Email)) {
			setSignUpError("Invalid Email Id");
		}

		createUserWithEmailAndPassword(auth, Email, Password)
			.then(async (userCredential) => {
				// Signed in
				const user = userCredential.user;
				setUID(user.uid);
				console.log("User has been created with ", user.uid);
				await setDoc(doc(db, "users", user.uid), {
					name: `${FirstName} ${SecondName}`,
					email: `${Email}`,
					uid: user.uid,
					metadata: user.metadata,
					phone: user.phoneNumber,
					provider: user.providerId,
					orders: [],
					token: "",
					address: {},
					cartID: "",
					wishlist: [],
					servicesHistory: [],
					activeServices: [],
				});
				uploadImages();
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setSignUpError(error.Message);
			});

		// Add a new document in collection "users"
	};

	const uploadImages = () => {
		const storageRef = ref(storage, `user/profile-pics/${UID}-profilepic`);
		const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);

		const metadata = {
			contentType: "image/jpeg",
			user: UID,
			title: `${UID}-profile-pic`,
			uploadedAt: Timestamp,
		};

		// 'file' comes from the Blob or File API
		uploadBytes(storageRef, File != null ? File : bytes).then((snapshot) => {
			console.log("Uploaded a blob or file!");
		});
	};

	return (
		<div className="bg-base-200 rounded-2xl shadow-2xl p-12 flex flex-col min-w-[60vw] mx-4  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
			<h3 className="text-xl font-semibold m-6 underline">Create Account!</h3>
			<div className="flex flex-col items-center gap-4 justify-center mt-2">
				<div className="flex flex-col md:flex-row">
					<div className="m-2">
						<label>First Name</label>
						<input
							type="text"
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="Type here"
							className="input w-full max-w-xs"
						/>
					</div>
					<div className="m-2">
						<label>Last Name</label>
						<input
							type="text"
							placeholder="Type here"
							onChange={(e) => setSecondName(e.target.value)}
							className="input w-full max-w-xs"
						/>
					</div>
				</div>
				<div className="mb-2 flex flex-col w-full gap-4">
					{/* <div className="m-2">
						<label>
							<span className="text-[hsl(var(--p))]">@</span>Username
						</label>
						<input
							type="text"
							className="input w-full max-w-xs"
							placeholder="Username"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div> */}
					<div className="m-2 flex flex-col w-full">
						<label>Email</label>
						<input
							type="email"
							className="input w-full"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="m-2 flex flex-col w-full">
						<label className="m-0">Password</label>
						<div className="flex gap-2 w-full ">
							<input
								type={ShowPassword ? "text" : "password"}
								placeholder="Password(keep it safe)"
								className="input w-full "
								onChange={(e) => setPassword(e.target.value)}
							/>
							<label className="swap relative bg-base-200 p-2 rounded-xl text-center shadow-md">
								<input type="checkbox" onChange={(e) => setShowPassword(!ShowPassword)} />
								<div className="swap-on">HIDE</div>
								<div className="swap-off">SEE</div>
							</label>
						</div>
					</div>
					<div className="m-2 flex flex-col w-full">
						<label>Re-enter Password</label>
						<input
							type="password"
							onChange={(e) => setRetypePassword(e.target.value)}
							placeholder="Retype that secure password"
							className="input w-full"
						/>
					</div>
				</div>
				<input
					type="file"
					className="file-input w-full max-w-xs"
					onChange={(e: any) => setFile(e.target.files[0])}
				/>
				<button className="btn" onClick={handleSignUp}>
					Sign Up
				</button>
			</div>
			<p className="mt-4 text-sm">
				Already have an account? <a className="link">Sign In</a>
			</p>
		</div>
	);
};

export default SignUp;
