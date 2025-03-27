import { instance } from "@/api/api.interceptor";
import { auth } from "@/auth";
export const AuthService = {
    getToken: async (): Promise<string> => {
        const session = await auth();
        return session?.accessToken as string;
    },
    refreshToken: async (refreshToken: string) => {
        return instance('api/token',{
            baseURL: 'https://accounts.spotify.com',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: new URLSearchParams({
                client_id: process.env.AUTH_SPOTIFY_ID as string,
                client_secret: process.env.AUTH_SPOTIFY_SECRET as string,
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
            }),
        })
    }
}