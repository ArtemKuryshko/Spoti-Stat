
import { TracksService } from '@/services/tracks.service'
import TracksList from '@/components/modules/Tracks/TracksList'


export default async function TracksPage() {
	const { data } = await TracksService.getSavedTracks()

	const tracks = data.items
	return (
		<>
			<div className='container mx-auto px-4 py-8'>
				{/* <button onClick={() => {}} className='w-[40] h-[20] bg-primary text-black rounded-md'>hide it</button> */}
				<TracksList tracks={tracks} />
			</div>
		</>
	)
}
