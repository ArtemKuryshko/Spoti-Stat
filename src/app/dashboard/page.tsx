'use client'

import Button from '@/components/UI/Button';
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';

export default function DashboardPage() {
    const { data: session, status } = useSession()
    const isLoading = status === 'loading';

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-5 border-b-5 border-green-500 mb-4"></div>
                <p className="text-gray-600">Loading...</p>
            </div>
        );
    }

    if (!session?.user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold mb-8">Please sign in to continue</h1>
                <Link href='/login'>
                    <Button size='md' style='secondary'>Sign In</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-8">
                Welcome, {session.user.name}!
            </h1>
            <Button size='md' onClick={() => signOut()}>Sign Out</Button>
        </div>
    )
}
