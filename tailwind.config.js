/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: ["winter"],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "dark",
	},
};