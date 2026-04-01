/** @type {import('tailwindcss').Config} */
export default {
	content: [
		// reference the library only
		'./lib/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				anime: {
					sakura: '#f9a8d4',
					lavender: '#c084fc',
					sky: '#7dd3fc',
					mint: '#6ee7b7',
					sunset: '#fb923c',
					gold: '#fbbf24',
					coral: '#fb7185',
					ocean: '#38bdf8',
					rose: '#ec4899',
					violet: '#a855f7',
				},
			},
			fontFamily: {
				anime: ['"Press Start 2P"', 'cursive'],
				'anime-body': ['"M PLUS Rounded 1c"', '"Nunito"', 'sans-serif'],
			},
			boxShadow: {
				'anime-sm': '0 2px 8px rgba(236, 72, 153, 0.2)',
				'anime-md': '0 4px 16px rgba(236, 72, 153, 0.3)',
				'anime-lg': '0 8px 32px rgba(236, 72, 153, 0.4)',
				'anime-glow': '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
				'anime-neon': '0 0 5px rgba(236, 72, 153, 0.8), 0 0 10px rgba(236, 72, 153, 0.6), 0 0 20px rgba(236, 72, 153, 0.4)',
			},
		},
	},
	plugins: [],
}
