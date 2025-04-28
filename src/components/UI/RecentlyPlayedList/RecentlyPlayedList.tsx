import { FC } from 'react'
import cn from 'clsx'
import { InnerTrackType } from '@/types/track.type'

interface IRecentlyPlayedList {
	recentlyPlayedTracks: InnerTrackType[]
	className?: string
}

const RecentlyPlayedList: FC<IRecentlyPlayedList> = ({
	recentlyPlayedTracks,
	className
}) => {
	return (
		<div className={cn('py-14 px-8', className)}>
			<h5 className='text-4xl mb-20'>See your recently played tracks</h5>
			<div className='flex flex-col gap-5'>
				{recentlyPlayedTracks.map((track: InnerTrackType, index: number) => {
					const {
						track: { id, name, artists }
					} = track

					return (
						<div key={id} className='flex items-center gap-3'>
							<div className='text-9xl text-primary'>{index + 1}</div>
							<div>
								<h6 className='text-4xl text-primary'>{name}</h6>
								<p className='text-3xl'>
									{artists.map(artist => (
										<span key={artist.name}>{artist.name}</span>
									))}
								</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default RecentlyPlayedList
