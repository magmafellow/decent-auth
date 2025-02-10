'use client'

import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import useUser from '../stores/user-store'

const ClientProfileInfo = () => {
	// const { data: session } = useSession()
	// console.log('client session', session)
	const { data } = useSession()
	const { user, fetchGetUser, loading: userLoading } = useUser()

	useEffect(() => {
		fetchGetUser(data?.user.id)
	}, [data?.user.id])

	return (
		<div>
			<div>
				{userLoading ? (
					<div>Loading...</div>
				) : (
					<div>
						User first_name: <span className='text-neutralL'>{user?.first_name}</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default ClientProfileInfo
