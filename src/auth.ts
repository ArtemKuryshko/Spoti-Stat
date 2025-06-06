import NextAuth from 'next-auth'
import Spotify from 'next-auth/providers/spotify'
import { AuthService } from './services/auth.service'

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
				url: 'https://accounts.spotify.com/authorize',
				params: {
					scope: scopes,
					response_type: 'code'
				}
			},
			token: {
				url: 'https://accounts.spotify.com/api/token',
				params: {
					grant_type: 'authorization_code'
				}
			}
		})
	],
	pages: {
		error: '/login/error'
	},
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token
				token.refreshToken = account.refresh_token
				token.expiresAt = account.expires_in

			} else if (!token.expiresAt && Date.now() > (token.expiresAt as number) * 1000) {
				try {
					const newTokens = await AuthService.refreshToken(token)
					token.accessToken = newTokens?.access_token
					token.expiresAt = newTokens?.expires_in
					token.refreshToken = newTokens?.refresh_token // Keep the old refresh token if not returned
				} catch (error) {
					console.error('Failed to refresh access token:', error)
					token.error = 'RefreshTokenError'
				}
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