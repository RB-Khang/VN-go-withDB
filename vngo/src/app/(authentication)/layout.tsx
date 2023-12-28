import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container m-auto h-screen bg-neutral-400 pt-20">
            <div className="w-1/4 h-1/2 m-auto  bg-white rounded-2xl ">
                <section>{children}</section>
            </div>
        </div>
    );
}
