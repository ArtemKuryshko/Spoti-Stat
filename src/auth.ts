import { url } from "inspector"
import NextAuth from "next-auth"
import Spotify from "next-auth/providers/spotify"
import { PathEnum } from "./types/path.enum"
 
const scopes = [
  'user-read-email',
  'user-read-private',
  'user-read-recently-played',
  'user-top-read',
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-private',
  'playlist-modify-public',
  'user-read-playback-position',
  'user-top-read',
  'user-read-recently-played',
  'user-library-read'
].join(',')

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Spotify({
      clientId: process.env.AUTH_SPOTIFY_ID,
      clientSecret: process.env.AUTH_SPOTIFY_SECRET,
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: {
          scope: scopes,
          response_type: "code",
        },
      },
      token: {
        url: "https://accounts.spotify.com/api/token",
        params: {
          grant_type: "authorization_code",
        },
      },
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }

      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      return session
    },
    async redirect({ baseUrl }) {
      return baseUrl
    }
  }
})