'use client'

import React from 'react'
import DefContainer from '@/app/components/def-container'
import Link from 'next/link'
import useMobileMenu from '@/app/stores/dialogs/mobile-menu'
import MobileMenu from '@/components/ui/sheets/mobile-menu'
import MobileMenuTrigger from './mobile-menu-trigger'

const Header = () => {
	const { changeOpenState } = useMobileMenu()

	return (
		<>
			<MobileMenu />

			<div className={`header bg-surfaceB h-[90px] fixed left-0 top-0 w-full z-10`}>
				<DefContainer className={`h-full flex items-center justify-between`}>
					<div className={`logotype_box group`}>
						<Link href='/auth-welcome' className='text-[22px] relative font-semibold text-neutralL'>
							<span className='relative z-10'>DecentAuth</span>
							{/* <img className='w-6 h-6 group-hover:z-10 absolute -top-2 -right-1' src="/assets/img/logo.svg" alt="logo" /> */}
							<img className='w-6 h-6 group-hover:z-10 absolute -top-2 -left-2' src='/assets/img/logo.svg' alt='logo' />
						</Link>
					</div>
					<nav className={`max-[767px]:hidden`}>
						<ul className='flex text-base text-neutral items-center gap-4'>
							{/* <li>
              <Link className='hover:underline' href='#'>Getting started</Link>
            </li>
            <li>
              <Link className='hover:underline' href='#'>API reference</Link>
            </li>
            <li>
              <Link className='hover:underline' href='#'>About</Link>
            </li>
            <li>
              <Link className='hover:underline' href='#'>Ask question</Link>
            </li> */}
							<li>
								<Link className='hover:underline' href='/get-started'>
									Getting started
								</Link>
							</li>
							<li>
								<Link className='hover:underline' href='/auth-welcome/signup'>
									Signup
								</Link>
							</li>
							<li>
								<Link className='hover:underline' href='/auth-welcome/login'>
									Login
								</Link>
							</li>
							<li>
								<Link className='hover:underline' href='/auth-welcome/profile'>
									Profile
								</Link>
							</li>
							<li>
								<Link className='hover:underline' href='/auth-welcome/ask-a-question'>
									Ask question
								</Link>
							</li>
						</ul>
					</nav>
					<MobileMenuTrigger onClick={changeOpenState} className='mobile_menu max-[767px]:flex hidden' />
				</DefContainer>
			</div>
		</>
	)
}

export default Header
