import { instance } from "@/api/api.interceptor"
import { auth } from "@/auth"
import { AuthService } from "./auth.service";
import { time } from "console";

export const TracksService = {
    getSavedTracks: async () => {
        const accessToken = localStorage.getItem('access_token');

        return instance("/me/tracks?limit=48", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    },
    getTopTracks: async (time_range: string, ) => {

        const accessToken = localStorage.getItem('access_token');
        return instance("/me/top/tracks", {
            method: 'GET',
            params: {
                limit: 50,
                time_range: time_range
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }
}

export default TracksService;