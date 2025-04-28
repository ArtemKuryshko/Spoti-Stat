'use client'

import { FC, useMemo } from 'react'
import cn from 'clsx'

interface GenresChartProps {
	topGenres: string[]
	className?: string
}

const GenresChart: FC<GenresChartProps> = ({ topGenres, className }) => {
	const genresValued = useMemo(
		() =>
			topGenres
				.map((genre, index) => {
					return {
						name: genre,
						value: (1 / (index + 1)) * 100
					}
				})
				.sort(() => Math.random() - 0.5),
		[topGenres]
	)

	return (
		<div
			className={cn(
				'flex flex-col min-h-full p-4 bg-black text-white rounded-xl shadow-md',
				className
			)}
		>
			<h2 className='text-center font-bold text-2xl mb-6'>
				You really like <span className='text-primary'>{topGenres[0]}</span> out
				of all genres!
			</h2>
			<div className='flex flex-1 justify-between items-end'>
				{genresValued.map(genre => (
					<div
						key={genre.name}
						className='flex flex-col justify-end items-center w-[15%] h-full'
					>
						<div
							className='bg-primary rounded-full w-1/4'
							style={{ height: `${genre.value}%` }}
						/>
						<p className='mt-3 text-sm text-center'>{genre.name}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default GenresChart
