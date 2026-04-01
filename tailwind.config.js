/** @type {import('tailwindcss').Config} */
export default {
	content: [
		// reference the library only
		'./lib/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			// ─── Color Palette ──────────────────────────────────────────
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

			// ─── Typography Scale (modular 1.25) ───────────────────────
			fontSize: {
				'anime-xs': '0.75rem',
				'anime-sm': '0.875rem',
				'anime-base': '1rem',
				'anime-md': '1.125rem',
				'anime-lg': '1.25rem',
				'anime-xl': '1.5rem',
				'anime-2xl': '1.875rem',
				'anime-3xl': '2.25rem',
				'anime-4xl': '3rem',
				'anime-5xl': '3.75rem',
				'anime-display': '4.5rem',
			},
			lineHeight: {
				'anime-tight': '1.15',
				'anime-snug': '1.3',
				'anime-normal': '1.5',
				'anime-relaxed': '1.625',
				'anime-loose': '2',
			},
			fontWeight: {
				'anime-normal': '400',
				'anime-medium': '500',
				'anime-semibold': '600',
				'anime-bold': '700',
				'anime-black': '900',
			},
			letterSpacing: {
				'anime-tight': '-0.025em',
				'anime-normal': '0em',
				'anime-wide': '0.025em',
				'anime-wider': '0.05em',
			},
			fontFamily: {
				anime: ['"Press Start 2P"', 'cursive'],
				'anime-body': ['"M PLUS Rounded 1c"', '"Nunito"', 'sans-serif'],
			},

			// ─── Spacing (4px base) ────────────────────────────────────
			spacing: {
				'anime-0': '0px',
				'anime-0.5': '0.125rem',
				'anime-1': '0.25rem',
				'anime-1.5': '0.375rem',
				'anime-2': '0.5rem',
				'anime-2.5': '0.625rem',
				'anime-3': '0.75rem',
				'anime-4': '1rem',
				'anime-5': '1.25rem',
				'anime-6': '1.5rem',
				'anime-8': '2rem',
				'anime-10': '2.5rem',
				'anime-12': '3rem',
				'anime-16': '4rem',
				'anime-20': '5rem',
				'anime-24': '6rem',
			},

			// ─── Elevation / Shadows ───────────────────────────────────
			boxShadow: {
				'anime-none': 'none',
				'anime-low': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
				'anime-medium': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
				'anime-high': '0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.08)',
				'anime-highest': '0 20px 50px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.1)',
				'anime-sm': '0 2px 8px rgba(236, 72, 153, 0.2)',
				'anime-md': '0 4px 16px rgba(236, 72, 153, 0.3)',
				'anime-lg': '0 8px 32px rgba(236, 72, 153, 0.4)',
				'anime-glow-sm': '0 0 8px rgba(236, 72, 153, 0.3)',
				'anime-glow': '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
				'anime-glow-lg': '0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(168, 85, 247, 0.4), 0 0 90px rgba(236, 72, 153, 0.2)',
				'anime-neon-sm': '0 0 5px rgba(236, 72, 153, 0.6), 0 0 10px rgba(236, 72, 153, 0.3)',
				'anime-neon': '0 0 5px rgba(236, 72, 153, 0.8), 0 0 10px rgba(236, 72, 153, 0.6), 0 0 20px rgba(236, 72, 153, 0.4)',
				'anime-neon-lg': '0 0 5px rgba(236, 72, 153, 0.8), 0 0 15px rgba(236, 72, 153, 0.6), 0 0 30px rgba(236, 72, 153, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)',
			},

			// ─── Border Radius ─────────────────────────────────────────
			borderRadius: {
				'anime-none': '0px',
				'anime-sm': '0.25rem',
				'anime-md': '0.5rem',
				'anime-lg': '0.75rem',
				'anime-xl': '1rem',
				'anime-2xl': '1.5rem',
				'anime-full': '9999px',
				'anime-manga': '1.35rem',
			},

			// ─── Border Width ──────────────────────────────────────────
			borderWidth: {
				'anime-thin': '1px',
				'anime-medium': '2px',
				'anime-thick': '3px',
				'anime-manga': '4px',
			},

			// ─── Transition Duration (Motion) ──────────────────────────
			transitionDuration: {
				'anime-instant': '50ms',
				'anime-fast': '150ms',
				'anime-normal': '300ms',
				'anime-slow': '500ms',
				'anime-glacial': '1000ms',
			},

			// ─── Transition Timing Function (Easing) ───────────────────
			transitionTimingFunction: {
				'anime-default': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'anime-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'anime-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
				'anime-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'anime-sharp': 'cubic-bezier(0.4, 0, 0.6, 1)',
			},

			// ─── Z-Index Scale ─────────────────────────────────────────
			zIndex: {
				'anime-base': '0',
				'anime-dropdown': '10',
				'anime-sticky': '20',
				'anime-popover': '30',
				'anime-modal': '40',
				'anime-overlay': '40',
				'anime-toast': '50',
				'anime-maximum': '9999',
			},
		},
	},
	plugins: [],
}
