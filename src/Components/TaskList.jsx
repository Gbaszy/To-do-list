/* eslint-disable react/prop-types */

import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
      ))}
    </div>
  );
};

export default TaskList;
