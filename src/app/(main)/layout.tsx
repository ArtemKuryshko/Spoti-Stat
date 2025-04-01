
import type { Metadata } from 'next'
import '@/assets/style/globals.css'
import AuthProvider from '@/components/provider/AuthProvider'
import { Poppins } from 'next/font/google'
import Header from '@/components/modules/Header/Header'

const poppins = Poppins({
	subsets: ['latin'],
	style: 'normal',
	weight: '800'
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
			<body className={`${poppins.className} antialiased`}>
				<AuthProvider>
					<Header />
					<div className='pt-[88]'>{children}</div>
				</AuthProvider>
			</body>
		</html>
	)
}
