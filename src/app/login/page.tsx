'use client'
import Image from "next/image"
import Button from "@/components/UI/Button"
import { signIn } from "next-auth/react"
import { useSearchParams } from 'next/navigation'

export default function LoginPage() {
	const searchParams = useSearchParams();
	const error = searchParams.get('error');

	const handleLogin = () => {
		signIn('spotify', {
			callbackUrl: '/dashboard',
		});
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="flex flex-col text-center items-center  justify-center mb-10">
			<Image src="/logo.svg" alt="logo" width="95" height="108" className="mb-4"/>
			<h1 className="text-5xl font-bold mb-6">Welcome to Spoti-Stat!</h1>
			</div>

			{error && (
				<div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
					<p className="mb-2">
						{error === 'AccessDenied'
							? 'You denied access to your Spotify account'
							: 'Failed to sign in with Spotify'}
					</p>
					<p className="text-sm">
						Please try again or contact support if the problem persists.
					</p>
				</div>
			)}

			<Button
				onClick={handleLogin}
				className={error ? 'animate-bounce' : ''}
			>
				{error ? 'Try Again' : 'Login with Spotify'}
			</Button>
		</div>
	)
}
