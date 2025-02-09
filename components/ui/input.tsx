import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'> & { isError?: boolean }>(
	({ className, type, isError, value, ...props }, ref) => {
		const focus = 'focus:outline-none focus:outline-offset-2 focus:border-accent focus:outline-2 focus:outline-accentL'
		const hover = 'hover:bg-[#0B0B0B]'
		const error = isError ? 'border-destructL' : ''
		const focus_error = isError ? 'focus:border-destruct focus:outline-destructL' : ''

		return (
			<input
				type={type}
				className={cn(
					'border !leading-none bg-[#000000] border-[#595959] rounded-[4px] py-3 px-5 font-light text-lg placehoder:text-[#A4A4A4]',
					focus,
					hover,
					error,
					focus_error,
					className,
				)}
				ref={ref}
				{...props}
				value={value}
			/>
		)
	},
)
Input.displayName = 'Input'

export { Input }
