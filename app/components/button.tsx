import React, { ReactNode } from 'react'

type Props = {
	// primary, secondary
	rang?: string
	// success, destruct, success
	semantic?: string

	children: ReactNode
	className?: string
}

const Button: React.FC<Props> = ({ rang = 'primary', semantic = 'accent', children, className }) => {
	const mainClass = 'inline-flex justify-center items-center gap-2 py-2 px-3 rounded-[8px] duration-200'

	let cummulativeClass = ''

	if (rang === 'primary') {
		if (semantic === 'accent') {
			const color = 'dark:bg-accent dark:hover:bg-accentL'
			const outline = 'dark:focus:outline dark:focus:outline-accentL dark:focus:outline-2 dark:focus:outline-offset-2'
			const focus = 'dark:focus:bg-accentL'
			cummulativeClass += [color, outline, focus].join(' ')
		} else if (semantic === 'neutral') {
			const outline = 'dark:focus:outline dark:focus:outline-[#d7d7d7] dark:focus:outline-2 dark:focus:outline-offset-2'
			cummulativeClass += `dark:bg-[#F6F6F6] dark:text-[#141414] dark:hover:bg-[#d7d7d7] ${outline}`
		} else if (semantic === 'ghost') {
			const outline = 'dark:focus:outline dark:focus:outline-[#4f4f4f] dark:focus:outline-1 dark:focus:hover:outline-2 dark:focus:outline-offset-2'
			cummulativeClass += `dark:bg-none dark:text-[#f6f6f6] dark:hover:bg-[#4f4f4f] ${outline}`
		} else if (semantic === 'destruct') {
			const color = 'dark:bg-destruct dark:hover:bg-destructL'
			const outline = 'dark:focus:outline dark:focus:outline-destructL dark:focus:outline-2 dark:focus:outline-offset-2'
			const focus = 'dark:focus:bg-destructL'
			cummulativeClass += [color, outline, focus].join(' ')
		} else if (semantic === 'outline') {
			const color = 'border dark:border-neutral2 dark:bg-transparent dark:hover:bg-neutral2'
			const outline = 'dark:focus:outline dark:focus:outline-neutral2 dark:focus:outline-2 dark:focus:outline-offset-2'
			const focus = 'dark:focus:bg-neutral2'
			cummulativeClass += [color, outline, focus].join(' ')
		}
	}

	if (rang === 'secondary') {
		if (semantic === 'neutral') {
			const color = 'dark:bg-neutral2 dark:hover:bg-neutral2L'
			const outline = 'dark:focus:outline dark:focus:outline-neutral2L dark:focus:outline-2 dark:focus:outline-offset-2'
			const focus = 'dark:focus:bg-neutral2L'
			cummulativeClass += [color, outline, focus].join(' ')
		}
	}

	return <button className={`${mainClass} ${cummulativeClass} ${className}`}>{children}</button>
}

export default Button
