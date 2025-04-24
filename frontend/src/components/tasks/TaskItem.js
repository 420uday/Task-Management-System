import React, { useContext } from 'react';
import TaskContext from '../../context/task/TaskContext';

const TaskItem = ({ task }) => {
  const taskContext = useContext(TaskContext);
  const { deleteTask, setCurrent, clearCurrent } = taskContext;

  const { _id, title, description, status, priority, dueDate } = task;

  const onDelete = () => {
    deleteTask(_id);
    clearCurrent();
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className={`card task-priority-${priority}`}>
      <h3 className="text-primary text-left">{title}</h3>
      <div className={`task-status status-${status}`}>{status}</div>
      <p>{description}</p>
      <p>
        <strong>Priority: </strong> {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </p>
      <p>
        <strong>Due Date: </strong> {formatDate(dueDate)}
      </p>
      <div className="task-buttons">
        <button className="btn btn-dark btn-sm" onClick={() => setCurrent(task)}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;