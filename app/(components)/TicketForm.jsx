'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const startingTicketData = {
    title: '',
    description: '',
    priority: '1',
    progress: '0',
    status: 'not started',
    category: 'Hardware Problem',
};

function TicketForm() {

    const router = useRouter();

    const [formData, setFormData] = useState(startingTicketData);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/tickets', {
            method: 'POST',
            body: JSON.stringify({ formData }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            throw new Error("Failed to create ticket");
        }

        router.refresh();
        router.push('/');
    };

    return (
        <div className="flex justify-center">
            <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
                <h3>Create Your Ticket</h3>
                <label>Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required={true} />

                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required={true} rows="5" />

                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleChange} required={true}>
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Software Problem">Software Problem</option>
                    <option value="Network Problem">Network Problem</option>
                </select>

                <label>Priority</label>
                <select name="priority" value={formData.priority} onChange={handleChange} required={true}>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>

                <label>Progress</label>
                <input type="range" name="progress" value={formData.progress} onChange={handleChange} required={true} min="0" max="100" />

                <label>Status</label>
                <select name="status" value={formData.status} onChange={handleChange} required={true}>
                    <option value="not started">Not Started</option>
                    <option value="in progress">In Progress</option>
                    <option value="done">Done</option>
                </select>


                <button type="submit" className="btn">Create Ticket</button>

            </form>
        </div>
    )
}

export default TicketForm