import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const lists = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/rooms'>Rooms</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/my-bookings'>My Bookings</NavLink></li>
    </>

    return (
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {lists}
                    </ul>
                </div>
                <a className="btn btn-ghost text-base sm:text-xl font-bold text-primary px-1 sm:px-4">Haven Hotel & Suites</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end">
                <Link
                    to="/auth/login"
                    className="btn btn-accent px-2 sm:px-5 text-white rounded-lg min-h-9 h-9 text-sm"
                >
                    Login / Register
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
