import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

const PrivateRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  if (loading) return <h1>Loading...</h1>;
  
  return isAuthenticated ? children : <Navigate to='/login' />;
};

export default PrivateRoute;

// src/components/tasks/Tasks.js (was missing from previous code)
import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import TaskContext from '../../context/task/TaskContext';

const Tasks = () => {
  const taskContext = useContext(TaskContext);
  const { tasks } = taskContext;

  if (tasks.length === 0) {
    return <h4>No tasks found. Add a task to get started!</h4>;
  }

  return (
    <div className="task-grid">
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;