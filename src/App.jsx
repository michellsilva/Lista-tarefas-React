import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import {v4 as Uuidv4} from 'uuid';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';

import TaskDetails from './components/TaskDetails';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async() => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      );
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleTaskAdditem = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        id: Uuidv4(),
        title: taskTitle,
        completed: false
      }
    ]
    
    setTasks(newTasks);
    console.log('novo', newTasks)
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
      <Router>
        <div className="container">
          <Header/>
          <Route
            path="/"
            exact
            render={() => (
              <>
                <AddTask handleTaskAdditem={handleTaskAdditem} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskRemoveItem={handleTaskRemoveItem}
                />
              </>
            )}
          />
          <Route
            path="/:taskTitle"
            exact
            component={TaskDetails}
          />
        </div>
      </Router>
    </>
  );
};
 
export default App;
