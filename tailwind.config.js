/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins"],
				"shadows-into-light": ["Shadows-Into-Light", "cursive"],
				quicksand: "Quicksand",
				lexend: ["Lexend"],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		// themes: ["winter","dark", "lofi"],
		themes: [
			"winter",
			"dark",
			"lofi",
			"cupcake",
			{
				mytheme: {
					primary: "#FF7F50",

					secondary: "#FE828C",

					accent: "#EBCFC4",

					neutral: "#0000",

					"base-100": "#FFFFFF",

					info: "#3ABFF8",

					success: "#36D399",

					warning: "#FBBD23",

					error: "#991b1b",
				},
			},
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		lightTheme: "winter",
		darkTheme: "cupcake",
	},
};
