'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { TracksService } from '@/services/tracks.service'
import TrackList from '@/components/modules/Tracks/TrackList'
import {
	InnerTrackType,
	TopTimeType,
	TrackListType,
	TrackType,
	TrackOptions,
	TopTimeOptions
} from '@/types/track.type'
import Loader from '@/components/UI/Loader/Loader'
import ButtonSelector from '@/components/UI/ButtonSelector'

export default function TracksPage() {
	const [timeRange, setTimeRange] = useState<TopTimeType>('short_term')
	const [tracksType, setTracksType] = useState<TrackListType>('top')
	const [intervalMs] = useState(3000)

	const {
		data: topTracks,
		error: topTracksError,
		isLoading: isTopLoading
	} = useQuery<TrackType[]>({
		queryKey: ['top-tracks', timeRange],
		queryFn: async () => {
			const { data } = await TracksService.getTopTracks(timeRange)
			return data.items
		},
		refetchInterval: intervalMs
	})

	const {
		data: savedTracks,
		error: savedTracksError,
		isLoading: isSavedLoading
	} = useQuery<InnerTrackType[]>({
		queryKey: ['saved-tracks'],
		queryFn: async () => {
			const { data } = await TracksService.getSavedTracks()
			return data.items
		},
		refetchInterval: intervalMs
	})

	const {
		data: recentTracks,
		error: recentTracksError,
		isLoading: isRecentLoading
	} = useQuery<InnerTrackType[]>({
		queryKey: ['recent-tracks'],
		queryFn: async () => {
			const { data } = await TracksService.getRecentlyPlayedTracks()
			return data.items.filter(
				(track: { track: TrackType }, index: number, self: { track: TrackType }[]) =>
					index ===
					self.findIndex((t: { track: TrackType }) => t.track.id === track.track.id)
			)
		},
		refetchInterval: intervalMs
	})

	if (isTopLoading || isRecentLoading || isSavedLoading) return <Loader />

	if (topTracksError || savedTracksError || recentTracksError)
		return (
			<div className='text-center text-white'>
				An error occurred while fetching the tracks data. Please try again.
			</div>
		)

	return (
		<>
			<div className='container mx-auto px-4 py-8 '>
				<ButtonSelector<TrackListType>
					options={TrackOptions}
					currentValue={tracksType}
					onChange={setTracksType}
				/>

				{!isTopLoading && tracksType === 'top' && (
					<>
						<ButtonSelector<TopTimeType>
							options={TopTimeOptions}
							currentValue={timeRange}
							onChange={setTimeRange}
						/>
						<TrackList tracks={topTracks ? topTracks : []} />
					</>
				)}

				{!isRecentLoading && tracksType === 'recently' && (
					<TrackList
						tracks={recentTracks ? recentTracks : []}
					/>
				)}

				{!isSavedLoading && tracksType === 'saved' && (
					<TrackList tracks={savedTracks ? savedTracks : []} />
				)}
			</div>
		</>
	)
}
