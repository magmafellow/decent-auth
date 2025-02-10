import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
	children: React.ReactNode
  className?: string
}

const Paragraph: React.FC<Props> = ({ children, className }) => {
	return <p className={cn(`text-neutral max-w-[700px]`, className)}>{children}</p>
}

export default Paragraph
