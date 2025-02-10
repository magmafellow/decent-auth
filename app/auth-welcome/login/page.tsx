import Header from '@/app/components/header'
import React from 'react'
import LoginForm from '@/app/auth-welcome/login/login-form'
import { auth } from '@/auth'
import ClientProfileInfo from '@/app/components/client-profile-info'
import LogoutFly from '@/app/components/logout-fly'

const Main = async () => {
	const user = await auth()
	console.log(user?.user)
	return (
		<>
			<Header />
			<div className={`pt-[120px] max-[1246px]:pt-[112px] flex justify-center`}>
				<LoginForm />
			</div>
		</>
	)
}

export default Main
