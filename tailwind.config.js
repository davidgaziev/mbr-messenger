import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.tsx'
	],

	theme: {
		extend: {
			width: {
				0.2: '0.2rem'
			},
			fontFamily: {
				sans: ['Figtree', ...defaultTheme.fontFamily.sans],
				ttnorms: ['TTNorms']
			},
			borderWidth: {
				3: '3px'
			},
			boxShadow: {
				'active-link': '0px 0px 10px 5px rgba(42,139,242,0.44)',
				'hover-logout': '0px 0px 10px 5px rgba(242,42,70,0.44)'
			}
		}
	},

	plugins: [forms]
}
