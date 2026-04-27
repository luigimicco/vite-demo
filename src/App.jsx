import React, { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState(['Fai la spesa', 'Studio React', 'Pubblica su GitHub Pages']);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks(prev => [...prev, newTask]);
      setNewTask('');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Mini Task List</h1>
      <p style={{ color: '#888' }}>
        Progetto di esempio per GitHub Pages
      </p>

      <div style={{ margin: '1rem 0' }}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Inserisci nuova task"
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            marginRight: '0.5rem',
            width: '240px'
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Aggiungi
        </button>
      </div>

      <ul style={{ margin: '1rem 0' }}>
        {tasks.map((task, i) => (
          <li key={i} style={{ margin: '0.5rem 0' }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
