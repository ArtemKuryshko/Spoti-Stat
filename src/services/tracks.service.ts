import { instance } from "@/api/api.interceptor"

export const getSavedTracks = async (accessToken: string) => {
    return instance.get("/me/tracks", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
}