import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import axios from 'axios';
import Task from '../../components/Task';
import LatestTask from '../../components/LatestTask';

const Home = () => {
    const [latest, setLatest] = useState([]);
    const [toDo, setToDo] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [taskDone, setTaskDone] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            const resLatestTask = await axios.get('https://task-management-server-pi-three.vercel.app/latestTask');
            setLatest(resLatestTask.data); 

            const resToDo = await axios.get('https://task-management-server-pi-three.vercel.app/toDo');
            setToDo(resToDo.data);

            const resInProgress = await axios.get('https://task-management-server-pi-three.vercel.app/inProgress');
            setInProgress(resInProgress.data);

            const resTaskDone = await axios.get('https://task-management-server-pi-three.vercel.app/taskDone');
            setTaskDone(resTaskDone.data);
        };
        loadTasks();
    }, []);

    return (
        <div>
            <Banner></Banner>
            <section className='my-16'>
                <h1 className='text-3xl font-bold mb-4'>Latest Tasks-</h1>
                <div className='grid grid-cols-4 gap-3 mx-auto'>
                    {latest.map(task => (
                        <LatestTask key={task._id} task={task}></LatestTask>
                    ))}
                </div>
            </section>

            {/* All Tasks */}
            <section>
                {/* To-Do */}
                <h1 className='text-3xl font-bold mb-4 flex justify-center'>To Do</h1>
                <div className='grid grid-cols-3 gap-3 my-10'>
                    {toDo.map(task => (
                        <Task key={task._id} task={task}></Task>
                    ))}
                </div>
            </section>
            <section>
                {/* In Progress */}
                <h1 className='text-3xl font-bold mb-4 flex justify-center'>In Progress</h1>
                <div className='grid grid-cols-3 gap-3 my-10'>
                    {inProgress.map(task => (
                        <Task key={task._id} task={task}></Task>
                    ))}
                </div>
            </section>
            <section>
                {/* Task Completed */}
                <h1 className='text-3xl font-bold mb-4 flex justify-center'>Task Completed</h1>
                <div className='grid grid-cols-3 gap-3 my-10'>
                    {taskDone.map(task => (
                        <Task key={task._id} task={task}></Task>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;