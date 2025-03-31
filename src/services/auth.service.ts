import { auth } from "@/auth";
import axios from "axios";

export const AuthService = {
    getToken: async (): Promise<string> => {
        const session = await auth();
        return session?.accessToken as string;
    },
    refreshToken: async (refreshToken: string) => {
        const url = "https://accounts.spotify.com/api/token";

        const clientId = process.env.AUTH_SPOTIFY_ID as string;
        const clientSecret = process.env.AUTH_SPOTIFY_SECRET as string;

        const credentials = btoa(`${clientId}:${clientSecret}`);

        const payload = {
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
        }

        console.log(payload);
        console.log(credentials);

        const body = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${credentials}`
            }
        });

        return body.data;
    }
}