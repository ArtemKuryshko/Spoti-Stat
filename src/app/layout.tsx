import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../assets/style/globals.css'
import AuthProvider from '@/components/provider/AuthProvider'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Spoti Stat: New Way to Analyze Your Spotify Data',
	description: 'Analyzing your Spotify data in a new way.'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<AuthProvider>
					{children}
				</AuthProvider>
			</body>
		</html>
	)
}
