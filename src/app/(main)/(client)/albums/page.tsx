'use client'

import { useQuery } from '@tanstack/react-query'
import Loader from '@/components/UI/Loader/Loader'
import AlbumList from '@/components/modules/Albums/AlbumList'
import { AlbumsService } from '@/services/albums.service'

export default function AlbumsPage() {
	const {
		data: albums,
		isPending,
		isError
	} = useQuery({
		queryKey: ['albums'],
		queryFn: async () => await AlbumsService.getTopAlbums()
	})

	if (isPending) {
		return <Loader />
	}

	if (isError) {
		return <div>Something went wrong</div>
	}

	return <AlbumList albums={albums} />
}
