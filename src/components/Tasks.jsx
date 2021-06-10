import React from 'react';
import Task from './Task';

const Tasks = ({tasks}) => {
    return (
        <>
            {tasks.map((t) => (
                <Task task={t}/>
            ))}
        </>
    );
}

export default Tasks;