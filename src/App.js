import React, { useState } from 'react';
import './App.css';
import Task from './Components/Task';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskValue) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), value: taskValue }]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const editTask = (id) => {
    const newValue = prompt('Edit your task:');
    if (newValue) {
      setTasks((prevTasks) => prevTasks.map(task =>
        task.id === id ? { ...task, value: newValue } : task
      ));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const taskValue = event.target.elements.task.value;

    if (taskValue.trim()) {
      addTask(taskValue);
      event.target.reset(); 
    }
  }

  return (
    <>
      <div className="bg-[#a8808c] p-8 outer">
        <div className='bg-white inner'>
          <h1 className='text-center md:text-5xl sm:text-3xl text-xl font-bold py-8 text-[#4b4453]'>ToDo List</h1>
          <form className='w-2/3 flex mx-auto ' onSubmit={submitHandler}>
            <input type="text" placeholder='Enter Task' name="task" className='w-full p-4 shadow-lg outline-none w-2/3' />
            <button className='w-1/3 bg-[#4d8076] ms-5 rounded-lg text-white text-xl' type='submit'>Add Task</button>
          </form>

          <ul className='mt-8 w-2/3 mx-auto'>
            {tasks.map(task => (
              <Task key={task.id} id={task.id} value={task.value} onDelete={deleteTask} onEdit={editTask}/>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
