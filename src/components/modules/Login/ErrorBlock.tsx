import { PathEnum } from '@/types/path.enum';
import React, { FC } from 'react';

interface IErrorBlock {
    error: string;
}

const ErrorBlock: FC<IErrorBlock> = ({ error }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="text-center">
                <p className="text-red-500 mb-4">Error: {error}</p>
                <a
                    href={PathEnum.LOGIN}
                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Try Again
                </a>
            </div>
        </div>
    );
};

export default ErrorBlock;