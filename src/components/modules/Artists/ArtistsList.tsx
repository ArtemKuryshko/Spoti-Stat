import { FC } from 'react'
import { ArtistItem } from '@/components/UI/Artists/ArtistItem'
import { Artist } from '@/types/artist.types'
interface IArtistsList {
	artists: Artist[]
}

const ArtistsList: FC<IArtistsList> = ({ artists }) => {
	return (
		<div className='grid grid-cols-5 gap-6 mr-32 ml-32 mt-12 mb-12'>
			{artists.map((artist: Artist, index: number) => {
				return <ArtistItem artist={artist} index={index} key={artist.id} />
			})}
		</div>
	)
}
export default ArtistsList
