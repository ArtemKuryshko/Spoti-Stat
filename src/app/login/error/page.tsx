'use client'

import Button from "@/components/UI/Button"
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const getErrorMessage = (error: string | null) => {
    switch (error) {
        case 'AccessDenied':
            return 'You denied access to your Spotify account.';
        case 'Configuration':
            return 'There is a problem with the server configuration.';
        case 'Verification':
            return 'The verification failed or the token has expired.';
        default:
            return 'An unexpected error occurred during sign in.';
    }
};

export default function ErrorPage() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
    const errorMessage = getErrorMessage(error);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h1>
                <p className="text-gray-700 mb-6">{errorMessage}</p>
                <div className="flex flex-col gap-4">
                    <Link href="/login" className="w-full">
                        <Button onClick={() => { }}>
                            Return to Login
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
} 