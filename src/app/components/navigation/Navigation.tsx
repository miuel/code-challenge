"use client";
import React from 'react';
import Link from "next/link";


const Navigation: React.FC = () => {
    return (
        <nav arua-label='Main navigation' className='w-screen'>
            <ul className="flex justify-between items-center p-4">
                <li>
                    <Link href="/" className='font-bold text-base'>Miguel Rivas</Link>
                </li>
                <li>
                    <p className='font-bold text-base'>2025</p>
                </li>
                <li>
                    <p className='font-bold text-base'>Halmstad, Sweden</p>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;