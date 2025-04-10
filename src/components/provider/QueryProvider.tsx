'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

interface IQueryProvider {
	children: ReactNode
}

const QueryProvider: FC<IQueryProvider> = ({ children }) => {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default QueryProvider
