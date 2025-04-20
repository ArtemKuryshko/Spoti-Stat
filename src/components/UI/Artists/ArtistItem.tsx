import { Artist } from '@/types/artist.types'
import { FC } from 'react'
import Image from 'next/image'
import cn from 'clsx'
interface IArtistItem {
	artist: Artist
	index: number
}

export const ArtistItem: FC<IArtistItem> = ({ artist, index }) => {
	const { name, images } = artist
	return (
		<div
			className={cn(
				'bg-dark_grey from-zinc-800 to-zinc-900 shadow-soft hover:shadow-deep',
				'w-[220] p-5 rounded-lg',
				'flex flex-col gap-4',
				'hover:scale-105 transition-all'
			)}
		>
			<Image
				src={images[0]?.url}
				alt={name}
				width={120}
				height={120}
				className='h-[180]  w-[180] rounded-full'
			/>
			<div>
				<h1 className='text-lg font-bold truncate'>
					{index + 1}. {name}
				</h1>
			</div>
		</div>
	)
}
