import React from 'react'
import TechItem from '@/app/components/tech-item'
import Button from '@/app/components/button'
import Link from 'next/link'
import Header from '@/app/components/header'

const Page = () => {
	const stack = [
		{
			label: 'Drizzle',
			href: 'https://orm.drizzle.team/',
		},
		{
			label: 'Auth.JS',
			href: 'https://authjs.dev/',
		},
		{
			label: 'Neon',
			href: '',
		},
		{
			label: 'Zustand',
			href: 'https://zustand-demo.pmnd.rs/',
		},
		{
			label: 'RadixUI',
			href: 'https://www.radix-ui.com/',
		},
		{
			label: 'Shadcn',
			href: 'https://ui.shadcn.com/',
		},
		{
			label: 'react-hook-form',
			href: 'https://react-hook-form.com/',
		},
		{
			label: 'maskito',
			href: 'https://maskito.dev/frameworks/react'
		}
	]

	return (
		<div className={``}>
			<Header />
			<main className={`pt-[195px] max-[1246px]:pt-[172px] max-[656px]:pt-[146px] pb-8 flex justify-center`}>
				<div className={`max-[656px]:px-2`}>
					<h1 className={`text-[52px] max-[1246px]:text-center max-[1246px]:text-[44px] max-[656px]:text-[32px] font-medium mb-6 text-neutralL`}>
						Auth <span className='underline decoration-2 underline-offset-4'>working</span> Next.JS instance.
					</h1>
					<p className={`text-2xl max-[1246px]:text-center max-[656px]:text-left max-[1246px]:text-[20px] text-neutral mb-10`}>The robust code base to start a new next.js project with:</p>
					<ul className={`flex max-w-[444px] mb-[12px] mx-auto flex-wrap justify-center gap-6 items-start`}>
						{stack.map(tech => (
							<li key={tech.label} className=''>
								<TechItem href={tech.href}>{tech.label}</TechItem>
							</li>
						))}
					</ul>
					<div className='h-[190px] mb-3'>
						<img className='mx-auto h-full' src='/assets/img/utils/point-arrow-bottom.svg' alt='arrow bottom' />
					</div>
					<div className={`flex justify-center`}>
						<Link href='/auth-welcome/signup'>
							<Button semantic='neutral' className={``}>Try it out</Button>
						</Link>
					</div>
				</div>
			</main>

			<div
				className={`
			max-[1480px]:w-[250px] max-[1480px]:h-[250px]
			max-[1246px]:w-[134px] max-[1246px]:h-[134px] max-[1246px]:bottom-[95px]
			max-[656px]:w-[43px] max-[656px]:h-[43px] max-[656px]:bottom-[44px] 
			decor_green fixed bottom-0 left-0
			
			
			`}
			>
				<img
					className={`
					h-full w-full object-cover
					
				`}
					src='/assets/img/home/decor-green.svg'
					alt='decor-green svg'
				/>
			</div>

			<div
				className={`
					max-[1480px]:w-[250px] max-[1480px]:h-[250px]
					max-[1246px]:w-[137px] max-[1246px]:h-[137px] max-[1246px]:bottom-[199px] max-[1246px]:top-auto
					max-[656px]:w-[44px] max-[656px]:h-[44px] max-[656px]:bottom-[131px] 
					decor_green w-[362px] h-[362px] fixed right-0 top-[90px]
			
			
			`}
			>
				<img
					className={`
							h-full w-full object-cover
				`}
					src='/assets/img/home/decor-accent.svg'
					alt='decor-accent svg'
				/>
			</div>
		</div>
	)
}

export default Page
