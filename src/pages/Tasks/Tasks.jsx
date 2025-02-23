import React, { useEffect, useState } from 'react';
import Task from '../../components/Task';
import axios from 'axios';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const loadTasks = async () => {
            const resTasks = await axios.get('https://task-management-server-f6lzut9wa-shifats-projects-de733d81.vercel.app/tasks');
            setTasks(resTasks.data); 
        };
        loadTasks();
    }, []);
    return (
        <div>
            <section className='mb-16'>
                <h1 className='text-3xl font-bold mb-4'>All Tasks-</h1>
                <div className='grid grid-cols-3 gap-3 mx-auto'>
                    {tasks.map(task => (
                        <Task key={task._id} task={task}></Task>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Tasks;