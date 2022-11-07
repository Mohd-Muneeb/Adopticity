/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins"],
				"shadows-into-light": ["Shadows-Into-Light", "cursive"],
				quicksand: "Quicksand",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: ["winter","dark"],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		lightTheme: "winter",
		darkTheme: "dark",
	},
};
