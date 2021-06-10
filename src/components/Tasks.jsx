import React from 'react';
import Task from './Task';

const Tasks = ({tasks, handleTaskClick}) => {
    return (
        <>
            {tasks.map((t) => (
                <Task task={t} handleTaskClick={handleTaskClick}/>
            ))}
        </>
    );
}

export default Tasks;