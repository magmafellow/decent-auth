import { Switch } from '@/components/ui/switch'
import React, { Suspense } from 'react'
import SessionInfo from '@/app/auth-welcome/profile/session-info'
import Header from '@/app/components/header'
import DefContainer from '@/app/components/def-container'
import UserInfo from '@/app/auth-welcome/profile/user-info'
import SkeletonInfo from './skeleton-info'

const Page = () => {
	return (
		<div className=''>
			<Header />

			<DefContainer>
				<main className={`pt-[128px] max-[906px]:flex-col flex gap-5`}>
					<Suspense fallback={<SkeletonInfo />}>
						<SessionInfo />
					</Suspense>
					<Suspense fallback={<SkeletonInfo />}>
						<UserInfo />
					</Suspense>
				</main>
			</DefContainer>
		</div>
	)
}

export default Page
