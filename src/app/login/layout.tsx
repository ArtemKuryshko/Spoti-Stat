import React, { FC, ReactNode } from 'react'

interface ILoginLayout {
	readonly children: ReactNode
}

const LoginLayout: FC<ILoginLayout> = ({ children }) => {
	return (
		<div className='h-screen p-4'>{children}</div>
	)
}

export default LoginLayout
