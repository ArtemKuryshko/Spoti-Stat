import Image from 'next/image'
import { FC } from 'react'

interface IUserIcon {
	name: string
	image: string
}

const UserIcon: FC<IUserIcon> = ({ name, image }) => {
	return (
		<div>
			<Image
				width={50}
				height={50}
				src={image}
				alt={name}
				className='rounded-full mr-12'
			/>
		</div>
	)
}
export default UserIcon
