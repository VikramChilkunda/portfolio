/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				slideFromLeft: {
					'0%': {transform: "translateX(-100%)", opacity: "0"},
					'100': {transform: "translateX(0%)", opacity: "1"}
				},
				slideFromRight: {
					'0%': {transform: "translateX(70%)", opacity: "0"},
					'100': {transform: "translateX(0%)", opacity: "1"}
				},
				typing: {
					'0%': {width: '0ch'},
					'100%': {width: '19ch'}
				},
				//takes 1.5s for typing to finish
				fadeIn: {
					'0%': {opacity: "0"},
					'78%': {opacity: "0"},
					'100': {opacity: "1"}
				},
				borderAppear: {
					'0%': {borderColor: "transparent"},
					'100%': {borderColor: "black"}
				},
				grow: {
					'0%': {height: 0, opacity: 0},
					'78%': {height: 0, opacity: "1"},
					'100%': {height: '100%'}
				}
			},
			animation: {
				slideFromLeft: 'slideFromLeft .75s ease-in-out',
				slideFromRight: 'slideFromRight .75s ease-in-out',
				typing: "typing 1.5s steps(35, end) 1s 1 normal both",
				blinking:  "blinking 1s step-end infinite",
				fadeIn: 'fadeIn 3.25s ease-in-out',
				grow: "grow 3.25s ease-in-out"
			}
		},
	},
	plugins: [],
}
