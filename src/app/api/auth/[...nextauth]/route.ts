import NextAuth from "next-auth/next";
import { type NextAuthOptions } from "next-auth";
import SpotifyProvider from 'next-auth/providers/spotify';

const authUrl = "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-modify-private,playlist-modify-public";
const tokenUrl = "https://accounts.spotify.com/api/token";

export const OPTIONS: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            authorization: authUrl,
            token: {
                url: tokenUrl,
                params: {
                    grant_type: 'authorization_code',
                    redirect_uri: 'http://localhost:3000/api/auth/callback/spotify',
                },
            },
            clientId: process.env.SPOTIFY_CLIENT_ID || '',
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
        }),
    ],
    pages: {
        signIn: '/login',
        error: '/login/error', // Error page
    },
    callbacks: {
        async jwt({ token, account }) {
            if(account){
                token.access_token = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                token
            };
        },
        async redirect({ url, baseUrl }) {
            // After successful sign in, redirect to dashboard
            if (url.includes('/api/auth/callback/spotify')) {
                return `${baseUrl}/dashboard`;
            }
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        }
    }
}

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };