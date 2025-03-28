'use server'

import { auth } from '@/auth'
import { PathEnum } from '@/types/path.enum'
import { redirect } from 'next/navigation'

export default async function Home() {
	const session = await auth()

	if (session) {
		redirect(PathEnum.DASHBOARD); // Redirect logged-in users
	} else {
		redirect(PathEnum.LOGIN); // Redirect guests
	}
}
