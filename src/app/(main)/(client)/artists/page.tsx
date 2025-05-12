'use client'

import { ArtistsService } from '@/services/artists.service'
import ArtistsList from '@/components/modules/Artists/ArtistsList'
import { useQuery } from '@tanstack/react-query'
import Loader from '@/components/UI/Loader/Loader'

export default function ArtistsPage() {
	const {
		data: artists,
		isPending,
		isError
	} = useQuery({
		queryKey: ['top-artists'],
		queryFn: async () => await ArtistsService.getTopListenedArtists()
	})

	if (isPending) {
		return <Loader />
	}

	if (isError) {
		return <div>Something went wrong</div>
	}

	return <ArtistsList artists={artists} />
}
