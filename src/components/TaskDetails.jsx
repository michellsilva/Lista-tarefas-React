import React from 'react';
import Button from './Button';
import { useParams } from 'react-router-dom';
import './TaskDetails.css';
import { useHistory } from 'react-router-dom';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button
                    onClick={handleBackButtonClick}
                >voltar
                </Button>
            </div>
            <div className="task-details-container">
                <p><h2>{params.taskTitle}</h2></p>
                <p>
                    texto para testar o componenente de detalhes,
                    e dai funcionou???
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;