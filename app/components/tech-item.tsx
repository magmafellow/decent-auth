import React from 'react'
import { ubuntuMono } from '@/app/fonts'
import Link from 'next/link'

type Props = {
	children: React.ReactNode
	href?: string
}

const TechItem: React.FC<Props> = ({ children, href }) => {
	return href ? (
		<Link
			href={href}
			className={`${ubuntuMono.className} ${
				href.includes('authjs') ? 'bg-amber-700 !border-amber-600 hover:!bg-amber-600' : ''
			} inline-block font-bold text-2xl border-2 border-accent p-2.5 rounded-lg hover:border-transparent hover:bg-accent`}
		>
			{children}
		</Link>
	) : (
		<div className={`${ubuntuMono.className} font-bold text-2xl border-2 border-accent p-2.5 rounded-lg hover:border-transparent hover:bg-accent`}>
			{children}
		</div>
	)
}

export default TechItem
