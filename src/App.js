import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <div>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Add a new task" 
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li 
              key={index} 
              onClick={() => toggleTaskCompletion(index)} 
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;