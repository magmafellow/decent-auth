'use client'

import React from 'react'
import { signoutUser } from '@/app/lib/actions/user'
import Button from './button'

const LogoutFly = () => {
  return (
    <Button semantic='ghost' onClick={async () => await signoutUser()}>
      logout
    </Button>
  )
}

export default LogoutFly
