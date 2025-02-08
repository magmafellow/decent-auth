import React from 'react'

type Props = {
	children: React.ReactNode
}

const DefContainer: React.FC<Props> = ({ children }) => {
	return <div className={`default_container mx-auto xl:max-w-screen-xl`}>{children}</div>
}

export default DefContainer
