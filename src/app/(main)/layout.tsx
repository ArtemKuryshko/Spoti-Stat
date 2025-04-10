import Header from '@/components/modules/Header/Header'

export default function MainLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<div>{children}</div>
		</>
	)
}
