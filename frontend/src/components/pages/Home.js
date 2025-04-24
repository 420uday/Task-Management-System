import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Task Management System</h1>
        <p>
          Organize your work and life. Increase your productivity by managing your tasks efficiently.
        </p>
        <div className="buttons">
          <Link to="/register" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <h3>Track Your Tasks</h3>
          <p>Keep track of all your tasks in one place. Never miss a deadline again.</p>
        </div>
        <div className="feature">
          <h3>Prioritize Work</h3>
          <p>Organize tasks by priority. Focus on what matters most.</p>
        </div>
        <div className="feature">
          <h3>Collaborate</h3>
          <p>Share tasks with team members and collaborate effectively.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;