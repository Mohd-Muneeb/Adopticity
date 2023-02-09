/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["firebasestorage.googleapis.com", "source.unsplash.com"],
	},
};

module.exports = {
	images: {
		domains: ["googleapis.com", "firebasestorage.googleapis.com", "localhost", "images.unsplash.com", "source.unsplash.com", "cdn.dribbble.com"],
	},
	reactStrictMode: true,
	swcMinify: true,
};
