import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../assets/style/globals.css'
import AuthProvider from '@/components/provider/AuthProvider'
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  style: 'normal',
  weight: '800',
});


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
				className={`${poppins.className} antialiased`}
			>
				<AuthProvider>
					{children}
				</AuthProvider>
			</body>
		</html>
	)
}
