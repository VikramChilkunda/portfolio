import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-[rgba(100,100,100,0)] shadow-md">
            <div className="max-w-[80%] mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">
                    <a href={`/`}>Vikram Chilkunda</a>
                </h1>
                <div>
                    <a href={`/`} className="text-gray-600 hover:text-gray-800 mx-4">Home</a>
                    <a href={`/experience`} className="text-gray-600 hover:text-gray-800 mx-4">Experience</a>
                    <a href={`/locations`} className="text-gray-600 hover:text-gray-800 mx-4">Locations</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
