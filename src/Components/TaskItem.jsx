/* eslint-disable react/prop-types */
import { useState } from 'react';

const TaskItem = ({ task, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    updateTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div style={task.completed ? styles.completedTask : styles.task}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTask.name}
            onChange={(e) => setUpdatedTask({ ...updatedTask, name: e.target.value })}
          />
          <input
            type="text"
            value={updatedTask.description}
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => updateTask({ ...task, completed: !task.completed })}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  task: {
    padding: '10px',
    border: '1px solid #ccc',
    margin: '10px 0',
  },
  completedTask: {
    padding: '10px',
    border: '1px solid #ccc',
    margin: '10px 0',
    textDecoration: 'line-through',
    color: 'gray',
  },
};

export default TaskItem;
