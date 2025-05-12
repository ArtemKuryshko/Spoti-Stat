import { FC } from 'react'
import { AlbumType } from '@/types/album.type'
import AlbumItem from '@/components/UI/Album/AlbumItem'

interface IAlbumList {
	albums: AlbumType[]
}

const AlbumList: FC<IAlbumList> = ({ albums }) => {
	return <div>
		<div className="grid grid-cols-3 gap-6 mr-32 ml-32 mt-12 mb-12">
			{albums.map((album: AlbumType) => {
				return <div key={album.id}>
					<AlbumItem album={album} />
				</div>
			})}
		</div>
	</div>
}

export default AlbumList