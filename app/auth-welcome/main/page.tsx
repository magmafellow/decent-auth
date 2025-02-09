import Header from '@/app/components/header'
import React from 'react'
import SignupForm from '@/app/auth-welcome/main/signup-form'

const Main = () => {
  return (
    <>
    <Header />
    <div className={`pt-[120px] max-[1246px]:pt-[112px] flex justify-center`}>
      <SignupForm />
    </div>
    </>
  )
}

export default Main