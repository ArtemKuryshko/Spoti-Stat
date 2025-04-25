import React from 'react'
import { ArtistsService } from '@/services/artists.service'
import { GenresService } from '@/services/genres.service'
import GenresChart from '@/components/modules/Charts/GenresChart'
import Image from 'next/image'
import { Artist } from '@/types/artist.types'

export default async function TestPage() {
	const artists = await ArtistsService.getArtists()
	const topArtist = await ArtistsService.getTopListenedArtist()

	const topGenres = await GenresService.getTopGenres()

	return (
		<div>
			<h1>Test Page For testing services</h1>
			<h2 className='text-2xl font-bold mt-10'>Artists Test</h2>
			<ul>
				{artists.map((artist: Artist) => (
					<li key={artist.id} className='mb-4 p-4 bg-zinc-800 rounded-lg'>
						<div className='flex items-start gap-4'>
							<Image
								src={artist.images[0]?.url}
								alt={artist.name}
								className='w-24 h-24 object-cover rounded'
								width={96}
								height={96}
							/>
							<div>
								<h3 className='text-xl font-bold'>
									<a
										href={artist.external_urls.spotify}
										target='_blank'
										rel='noopener noreferrer'
										className='hover:text-green-400'
									>
										{artist.name}
									</a>
								</h3>
								<p className='text-zinc-400'>
									{artist.followers.total.toLocaleString()} followers
								</p>
								<p className='text-zinc-500 text-sm mt-1'>
									Genres: {artist.genres.join(', ')}
								</p>
								<p className='text-zinc-500 text-sm'>
									Popularity: {artist.popularity}/100
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
			<h2 className='text-2xl font-bold mt-10'>Top Listened Artist Test</h2>
			<div key={topArtist.id} className='mb-4 p-4 bg-zinc-800 rounded-lg'>
				<div className='flex items-start gap-4'>
					<Image
						src={topArtist.images[0]?.url}
						alt={topArtist.name}
						className='object-cover rounded'
						width={96}
						height={96}
					/>
					<div>
						<h3 className='text-xl font-bold'>
							<a
								href={topArtist.external_urls.spotify}
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-green-400'
							>
								{topArtist.name}
							</a>
						</h3>
						<p className='text-zinc-400'>
							{topArtist.followers.total.toLocaleString()} followers
						</p>
						<p className='text-zinc-500 text-sm mt-1'>
							Genres: {topArtist.genres.join(', ')}
						</p>
						<p className='text-zinc-500 text-sm'>
							Popularity: {topArtist.popularity}/100
						</p>
					</div>
				</div>
			</div>
			<h2 className='text-2xl font-bold mt-10'>Genres Test</h2>
			<GenresChart topGenres={topGenres} />
		</div>
	)
}
