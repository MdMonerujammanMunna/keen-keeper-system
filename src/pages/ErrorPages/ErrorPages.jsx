import React from 'react';
import { Link } from 'react-router';

const ErrorPages = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 text-black">
                <div className="text-center max-w-md">
                    <h1 className="text-7xl font-extrabold text-[#244D3F]">404</h1>
                    <h2 className="mt-4 text-2xl font-bold ">
                        Page Not Found
                    </h2>
                    <p className="mt-2 ">
                        Sorry, the page you are looking for doesn't exist or has been moved.
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/"
                            className="inline-block px-6 py-3 text-white bg-[#244D3F] hover:bg-[#2d7e63] rounded-sm shadow-md transition duration-200"
                        >
                            Go Back Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPages; 