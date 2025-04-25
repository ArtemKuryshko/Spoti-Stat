import { ArtistsService } from '@/services/artists.service'
import ArtistsList from '@/components/modules/Artists/ArtistsList'
export default async function ArtistsPage() {
	const artists = await ArtistsService.getTopListenedArtists()
	return <ArtistsList artists={artists} />
}
