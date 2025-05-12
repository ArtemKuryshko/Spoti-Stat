import { FC } from 'react'
import cn from 'clsx'
import Image from 'next/image'
import { AlbumType } from '@/types/album.type'

interface IAlbumItem {
	album: AlbumType
}

const AlbumItem: FC<IAlbumItem> = ({ album }) => {
	const { name, images, artists } = album
	const image = images[0].url

	return <div
		className={cn(
			'bg-dark_grey shadow-soft hover:shadow-deep',
			'p-3 rounded-lg',
			'flex items-center gap-4',
			'hover:scale-105 transition-all'
		)}
	>
		<Image
			src={image}
			alt={name}
			className="object-cover rounded"
			width={96}
			height={96}
		/>
		<div className="flex flex-col justify-center">
			<h1 className="text-2xl font-bold text-white truncate w-[14rem]">
				{name}
			</h1>
			<h2 className="text-sm font-medium text-light_grey truncate w-[14rem]">
				{artists.map(artist => artist.name).join(', ')}
			</h2>
		</div>
	</div>
}

export default AlbumItem