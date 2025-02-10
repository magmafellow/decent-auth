import { Switch } from '@/components/ui/switch'
import React, { Suspense } from 'react'
import SessionInfo from '@/app/auth-welcome/profile/session-info'
import Header from '@/app/components/header'
import DefContainer from '@/app/components/def-container'
import UserInfo from '@/app/auth-welcome/profile/user-info'
import SkeletonInfo from './skeleton-info'
import Button from '@/app/components/button'
import { signoutUser } from '@/app/lib/actions/user'

const Page = () => {
	return (
		<div className=''>
			<Header />

			<DefContainer>
				<main>
					<div className={`pt-[128px] max-[906px]:flex-col flex gap-5 mb-[23px]`}>
						<Suspense fallback={<SkeletonInfo />}>
							<SessionInfo />
						</Suspense>
						<Suspense fallback={<SkeletonInfo />}>
							<UserInfo />
						</Suspense>
					</div>

					<Button semantic='ghost' onClick={signoutUser}>Signout</Button>
				</main>
			</DefContainer>
		</div>
	)
}

export default Page
