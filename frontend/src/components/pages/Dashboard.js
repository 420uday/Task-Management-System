import React, { useContext, useEffect } from 'react';
import TaskForm from '../tasks/TaskForm';
import Tasks from '../tasks/Tasks';
import TaskContext from '../../context/task/TaskContext';
import AuthContext from '../../context/auth/AuthContext';
import Spinner from '../layout/Spinner';

const Dashboard = () => {
  const taskContext = useContext(TaskContext);
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;
  const { getTasks, loading } = taskContext;

  useEffect(() => {
    loadUser();
    getTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <div className="task-form-container">
          <TaskForm />
        </div>
        <div className="tasks-container">
          {loading ? <Spinner /> : <Tasks />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;