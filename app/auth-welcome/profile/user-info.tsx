import { getUserFromDbById } from '@/app/lib/actions/user'
import { auth } from '@/auth'
import { Switch } from '@radix-ui/react-switch'
import React from 'react'

const UserInfo = async () => {
	// artificial delay
	// await new Promise((resolve, reject) => {
	//   setTimeout(() => resolve(true), 3500)
	// })

	const session = await auth()

	if (!session) {
		return (
			<div className={`flex justify-center items-center bg-surfaceB basis-1/2 p-6 max-[906px]:min-h-min min-h-[392px] rounded-[24px]`}>
				<h2 className='text-[26px] text-destruct'>No session found</h2>
			</div>
		)
	}

	const user = await getUserFromDbById(session.user.id!)

	if (!user) {
		return (
			<div className={`flex justify-center items-center bg-surfaceB basis-1/2 p-6 max-[906px]:min-h-min min-h-[392px] rounded-[24px]`}>
				<h2 className='text-[26px] text-destruct'>No user found</h2>
			</div>
		)
	}

	const entries = Object.entries(user)
	const sortedEntries = entries.sort(([key1, _value1], [key2, _value2]) => (key1.length > key2.length ? 1 : -1))

	return (
		<div className={`bg-surfaceB basis-1/2 p-6 max-[906px]:min-h-min min-h-[392px] rounded-[24px]`}>
			<div className='flex justify-between mb-6 items-center'>
				<h2 className='text-[26px] text-neutralL'>User Info</h2>
				<Switch />
			</div>
			<ul className='flex flex-col gap-4'>
				{sortedEntries.map(([key, value]) => (
					<li key={key} className='flex leading-none text-lg gap-6 items-center'>
						<div className='text-neutral'>{key}</div>
						<div className='text-accent'>{value}</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default UserInfo
