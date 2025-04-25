import { instance } from "@/api/api.interceptor"
import { ArtistsFollowingResponse, ArtistsResponse } from "@/types/artist.types";

export const ArtistsService = {
    getArtists: async () => {
        const accessToken = localStorage.getItem('access_token');

        const response = instance<ArtistsFollowingResponse>(`/me/following?type=artist`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        console.log('item' + (await response).data.artists.items)

        return (await response).data.artists.items
    },
    getTopListenedArtist: async () => {
        const accessToken = localStorage.getItem('access_token');

        const response = instance<ArtistsResponse>("/me/top/artists", {
            method: 'GET',
            params: {
                limit: 1,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        return (await response).data.items[0]
    },
    getTopListenedArtists: async (limit: number = 20) => {
        const accessToken = localStorage.getItem('access_token');

        const response = instance<ArtistsResponse>("/me/top/artists", {
            method: 'GET',
            params: {
                limit
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        return (await response).data.items
    }
}