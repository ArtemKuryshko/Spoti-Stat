import { FC } from 'react'
import Image from 'next/image'
import cn from 'clsx'
import { TrackType } from '@/types/track.type'

interface ITrackItem {
	track: TrackType
}

const TrackItem: FC<ITrackItem> = ({ track }) => {
	const { name, album, artists } = track

	return (
		<div
			className={cn(
				'bg-dark_grey from-zinc-800 to-zinc-900 shadow-soft hover:shadow-deep',
				'w-102 p-3 rounded-lg',
				'flex items-center gap-4',
				'hover:scale-105 transition-all'
			)}
		>
			<Image
				src={album.images[0].url as string}
				alt={name}
				className=' object-cover rounded'
				width={96}
				height={96}
			/>
			<div className='flex flex-col justify-center'>
				<h1 className='text-lg font-bold text-white truncate w-[14rem]'>
					{name}
				</h1>
				<h2 className='text-sm font-medium text-light_grey truncate w-[14rem]'>
					{artists.map(artist => artist.name).join(', ')}
				</h2>
				<h3 className='text-xs font-light text-light_grey truncate w-[14rem] mt-1'>
					{album.name}
				</h3>
			</div>
		</div>
	)
}

export default TrackItem
