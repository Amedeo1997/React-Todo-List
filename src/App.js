import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import TodoList from './components/TodoList';
import ShoppingList from './components/ShoppingList';
import Appointments from './components/Appointments';
import './App.css';
import shoppingIcon from './pictures/shopping-cart.svg';
import appointmentsIcon from './pictures/calendar-schedule.svg';
import todoIcon from './pictures/basic-todolist-pen.svg';

function App() {
  return (
      <Router>
          <div className="app">
              <header className="app-header">
                  <nav>
                      <ul>
                          <li>
                              <NavLink to="/todo" className="nav-link">
                                  <img src={todoIcon} alt="Todo" className="nav-icon" />
                              </NavLink>
                          </li>
                          <li>
                              <NavLink to="/shopping" className="nav-link">
                                  <img src={shoppingIcon} alt="Shopping" className="nav-icon" />
                              </NavLink>
                          </li>
                          <li>
                              <NavLink to="/appointments" className="nav-link">
                                  <img src={appointmentsIcon} alt="Appointments" className="nav-icon" />
                              </NavLink>
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
