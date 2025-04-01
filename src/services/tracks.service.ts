import { instance } from "@/api/api.interceptor"
import { auth } from "@/auth"
import { AuthService } from "./auth.service";
import { time } from "console";

export const TracksService = {
    getSavedTracks: async () => {
        const accessToken = await AuthService.getToken();

        return instance("/me/tracks?limit=48", {
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
            params: {
                limit: 50,
                time_range: 'short_term'
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }
}