import NextAuth from "next-auth"
import Spotify from "next-auth/providers/spotify"
import { AuthService } from "./services/auth.service"
 
const scopes = [
  'user-read-email',
  'user-read-private',
  'user-read-recently-played',
  'user-top-read',
  'user-follow-read',
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
    async jwt ({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
        token.expiresAt = account.expires_at
        token.refreshToken = account.refresh_token        
      } else if (Date.now() > (token.expiresAt as number) * 1000) {
        try {
          const response = await AuthService.refreshToken(token.refreshToken as string);

          const newTokens = response as {
            access_token: string
            expires_in: number
            refresh_token?: string
          }

          token.accessToken = newTokens.access_token
          token.expiresAt = Math.floor(Date.now() / 1000 + newTokens.expires_in)
          token.refreshToken = newTokens.refresh_token ?? token.refreshToken // Keeps old refresh token if new one is not returned

        } catch (error) {
          console.error("Error refreshing access_token", error)
          
          // If we fail to refresh the token, return an error so we can handle it on the page
          token.error = "RefreshTokenError"
        }
      }

      return token
    },
    async session ({ session, token }: { session: any, token: any }) {
      session.accessToken = token.accessToken
      
      return session
    },
    async redirect({ baseUrl }) {
      return baseUrl
    }
  }
})