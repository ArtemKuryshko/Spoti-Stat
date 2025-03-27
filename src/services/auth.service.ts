import { auth } from "@/auth";

export const AuthService = {
    getToken: async (): Promise<string> => {
        const session = await auth();
        return session?.accessToken as string;
    },
    refreshToken: async (refreshToken: string) => {
        const url = "https://accounts.spotify.com/api/token";

        const payload = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            client_id: process.env.AUTH_SPOTIFY_ID as string
          }),
        }
        const body = await fetch(url, payload);
        return await body.json();
    }
}