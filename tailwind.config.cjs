const colors = require('tailwindcss/colors')

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				sky: colors.sky,
				rose: colors.rose,
				emerald: colors.emerald,
				teal: colors.teal
			}
		},
	},
	plugins: [],
	variants: {
		extend: {
			display: ['dark'],
		}
	}
};

module.exports = config;
