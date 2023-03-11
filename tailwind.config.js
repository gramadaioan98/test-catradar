/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue"
	],
	theme: {
		container: {
			center: true,
			screens: {
				DEFAULT: "1250px"
			},
			padding: {
				DEFAULT: "15px"
			}
		},
		extend: {
			colors: {
				primary: "#F8A35B",
				secondary: "#92F082"
			}
		}
	},
	plugins: []
};
