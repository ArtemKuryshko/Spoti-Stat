/** @type {import('tailwindcss').Config} */

const { transparent, white } = require('tailwindcss/colors')

const colors = {
	transparent,
	white,
	black: '#121212',
	primary: '#1ED753',
	light_grey: '#848484',
	light_green: '#3be276',
	grey: '#9E988A',
	dark_grey: '#181818'
}

export default {
	darkMode: 'selector',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors,
		extend: {
			background: {
				'gradient-main':
					'linear-gradient(180deg, #232323 45.88%, #121212 100%)',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			backgroundImage: {
				'radial-gradient':
					'radial-gradient(circle,rgba(0, 255, 179, 0.75) 0%, rgba(29, 215, 94, 0.75) 30%, rgba(0, 255, 81, 0.75) 62%, rgba(29, 215, 94, 0.75) 97%, rgba(1, 1, 1, 0.55) 100%);'
			},
			boxShadow: {
				soft: '0 8px 4px rgba(0, 0, 0, 0.1)',
				deep: '0 10px 8px 2px rgba(0, 0, 0, 0.15)'
			}
		}
	},
	plugins: []
}
