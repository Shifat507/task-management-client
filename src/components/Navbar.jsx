import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const links = <>
        <li className='mx-1'><NavLink to="/">Home</NavLink></li>
        <li className='mx-1'><NavLink to="/addTask">Add A Task</NavLink></li>
        <li className='mx-1'><NavLink to="/tasks">All Tasks</NavLink></li>

    </>

    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(err => { console.log('Error: ', err); })
    }
    return (
        <div className="navbar bg-base-100">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Notify</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-8 mx-3 rounded-full ring ring-offset-2">
                                <img src={user.photoURL} />
                            </div>
                        </div>
                        <button onClick={handleLogOut} className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-white font-semibold cursor-pointer">Logout</button>
                    </> : <Link to="/login" className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-white font-semibold cursor-pointer">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;