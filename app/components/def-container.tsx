import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
	children: React.ReactNode
	className?: string
}

const DefContainer: React.FC<Props> = ({ children, className }) => {
	return <div className={cn(`default_container mx-auto px-1.5 md:px-2 lg:px-3 xl:max-w-screen-xl`, className)}>{children}</div>
}

export default DefContainer
