import { instance } from "@/api/api.interceptor"
import { AuthService } from "./auth.service";
import { ArtistsFollowingResponse, ArtistsResponse } from "@/types/artist.types";

export const ArtistsService = {
    getArtists: async () => {
        const accessToken = await AuthService.getToken();

        return instance<ArtistsFollowingResponse>(`/me/following?type=artist`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    },
    getTopListenedArtist: async () => {
        const accessToken = await AuthService.getToken();

        return instance<ArtistsResponse>("/me/top/artists", {
            method: 'GET',
            params: {
                limit: 1,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    },
    getTopListenedArtists: async (limit: number = 20) => {
        const accessToken = await AuthService.getToken();

        return instance<ArtistsResponse>("/me/top/artists", {
            method: 'GET',
            params: {
                limit
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }
}