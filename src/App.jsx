import React, { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'jogar lixo',
      completed: false
    },
    {
      id: '2',
      title: 'limpar o banheiro',
      completed: false
    }
  ]);

  const handleTaskAdditem = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        id: Math.random(10),
        title: taskTitle,
        completed: false
      }
    ]

    setTasks(newTasks);
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((t) => {
      if (t.id === taskId) return { ...t, completed: !t.completed }

      return t;
    });

    setTasks(newTasks);
  }

  const handleTaskRemoveItem = (taskId) => {
    const newTasks = tasks.filter(t => t.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <>
      <div className="container">
        <Header/>
        <AddTask handleTaskAdditem={handleTaskAdditem} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskRemoveItem={handleTaskRemoveItem}
        />
      </div>
    </>
  );
};
 
export default App;
