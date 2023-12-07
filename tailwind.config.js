/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	theme: {
		extend: {
			colors: {
				"primary": "#07332F",
				"secondary": "#F7A582",
				"accent": "",
				"neutral": "#F3F3F3",
				"base-100": "#FFFFFF",
				"heading": "#0A0808",
				"title": "#3B3A3A",
				"subtitle": "#6C6B6B"
			},
			fontFamily: {
				"sans": ["Source sans 3", "sans-serif"],
			}
		},
	},
	plugins: [],
}

