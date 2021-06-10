import React from 'react';
import './Task.css';
import { CgClose } from 'react-icons/cg';

const Task = ({task, handleTaskClick, handleTaskRemoveItem}) => {
    return (
        <div
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid black" } : {} }
        >
            <div
                className="task-title"
                onClick={() => handleTaskClick(task.id)}
                title={task.completed ? "cancelar tarefa concluída" : "marcar tarefa como concluída" }
            >
                {task.title}
            </div>

            <div className="button-container">
                <button
                    className="remove-task-button"
                    onClick={() => handleTaskRemoveItem(task.id)}
                    title="remover tarefa da lista"
                >
                    <CgClose />
                </button>
            </div>
        </div>
    );
}
 
export default Task;