'use client'

import { useState } from 'react'
import { TopTimeOptions, TopTimeType, TrackListType, TrackOptions } from '@/types/track.type'
import TrackList from '@/components/modules/Tracks/TrackList'
import Loader from '@/components/UI/Loader/Loader'
import ButtonSelector from '@/components/UI/ButtonSelector'
import useFetchTracksData from '@/hooks/useFetchTracksData'

export default function TracksPage() {
	const [timeRange, setTimeRange] = useState<TopTimeType>('short_term')
	const [tracksType, setTracksType] = useState<TrackListType>('top')
	const [intervalMs] = useState(3000)

	const { topTracks, savedTracks, recentTracks } = useFetchTracksData(timeRange, intervalMs)

	if (topTracks.isLoading || savedTracks.isLoading || recentTracks.isLoading) return <Loader />

	if (topTracks.isError || savedTracks.isError || recentTracks.isError)
		return (
			<div className="text-center text-white">
				An error occurred while fetching the tracks data. Please try again.
			</div>
		)

	return (
		<>
			<div className="container mx-auto px-4 py-8  pt-0">
				<ButtonSelector<TrackListType>
					options={TrackOptions}
					currentValue={tracksType}
					onChange={setTracksType}
				/>

				{!topTracks.isLoading && tracksType === 'top' && (
					<>
						<ButtonSelector<TopTimeType>
							options={TopTimeOptions}
							currentValue={timeRange}
							onChange={setTimeRange}
						/>
						<TrackList tracks={topTracks.data ? topTracks.data : []} />
					</>
				)}

				{!recentTracks.isLoading && tracksType === 'recently' && (
					<TrackList tracks={recentTracks.data ? recentTracks.data : []} />
				)}

				{!savedTracks.isLoading && tracksType === 'saved' && (
					<TrackList tracks={savedTracks.data ? savedTracks.data : []} />
				)}
			</div>
		</>
	)
}
