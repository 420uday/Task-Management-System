import React, { useState, useContext, useEffect } from 'react';
import TaskContext from '../../context/task/TaskContext';

const TaskForm = () => {
  const taskContext = useContext(TaskContext);
  
  const { addTask, updateTask, clearCurrent, current } = taskContext;

  useEffect(() => {
    if (current !== null) {
      setTask(current);
    } else {
      setTask({
        title: '',
        description: '',
        status: 'pending',
        priority: 'medium',
        dueDate: ''
      });
    }
  }, [taskContext, current]);

  const [task, setTask] = useState({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
    dueDate: ''
  });

  const { title, description, status, priority, dueDate } = task;

  const onChange = e =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addTask(task);
    } else {
      updateTask(task);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit} className="card">
      <h2 className="text-primary">
        {current ? 'Edit Task' : 'Add Task'}
      </h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          placeholder="Description"
          name="description"
          value={description}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select name="status" value={status} onChange={onChange}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="priority">Priority</label>
        <select name="priority" value={priority} onChange={onChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type="submit"
          value={current ? 'Update Task' : 'Add Task'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default TaskForm;