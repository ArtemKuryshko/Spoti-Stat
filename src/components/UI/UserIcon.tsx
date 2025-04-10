import { FC } from 'react'
import Image from 'next/image'

interface IUserIcon {
	name: string
	image: string
}

const UserIcon: FC<IUserIcon> = ({ name, image }) => {
	return (
		<div>
			{image ? (
				<Image
					width={48}
					height={48}
					src={image}
					alt={name}
					className='rounded-full mr-12'
				/>
			) : (
				<div className='w-12 h-12 rounded-full mr-12 bg-white flex items-center justify-center text-dark_grey text-[20px] font-bold'>
					{name.charAt(0)}
				</div>
			)}
		</div>
	)
}
export default UserIcon
