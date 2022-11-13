/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["firebasestorage.googleapis.com"],
	},
};

module.exports = {
	images: {
		domains: ["googleapis.com" , "firebasestorage.googleapis.com" , "localhost" , "cdn.dribbble.com"],
	},
	reactStrictMode: true,
	swcMinify: true,
};
