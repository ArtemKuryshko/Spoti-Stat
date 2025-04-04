import { auth, signOut } from '@/auth';
import Button from '@/components/UI/Button';
import { redirect } from 'next/navigation';
import { PathEnum } from '@/types/path.enum';
import Link from 'next/link';

async function handleSignOut() {
    'use server'
    await signOut();
}

export default async function DashboardPage() {
    const session = await auth();

    if (!session?.user) {
        redirect(PathEnum.LOGIN);
    }

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-8">
                Welcome, {session.user.name}!
            </h1>
            <form action={handleSignOut}>
                <Button size='md' type="submit">Sign Out</Button>
            </form>
            <Link className='mt-5' href={PathEnum.TRACKS}>Tracks</Link>
        </div>
        </>
    )
}
