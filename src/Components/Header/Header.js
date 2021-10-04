import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <NavLink to="/home" className="text-2xl text-white font-bold">Edutor</NavLink>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/home" activeClassName="bg-gray-900">Home</NavLink>

                                <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/courses" activeClassName="bg-gray-900">Courses</NavLink>

                                <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/about" activeClassName="bg-gray-900">About</NavLink>

                                <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/contact" activeClassName="bg-gray-900">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">

                    <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/home" activeClassName="bg-gray-900">Home</NavLink>

                    <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/courses" activeClassName="bg-gray-900">Courses</NavLink>

                    <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/about" activeClassName="bg-gray-900">About</NavLink>

                    <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/contact" activeClassName="bg-gray-900">Contact</NavLink>

                </div>
            </div>
        </nav>
    );
};

export default Header;