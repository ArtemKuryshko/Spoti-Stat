import { instance } from "@/api/api.interceptor";
import { AlbumsResponse } from "@/types/album.type";

export const AlbumsService = {
    // getTopAlbums: async (limit: number = 20, timeRange: TopTimeType = 'medium_term') => {
    //     const accessToken = localStorage.getItem('access_token');

    //     return instance<AlbumsResponse>("/me/top/albums", {
    //         method: 'GET',
    //         params: {
    //             limit,
    //             time_range: timeRange,
    //         },
    //         headers: {
    //             Authorization: `Bearer ${accessToken}`,
    //         },
    //     })
    // }
    getTopListenedAlbum: async () => {
        const accessToken = localStorage.getItem('access_token');

        const response = instance<AlbumsResponse>("/me/albums", {
            method: 'GET',
            params: {
                limit: 1
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        return (await response).data.items[0]
    }
}
