"use client"
import { TracksService } from '@/services/tracks.service'
import SavedTracksList from '@/components/modules/Tracks/SavedTracksList'
import TopTracksList from '@/components/modules/Tracks/TopTracksList'
import { useState, useEffect } from 'react'
import TopTracksSelector from '@/components/modules/Selector/TopTracksSelector'
import TracksTypeSelector from '@/components/modules/Selector/TracksTypeSelector'

export default function TracksPage() {
	const[time_range, setTime_range] = useState('short_term')
	const[topTracks, setTopTracks] = useState([])
	const[savedTracks, setSavedTracks] = useState([])
	const[tracksType, setTracksType] = useState('top')
	
	const getTopTracks = async (time_range: string) => {
		const { data } = await TracksService.getTopTracks(time_range)
		setTopTracks(data.items)
	}
	const getSavedTracks = async () => {
		const { data } = await TracksService.getSavedTracks()
		setSavedTracks(data.items)
	}

	useEffect(() => {
		if (tracksType === 'saved') {
			getSavedTracks()
		}
		else {
			getTopTracks(time_range)}
	}, [time_range, tracksType])
	


	return (
		<>
			<div className='container mx-auto px-4 py-8 '>
				<TracksTypeSelector current={tracksType} onChange={setTracksType}/>
				{tracksType === 'top' ?(
					<>
					<TopTracksSelector current={time_range} onChange={setTime_range} />
					<TopTracksList tracks={topTracks} />
					</>
				):(<SavedTracksList tracks={savedTracks}/>)}					
			</div>
		</>
	)
}
