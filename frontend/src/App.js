import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/pages/Dashboard';
import PrivateRoute from './utils/PrivateRoute';
import AuthState from './context/auth/AuthState';
import TaskState from './context/task/TaskState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

// Check for token
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <TaskState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  } 
                />
              </Routes>
            </div>
          </div>
        </Router>
      </TaskState>
    </AuthState>
  );
};

export default App;