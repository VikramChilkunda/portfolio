import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">My Portfolio</h1>
                <div>
                    <a href={`/`} className="text-gray-600 hover:text-gray-800 mx-4">Home</a>
                    <a href={`/experience`} className="text-gray-600 hover:text-gray-800 mx-4">Experience</a>
                    <a href="/contact" className="text-gray-600 hover:text-gray-800 mx-4">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
