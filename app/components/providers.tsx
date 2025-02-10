import { SessionProvider } from 'next-auth/react'
import React, { ReactNode, FC } from 'react'

type Props = {
  children: ReactNode
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Providers