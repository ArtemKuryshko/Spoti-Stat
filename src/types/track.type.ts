import { AlbumType } from '@/types/album.type';

export interface TrackType {
    id: string | number
    name: string
    album: AlbumType
    artists: [
        artist: {
            name: string
        }
    ]
    external_urls: {
        spotify: string
    }
}

export interface InnerTrackType {
    track: TrackType
}

export interface TracksResponse {
    items: TrackType[]
    total: number
    limit: number
    offset: number
}

export interface InnerTracksResponse {
    items: InnerTrackType[]
    total: number
    limit: number
    offset: number
}

export type TrackListType = 'top' | 'recently' | 'saved'

export type TopTimeType = 'short_term' | 'medium_term' | 'long_term'

export interface GeneralOptionsType {
    label: string
    value: string
}

export interface TrackOptionsType extends GeneralOptionsType {
    value: TrackListType
}

export interface TopTimeOptionsType extends GeneralOptionsType {
    value: TopTimeType
}

export const TrackOptions: TrackOptionsType[] = [
    { label: 'Top Tracks', value: 'top' },
    { label: 'Saved Tracks', value: 'saved' },
    { label: 'Recently Played', value: 'recently' }
]

export const TopTimeOptions: TopTimeOptionsType[] = [
    { label: '4 Weeks', value: 'short_term' },
	{ label: '6 Months', value: 'medium_term' },
	{ label: 'All Time', value: 'long_term' }
]
