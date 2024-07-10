import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({task}) => {
  return (
    <div className='Todo'>
      <p>{task.task}</p>

      <div>
        <FontAwesomeIcon icon={faPen} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    
    </div>
  )
}
