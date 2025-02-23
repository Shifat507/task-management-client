import axios from 'axios';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [status, setStatus] = useState('To Do');

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        // Get the current date and time
        const currentDate = new Date().toLocaleDateString(); 
        const currentTime = new Date().toLocaleTimeString();

        // Create the task object
        const newTask = {
            title: taskTitle,
            description: taskDescription,
            status: status,
            date: currentDate,
            time: currentTime,
        };

        const response = await axios.post('http://localhost:5000/addTask', newTask)
        
        // console.log('Task added successfully:', response.data);
        if(response.data.insertedId){
            Swal.fire({
                title: "Task Added Successfully",
                icon: "success",
                draggable: true
              });
              navigate('/')
        }
        

        // Log the task object (you can replace this with an API call or state update)
        console.log('New Task:', newTask);

        // Clear the form fields
        setTaskTitle('');
        setTaskDescription('');
        setStatus('To Do');
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-base-200 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-6">Update Task</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Task Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter task title"
                        className="input input-bordered w-full"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        required
                    />
                </div>

                {/* Task Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Task Description</span>
                    </label>
                    <textarea
                        placeholder="Enter task description"
                        className="textarea textarea-bordered w-full h-32"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        required
                    ></textarea>
                </div>

                {/* To Do Status */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Status</span>
                    </label>
                    <select
                        className="select select-bordered w-full"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option>To Do</option>
                        <option>In Progress</option>
                        <option>Done</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button type="submit" className="btn bg-orange-500 hover:bg-orange-400 text-white w-full">
                        <FaPlus className="mr-2" />
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;