import React from 'react';
import Task from './Task';

const Tasks = ({tasks, handleTaskClick, handleTaskRemoveItem}) => {
    return (
        <>
            {tasks.map((t) => (
                <Task
                    task={t}
                    handleTaskClick={handleTaskClick}
                    handleTaskRemoveItem={handleTaskRemoveItem}
                />
            ))}
        </>
    );
}

export default Tasks;