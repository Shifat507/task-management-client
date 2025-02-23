import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import axios from 'axios';
import Task from '../../components/Task';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        const loadTasks = async()=>{
            const res = await axios.get('http://localhost:5000/tasks');
            setTasks(res.data)
        }
        loadTasks();
    },[])
    console.log(tasks);
    return (
        <div>
            <Banner></Banner>
            <section className='my-16'>
                <h1 className='text-3xl font-bold mb-4'>Lates Tasks-</h1>
                <div className='grid grid-cols-4 gap-3 mx-auto'>
                    <div className="card bg-orange-300 w-72">
                        <div className="card-body">
                            <div>
                                <h2 className="card-title text-2xl">Playing Time</h2>
                                <span className='text-sm font-semibold my-0'>12/3/2025</span>
                            </div>
                            <p>Have to play more and more</p>
                            <div className="card-actions justify-between items-center">
                                <div className="badge badge-outline">To-do</div>
                                <button className="bg-base-200 px-4 py-1 rounded-md hover:bg-base-300 text-sm font-semibold">Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-orange-300 w-72">
                        <div className="card-body">
                            <div>
                                <h2 className="card-title text-2xl">Playing Time</h2>
                                <span className='text-sm font-semibold my-0'>12/3/2025</span>
                            </div>
                            <p>Have to play more and more</p>
                            <div className="card-actions justify-between items-center">
                                <div className="badge badge-outline">To-do</div>
                                <button className="bg-base-200 px-4 py-1 rounded-md hover:bg-base-300 text-sm font-semibold">Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-orange-300 w-72">
                        <div className="card-body">
                            <div>
                                <h2 className="card-title text-2xl">Playing Time</h2>
                                <span className='text-sm font-semibold my-0'>12/3/2025</span>
                            </div>
                            <p>Have to play more and more</p>
                            <div className="card-actions justify-between items-center">
                                <div className="badge badge-outline">To-do</div>
                                <button className="bg-base-200 px-4 py-1 rounded-md hover:bg-base-300 text-sm font-semibold">Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-orange-300 w-72">
                        <div className="card-body">
                            <div>
                                <h2 className="card-title text-2xl">Playing Time</h2>
                                <span className='text-sm font-semibold my-0'>12/3/2025</span>
                            </div>
                            <p>Have to play more and more</p>
                            <div className="card-actions justify-between items-center">
                                <div className="badge badge-outline">To-do</div>
                                <button className="bg-base-200 px-4 py-1 rounded-md hover:bg-base-300 text-sm font-semibold">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Tasks */}
            <section>
                {/* To-Do */}
                <h1 className='text-3xl font-bold mb-4 flex justify-center'>To Do</h1>
                <div className='grid grid-cols-3 gap-3'>
                    {
                        tasks.map(task => <Task key={task._id} task={task}></Task>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;