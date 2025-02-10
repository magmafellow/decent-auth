'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

const ClientProfileInfo = () => {
	const { data: session } = useSession()
	console.log('client session', session)
	return (
		<div>
			<div>
				User email: <span className='text-neutralL'>{session.data?.user.email}</span>
			</div>
		</div>
	)
}

export default ClientProfileInfo
