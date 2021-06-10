import React, { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'jogar lixo',
      completed: false
    },
    {
      id: '1',
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

  return (
    <>
      <div className="container">
        <h1>Minhas tarefas</h1>
        <AddTask handleTaskAdditem={handleTaskAdditem}/>
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};
 
export default App;
