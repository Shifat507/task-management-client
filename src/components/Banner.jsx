import React from 'react';
import bannerImg from '../assets/banner/project-banner.jpeg'
import { IoIosAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-orange-100 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-md rounded-lg shadow-2xl md:mr-4" />
                <div className='px-4'>
                    <h1 className="text-5xl font-bold">Notify</h1>
                    <p className="py-6 font-semibold">
                        Boost your productivity with Notify—your all-in-one task management solution. Plan, track, and accomplish your goals effortlessly!
                    </p>
                    <Link to="/addTask">
                        <button className="btn bg-orange-500 hover:bg-orange-400 text-white"><IoIosAddCircle size={25} /> Add New Task</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;