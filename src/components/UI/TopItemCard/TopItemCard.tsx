import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'

interface ITopItemCard {
	name: string
	img: string
	type: 'artist' | 'track' | 'album'
	link: string
	className?: string
}

const TopItemCard: FC<ITopItemCard> = ({
	name,
	img,
	type,
	link,
	className
}) => {
	return (
		<div
			className={cn(
				'rounded-2xl bg-[#1a1a1a] p-4 text-white shadow-md',
				className
			)}
		>
			<div className='aspect-square w-full rounded-xl overflow-hidden'>
				{img ? (
					<Image width={350} height={350} src={img} alt={name} />
				) : (
					<div className='bg-primary opacity-60 w-full h-full'></div>
				)}
			</div>
			<div className='mt-4 space-y-1'>
				<h2 className='text-lg font-bold'>{name}</h2>
				<p className='text-sm text-white'>is your most listened {type}!</p>
				<Link
					href={link}
					className='pt-1 inline-block text-primary hover:underline cursor-pointer'
				>
					see more...
				</Link>
			</div>
		</div>
	)
}

export default TopItemCard
