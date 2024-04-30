import React, { useState, useEffect } from 'react';
import './TodoList.css'; // Make sure the CSS file path is correct
import editIcon from '../pictures/edit-2.svg';  // Importa l'icona di modifica
import eraseIcon from '../pictures/erase.svg';  // Importa l'icona di cancellazione

function TodoList() {
    const [tasks, setTasks] = useState(() => {
        // Retrieve tasks saved in localStorage at startup
        const savedTasks = localStorage.getItem('todoTasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [input, setInput] = useState('');

    useEffect(() => {
        // Save tasks to localStorage whenever they change
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (input) {
            const newTasks = [...tasks, { text: input, completed: false, edit: false }];
            setTasks(newTasks);
            setInput('');
        }
    };

    const toggleCompletion = index => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasks);
    };

    const toggleEdit = index => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, edit: !task.edit };
            }
            return task;
        });
        setTasks(newTasks);
    };

    const handleEdit = (event, index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, text: event.target.value };
            }
            return task;
        });
        setTasks(newTasks);
    };

    const deleteTask = index => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };
      return (
        <div className="todo-list-container">
            <h1 className="todo-title">To Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    className="todo-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={addTask} className="add-task-button">Add</button>
            </div>
            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <li key={index} className={`todo-item ${task.edit ? 'editing' : ''}`}>
                        <input
                            type="checkbox"
                            className="todo-checkbox"
                            checked={task.completed}
                            onChange={() => toggleCompletion(index)}
                        />
                        {task.edit ? (
                            <input
                                type="text"
                                value={task.text}
                                onChange={(e) => handleEdit(e, index)}
                            />
                        ) : (
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.text}
                            </span>
                        )}
                        <div className="icon-container">
                            <button className="icon-button" onClick={() => toggleEdit(index)}>
                                <img src={editIcon} alt="Edit" />
                            </button>
                            <button className="icon-button" onClick={() => deleteTask(index)}>
                                <img src={eraseIcon} alt="Erase" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
