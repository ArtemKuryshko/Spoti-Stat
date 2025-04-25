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
					src={image}
					alt={name}
					width={52}
					height={52}
					className='object-cover'
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
