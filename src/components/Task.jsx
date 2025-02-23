import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
    const { _id, title, description, status, date } = task;

    const handleDelete = async (id) => {
        try {
            console.log("Deleting task with ID:", id);
            const res = await axios.delete(`http://localhost:5000/task/${id}`);
            console.log("Delete Response:", res.data);
            
            if (res.status === 200) {
                alert("Task deleted successfully!");
                window.location.reload(); // Refresh the page (or use state management)
            }
        } catch (error) {
            console.error("Error deleting task:", error);
            alert("Failed to delete task. Try again.");
        }
    };

    return (
        <div className="w-80 mx-auto">
            <div className="bg-gradient-to-r from-orange-400 to-orange-300 shadow-lg rounded-xl overflow-hidden">
                <div className="p-5 space-y-3">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold text-white">{title}</h2>
                        <span className="text-xs font-medium text-gray-100">{date}</span>
                    </div>
                    <p className="text-white text-sm">{description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <div className="badge badge-outline border-white text-white px-3 py-1 rounded-full">{status}</div>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-xs font-semibold shadow-md transition-all duration-300"
                        >
                            Delete
                        </button>
                        <Link
                            to={`/updateTask/${_id}`}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-1 rounded-md text-xs font-semibold shadow-md transition-all duration-300"
                        >
                            Update
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;
