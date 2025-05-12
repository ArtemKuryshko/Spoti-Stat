import { instance } from '@/api/api.interceptor'
import { AlbumType } from '@/types/album.type'
import { TopTimeType, TracksResponse } from '@/types/track.type'

export const AlbumsService = {
	getTopAlbums: async (limit: number = 20, timeRange: TopTimeType = 'long_term'): Promise<AlbumType[]> => {
		const accessToken = localStorage.getItem('access_token')

		const response = instance<TracksResponse>('/me/top/tracks', {
			method: 'GET',
			params: {
				limit,
				time_range: timeRange
			},
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		})

		return (await response).data.items.map((item) => item.album)
	},
	getTopListenedAlbum: async (): Promise<AlbumType> => {
		const accessToken = localStorage.getItem('access_token')

		const response = instance<TracksResponse>('/me/top/tracks', {
			method: 'GET',
			params: {
				limit: 1
			},
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		})

		return (await response).data.items[0].album
	},
	getSavedAlbums: async (): Promise<AlbumType[]> => {
		const accessToken = localStorage.getItem('access_token')

		const response = instance('/me/albums', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		})

		return (await response).data.items
	}
}
