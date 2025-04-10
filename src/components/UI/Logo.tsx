import React from 'react'
import Image from 'next/image'

const Logo = () => {
	return (
		<div className='flex flex-row gap-3'>
			<Image src='/logo.svg' alt='logo' width={32} height={36} className='' />
			<h1 className='text-primary font-extrabold text-[28px]'>Spoti-Stat</h1>
		</div>
	)
}

export default Logo
