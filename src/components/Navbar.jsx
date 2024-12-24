import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const lists = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/rooms'>Rooms</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            {
                user && <>
                    <li><NavLink to='/my-bookings'>My Bookings</NavLink></li>
                </>
            }
        </>
    );

    const { pathname } = useLocation();

    return (
        <div className={`bg-base-100 ${pathname === '/auth/login' || pathname === '/auth/register' ? 'h-36' : ''} container mx-auto px-2`}>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-1 sm:px-4">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                    {user ? (
                        <div className="flex items-center gap-1 md:gap-3 justify-center">
                            {/* User Photo with Hover Tooltip */}
                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                <img
                                    className="w-7 sm:w-9 rounded-full cursor-pointer border-4 border-primary"
                                    src={user?.photoURL}
                                    alt="Avatar"
                                />
                            </div>
                            {/* Logout Button */}
                            <Link
                                onClick={logout}
                                to="/"
                                className="btn btn-primary px-1 sm:px-5 text-white rounded-lg min-h-9 h-9 text-[12px] sm:text-sm mx-1 sm:mx-2"
                            >
                                Log out
                            </Link>
                        </div>
                    ) : (
                        <Link
                            to="/auth/login"
                            className="btn btn-primary sm:px-5 text-white rounded-lg min-h-9 h-9 text-sm"
                        >
                            Login / Register
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
