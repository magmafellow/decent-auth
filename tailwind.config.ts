import type { Config } from 'tailwindcss'

export default {
	darkMode: ['class'],
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				accent: 'rgb(var(--accent) / var(--tw-bg-opacity, 1))',
				accentL: 'rgb(var(--accent-light) / var(--tw-bg-opacity, 1))',  // accentL = accentLight
				accentS: 'rgb(var(--accent-strong) / var(--tw-bg-opacity, 1))',  // accentS = accentStrong

				destruct: 'var(--destruct)',
				destructL: 'var(--destruct-light)',
				destructS: 'var(--destruct-strong)',

				neutral: 'rgb(var(--neutral) / var(--tw-bg-opacity, 1))',
				neutralL: 'rgb(var(--neutral-light) / var(--tw-bg-opacity, 1))',
				neutralS: 'rgb(var(--neutral-strong) / var(--tw-bg-opacity, 1))',
				
				neutral2: 'var(--neutral2)',
				neutral2L: 'var(--neutral2-light)',
				neutral2S: 'var(--neutral2-strong)',

				// A = primary B = secondary C = three
				surfaceB: 'rgb(var(--surface-secondary) / var(--tw-bg-opacity, 1))',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config
