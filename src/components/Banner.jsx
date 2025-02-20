import React from 'react';
import bannerImg from '../assets/banner/project-banner.jpeg'
import { IoIosAddCircle } from 'react-icons/io';

const Banner = () => {
    return (
        <div className="hero bg-orange-100 min-h-72">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-md rounded-lg shadow-2xl" />
                <div className='px-4'>
                    <h1 className="text-5xl font-bold">Notify</h1>
                    <p className="py-6 font-semibold">
                        Boost your productivity with Notify—your all-in-one task management solution. Plan, track, and accomplish your goals effortlessly!
                    </p>
                    <button className="btn bg-orange-400 hover:bg-orange-500"><IoIosAddCircle size={25} /> Add New Task</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;