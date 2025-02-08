import type { Config } from 'tailwindcss'

export default {
	darkMode: ['class'],
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				accent: 'var(--accent)',
				accentL: 'var(--accent-light)',  // accentL = accentLight
				accentS: 'var(--accent-strong)',  // accentS = accentStrong

				destruct: 'var(--destruct)',
				destructL: 'var(--destruct-light)',
				destructS: 'var(--destruct-strong)',

				neutral2: 'var(--neutral2)',
				neutral2L: 'var(--neutral2-light)',
				neutral2S: 'var(--neutral2-strong)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config
