import Header from '@/components/modules/Header/Header'
import LocalStorageWriter from '@/components/modules/LocalStorage/LocalStorageWriter'
import { AuthService } from '@/services/auth.service'

export default async function MainLayout({
																					 children
																				 }: {
	children: React.ReactNode
}) {
	const accessToken: string = await AuthService.getToken()

	return (
		<>
			<Header />
			<LocalStorageWriter accessToken={accessToken} />
			<div className="pt-[88] pb-[20]">{children}</div>
		</>
	)
}
