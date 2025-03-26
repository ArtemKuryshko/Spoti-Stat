import { signIn } from '@/auth';
import Button from '../UI/Button';
import { FC } from 'react';

const LoginForm: FC = () => {
    const handleLogin = async () => {
        "use server"

        await signIn('spotify');
    };

    return (
        <form action={handleLogin}>

            {/* {error && (
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
            )} */}

            <Button
                type='submit'
            >
                Login with Spotify
            </Button>
        </form>
    );
};

export default LoginForm;