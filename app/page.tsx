import React from 'react'
import TechItem from '@/app/components/tech-item'
import Button from '@/app/components/button'
import Link from 'next/link'
import Header from '@/app/components/header'

const Page = () => {
	return (
		<div className={`h-screen flex justify-center items-center`}>
			<Link href='/auth-welcome'>
        <Button semantic='neutral'>
          Forward
        </Button>
      </Link>
		</div>
	)
}

export default Page
