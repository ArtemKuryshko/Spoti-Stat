import { AlbumsService } from "@/services/albums.service"
import { ArtistsService } from "@/services/artists.service"
import { GenresService } from "@/services/genres.service"
import TracksService from "@/services/tracks.service"
import { useQueries } from "@tanstack/react-query"

export const useFetchDashboardData = () => {
	const currentInterval = 30000

    const data = useQueries({
		queries: [
			{
				queryKey: ['artist', 1],
				queryFn: async () => await ArtistsService.getTopListenedArtist()
			},
			{
				queryKey: ['track', 2],
				queryFn: async () => await TracksService.getTopListenedTrack()
			},
			{
				queryKey: ['album', 3],
				queryFn: async () => await AlbumsService.getTopListenedAlbum()
			},
			{
				queryKey: ['top-genres', 4],
				queryFn: async () => await GenresService.getTopGenres()
			},
			{
				queryKey: ['recently-played', 5],
				queryFn: async () => await TracksService.getRecentlyPlayedTracks(5),
				refetchInterval: currentInterval
			}
		]
	})

    const result = {
        artist: {data: data[0].data, isPending: data[0].isPending, isError: data[0].isError}, 
        track: {data: data[1].data, isPending: data[1].isPending, isError: data[1].isError},
        album: {data: data[2].data, isPending: data[2].isPending, isError: data[2].isError},
        topGenres: {data: data[3].data, isPending: data[3].isPending, isError: data[3].isError},
        recentlyPlayedTracks: {data: data[4].data, isPending: data[4].isPending, isError: data[4].isError}
    }

    return result
}