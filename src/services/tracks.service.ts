import { instance } from "@/api/api.interceptor"
import { auth } from "@/auth"
import { AuthService } from "./auth.service";

export const TracksService = {
    getSavedTracks: async () => {
        const accessToken = await AuthService.getToken();

        return instance("/me/tracks", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    },
    getTopTracks: async () => {
        const accessToken = await AuthService.getToken();

        return instance("/me/top/tracks", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }
}