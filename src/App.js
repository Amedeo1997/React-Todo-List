import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import TodoList from './components/TodoList';
import ShoppingList from './components/ShoppingList';
import Appointments from './components/Appointments';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <header className="app-header">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/todo" style={({ isActive }) => ({ color: isActive ? '#000' : '#ccc' })}>Todo List</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shopping" style={({ isActive }) => ({ color: isActive ? '#000' : '#ccc' })}>Shopping List</NavLink>
                            </li>
                            <li>
                                <NavLink to="/appointments" style={({ isActive }) => ({ color: isActive ? '#000' : '#ccc' })}>Appointments</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path="/todo" element={<TodoList />} />
                    <Route path="/shopping" element={<ShoppingList />} />
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/" element={<TodoList />} />  {/* Default route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
