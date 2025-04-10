import QueryProvider from '@/components/provider/QueryProvider'

export default function ClientLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<QueryProvider>
			<div className='pt-[88]'>{children}</div>
		</QueryProvider>
	)
}
