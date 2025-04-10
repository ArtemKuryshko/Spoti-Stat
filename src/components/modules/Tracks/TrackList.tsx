import { FC } from 'react'
import TrackItem from '@/components/UI/Tracks/TrackItem'
import { TrackListType, TrackType } from '@/types/track.type'

interface ITrackList {
	tracks: TrackType[] | { track: TrackType }[]
	type?: TrackListType
}

const TrackList: FC<ITrackList> = ({ tracks, type }) => {
	if (!tracks || tracks.length === 0)
		return <h5>Something went wrong or missing tracks</h5>

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-28 mr-28'>
			{tracks.map((track: TrackType | { track: TrackType }, index: number) => {
				let currentTrack

				if ('track' in track) {
					currentTrack = track.track
				} else {
					currentTrack = track
				}

				return (
					<a
						href={currentTrack.external_urls?.spotify}
						target='_blank'
						key={currentTrack.id}
						className='bg-dark_grey from-zinc-800 to-zinc-900 p-3 rounded-lg shadow-soft hover:shadow-deep hover:scale-105 transition-all w-102 flex items-center gap-4'
					>
						{type === 'top' && (
							<h1 className='text-lg font-bold text-white truncate mt-2'>
								{index + 1}
							</h1>
						)}

						<TrackItem track={currentTrack} />
					</a>
				)
			})}
		</div>
	)
}

export default TrackList
