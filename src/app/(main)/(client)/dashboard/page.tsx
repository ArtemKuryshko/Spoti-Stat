'use client'

import GenresChart from '@/components/modules/Charts/GenresChart'
import Loader from '@/components/UI/Loader/Loader'
import RecentlyPlayedList from '@/components/UI/RecentlyPlayedList/RecentlyPlayedList'
import TopItemCard from '@/components/UI/TopItemCard/TopItemCard'
import { useFetchDashboardData } from '@/hooks/useFetchDashboardData'

export default function DashboardPage() {
	const { artist, track, album, topGenres, recentlyPlayedTracks } =
		useFetchDashboardData()

	console.log(artist, track, album, topGenres, recentlyPlayedTracks)

	return (
		<div className='w-full p-8'>
			<div className='w-full pb-12 text-center'>
				<h1 className='text-3xl text-primary font-bold'>Welcome</h1>
				<p className='text-3xl text-primary font-bold mt-3'>
					Track your stats and have fun!
				</p>
			</div>

			<div className='w-full flex flex-col gap-8'>
				<div className='w-full flex gap-8'>
					<>
						{artist.isPending ? (
							<Loader />
						) : (
							<TopItemCard
								name={artist.data?.name ?? ''}
								img={artist.data?.images[0].url ?? ''}
								type='artist'
								link={artist.data?.external_urls.spotify ?? '#'}
							/>
						)}

						{artist.isError && <div>Something went wrong with top artist</div>}
					</>

					<>
						{topGenres.isPending ? (
							<Loader />
						) : (
							<GenresChart
								className='flex-3/4'
								topGenres={topGenres.data ?? []}
							/>
						)}

						{topGenres.isError && <div>Something went wrong with genres</div>}
					</>
				</div>
				<div className='w-full flex gap-8'>
					<>
						{recentlyPlayedTracks.isPending ? (
							<Loader />
						) : (
							<RecentlyPlayedList
								className='flex-3/4'
								recentlyPlayedTracks={recentlyPlayedTracks.data ?? []}
							/>
						)}

						{recentlyPlayedTracks.isError && (
							<div>Something went wrong with recently played tracks</div>
						)}
					</>

					<div className='flex flex-col gap-8'>
						<>
							{track.isPending ? (
								<Loader />
							) : (
								<TopItemCard
									type='track'
									name={track.data?.name ?? ''}
									img={track.data?.album.images[0].url ?? ''}
									link={track.data?.external_urls.spotify ?? '#'}
								/>
							)}

							{track.isError && <div>Something went wrong with top track</div>}
						</>

						<>
							{album.isPending ? (
								<Loader />
							) : (
								<TopItemCard
									type='album'
									name={album.data?.name ?? ''}
									img={album.data?.images[0].url ?? ''}
									link={album.data?.external_urls.spotify ?? '#'}
								/>
							)}

							{album.isError && (
								<div>Something went wrong with saved album</div>
							)}
						</>
					</div>
				</div>
			</div>
		</div>
	)
}
