import { instance } from "@/api/api.interceptor"

export const TracksService = {
    getSavedTracks: async (accessToken: string) => {
        return instance("/me/tracks", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }
}