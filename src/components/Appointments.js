import React, { useState, useEffect } from 'react';
import './Appointments.css';
import editIcon from '../pictures/edit-2.svg';
import deleteIcon from '../pictures/erase.svg';

function Appointments() {
    const [appointments, setAppointments] = useState(() => {
        const savedAppointments = localStorage.getItem('appointmentsData');
        return savedAppointments ? JSON.parse(savedAppointments) : [];
    });
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    useEffect(() => {
        localStorage.setItem('appointmentsData', JSON.stringify(appointments));
    }, [appointments]);

    const addOrEditAppointment = () => {
        if (date && time && description) {
            const newAppointment = { date, time, description };
            let newAppointments = [];
            if (editIndex >= 0) {
                newAppointments = appointments.map((app, index) =>
                    index === editIndex ? newAppointment : app
                );
            } else {
                newAppointments = [...appointments, newAppointment];
            }
            newAppointments.sort((a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`));
            setAppointments(newAppointments);
            resetFields();
        }
    };

    const resetFields = () => {
        setDate('');
        setTime('');
        setDescription('');
        setEditIndex(-1);
    };

    const startEdit = (index) => {
        setEditIndex(index);
        setDate(appointments[index].date);
        setTime(appointments[index].time);
        setDescription(appointments[index].description);
    };

    const deleteAppointment = index => {
        const newAppointments = appointments.filter((_, i) => i !== index);
        setAppointments(newAppointments);
    };

    const groupAppointmentsByDate = () => {
        return appointments.reduce((acc, curr) => {
            (acc[curr.date] = acc[curr.date] || []).push(curr);
            return acc;
        }, {});
    };

    const groupedAppointments = groupAppointmentsByDate();

    return (
        <div className="appointment-container">
            <h1 className="appointment-title">Appointments</h1>
            <div className="input-container">
                <input type="date" className="appointment-input" value={date} min={new Date().toISOString().split('T')[0]} onChange={(e) => setDate(e.target.value)} />
                <input type="time" className="appointment-input" value={time} onChange={(e) => setTime(e.target.value)} />
                <input type="text" className="appointment-input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <button onClick={addOrEditAppointment} className="add-appointment-button">
                    {editIndex >= 0 ? 'Save Changes' : 'Add'}
                </button>
            </div>
            {Object.entries(groupedAppointments).map(([date, apps]) => (
                <div key={date}>
                    <h2>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
                    <ul className="appointment-list">
                        {apps.sort((a, b) => a.time.localeCompare(b.time)).map((app, index) => (
                            <li key={index} className="appointment-item">
                                {app.time} - {app.description}
                                <div className="icon-container">
                                    <button className="icon-button" onClick={() => startEdit(index)}>
                                        <img src={editIcon} alt="Edit" />
                                    </button>
                                    <button className="icon-button" onClick={() => deleteAppointment(index)}>
                                        <img src={deleteIcon} alt="Delete" />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Appointments;
