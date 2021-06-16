import React from 'react';
import './Task.css';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

const Task = ({task, handleTaskClick, handleTaskRemoveItem}) => {
    const history = useHistory();

    const handleTaskDetails = () => {
     history.push(`/${task.title}`)   
    }

    return (
        <div
            className="task-container"
            style={task.completed ? { textDecoration: "line-through" } : {} }
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
                    className="detail-task-button"
                    onClick={handleTaskDetails}
                    title="detalhes da tarefa"
                >
                    <CgInfo />
                </button>

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