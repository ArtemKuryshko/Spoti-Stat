import { useQueries } from '@tanstack/react-query'
import { TracksService } from '@/services/tracks.service'
import { TopTimeType, TrackType } from '@/types/track.type'

const useFetchTracksData = (timeRange: TopTimeType, intervalMs: number) => {
	const allTracksData = useQueries({
		queries: [
			{
				queryKey: ['top-tracks', timeRange],
				queryFn: async () => await TracksService.getTopTracks(timeRange),
				refetchInterval: intervalMs
			},
			{
				queryKey: ['saved-tracks'],
				queryFn: async () => await TracksService.getSavedTracks(),
				refetchInterval: intervalMs
			},
			{
				queryKey: ['recent-tracks'],
				queryFn: async () => {
					const tracks = await TracksService.getRecentlyPlayedTracks()
					return tracks.filter(
						(track: { track: TrackType }, index: number, self: { track: TrackType }[]) =>
							index === self.findIndex((t: { track: TrackType }) => t.track.id === track.track.id)
					)
				},
				refetchInterval: intervalMs
			}
		]
	})

	const topTracks = {
		data: allTracksData[0].data,
		isError: allTracksData[0].isError,
		isLoading: allTracksData[0].isLoading
	}

	const savedTracks = {
		data: allTracksData[1].data,
		isError: allTracksData[1].isError,
		isLoading: allTracksData[1].isLoading
	}

	const recentTracks = {
		data: allTracksData[2].data,
		isError: allTracksData[2].isError,
		isLoading: allTracksData[2].isLoading
	}

	return {
		topTracks,
		savedTracks,
		recentTracks
	}
}

export default useFetchTracksData