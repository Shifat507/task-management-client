import React from 'react';

const LatestTask = ({task}) => {
    const {title, date, description, status} = task;
    return (
        <div className="card bg-orange-300 w-72">
            <div className="card-body">
                <div>
                    <h2 className="card-title text-2xl">{title}</h2>
                    <span className='text-sm font-semibold my-0'>{date}</span>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-between items-center">
                    <div className="badge badge-outline">{status}</div>
                    <button className="bg-base-200 px-4 py-1 rounded-md hover:bg-base-300 text-sm font-semibold">Edit</button>
                </div>
            </div>
        </div>
    );
};

export default LatestTask;