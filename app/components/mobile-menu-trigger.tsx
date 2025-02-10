import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  onClick: (state: boolean) => void
  className?: string
}

const MobileMenuTrigger: React.FC<Props> = ({ className, onClick }) => {
	return (
		<div className={cn(`w-9 flex-col gap-1.5 flex`, className)} onClick={() => onClick(true)}>
			<div className={`h-0.5 w-full bg-neutral rounded-t-full`}></div>
			<div className={`h-0.5 w-full bg-neutral`}></div>
			<div className={`h-0.5 w-full bg-neutral rounded-b-full`}></div>
		</div>
	)
}

export default MobileMenuTrigger
