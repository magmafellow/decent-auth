import Button from '@/app/components/button'
import MobileMenuTrigger from '@/app/components/mobile-menu-trigger'
import { signoutUser } from '@/app/lib/actions/user'
import useMobileMenu from '@/app/stores/dialogs/mobile-menu'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'

import React from 'react'

const MobileMenu = () => {
	const { isOpen, changeOpenState } = useMobileMenu()

	return (
		<Sheet open={isOpen} onOpenChange={changeOpenState}>
			<SheetTrigger>Open</SheetTrigger>
			<SheetContent className=''>
				<SheetHeader className='sr-only'>
					<SheetTitle>Mobile Menu</SheetTitle>
					<SheetDescription>Mobile menu referencing to header nav</SheetDescription>
				</SheetHeader>
				<MobileMenuTrigger onClick={() => changeOpenState(false)} className={`absolute top-[38px] left-5`} />

				<div className='pt-[100px] h-full flex flex-col'>
					<ul className='flex flex-col items-center text-[32px] gap-[58px]'>
						<li>
							<Link href='/get-started'>Get started</Link>
						</li>
						<li>
							<Link href='/auth-welcome/signup'>Signup</Link>
						</li>
						<li>
							<Link href='/auth-welcome/login'>Login</Link>
						</li>
            <li>
              <Link href='/auth-welcome/profile'>Profile</Link>
            </li>
						<li>
							<Link href='/auth-welcome/still'>Ask question</Link>
						</li>
					</ul>

          <div className='space_expander flex-grow'></div>
          
          <Button semantic='destruct' onClick={async () => signoutUser()}>
            SignOut
          </Button>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default MobileMenu
