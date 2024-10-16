import  { useState } from 'react';

// eslint-disable-next-line react/prop-types
const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ id: '', name: '', description: '', completed: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      addTask({ ...task, id: Date.now() });
      setTask({ id: '', name: '', description: '', completed: false });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
      />
      <input
        type="text"
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
