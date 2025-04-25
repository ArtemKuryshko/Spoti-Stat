import { FC } from 'react'
import cn from 'clsx'
import { TrackType } from '@/types/track.type'

interface IRecentlyPlayedList {
	recentlyPlayedTracks: any
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
				{recentlyPlayedTracks.map((track: TrackType, index: number) => (
					<div className='flex items-center' key={track.id}>
						<div className='text-9xl text-primary'>{index + 1}</div>
						<div>
							<h6 className='text-4xl text-primary'>{track.name}</h6>
							<p className='text-3xl'>{track.name}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default RecentlyPlayedList
