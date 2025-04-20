import { ArtistsService } from '@/services/artists.service'
import ArtistsList from '@/components/modules/Artists/ArtistsList'
import { Artist } from '@/types/artist.types'
export default async function ArtistsPage() {
	const { data } = await ArtistsService.getTopListenedArtists()
	return <ArtistsList artists={data.items} />
}
