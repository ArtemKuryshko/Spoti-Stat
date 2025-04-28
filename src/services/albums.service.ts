import { instance } from "@/api/api.interceptor";
import { AlbumType } from "@/types/album.type";
import { TracksResponse } from "@/types/track.type";

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
    getTopListenedAlbum: async (): Promise<AlbumType> => {
        const accessToken = localStorage.getItem('access_token');

        const response = instance<TracksResponse>("/me/top/tracks", {
            method: 'GET',
            params: {
                limit: 1
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        return (await response).data.items[0].album
    }
}
