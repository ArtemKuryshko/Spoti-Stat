import { instance } from "@/api/api.interceptor"
import { TopTimeType, TracksResponse } from "@/types/track.type";

export const TracksService = {
    getSavedTracks: async () => {
        const accessToken = localStorage.getItem('access_token');

        const response = instance<TracksResponse>("/me/tracks?limit=48", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        return (await response).data.items
    },
    getTopTracks: async (time_range: TopTimeType) => {
        const accessToken = localStorage.getItem('access_token');

        const response = instance<TracksResponse>("/me/top/tracks", {
            method: 'GET',
            params: {
                limit: 50,
                time_range: time_range
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        return (await response).data.items
    },
    getTopListenedTrack: async () => {
        const accessToken = localStorage.getItem('access_token');

        const response = instance<TracksResponse>("/me/top/tracks", {
            method: 'GET',
            params: {
                limit: 1,
                time_range: 'long_term'
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        return (await response).data.items[0]
    },
    getRecentlyPlayedTracks: async (limit: number = 48) => {
        const accessToken = localStorage.getItem('access_token');

        const response = instance<TracksResponse>("/me/player/recently-played", {
            method: 'GET',
            params: {
                limit,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`, 
            }
        })

        return (await response).data.items
    }

}

export default TracksService;