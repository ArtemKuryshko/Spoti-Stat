import Button from '@/components/UI/Button'
import { signOut } from '@/auth'

async function handleSignOut() {
	'use server'
	await signOut()
}

export default function SettingsPage() {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center gap-10">
			<h1 className="text-4xl">Settings</h1>
			<form action={handleSignOut}>
				<Button size="md" type="submit">
					Sign Out
				</Button>
			</form>
		</div>
	)
}
