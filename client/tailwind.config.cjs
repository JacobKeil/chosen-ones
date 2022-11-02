/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			mobile: '480px',
			tablet: '960px',
			desktop: '1248px'
		},
		colors: {
			black: '#060706',
			white: '#F3F3F3',
			orange: '#FFB966',
			slate: '#262D46',
			darkSlate: '#1D2337',
			red: '#D41B1B',
			green: '#2B9D38',
			teal: '#75DFE1',
			lightBlue: '#DADEEC'
		},
		fontSize: {
			xs: ['14px'],
			sm: ['16px'],
			lg: ['18px'],
			xl: ['24px'],
			'2xl': ['36px'],
			'3xl': ['48px'],
			'4xl': ['56px'],
			'5xl': ['80px']
		},
		extend: {
			height: {
				sm: ['400px'],
				md: ['600px'],
				lg: ['800px']
			},
			maxWidth: {
				big: ['110rem']
			}
		}
	},
	plugins: []
};