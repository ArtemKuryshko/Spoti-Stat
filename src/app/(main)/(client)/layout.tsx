import QueryProvider from '@/components/provider/QueryProvider'

export default function ClientLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<QueryProvider>
			<div>{children}</div>
		</QueryProvider>
	)
}
