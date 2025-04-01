
import { TracksService } from '@/services/tracks.service'
import TracksList from '@/components/modules/Tracks/SavedTracksList'
import TopTracksList from '@/components/modules/Tracks/TopTracksList'


export default async function TracksPage() {
	const { data } = await TracksService.getSavedTracks()
	const { data: TopTracks } = await TracksService.getTopTracks()

	const tracks = data.items
	console.log(TopTracks)
	const topTracks = TopTracks.items
	return (
		<>
			<div className='container mx-auto px-4 py-8'>
				{/* <button onClick={() => {}} className='w-[40] h-[20] bg-primary text-black rounded-md'>hide it</button> */}
				<TracksList tracks={tracks} />
				<h1 className='text-2xl font-bold mb-4'>Top Tracks</h1>
				<TopTracksList tracks={topTracks} />
			</div>
		</>
	)
}
