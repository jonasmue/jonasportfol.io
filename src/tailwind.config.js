module.exports = {
	purge: [
		// Use *.tsx if using TypeScript
		'./pages/**/*.js',
		'./components/**/*.js'
	],
	theme: {
		borderRadius: {
			none: 0,
			sm: "0.125rem",
			default: "0.25rem",
			md: "0.375rem",
			lg: "1.5rem"
		},
		extend: {},
	},
	variants: {},
	plugins: [],
}
