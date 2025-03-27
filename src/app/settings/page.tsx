import Header from "@/components/modules/Header/header";
import Button from "@/components/UI/Button"
import { signOut } from '@/auth';
async function handleSignOut() {
    'use server'
    await signOut();
}
export default function SettingsPage() {
    return (
        <div >
            <Header/>
            <form action={handleSignOut}>
                <Button size='md' type="submit">Sign Out</Button>
            </form>
        </div>
    );
}