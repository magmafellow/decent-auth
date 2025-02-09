import Header from '@/app/components/header'
import React from 'react'
import SignupForm from '@/app/auth-welcome/main/signup-form'

const Main = () => {
  return (
    <>
    <Header />
    <div className={`h-screen flex justify-center items-center`}>
      <SignupForm />
    </div>
    </>
  )
}

export default Main