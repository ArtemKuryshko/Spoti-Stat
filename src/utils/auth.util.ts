import { redirect } from 'next/navigation';
import { PathEnum } from '@/types/path.enum';

export const handleUnauthorized = async () => {
    try {
        await fetch('/api/auth/logout')

        if (typeof window !== 'undefined') {
            window.location.href = PathEnum.LOGIN
        } else {
            redirect(PathEnum.LOGIN)
        }
    } catch (err) {
        console.error('[handleUnauthorized] Failed:', err)
        window.location.href = PathEnum.LOGIN
    }
}