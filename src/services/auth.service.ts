import { auth } from '@/auth'
import axios from 'axios'
import { JWT } from 'next-auth/jwt'

export const AuthService = {
	getToken: async (): Promise<string> => {
		const session = await auth()
		return session?.accessToken as string
	},
	refreshToken: async (token: JWT) => {
		const url = 'https://accounts.spotify.com/api/token'

		const clientId = process.env.AUTH_SPOTIFY_ID as string
		const clientSecret = process.env.AUTH_SPOTIFY_SECRET as string

		const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

		const params = new URLSearchParams()
		params.append('grant_type', 'refresh_token')
		params.append('refresh_token', token.refreshToken as string)

		try {
			const { data } = await axios.post(url, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Authorization': `Basic ${credentials}`
				},
				data: params
			})

			return {
				...token,
				access_token: data.access_token,
				expires_in: Date.now() + data.expires_in * 1000,
				refresh_token: data.refresh_token || token.refreshToken // Keep the old one if not returned
			}
		} catch (error) {
			if (error instanceof Error) {
				console.error('Error refreshing Spotify token:', error.message)
				throw new Error('Failed to refresh token')
			}
		}
	}
}
